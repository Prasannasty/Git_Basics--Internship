import React, { useState } from 'react';
import { Box, Typography, Avatar, Breadcrumbs, Link, useMediaQuery, useTheme } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import '../styles/About.css';
import prasannaImage from '../assets/Prasanna shetty.jpg';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [section, setSection] = useState('More');

  const handleBreadcrumbClick = (label) => {
    setSection(label);
  };

  const renderSectionContent = () => {
    switch (section) {
      case 'Education':
        return (
          <Box className="about-details">
            <Typography variant="h6">📚 10th: GPUC Udupi</Typography>
            <Typography variant="h6">🏫 12th: SDPT College, Mandarthi</Typography>
            <Typography variant="h6">🎓 B.Tech: UVCE Bangalore</Typography>
          </Box>
        );
      case 'Skills':
        return (
          <Box className="about-details">
            <Typography variant="h6">💻 Java, Spring Boot, React</Typography>
            <Typography variant="h6">🌐 HTML, CSS, JavaScript</Typography>
            <Typography variant="h6">🗃️ SQL</Typography>
          </Box>
        );
      default:
        return (
          <Typography variant="body1" className="about-text" paragraph>
            A full-stack developer with a knack for crafting clean and efficient code using React, Node.js, Express, and Firebase.
          </Typography>
        );
    }
  };

  return (
    <Box
      id="about"
      className="about-section fade-in-up"
      sx={{ minHeight: '100vh', px: 4,    py: 10,    display: 'flex',    flexDirection: isMobile ? 'column' : 'row',    alignItems: 'center',    justifyContent: 'center',    backgroundColor: theme.palette.mode === 'dark' ? '#1e1e2f' : '#f0f0f0',  
      }}
    >
      <Box
        className="avatar-container"
        sx={{  flex: 1, display: 'flex', justifyContent: 'center', mb: isMobile ? 4 : 0,
        }}
      >
        <Avatar
          src={prasannaImage}
          alt="Prasanna"
          sx={{  width: 200, height: 200, border: '4px solid white', boxShadow: '0 8px 20px rgba(0,0,0,0.2)',transition: 'transform 0.4s ease',
       '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
      </Box>

      <Box
        sx={{
          flex: 2,  maxWidth: 600,   ml: isMobile ? 0 : 6,   textAlign: isMobile ? 'center' : 'left',
        }}
      >
        <Typography variant="h3" className="about-heading" gutterBottom>
            <span className="highlight">Prasanna Shetty</span>
        </Typography>

        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{ mb: 2 }}
        >
          <Link
            underline="hover"
            color={section === 'More' ? 'text.primary' : 'inherit'}
            onClick={() => handleBreadcrumbClick('More')}
            sx={{ cursor: 'pointer' }}
          >
            More
          </Link>
          <Link
            underline="hover"
            color={section === 'Education' ? 'text.primary' : 'inherit'}
            onClick={() => handleBreadcrumbClick('Education')}
            sx={{ cursor: 'pointer' }}
          >
            Education
          </Link>
          <Link
            underline="hover"
            color={section === 'Skills' ? 'text.primary' : 'inherit'}
            onClick={() => handleBreadcrumbClick('Skills')}
            sx={{ cursor: 'pointer' }}
          >
            Skills
          </Link>
        </Breadcrumbs>

        {renderSectionContent()}
      </Box>
    </Box>
  );
};

export default About;
