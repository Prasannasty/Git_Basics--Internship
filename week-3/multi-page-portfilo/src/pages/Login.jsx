import React, { useEffect } from "react";
import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

    useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login"); 
    }
  }, [navigate]);
  
  const handleLogin = () => {
    localStorage.setItem("user", JSON.stringify({ name: "Prasanna" }));
    navigate("/projects");
  };

  return (
    <Container sx={{ mt: 10, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Login Page
      </Typography>
      <Button variant="contained" onClick={handleLogin}>
        Login Now
      </Button>
    </Container>
  );
};

export default Login;
