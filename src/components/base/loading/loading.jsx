import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import { useAuth } from "../../../context/AuthContext";

export default function LoadingBar() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      {isAuthenticated ? (
        <>
          <div className="card">
            <ProgressSpinner
              style={{ width: "50px", height: "50px" }}
              strokeWidth="8"
              fill="var(--surface-ground)"
              animationDuration=".5s"
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
