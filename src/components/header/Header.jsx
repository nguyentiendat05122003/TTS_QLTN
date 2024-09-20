import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';

import { Link } from 'react-router-dom';
import '../../App.css';

export default function Header() {
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
        },
        {
            label: 'Quản lý yêu cầu thí nghiệm',
            icon: 'pi blue pi-star',
            items: [
                {
                    label: '1. Danh sách yêu cầu thí nghiệm',
                    icon: 'pi blue pi-angle-right',
                    template: itemRenderer,
                },
                {
                    label: '2. Giao nhiệm vụ',
                    icon: 'pi blue pi-angle-right',
                    template: itemRenderer,
                },
                {
                    label: '3. Nhập khối lượng thực hiện',
                    icon: 'pi blue pi-angle-right',
                    template: itemRenderer,
                },
                {
                    label: '5. Nhập khối phát sinh',
                    icon: 'pi blue pi-angle-right',
                    template: itemRenderer,
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
                    template: itemRenderer,
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
                {
                    label: 'Ký số',
                    icon: 'pi blue pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi blue pi-angle-right',
                            badge: 2,
                            template: itemRenderer,
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi blue pi-angle-right',
                            badge: 3,
                            template: itemRenderer,
                        },
                    ],
                },
            ],
        },

        {
            label: 'Ký số',
            icon: 'pi blue pi-pen-to-square',
            // badge: 3,
            template: itemRenderer,
        },
        {
            label: 'Báo cáo',
            icon: 'pi blue pi-file',
            items: [
                {
                    label: 'Báo cáo số lượng chữ kí',
                    icon: 'pi blue pi-angle-right',
                    template: itemRenderer,
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
                    label: 'Báo cáo số lượng chữ kí',
                    icon: 'pi blue pi-angle-right',
                    template: itemRenderer,
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
            label: 'Hướng dẫn sử dụng',
            icon: 'pi blue pi-book',
            items: [
                {
                    label: 'Báo cáo số lượng chữ kí',
                    icon: 'pi blue pi-angle-right',
                    template: itemRenderer,
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
