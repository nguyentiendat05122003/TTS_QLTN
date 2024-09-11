import { axiosQLTN } from "./serviceBase";


const prefix = 'DMBaoCao'; 

const baocaoService = {
    async getChuKyDv(fromDate = "", toDate = "") {
        try {
            const requestData = {
                fromDate,
                toDate
            };

            const response = await axiosQLTN.post(`${prefix}/chukyDv`, requestData);
            return response?.data;
        } catch (error) {
            console.log("Có lỗi xảy ra khi lấy dữ liệu chukyDv:", error);
            throw error;
        }
    }
}

export default baocaoService