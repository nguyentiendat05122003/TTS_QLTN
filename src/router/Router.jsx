import { Route } from "react-router-dom";
import { ErrorBoundaryRoutes } from "../components/base/error/ErrorBoundaryRoutes";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import DefaultLayout from "../layouts/DefaultLayout";
import { DanhSachYCTN } from "../pages/YeuCauThiNghiem/DanhSachYCTN";
import { GiaoNhiemVu } from "../pages/YeuCauThiNghiem/GiaoNhiemVu";

const Router = () => {
  return (
    <ErrorBoundaryRoutes>
      <Route
        path="/"
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
      <Route
        path="/YeuCauThiNghiem"
        element={
          
            <DefaultLayout>
              <DanhSachYCTN />
            </DefaultLayout>
        
        }
      />
      <Route
        path="/GiaoNhiemVu"
        element={
            <DefaultLayout>
              <GiaoNhiemVu />
            </DefaultLayout>
        
        }
      />
      <Route path="*" element={<NotFound />} />
    </ErrorBoundaryRoutes>
  );
};

export default Router;
