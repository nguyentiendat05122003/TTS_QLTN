import { Outlet, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const ErrorBoundaryRoutes = ({ children }) => {
  return (
    <Routes>
      <Route
        element={
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        }
      >
        {children}
      </Route>
    </Routes>
  );
};
export { ErrorBoundaryRoutes };
