import express, { Request, Response } from "express";
import * as bodyParser from 'body-parser';
import router from "./Router/bookrouter";

const app = express();
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use('/', router);
app.get("/", (req: Request, res: Response) => res.send("hi"))


const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});