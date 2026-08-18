import { findAllUsers } from "../models/userModel.js";

export function getAllUsers(req, res, next) {
  findAllUsers().then((data) => res.status(200).send({ users: data }));
}
