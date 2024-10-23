import mongoose  from "mongoose";

 const AuthorSchema = new mongoose.Schema({
   
    firstName: String,
    lastName: String,
    bio: String,
    dateOfBirth: Date,
    bookIds: String,

});

const AuthorModel = mongoose.model("author" , AuthorSchema);
export default AuthorModel;