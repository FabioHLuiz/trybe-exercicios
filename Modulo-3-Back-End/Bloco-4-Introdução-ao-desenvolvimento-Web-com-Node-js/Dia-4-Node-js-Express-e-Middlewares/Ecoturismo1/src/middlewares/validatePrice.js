// Parte 5
// Crie um middleware de validação para a chave price. Ela deve:
// Primeiro passo: Crie o arquivo validatePrice.js dentro do diretório middlewares realizando o module.exports de uma função anônima com os parâmetros req, res e next.
module.exports = (req, res, next) => {
  // Segundo passo: Acesse a chave price usando req.body. Em seguida, aplique uma condicional para verificar se o price está definido.
  const { price } = req.body;

  if (price === undefined) {
    // Terceiro passo: Se não estiver definido, utilizamos o método status enviando o código de resposta HTTP 400 com uma mensagem informando que o campo é obrigatório
    return res.status(400).json({ message: 'O campo price é obrigatório' });
  }
  //   Quarto passo: Agora, adicione outra condicional para verificar o valor da chave price. Se essa chave for menor que 0 ou ter o tipo diferente de número, utilizamos o método status enviando o código de resposta HTTP 400 com uma mensagem informando que o campo deve ser maior ou igual a zero. Não se esqueça de chamar a função next() ao final para passar para os próximos middlewares.
  if (price < 0 || typeof price !== 'number') {
    return res.status(400).json({
      message: 'O campo price deve ser um número maior ou igual a zero',
    });
  }

  next();
};
// Quinto passo está no app.js
// Quinto passo: Por fim, realiza-se a importação do arquivo middlewares/validatePrice.js para o app.js e adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.
