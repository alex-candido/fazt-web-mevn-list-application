import cors from 'cors';
import express from "express";
import morgan from 'morgan';

const app = express();

app.use(express.json())
app.use(cors());
app.use(morgan("dev"));

app.get("/home", (req, res) => {
  return res.json("Hello World")
})

export default app;