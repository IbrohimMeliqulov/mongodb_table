import { model, Schema } from "mongoose";
import bcrpyt from "bcrypt"

const customerSchema = new Schema({
    
    name: { type: String, required: true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phone: { type: String, required: true },

  },
  { timestamps: true });


customerSchema.methods.comparePassword=async function(userPassword){
  const isValidPassword=await bcrpyt.compare(userPassword,this.userPassword)

  return isValidPassword
}

const customerModel = model("customers", customerSchema);

export default customerModel;
