"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleZodError = (error) => {
    return {
        statusCode: 400,
        message: 'Validation error',
        errorMessages: error === null || error === void 0 ? void 0 : error.errors.map(error => ({
            path: error === null || error === void 0 ? void 0 : error.path[error.path.length - 1],
            message: error === null || error === void 0 ? void 0 : error.message,
        })),
    };
};
exports.default = handleZodError;
