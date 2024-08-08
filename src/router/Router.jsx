import { Route } from "react-router-dom";
import { ErrorBoundaryRoutes } from "../components/base/error/ErrorBoundaryRoutes";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import DefaultLayout from "../layouts/DefaultLayout";

const Router = () => {
  return (
    <ErrorBoundaryRoutes>
      <Route
        index={true}
        element={
          <PrivateRouter>
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          </PrivateRouter>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </ErrorBoundaryRoutes>
  );
};

export default Router;
