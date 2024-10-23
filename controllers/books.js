import express from "express";
import BookModel from "../models/books.js";
export function getBooks(request , response){}
export async function creatBook(request , response){
    console.log(request.body,'===========');
     const newBook = new BookModel(request.body);
    await newBook.save();
    response.send("Book Added");
    

}
export function deleteBook(request , response){}