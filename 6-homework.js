const express = require("express");
const bookService = require("./data/book-service");

const app = express();
app.use(express.json());
const port = 4000;

app.use((req, res, next) => {
  try {
    username = req.headers.username;
    password = req.headers.password;
    if(password=="123456"){
      next();
    }else{
      throw "Wrong password";
    }
  } catch (error) {
    res.status(400).send("unauthorized user");
  }
});

app.get("/", (req, res) => {
  res.send("Books app!");
});

app.get("/book", (req, res) => {
  res.send(bookService.getAllBooks());
});

app.post("/book",(req,res)=>{
  res.send(bookService.addBook(req.body));
});

app.delete("/book/:id",(req,res)=>{
  res.send(bookService.deleteBookById(req.params.id));
})

app.put("/book/:id",(req,res)=>{
  res.send(bookService.editBook(req.params.id,req.body))
})

app.listen(port, () => {
  console.log(`express app listening at http://localhost:${port}`);
});
