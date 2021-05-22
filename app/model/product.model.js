import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    availability: { type: Boolean, default: true },
    brand: { type: mongoose.Schema.Types.ObjectId, ref: "Brand" },
    availableInBulk: { type: Boolean, default: false },
    parentCategoryType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "parentCategory",
    },
    childCategoryType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "childCategory",
    },
    subChildCategoryType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subChildCategory",
    },
    slugName: { type: String },
    originalPrice: { type: Number },
    offerPrice: { type: Number },
    imageLinks: [],
    tags: [],
    description: { type: String },
    assessment: { type: String },
    city: { type: String },
    stockSize: { type: Number },
    availableInBulk: { type: Boolean },
    features: {},
    productCondition: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Condition",
    },
    storage: { type: String },
    bedingHeight: { type: String },
    dimensions: { type: String },
    discount: { type: Number },
    isUniqueProduct: { type: Boolean },
    deliveryInDays: { type: Number },
    return: { type: Number },
    warranty: { type: String },
    color: { type: String },
    material: { type: String },
  },
  {
    collection: "Products",
    timestamps: true,
  }
);

export default mongoose.model("Products", productSchema);
