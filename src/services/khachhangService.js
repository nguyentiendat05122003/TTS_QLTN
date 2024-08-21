// khachhangService.js

import { axiosQLTN } from "./serviceBase";


const prefix = 'DM_KHACHHANG'; // Thay thế bằng URL API của bạn

const khachhangService = {
    async getAllKhachhang() {
        try {
            const response = await axiosQLTN.get(prefix);
            return response?.data;
        } catch (error) {
            console.error("Có lỗi xảy ra khi lấy danh sách khách hàng:", error);
            throw error; // Hoặc bạn có thể xử lý lỗi tùy thuộc vào logic ứng dụng của bạn
        }
    },

    // async getKhachhangById(id) {
    //     try {
    //         const response = await axiosQLTN.get(`${prefix}/${id}`);
    //         return response.data;
    //     } catch (error) {
    //         console.error(`Có lỗi xảy ra khi lấy thông tin khách hàng với ID: ${id}`, error);
    //         throw error;
    //     }
    // },

    async createKhachhang(data) {
        try {
            const response = await axiosQLTN.post(prefix);
            return response.data;
        } catch (error) {
            console.log(error)
            throw new Error("Có lỗi khi thêm mới khách hàng hãy kiểm tra lại dữ liệu !")
        }
    },

    async updateKhachhang(data) {
        try {
            const response = await axiosQLTN.put(prefix + "/Update", data);
            return response.data;
        } catch (error) {

            console.log(error);
            throw new Error("Có lỗi khi sửa khách hàng hãy kiểm tra lại dữ liệu !")
        }
    },

    async deleteKhachhang(id) {
        try {
            const response = await axiosQLTN.delete(`${prefix}/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error("Có lỗi khi xóa khách hàng hãy thử lại !")

        }
    }
};

export default khachhangService;
