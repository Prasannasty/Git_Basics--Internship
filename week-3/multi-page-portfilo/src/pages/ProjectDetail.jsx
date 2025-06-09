import React, { useState } from "react";
import { useParams, useNavigate, Link as RouterLink } from "react-router-dom";
import projects from "../data/projectsData";
import {
  Container,
  Typography,
  Button,
  Box,
  Link,
  Breadcrumbs,
  Card,
  CardContent,
  LinearProgress,
  Stack,
} from "@mui/material";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [showSkills, setShowSkills] = useState(false);

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <Container sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Project not found
        </Typography>
        <Button variant="contained" onClick={() => navigate("/projects")}>
          Back to Projects
        </Button>
      </Container>
    );
  }

  const projectDetails = project.details || project.description;
  const skills = project.skills || [];

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      {/* Breadcrumbs with white color */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3, color: "white" }}>
        <Link
          component={RouterLink}
          underline="hover"
          to="/projects"
          sx={{ color: "white", "&:hover": { color: "#ddd" } }}
        >
          Projects
        </Link>
        <Typography sx={{ color: "white" }}>{project.title}</Typography>
        {skills.length > 0 && (
          <Typography
            onClick={() => setShowSkills(!showSkills)}
            sx={{
              cursor: "pointer",
              color: showSkills ? "white" : "rgba(255,255,255,0.7)",
              fontWeight: showSkills ? "bold" : "normal",
              "&:hover": { color: "white" },
            }}
          >
            Skills
          </Typography>
        )}
      </Breadcrumbs>

      {/* Project Overview Card */}
      <Card variant="outlined" sx={{ mb: 4, p: 2, bgcolor: "#f5f5f5" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {project.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {projectDetails}
          </Typography>
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            View on GitHub
          </Link>
        </CardContent>
      </Card>

      {/* Skills section (toggle visibility) */}
      {showSkills && skills.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Tech Stack & Skill Levels
          </Typography>
          <Stack spacing={3}>
            {skills.map(({ name, progress }, index) => (
              <Box
                key={index}
                display="flex"
                alignItems="center"
                gap={2}
                sx={{ bgcolor: "#e0e0e0", p: 1, borderRadius: 1 }}
              >
                <Typography sx={{ minWidth: 100 }}>{name}</Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <LinearProgress variant="determinate" value={progress} />
                </Box>
                <Typography sx={{ minWidth: 35, textAlign: "right" }}>
                  {progress}%
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      )}

      {/* Back Button */}
      <Button variant="outlined" onClick={() => navigate("/projects")}>
        Back to Projects
      </Button>
    </Container>
  );
};

export default ProjectDetail;
