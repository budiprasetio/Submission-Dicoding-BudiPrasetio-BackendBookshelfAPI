const { addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler } = require("./handler");

const routes = [
  // Ini tambah buku
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },

  // Tampilkan semua buku
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },

  // Tampilkan detail buku
  {
    method: "GET",
    path: "/books/{id}",
    handler: getBookByIdHandler,
  },

  // Edit detail buku
  {
    method: "PUT",
    path: "/books/{id}",
    handler: editBookByIdHandler,
  },

  // Hapus buku
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
