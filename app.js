import express, { Router } from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import { Dbconnection } from "./src/config/main.js";
import UserRouter from "./src/routes/user.js"
import AdminRouter from "./src/routes/admin.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());
Dbconnection();
app.use(UserRouter);
app.use(AdminRouter);

app.listen(process.env.PORT, () => {
  console.log("listening on *:" + process.env.PORT);
});
