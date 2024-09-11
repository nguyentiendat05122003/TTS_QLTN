// loaiThietBiService.js

import { axiosQLTN } from "./serviceBase";

const prefix = 'DM_LOAI_THIET_BI'; // Thay thế bằng URL API của bạn

const loaiThietBiService = {
    async getAllLoaiThietBi() {
        try {
            const response = await axiosQLTN.get(prefix);
            return response?.data;
        } catch (error) {
            console.error("Có lỗi xảy ra khi lấy danh sách loại thiết bị:", error);
            throw error; // Hoặc bạn có thể xử lý lỗi tùy thuộc vào logic ứng dụng của bạn
        }
    },

    async getLoaiThietBiById(id) {
        try {
            const response = await axiosQLTN.get(`${prefix}/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Có lỗi xảy ra khi lấy thông tin loại thiết bị với ID: ${id}`, error);
            throw error;
        }
    },

    async createLoaiThietBi(data) {
        try {
            const response = await axiosQLTN.post(prefix, data);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error("Có lỗi khi thêm mới loại thiết bị hãy kiểm tra lại dữ liệu !");
        }
    },

    async updateLoaiThietBi(data) {
        try {
            const response = await axiosQLTN.put(`${prefix}/Update`, data);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error("Có lỗi khi sửa loại thiết bị hãy kiểm tra lại dữ liệu !");
        }
    },

    async deleteLoaiThietBi(id) {
        try {
            const response = await axiosQLTN.delete(`${prefix}/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error("Có lỗi khi xóa loại thiết bị hãy thử lại !");
        }
    }
};

export default loaiThietBiService;
