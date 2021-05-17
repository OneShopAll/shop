import mongoose from "mongoose";

const BrandSchema = mongoose.Schema(
  {
    brand_title: { type: String, unique: true },
    status: { type: Boolean, default: true },
    brand_products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Products" }],
  },
  {
    collection: "Brand",
    timestamps: true,
  }
);

export default mongoose.model("Brand", BrandSchema);
