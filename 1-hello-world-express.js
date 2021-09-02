const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(port, () => {
  console.log(`express app listening at http://localhost:${port}`);
});
