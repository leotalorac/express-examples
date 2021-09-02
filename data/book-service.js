const books = [{ id: 1, title: "Foundation", author: "Isaac Asimov" }];

function getAllBooks() {
  return books;
}

function deleteBookById(id) {
  const index = books.findIndex((book) => parseInt(book.id) == parseInt(id));
  if (index >= 0) {
    books.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

function addBook(book) {
  books.push(book);
  return book;
}

function editBook(id, book) {
  const index = books.findIndex((book) => parseInt(book.id) == parseInt(id));
  if (index >= 0) {
    book.id = id;
    books[index] = book;
    return true;
  } else {
    return false;
  }
}

module.exports = { getAllBooks, deleteBookById, addBook, editBook };
