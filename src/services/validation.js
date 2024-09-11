// src/services/validation.js
export const phoneNumberRegex = /^[+]?[0-9]{10,15}$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validatePhone(number) {
    return phoneNumberRegex.test(number);
}

export function validateEmail(email) {
    return emailRegex.test(email);
}
export function hasNullOrUndefined(variables) {
    // Kiểm tra nếu biến đầu vào không phải là mảng

    // Dùng phương thức some để kiểm tra điều kiện cho từng phần tử trong mảng
    return variables.some(variable => variable === null || variable === undefined);
}
