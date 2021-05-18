import express from "express";
import mongoose from "mongoose";
import parentCategoryRoutes from "./app/routes/parent_categories.routes.js";
import childCategoryRoutes from "./app/routes/child_categories.routes.js";
import subchildCategoryRoutes from "./app/routes/subchild_categories.routes.js";
import brandRoutes from "./app/routes/brands.routes.js";
import productConditionRoutes from "./app/routes/condition.routes.js";
import productRoutes from "./app/routes/product.routes.js";

import { DBURL } from "./config/db.config.js";
//PORT
const PORT = process.env.PORT || 4141;
//app init
const app = express();

//use middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connecct to databse
mongoose.Promise = global.Promise;
mongoose
  .connect(DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`Connect to database `))
  .catch((err) => {
    console.log(err);
    process.exit();
  });

//routes
app.use(parentCategoryRoutes);
app.use(childCategoryRoutes);
app.use(subchildCategoryRoutes);
app.use(brandRoutes);
app.use(productConditionRoutes);
app.use(productRoutes);

//simple route
app.get("/", (req, res) => {
  res.send({ status: true, message: "this is something here" });
});

//listen server
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
