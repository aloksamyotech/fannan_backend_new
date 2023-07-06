import mongoose from "mongoose";

export const Dbconnection = async () => {
    try {
        await mongoose.connect(`${process.env.DB_URL}${process.env.DB_NAME}`);
        console.log('mongodb connection established');
    } catch (error) {
        console.log("Error connecting to MongoDB")
    } 
}