import mongoose, { Schema } from "mongoose";

const order_itemsSchema=mongoose.Schema({
    order_id:{type:Schema.Types.ObjectId,ref:"orders",required:true},
    product_id:{type:Schema.Types.ObjectId,ref:"water_products",required:true},
    quantity:{type:Number,required:true},
    total_price:{type:Number,required:true}
},{timestamps:true})

const order_itemsModel=mongoose.model("order_items",order_itemsSchema)
export default order_itemsModel