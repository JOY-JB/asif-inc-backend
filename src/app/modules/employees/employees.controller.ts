import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IEmployee } from './employees.interface';
import { EmployeeServices } from './employees.service';

const createEmployee = catchAsync(async (req: Request, res: Response) => {
  const result = await EmployeeServices.createEmployee(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Employee created successfully',
    data: result,
  });
});

const getAllEmployee = catchAsync(async (req: Request, res: Response) => {
  const result = await EmployeeServices.getAllEmployee();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Employee in Fetched successfully!!',
    data: result,
  });
});

const getSingleEmployee = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await EmployeeServices.getSingleEmployee(id);

  sendResponse<IEmployee>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Employee fetched successfully',
    data: result,
  });
});

const updateEmployee = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await EmployeeServices.updateEmployee(id, req.body);

  sendResponse<IEmployee>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Employee updated successfully',
    data: result,
  });
});
const deleteEmployee = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await EmployeeServices.deleteEmployee(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Employee deleted successfully',
    data: result,
  });
});

export const EmployeeController = {
  createEmployee,
  getAllEmployee,
  getSingleEmployee,
  updateEmployee,
  deleteEmployee,
};
