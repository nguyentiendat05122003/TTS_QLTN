import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Dialog } from 'primereact/dialog';
import { showErrorToast, showSuccessToast } from '../../utils/toastUtils';
import khachhangService from '../../services/khachhangService';
import { InputNumber } from 'primereact/inputnumber';
import { hasNullOrUndefined, validateEmail } from '../../services/validation';

const khachHangs = [{ ten_kh: 'Nguyễn Văn A', ma_kh: 'KH001', ma_so_thue: '123456789', so_dien_thoai: '0912345678', email: 'nguyenvana@example.com', dia_chi: '123 Đường ABC, Quận 1, TP. HCM', ghi_chu: 'Khách hàng lâu năm' }, { ten_kh: 'Trần Thị B', ma_kh: 'KH002', ma_so_thue: '987654321', so_dien_thoai: '0987654321', email: 'tranthib@example.com', dia_chi: '456 Đường XYZ, Quận 2, TP. HCM', ghi_chu: 'Thích khuyến mãi' }, { ten_kh: 'Lê Văn C', ma_kh: 'KH003', ma_so_thue: '1122334455', so_dien_thoai: '0909090909', email: 'levanc@example.com', dia_chi: '789 Đường DEF, Quận 3, TP. HCM', ghi_chu: 'Khách hàng mới' }, { ten_kh: 'Phạm Thị D', ma_kh: 'KH004', ma_so_thue: '5566778899', so_dien_thoai: '0979797979', email: 'phamthid@example.com', dia_chi: '321 Đường GHI, Quận 4, TP. HCM', ghi_chu: 'Yêu cầu thanh toán nhanh' }, { ten_kh: 'Hoàng Văn E', ma_kh: 'KH005', ma_so_thue: '4433221100', so_dien_thoai: '0969696969', email: 'hoangvane@example.com', dia_chi: '654 Đường JKL, Quận 5, TP. HCM', ghi_chu: 'Khách hàng VIP' }, { ten_kh: 'Trần Thị B', ma_kh: 'KH002', ma_so_thue: '987654321', so_dien_thoai: '0987654321', email: 'tranthib@example.com', dia_chi: '456 Đường XYZ, Quận 2, TP. HCM', ghi_chu: 'Thích khuyến mãi' }, { ten_kh: 'Lê Văn C', ma_kh: 'KH003', ma_so_thue: '1122334455', so_dien_thoai: '0909090909', email: 'levanc@example.com', dia_chi: '789 Đường DEF, Quận 3, TP. HCM', ghi_chu: 'Khách hàng mới' }, { ten_kh: 'Phạm Thị D', ma_kh: 'KH004', ma_so_thue: '5566778899', so_dien_thoai: '0979797979', email: 'phamthid@example.com', dia_chi: '321 Đường GHI, Quận 4, TP. HCM', ghi_chu: 'Yêu cầu thanh toán nhanh' }, { ten_kh: 'Hoàng Văn E', ma_kh: 'KH005', ma_so_thue: '4433221100', so_dien_thoai: '0969696969', email: 'hoangvane@example.com', dia_chi: '654 Đường JKL, Quận 5, TP. HCM', ghi_chu: 'Khách hàng VIP' }, { ten_kh: 'Trần Thị B', ma_kh: 'KH002', ma_so_thue: '987654321', so_dien_thoai: '0987654321', email: 'tranthib@example.com', dia_chi: '456 Đường XYZ, Quận 2, TP. HCM', ghi_chu: 'Thích khuyến mãi' }, { ten_kh: 'Lê Văn C', ma_kh: 'KH003', ma_so_thue: '1122334455', so_dien_thoai: '0909090909', email: 'levanc@example.com', dia_chi: '789 Đường DEF, Quận 3, TP. HCM', ghi_chu: 'Khách hàng mới' }, { ten_kh: 'Phạm Thị D', ma_kh: 'KH004', ma_so_thue: '5566778899', so_dien_thoai: '0979797979', email: 'phamthid@example.com', dia_chi: '321 Đường GHI, Quận 4, TP. HCM', ghi_chu: 'Yêu cầu thanh toán nhanh' }, { ten_kh: 'Hoàng Văn E', ma_kh: 'KH005', ma_so_thue: '4433221100', so_dien_thoai: '0969696969', email: 'hoangvane@example.com', dia_chi: '654 Đường JKL, Quận 5, TP. HCM', ghi_chu: 'Khách hàng VIP' }, { ten_kh: 'Trần Thị B', ma_kh: 'KH002', ma_so_thue: '987654321', so_dien_thoai: '0987654321', email: 'tranthib@example.com', dia_chi: '456 Đường XYZ, Quận 2, TP. HCM', ghi_chu: 'Thích khuyến mãi' }, { ten_kh: 'Lê Văn C', ma_kh: 'KH003', ma_so_thue: '1122334455', so_dien_thoai: '0909090909', email: 'levanc@example.com', dia_chi: '789 Đường DEF, Quận 3, TP. HCM', ghi_chu: 'Khách hàng mới' }, { ten_kh: 'Phạm Thị D', ma_kh: 'KH004', ma_so_thue: '5566778899', so_dien_thoai: '0979797979', email: 'phamthid@example.com', dia_chi: '321 Đường GHI, Quận 4, TP. HCM', ghi_chu: 'Yêu cầu thanh toán nhanh' }, { ten_kh: 'Hoàng Văn E', ma_kh: 'KH005', ma_so_thue: '4433221100', so_dien_thoai: '0969696969', email: 'hoangvane@example.com', dia_chi: '654 Đường JKL, Quận 5, TP. HCM', ghi_chu: 'Khách hàng VIP' },];
const initialFormState = {
    id: 0,
    ma_kh: "",
    ten_kh: "",
    ghi_chu: "",
    so_dt: "",
    email: "",
    ma_so_thue: "",
    dia_chi: ""
};


