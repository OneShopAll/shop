import ChildCategory from "../model/child_category.model.js";
import PrarentCategory from "../model/parent_category.model.js";

//add child category

export const add_child_category = async (dataObj) => {
  try {
    let newChildCategory = new ChildCategory(dataObj);
    let savedCategory = await newChildCategory.save();
    if (savedCategory) {
      let update_parent_category = await PrarentCategory.findOneAndUpdate(
        { _id: savedCategory.parent_category },
        {
          $push: { child_categories: savedCategory._id },
          status: true,
        }
      );
      console.log({ update_parent_category });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

//get child Category
export const get_child_categories = async (paramsObject) => {
  try {
    let category = await ChildCategory.findOne({
      $and: [
        {
          _id: paramsObject.childCategory,
          parent_category: paramsObject.parentCategory,
        },
      ],
    }).populate("Sub_child_categories");
    console.log(category);
    if (category) {
      return category;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

//get child Categories by parent id
export const get_child_categories_by_parentId = async (paramsObject) => {
  console.log(paramsObject);
  try {
    let category = await ChildCategory.find({
      parent_category: paramsObject.parentCategory,
    }).populate("Sub_child_categories");
    console.log(category);
    if (category.length > 0) {
      return category;
    } else {
      throw new Error("List Not found.");
    }
  } catch (error) {
    console.log(error);
    return error.msg;
  }
};
