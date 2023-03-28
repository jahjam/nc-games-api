const { getAllCategories } = require("./controllers/categoryController");
const { getOneReview } = require("./controllers/reviewController");

const express = require("express");

const app = express();

app.get("/api/categories", getAllCategories);
app.get("/api/reviews/:review_id", getOneReview);

app.all("*", (req, res, next) => {
  res.status(404).send({
    error: `${req.originalUrl} is not available on this server`,
    status: 404,
  });
});

module.exports = app;
