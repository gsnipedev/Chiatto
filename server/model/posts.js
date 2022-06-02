const mongo = require("mongoose");
const Schema = mongo.Schema;

const upvote = new Schema({
  username: String,
});

const downvote = new Schema({
  username: String,
});

const comments = new Schema({
  username: String,
  text: String,
  upvote: [upvote],
  downvote: [downvote],
});

const posts = new Schema(
  {
    username: String,
    text: String,
    comments: [comments],
  },
  { collection: "posts" }
);

module.exports = mongo.model("posts", posts);
