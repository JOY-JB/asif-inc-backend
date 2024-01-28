"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const employees_controller_1 = require("./employees.controller");
const employees_validation_1 = require("./employees.validation");
const router = express_1.default.Router();
router.get('/', employees_controller_1.EmployeeController.getAllEmployee);
router.get('/employee/:id', employees_controller_1.EmployeeController.getSingleEmployee);
router.post('/create-employee', (0, validateRequest_1.default)(employees_validation_1.EmployeeValidation.createEmployeeZodSchema), employees_controller_1.EmployeeController.createEmployee);
router.patch('/employee/:id', employees_controller_1.EmployeeController.updateEmployee);
router.delete('/employee/:id', employees_controller_1.EmployeeController.deleteEmployee);
exports.EmployeeRoutes = router;
