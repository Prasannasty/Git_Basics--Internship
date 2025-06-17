import React, { useState } from 'react';
import { Employee } from '../api/employeeApi';
import { Table,TableHead,TableRow,TableCell,TableBody,Button,TableContainer,Paper,TablePagination,Typography,Box,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEditClick = (emp: Employee) => {
    toast(
      ({ closeToast }) => (
        <div>
          <p>Are you sure you want to edit <strong>{emp.name}</strong>?</p>
          <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={() => {
                onEdit(emp);
                closeToast?.();
                toast.success('Edit confirmed!', { position: 'top-center', autoClose: 2000 });
                navigate('/');
              }}
            >
              Yes
            </Button>
            <Button
              variant="outlined"
              size="small"
              color="secondary"
              onClick={() => {
                closeToast?.();
                toast.info('Edit cancelled.', { position: 'top-center', autoClose: 2000 });
              }}
            >
              No
            </Button>
          </div>
        </div>
      ),
      {
        position: 'top-center',
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
        draggable: false,
      }
    );
  };

  const handleDeleteClick = (id: string) => {
    setSelectedId(id);
    setOpenConfirm(true);
  };

  const handleConfirmDelete = () => {
    if (selectedId) {
      onDelete(selectedId);
      toast.success('Employee deleted successfully!', { position: 'top-center' });
    }
    setOpenConfirm(false);
    setSelectedId(null);
  };

  const handleCancelDelete = () => {
    setOpenConfirm(false);
    setSelectedId(null);
  };

  return (
    <div className="table-container">
      <ToastContainer position="top-center" autoClose={3000} />

      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" fontWeight="bold">
          Employee List
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/')}>
          Back to Form
        </Button>
      </Box>

      {/* Table */}
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
            {employees
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((emp) => (
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
                      style={{ marginRight: '10px' }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => emp._id && handleDeleteClick(emp._id)}
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

      <Dialog open={openConfirm} onClose={handleCancelDelete}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this employee? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EmployeeTable;
