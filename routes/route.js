import express from "express";
import { getBooks , creatBook , deleteBook } from "../controllers/books.js";
import { getAuthors, createAuthor, deleteAuthor} from "../controllers/authors.js";
 import { getBorrowers, createBorrower, deleteBorrower } from "../controllers/borrowers.js";
const router = express.Router();

router.get("/getbooks" , getBooks);
router.post("/createbook" , creatBook);
router.delete("/:id" , deleteBook);


router.get("/getauthors",  getAuthors);
router.post("/createauthor", createAuthor);
router.delete("/deleteauthor/:id", deleteAuthor);

router.get("/getborrowers", getBorrowers);
router.post("/createborrower", createBorrower);
router.delete("/deleteborrower/:id", deleteBorrower);
export default router
