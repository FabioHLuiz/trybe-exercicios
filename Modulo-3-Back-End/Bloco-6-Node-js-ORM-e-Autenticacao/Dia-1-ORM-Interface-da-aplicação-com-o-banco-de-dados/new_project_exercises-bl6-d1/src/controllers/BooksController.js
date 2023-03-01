// Solução do exercício 4

// Crie um controller BooksController com o método getAll sendo um middleware para retornar a lista de livros por meio do método getAll de BookService.

// const BookService = require('../services/BookService');

// const getAll = async (req, res) => {
//   const books = await BookService.getAll();
//   res.status(200).json(books);
// };
//////////////////////////////////////////////////////////////////////////////////////////////////////

// Refatorando a função
// Solução do exercício bônus 3

// Refatore o método getAll de forma que ser for enviado uma query string author ele seja capaz de pegar a lista usando o método getByAuthor de BooksService;
const BookService = require('../services/BookService');

const getAll = async (req, res) => {
  const { author } = req.query;

  let books;

  if (author) {
    books = await BookService.getByAuthor(author);
  } else {
    books = await BookService.getAll();
  }

  res.status(200).json(books);
};
// Solução do exercício 7

// No controller BooksController crie o método getById sendo um middleware que recebe o id como parâmetro de rota e buscar o livro por meio do service. Se o livro não existir a resposta da requisição deve ter o status 404 e o json {"message": "Book not found"}.
const getById = async (req, res) => {
  const book = await BookService.getById(req.params.id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(book);
};

// Refatorado no exercicio bonus 5 logo abaixo

// Solução do exercício 10

// No controller BooksController crie o método create sendo um middleware que recebe os atributos title, author, pageQuantity do body da requisição e salve os dados por meio do service.
// const create = async (req, res) => {
//   const { title, author, pageQuantity } = req.body;
//   const book = await BookService.create({ title, author, pageQuantity });

//   res.status(201).json(book);
// };

// Refatorado no exercicio bonus 5 logo abaixo

// Solução do exercício 13

// No controller BooksController crie o método update sendo um middleware que recebe o id como parâmetro de rota e os atributos title, author, pageQuantity do body da requisição e salve os dados por meio do service. A resposta da requisição deve ter o status 200 e retornar a mensagem ‘Book updated’. Se o livro não for encontrado retornar a mensagem ‘Book not found’.
// const update = async (req, res) => {
//   const { id } = req.params;
//   const { title, author, pageQuantity } = req.body;

//   const updatedUser = await BookService.update(id, { title, author, pageQuantity });

//   if (!updatedUser) return res.status(404).json({ message: 'Book not found' });

//   res.status(201).json({ message: 'Book updated' });
// };

// Solução do exercício bônus 5

// Crie uma migration para adicionar a coluna publisher (editora) na tabela Books. Modifique as camadas de serviço para que esse campo seja utilizado no cadastro e na edição
const create = async (req, res) => {
  const { title, author, pageQuantity, publisher } = req.body;
  const book = await BookService.create({ title, author, pageQuantity, publisher });

  res.status(201).json(book);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity, publisher } = req.body;

  const updated = await BookService.update(id, { title, author, pageQuantity, publisher });

  if (!updated) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json({ message: 'Book updated' });
};

// Solução do exercício 16

// No controller BooksController crie o método remove sendo um middleware que recebe o id como parâmetro de rota e remova o livro por meio do service.
const remove = async (req, res) => {
  const { id } = req.params;

  const removed = await BookService.remove(id);

  if (!removed) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json({ message: 'Book removed' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};