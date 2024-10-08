import Home from '../pages/Home';
import { Route } from 'react-router-dom';
import { ErrorBoundaryRoutes } from '../components/base/error/ErrorBoundaryRoutes';
import DefaultLayout from '../layouts/DefaultLayout';
import { KhachHang } from '../pages/CaiDat/KhachHang';
import { LoaiBienBan } from '../pages/CaiDat/LoaiBienBan';
import LoaiThietBi from '../pages/CaiDat/LoaiThietBi';
import NhomThanhVien from '../pages/CaiDat/NhomThanhVien';
import { ThanhVien } from '../pages/CaiDat/ThanhVien';
import { TruongDuLieu } from '../pages/CaiDat/TruongDuLieu';

import { ChiTietKySo } from '../pages/KySo/Chitietkyso';
import { DanhSachKySo } from '../pages/KySo/DanhSachKySo';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import { DanhSachYCTN } from '../pages/YeuCauThiNghiem/DanhSachYCTN';
import { GiaoNhiemVu } from '../pages/YeuCauThiNghiem/GiaoNhiemVu';

import { KhaoSatPhuongAn } from '../pages/ThucHienThiNghiem/KhaoSatPhuongAn';
import { ChiTietThiNghiem } from '../pages/YeuCauThiNghiem/ChiTietThiNghiem';
import { NhapKhoiLuong } from '../pages/YeuCauThiNghiem/NhapKhoiLuong';
import { ThucHienThiNghiem } from '../pages/ThucHienThiNghiem/ThucHienThiNghiem';
import { SoLuongChuKy } from '../pages/BaoCao/SoLuongChuKy';
import { BanGiaoKetQua } from '../pages/ThucHienThiNghiem/BanGiaoKetQua';

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
    {
        path: '/ChiTietThiNghiem',
        element: <ChiTietThiNghiem />,
    },
    //----------- Quan ly yeu cau thi nghiem --------------//

    {
        path: '/YeuCauThiNghiem',
        element: <DanhSachYCTN />,
    },
    {
        path: '/GiaoNhiemVu',
        element: <GiaoNhiemVu />,
    },
    {
        path: '/nhap-khoi-luong',
        element: <NhapKhoiLuong />,
    },
    //----------- Thuc hien thi nghiem --------------//

    {
        path: "/khao-sat-phuong-an",
        element: <KhaoSatPhuongAn />,
    },
    {
        path: '/khao-sat-phuong-an/:id',
        element: <KhaoSatPhuongAn />,
    },
    {
        path: "/thuc-hien-thi-nghiem",
        element: <ThucHienThiNghiem />,
    },
    {
        path: "/ban-giao-ket-qua",
        element: <BanGiaoKetQua />,
    },
    //-----------  Bao cao   --------------//
    {
        path: "/so-luong-chu-ky",
        element: <SoLuongChuKy />,
    },

    //----------Ky so --------------//
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
