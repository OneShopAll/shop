import Brand from "../model/brand.model.js";

//add new brand

export const add_brand = async (dataObj) => {
  try {
    let newBrand = new Brand(dataObj);
    let savedBrand = await newBrand.save();
    if (savedBrand) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
