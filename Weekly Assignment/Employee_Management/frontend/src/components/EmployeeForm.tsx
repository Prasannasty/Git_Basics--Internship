import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './EmployeeForm.css';

interface Employee {
  _id?: string;
  name: string;
  email: string;
  role: string;
}

interface Props {
  onSubmit: (employee: Omit<Employee, '_id'>, id?: string) => void;
  editingEmployee?: Employee | null;
  onCancelEdit?: () => void;
  error?: string;
}

const initialForm: Omit<Employee, '_id'> = {
  name: '',
  email: '',
  role: '',
};

const EmployeeForm: React.FC<Props> = ({ onSubmit, editingEmployee, onCancelEdit, error }) => {
  const [form, setForm] = useState(initialForm);
  const [originalForm, setOriginalForm] = useState(initialForm); 
  const [formError, setFormError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (editingEmployee) {
      const newForm = {
        name: editingEmployee.name,
        email: editingEmployee.email,
        role: editingEmployee.role,
      };
      setForm(newForm);
      setOriginalForm(newForm);
    } else {
      setForm(initialForm);
      setOriginalForm(initialForm);
    }
    setFormError(null);
  }, [editingEmployee]);

  useEffect(() => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const valid = form.name.trim() !== '' && form.role.trim() !== '' && emailRegex.test(form.email);
    setIsValid(valid);

    const changed =
      form.name !== originalForm.name ||
      form.email !== originalForm.email ||
      form.role !== originalForm.role;
    setHasChanged(changed);
  }, [form, originalForm]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValid) {
      setFormError('Please fill out all fields correctly.');
      return;
    }

    setLoading(true);
    setFormError(null);

    setTimeout(() => {
      onSubmit(form, editingEmployee?._id);
      setForm(initialForm);
      setOriginalForm(initialForm);
      setLoading(false);

      toast.success(editingEmployee ? 'Employee updated successfully!' : 'Employee added successfully!', {
        position: 'top-center',
        autoClose: 3000,
      });
    }, 3000);
  };

  return (
    <div className="container">
      <ToastContainer />
      {loading && (
        <div className="overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div className={`form-content ${loading ? 'blurred' : ''}`}>
        <div className="form-header">
          <h2 className="form-title">{editingEmployee ? 'Edit Employee' : 'Add Employee'}</h2>
          <button className="list-btn" onClick={() => navigate('/employees')}>
            View All Employees
          </button>
        </div>
        <form className="employee-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="name">Full Name</label>
          </div>
          <div className="form-group">
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="email">Email Address</label>
          </div>
          <div className="form-group">
            <input
              id="role"
              name="role"
              type="text"
              value={form.role}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="role">Job Role</label>
          </div>
          <button
            type="submit"
            className="btn submit-btn"
            disabled={!isValid || !hasChanged || loading}
          >
            {loading ? 'Submitting...' : editingEmployee ? 'Update' : 'Add'}
          </button>
          {formError && <div className="error-msg">{formError}</div>}
          {error && <div className="error-msg">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
