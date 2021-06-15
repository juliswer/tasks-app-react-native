import express from 'express';
import cors from 'cors';
import tasksRouter from './routes/tasks';

const app = express();

app.use(cors());

app.use(express.json());

app.use(tasksRouter);

export default app;