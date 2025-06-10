import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const lightTheme = {
    palette: {
        mode: 'light',
        background: { default: '#f5f5f5' },
        primary: { main: '#1976d2' },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h6: {
            fontWeight: 500,
        },
    },
};

const darkTheme = {
    palette: {
        mode: 'dark',
        background: { default: '#303030' },
        primary: { main: '#90caf9' },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h6: {
            fontWeight: 500,
        },
    },
};

export const ThemeContext = createContext({
    mode: 'light',
    toggleTheme: () => { },
});

export const CustomThemeProvider = ({ children }) => {
    const [mode, setMode] = useState(() => {
        try {
            return localStorage.getItem('themeMode') || 'light';
        } catch (error) {
            console.error("Error accessing localStorage:", error);
            return 'light';
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('themeMode', mode);
        } catch (error) {
            console.error("Error saving to localStorage:", error);
        }
    }, [mode]);

    const toggleTheme = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    };

    const theme = createTheme(mode === 'light' ? lightTheme : darkTheme);

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
