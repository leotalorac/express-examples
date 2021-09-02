const express = require("express");

const app = express();
app.use(express.json());
const port = 4000;

app.use((req, res, next) => {
  req.time = new Date();
  console.log(`LOGGER: access time: ${req.time.toLocaleString()}`);
  next();
});

app.use((req, res, next) => {
  try {
    const base64 = req.headers.authorization.substr("Basic ".length);
    const auth = Buffer.from(base64, "base64").toString("utf-8");
    const [username, password] = auth.split(":");
    req.username = username;
    req.password = password;
    next();
  } catch (error) {
    res.status(400).send("unauthorized user");
  }
});

app.get("*", (req, res) => {
  res.send({
    description: "This is private endpoint",
    username: req.username,
    time: req.time,
  });
});

app.listen(port, () => {
  console.log(`express app listening at http://localhost:${port}`);
});
