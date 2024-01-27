import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IEmployee } from './employees.interface';
import { Employee } from './employees.model';

const createEmployee = async (
  employee: IEmployee,
): Promise<IEmployee | null> => {
  const createdEmployee = await Employee.create(employee);

  if (!createdEmployee) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create Employee');
  }
  return createdEmployee;
};

const getAllEmployee = async (): Promise<IEmployee[] | []> => {
  const employees = await Employee.find({});

  return employees;
};

const getSingleEmployee = async (id: string): Promise<IEmployee | null> => {
  const result = await Employee.findById(id);
  return result;
};

const updateEmployee = async (
  id: string,
  payload: Partial<IEmployee>,
): Promise<IEmployee | null> => {
  const isExist = await Employee.findById(id);

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Employee not found');
  }

  const result = await Employee.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return result;
};

const deleteEmployee = async (id: string) => {
  const isExist = await Employee.findById(id);

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Employee not found');
  }

  const result = await Employee.findByIdAndDelete(id);
  return result;
};

export const EmployeeServices = {
  createEmployee,
  getAllEmployee,
  getSingleEmployee,
  updateEmployee,
  deleteEmployee,
};
