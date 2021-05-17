import express from "express";
import {
  add_category,
  get_categories,
} from "../controller/parentCategory.controller.js";

const router = express.Router();

//add parent categories
router.post("/v1/add_category", (req, res) => {
  add_category(req.body)
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
router.get("/v1/category/:categoryId", (req, res) => {
  get_categories(req.body.categoryId)
    .then((result) => {
      if (result) {
        res.send({ status: true, message: "list of categories", data: result });
      } else {
        res.send({
          status: false,
          message: "something went wrong. Try again.",
          data: {},
        });
      }
    })
    .catch((error) => {
      res.send({
        status: false,
        message: "something went wrong. Try again.",
        data: {},
      });
    });
});

export default router;
