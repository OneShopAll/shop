import express from "express";
import {
  add_product,
  get_product_by_id,
  get_products_by_child_category,
} from "../controller/product.controller.js";
const router = express.Router();

//add product
router.post("/v1/add_product", (req, res) => {
  //validation check
  add_product(req.body)
    .then((result) => {
      if (result) {
        res.send({
          status: true,
          message: "Product saved.",
          data: {},
        });
      } else {
        res.send({
          status: false,
          message: "something went wrong. Please try again.",
          data: {},
        });
      }
    })
    .catch((error) => {
      res.send({
        status: false,
        message: "something went wrong. Please try again.",
        data: {},
      });
    });
});

// get product with product id

router.get("/v1/product/:id", (req, res) => {
  get_product_by_id(req.params.id)
    .then((result) => {
      if (result) {
        res.send({
          status: true,
          message: "Product details.",
          data: result,
        });
      } else {
        res.send({
          status: false,
          message: "something went wrong. Please try again.",
          data: {},
        });
      }
    })
    .catch((error) => {
      if (error) {
        res.send({
          status: false,
          message: "something went wrong. Please try again.",
          data: {},
        });
      }
    });
});

//get products by child category
router.post("/v1/products_by_child_category", (req, res) => {
  get_products_by_child_category(req.body.childCategoryType)
    .then((result) => {
      if (result) {
        res.send({
          status: true,
          message: "Product details.",
          data: result,
        });
      } else {
        res.send({
          status: false,
          message: "something went wrong. Please try again.",
          data: {},
        });
      }
    })
    .catch((error) => {
      if (error) {
        res.send({
          status: false,
          message: "something went wrong. Please try again.",
          data: {},
        });
      }
    });
});

export default router;
