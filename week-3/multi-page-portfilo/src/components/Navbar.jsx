import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const linkStyle = {
    "&.active": {
      fontWeight: "bold",
      borderBottom: "1.5px solid white",
    },
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate("/login?redirect=/projects");
    } else {
      navigate("/projects");
    }
  };

  return (
    <AppBar position="static" color="primary" sx={{ padding: "0.5rem 2rem" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">My Portfolio</Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={NavLink} to="/" sx={linkStyle}>
            Home
          </Button>
          <Button color="inherit" component={NavLink} to="/about" sx={linkStyle}>
            About
          </Button>
          <Button
            color="inherit"
           component={NavLink} to="/projects"
            sx={linkStyle}
          >
            Projects
          </Button>
          <Button color="inherit" component={NavLink} to="/contact" sx={linkStyle}>
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
