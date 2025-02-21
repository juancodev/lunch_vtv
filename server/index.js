import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import {
  configServer
} from "./config/index.js";
import {
  RouterAPI
} from "./routers/index.js";
import {
  logErrors,
  errorHandler
} from "./middleware/error.handle.js";

import "./utils/auth/index.js";
import "./utils/cloudinary/index.js";

const {
  port,
  dbUserName,
  dbPassword,
  dbName,
  dbHost
} = configServer;

const URI = `mongodb+srv://${dbUserName}:${dbPassword}@${dbName}.${dbHost}/lunchvtv?retryWrites=true&w=majority&appName=Cluster0`;
// const URI = `mongodb://0.0.0.0:27017/`;

const app = express();

// app.use(cors({
//   origin: [
//     "http://localhost:3000",
//     "https://stream-platform-disnetiflix.vercel.app/",
//     "https://stream-platform-disnetiflix.vercel.app/auth/sign-in"
//   ]
// }));

app.use(cors());
app.use(express.json({
  limit: '50mb'
}));
app.use(express.urlencoded({
  limit: '50mb',
  extended: true
}))

RouterAPI(app);

app.use(logErrors);
app.use(errorHandler);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, async () => {
    try {
      console.log(`Starting server in port ${port}`);
      await mongoose.connect(URI);
      console.log("MongoDB Connect");
    } catch (error) {
      console.error(error);
    }
  });
}

export default app;