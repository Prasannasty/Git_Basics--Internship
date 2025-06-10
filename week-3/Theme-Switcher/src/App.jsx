import React from "react";
import { CssBaseline, Box } from "@mui/material";
import { CustomThemeProvider } from "./ThemeContext";
import { AuthProvider } from "./AuthContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <AuthProvider>
      <CustomThemeProvider>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh", 
          }}
        >
          <Navbar />
          <Box
            sx={{
              paddingTop: "4rem",
              flexGrow: 1,
            }}
          >
            <Home />
          </Box>

          <Footer />
        </Box>
        
      </CustomThemeProvider>
    </AuthProvider>
  );
};

export default App;
