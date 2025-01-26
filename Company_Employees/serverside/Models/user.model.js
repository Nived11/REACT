import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    designation:{type:String,required:true},
    phone:{type:Number,required:true},
    experience:{type:Number,required:true},
    salary:{type:Number,required:true},
})

export default mongoose.model.employee||mongoose.model("employee",userSchema);