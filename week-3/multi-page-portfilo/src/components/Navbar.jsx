import React  from "react";
import {AppBar, Toolbar, Typography,Button,Box} from '@mui/material';
import {NavLink} from 'react-router-dom';

const Navbar=()=>{
  return(
    <AppBar position="static" color="primary" sx={{padding:'0.5rem 2rem'}}>
      <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
        <Typography variant="h5" component="div" sx={{fontWeight:'bold'}}>
          Portfilo
        </Typography>

        <Box sx={{ display:'flex',gap:2}}>
          <Button component={NavLink} to="/" exact="true" sx={{color:'white'}}>Home</Button>
          <Button component={NavLink} to="/about" exact="true" sx={{color:'white'}}>About</Button>
          <Button component={NavLink} to="/projects" exact="true" sx={{color:'white'}}>Projects</Button>
          <Button component={NavLink} to="/contact" exact="true" sx={{color:'white'}}>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;