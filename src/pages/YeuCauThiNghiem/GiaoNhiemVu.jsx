import { InputText } from "primereact/inputtext";

import React from "react";
import { Button } from "primereact/button";

export const GiaoNhiemVu = () => {
  return (
    <div className="w-full min-h-screen p-shadow-2">
     
        <div className="main-top flex align-items-center justify-content-between">
          <h2 className="text-xl font-medium">Giao nhiệm vụ</h2>
          <div className="breadcrumb text-sm">
            Quản lý Yêu cầu thí nghiệm / Giao nhiệm vụ
          </div>
        </div>

        <div className="bg-white border-round p-2 overflow-hidden">
          <h3 className="text-base text-700 font-medium m-4">
            Thông tin của yêu cầu thí nghiệm
          </h3>

          <div className="border-bottom-1 border-gray-200 mx-1 my-2 text-center"></div>

          <div className="info px-4 flex flex-column gap-2">
            <div className="field">
              <label className="block text-700 mb-2">
                Mã YCTN <small>(STT sẽ được hệ thống quy định)</small>
              </label>
              <InputText id="maYCTN" className="w-full" />
            </div>

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

          <h3 className="text-base text-blue-600 font-medium m-4">
            Thông Tin Giao Nhiệm Vụ
          </h3>
          <div className="border-bottom-1 border-gray-200 mx-1 my-2 text-center"></div>

          <div className="info px-4 flex flex-column gap-2">
            <h3 className="text-base text-600 font-medium">Giao Nhiệm Vụ</h3>
            <div className="field flex gap-4">
              <div className="w-6">
                <label className="block text-700 mb-2">
                  File Quyết Định <small className="text-red-600">*</small>
                </label>
                <InputText type="file" className="w-full" />
              </div>
              <div className="w-6">
                <label className="block text-700 mb-2">
                  Người giao nhiệm vụ <small className="text-red-600">*</small>
                </label>
                <InputText className="w-full" />
              </div>
            </div>
            <div className="field flex gap-4">
              <div className="w-6">
                <label className="block text-700 mb-2">
                  Ngày giao nhiệm vụ <small className="text-red-600">*</small>
                </label>
                <InputText className="w-full" />
              </div>
              <div className="w-6">
                <label className="block text-700 mb-2">
                  Đơn vị thực hiện <small className="text-red-600">*</small>
                </label>
                <InputText className="w-full" />
              </div>
            </div>

            <div className="text-right mt-2 mb-4">
              <Button label="Bước tiếp theo: Nhập khối lượng thực hiện" />
            </div>
          </div>
        </div>
      </div>
  );
};
