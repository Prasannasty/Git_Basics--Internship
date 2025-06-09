import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Box, Button,
  IconButton, Menu, MenuItem, Tooltip, useTheme
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleScrollTo = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setAnchorEl(null);
    }
  };

  return (
    <AppBar position="sticky" elevation={8}
      sx={{ backgroundColor: theme.palette.background.paper, color: theme.palette.text.primary, borderRadius: '0 0 12px 12px', px: { xs: 3, sm: 6 }, zIndex: (t) => t.zIndex.drawer + 1 }}>
      <Toolbar disableGutters sx={{ maxWidth: 1200, width: '100%', mx: 'auto', display: 'flex', alignItems: 'center', minHeight: 80, py: { xs: 2, sm: 3 } }}>
        <Typography variant="h4" component="button" onClick={() => handleScrollTo('#hero')}
          sx={{ fontWeight: 700, textDecoration: 'none', color: 'inherit', letterSpacing: '0.1em', fontFamily: "'Inter', sans-serif", background: 'none', border: 'none', cursor: 'pointer', '&:hover': { color: '#0ea5e9' } }}>
          MyPortfolio
        </Typography>

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          {navItems.map(({ label, href }) => (
            <Button key={label} onClick={() => handleScrollTo(href)}
              sx={{ fontWeight: 600, fontSize: 16, textTransform: 'none', color: 'inherit', '&:hover': { color: '#0ea5e9' } }}>
              {label}
            </Button>
          ))}
        </Box>

        <Box sx={{ ml: 1 }}>
          <Tooltip title="Account settings">
            <IconButton edge="end" onClick={(e) => setAnchorEl(e.currentTarget)} color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Tooltip>
          <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={() => setAnchorEl(null)}
            PaperProps={{ elevation: 4, sx: { borderRadius: 2, mt: 1.5, minWidth: 160 } }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}>
            {navItems.map(({ label, href }) => (
              <MenuItem key={label} onClick={() => handleScrollTo(href)}
                sx={{ fontWeight: 600, color: 'text.primary', '&:hover': { backgroundColor: 'rgba(14, 165, 233, 0.1)', color: '#0ea5e9' } }}>
                {label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
