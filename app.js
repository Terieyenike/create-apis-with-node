const express = require("express");
const app = express();
const path = require("path");

const friendsRouter = require("./routes/friends.router");

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.get("/", (req, res) => {
  res.send("welcome to the friends data response");
  // res.sendFile(path.join(__dirname, "public", "images", "teri.jpg"));
});

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use("/friends", friendsRouter);

module.exports = app;
