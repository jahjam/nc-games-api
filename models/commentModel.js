import pool from "../db/connection.js";

export function removeOneComment(id) {
  const queryString = `
  DELETE FROM comments
  WHERE comment_id = $1
`;

  return pool.query(queryString, [id]).then((res) => {
    if (!res.rowCount) {
      return Promise.reject({
        status: 404,
        error: "comment not found",
      });
    }

    return res.rows;
  });
}
