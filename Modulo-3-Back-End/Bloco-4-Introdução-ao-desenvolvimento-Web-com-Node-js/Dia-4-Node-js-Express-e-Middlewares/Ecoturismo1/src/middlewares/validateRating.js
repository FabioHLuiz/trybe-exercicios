// Parte 8
// Crie um middleware de validação para a chave rating. Ela deve:
// Primeiro passo: Crie o arquivo validateRating.js dentro do diretório middlewares realizando o module.exports de uma função anônima com os parâmetros req, res e next.
module.exports = (req, res, next) => {
  // Segundo passo: Acesse a chave rating usando req.body.description. Em seguida, aplique uma condicional para verificar se o rating é um número inteiro ou menor que 1 ou maior que 5.
  const { rating } = req.body.description;

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    // Terceiro passo: Se o número não for válido, utilizamos o método status enviando o código de resposta HTTP 400 com a mensagem informando que o campo deve ser um inteiro entre 1 e 5.
    return res.status(400).json({
      message: 'O campo rating deve ser um número inteiro entre 1 e 5',
    });
  }

  next();
};

// Quarto passo está no app.js
// Quarto passo: Por fim, realiza-se a importação do arquivo middlewares/validateRating.js para o app.js e adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.
