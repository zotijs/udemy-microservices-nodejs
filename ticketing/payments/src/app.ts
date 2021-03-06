import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { createChargeRouter } from "./routes/new";

import {
  errorHandler,
  NotFoundError,
  currentUser,
} from "@zotijstickets/common";

const app = express();

app.set("trust proxy", true);

app.use(json());
app.use(
  cookieSession({
    signed: false,
    // make 'secure: false' on testing
    // secure: process.env.NODE_ENV !== "test",
    // for deployment, make it dynamic using process.env
    secure: false,
  })
);

app.use(currentUser);
app.use(createChargeRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
