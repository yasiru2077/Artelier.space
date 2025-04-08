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

export const login = async (req, res) => {
  try {
    const q = await query("select * from users where username = ?", [
      req.body.username,
    ]);

    if (q.length === 0) {
      return res.status(404).json("User not found!");
    }

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      q[0].password_hash
    );

    if (!checkPassword) {
      return res.status(400).json("Wrong password or username!");
    }

    const token = jwt.sign({ id: q[0].id }, "key");

    const { password, ...userWithoutPassword } = q[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(userWithoutPassword);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has been logged out");
};

export const verify = async (req, res) => {
  try {
    // Get user from database using the ID from verifyToken middleware
    const q = await query("SELECT * FROM users WHERE id = ?", [req.userId]);
    
    if (q.length === 0) {
      return res.status(404).json("User not found!");
    }
    
    // Remove password from response
    const { password, ...userWithoutPassword } = q[0];
    return res.status(200).json(userWithoutPassword);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};
