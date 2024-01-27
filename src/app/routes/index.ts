import express from 'express';
import { EmployeeRoutes } from '../modules/employees/employees.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/employees',
    routes: EmployeeRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));

export default router;
