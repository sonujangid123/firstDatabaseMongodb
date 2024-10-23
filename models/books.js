import mongoose  from "mongoose";

 const BookSchema = new mongoose.Schema({
    title: String,
    isbn: String,
    publicationDate: String,
    genres: String,
    authorIds: String,
    availableCopies: Number,
    totalCopies: Number,
});

const BookModel = mongoose.model("books" , BookSchema);
export default BookModel;