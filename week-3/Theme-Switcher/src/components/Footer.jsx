import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                width: '100%', 
                backgroundColor: 'rgba(55, 54, 67, 0.87)',
                color: 'white',
                padding: '1rem',
                textAlign: 'center',
            }}
        >
            <Typography variant="body2">
                &copy; {new Date().getFullYear()} Theme Switcher
            </Typography>
        </Box>
    );
};

export default Footer;
