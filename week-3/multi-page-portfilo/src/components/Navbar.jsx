import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);

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

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects", onClick: handleProjectsClick },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          padding: "0.5rem 2rem",
          background: "linear-gradient(to right, #3f51b5,rgb(197, 75, 219))",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src="/broken-image.jpg"
              sx={{ width: 40, height: 40, mr: 1 }}
              alt="Prasanna Shetty"
            />
            <Typography variant="h6" sx={{ color: "white" }}>
              Prasanna Shetty
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navLinks.map(({ label, to, onClick }) => (
              <Button
                key={label}
                color="inherit"
                component={NavLink}
                to={to}
                sx={linkStyle}
                onClick={onClick}
              >
                {label}
              </Button>
            ))}
          </Box>

          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setDrawerOpen(true)}
            aria-label="open menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 250 } }}
      >
        <Box
          sx={{ width: "100%", height: "100%", bgcolor: "#3f51b5", color: "white" }}
          role="presentation"
          onClick={() => setDrawerOpen(false)}
          onKeyDown={() => setDrawerOpen(false)}
        >
          <List>
            <ListItem>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, p: 2 }}>
                <Avatar
                  src="/broken-image.jpg"
                  sx={{ width: 40, height: 40 }}
                  alt="Prasanna Shetty"
                />
                <Typography variant="h6">Prasanna Shetty</Typography>
              </Box>
            </ListItem>
            {navLinks.map(({ label, to, onClick }) => (
              <ListItem key={label} disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={to}
                  onClick={onClick}
                  sx={{
                    color: "white",
                    "&.active": {
                      fontWeight: "bold",
                      bgcolor: "rgba(255, 255, 255, 0.2)",
                    },
                  }}
                >
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
