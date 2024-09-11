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
import loaiBienBanService from '../../services/loaibienbanService';
import { hasNullOrUndefined } from '../../services/validation';

const lbbTest = [
    {
        id: 22,
        ten_loai_bb: "Chứng nhận kiểm định",
        ngay_tao: "2024-07-29T22:02:09",
        nguoi_tao: "Huy",
        ngay_sua: null,
        nguoi_sua: "",
        ghi_chu: "Chứng nhận kiểm định"
    },
    {
        id: 21,
        ten_loai_bb: "Biên bản kiểm định",
        ngay_tao: "2024-07-29T22:01:50",
        nguoi_tao: "Huy",
        ngay_sua: null,
        nguoi_sua: "",
        ghi_chu: "Biên bản kiểm định"
    },
    {
        id: 1,
        ten_loai_bb: "Biên bản thí nghiệm",
        ngay_tao: "2024-07-11T00:00:00",
        nguoi_tao: "",
        ngay_sua: null,
        nguoi_sua: "",
        ghi_chu: ""
    }
]
const initialFormState = {
    id: 0,
    ten_loai_bb: "",
    ghi_chu: "",
    ngay_tao: "",
    nguoi_tao: "",
    ngay_sua: "",
    nguoi_sua: ""
};

export const LoaiBienBan = () => {
    const [loaiBienBan, setLoaiBienBan] = useState([]);
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
        // let res = await loaiBienBanService.getAllLoaiBienBan();
        // res && setLoaiBienBan(res);
        setLoaiBienBan(lbbTest)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        if (hasNullOrUndefined([formData.ten_loai_bb])) {
            setLoading(true);

            try {
                const res = isAdd
                    ? await loaiBienBanService.createLoaiBienBan({ ...formData, nguoi_tao: "huy" })
                    : await loaiBienBanService.updateLoaiBienBan({ ...formData, nguoi_sua: "huy" });

                res && showSuccessToast(toast, res.message);
                res && loadData();

            } catch (error) {
                showErrorToast(toast, error.message);
            } finally {
                setLoading(false);
            }
        }
        else {
            showErrorToast(toast, "Tên loại biên bản không được bỏ trống !");
        }
    };

    const onEdit = (item) => {
        setIsAdd(false);
        setFormData(item);
        setVisible(true);
    };

    const onDelete = (item) => {
        confirmDialog({
            message: 'Bạn có chắc chắn muốn xóa loại biên bản này không?',
            header: 'Xác nhận',
            icon: 'pi pi-exclamation-triangle',
            accept: async () => {
                try {
                    let res = await loaiBienBanService.deleteLoaiBienBan(item.id);
                    res && showSuccessToast(toast, "Xóa thành công loại biên bản ID= " + item.id);
                    res && loadData();
                }
                catch {
                    showErrorToast(toast, "Xóa loại biên bản thất bại hãy thử lại !");
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
                    <span className='font-bold text-sm text-xl'>Quản lý loại biên bản</span>
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
                    <DataTable value={loaiBienBan} showGridlines paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50, 100]}>
                        <Column header="STT" body={(_, { rowIndex }) => rowIndex + 1} className='w-auto' />
                        <Column field="ten_loai_bb" header="Tên loại biên bản" className='w-auto' />
                        <Column field="ghi_chu" header="Ghi chú" className='w-auto' />
                        <Column header="Thao tác" body={rowData => (
                            <div className='flex align-items-center'>
                                <>
                                    <Button icon="pi pi-pencil" rounded text outlined className="p-button-rounded  mr-2 mb-1 " tooltip='Sửa' style={{ fontSize: 8 }} onClick={() => onEdit(rowData)} />
                                    <Button icon="pi pi-trash" rounded text outlined className="p-button-rounded p-button-danger" tooltip='Xóa' onClick={() => onDelete(rowData)} />
                                </>
                            </div>
                        )} />
                    </DataTable>
                </div>
            </div>

            <Dialog
                header={isAdd ? "Thêm mới loại biên bản" : "Sửa loại biên bản"}
                visible={visible}
                style={{ width: '50vw' }}
                footer={<>
                    <Button label="Hủy" icon="pi pi-times" className="p-button-text" onClick={() => setVisible(false)} />
                    <Button label="Lưu" icon="pi pi-check" className="p-button-text" onClick={handleSubmit} loading={loading} />
                </>}
                onHide={() => setVisible(false)}
            >
                <div className="p-fluid">
                    <div className="field">
                        <label htmlFor="ten_loai_bb">Tên loại biên bản</label>
                        <InputText
                            id="ten_loai_bb"
                            name="ten_loai_bb"
                            value={formData.ten_loai_bb}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="ghi_chu">Ghi chú</label>
                        <InputTextarea
                            id="ghi_chu"
                            name="ghi_chu"
                            value={formData.ghi_chu}
                            onChange={handleInputChange}
                            rows={3}
                        />
                    </div>
                </div>
            </Dialog>
        </>
    );
};
