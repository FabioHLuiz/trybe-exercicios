const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Solução do exercício 5
// Vincule a rota GET /books para acessar seu controller.
app.get('/books', BooksController.getAll);

// Solução do exercício 8

// Vincule a rota GET /books/:id para acessar seu controller.
app.get('/books/:id', BooksController.getById);

// Solução do exercício 11

// Vincule a rota POST /books para acessar seu controller.
app.post('/books', BooksController.create);

// Solução do exercício 14

// Vincule a rota PUT /books/:id para acessar seu controller.
app.put('/books/:id', BooksController.update);

// Solução do exercício 17

// Vincule a rota DELETE /books/:id para acessar seu controller.
app.delete('/books/:id', BooksController.remove);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));