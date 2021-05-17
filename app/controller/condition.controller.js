import Condition from "../model/condition.model.js";
//add product condition

export const add_product_condition = async (dataObj) => {
  try {
    let newCondition = new Condition(dataObj);
    let savedCondition = await newCondition.save();
    if (savedCondition) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

//get product condition
export const get_Product_condition = async (paramsObj) => {
  try {
    let response = await Condition.findOne({ _id: paramsObj.id });
    if (response) {
      return response;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
