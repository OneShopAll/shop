import express from "express";
import {
  add_product_condition,
  get_Product_condition,
} from "../controller/condition.controller.js";

const router = express.Router();

//add condition type
router.post("/v1/add_product_condition", (req, res) => {
  //validation check
  add_product_condition(req.body)
    .then((result) => {
      if (result) {
        res.send({
          status: true,
          message: "Product condition saved.",
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

// get product condition by id

router.get("/v1/product_condition/:id", (req, res) => {
  get_Product_condition(req.params)
    .then((result) => {
      if (result) {
        res.send({ status: true, message: "List found.", data: result });
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
