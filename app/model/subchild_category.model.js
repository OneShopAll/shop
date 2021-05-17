import mongoose from "mongoose";

const subChildCategorySchema = mongoose.Schema(
  {
    sub_child_category_title: { type: String, required: true },
    parent_category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "childCategory",
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
      },
    ],
    status: { type: Boolean, default: true },
  },
  {
    collection: "subChildCategory",
    timeStamps: true,
  }
);
export default mongoose.model("subChildCategory", subChildCategorySchema);
