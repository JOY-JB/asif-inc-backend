"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleValidationError = (error) => {
    const errors = Object.values(error.errors).map(el => ({
        path: el === null || el === void 0 ? void 0 : el.path,
        message: el === null || el === void 0 ? void 0 : el.message,
    }));
    const statusCode = 400;
    const message = 'Validation Error';
    return {
        statusCode,
        message,
        errorMessages: errors,
    };
};
exports.default = handleValidationError;
