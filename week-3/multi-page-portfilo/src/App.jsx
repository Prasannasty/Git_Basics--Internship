import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import { Box } from '@mui/material';
const App = () => {
  return (
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',  
      }}
    >
      <Navbar />
      <Box sx={{ flexGrow: 1, p: 2 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
         <Route path="/projects/:projectId" element={<ProjectDetail />} />   
         <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Box>
     < Footer />
      </Box>
  );
};

export default App;