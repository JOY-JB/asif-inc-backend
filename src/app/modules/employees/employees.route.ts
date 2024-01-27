import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { EmployeeController } from './employees.controller';
import { EmployeeValidation } from './employees.validation';

const router = express.Router();

router.get('/', EmployeeController.getAllEmployee);

router.get('/employee/:id', EmployeeController.getSingleEmployee);

router.post(
  '/create-employee',
  validateRequest(EmployeeValidation.createEmployeeZodSchema),
  EmployeeController.createEmployee,
);

router.patch('/employee/:id', EmployeeController.updateEmployee);

router.delete('/employee/:id', EmployeeController.deleteEmployee);

export const EmployeeRoutes = router;
