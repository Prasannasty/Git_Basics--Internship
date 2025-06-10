import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import ProtectedRoute from './components/ProtectedRoute';
import RouteResetter from './components/RouteResetter'; // ✅ import the resetter
import { AuthProvider } from './context/AuthContext'; // ✅ wrap app with context

const App = () => {
  return (
    <AuthProvider>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <RouteResetter /> {/* ✅ Automatically resets auth on route changes */}
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* ❌ /projects is public */}
            <Route path="/projects" element={<Projects />} />

            {/* ✅ /projects/:id is protected */}
            <Route
              path="/projects/:projectId"
              element={
                <ProtectedRoute>
                  <ProjectDetail />
                </ProtectedRoute>
              }
            />

            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </AuthProvider>
  );
};

export default App;
