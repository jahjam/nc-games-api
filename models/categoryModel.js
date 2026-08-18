import pool from "../db/connection.js";

export function findAllCategories() {
  console.log("here 2");
  const queryString = `
    SELECT * FROM categories;
    `;

  return pool.query(queryString).then((res) => {
    console.log(res);
    return res.rows;
  });
}
