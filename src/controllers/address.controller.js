import addressModel from "../models/address.models.js";

export const addressController = {
  create: async function (req, res, next) {
    try {
      const district = await addressModel.create(req.body);
      return res.status(201).send({
        message: "Successfully created",
        data: district,
      });
    } catch (err) {
      return next(err);
    }
  },
  getAllDistricts: async function (req, res, next) {
    try {
      const districts = await addressModel.find().populate("district_id");
      return res.status(200).send({
        message: "data found",
        data: districts,
      });
    } catch (err) {
      return next(err);
    }
  },
  update: async function (req, res, next) {
    try {
      const id = req.params.id;
      const founded_district = await addressModel.findById({ _id: id });
      if (founded_district.length === 0)
        return res.status(404).send({
          message: `${id} district not found`,
        });
      const updated_district = await addressModel.findByIdAndUpdate(
        id,
        req.body,
        { new: true },
      );
      return res.status(200).send({
        message: `${id} district updated successfully`,
        data: updated_district,
      });
    } catch (err) {
      return next(err);
    }
  },
  delete: async function (req, res, next) {
    try {
      const id = req.params.id;
      const founded_district = await addressModel.find({ _id: id });
      if (founded_district.length === 0)
        return res.status(404).send({ message: `${id} district not found` });
      const deleted_district = await addressModel.deleteOne({ _id: id });
      return res.status(200).send({
        message: `${id} deleted from table`,
        data: deleted_district,
      });
    } catch (err) {
      return next(err);
    }
  },
};
