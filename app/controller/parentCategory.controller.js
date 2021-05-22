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

//get all categories
export const get_all_categories = async () => {
  try {
    let categories = await PrarentCategory.find({});
    if (categories.length > 0) {
      return categories;
    } else {
      return [];
    }
  } catch (error) {}
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
