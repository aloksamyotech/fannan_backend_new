import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const commentSchema = mongoose.Schema({
    userid : { type : ObjectId, required : true },
    postid : { type : ObjectId , required : true },
    comment : { type : String , required : true },
    date : { type : Date , default : Date.now }
}) 


export const comment_model = mongoose.model("comment", commentSchema)