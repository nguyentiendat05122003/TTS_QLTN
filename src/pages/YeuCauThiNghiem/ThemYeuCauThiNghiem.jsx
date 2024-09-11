import React from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { Column } from 'primereact/column';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

export const ThemYeuCauThiNghiem = () => {
    return (
        <div className="w-full min-h-screen surface-200 p-shadow-2">
            <div className="p-4 mx-2">
                <div className="main-top flex flex-wrap align-items-center justify-content-between">
                    <h2 className="text-xl font-medium w-full sm:w-auto">
                    Yêu cầu thí nghiệm                   
                     </h2>
                    <Breadcrumb />
                </div>

                <div className="bg-white border-round p-2 overflow-hidden">
                    <h3 className="text-base text-700 font-medium m-4">Nhập khối lượng thực hiện</h3>
                    <div className="border-bottom-1 border-gray-200 mx-1 my-2 text-center"></div>

                    <div className="info px-4 flex flex-column gap-2">
                        <div className="field">
                            <label className="block text-700 mb-2">
                                Mã YCTN <small>(STT sẽ được hệ thống quy định)</small>
                            </label>
                            <InputText id="maYCTN" className="w-full" />
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
                                    Ngay tao <small className="text-red-600">*</small>
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
                    <DataTable value={[]} className="m-3">
                        <Column field="donvi" header="Tên thiết bị" style={{ maxWidth: '6rem' }}></Column>
                        <Column field="donvi" header="Loại thiết bị" style={{ maxWidth: '6rem' }}></Column>
                        <Column field="donvi" header="Mã loại thiết bị" style={{ maxWidth: '6rem' }}></Column>
                        <Column field="donvi" header="Số lượng" style={{ maxWidth: '6rem' }}></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    );
};
