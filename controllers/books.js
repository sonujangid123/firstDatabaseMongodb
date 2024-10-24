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
        response.status(200).json(books);
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
    response.status(200).json({ message: 'Book added successfully'});
    console.log(newBook)
   } catch(err){
    console.log(err);
    response.status(500).json({ error: 'Failed to add book'})
   }

    // response.send("Book Added");
    

}



export async function deleteBook(request, response) {
    try {
        const deleteBook = await BookModel.findByIdAndDelete(request.params.id).select(["-__v -_id"]);
        if (deleteBook) {
            response.status(200).json({ message: 'Book deleted successfully' });
            console.log(deleteBook);
        } else {
            response.status(404).json({ error: 'Book not found' });
        }
    } catch (err) {
        console.log(err);
        response.status(500).json({ error: 'Failed to delete book' });
    }
}





export async function updateBook(request, response) {
    try {
        // The second argument is the update object (request.body).
        const updateBook = await BookModel.findByIdAndUpdate(request.params.id, request.body, { new: true })
            .select(["-__v", "-_id"]); // `new: true` returns the updated document.
        
        if (updateBook) {
            response.status(200).json({ message: 'Book updated successfully', data: updateBook });
            console.log(updateBook);
        } else {
            response.status(404).json({ error: 'Book not found' });
        }
    } catch (err) {
        console.log(err);
        response.status(500).json({ error: 'Failed to update book' });
    }
}


