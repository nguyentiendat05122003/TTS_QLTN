import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { CascadeSelect } from 'primereact/cascadeselect';
import { useState } from "react";
import { FileUpload } from 'primereact/fileupload';
import { Panel } from 'primereact/panel';

const dataYCTN_fake = {
    ma_yctn: "YCTN.TN-567",
    ten_yctn: "Thí nghiệm sau khi thu hồi chống sét van phát nhiệt, dòng rò cao ĐZ 475+477 E28.22.",
    ngay_tao: "12-12-2024",
    loai_tai_san: "Tài sản nghành điện"
}
const style_Step = {

    backgroundColor: '#ff5722', // Màu nền bạn muốn
    color: '#ffffff', // Màu chữ của header

}
export const ChiTietThiNghiem = () => {
    const [dataYCTN, setDataYCTN] = useState(dataYCTN_fake)
    return (
        <>
            <div className="w-full min-h-screen p-shadow-2">
                <div className="main-top flex flex-wrap align-items-center justify-content-between">
                    <h2 className="text-xl font-medium w-full sm:w-auto">Yêu cầu thí nghiệm</h2>
                    <div className="breadcrumb text-sm w-full sm:w-auto text-right sm:hidden lg:block">
                        Quản lý Yêu cầu thí nghiệm / Danh sách Yêu cầu thí nghiệm /
                        <span style={{ color: "#6C5FFC" }}> Chi tiết Yêu cầu thí nghiệm</span>
                    </div>
                </div>
                <div className="bg-white border-round-lg p-2 overflow-hidden">
                    <div className="m-2 p-2">
                        <div className="table-header">
                            <div className="flex flex-wrap align-items-center justify-content-between">
                                <h3 className="table-title text-base text-700 font-medium w-full sm:w-auto">
                                    Chi tiết yêu cầu thí nghiệm
                                </h3>
                            </div>
                        </div>
                        <div className="border-bottom-1 border-gray-200 my-2"></div>
                        {/* data YCTN */}
                        <div className="text-sm pt-3 w-9">
                            <div className="form-element mb-4">
                                <label className="block pb-2">Mã yêu cầu  <span className="text-xs">(STT sẽ được hệ thống quy định)</span></label>
                                <InputText readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-9 text-sm " value={dataYCTN.ma_yctn} />
                            </div>
                            <div className="form-element mb-4">
                                <label className="block pb-2">Tên yêu cầu   </label>
                                <InputText readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-9 text-sm " value={dataYCTN.ten_yctn} />
                            </div>
                            <div className="flex">
                                <div className="form-element mb-4 w-5">
                                    <label className="block pb-2">Loại tài sản  </label>
                                    <CascadeSelect readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-12   text-sm " value={dataYCTN.loai_tai_san} />
                                </div>
                                <div className="form-element mb-4 ml-3 w-5">
                                    <label className="block pb-2">Ngày tạo  </label>
                                    <InputText readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-9 text-sm " value={dataYCTN.ngay_tao} />
                                </div>
                            </div>
                            <div className="form-element mb-4">
                                <label className="block pb-2">Upload file    </label>
                                <InputText readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-9 text-sm " value={dataYCTN.ma_yctn} />

                            </div>

                        </div>
                        {/* data step */}
                        <div className="flex flex-column gap-2">
                            <Panel header="Giao nhiệm vụ" className="custom-header" toggleable collapsed>
                                <div className="text-sm pt-3 w-9">
                                    <div className="form-element mb-4">
                                        <label className="block pb-2">Mã yêu cầu  <span className="text-xs">(STT sẽ được hệ thống quy định)</span></label>
                                        <InputText readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-9 text-sm " value={dataYCTN.ma_yctn} />
                                    </div>
                                    <div className="form-element mb-4">
                                        <label className="block pb-2">Tên yêu cầu   </label>
                                        <InputText readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-9 text-sm " value={dataYCTN.ten_yctn} />
                                    </div>
                                    <div className="flex">
                                        <div className="form-element mb-4 w-5">
                                            <label className="block pb-2">Loại tài sản  </label>
                                            <CascadeSelect readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-12   text-sm " value={dataYCTN.loai_tai_san} />
                                        </div>
                                        <div className="form-element mb-4 ml-3 w-5">
                                            <label className="block pb-2">Ngày tạo  </label>
                                            <InputText readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-9 text-sm " value={dataYCTN.ngay_tao} />
                                        </div>
                                    </div>
                                    <div className="form-element mb-4">
                                        <label className="block pb-2">Upload file    </label>
                                        <InputText readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-9 text-sm " value={dataYCTN.ma_yctn} />

                                    </div>

                                </div>
                            </Panel>

                            {/*  */}
                            <Panel header="Khảo sát lập phương án thi công" className="custom-header" toggleable collapsed>
                                <div className="text-sm pt-3 w-9">
                                    <div className="form-element mb-4">
                                        <label className="block pb-2">Mã yêu cầu  <span className="text-xs">(STT sẽ được hệ thống quy định)</span></label>
                                        <InputText readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-9 text-sm " value={dataYCTN.ma_yctn} />
                                    </div>
                                    <div className="form-element mb-4">
                                        <label className="block pb-2">Tên yêu cầu   </label>
                                        <InputText readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-9 text-sm " value={dataYCTN.ten_yctn} />
                                    </div>
                                    <div className="flex">
                                        <div className="form-element mb-4 w-5">
                                            <label className="block pb-2">Loại tài sản  </label>
                                            <CascadeSelect readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-12   text-sm " value={dataYCTN.loai_tai_san} />
                                        </div>
                                        <div className="form-element mb-4 ml-3 w-5">
                                            <label className="block pb-2">Ngày tạo  </label>
                                            <InputText readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-9 text-sm " value={dataYCTN.ngay_tao} />
                                        </div>
                                    </div>
                                    <div className="form-element mb-4">
                                        <label className="block pb-2">Upload file    </label>
                                        <InputText readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-9 text-sm " value={dataYCTN.ma_yctn} />

                                    </div>

                                </div>
                            </Panel>
                            {/*  */}
                            <Panel header="Thực hiện thí nghiệm" className="custom-header" toggleable collapsed>
                                <div className="text-sm pt-3 w-9">
                                    <div className="form-element mb-4">
                                        <label className="block pb-2">Mã yêu cầu  <span className="text-xs">(STT sẽ được hệ thống quy định)</span></label>
                                        <InputText readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-9 text-sm " value={dataYCTN.ma_yctn} />
                                    </div>
                                    <div className="form-element mb-4">
                                        <label className="block pb-2">Tên yêu cầu   </label>
                                        <InputText readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-9 text-sm " value={dataYCTN.ten_yctn} />
                                    </div>
                                    <div className="flex">
                                        <div className="form-element mb-4 w-5">
                                            <label className="block pb-2">Loại tài sản  </label>
                                            <CascadeSelect readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-12   text-sm " value={dataYCTN.loai_tai_san} />
                                        </div>
                                        <div className="form-element mb-4 ml-3 w-5">
                                            <label className="block pb-2">Ngày tạo  </label>
                                            <InputText readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-9 text-sm " value={dataYCTN.ngay_tao} />
                                        </div>
                                    </div>
                                    <div className="form-element mb-4">
                                        <label className="block pb-2">Upload file    </label>
                                        <InputText readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-9 text-sm " value={dataYCTN.ma_yctn} />

                                    </div>

                                </div>
                            </Panel>
                            {/*  */}
                            <Panel header="Bàn giao kết quả" className="" toggleable collapsed>
                                <div className="text-sm pt-3 w-9">
                                    <div className="form-element mb-4">
                                        <label className="block pb-2">Mã yêu cầu  <span className="text-xs">(STT sẽ được hệ thống quy định)</span></label>
                                        <InputText readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-9 text-sm " value={dataYCTN.ma_yctn} />
                                    </div>
                                    <div className="form-element mb-4">
                                        <label className="block pb-2">Tên yêu cầu   </label>
                                        <InputText readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-9 text-sm " value={dataYCTN.ten_yctn} />
                                    </div>
                                    <div className="flex">
                                        <div className="form-element mb-4 w-5">
                                            <label className="block pb-2">Loại tài sản  </label>
                                            <CascadeSelect readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-12   text-sm " value={dataYCTN.loai_tai_san} />
                                        </div>
                                        <div className="form-element mb-4 ml-3 w-5">
                                            <label className="block pb-2">Ngày tạo  </label>
                                            <InputText readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-9 text-sm " value={dataYCTN.ngay_tao} />
                                        </div>
                                    </div>
                                    <div className="form-element mb-4">
                                        <label className="block pb-2">Upload file    </label>
                                        <InputText readOnly style={{ backgroundColor: "#F6F6FB" }} className="border-round-lg w-9 text-sm " value={dataYCTN.ma_yctn} />

                                    </div>

                                </div>
                            </Panel>
                            {/*  */}
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};