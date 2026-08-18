import {
  categoryData,
  commentData,
  reviewData,
  userData,
} from "../data/development-data/index.js";
import seed from "./seed.js";
import pool from "../connection.js";

const runSeed = () => {
  return seed({ categoryData, commentData, reviewData, userData }).then(() =>
    pool.end(),
  );
};

runSeed();
