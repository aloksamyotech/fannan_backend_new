import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const reviewSchema = mongoose.Schema({
    userid : { type : ObjectId , required : true },
    rate : {type : Number , default: 0},
    review : { type : String, required : true },
    date : { type : Date, default : new Date() }
}) 


export const review_model = mongoose.model("review", reviewSchema)