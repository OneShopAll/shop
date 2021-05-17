import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ParentCategorySchema = Schema(
  {
    category_title: { type: String, required: true },
    status: { type: Boolean, default: true },
    child_categories: [{ type: Schema.Types.ObjectId, ref: "childCategory" }],
  },
  {
    collection: "parentCategory",
    timeStamps: true,
  }
);
export default mongoose.model("parentCategory", ParentCategorySchema);
