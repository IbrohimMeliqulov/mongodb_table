import { jwtTokens } from "../helpers/jwt.js";
import customerModel from "../models/customers.models.js";
import bcrypt from "bcrypt"

export const customerController = {
  create: async function (req, res, next) {
    try {
      const user_email=await customerModel.findOne({email:req.body.email})
      if(user_email) return res.status(403).send({message:`${req.body.email} duplicate emails not allowed`})
      const password=req.body.password
      const hashedPassword=await bcrypt.hash(password,10)
      req.body.password=hashedPassword 
      const customer = await customerModel.create(req.body);
      return res.status(201).send({
        message: "Customer created",
        data: customer,
      });
    } catch (err) {
      return next(err);
    }
  },
  update: async function (req, res, next) {
    try {
      const id = req.params.id;
      const foundedcustomer = await customerModel.findById({ _id: id });
      if (foundedcustomer.length === 0)
        return res.status(404).send({ message: `${id} customer not found` });
      const updated_customer = await customerModel.findByIdAndUpdate(
        id,
        req.body,
        { new: true },
      );
      return res.status(200).send({
        message: `${id} customer updated`,
        data: updated_customer,
      });
    } catch (err) {
      return next(err);
    }
  },
  getAllCustomers: async function (req, res, next) {
    try {
      const customers = await customerModel.find();
      return res.status(200).send({
        message: "Customers found",
        data: customers,
      });
    } catch (err) {
      return next(err);
    }
  },
  delete: async function (req, res, next) {
    try {
      const id = req.params.id;
      const foundedcustomer = await customerModel.findById({ _id: id });
      if (foundedcustomer.length === 0)
        return res.status(404).send({ message: `${id} customer not found` });
      const deleted_customer = await customerModel.deleteOne({ _id: id });
      return res.status(200).send({
        message: `${id} customer deleted`,
        data: deleted_customer,
      });
    } catch (err) {
      return next(err);
    }
  },
  login:async function(req,res,next){
    try{
      const {email,password}=req.body
      const user=await customerModel.findOne({email:email})
      if(user.length===0) return res.status(404).send({message:`${user.email} user not found`})
      const passwordMatch=await bcrypt.compare(password,user.password)
      const tokens=jwtTokens(user)
      if(!passwordMatch) return res.status(400).send({message:`Password didn't match`})
      return res.status(200).send({
        message:"Successfully logged in",
        data:tokens
      }) 
    }catch(err){
      return next(err)
    }
  }
};
