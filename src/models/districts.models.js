import mongoose from "mongoose";


const districtSchema=new mongoose.Schema({
    name:{type:String,required:true}
},{timestamps:true})


const districtModel=mongoose.model("districts",districtSchema)

export default districtModel