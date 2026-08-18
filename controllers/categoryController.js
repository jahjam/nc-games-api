import { findAllCategories } from "../models/categoryModel.js";

export function getAllCategories(req, res) {
  console.log("here 1");
  const categories = findAllCategories();

  categories.then((data) => res.status(200).send({ categories: data }));
}
