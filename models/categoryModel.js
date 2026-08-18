import pool from "../db/connection.js";

export function findAllCategories() {
  const queryString = `
    SELECT * FROM categories;
    `;

  return pool.query(queryString).then((res) => {
    return res.rows;
  });
}
