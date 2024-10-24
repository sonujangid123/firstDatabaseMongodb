import express from "express";
import BorrowerModel from "../models/borrowers.js";


export async function getBorrowers(request, response) {
    try {
        const borrowers = await BorrowerModel.find().select(["-__v -_id"]); // Excluding version key and _id
        response.status(200).json(borrowers);
    } catch (err) {
        console.error(err);
        response.status(500).json({ error: 'Failed to fetch books' });
    }
}

export async function  createBorrower(request , response){
    // console.log(request.body,'===========');
   try{

    const newBorrower  = new BorrowerModel(request.body);
    await newBorrower.save();
    response.status(200).json({ message: 'Borrower added successfully'});
    console.log(newBorrower)
   } catch(err){
    console.log(err);
    response.status(500).json({ error: 'Failed to add book'})
   }

    // response.send("Book Added");
    

}




export async function deleteBorrower(request, response) {
    try {
        const deleteBook = await BorrowerModel.findByIdAndDelete(request.params.id).select(["-__v -_id"]);
        if (deleteBorrower) {
            response.status(200).json({ message: 'Borrower  deleted successfully' });
            console.log(deleteBorrower);
        } else {
            response.status(404).json({ error: 'Borrower  not found' });
        }
    } catch (err) {
        console.log(err);
        response.status(500).json({ error: 'Failed to delete book' });
    }
}






export async function updateBorrower(request, response) {
    try {

        const updateBorrower = await BorrowerModel.findByIdAndUpdate(request.params.id, request.body, { new: true })
            .select(["-__v", "-_id"]); // Return the updated borrower with new: true

        if (updateBorrower) {
            response.status(200).json({ message: 'Borrower updated successfully' });
            console.log(updateBorrower);
        } else {
            response.status(404).json({ error: 'Borrower not found' });
        }
    } catch (err) {
        console.log(err);
        response.status(500).json({ error: 'Failed to update borrower' });
    }
}
