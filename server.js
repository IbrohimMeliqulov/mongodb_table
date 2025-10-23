import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import { errorHandler } from "./src/middleware/errorhandler.middleware.js";
import MainRouter from "./src/routes/main.routes.js";
dotenv.config()


const app = express();
const PORT = process.env.PORT;
const MongoDB=process.env.MongoDB
app.use(express.json());

app.use("/", MainRouter);

async function bootstrap() {
  try {
    await mongoose.connect(MongoDB);
    console.log("successfully connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

bootstrap();
app.use(errorHandler);
