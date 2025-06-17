import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Employee, fetchEmployees,addEmployee,updateEmployee,deleteEmployee,} from './api/employeeApi';
import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const loadEmployees = async () => {
    try {
      const res = await fetchEmployees();
      setEmployees(res.data);
    } catch {
      setApiError('Failed to fetch employees.');
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleAddOrUpdate = async (
    employee: Omit<Employee, '_id'>,
    id?: string
  ) => {
    try {
      setApiError(null);
      if (id) {
        await updateEmployee(id, employee);
      } else {
        await addEmployee(employee);
      }
      setEditingEmployee(null);
      await loadEmployees();
    } catch (err: any) {
      setApiError(err.response?.data?.error || 'Operation failed.');
    }
  };

  const handleEdit = (employee: Employee) => setEditingEmployee(employee);

  const handleDelete = async (id: string) => {
    try {
      setApiError(null);
      await deleteEmployee(id);
      await loadEmployees();
    } catch {
      setApiError('Delete failed.');
    }
  };

  const handleCancelEdit = () => setEditingEmployee(null);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <main style={{ padding: 32, maxWidth: 600, margin: 'auto' }}>
              <EmployeeForm
                onSubmit={handleAddOrUpdate}
                editingEmployee={editingEmployee}
                onCancelEdit={handleCancelEdit}
                error={apiError || undefined}
              />
            </main>
            <Footer />
          </>
        }
      />
      <Route
        path="/employees"
        element={
          <>
            <Header />
            <main style={{ padding: 32, maxWidth: 900, margin: 'auto' }}>
              <EmployeeTable
                employees={employees}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </main>
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default App;
