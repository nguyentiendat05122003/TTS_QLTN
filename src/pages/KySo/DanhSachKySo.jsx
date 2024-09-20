import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import 'primeicons/primeicons.css';
import { Link } from 'react-router-dom';

export const DanhSachKySo = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const data = [
        {
            id: 1,
            name: 'Mã yêu cầu: YCTN.TN-534 \n Tên yêu cầu: Đường dây 35kV và TBA 320kVA-35(22)/0,4kV Công ty Cổ phần Phát triển trạm sạc Toàn Cầu V-Green',
            type: 'Biên bản thí nghiệm',
            donvi: 'CÔNG TY ĐIỆN LỰC HƯNG YÊN',
            createBy: 'Đơn vị khởi tạo: CÔNG TY ĐIỆN LỰC HƯNG YÊN\nNgày Tạo: 13/08/2024\nNgười tạo: pchy_phubq',
            currentStatus: '1. Người tạo: pchy_phubq\n2. Ký nháy: pchy_van\n',
            nextStatus: '3. Ký trưởng phòng kỹ thuật: pchy_tuenv\n4. Ký giám đốc: pchy_tuyennt',
        },
        {
            id: 2,
            name: 'Mã yêu cầu: YCTN.TN-534 Tên yêu cầu: Đường dây 35kV và TBA 320kVA-35(22)/0,4kV Công ty Cổ phần Phát triển trạm sạc Toàn Cầu V-Green',
            type: 'Biên bản thí nghiệm',
            donvi: 'CÔNG TY ĐIỆN LỰC HƯNG YÊN',
            createBy: 'Đơn vị khởi tạo: CÔNG TY ĐIỆN LỰC HƯNG YÊN \n Ngày Tạo: 13/08/2024 \n Nguoi tao: pchy_phubq',
            currentStatus:
                '1. Người tạo: pchy_phubq\n2. Ký nháy: pchy_van\n3. Ký trưởng phòng kỹ thuật: pchy_tuenv\n3. Ký giám đốc: pchy_tuyennt',
            nextStatus: '4. Ký giám đốc: pchy_tuyennt',
        },
    ];

    const statusBody = (data) => {
        return (
            <div className="status-container">
                <div className={`bg-teal-400 p-1 m-1 text-200 border-round-xl text-center`}>
                    Hiện tại: {data.currentStatus}
                </div>
                <div className={`bg-primary-400 p-1 m-1 text-200 border-round-xl text-center`}>
                    Tiếp theo: {data.nextStatus}
                </div>
            </div>
        );
    };

    return (
        <div className="w-full min-h-screen p-shadow-2 surface-200">
            <div className="p-4 mx-2">
                <div className="main-top flex align-items-center justify-content-between">
                    <h2 className="text-xl font-medium">Ký số</h2>
                    <div className="breadcrumb text-sm">Ký số / Tất cả văn bản</div>
                </div>
                <div className="bg-white border-round-lg p-2 overflow-hidden">
                    <div className="m-2 p-2">
                        <div className="table-header">
                            <div className="flex align-items-center justify-content-between">
                                <h3 className="table-title text-base text-700 font-medium">Ký số</h3>
                                <div className="table-header-icons">
                                    <Button
                                        label="Thêm mới"
                                        icon="pi pi-plus"
                                        className="w-full px-3 py-2 text-sm bg-teal-400 border-none"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom-1 border-gray-200 my-2"></div>
                        <div className="option-filter my-4">
                            <div className="flex align-items-center justify-content-between">
                                <div className="record">
                                    <Dropdown placeholder="10" optionLabel="name" className="w-full" />
                                </div>

                                <div className="filter flex align-items-center gap-2">
                                    <div className="search">
                                        <InputText
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            placeholder="Tìm kiếm theo tên"
                                            className="w-full"
                                        />
                                    </div>
                                    <Dropdown
                                        optionLabel="name"
                                        placeholder="Loai dich vu"
                                        className="w-2 md:w-10rem"
                                    />
                                    <Dropdown
                                        optionLabel="name"
                                        placeholder="Loai dich vu"
                                        className="w-2 md:w-10rem"
                                    />
                                    <Dropdown
                                        optionLabel="name"
                                        placeholder="Loai dich vu"
                                        className="w-2 md:w-10rem"
                                    />
                                    <Button label="Tìm kiếm" />
                                </div>
                            </div>
                        </div>
                        <DataTable value={data} paginator rows={5} tableStyle={{ minWidth: '50rem', fontSize: '14px' }}>
                            <Column field="id" header="STT"></Column>
                            <Column field="name" header="Thông tin chung" style={{ maxWidth: '20rem' }}></Column>
                            <Column field="type" header="Loại thiết bị" style={{ maxWidth: '10rem' }}></Column>
                            <Column
                                field="createBy"
                                header="Đơn vị thực hiện"
                                style={{ maxWidth: '10rem', whiteSpace: 'pre-wrap' }}
                            ></Column>
                            <Column field="loaivanban" header="Loại văn bản" style={{ maxWidth: '6rem' }}></Column>
                            <Column
                                field="status"
                                header="Trạng thái"
                                body={statusBody}
                                filterMenuStyle={{ width: '14rem' }}
                                style={{ minWidth: '12rem', fontSize: '12px' }}
                            />
                            <Column
                                field="activity"
                                header="Thao tác"
                                showFilterMatchModes={false}
                                style={{ maxWidth: '6rem', textAlign: 'center' }}
                                body={
                                    <Link to="/Chitietkyso">
                                        <Button icon="pi pi-eye" className="p-button-sm p-button-text" />
                                    </Link>
                                }
                            />
                        </DataTable>
                    </div>
                </div>
            </div>
        </div>
    );
};
