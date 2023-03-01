// Exercício 3: Crie um service BooksService com o método getAll para retornar uma lista de livros por meio do model Book.

const { Book } = require('../models');

// const getAll = async () => {
//   const books = await Book.findAll();
//   return books;
// };
////////////////////////////////////////////////////////////////////////////////////////////////////

// Solução do exercício bônus 4

// Refatore os métodos getAll e getByAuthor de BookService para que a lista de livros seja ordenada pelo título em ordem alfabética;
const getAll = async () => {
  const books = await Book.findAll({
    order: [['title', 'ASC']],
  });
  return books;
};

// Solução do exercício 6

// No service BooksService crie um método getById que recebe um id como parâmetro e use o model Book para buscar esse livro. Retorne o objeto encontrado pelo model.
const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

// Refatorado no exercicio bonus 5 logo abaixo

// Solução do exercício 9

// No service BooksService crie um método create que recebe um objeto com os atributos title, author, pageQuantity e salve um novo livro utilizando o model Book.

// const create = async ({ title, author, pageQuantity }) => {
  //   const book = await Book.create({ title, author, pageQuantity });
  //   return book;
  // };
  
  // Refatorado no exercicio bonus 5 logo abaixo
  
  // Solução do exercício 12
  
  // No service BooksService crie um método update que recebe dois parâmetros: o id do livro a ser alterado e um objeto com os atributos title, author, pageQuantity e atualize o livro utilizando o model Book.
  // const update = async (id, { title, author, pageQuantity }) => {
    //   const [updated] = await Book.update(
      //     {
        //       title,
        //       author,
        //       pageQuantity,
        //     },
        //     { where: { id } },
        //   );
        
        //   return updated;
        // };
        
        // Solução do exercício bônus 5
        
        // Crie uma migration para adicionar a coluna publisher (editora) na tabela Books. Modifique as camadas de serviço para que esse campo seja utilizado no cadastro e na edição;
        const create = async ({ title, author, pageQuantity, publisher }) => {
          const book = await Book.create({ title, author, pageQuantity, publisher });
          return book;
        };
        
        const update = async (id, { title, author, pageQuantity, publisher }) => {
          const [updated] = await Book.update(
            {
              title,
              author,
              pageQuantity,
              publisher,
            },
            { where: { id } }
          );
        
          return updated;
        };
        // Solução do exercício 15
        
        // No service BooksService crie um método remove que recebe o id do livro a ser removido e remova o mesmo utilizando o model Book.
const remove = async (id) => {
  const removed = await Book.destroy(
    { where: { id } },
  );

  return removed;
};

// Solução do exercício bônus 2

// Crie um método getByAuthor em BooksService para buscar uma lista de livros por author;
// const getByAuthor = async (author) => {
//   const books = await Book.findAll({ where: { author } });
//   return books;
// };

////////////////////////////////////////////////////////////////////////////////////////////////////

// Solução do exercício bônus 4

// Refatore os métodos getAll e getByAuthor de BookService para que a lista de livros seja ordenada pelo título em ordem alfabética;
const getByAuthor = async (author) => {
  const books = await Book.findAll({
    where: { author },
    order: [['title', 'ASC']],
  });
  return books;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
};