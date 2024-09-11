import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import React, { useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import loginService from '../services/loginService';
import { useAuth } from '../context/AuthContext';
import { Toast } from 'primereact/toast';
import { ProgressSpinner } from 'primereact/progressspinner';

const LoginPage = () => {
    const { setLogin } = useAuth();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const toastTopRight = useRef(null);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const redirectRouter = searchParams.get('return') || '/';
    const handleLogin = async () => {
        try {
            await loginService.login(username, password);
            setLogin();
            navigate(redirectRouter);
        } catch (error) {
            toastTopRight.current.show({
                severity: 'error',
                summary: 'Login Failed',
                detail: error.response.data.message,
                life: 3000,
            });
        }
    };
    return (
        <div className="flex flex-column align-items-center  justify-content-center min-h-screen bg-blue-700">
            {/* Header Section */}
            <div className="text-center text-white mb-4">
                <h1 className="text-3xl font-bold">TỔNG CÔNG TY ĐIỆN LỰC MIỀN BẮC</h1>
                <h2 className="text-xl">CÔNG TY ĐIỆN LỰC HƯNG YÊN</h2>
                <h3 className="mt-2 text-2xl font-bold text-red-500">HỆ THỐNG QUẢN LÝ THÍ NGHIỆM</h3>
            </div>
            {loading ? (
                <div className="card">
                    <ProgressSpinner
                        style={{ width: '50px', height: '50px' }}
                        strokeWidth="8"
                        fill="var(--surface-ground)"
                        animationDuration=".5s"
                    />
                </div>
            ) : (
                <div
                    style={{
                        borderRadius: '56px',
                        padding: '0.3rem',
                        background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)',
                    }}
                >
                    <div
                        className="surface-card py-6 px-5 sm:px-8"
                        style={{ borderRadius: '53px', minWidth: '550px', margin: 'auto' }}
                    > 
                        <div className="flex align-items-center justify-content-evenly mb-5">
                            <img
                                src="https://evn.com.vn/userfile/User/tcdl/images/2023/4/Logoevnngangfull.png"
                                alt="EVN Logo"
                                style={{ width: '75px' }}
                            />
                            <span className="text-2xl text-red-500">ĐĂNG NHẬP HỆ THỐNG</span>
                        </div>

                        <div>
                            <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">
                                Email
                            </label>
                            <InputText
                                id="email1"
                                type="text"
                                value={username}
                                placeholder="UserName"
                                onChange={(e) => setUserName(e.target.value)}
                                className="w-full mb-5"
                                style={{ padding: '1rem' }}
                            />

                            <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                                Password
                            </label>
                            <Password
                                inputId="password1"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                toggleMask
                                className="w-full mb-5"
                                inputClassName="w-full p-3"
                            ></Password>

                            <div className="flex align-items-center justify-content-between mb-5 gap-5"></div>
                            <Button label="Sign In" className="w-full p-3 text-xl" onClick={handleLogin}></Button>
                            <Toast ref={toastTopRight} position="top-right" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoginPage;
