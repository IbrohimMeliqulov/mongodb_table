import mongoose, { Schema } from "mongoose";


const delivery_staffSchema=new mongoose.Schema({
    name:{type:String,required:true},
    phone:{type:String,required:true},
    vehicle_number:{type:String,required:true},
    district_id:{type:Schema.Types.ObjectId,ref:"district"}
},{timestamps:true})

const delivery_staff_Model=mongoose.model("deliver_staff",delivery_staffSchema)

export default delivery_staff_Model