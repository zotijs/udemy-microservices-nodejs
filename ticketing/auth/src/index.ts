import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  // env variables check
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }

  // connect to db
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth", {
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
