// Parte 7
// Crie um middleware de validação para a chave createdAt. Ela deve:
// Primeiro passo: Crie o arquivo validateCreatedAt.js dentro do diretório middlewares realizando o module.exports de uma função anônima com os parâmetros req, res e next.

module.exports = (req, res, next) => {
  // Segundo passo: Acesse a chave createdAt usando req.body.description. Agora, precisamos buscar uma regex que verifique que o formato da nossa data seja dd/mm/yyyy e usar o método test que faz a validação da data enviada.
  const { createdAt } = req.body.description;

  const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (!isFormatDate.test(createdAt)) {
    // Terceiro passo: Se o formato não for válido, utilizamos o método status enviando o código de resposta HTTP 400 com a mensagem informando que o campo deve ter um formato válido.
    return res
      .status(400)
      .json({ message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' });
  }

  next();
};

// Quarto passo está no app
// Quarto passo: Por fim, realiza-se a importação do arquivo middlewares/validateCreatedAt.js para o app.js e adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.
