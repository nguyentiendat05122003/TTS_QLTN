/* eslint-disable no-undef */
import { InputText } from "primereact/inputtext"
import { mockData } from "./KhaoSatPhuongAn";
import { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { NextButton } from "../../components/nextstep/NextButton";

export const ThucHienThiNghiem = () => {

    const [filteredData, setFilteredData] = useState([]);
    const [selectedData, setSelectedData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    console.log('searchTerm:', searchTerm);

    //mock data
    const [experiment , setExperiment ] = useState([
        { id: 1, tenThietBi: 'YCTN.HD-570-1', loaiThietBi: 'Loại A', maLoaiThietBi: 'A001', soLuong: 10, trangThai: 'Hoạt động' },
        { id: 2, tenThietBi: 'YCTN.HD-570-1', loaiThietBi: 'Loại B', maLoaiThietBi: 'B002', soLuong: 5, trangThai: 'Bảo trì' },
        { id: 3, tenThietBi: 'YCTN.HD-570-1', loaiThietBi: 'Loại A', maLoaiThietBi: 'A003', soLuong: 7, trangThai: 'Hỏng hóc' },
    ]);


    //body cho table
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

    //handle for client
    const searchYCTN = (event) => {
        const query = event.query.toLowerCase();
        const results = mockData.filter((item) => item.maYCTN.includes(query));
        setFilteredData(results);
    };

    const onYCTNSelect = (e) => {
        setSelectedData(e.value);
    };
  return (
      <div>
          <div className="w-full min-h-screen p-shadow-2">
              <div className="main-top flex align-items-center justify-content-between">
                  <h2 className="text-xl font-medium">Thực hiện thí nghiệm</h2>
                  <div className="breadcrumb text-sm">Quản lý Yêu cầu thí nghiệm / Thực hiện thí nghiệm</div>
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

                          <h3 className="text-xl text-blue-600 font-medium">Khối lượng thiết bị thí nghiệm</h3>
                          <div className="border-bottom-1 border-gray-200 mx-1 my-2 text-center"></div>

                          <h3 className="text-xl font-medium">Danh sách thiết bị ban đầu</h3>

                          <DataTable
                              value={experiment}
                              paginator
                              rows={5}
                              tableStyle={{ minWidth: '50rem', fontSize: '14px' }}
                          >
                              <Column field="id" header="STT">
                                  {(data) => {
                                      return <span>{data.index + 1}</span>;
                                  }}
                              </Column>
                              <Column field="tenThietBi" header="Tên thiết bị" style={{ maxWidth: '20rem' }}></Column>
                              <Column
                                  field="loaiThietBi"
                                  header="Loại thiết bị"
                                  style={{ maxWidth: '10rem', whiteSpace: 'pre-wrap' }}
                              ></Column>
                              <Column
                                  field="maLoaiThietBi"
                                  header="Mã loại thiết bị"
                                  style={{ maxWidth: '6rem' }}
                              ></Column>
                              <Column field="soLuong" header="Số lượng" style={{ maxWidth: '6rem' }}></Column>
                              <Column
                                  field="trangThai"
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
                          <div className="text-right">
                              <NextButton id={searchTerm.maYCTN} routeNextStep="/ban-giao-ket-qua" />
                          </div>
                      </>
                  )}
              </div>
          </div>
      </div>
  );
}
