import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';

export default function Header() {
    const navigate = useNavigate();
    const itemRenderer = (item) => (
        <Link className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2 ">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && (
                <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
                    {item.shortcut}
                </span>
            )}
        </Link>
    );
    const items = [
        {
            label: 'Home',
            icon: 'pi blue pi-home',
            command: () => navigate('/'),
        },
        {
            label: 'Quản lý yêu cầu thí nghiệm',
            icon: 'pi blue pi-star',
            items: [
                {
                    label: '1. Danh sách Yêu Cầu Thí Nghiệm',
                    icon: 'pi blue pi-angle-right',
                    command: () => navigate('/YeuCauThiNghiem'),
                },
                {
                    label: '2. Giao Nhiệm Vụ',
                    icon: 'pi blue pi-angle-right',
                    command: () => navigate('/GiaoNhiemVu'),
                },
                {
                    label: '3. Nhập Khối Lượng Thực Hiện',
                    icon: 'pi blue pi-angle-right',
                    command: () => navigate('/NhapKhoiLuong'),
                },
                {
                    label: '5. Nhập khối lượng phát sinh',
                    icon: 'pi blue pi-angle-right',
                    command: () => navigate('/YeuCauThiNghiem'),
                },
                {
                    label: '7. Chỉnh sửa giá trị hợp đồng',
                    icon: 'pi blue pi-angle-right',
                    command: () => navigate('/YeuCauThiNghiem'),
                },
            ],
        },
        {
            label: 'Thực hiện thí nghiệm',
            icon: 'pi blue pi-search',
            items: [
                {
                    label: '4. Khảo sát lập phương án thi công',
                    icon: 'pi blue pi-angle-right',
                    command: () => navigate('/khao-sat-phuong-an'),
                },
                {
                    label: '6. Thực hiện thí nghiệm',
                    icon: 'pi blue pi-angle-right',
                    template: itemRenderer,
                },
                {
                    label: '8. Bàn giao kết quả',
                    icon: 'pi blue pi-angle-right',
                    template: itemRenderer,
                },
                {
                    separator: true,
                },
            ],
        },

        {
            label: 'Ký số',
            icon: 'pi blue pi-pen-to-square',
            items: [
                {
                    label: 'Tất cả văn bản',
                    icon: 'pi blue pi-angle-right',
                    command: () => navigate('/KySo'),
                },
                {
                    label: 'Văn bản chờ ký',
                    icon: 'pi blue pi-angle-right',
                },
                {
                    label: 'Văn bản đã ký',
                    icon: 'pi blue pi-angle-right',
                },
                {
                    label: 'Văn bản từ chối ký',
                    icon: 'pi blue pi-angle-right',
                },
            ],
        },
        {
            label: 'Báo cáo',
            icon: 'pi blue pi-file',
            items: [
                {
                    label: 'Báo cáo số lượng chữ kí',
                    icon: 'pi blue pi-angle-right',
                    command: () => navigate('/ThanhVien'),
                },
                {
                    label: '6. Thực hiện thí nghiệm',
                    icon: 'pi blue pi-angle-right',
                    template: itemRenderer,
                },
                {
                    label: '8. Bàn giao kết quả',
                    icon: 'pi blue pi-angle-right',
                    template: itemRenderer,
                },
            ],
        },
        {
            label: 'Cài đặt',
            icon: 'pi blue pi-cog  ',
            items: [
                {
                    label: 'Quản lý đơn vị',
                    icon: 'pi blue pi-angle-right',
                },
                {
                    label: 'Quản lý thành viên',
                    icon: 'pi blue pi-angle-right',
                    command: () => navigate('/ThanhVien'),
                },
                {
                    label: 'Quản lý Menu',
                    icon: 'pi blue pi-angle-right',
                    command: () => navigate('/ThanhVien'),
                },
                {
                    label: 'Quản lý nhóm thành viên',
                    icon: 'pi blue pi-angle-right',
                    command: () => navigate('/NhomThanhVien'),
                },
                {
                    label: 'Loại thiết bị',
                    icon: 'pi blue pi-angle-right',
                    command: () => navigate('/LoaiThietBi'),
                },
                {
                    label: 'Quản Lý Khách Hàng/Đơn vị điện lực',
                    icon: 'pi blue pi-angle-right',
                },
                {
                    label: 'Ds Trường thông tin Yêu cầu sửa chữa',
                    icon: 'pi blue pi-angle-right',
                    command: () => navigate('/TruongDuLieu'),
                },
            ],
        },
        {
            label: 'Hướng dẫn sử dụng',
            icon: 'pi blue pi-book',
        },
    ];

    const start = (
        <div className="flex align-items-center gap-3 pl-8">
            <img
                alt="logo"
                src="https://cv-project-public-bucket.s3.amazonaws.com/uploads/avatars/1726831929610-logoEVN.jpg"
                height="75"
                className="mr-2"
            ></img>
            <div className="p-inputgroup ">
                <InputText keyfilter="int" className="w-full sm:w-18rem border-round-lg" placeholder="Search..." />
                <span className="p-inputgroup-addon">
                    <i className="pi pi-search" />
                </span>
            </div>
        </div>
    );
    const end = (
        <div className="flex align-items-center gap-5 pr-8">
            <div>
                <i className="pi blue pi-moon noti"></i>
            </div>
            <div>
                <i className="pi blue pi-expand noti"></i>
            </div>
            <div>
                <i className="pi blue pi-bell noti"></i>
            </div>
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
            <div>
                <p className="text-primary sm:text-sm"> bkistest01</p>
                <p className="text-primary sm:text-sm"> CÔNG TY ĐIỆN LỰC HƯNG YÊN</p>
            </div>
        </div>
    );

    return (
        <div className="card">
            <Menubar start={start} end={end} />
            <Menubar model={items} className="pl-8 text-sm" />
        </div>
    );
}
