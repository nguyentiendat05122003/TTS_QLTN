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
import NhomThanhVienService from '../../services/nhomTVService'; // Đổi tên thành dịch vụ loại thiết bị
import { hasNullOrUndefined } from '../../services/validation';

const NhomThanhViens = [
    { id: 24, ten_nhom: 'Thực hiện hợp đồng PCHY', cap_bac: 1, ngay_tao: null, nguoi_tao: null, ngay_sua: null, nguoi_sua: null, ghi_chu: 'Nhóm thành viên', ma_loai_tb: '	PCHY_Cap luc ha the' },
    { id: 24, ten_nhom: 'Nhóm quyền Admin', cap_bac: 2, ngay_tao: null, nguoi_tao: null, ngay_sua: null, nguoi_sua: null, ghi_chu: 'Nhóm thành viên', ma_loai_tb: '	PCHY__DayDanTran' },
    { id: 24, ten_nhom: 'Nhóm quyền Tổ kỹ thuật PCHY', cap_bac: 13, ngay_tao: null, nguoi_tao: null, ngay_sua: null, nguoi_sua: null, ghi_chu: 'Nhóm thành viên', ma_loai_tb: '	PCHY_aptomat tong' },
    { id: 24, ten_nhom: 'Nhóm quyền Giám đốc PCHY', cap_bac: 11, ngay_tao: null, nguoi_tao: null, ngay_sua: null, nguoi_sua: null, ghi_chu: 'Nhóm thành viên', ma_loai_tb: 'PCHY_TI ha the' },
    { id: 24, ten_nhom: 'Quyền ký kỹ thuật của điện lực huyện', cap_bac: 17, ngay_tao: null, nguoi_tao: null, ngay_sua: null, nguoi_sua: null, ghi_chu: 'Nhóm thành viên', ma_loai_tb: '	PCHY_Volmet' },
    { id: 24, ten_nhom: 'Quyền ký giám đốc của Điện lực huyện', cap_bac: 12, ngay_tao: null, nguoi_tao: null, ngay_sua: null, nguoi_sua: null, ghi_chu: 'Nhóm thành viên', ma_loai_tb: '	PCHY_Volmet' },
    // Các dữ liệu mẫu khác
];

