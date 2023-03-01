//   🚀 Exercício 2: Crie o model Book utilizando a API do Sequelize. O model deve conter os seguintes campos:

// title: deve ser do tipo DataTypes.STRING
// author: deve ser do tipo DataTypes.STRING
// pageQuantity: deve ser do tipo DataTypes.INTEGER
// createdAt: deve ser do tipo DataTypes.DATE
// updatedAt: deve ser do tipo DataTypes.DATE

// Solução do exercício bônus 5

// Crie uma migration para adicionar a coluna publisher (editora) na tabela Books. Modifique as camadas de serviço para que esse campo seja utilizado no cadastro e na edição;

module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      pageQuantity: DataTypes.INTEGER,
      publisher: DataTypes.STRING, // Solução do exercício bônus 5
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
  
    return Book;
  };
