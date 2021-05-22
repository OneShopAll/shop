import ChildCategory from "../model/child_category.model.js";
import SubChildCategory from "../model/subchild_category.model.js";

//add child category

export const add_subchild_category = async (dataObj) => {
  try {
    let newSubChildCategory = new SubChildCategory(dataObj);
    let savedCategory = await newSubChildCategory.save();
    if (savedCategory) {
      let update_parent_category = await ChildCategory.findOneAndUpdate(
        { _id: savedCategory.parent_category },
        {
          $push: { Sub_child_categories: savedCategory._id },
          status: true,
        }
      );
      if (update_parent_category) {
        return true;
      } else {
        return false;
      }
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

//get subchild category

export const get_subchild_category = async (paramsObject) => {
  try {
    let category = await SubChildCategory.findOne({
      $and: [
        {
          _id: paramsObject.subchildCategory,
          parent_category: paramsObject.parentCategory,
        },
      ],
    }).populate("parent_category", { child_category_title: 1, _id: 1 });

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

//get subcchild cat5egory by its parent id
export const get_subchild_category_by_parentId = async (paramsObject) => {
  try {
    let category = await SubChildCategory.find({
      parent_category: paramsObject.parentCategory,
    }).populate("parent_category", { child_category_title: 1, _id: 1 });

    if (category.length > 0) {
      return category;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
