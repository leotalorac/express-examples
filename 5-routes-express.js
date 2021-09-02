const express = require("express");

const app = express();
app.use(express.json());
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/tasks", (req, res) => {
  res.send({ description: "This is the tasks endpoint" });
});

app.get("/tasks/:id", (req, res) => {
  res.send({ description: "This is the tasks endpoint", params: req.params });
});

app.post("/tasks/:id", (req, res) => {
  res.send({ description: "This is the post endpoint", params: req.params, body: req.body });
});

app.listen(port, () => {
  console.log(`express app listening at http://localhost:${port}`);
});
