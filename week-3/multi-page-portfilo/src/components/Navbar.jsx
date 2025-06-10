import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const linkStyle = {
    '&.active': {
      fontWeight: 'bold',
      borderBottom: '1.5px solid white',
    },
  };

  const handleProjectsClick = () => {
    localStorage.setItem("isAuthenticated", "false");
    navigate("/login?redirect=projects");
  };

  return (
    <AppBar position="static" color="primary" sx={{ padding: '0.5rem 2rem' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">My Portfolio</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            color="inherit"
            component={NavLink}
            to="/"
            sx={linkStyle}
          >
            Home
          </Button>

          <Button
            color="inherit"
            component={NavLink}
            to="/about"
            sx={linkStyle}
          >
            About
          </Button>

          <Button
            color="inherit"
            onClick={handleProjectsClick}
          >
            Projects
          </Button>

          <Button
            color="inherit"
            component={NavLink}
            to="/contact"
            sx={linkStyle}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
