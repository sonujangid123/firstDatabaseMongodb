import mongoose  from "mongoose";

 const BorrowerSchema = new mongoose.Schema({
   
  name: String,
  email: String,
  membershipDate:  Date,
  borrowerdBooks: [
    {
        bookId: String,
        borrowDate: Date,
        dueDate: Date,
        returnDate: Date,
    }
  ]

});

const BorrowerModel = mongoose.model("borrowers" , BorrowerSchema);
export default BorrowerModel;