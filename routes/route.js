import express from "express";
import { getBooks , creatBook , deleteBook, updateBook } from "../controllers/books.js";
import { getAuthors, createAuthor, deleteAuthor, updateAuthor} from "../controllers/authors.js";
 import { getBorrowers, createBorrower, deleteBorrower, updateBorrower } from "../controllers/borrowers.js";
const router = express.Router();

router.get("/getbooks" , getBooks);
router.post("/createbook" , creatBook);
router.delete("/deletebook/:id" , deleteBook);
router.put("/updatebook/:id" , updateBook)


router.get("/getauthors",  getAuthors);
router.post("/createauthor", createAuthor);
router.delete("/deleteauthor/:id", deleteAuthor);
router.put("/updateauthor/:id", updateAuthor)

router.get("/getborrowers", getBorrowers);
router.post("/createborrower", createBorrower);
router.delete("/deleteborrower/:id", deleteBorrower);
router.put("/updateborrower/:id" ,  updateBorrower)








export default router
