import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Your auth context
import { Container, TextField, Button, Typography, Box } from "@mui/material";


const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth(); // Your login function from auth context

  const params = new URLSearchParams(location.search);
  const redirectPath = params.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password); // Your login logic
      navigate(redirectPath, { replace: true });
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          fullWidth
          margin="normal"
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <Typography color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
          Log In
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
