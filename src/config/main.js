import mongoose from "mongoose";

export const Dbconnection = async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/fannan`);
        console.log('mongodb connection established');
    } catch (error) {
        console.log("Error connecting to MongoDB")
    } 
}