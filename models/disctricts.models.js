import {model,Schema} from "mongoose"


const disctrictSchema=new Schema({
    name:{type:String,required:true},
    customer_id:[{type:Schema.Types.ObjectId,ref:"cutomers"}],
    address:{type:String,required:true},
    location:{type:String,required:true}
},{timestamps:true})


const districtModel=model("district",disctrictSchema)

export default districtModel