
import express from "express";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/index.mjs";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import ConnectDB from "./config/db.mjs";

// mongodb connection

ConnectDB();

// initialize app
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());

//cors
app.use(cors());

//  routes
const __dirname = path.resolve();
app.use("/", express.static(path.join(__dirname, './web/dist')));
app.use('*', express.static(path.join(__dirname, './web/dist')));
app.use("/api/v1/user", router);

//  port

const port = process.env.PORT || 8080;

// listen port

app.listen(port, () => {
  console.log(
    `Server is running in ${process.env.NODE_MODE} mode on port ${port}`.bgCyan
      .white
  );
});
