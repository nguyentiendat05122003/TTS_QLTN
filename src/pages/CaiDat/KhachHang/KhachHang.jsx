import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import '../KhachHang/KhachHang.scss';
import { PrimeIcons } from 'primereact/api';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
const khachHangs = [
    {
        ten_kh: 'Nguyễn Văn A',
        ma_kh: 'KH001',
        ma_so_thue: '123456789',
        so_dien_thoai: '0912345678',
        email: 'nguyenvana@example.com',
        dia_chi: '123 Đường ABC, Quận 1, TP. HCM',
        ghi_chu: 'Khách hàng lâu năm'
    },
    {
        ten_kh: 'Trần Thị B',
        ma_kh: 'KH002',
        ma_so_thue: '987654321',
        so_dien_thoai: '0987654321',
        email: 'tranthib@example.com',
        dia_chi: '456 Đường XYZ, Quận 2, TP. HCM',
        ghi_chu: 'Thích khuyến mãi'
    },
    {
        ten_kh: 'Lê Văn C',
        ma_kh: 'KH003',
        ma_so_thue: '1122334455',
        so_dien_thoai: '0909090909',
        email: 'levanc@example.com',
        dia_chi: '789 Đường DEF, Quận 3, TP. HCM',
        ghi_chu: 'Khách hàng mới'
    },
    {
        ten_kh: 'Phạm Thị D',
        ma_kh: 'KH004',
        ma_so_thue: '5566778899',
        so_dien_thoai: '0979797979',
        email: 'phamthid@example.com',
        dia_chi: '321 Đường GHI, Quận 4, TP. HCM',
        ghi_chu: 'Yêu cầu thanh toán nhanh'
    },
    {
        ten_kh: 'Hoàng Văn E',
        ma_kh: 'KH005',
        ma_so_thue: '4433221100',
        so_dien_thoai: '0969696969',
        email: 'hoangvane@example.com',
        dia_chi: '654 Đường JKL, Quận 5, TP. HCM',
        ghi_chu: 'Khách hàng VIP'
    },
];

export const KhachHang = () => {
    const [khachHang, setKhachHang] = useState(khachHangs)
    const [searchTerm, setSeachTerm] = useState('')
    return (
        <div className='body-page-setting'>
            <h3 >Quản lý khách hàng
            <span style={{marginLeft:"30vw" }} className="p-input-icon-right">
                <InputText value={searchTerm} onChange={(e)=>setSeachTerm(e.target.value)}  placeholder="Nhập từ khóa cần tìm ..." />
                <i  className="pi pi-search" />
            </span>

                <Button icon={PrimeIcons.PLUS} style={{ float: "right" }} label='Thêm mới' />
            </h3>



            <div className="card">
                <DataTable value={khachHang} showGridlines paginator  rows={10}  rowsPerPageOptions={[5, 10, 25, 50, 100]} tableStyle={{ minWidth: '50rem' }}>
                    <Column header="STT" body={(_, { rowIndex }) => rowIndex} style={{ width: 'auto' }}></Column>
                    <Column field="ten_kh" header="Tên khách hàng" style={{ width: 'auto' }}></Column>
                    <Column field="ma_kh" header="Mã khách hàng" style={{ width: 'auto' }}></Column>
                    <Column field="ma_so_thue" header="Mã số thuế" style={{ width: 'auto' }}></Column>
                    <Column field="so_dien_thoai" header="Số điện thoại" style={{ width: 'auto' }}></Column>
                    <Column field="email" header="Email" style={{ width: 'auto' }}></Column>
                    <Column field="dia_chi" header="Địa chỉ" style={{ width: 'auto' }}></Column>
                    <Column field="ghi_chu" header="Ghi chú" style={{ width: 'auto' }}></Column>
                    <Column header="Thao tác" style={{ width: 'auto' }} body={() =>
                        <>
                            <Button size="small" icon="pi pi-pencil" />
                            <Button size="small" icon="pi pi-trash" severity='danger' />
                        </>
                    }>
                    </Column>
                </DataTable>
            </div>
        </div>
    );
};