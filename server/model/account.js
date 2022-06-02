const mongo = require("mongoose");
const Schema = mongo.Schema;

const Account = new Schema(
  {
    username: {
      type: String,
      minlength: 4,
      maxlength: 20,
    },
    password: {
      type: String,
      minlength: 4,
      maxlength: 20,
    },
  },
  { collection: "user_account" }
);

module.exports = mongo.model("user_account", Account);
