import express from 'express';
import cors from 'cors';
import employeeRoutes from './employeeRoutes';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());


app.use('/api', employeeRoutes);

export default app;