import districtModel from "../models/disctricts.models.js";

export const districtController = {
  create: async function (req, res, next) {
    try {
      const district = await districtModel.create(req.body);
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
      const districts = await districtModel.find();
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
      const founded_district = await districtModel.findById({ _id: id });
      if (founded_district.length === 0)
        return res.status(404).send({
          message: `${id} district not found`,
        });
      const updated_district = await districtModel.findByIdAndUpdate(
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
      const founded_district = await districtModel.find({ _id: id });
      if (founded_district.length === 0)
        return res.status(404).send({ message: `${id} district not found` });
      const deleted_district = await districtModel.deleteOne({ _id: id });
      return res.status(200).send({
        message: `${id} deleted from table`,
        data: deleted_district,
      });
    } catch (err) {
      return next(err);
    }
  },
};
