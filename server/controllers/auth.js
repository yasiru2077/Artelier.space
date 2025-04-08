import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import util from "util";

const query = util.promisify(db.query).bind(db);

export const register = async (req, res) => {
  try {
    const q = await query("select * from users where username = ?", [
      req.body.username,
    ]);

    if (q.length) {
      return res.status(409).json("User already exits!");
    }

    const salt = bcrypt.genSaltSync(10);

    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const insertQ =
      "insert into users (`username`,`email`,`password_hash`,`first_name`,`last_name`,`role`) value (?)";

    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.first_name,
      req.body.last_name,
      req.body.role,
    ];

    await query(insertQ, [values]);

    return res.status(200).json("User has been created.");
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};

export const login = async(req, res) => {

  try {
    const users = await query("select")
  } catch (error) {
    
  }

};

export const logout = (req, res) => {};

export const verify = (req, res) => {};