const initialFormState = {
    id: 0,
    ten_loai_tb: "",
    ma_loai_tb: "",
    ghi_chu: "",
    ngay_tao: "",
    nguoi_tao: "",
    ngay_sua: "",
    nguoi_sua: ""
};
const NhomThanhVien = () => {
    const [NhomThanhVien, setNhomThanhVien] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isAdd, setIsAdd] = useState(true);
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState(initialFormState);
    const [loading, setLoading] = useState(false);
    const toast = useRef(null);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        // let res = await NhomThanhVienService.getAllNhomThanhVien(); // Đổi tên thành dịch vụ loại thiết bị
        // res && setNhomThanhVien(res);
        setNhomThanhVien(NhomThanhViens)
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        if (hasNullOrUndefined([formData.ten_loai_tb, formData.ma_loai_tb])) {
            setLoading(true);

            try {
                const res = isAdd
                    ? await NhomThanhVienService.createNhomThanhVien({ ...formData, nguoi_tao: "huy" }) // Đổi tên thành dịch vụ loại thiết bị
                    : await NhomThanhVienService.updateNhomThanhVien({ ...formData, nguoi_sua: "huy" }); // Đổi tên thành dịch vụ loại thiết bị

                res && showSuccessToast(toast, res.message);
                res && loadData();
            } catch (error) {
                showErrorToast(toast, error.message);
            } finally {
                setLoading(false);
            }
        } else {
            showErrorToast(toast, "Tên loại thiết bị và Mã loại thiết bị không được bỏ trống !");
        }
    };

    const onEdit = (item) => {
        setIsAdd(false);
        setFormData(item);
        setVisible(true);
    };

    const onDelete = (item) => {
        confirmDialog({
            message: 'Bạn có chắc chắn muốn xóa loại thiết bị này không?',
            header: 'Xác nhận',
            icon: 'pi pi-exclamation-triangle',
            accept: async () => {
                try {
                    let res = await NhomThanhVienService.deleteNhomThanhVien(item.id); // Đổi tên thành dịch vụ loại thiết bị
                    res && showSuccessToast(toast, "Xóa thành công loại thiết bị ID= " + item.id);
                    res && loadData();
                } catch {
                    showErrorToast(toast, "Xóa loại thiết bị thất bại hãy thử lại !");
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
                    <span className='font-bold text-sm text-xl'>Quản lý nhóm thành viên</span>
                    <Button size={"small"} icon="pi pi-plus-circle" className='border-round-2xl' label='Thêm mới' onClick={() => {
                        setIsAdd(true);
                        setFormData(initialFormState);
                        setVisible(true);
                    }} />
                </div>

                <div className="flex flex-column sm:flex-row justify-content-between mb-3 w-full">

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
                    <DataTable value={NhomThanhVien} showGridlines paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50, 100]}>
                        <Column header="STT" body={(_, { rowIndex }) => rowIndex + 1} className='w-auto' />
                        <Column field="ten_nhom" header="Tên nhóm thành viên" className='w-auto' />
                        <Column field="cap_bac" header="Cấp bậc" className='w-auto' />
                        <Column field="nhom_id" header="Phân quyền" className='w-auto'
                            body={() => <Button severity='infor' raised icon="pi pi-eye" tooltip='Phân quyền ' />} />

                        <Column field="ghi_chu" header="Ghi chú" className='w-auto' />
                        <Column header="Thao tác" body={(rowData) =>
                        (
                            <>
                                <Button icon="pi pi-pencil" rounded text outlined className="p-button-rounded  mr-2 mb-1 " tooltip='Sửa' style={{ fontSize: 8 }} onClick={() => onEdit(rowData)} />
                                <Button icon="pi pi-trash" rounded text outlined className="p-button-rounded p-button-danger" tooltip='Xóa' onClick={() => onDelete(rowData)} />
                            </>
                        )} />
                    </DataTable>
                </div>
            </div>

            <Dialog header={<h3>{(isAdd ? "Thêm mới" : "Sửa thông tin") + " loại thiết bị"}</h3>} visible={visible} className='w-6' onHide={() => setVisible(false)}>
                <div className="p-fluid border-solid p-4 border-100 border-round-2xl">
                    {
                        !isAdd && <div className="p-field">
                            <label className='font-bold text-sm my-3 inline-block' htmlFor="id">Mã ID</label>
                            <InputText id="id" name="id" value={formData.id} disabled onChange={handleInputChange} />
                        </div>
                    }
                    <div className="p-field">
                        <label className='font-bold text-sm my-3 inline-block' htmlFor="ten_loai_tb">Tên loại thiết bị *</label>
                        <InputText id="ten_loai_tb" name="ten_loai_tb" value={formData.ten_loai_tb} onChange={handleInputChange} />
                    </div>
                    <div className="p-field">
                        <label className='font-bold text-sm my-3 inline-block' htmlFor="ma_loai_tb">Mã loại thiết bị *</label>
                        <InputText id="ma_loai_tb" name="ma_loai_tb" value={formData.ma_loai_tb} onChange={handleInputChange} />
                    </div>
                    <div className="p-field">
                        <label className='font-bold text-sm my-3 inline-block' htmlFor="ghi_chu">Ghi chú</label>
                        <InputTextarea id="ghi_chu" name="ghi_chu" value={formData.ghi_chu} onChange={handleInputChange} rows={3} />
                    </div>
                    <div className="flex justify-content-end">
                        <Button label='Lưu' icon="pi pi-save" onClick={handleSubmit} className='border-round-lg mr-2' loading={loading} />
                        <Button label='Hủy' icon="pi pi-times" onClick={() => setVisible(false)} className='border-round-lg' />
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default NhomThanhVien;
