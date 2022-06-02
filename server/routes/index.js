var express = require("express");
var router = express.Router();
const mongo = require("mongoose");
const Account = require("../model/account");
const Posts = require("../model/posts");
const data = { nama: "Andika", usia: 18 };

router.get("/", async (req, res) => {
  const data = await Posts.find();
  res.json(data);
});

router.get("/data", (req, res) => {
  res.json(data);
});

router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const getAccount = await Account.findOne({ username: username, password: password });
    if (getAccount) {
      res.json({ status: "success" });
    } else {
      res.send({ status: "Wrong username or Password" });
    }
  } catch (err) {
    res.send("Error " + err);
  }
});

module.exports = router;
