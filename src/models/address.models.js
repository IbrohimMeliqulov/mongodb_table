import { model, Schema } from "mongoose";

const addressSchema = new Schema(
  {
    name: { type: String, required: true },
    customer_id: [{ type: Schema.Types.ObjectId, ref: "cutomers" }],
    address: { type: String, required: true },
    location: { type: String, required: true },
    district_id:[{type:Schema.Types.ObjectId,ref:"districts"}]
  },
  { timestamps: true },
);

const addressModel = model("district", addressSchema);

export default addressModel;
