import express from "express";
import mongoose from "mongoose";
import { errorHandler } from "./middleware/errorhandler.middleware.js";
import MainRouter from "./routes/main.routes.js";

const app = express();
const PORT = 3000;
app.use(express.json());

app.use("/", MainRouter);

async function bootrstarp() {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log("successfully connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

bootrstarp();
app.use(errorHandler);
