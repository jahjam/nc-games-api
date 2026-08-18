import pool from "../db/connection.js";

export function findAllCategories() {
  console.log("here 2");
  const queryString = `
    SELECT * FROM categories;
    `;

  pool
    .query("SELECT NOW()")
    .then((result) => {
      console.log("DB CONNECTION OK:", result.rows);
    })
    .catch((err) => {
      console.error("DB CONNECTION ERROR:", err);
    });

  return pool.query(queryString).then((res) => {
    console.log(res);
    return res.rows;
  });
}
