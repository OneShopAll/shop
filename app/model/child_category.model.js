import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ChildCategorySchema = Schema(
  {
    child_category_title: { type: String, required: true },
    parent_category: {
      type: Schema.Types.ObjectId,
      ref: "parentCategory",
    },
    status: { type: Boolean, default: true },
    Sub_child_categories: [
      { type: Schema.Types.ObjectId, ref: "subChildCategory" },
    ],
  },
  {
    collection: "childCategory",
    timestamps: true,
  }
);
export default mongoose.model("childCategory", ChildCategorySchema);
