const express = require("express");
const bookService = require("./data/book-service");

const app = express();
app.use(express.json());
const port = 4000;

app.use((req, res, next) => {
  /**
   * @TODO
   * Check authorization headers and only allow users using password "123456"
   */
  next();
});

app.get("/", (req, res) => {
  res.send("Books app!");
});

app.get("/book", (req, res) => {
  res.send(bookService.getAllBooks());
});

/**
 * @TODO
 * Use methods { addBook, editBook, deleteBookById } from bookService
 * to build a web service that use HTTP methods POST, PUT, DELETE
 */

app.listen(port, () => {
  console.log(`express app listening at http://localhost:${port}`);
});
