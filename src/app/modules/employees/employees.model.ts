import { Schema, model } from 'mongoose';
import { EmployeeModel, IEmployee } from './employees.interface';

const employeeSchema = new Schema<IEmployee, EmployeeModel>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNo: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    isBlocked: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const Employee = model<IEmployee, EmployeeModel>(
  'Employee',
  employeeSchema,
);
