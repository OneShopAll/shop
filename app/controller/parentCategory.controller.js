import PrarentCategory from "../model/parent_category.model.js";
//add category
export const add_category = async (dataObj) => {
  try {
    let newCategory = new PrarentCategory(dataObj);
    let savedCategory = await newCategory.save();
    if (savedCategory) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

//get category
export const get_categories = async (categoryId) => {
  try {
    let category = await PrarentCategory.findOne({ categoryId }).populate(
      "child_categories"
    );
    return category;
  } catch (error) {
    return false;
  }
};
