// import express from "express";
// import BookModel from "../models/books.js";
// export  async function getBooks(request , response){

//     try{
//         const books = await BookModel.find().select(["_v", "-_id"]);
//         response.json(books);
//     } catch(err){
//         console.log(err);
//         response.status(500).json({error: 'Failed to fetch books'});

//     }
// }
import express from "express";
import BookModel from "../models/books.js";

export async function getBooks(request, response) {
    try {
        const books = await BookModel.find().select(["-__v -_id"]); // Excluding version key and _id
        response.json(books);
    } catch (err) {
        console.error(err);
        response.status(500).json({ error: 'Failed to fetch books' });
    }
}

export async function creatBook(request , response){
    // console.log(request.body,'===========');
   try{

    const newBook = new BookModel(request.body);
    await newBook.save();
    response.json({ message: 'Book added successfully'});
    console.log(newBook)
   } catch(err){
    console.log(err);
    response.status(500).json({ error: 'Failed to add book'})
   }

    // response.send("Book Added");
    

}
export function deleteBook(request , response){}