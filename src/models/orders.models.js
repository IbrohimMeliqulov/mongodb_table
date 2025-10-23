import mongoose, { Schema } from "mongoose";


const ordersSchema=new mongoose.Schema({
    customer_id:{type:Schema.Types.ObjectId,ref:"customers"},
    delivery_staff_id:{type:Schema.Types.ObjectId,ref:"delivery_staff"},
    order_date:{type:Date,required:true},
    status:{type:String,enum:["in progress","delivered","rejected"],default:"in progress"}
},{timestamps:true})

const orderModel=mongoose.model("orders",ordersSchema)

export default orderModel