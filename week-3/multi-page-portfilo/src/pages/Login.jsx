import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const location = useLocation();


    const params = new URLSearchParams(location.search);
  const redirectTo = params.get("redirect") || "/projects";
 
  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      sessionStorage.setItem('isAuthenticated', 'true');
      sessionStorage.setItem('username', username);
      navigate(`/${redirectTo}`, { replace: true });
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 10, p: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Login
      </Typography>
      <TextField
        fullWidth
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" fullWidth onClick={handleLogin}>
        Login
      </Button>
    </Box>
    
  );
};

export default Login;
