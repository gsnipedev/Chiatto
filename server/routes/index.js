var express = require("express");
var router = express.Router();

const data = { nama: "Andika", usia: 18 };

router.get("/", (req, res) => {
  res.json(["Hello World"]);
});

router.get("/data", (req, res) => {
  res.json(data);
});

module.exports = router;
