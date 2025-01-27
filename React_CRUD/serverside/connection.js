import mongoose from 'mongoose';

export default async function connection(){
    const db= await mongoose.connect("mongodb://localhost:27017/React_CRUD");
    console.log("connected to database");
    return db;
}