import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar'; // Import Calendar component for date picker
import { Chart } from 'primereact/chart';
import 'primeicons/primeicons.css';
import { Dialog } from 'primereact/dialog';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import baocaoService from '../../services/baocaoService'; // Import the service for API calls

export const SoLuongChuKy = () => {
    const [visible, setVisible] = useState(false);
    const [isAdd, setIsAdd] = useState(true);
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);

    const [data, setData] = useState([]);

    const chartData = {
        labels: (data || []).map((item) => item.teN_DON_VI),
        datasets: [
            {
                label: 'Số lượng ký',
                backgroundColor: '#42A5F5',
                data: (data || []).map((item) => item.sO_LUONG_CHU_KY),
            },
        ],
    };

    const handleSearch = async () => {
        try {
            const response = await baocaoService.getChuKyDv(fromDate, toDate);
            console.log('Dữ liệu từ API:', response);
            setData(response || []);
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
        }
    };

    useEffect(() => {
        handleSearch();
    }, []);

    return (
        <>
            <div className="w-full min-h-screen p-shadow-2">
                <div className="main-top flex flex-wrap align-items-center justify-content-between">
                    <h2 className="text-xl font-medium w-full sm:w-auto">
                        Báo cáo số lần ký thành công theo Đơn vị thực hiện
                    </h2>
                    <Breadcrumb />
                </div>
                <div className="bg-white border-round-lg p-2 overflow-hidden">
                    <div className="m-2 p-2">
                        <div className="option-filter my-4">
                            <div className="flex flex-wrap align-items-center justify-content-between">
                                <div className="record w-full sm:w-auto">
                                    <Dropdown placeholder="10" optionLabel="name" className="w-full sm:w-auto" />
                                </div>

                                <div className="filter flex flex-wrap align-items-center gap-2 w-full sm:w-auto">
                                    <div className="date-filter flex align-items-center gap-2">
                                        <Calendar
                                            value={fromDate}
                                            onChange={(e) => setFromDate(e.value)}
                                            placeholder="Từ ngày"
                                            className="w-full sm:w-auto"
                                        />
                                        <Calendar
                                            value={toDate}
                                            onChange={(e) => setToDate(e.value)}
                                            placeholder="Đến ngày"
                                            className="w-full sm:w-auto"
                                        />
                                    </div>
                                    <Button label="Tìm kiếm" className="w-full sm:w-auto" onClick={handleSearch} />
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="col-12 md:col-8">
                                <Chart
                                    type="bar"
                                    data={chartData}
                                    option={{
                                        elements: {
                                            bar: {
                                                borderRadius: 5,
                                                barThickness: 1,
                                                borderSkipped: false,
                                            },
                                        },
                                    }}
                                />
                            </div>
                            <div className="col-12 md:col-4">
                                <DataTable value={data} paginator rows={5} tableStyle={{ minWidth: '30rem' }}>
                                    <Column header="STT" body={(_, { rowIndex }) => rowIndex + 1} className="w-auto" />
                                    <Column field="teN_DON_VI" header="Đơn Vị" style={{ width: '60%' }}></Column>
                                    <Column field="sO_LUONG_CHU_KY" header="Số Lượng" style={{ width: '30%' }}></Column>
                                </DataTable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog
                header={isAdd ? 'Thêm ' : 'Xem thông tin'}
                visible={visible}
                className="w-5 h-1/4"
                onHide={() => setVisible(false)}
            >
                123
            </Dialog>
        </>
    );
};
