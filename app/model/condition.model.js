import mongoose from "mongoose";

const ConditionSchema = mongoose.Schema(
  {
    condition_title: { type: String, unique: true },
    status: { type: Boolean },
  },
  {
    collection: "Condition",
    timestamps: true,
  }
);

export default mongoose.model("Condition", ConditionSchema);
