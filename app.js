import { xss } from "express-xss-sanitizer";
import rateLimit from "express-rate-limit";

import { getAllCategories } from "./controllers/categoryController.js";
import {
  getOneReview,
  getAllReviews,
  getAllComments,
  postOneComment,
  patchOneReview,
} from "./controllers/reviewController.js";
import { deleteOneComment } from "./controllers/commentController.js";
import { getAllUsers } from "./controllers/userController.js";
import { clientErrorHandler } from "./errorHandlers/clientErrorHandler.js";
import { psqlErrorHandler } from "./errorHandlers/psqlErrorHandler.js";

import endpointsJson from "./endpoints.json" with { type: "json" };

import express, { json } from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: "https://nc-games-react.onrender.com" }));

app.use(json());

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP. Please try again in an hour.",
});

app.use("/api", limiter);

app.use(xss());

app.get("/api/categories", getAllCategories);
app.get("/api/reviews/:review_id", getOneReview);
app.get("/api/reviews", getAllReviews);
app.get("/api/reviews/:review_id/comments", getAllComments);
app.post("/api/reviews/:review_id/comments", postOneComment);
app.patch("/api/reviews/:review_id", patchOneReview);
app.delete("/api/comments/:comment_id", deleteOneComment);
app.get("/api/users", getAllUsers);
app.get("/api", (req, res, next) => {
  if (!endpointsJson) {
    return next(
      new Error({
        error: `Something went wrong`,
        status: 400,
      }),
    );
  }

  res.status(200).send({ endpoints: endpointsJson });
});

app.all("/{*splat}", (req, res, next) => {
  res.status(404).send({
    error: `${req.originalUrl} is not available on this server`,
    status: 404,
  });
});

app.use(clientErrorHandler);
app.use(psqlErrorHandler);

export default app;
