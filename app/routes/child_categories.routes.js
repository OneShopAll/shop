import express from "express";
import {
  add_child_category,
  get_child_categories,
} from "../controller/child_categories.controller.js";

const router = express.Router();

//add parent categories
router.post("/v1/add_child_category", (req, res) => {
  //validation check
  add_child_category(req.body)
    .then((result) => {
      if (result) {
        res.send({ status: true, message: "Category saved", data: {} });
      } else {
        res.send({
          status: false,
          message: "something went wrong. Please try again",
          data: {},
        });
      }
    })
    .catch((error) => {
      res.send({
        status: false,
        message: "something went wrong. Please try again",
        data: {},
      });
    });
});

//get parent categories
router.get(
  "/v1/child_categories/:parentCategory/:childCategory",
  (req, res) => {
    let paramsObject = {
      parentCategory: req.params.parentCategory,
      childCategory: req.params.childCategory,
    };
    get_child_categories(paramsObject)
      .then((result) => {
        res.send({ status: true, message: "list of categories", data: result });
      })
      .catch((error) => {
        res.send({
          status: false,
          message: "something went wrong. Try again.",
          data: {},
        });
      });
  }
);

export default router;
