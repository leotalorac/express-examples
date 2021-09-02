const express = require("express");

const taskService = require("./data/task-service");

const port = 4000;

const app = express();
app.set("views", "templates");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("task-template", { tasks: taskService.getTasks() });
});

app.listen(port, () => {
  console.log(`express app listening at http://localhost:${port}`);
});
