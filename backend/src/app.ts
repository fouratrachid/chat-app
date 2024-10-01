import express from 'express';
import { config } from 'dotenv';
import errorHandler from './utils/errorHandler';
import appRouter from './routes';

config();

const app = express();
// Middleware
app.use(express.json());


app.use(express.json());
app.use(errorHandler);
app.use(appRouter) ; 
export default app;


