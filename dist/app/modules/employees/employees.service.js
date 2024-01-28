"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const employees_model_1 = require("./employees.model");
const createEmployee = (employee) => __awaiter(void 0, void 0, void 0, function* () {
    const createdEmployee = yield employees_model_1.Employee.create(employee);
    if (!createdEmployee) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to create Employee');
    }
    return createdEmployee;
});
const getAllEmployee = () => __awaiter(void 0, void 0, void 0, function* () {
    const employees = yield employees_model_1.Employee.find({});
    return employees;
});
const getSingleEmployee = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield employees_model_1.Employee.findById(id);
    return result;
});
const updateEmployee = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield employees_model_1.Employee.findById(id);
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Employee not found');
    }
    const result = yield employees_model_1.Employee.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return result;
});
const deleteEmployee = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield employees_model_1.Employee.findById(id);
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Employee not found');
    }
    const result = yield employees_model_1.Employee.findByIdAndDelete(id);
    return result;
});
exports.EmployeeServices = {
    createEmployee,
    getAllEmployee,
    getSingleEmployee,
    updateEmployee,
    deleteEmployee,
};
