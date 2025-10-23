import customerModel from "../models/customers.models.js";

export const customerController = {
  create: async function (req, res, next) {
    try {
      const customer = await customerModel.create(req.body);
      const user_email=await customerModel.find({email:customer.email})
      if(user_email) return res.status(403).send({message:`${customer.email} duplicate emails not allowed`})
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
};
