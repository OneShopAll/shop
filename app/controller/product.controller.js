import Product from "../model/product.model.js";
import SubChildCategory from "../model/subchild_category.model.js";
import Brand from "../model/brand.model.js";

//add product
export const add_product = async (dataObj) => {
  try {
    let newProduct = new Product(dataObj);
    let savedProduct = await newProduct.save();
    if (savedProduct) {
      await SubChildCategory.findOneAndUpdate(
        { _id: dataObj.subChildCategory },
        { $push: { products: savedProduct._id } }
      );
      await Brand.findByIdAndUpdate(
        { _id: dataObj.brand },
        { $push: { products: savedProduct._id } }
      );
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

//get product
export const get_product_by_id = async (productId) => {
  try {
    let product = await Product.findOne({ _id: productId })
      .populate("brand", {
        brand_title: 1,
      })
      .populate("parentCategoryType", {
        category_title: 1,
      });
    if (product) {
      return product;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
