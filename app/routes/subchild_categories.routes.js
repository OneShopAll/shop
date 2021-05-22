import express from "express";
import {
  add_subchild_category,
  get_subchild_category,
  get_subchild_category_by_parentId,
} from "../controller/subchild_categories.controller.js";
const router = express.Router();

//add parent categories
router.post("/v1/add_subchild_category", (req, res) => {
  //validation check
  add_subchild_category(req.body)
    .then((result) => {
      if (result) {
        res.send({ status: true, message: "Category saved", data: {} });
      } else {
        res.send({
          status: false,
          message: "something went wrong. Please try again",
          data: [],
        });
      }
    })
    .catch((error) => {
      res.send({
        status: false,
        message: "something went wrong. Please try again",
        data: [],
      });
    });
});

//get subchild category
// parentCategory means parent category of subchild i.e. childCategory

router.get(
  "/v1/subhild_category/:parentCategory/:subchildCategory",
  (req, res) => {
    let paramsObj = {
      parentCategory: req.params.parentCategory,
      subchildCategory: req.params.subchildCategory,
    };
    get_subchild_category(paramsObj)
      .then((result) => {
        if (result) {
          res.send({ status: true, message: "List found.", data: result });
        } else {
          res.send({
            status: false,
            message: "Something went wrong.",
            data: [],
          });
        }
      })
      .catch((error) => {
        if (error) {
          res.send({
            status: false,
            message: "Something went wrong.",
            data: [],
          });
        }
      });
  }
);

// get subchild by its parent category
router.get("/v1/subhild_category/:parentCategory", (req, res) => {
  let paramsObj = {
    parentCategory: req.params.parentCategory,
  };
  get_subchild_category_by_parentId(paramsObj)
    .then((result) => {
      if (result) {
        res.send({
          status: true,
          message: "Category list found.",
          data: result,
        });
      } else {
        res.send({ status: false, message: "List not found ", data: [] });
      }
    })
    .catch((error) => {
      if (error) {
        res.send({ status: false, message: "List not found ", data: [] });
      }
    });
});

export default router;
