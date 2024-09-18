import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import 'primeicons/primeicons.css';
import { Dialog } from 'primereact/dialog';

export const DanhSachYCTN = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [visible, setVisible] = useState(false);
    const [isAdd, setIsAdd] = useState(true);

    const data = [
        {
            id: 1,
            name: 'Mã yêu cầu: YCTN.TN-534 Tên yêu cầu: Đường dây 35kV và TBA 320kVA-35(22)/0,4kV Công ty Cổ phần Phát triển trạm sạc Toàn Cầu V-Green',
            type: 'Loại hình thí nghiệm: Kế hoạch thí nghiệm',
            donvi: 'CÔNG TY ĐIỆN LỰC HƯNG YÊN',
            createBy: 'Đơn vị khởi tạo: CÔNG TY ĐIỆN LỰC HƯNG YÊN\nNgày Tạo: 13/08/2024\nNgười tạo: pchy_phubq',
            currentStatus: 'Đang xuất báo',
            nextStatus: 'Đang xuất báo',
        },
        {
            id: 2,
            name: 'Mã yêu cầu: YCTN.TN-534 Tên yêu cầu: Đường dây 35kV và TBA 320kVA-35(22)/0,4kV Công ty Cổ phần Phát triển trạm sạc Toàn Cầu V-Green',
            type: 'Loại hình thí nghiệm: Kế hoạch thí nghiệm',
            donvi: 'CÔNG TY ĐIỆN LỰC HƯNG YÊN',
            createBy: 'Đơn vị khởi tạo: CÔNG TY ĐIỆN LỰC HƯNG YÊN /n Ngày Tạo: 13/08/2024 /n Nguoi tao: pchy_phubq',
            currentStatus: 'Đang xuất báo',
            nextStatus: 'Đang xuất báo cáo',
        },
    ];

    const statusBody = (data) => {
        return (
            <div className="status-container">
                <div className="bg-teal-400 p-1 m-1 text-200 border-round-xl text-center">
                    Hiện tại: {data.currentStatus}
                </div>
                <div className="bg-primary-400 p-1 m-1 text-200 border-round-xl text-center">
                    Tiếp theo: {data.nextStatus}
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="w-full min-h-screen p-shadow-2">
                <div className="main-top flex flex-wrap align-items-center justify-content-between">
                    <h2 className="text-xl font-medium w-full sm:w-auto">Yêu cầu thí nghiệm</h2>
                    <div className="breadcrumb text-sm w-full sm:w-auto text-right sm:hidden lg:block">
                        Quản lý Yêu cầu thí nghiệm / Danh sách Yêu cầu thí nghiệm
                    </div>
                </div>
                <div className="bg-white border-round-lg p-2 overflow-hidden">
                    <div className="m-2 p-2">
                        <div className="table-header">
                            <div className="flex flex-wrap align-items-center justify-content-between">
                                <h3 className="table-title text-base text-700 font-medium w-full sm:w-auto">
                                    Quản lý Yêu cầu thí nghiệm
                                </h3>
                                <div className="table-header-icons w-full sm:w-auto text-right sm:text-left">
                                    <Button
                                        label="Thêm mới"
                                        icon="pi pi-plus"
                                        className="w-full sm:w-auto px-3 py-2 text-sm bg-teal-400 border-none"
                                        onClick={() => {
                                            setIsAdd(true);
                                            setVisible(true);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom-1 border-gray-200 my-2"></div>
                        <div className="option-filter my-4">
                            <div className="flex flex-wrap align-items-center justify-content-between">
                                <div className="record w-full sm:w-auto">
                                    <Dropdown placeholder="10" optionLabel="name" className="w-full sm:w-auto" />
                                </div>

                                <div className="filter flex flex-wrap align-items-center gap-2 w-full sm:w-auto">
                                    <div className="search w-full sm:w-auto">
                                        <InputText
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            placeholder="Tìm kiếm theo tên"
                                            className="w-full sm:w-auto"
                                        />
                                    </div>
                                    <Dropdown
                                        optionLabel="name"
                                        placeholder="Loại dịch vụ"
                                        className="w-full sm:w-auto"
                                    />
                                    <Dropdown
                                        optionLabel="name"
                                        placeholder="Loại dịch vụ"
                                        className="w-full sm:w-auto"
                                    />
                                    <Dropdown
                                        optionLabel="name"
                                        placeholder="Loại dịch vụ"
                                        className="w-full sm:w-auto"
                                    />
                                    <Button label="Tìm kiếm" className="w-full sm:w-auto" />
                                </div>
                            </div>
                        </div>
                        <DataTable value={data} paginator rows={5} tableStyle={{ minWidth: '50rem', fontSize: '14px' }}>
                            <Column field="id" header="STT"></Column>
                            <Column
                                field="name"
                                header="Thông tin Yêu cầu thí nghiệm"
                                style={{ maxWidth: '20rem' }}
                            ></Column>
                            <Column field="type" header="Thông tin chung" style={{ maxWidth: '10rem' }}></Column>
                            <Column
                                field="createBy"
                                header="Đơn vị thực hiện"
                                style={{ maxWidth: '10rem', whiteSpace: 'pre-wrap' }}
                            ></Column>
                            <Column field="donvi" header="Thông tin khởi tạo" style={{ maxWidth: '6rem' }}></Column>
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
                                    <Button
                                        icon="pi pi-eye"
                                        className="p-button-sm p-button-text"
                                        onClick={() => alert(`Xem chi tiết`)}
                                    />
                                }
                            />
                        </DataTable>
                    </div>
                </div>
            </div>
            <Dialog
                header={(isAdd ? 'Thêm ' : 'Xem thông tin')}
                visible={visible}
                className="w-5 h-1/4"
                onHide={() => setVisible(false)}
            >
                123
            </Dialog>
        </>
    );
};
