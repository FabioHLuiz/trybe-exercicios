// Parte 9
// Crie um middleware de validação para a chave difficulty. Ela deve:
// Primeiro passo: Crie o arquivo validateDifficulty.js dentro do diretório middlewares realizando o module.exports de uma função anônima com os parâmetros req, res e next
module.exports = (req, res, next) => {
  // Segundo passo: Acesse a chave difficulty usando req.body.description. Agora, adicione as classificações “Fácil”, “Médio” ou “Difícil” em um array. Em seguida, aplique uma condicional para verificar se o difficulty está incluso nesse array de classificaçõe
  const { difficulty } = req.body.description;
  const classifications = ['Fácil', 'Médio', 'Difícil'];

  if (!classifications.includes(difficulty)) {
    // Terceiro passo: Se a classificação não estiver no array, utilizamos o método status enviando o código de resposta HTTP 400 com a mensagem informando que o campo deve conter as classificações solicitadas.
    return res.status(400).json({
      message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'',
    });
  }

  next();
};

// Quarto passo está no app
// Quarto passo: Por fim, realiza-se a importação do arquivo middlewares/validateDifficulty.js para o app.js e adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.
