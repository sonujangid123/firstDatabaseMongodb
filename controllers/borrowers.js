import express from "express";
import BorrowerModel from "../models/borrowers.js";


export async function getBorrowers(request, response) {
    try {
        const borrowers = await BorrowerModel.find().select(["-__v -_id"]); // Excluding version key and _id
        response.json(borrowers);
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
    response.json({ message: 'Borrower added successfully'});
    console.log(newBorrower)
   } catch(err){
    console.log(err);
    response.status(500).json({ error: 'Failed to add book'})
   }

    // response.send("Book Added");
    

}
export function deleteBorrower(request , response){}