import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from './routes/users.js'
import { recipesRouter } from "./routes/recipes.js";
import 'dotenv/config'
const PORT = 3001 || process.env.PORT
const MONGO_URL = process.env.MONGO_URL
const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth",userRouter)
app.use("/recipes",recipesRouter)

mongoose.connect(
  MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.listen(PORT, () => {
  console.log("Server Started");
});
