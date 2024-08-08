import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return JSON.parse(sessionStorage.getItem("logined"));
  });

  const setLogin = () => {
    setIsAuthenticated(true);
  };

  const setlogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("UserId");
    sessionStorage.removeItem("logined");
    sessionStorage.removeItem("roles");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setLogin, setlogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
