const express = require("express");
const app = express();

const routes = require("./routes/index");
app.set("port", process.env.PORT || 1337);

app.use("/", routes);

app.listen(app.get("port"), () => {
  console.log(`Example app listening on port ` + app.get("port"));
});
