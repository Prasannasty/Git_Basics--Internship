import React, { useState } from 'react';
import { Employee } from '../api/employeeApi';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TableContainer,
  Paper,
  TablePagination,
  Typography,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './EmployeeTable.css';

interface Props {
  employees: Employee[];
  onEdit: (emp: Employee) => void;
  onDelete: (id: string) => void;
}

const EmployeeTable: React.FC<Props> = ({ employees, onEdit, onDelete }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEditClick = (emp: Employee) => {
    const confirmEdit = window.confirm("Are you sure you want to update this employee?");
    if (confirmEdit) {
      onEdit(emp);
      navigate('/');
    }
  };

  return (
    <div className="table-container">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" fontWeight="bold">
          Employee List
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/')}>
          Back to Form
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Role</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((emp) => (
              <TableRow key={emp._id}>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.email}</TableCell>
                <TableCell>{emp.role}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={() => handleEditClick(emp)}
                    className="edit-button"
                    style={{ marginRight: '10px' }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => emp._id && onDelete(emp._id)}
                    className="delete-button"
                    disabled={!emp._id}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}

            {employees.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No employees found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={employees.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </TableContainer>
    </div>
  );
};

export default EmployeeTable;
