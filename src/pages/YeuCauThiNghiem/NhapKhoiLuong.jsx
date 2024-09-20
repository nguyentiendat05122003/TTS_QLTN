import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { Column } from 'primereact/column';
import React, { useState } from 'react';
import { NextButton } from '../../components/nextstep/NextButton';
import { AutoComplete } from 'primereact/autocomplete';

export const mockDevices = [
    {
        id: 1,
        tenThietBi: 'Máy đo pH',
        loaiThietBi: 'Thiết bị đo',
        maLoaiThietBi: 'DT01',
        soLuong: 10,
    },
    {
        id: 2,
        tenThietBi: 'Bình định mức',
        loaiThietBi: 'Bình chứa',
        maLoaiThietBi: 'BC02',
        soLuong: 15,
    },
    {
        id: 3,
        tenThietBi: 'Cân điện tử',
        loaiThietBi: 'Thiết bị cân',
        maLoaiThietBi: 'TC03',
        soLuong: 5,
    },
];

export const NhapKhoiLuong = () => {
    const [maYCTN, setMaYCTN] = useState('');
    const [devices, setDevices] = useState(mockDevices);
    const [filteredYCTN, setFilteredYCTN] = useState([]);

    const searchYCTN = (event) => {
        const query = event.query.toLowerCase();
        const results = mockDevices.filter((device) => device.id.toString().toLowerCase().includes(query));
        setFilteredYCTN(results);
    };

    return (
        <div className="w-full min-h-screen p-shadow-2">
            <div className="main-top flex align-items-center justify-content-between">
                <h2 className="text-xl font-medium">Yêu cầu thí nghiệm</h2>
                <div className="breadcrumb text-sm">Quản lý Yêu cầu thí nghiệm / Nhập khối lượng thực hiện</div>
            </div>

            <div className="bg-white border-round p-2 overflow-hidden">
                <h3 className="text-base text-700 font-medium m-4">Nhập khối lượng thực hiện</h3>
                <div className="border-bottom-1 border-gray-200 mx-1 my-2 text-center"></div>

                <div className="info px-4 flex flex-column gap-2">
                    <div className="field">
                        <label className="block text-700 mb-2">
                            Mã YCTN <small>(STT sẽ được hệ thống quy định)</small>
                        </label>
                        <AutoComplete
                            id="maYCTN"
                            value={maYCTN}
                            onChange={(e) => setMaYCTN(e.value)}
                            suggestions={filteredYCTN}
                            completeMethod={searchYCTN}
                            field="id" // Tùy thuộc vào cấu trúc dữ liệu của bạn
                            className="w-full"
                        />
                    </div>

                    <h3 className="text-base text-700 font-medium m-2">Chi tiết Yêu cầu thí nghiệm</h3>
                    <div className="border-bottom-1 border-gray-200 mx-1 my-1 text-center"></div>

                    <div className="field">
                        <label className="block text-700 mb-2">
                            Tên yêu cầu <small className="text-red-600">*</small>
                        </label>
                        <InputText className="w-full" />
                    </div>

                    <div className="field flex gap-4">
                        <div className="w-6">
                            <label className="block text-700 mb-2">
                                Loại tài sản <small className="text-red-600">*</small>
                            </label>
                            <InputText className="w-full" />
                        </div>
                        <div className="w-6">
                            <label className="block text-700 mb-2">
                                Ngày tạo <small className="text-red-600">*</small>
                            </label>
                            <InputText className="w-full" />
                        </div>
                    </div>
                </div>

                <h3 className="text-base text-blue-600 font-medium m-4">Danh sách thiết bị</h3>
                <div className="border-bottom-1 border-gray-200 mx-1 my-2 text-center"></div>

                <div className="flex justify-content-between align-items-center m-3">
                    <Button label="Thêm mới" className="bg-green-500 border-none" />
                    <Button label="Nhập Excel" className="bg-green-500 border-none" />
                </div>
                <DataTable value={devices} className="m-3">
                    <Column field="tenThietBi" header="Tên thiết bị" style={{ maxWidth: '6rem' }} />
                    <Column field="loaiThietBi" header="Loại thiết bị" style={{ maxWidth: '6rem' }} />
                    <Column field="maLoaiThietBi" header="Mã loại thiết bị" style={{ maxWidth: '6rem' }} />
                    <Column field="soLuong" header="Số lượng" style={{ maxWidth: '6rem' }} />
                </DataTable>

                <NextButton id={maYCTN} routeNextStep="/khao-sat-phuong-an" />
            </div>
        </div>
    );
};
