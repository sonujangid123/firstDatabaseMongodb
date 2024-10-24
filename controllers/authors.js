import express from "express";
import AuthorModel from "../models/authors.js";

export async function getAuthors(request, response) {
    try {
        const authors = await AuthorModel.find().select(["-__v -_id"]); // Excluding version key and _id
        response.status(200).json(authors);
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
    response.status(200).json({ message: 'Author added successfully'});
    console.log(newAuthor)
   } catch(err){
    console.log(err);
    response.status(500).json({ error: 'Failed to add book'})
   }

    // response.send("Book Added");
    

}



export async function deleteAuthor(request, response) {
    try {
        const deleteAuthor = await AuthorModel.findByIdAndDelete(request.params.id).select(["-__v -_id"]);
        if (deleteAuthor) {
            response.status(200).json({ message: 'Authors deleted successfully' });
            console.log(deleteAuthor);
        } else {
            response.status(404).json({ error: 'Authors not found' });
        }
    } catch (err) {
        console.log(err);
        response.status(500).json({ error: 'Failed to delete book' });
    }
}








export async function updateAuthor(request, response) {
    try {
     
        const updateAuthor = await AuthorModel.findByIdAndUpdate(request.params.id, request.body, { new: true })
            .select(["-__v", "-_id"]); // new: true returns the updated document.

        if (updateAuthor) {
            response.status(200).json({ message: 'Authors updated successfully' });
            console.log(updateAuthor);
        } else {
            response.status(404).json({ error: 'Authors not found' });
        }
    } catch (err) {
        console.log(err);
        response.status(500).json({ error: 'Failed to update author' });
    }
}
