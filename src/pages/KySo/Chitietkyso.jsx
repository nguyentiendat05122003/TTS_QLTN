import { InputText } from "primereact/inputtext";
import React, { useState, useRef } from 'react';
import { Button } from "primereact/button";

import { Steps } from 'primereact/steps';
export const ChiTietKySo = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const toast = useRef(null);
  const items = [
    {
      label: (
        <>
          <small>Người tạo</small><br />pchy_diephh
        </>
      ),
      // label: 'Khởi tạo <br />pchy_diephh',
      command: (event) => {
      }
    },
    {
      label: (
        <>
          <small>Ký nháy</small><br />Phạm Thanh Vân
        </>
      ),
      command: (event) => {
      }
    },
    {
      label: (
        <>
          <small>Trưởng Phòng</small><br />Nguyễn Văn Tuệ
        </>
      ),
      command: (event) => {
      }
    },
    {
      label: (
        <>
          <small>Giám đốc</small><br />Ngô Thế Tuyên
        </>
      ),
      command: (event) => {
      }
    }
  ];

  return (
    <div className="w-full min-h-screen surface-200 p-shadow-2">
      <div className="p-4 mx-2">
        <div className="main-top flex align-items-center justify-content-between">
          <h2 className="text-xl font-medium">Chi tiết văn bản ký số</h2>
          <div className="breadcrumb text-sm">
            Ký số / Tất cả văn bản
          </div>
        </div>

        <div className="bg-white border-round p-2 overflow-hidden">
          <h3 className="text-base text-700 font-medium m-4">
            Ký số
          </h3>

          <div className="border-bottom-1 border-gray-200 mx-1 my-2 text-center"></div>

          <div className="info px-4 flex flex-column gap-2">
            <div className="field flex gap-4">
              <iframe src="test.pdf" className="w-6" frameborder="0"></iframe>

              <div className="w-6">
                <div className="field">
                  <label className="block text-700 mb-2">
                  </label>
                  <InputText id="maLTB" style={{ backgroundColor: "#e0e0e0", color: "#333", borderColor: "#999" }} readOnly className="w-full" value="Mã loại thiêt bị: PCHY_May cat dien ha the" />
                </div>
                <div className="field">
                  <InputText id="tenthietbi" style={{ backgroundColor: "#e0e0e0", color: "#333", borderColor: "#999" }} readOnly className="w-full" value="Tên thiết bị: Máy cắt điện hạ thế" />
                </div>
                <div className="field">
                  <InputText id="soluongtb" style={{ backgroundColor: "#e0e0e0", color: "#333", borderColor: "#999" }} readOnly className="w-full" value="Số lượng: 1" />
                </div>
                <div className="field">
                  <InputText id="maYCTN" style={{ backgroundColor: "#e0e0e0", color: "#333", borderColor: "#999" }} readOnly className="w-full" value="Mã yêu cầu thí nghiệm:" />
                </div>
                <div className="field">

                  <InputText id="tenYCTN" style={{ backgroundColor: "#e0e0e0", color: "#333", borderColor: "#999" }} readOnly className="w-full" value="Tên yêu cầu thí nghiệm:" />
                </div>
                <div className="field">
                  <InputText id="nguoitao" style={{ backgroundColor: "#e0e0e0", color: "#333", borderColor: "#999" }} readOnly className="w-full" value="Tạo bởi: pchy_diephh" />
                </div>
                <h3 className="text-base text-700 font-medium m-4">
                  Danh sách người ký
                </h3>
                <div className="field">
                  <InputText id="kynhay" style={{ backgroundColor: "#e0e0e0", color: "#333", borderColor: "#999" }} readOnly className="w-full" value="1. Ký nháy: Phạm Thanh Vân - pchy_vantt" />
                </div>
                <div className="field">
                  <InputText id="truongphong" style={{ backgroundColor: "#e0e0e0", color: "#333", borderColor: "#999" }} readOnly className="w-full" value="2. Trưởng phòng kĩ thuật: Nguyễn Văn Tuệ - pchy_tuenv" />
                </div>
                <div className="field">
                  <InputText id="giamdoc" style={{ backgroundColor: "#e0e0e0", color: "#333", borderColor: "#999" }} readOnly className="w-full" value="3. Giám đốc: Ngô Thế Tuyên - pchy_tuyennt" />
                </div>
                <div className="field">
                  <div className="card">
                    <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-bottom-1 border-gray-200 mx-1 my-2 text-center"></div>
          <div className="field flex gap-4">
            <div className="ml-auto gap-2" > 
            <Button label="Đồng ý" className="md:w-7rem"/>
            <Button label="Từ chối ký" className="md:w-7rem"/>
            </div>    
          </div>
        </div>
      </div>
    </div>
  );
};
