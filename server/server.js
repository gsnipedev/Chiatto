const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongo = require("mongoose");
mongo.connect("mongodb://127.0.0.1:27017/Chiatto", { bufferCommands: false }, () => {
  console.log("Connected!");
});
const routes = require("./routes/index");
app.set("port", process.env.PORT || 1337);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routes);

app.listen(app.get("port"), () => {
  console.log(`Example app listening on port ` + app.get("port"));
});
