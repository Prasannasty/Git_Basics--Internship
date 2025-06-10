import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Tooltip } from '@mui/material';
import { ThemeContext } from '../ThemeContext';
import { AuthContext } from '../AuthContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
    const { mode, toggleTheme } = useContext(ThemeContext);
    const { isAuthenticated, login, logout } = useContext(AuthContext);

    const toggleAuth = () => {
        isAuthenticated ? logout() : login();
    };

    return (
        <AppBar position="fixed">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" component="div">
                    Theme Switcher
                </Typography>
                <div>
                    <Tooltip title={mode === 'light' ? "Switch to Dark Mode" : "Switch to Light Mode"}>
                        <IconButton onClick={toggleTheme} color="inherit">
                            {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={isAuthenticated ? "Logout" : "Login"}>
                        <IconButton onClick={toggleAuth} color="inherit">
                            {isAuthenticated ? <LogoutIcon /> : <LoginIcon />}
                        </IconButton>
                    </Tooltip>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
