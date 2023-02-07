// Parte 6
// Crie um middleware de validação para a chave description que possui as chaves createdAt, rating e difficulty. Ela deve:

// Primeiro passo: Crie o arquivo validateDescription.js dentro do diretório middlewares realizando o module.exports de uma função anônima com os parâmetros req, res e next

// Segundo passo: Acesse a chave description usando req.body. Em seguida, aplique uma condicional para verificar se o description existe.

// Terceiro passo: Se não existir, utilizamos o método status enviando o código de resposta HTTP 400 com a mensagem informando que o campo é obrigatório.

// Quarto passo: Agora, adicione outra condicional para verificar a chave description.createdAt existe.Se não existir, utilizamos o método status enviando o código de resposta HTTP 400 com a mensagem informando que o campo é obrigatório.

//   Quinto passo: Agora, adicione outra condicional para verificar se a chave description.rating existe.Se não existir, utilizamos o método status enviando o código de resposta HTTP 400 com a mensagem informando que o campo é obrigatório.

// Sexto passo: Agora, adicione outra condicional para verificar se a chave description.difficulty existe. Se não existir, utilizamos o método status enviando o código de resposta HTTP 400 com a mensagem informando que o campo é obrigatório.

// Sétimo passo: Por fim, realiza-se a importação do arquivo middlewares/validateDescription.js para o app.js e adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.

// Primeiro passo:
module.exports = (req, res, next) => {
  // Segundo passo
  const { description } = req.body;
  if (!description) {
    // Terceiro passo
    return res.status(400).json({ message: 'O campo description é obrigatório' });
  }
  // Quarto passo
  if (!description.createdAt) {
    return res.status(400).json({ message: 'O campo createdAt é obrigatório' });
  }
  // Quinto passo
  if (!description.rating) {
    return res.status(400).json({ message: 'O campo rating é obrigatório' });
  } // Sexto passo
  if (!description.difficulty) {
    return res.status(400).json({ message: 'O campo difficulty é obrigatório' });
  }
  next();
};
// Sétimo passo está no arquivo app.js

// Alternativa
// De olho na dica👀: O código acima pode ser um problema pela quantidade de linhas dentro do código da função se você estiver com o ESLint configurado. Para resolver esse problema e ter um código limpo e reaproveitável, você pode construir uma função dedicada para as validações de todos os campos. Veja o exemplo abaixo:

// const validateDescription = (descriptionValue, res, value) => {
//     if (!descriptionValue) {
//       return res.status(400).json(
//         { message: `O campo ${value} é obrigatório` },
//       );
//     }
//   };

//   module.exports = (req, res, next) => {
//     const { description } = req.body;

//     return validateDescription(description, res, 'description')
//       || validateDescription(description.createdAt, res, 'createdAt')
//       || validateDescription(description.rating, res, 'rating')
//       || validateDescription(description.difficulty, res, 'difficulty')
//       || next();
//   };
