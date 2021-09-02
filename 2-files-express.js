const express = require("express");

const port = 4000;
const folder = "my-page";

const app = express();
app.use(express.static(folder));

app.listen(port, () => {
  console.log(`express app listening at http://localhost:${port}`);
});
