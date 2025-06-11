import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Avatar from '@mui/material/Avatar'; // Import Avatar

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
    <AppBar
  position="static"
  sx={{
    padding: "0.5rem 2rem",
    background: "linear-gradient(to right, #3f51b5,rgb(197, 75, 219))",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
  }}
>
  <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar src="/broken-image.jpg" sx={{ width: 40, height: 40, mr: 1 }} />
      <Typography variant="h6" sx={{ color: "white" }}>
        Prasanna Shetty
      </Typography>
    </Box>
    <Box sx={{ display: "flex", gap: 2 , }}>
      <Button color="inherit" component={NavLink} to="/" sx={linkStyle}>
        Home
      </Button>
      <Button color="inherit" component={NavLink} to="/about" sx={linkStyle}>
        About
      </Button>
      <Button color="inherit" component={NavLink} to="/projects" sx={linkStyle}>
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
