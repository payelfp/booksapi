import express, { Request, Response } from "express";

import * as bookController from "./controllers/bookcontrollers";


const app = express();
app.set("port", process.env.PORT || 3000);

app.get("/", (req: Request, res: Response) => res.send("hi"))

app.get("/books", bookController.allBooks);
app.get("/book/:id", bookController.getBook);
app.post("/book", bookController.addBook);
app.put("/book/:id", bookController.updateBook);
app.delete("/book/:id", bookController.deleteBook);

const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});