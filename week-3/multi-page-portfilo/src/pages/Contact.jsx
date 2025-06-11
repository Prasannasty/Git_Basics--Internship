import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Container,
  Collapse,
  Alert,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  CircularProgress,
} from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    emailjs
      .send(
        "service_mdcb5k8",
        "template_wt93e18",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "New Contact Request",
        },
        "yVoe6s7A0Ffahzbqc"
      )
      .then(() => {
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setShowSuccess(false), 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("❌ Message sending failed. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 14, mb: 10, position: "relative" }}>
      {/* Loading Overlay */}
      {isLoading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(4px)",
            zIndex: 1300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress size={80} thickness={5} />
        </Box>
      )}

      <Paper
        elevation={6}
        sx={{
          p: 6,
          borderRadius: 3,
          backgroundColor: "#f9fafb",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.12)",
          filter: isLoading ? "blur(3px)" : "none",
          pointerEvents: isLoading ? "none" : "auto",
          userSelect: isLoading ? "none" : "auto",
          transition: "filter 0.3s ease",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          sx={{
            fontWeight: 700,
            letterSpacing: 1,
            color: "#222",
            mb: 2,
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          Contact Me
        </Typography>

        <Typography
          variant="body1"
          textAlign="center"
          sx={{
            mb: 5,
            color: "#555",
            fontSize: "1.1rem",
            lineHeight: 1.6,
          }}
        >
          Have a question, idea, or project? Let’s connect and make it happen.
        </Typography>

        <Collapse in={showSuccess}>
          <Alert
            severity="success"
            sx={{
              mb: 4,
              borderRadius: 2,
              fontWeight: 600,
              letterSpacing: 0.4,
              boxShadow: "0 3px 12px rgba(0,0,0,0.1)",
            }}
          >
            ✅ Message sent successfully!
          </Alert>
        </Collapse>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <TextField
            fullWidth
            required
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                fontSize: "1rem",
              },
            }}
          />

          <TextField
            fullWidth
            required
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                fontSize: "1rem",
              },
            }}
          />

          <TextField
            fullWidth
            required
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={!!errors.message}
            helperText={errors.message}
            multiline
            rows={5}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                fontSize: "1rem",
              },
            }}
          />

          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            type="submit"
            disabled={isLoading} // disable button during loading
            sx={{
              mt: 1,
              borderRadius: 3,
              fontWeight: 700,
              letterSpacing: 1,
              paddingY: 1.5,
              textTransform: "uppercase",
              boxShadow: "0 6px 12px rgba(25, 118, 210, 0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "0 8px 20px rgba(25, 118, 210, 0.5)",
                transform: "translateY(-3px)",
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact;
