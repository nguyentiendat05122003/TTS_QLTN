import React, { useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { InputText } from 'primereact/inputtext';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'; // Import PrimeFlex CSS

const mockData = [
    {
        maYCTN: '123',
        tenYeuCau: 'Yêu cầu khảo sát ABC',
        noiDung: 'Khảo sát lập phương án thi công',
        khachHang: 'Công ty A',
        loaiTaiSan: 'Tài sản 1',
        ngayTao: '2023-09-01',
        ngayKyHopDong: '2023-09-05',
        giaTriDuToanTruocThue: '100,000,000 VND',
        giaTriChietGiam: '5,000,000 VND',
        giaTriSauChietGiam: '95,000,000 VND',
        thue: '10%',
        giaTriDuToanSauThue: '104,500,000 VND',
        fileQuyetDinh: 'Quyet_dinh.pdf',
        nguoiKhaoSat: 'Nguyễn Văn A',
        ngayKhaoSat: '2023-09-10',
    },
    {
        maYCTN: '456',
        tenYeuCau: 'Yêu cầu khảo sát DEF',
        noiDung: 'Khảo sát lập phương án thi công',
        khachHang: 'Công ty B',
        loaiTaiSan: 'Tài sản 2',
        ngayTao: '2023-09-02',
        ngayKyHopDong: '2023-09-06',
        giaTriDuToanTruocThue: '200,000,000 VND',
        giaTriChietGiam: '10,000,000 VND',
        giaTriSauChietGiam: '190,000,000 VND',
        thue: '10%',
        giaTriDuToanSauThue: '209,000,000 VND',
        fileQuyetDinh: 'Quyet_dinh_2.pdf',
        nguoiKhaoSat: 'Nguyễn Văn B',
        ngayKhaoSat: '2023-09-11',
    },
];

export const KhaoSatPhuongAn = () => {
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
                <h2 className="text-xl font-medium">Khảo sát lập phương án thi công</h2>
                <div className="breadcrumb text-sm">Quản lý Yêu cầu thí nghiệm / Khảo sát lập phương án thi công</div>
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

                        <h3 className="text-xl text-blue-600 font-medium">
                            Thông tin khảo sát lập phương án thi công
                        </h3>
                        <div className="border-bottom-1 border-gray-200 mx-1 my-2 text-center"></div>

                        <div className="field">
                            <label className="block text-700 mb-2">
                                File Quyết Định <small className="text-red-600">*</small>
                            </label>
                            <InputText value={selectedData.fileQuyetDinh} className="w-full" readOnly />
                        </div>

                        <div className="field flex gap-4">
                            <div className="w-6">
                                <label className="block text-700 mb-2">Người Khảo sát lập phương án thi công</label>
                                <InputText value={selectedData.nguoiKhaoSat} className="w-full" readOnly />
                            </div>
                            <div className="w-6">
                                <label className="block text-700 mb-2">
                                    Ngày Khảo sát lập phương án thi công <small className="text-red-600">*</small>
                                </label>
                                <InputText value={selectedData.ngayKhaoSat} className="w-full" readOnly />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
