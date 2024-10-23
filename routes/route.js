import express from "express";
import { getBooks , creatBook , deleteBook } from "../controllers/books.js";
const router = express.Router();

router.get("/getbooks" , getBooks);
router.post("/createbook" , creatBook);
router.delete("/:id" , deleteBook);
export default router
