import React, { useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { InputText } from 'primereact/inputtext';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'; // Import PrimeFlex CSS
import { mockData } from './KhaoSatPhuongAn';

export const BanGiaoKetQua = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [selectedData, setSelectedData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const searchYCTN = (event) => {
        const query = event.query.toLowerCase();
        const results = mockData.filter((item) => item.maYCTN.includes(query));
        setFilteredData(results);
    };

    const onYCTNSelect = (e) => {
        setSelectedData(e.value);
    };

    return (
        <div className="w-full min-h-screen p-shadow-2">
            <div className="main-top flex align-items-center justify-content-between">
                <h2 className="text-xl font-medium">Bàn giao kết quả</h2>
                <div className="breadcrumb text-sm">Quản lý Yêu cầu thí nghiệm / Bàn giao kết quả</div>
            </div>

            <div className="bg-white border-round p-4">
                <h3 className="text-xl text-700 font-medium">Thông tin của yêu cầu thí nghiệm</h3>

                <div className="border-bottom-1 border-gray-200 mx-1 my-2 text-center"></div>
                <div className="field">
                    <label className="block text-700 mb-2">
                        Mã YCTN <small>(STT sẽ được hệ thống quy định)</small>
                    </label>
                    <AutoComplete
                        value={searchTerm}
                        suggestions={filteredData}
                        completeMethod={searchYCTN}
                        field="maYCTN"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onSelect={onYCTNSelect}
                        className="w-full"
                    />
                </div>

                {selectedData && (
                    <>
                        <div className="field">
                            <label className="block text-700 mb-2">
                                Tên yêu cầu <small className="text-red-600">*</small>
                            </label>
                            <InputText value={selectedData.tenYeuCau} className="w-full" readOnly />
                        </div>

                        <div className="field">
                            <label className="block text-700 mb-2">
                                Nội dung <small className="text-red-600">*</small>
                            </label>
                            <InputText value={selectedData.noiDung} className="w-full" readOnly />
                        </div>

                        <div className="field">
                            <label className="block text-700 mb-2">
                                Khách hàng <small className="text-red-600">*</small>
                            </label>
                            <InputText value={selectedData.khachHang} className="w-full" readOnly />
                        </div>

                        <div className="field">
                            <label className="block text-700 mb-2">
                                Loại tài sản <small className="text-red-600">*</small>
                            </label>
                            <InputText value={selectedData.loaiTaiSan} className="w-full" readOnly />
                        </div>

                        <div className="field flex gap-4">
                            <div className="w-6">
                                <label className="block text-700 mb-2">Ngày tạo</label>
                                <InputText value={selectedData.ngayTao} className="w-full" readOnly />
                            </div>
                            <div className="w-6">
                                <label className="block text-700 mb-2">
                                    Ngày ký hợp đồng <small className="text-red-600">*</small>
                                </label>
                                <InputText value={selectedData.ngayKyHopDong} className="w-full" readOnly />
                            </div>
                        </div>

                        <div className="field flex gap-4">
                            <div className="w-6">
                                <label className="block text-700 mb-2">Giá trị dự toán trước thuế</label>
                                <InputText value={selectedData.giaTriDuToanTruocThue} className="w-full" readOnly />
                            </div>
                            <div className="w-6">
                                <label className="block text-700 mb-2">Giá trị chiết giảm</label>
                                <InputText value={selectedData.giaTriChietGiam} className="w-full" readOnly />
                            </div>
                        </div>

                        <div className="field flex gap-4">
                            <div className="w-6">
                                <label className="block text-700 mb-2">Giá trị sau chiết giảm</label>
                                <InputText value={selectedData.giaTriSauChietGiam} className="w-full" readOnly />
                            </div>
                            <div className="w-6">
                                <label className="block text-700 mb-2">Thuế</label>
                                <InputText value={selectedData.thue} className="w-full" readOnly />
                            </div>
                        </div>

                        <div className="field">
                            <label className="block text-700 mb-2">Giá trị dự toán sau thuế</label>
                            <InputText value={selectedData.giaTriDuToanSauThue} className="w-full" readOnly />
                        </div>

                        <h3 className="text-xl text-blue-600 font-medium">Thông Tin Bàn giao kết quả </h3>
                        <div className="border-bottom-1 border-gray-200 mx-1 my-2 text-center"></div>
                        


                        <h4 className="text-xl font-medium">Bàn giao kết quả</h4>
                        <div className="field flex gap-4">
                            <div className="w-6">
                                <label className="block text-700 mb-2">Người Bàn giao kết quả</label>
                                <InputText value={selectedData.nguoiKhaoSat} className="w-full" readOnly />
                            </div>
                            <div className="w-6">
                                <label className="block text-700 mb-2">
                                    Ngày Bàn giao kết quả * <small className="text-red-600">*</small>
                                </label>
                                <InputText value={selectedData.ngayKhaoSat} className="w-full" readOnly />
                            </div>
                        </div>
                        <div className="field flex gap-4">
                            <div className="w-6">
                                <label className="block text-700 mb-2">Ghi chú </label>
                                <InputText value='' className="w-full" readOnly />
                            </div>
                            <div className="w-6">
                                <label className="block text-700 mb-2">
                                   Đơn vị bàn giao * <small className="text-red-600">*</small>
                                </label>
                                <InputText value='Cong ty dien luc Hung Yem' className="w-full" readOnly />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

// Thông Tin Bàn giao kết quả
// Bàn giao kết quả
// Người Bàn giao kết quả
// Ngày Bàn giao kết quả *
// Ghi chú
// Đơn vị bàn giao