export const KhachHang = () => {
    const [khachHang, setKhachHang] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isAdd, setIsAdd] = useState(true);
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState(initialFormState);
    const [loading, setLoading] = useState(false);
    const toast = useRef(null);

    useEffect(() => {
        loadData()
    }, []);

    const loadData = async () => {
        let res = await khachhangService.getAllKhachhang()
        res && setKhachHang(res)
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        if (hasNullOrUndefined([formData.ten_kh, formData.ma_kh])) {
            setLoading(true);

            try {
                const res = isAdd
                    ? await khachhangService.createKhachhang({ ...formData, nguoi_tao: "huy" })
                    : await khachhangService.updateKhachhang({ ...formData, nguoi_sua: "huy" });

                res && showSuccessToast(toast, res.message)
                res && loadData();

            } catch (error) {
                showErrorToast(toast, error.message);
            } finally {
                setLoading(false);
            }
        }
        else {
            showErrorToast(toast, "Tên khách hàng và Mã Khách Hàng không được bỏ trống !");
        }
    };


    const onEdit = (kh) => {
        setIsAdd(false);
        setFormData(kh);
        setVisible(true);
    };

    const onDelete = (kh) => {
        confirmDialog({
            message: 'Bạn có chắc chắn muốn xóa khách hàng này không?',
            header: 'Xác nhận',
            icon: 'pi pi-exclamation-triangle',
            accept: async () => {
                try {

                    let res = await khachhangService.deleteKhachhang(kh.id)
                    res && showSuccessToast(toast, "Xóa thành công khách hàng ID= " + kh.id)
                    res && loadData()
                }
                catch {
                    showErrorToast(toast, "Xóa khách hàng thất bại hãy thử lại !")
                }
            }
        });
    };



    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog />

            <div className='border-round-3xl bg-white p-4'>
                <div className='flex justify-content-between wrap min-w-full pb-3 mb-5 border-bottom-2 border-200'>
                    <span className='font-bold text-sm text-xl'>Quản lý khách hàng</span>
                    <Button icon="pi pi-plus-circle" className='border-round-2xl' label='Thêm mới' onClick={() => {
                        setIsAdd(true);
                        setFormData(initialFormState);
                        setVisible(true);
                    }} />
                </div>

                <div className="flex flex-column sm:flex-row justify-content-between mb-3 w-full">
                    <span className="flex flex-column sm:flex-row w-full sm:w-15rem mb-2 sm:mb-0">
                        <Button
                            style={{ backgroundColor: "#008400" }}
                            size="small"
                            icon="pi pi-file-import"
                            label="Nhập vào"
                            className="w-full sm:w-auto ml-0 sm:ml-1 mb-2 sm:mb-0 border-round-lg"
                        />
                        <Button
                            style={{ backgroundColor: "#6366F1" }}
                            size="small"
                            icon="pi pi-file-export"
                            label="Xuất ra"
                            className="w-full sm:w-auto ml-0 sm:ml-1 border-round-lg"
                        />
                    </span>
                    <span className="flex flex-column sm:flex-row w-full sm:w-19rem ml-auto">
                        <InputText
                            className="w-full sm:w-18rem border-round-lg"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Nhập tên cần tìm ..."
                        />
                        <Button
                            size="small"
                            icon="pi pi-search"
                            className="mt-2 sm:mt-0 ml-0 sm:ml-1 border-round-lg"
                        />
                    </span>
                </div>

                <div className="card">
                    <DataTable value={khachHang} showGridlines paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50, 100]}>
                        <Column header="STT" body={(_, { rowIndex }) => rowIndex + 1} className='w-auto' />
                        <Column field="ten_kh" header="Tên khách hàng" className='w-auto' />
                        <Column field="ma_kh" header="Mã khách hàng" className='w-auto' />
                        <Column field="ma_so_thue" header="Mã số thuế" className='w-auto' />
                        <Column field="so_dt" header="Số điện thoại" className='w-auto' />
                        <Column field="email" header="Email" className='w-auto' />
                        <Column field="dia_chi" header="Địa chỉ" className='w-auto' />
                        <Column field="ghi_chu" header="Ghi chú" className='w-auto' />
                        <Column header="Thao tác" body={(rowData) => (
                            <>
                                <Button icon="pi pi-pencil" rounded text outlined className="p-button-rounded  mr-2 mb-1 " tooltip='Sửa' style={{ fontSize: 8 }} onClick={() => onEdit(rowData)} />
                                <Button icon="pi pi-trash" rounded text outlined className="p-button-rounded p-button-danger" tooltip='Xóa' onClick={() => onDelete(rowData)} />
                            </>
                        )} />
                    </DataTable>
                </div>
            </div>

            <Dialog header={<h3>{(isAdd ? "Thêm mới" : "Sửa thông tin") + " khách hàng"}</h3>} visible={visible} className='w-6' onHide={() => setVisible(false)}>
                <div className="p-fluid border-solid p-4 border-100 border-round-2xl" >
                    {
                        !isAdd && <div className="p-field">
                            <label className='font-bold text-sm  my-3 inline-block' htmlFor="id">Mã ID</label>
                            <InputText id="id" name="id" value={formData.id} disabled onChange={handleInputChange} />
                        </div>
                    }
                    <div className="p-field">
                        <label className='font-bold text-sm  my-3 inline-block' htmlFor="ten_kh">Tên khách hàng</label>
                        <InputText id="ten_kh" name="ten_kh" value={formData.ten_kh} onChange={handleInputChange} />
                    </div>
                    <div className="p-field">
                        <label className='font-bold text-sm my-3 inline-block' htmlFor="ma_kh">Mã khách hàng</label>
                        <InputText id="ma_kh" name="ma_kh" value={formData.ma_kh} onChange={handleInputChange} />
                    </div>
                    <div className="p-field">
                        <label className='font-bold text-sm my-3 inline-block' htmlFor="ma_so_thue">Mã số thuế</label>
                        <InputText id="ma_so_thue" name="ma_so_thue" value={formData.ma_so_thue} onChange={handleInputChange} />
                    </div>
                    <div className="p-field">
                        <label className='font-bold text-sm my-3 inline-block' htmlFor="so_dt">Số điện thoại</label>
                        <InputText id="so_dt" name="so_dt" value={formData.so_dt}
                            type="tel"
                            onChange={handleInputChange} />
                    </div>
                    <div className="p-field">
                        <label className='font-bold text-sm my-3 inline-block' htmlFor="email">Email</label>
                        <InputText id="email" name="email" value={formData.email} onChange={handleInputChange} />
                    </div>
                    <div className="p-field">
                        <label className='font-bold text-sm my-3 inline-block' htmlFor="dia_chi">Địa chỉ</label>
                        <InputText id="dia_chi" name="dia_chi" value={formData.dia_chi} onChange={handleInputChange} />
                    </div>
                    <div className="p-field">
                        <label className='font-bold text-sm my-3 inline-block' htmlFor="ghi_chu">Ghi chú</label>
                        <InputTextarea id="ghi_chu" name="ghi_chu" value={formData.ghi_chu} onChange={handleInputChange} />
                    </div>

                </div>
                <div className=" mt-5 text-right">

                    <Button className="mr-3 border-round-xl" icon="pi pi-times" severity="danger" label="Thoát" onClick={() => {
                        setVisible(false)
                        setFormData(initialFormState)
                    }} />
                    <Button className="border-round-xl " icon={loading ? "pi pi-spin pi-spinner" : "pi pi-save"} label="Lưu lại" onClick={handleSubmit} />
                </div>
            </Dialog>
        </>
    );
};
