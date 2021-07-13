import { Router } from 'express';
import * as bookController from "../controllers/bookcontrollers";

const router = Router();

router.get("/books", bookController.allBooks);
router.get("/book/:id", bookController.getBook);
router.put("/book/:id", bookController.updateBook);
router.post("/book", bookController.addBook);
router.delete("/book/:id", bookController.deleteBook);
export default router;