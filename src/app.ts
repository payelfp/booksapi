import express, { Request, Response } from "express";
import * as bodyParser from 'body-parser';
import * as bookController from "./controllers/bookcontrollers";

const app = express();
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => res.send("hi"))


app.get("/books", bookController.allBooks);
app.get("/book/:id", bookController.getBook);
app.put("/book/:id", bookController.updateBook);
app.post("/book", bookController.addBook);
app.delete("/book/:id", bookController.deleteBook);

const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});