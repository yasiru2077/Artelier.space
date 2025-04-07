import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "faydro",
  database: "art_gallery",
  port: 3308,
});
