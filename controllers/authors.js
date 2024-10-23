import express from "express";
import AuthorModel from "../models/authors.js";

export async function getAuthors(request, response) {
    try {
        const authors = await AuthorModel.find().select(["-__v -_id"]); // Excluding version key and _id
        response.json(authors);
    } catch (err) {
        console.error(err);
        response.status(500).json({ error: 'Failed to fetch books' });
    }
}

export async function createAuthor(request , response){
    // console.log(request.body,'===========');
   try{

    const newAuthor  = new AuthorModel(request.body);
    await newAuthor.save();
    response.json({ message: 'Author added successfully'});
    console.log(newAuthor)
   } catch(err){
    console.log(err);
    response.status(500).json({ error: 'Failed to add book'})
   }

    // response.send("Book Added");
    

}
export function deleteAuthor(request , response){}