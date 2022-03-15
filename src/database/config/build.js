const { join } = require("path");
const { readFileSync } = require("fs");

const connetion = require("./connections");

const dbBuild = () => {
  const sql = readFileSync(join(__dirname, "build.sql")).toString();
  return connetion.query(sql);
};
module.exports = { dbBuild };
