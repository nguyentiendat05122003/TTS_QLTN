import { Route } from "react-router-dom";
import { ErrorBoundaryRoutes } from "../components/base/error/ErrorBoundaryRoutes";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import DefaultLayout from "../layouts/DefaultLayout";
import {KhachHang } from "../pages/CaiDat/KhachHang/KhachHang";

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/khachhang',
    element: <KhachHang />
  },
]


const Router = () => {
  return (
    <ErrorBoundaryRoutes>
      {
        routes.map((r, i) =>
          <Route
            path={r.path}
            key={i}
            index={true}
            element={
              <PrivateRouter>
                <DefaultLayout>
                  {r.element}
                </DefaultLayout>
              </PrivateRouter>
            }
          />
        )
      }
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </ErrorBoundaryRoutes>
  );
};

export default Router;
