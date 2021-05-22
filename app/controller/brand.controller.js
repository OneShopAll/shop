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

//get brand List

export const get_brand_list = async () => {
  try {
    let brand_list = await Brand.find({});
    console.log(brand_list);
    if (brand_list) {
      return brand_list;
    } else {
      return false;
    }
  } catch (error) {
    if (error) {
      return false;
    }
  }
};
