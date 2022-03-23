import express, { response } from "express";
import { createCourse } from "./routes";

const application = express();

application.get("/", createCourse)

application.listen(3000);

