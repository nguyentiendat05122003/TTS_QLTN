// loaiBienBanService.js

import { axiosQLTN } from "./serviceBase";

const prefix = 'DM_LOAI_BIEN_BAN'; // Thay thế bằng URL API của bạn

const loaiBienBanService = {
    async getAllLoaiBienBan() {
        try {
            const response = await axiosQLTN.get(prefix);
            return response?.data;
        } catch (error) {
            console.error("Có lỗi xảy ra khi lấy danh sách loại biên bản:", error);
            throw error;
        }
    },

    async getLoaiBienBanById(id) {
        try {
            const response = await axiosQLTN.get(`${prefix}/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Có lỗi xảy ra khi lấy thông tin loại biên bản với ID: ${id}`, error);
            throw error;
        }
    },

    async createLoaiBienBan(data) {
        try {
            const response = await axiosQLTN.post(prefix, data);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error("Có lỗi khi thêm mới loại biên bản hãy kiểm tra lại dữ liệu !");
        }
    },

    async updateLoaiBienBan(data) {
        try {
            const response = await axiosQLTN.put(`${prefix}/Update`, data);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error("Có lỗi khi sửa loại biên bản hãy kiểm tra lại dữ liệu !");
        }
    },

    async deleteLoaiBienBan(id) {
        try {
            const response = await axiosQLTN.delete(`${prefix}/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error("Có lỗi khi xóa loại biên bản hãy thử lại !");
        }
    }
};

export default loaiBienBanService;
