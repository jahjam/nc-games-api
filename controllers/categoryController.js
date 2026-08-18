import { findAllCategories } from "../models/categoryModel.js";

export function getAllCategories(req, res) {
  const categories = findAllCategories();

  categories.then((data) => res.status(200).send({ categories: data }));
}
