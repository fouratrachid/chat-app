import express from 'express';
import { config } from 'dotenv';
import errorHandler from './utils/errorHandler';
import appRouter from './routes';
config();
import morgan from "morgan";
const port = 3002;


const app = express();
// Middlewares

app.use(morgan("dev"));
app.use(express.json());
app.use(errorHandler);
app.use("/api/v1", appRouter)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})