import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import React, { useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import loginService from "../services/loginService";
import { useAuth } from "../context/AuthContext";
import { Toast } from "primereact/toast";
import { ProgressSpinner } from "primereact/progressspinner";

const LoginPage = () => {
  const { setLogin } = useAuth();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toastTopRight = useRef(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectRouter = searchParams.get("return") || "/";

  const handleLogin = async () => {
    try {
      await loginService.login(username, password);
      setLogin();
      navigate(redirectRouter);
    } catch (error) {
      toastTopRight.current.show({
        severity: "error",
        summary: "Login Failed",
        detail: error.response.data.message,
        life: 3000,
      });
    }
  };

  return (
    <div className="flex flex-column align-items-center justify-content-center">
      {loading ? (
        <div className="card">
          <ProgressSpinner
            style={{ width: "50px", height: "50px" }}
            strokeWidth="8"
            fill="var(--surface-ground)"
            animationDuration=".5s"
          />
        </div>
      ) : (
        <div
          style={{
            borderRadius: "56px",
            padding: "0.3rem",
            background:
              "linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)",
          }}
        >
          <div
            className="w-full surface-card py-8 px-5 sm:px-8"
            style={{ borderRadius: "53px" }}
          >
            <div className="text-center mb-5">
              <div className="text-900 text-3xl font-medium mb-3">
                Welcome, Isabel!
              </div>
              <span className="text-600 font-medium">Sign in to continue</span>
            </div>

            <div>
              <label
                htmlFor="email1"
                className="block text-900 text-xl font-medium mb-2"
              >
                Email
              </label>
              <InputText
                id="email1"
                type="text"
                value={username}
                placeholder="UserName"
                onChange={(e) => setUserName(e.target.value)}
                className="w-full md:w-30rem mb-5"
                style={{ padding: "1rem" }}
              />

              <label
                htmlFor="password1"
                className="block text-900 font-medium text-xl mb-2"
              >
                Password
              </label>
              <Password
                inputId="password1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                toggleMask
                className="w-full mb-5"
                inputClassName="w-full p-3 md:w-30rem"
              ></Password>

              <div className="flex align-items-center justify-content-between mb-5 gap-5"></div>
              <Button
                label="Sign In"
                className="w-full p-3 text-xl"
                onClick={handleLogin}
              ></Button>
              <Toast ref={toastTopRight} position="top-right" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
