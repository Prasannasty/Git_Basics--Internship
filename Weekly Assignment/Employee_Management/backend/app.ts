import express from 'express';
import cors from 'cors';
import employeeRoutes from './employeeRoutes';

const app = express();

// Enable CORS for all origins (default)
app.use(cors({
  origin: 'http://localhost:3000'
}));
// Parse JSON bodies
app.use(express.json());

// API routes
app.use('/api', employeeRoutes);

export default app;