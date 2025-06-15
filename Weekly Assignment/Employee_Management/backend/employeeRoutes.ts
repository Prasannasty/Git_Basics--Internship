import { Router } from 'express';
import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee
} from './employeeController';

const router = Router();

router.get('/employees', getEmployees);
router.post('/employees', addEmployee);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);

export default router;