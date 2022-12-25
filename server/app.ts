import cors from 'cors';
import express from "express";
import morgan from 'morgan';
import router from './routes';

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json())

app.use("/api", router);

export default app;