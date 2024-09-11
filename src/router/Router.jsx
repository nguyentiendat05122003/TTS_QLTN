import { Route } from 'react-router-dom';
import { ErrorBoundaryRoutes } from '../components/base/error/ErrorBoundaryRoutes';
import PrivateRouter from './PrivateRouter';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import DefaultLayout from '../layouts/DefaultLayout';
import { KhachHang } from '../pages/CaiDat/KhachHang';
import { DanhSachYCTN } from '../pages/YeuCauThiNghiem/DanhSachYCTN';
import { GiaoNhiemVu } from '../pages/YeuCauThiNghiem/GiaoNhiemVu';
import { LoaiBienBan } from '../pages/CaiDat/LoaiBienBan';
import LoaiThietBi from '../pages/CaiDat/LoaiThietBi';
import { TruongDuLieu } from '../pages/CaiDat/TruongDuLieu';
import NhomThanhVien from '../pages/CaiDat/NhomThanhVien';
import { ThanhVien } from '../pages/CaiDat/ThanhVien';
import { DanhSachKySo } from '../pages/KySo/DanhSachKySo';
import { ChiTietKySo } from '../pages/KySo/Chitietkyso';

const routes = [
    {
        path: '/',
        element: <Home />,
    },
    //route CaiDat
    {
        path: '/KhachHang',
        element: <KhachHang />,
    },
    {
        path: '/LoaiThietBi',
        element: <LoaiThietBi />,
    },
    {
        path: '/LoaiBienBan',
        element: <LoaiBienBan />,
    },
    {
        path: '/NhomThanhVien',
        element: <NhomThanhVien />,
    },
    {
        path: '/ThanhVien',
        element: <ThanhVien />,
    },
    {
        path: '/TruongDuLieu',
        element: <TruongDuLieu />,
    },
    /////////////////////////////
    {
        path: '/YeuCauThiNghiem',
        element: <DanhSachYCTN />,
    },
    {
        path: '/GiaoNhiemVu',
        element: <GiaoNhiemVu />,
    },
    {
        path: '/KySo',
        element: <DanhSachKySo />,
    },
    {
        path: '/Chitietkyso',
        element: <ChiTietKySo />,
    },
];

const Router = () => {
    return (
        <ErrorBoundaryRoutes>
            {routes.map((r, i) => (
                <Route
                    path={r.path}
                    key={i}
                    index={true}
                    element={
                        // <PrivateRouter>
                        <DefaultLayout>{r.element}</DefaultLayout>
                        // </PrivateRouter>
                    }
                />
            ))}

            <Route path="*" element={<NotFound />} />
            <Route path="login" element={<Login />} />
        </ErrorBoundaryRoutes>
    );
};

export default Router;
