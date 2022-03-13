require("env2")(".env");
const { join } = require("path");
const express = require("express");
const router = require("./router");

const app = express();

app.set("port", process.env.port || 8000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "..", "public")));
app.use(router);

module.exports = app;
