import express from "express";
import { add_brand, get_brand_list } from "../controller/brand.controller.js";

const router = express.Router();

//add new brand
router.post("/v1/add_new_brand", (req, res) => {
  //validation check
  add_brand(req.body)
    .then((result) => {
      if (result) {
        res.send({ status: true, message: "Brand saved", data: {} });
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

router.get("/v1/brand_list", (req, res) => {
  get_brand_list()
    .then((result) => {
      if (result) {
        res.send({ status: true, message: "Brand list.", data: result });
      } else {
        res.send({
          status: false,
          message: "something went wrong. Please try again",
          data: {},
        });
      }
    })
    .catch((error) => {
      if (error) {
        res.send({
          status: false,
          message: "something went wrong. Please try again",
          data: {},
        });
      }
    });
});

export default router;
