import React from "react";
import { Box, Typography, Card, CardContent, Grid, Container } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100%", 
        bgcolor: "background.default",
        color: "text.primary",
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" gutterBottom>
            Welcome to the Theme Switcher App
          </Typography>
          <Typography variant="h6">
            Experience smooth dark/light theme toggling and global authentication state across your app.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card elevation={4} sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  🔄 Theme Switching
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3, 
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  Easily switch between light and dark modes using the toggle in the Navbar. Your choice is saved
                  in localStorage and applied across the app.  This is some extra text to demonstrate the
                  truncation.  And even more text to make sure it's really working.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={4} sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  🔐 Global Authentication
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3, 
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  Manage login/logout state across all components using AuthContext. This can be expanded
                  to protect routes and manage user-specific content.  This is some extra text to demonstrate the
                  truncation.  And even more text to make sure it's really working.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={4} sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  ⚙️ Persistent State
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  Both theme and authentication preferences are persisted using localStorage, so users don’t lose
                  their settings on refresh or page reopen.  This is some extra text to demonstrate the
                  truncation.  And even more text to make sure it's really working.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={4} sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  🚀 Clean Architecture
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3, 
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  This project follows clean separation of concerns using React Context, MUI theming,
                  and reusable components for easy scalability and maintenance.  This is some extra text to demonstrate the
                  truncation.  And even more text to make sure it's really working.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
