"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeValidation = void 0;
const zod_1 = require("zod");
const createEmployeeZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        firstName: zod_1.z.string().min(1).max(255),
        lastName: zod_1.z.string().min(1).max(255),
        email: zod_1.z.string().email(),
        phoneNo: zod_1.z.string(),
        isBlocked: zod_1.z.boolean().optional(),
    }),
});
exports.EmployeeValidation = {
    createEmployeeZodSchema,
};
