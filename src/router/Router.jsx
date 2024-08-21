import { Route } from "react-router-dom";
import { ErrorBoundaryRoutes } from "../components/base/error/ErrorBoundaryRoutes";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import DefaultLayout from "../layouts/DefaultLayout";
import { KhachHang } from "../pages/CaiDat/KhachHang";

import { LoaiBienBan } from "../pages/CaiDat/LoaiBienBan";
import LoaiThietBi from "../pages/CaiDat/LoaiThietBi";

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/khachhang',
    element: <KhachHang />
  },
  {
    path: '/loaithietbi',
    element: <LoaiThietBi />
  },
  {
    path: '/loaibienban',
    element: <LoaiBienBan />
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
