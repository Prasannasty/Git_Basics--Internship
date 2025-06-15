import { Request, Response } from 'express';
import Employee, { IEmployee } from './Employee';

// GET /employees
export const getEmployees = async (_: Request, res: Response) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
};

// POST /employees
export const addEmployee = async (req: Request, res: Response) => {
  try {
    const { name, email, role } = req.body;
    if (!name || !email || !role) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    const emailExists = await Employee.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ error: 'Email already exists.' });
    }
    const newEmployee = new Employee({ name, email, role });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

// PUT /employees/:id
export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const { name, email, role } = req.body;
    if (!name || !email || !role) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      { name, email, role },
      { new: true, runValidators: true }
    );
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json(employee);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE /employees/:id
export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json({ message: 'Deleted successfully' });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
