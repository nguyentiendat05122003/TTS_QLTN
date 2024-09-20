import { Route } from 'react-router-dom';
import { ErrorBoundaryRoutes } from '../components/base/error/ErrorBoundaryRoutes';
import DefaultLayout from '../layouts/DefaultLayout';
import { KhachHang } from '../pages/CaiDat/KhachHang';
import { LoaiBienBan } from '../pages/CaiDat/LoaiBienBan';
import LoaiThietBi from '../pages/CaiDat/LoaiThietBi';
import NhomThanhVien from '../pages/CaiDat/NhomThanhVien';
import { ThanhVien } from '../pages/CaiDat/ThanhVien';
import { TruongDuLieu } from '../pages/CaiDat/TruongDuLieu';
import Home from '../pages/Home';
import { ChiTietKySo } from '../pages/KySo/Chitietkyso';
import { DanhSachKySo } from '../pages/KySo/DanhSachKySo';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import { DanhSachYCTN } from '../pages/YeuCauThiNghiem/DanhSachYCTN';
import { GiaoNhiemVu } from '../pages/YeuCauThiNghiem/GiaoNhiemVu';

import { KhaoSatPhuongAn } from '../pages/ThucHienThiNghiem/KhaoSatPhuongAn';
import { ChiTietThiNghiem } from '../pages/YeuCauThiNghiem/ChiTietThiNghiem';
import { NhapKhoiLuong } from '../pages/YeuCauThiNghiem/NhapKhoiLuong';

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
        path: '/ChiTietThiNghiem',
        element: <ChiTietThiNghiem />,
    },
    ////////////////////////////
    {
        path: '/YeuCauThiNghiem',
        element: <DanhSachYCTN />,
    },
    {
        path: '/GiaoNhiemVu',
        element: <GiaoNhiemVu />,
    },
    {
        path: '/khao-sat-phuong-an',
        element: <KhaoSatPhuongAn />,
    },
    {
        path: '/khao-sat-phuong-an/:id',
        element: <KhaoSatPhuongAn />,
    },
    {
        path: '/KySo',
        element: <DanhSachKySo />,
    },
    {
        path: '/Chitietkyso',
        element: <ChiTietKySo />,
    },
    {
        path: '/NhapKhoiLuong',
        element: <NhapKhoiLuong />,
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
