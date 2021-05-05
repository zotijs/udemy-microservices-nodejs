import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  // env variables check
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }

  // connect to db
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }

  // start listening for incoming traffic
  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
};

start();
