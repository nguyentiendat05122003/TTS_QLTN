import { InputText } from 'primereact/inputtext';
import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';

import { Steps } from 'primereact/steps';
export const ChiTietKySo = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const toast = useRef(null);
    const items = [
        {
            label: (
                <>
                    <small>Người tạo</small>
                    <br />
                    pchy_diephh
                </>
            ),
            // label: 'Khởi tạo <br />pchy_diephh',
            command: (event) => {},
        },
        {
            label: (
                <>
                    <small>Ký nháy</small>
                    <br />
                    Phạm Thanh Vân
                </>
            ),
            command: (event) => {},
        },
        {
            label: (
                <>
                    <small>Trưởng Phòng</small>
                    <br />
                    Nguyễn Văn Tuệ
                </>
            ),
            command: (event) => {},
        },
        {
            label: (
                <>
                    <small>Giám đốc</small>
                    <br />
                    Ngô Thế Tuyên
                </>
            ),
            command: (event) => {},
        },
    ];

    return (
        <div className="w-full min-h-screen surface-200 p-shadow-2">
            <div className="p-4 mx-2">
                <div className="main-top flex align-items-center justify-content-between">
                    <h2 className="text-xl font-medium">Chi tiết văn bản ký số</h2>
                    <div className="breadcrumb text-sm">Ký số / Tất cả văn bản</div>
                </div>

                <div className="bg-white border-round-3xl p-2 overflow-hidden">
                    <h3 className="text-base text-700 font-medium m-4">Ký số</h3>

                    <div className="border-bottom-1 border-gray-200 mx-1 my-2 text-center"></div>

                    <div className="info px-4 flex flex-column gap-2">
                        <div className="field flex gap-4">
                            <iframe src="test.pdf" className="w-6" frameborder="0"></iframe>

                            <div className="w-6">
                                <div className="field">
                                    <label className="block text-700 mb-2"></label>
                                    <InputText
                                        id="maLTB"
                                        style={{ backgroundColor: '#f6f6fb' }}
                                        color="#000"
                                        readOnly
                                        disabled
                                        className="w-full border-round-lg"
                                        value="Mã loại thiêt bị: PCHY_May cat dien ha the"
                                    />
                                </div>
                                <div className="field">
                                    <InputText
                                        id="tenthietbi"
                                        style={{ backgroundColor: '#f6f6fb', color: '#333' }}
                                        readOnly
                                        disabled
                                        className="w-full border-round-lg"
                                        value="Tên thiết bị: Máy cắt điện hạ thế"
                                    />
                                </div>
                                <div className="field">
                                    <InputText
                                        id="soluongtb"
                                        style={{ backgroundColor: '#f6f6fb', color: '#333' }}
                                        readOnly
                                        disabled
                                        className="w-full border-round-lg"
                                        value="Số lượng: 1"
                                    />
                                </div>
                                <div className="field">
                                    <InputText
                                        id="maYCTN"
                                        style={{ backgroundColor: '#f6f6fb', color: '#333' }}
                                        readOnly
                                        disabled
                                        className="w-full border-round-lg"
                                        value="Mã yêu cầu thí nghiệm:"
                                    />
                                </div>
                                <div className="field">
                                    <InputText
                                        id="tenYCTN"
                                        style={{ backgroundColor: '#f6f6fb', color: '#333' }}
                                        readOnly
                                        disabled
                                        className="w-full border-round-lg"
                                        value="Tên yêu cầu thí nghiệm:"
                                    />
                                </div>
                                <div className="field">
                                    <InputText
                                        id="nguoitao"
                                        style={{ backgroundColor: '#f6f6fb', color: '#333' }}
                                        readOnly
                                        disabled
                                        className="w-full border-round-lg"
                                        value="Tạo bởi: pchy_diephh"
                                    />
                                </div>
                                <h3 className="text-base text-700 font-medium m-4">Danh sách người ký</h3>
                                <div className="field">
                                    <InputText
                                        id="kynhay"
                                        style={{ backgroundColor: '#f6f6fb', color: '#333' }}
                                        readOnly
                                        disabled
                                        className="w-full border-round-lg"
                                        value="1. Ký nháy: Phạm Thanh Vân - pchy_vantt"
                                    />
                                </div>
                                <div className="field">
                                    <InputText
                                        id="truongphong"
                                        style={{ backgroundColor: '#f6f6fb', color: '#333' }}
                                        readOnly
                                        disabled
                                        className="w-full border-round-lg"
                                        value="2. Trưởng phòng kĩ thuật: Nguyễn Văn Tuệ - pchy_tuenv"
                                    />
                                </div>
                                <div className="field">
                                    <InputText
                                        id="giamdoc"
                                        style={{ backgroundColor: '#f6f6fb', color: '#333' }}
                                        readOnly
                                        disabled
                                        className="w-full border-round-lg"
                                        value="3. Giám đốc: Ngô Thế Tuyên - pchy_tuyennt"
                                    />
                                </div>
                                <div className="field">
                                    <div className="card">
                                        <Steps
                                            model={items}
                                            activeIndex={activeIndex}
                                            onSelect={(e) => setActiveIndex(e.index)}
                                            readOnly={false}
                                        />
                                        {/* <Steps model={items} /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-bottom-1 border-gray-200 mx-1 my-2 text-center"></div>
                    <div className="field flex gap-4">
                        <div className="ml-auto gap-2">
                            <Button
                                style={{ backgroundColor: '#008400' }}
                                size="small"
                                icon="pi pi-check"
                                label="Xác nhận"
                                className="w-full sm:w-auto ml-0 sm:ml-1 mb-2 sm:mb-0 border-round-lg"
                            />
                            <Button
                                style={{ backgroundColor: '#6366F1' }}
                                size="small"
                                icon="pi pi-times"
                                label="Hủy"
                                className="w-full sm:w-auto ml-0 sm:ml-1 mb-2 sm:mb-0 border-round-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
