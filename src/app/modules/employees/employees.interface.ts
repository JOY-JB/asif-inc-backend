import { Model } from 'mongoose';

export type IEmployee = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  isBlocked: boolean;
};

export type EmployeeModel = Model<IEmployee, Record<string, unknown>>;
