import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Snackbar, Alert } from '@mui/material';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setOpenSnackbar(true);

    setFormData({ name: '', email: '', message: '' });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  return (
    <Box id="contact" className="contact">
      <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
        Contact me
      </Typography>
      <Box component="form" className="contact-form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField  label="Your Name"  name="name"  value={formData.name}  onChange={handleChange}  fullWidth  variant="outlined"  required  autoComplete="name"  className="input-field"
        />
        <TextField
          label="Your Email"
          name="email"  value={formData.email} onChange={handleChange}         fullWidth   variant="outlined"
          required  type="email"  autoComplete="email"  className="input-field"
        />
        <TextField
          label="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          multiline
          rows={5}
          variant="outlined"
          required
          className="input-field"
        />
        <Button variant="contained" type="submit" className="submit-button">
          Send Message
        </Button>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%', fontSize: '1.3rem',  fontWeight: 'bold',  padding: '12px 24px',  letterSpacing: '0.05em',  boxShadow: 3,
          }}
        >
          User data has been submitted!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
