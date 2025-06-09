import React from 'react';
import { Box, Typography, LinearProgress, Tooltip } from '@mui/material';
import HtmlIcon from '@mui/icons-material/Language'; // example icon
import CssIcon from '@mui/icons-material/Palette';
import JsIcon from '@mui/icons-material/Code';
import ReactIcon from '@mui/icons-material/AutoAwesome';

const skills = [
  { name: 'HTML', level: 90, color: '#e34c26', icon: <HtmlIcon />, description: 'Markup language for web pages.' },
  { name: 'CSS', level: 85, color: '#264de4', icon: <CssIcon />, description: 'Styling and layout of web pages.' },
  { name: 'JavaScript', level: 80, color: '#f0db4f', icon: <JsIcon />, description: 'Programming language for interactive web.' },
  { name: 'React', level: 75, color: '#61dafb', icon: <ReactIcon />, description: 'JavaScript library for building UI.' },
];

const Skills = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 200); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', p: 4, bgcolor: '#f5f7fa', borderRadius: 3 }}>
      <Typography variant="h3" align="center" gutterBottom>My skills</Typography>
      {skills.map(({ name, level, color, icon, description }) => (
        <Box key={name} sx={{ mb: 4 }}>
          <Tooltip title={description} arrow>
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
              <Box display="flex" alignItems="center" gap={1}>
                {icon}
                <Typography variant="h6" sx={{ fontWeight: '600' }}>{name}</Typography>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: '600' }}>{level}%</Typography>
            </Box>
          </Tooltip>
          <LinearProgress
            variant="determinate"
            value={progress >= 100 ? level : 0}
            sx={{
              height: 20,
              borderRadius: 10,
              bgcolor: '#ddd',
              '& .MuiLinearProgress-bar': { backgroundColor: color, transition: 'width 1.5s ease-in-out' },
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Skills;
