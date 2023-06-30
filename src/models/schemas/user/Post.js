import mongoose from "mongoose";


const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

 const postSchema = mongoose.Schema({
    title : { type : String , required : true },
    description:{ type : String , required : true},
    user: { type : ObjectId , required : true} , 
    date : { type : Date, default : Date.now },
    like : { type: Number, required: false , default: 0 },
    image : { type : String , required : false } 
    
 });


  export const post_model =  mongoose.model("post" , postSchema)


