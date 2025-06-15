import axios from 'axios';

const API_URL = 'http://localhost:5000/api/employees';

export interface Employee {
  _id?: string;
  name: string;
  email: string;
  role: string;
}

export const fetchEmployees = () => axios.get<Employee[]>(API_URL);

export const addEmployee = (data: Omit<Employee, '_id'>) =>
  axios.post<Employee>(API_URL, data);

export const updateEmployee = (id: string, data: Omit<Employee, '_id'>) =>
  axios.put<Employee>(`${API_URL}/${id}`, data);

export const deleteEmployee = (id: string) =>
  axios.delete<{ message: string }>(`${API_URL}/${id}`);