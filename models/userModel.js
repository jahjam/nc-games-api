import pool from "../db/connection.js";

export function findAllUsers() {
  const queryString = `
   SELECT * FROM users; 
  `;

  return pool.query(queryString).then((res) => res.rows);
}
