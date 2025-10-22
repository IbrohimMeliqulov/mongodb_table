import {model,Schema} from "mongoose"


const customerSchema=new Schema({
    name:{type:String,required:true},
    phone:{type:String,required:true}
},{timestamps:true})


const customerModel=model("customers",customerSchema)

export default customerModel