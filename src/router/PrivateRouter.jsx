import React from "react";
import { createSearchParams, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRouter = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  if (!isAuthenticated) {
    return (
      <Navigate
        to={{
          pathname: `/login`,
          search: createSearchParams({
            return: location.pathname,
          }).toString(),
        }}
        replace={true}
        state={{ from: location }}
      />
    );
  }

  return children;
};

export default PrivateRouter;
