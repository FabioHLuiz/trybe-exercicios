// Exercicio 2

// Parte 2

// Primeiro passo: Crie o arquivo auth.js dentro do diretório middlewares realizando o module.exports de uma função anônima com os parâmetros req, res e next.

module.exports = (req, res, next) => {
  // Segundo passo: Acesse a chave authorization usando req.headers.Em seguida, aplique uma condicional para verificar se o authorization existe ou se o tamanho é diferente de 16 caractere
  const { authorization } = req.headers;

  if (!authorization || authorization.length !== 16) {
    // Terceiro passo: Se não existir ou não ter o tamanho de 16 caracteres, utilizamos o método status enviando o código de resposta HTTP 401 com a mensagem informando que o token é inválido
    return res.status(401).json({ message: 'Token inválido!' });
  }

  next();
};

// O quarto passo está no app.js
// Quarto passo: Por fim, realiza-se a importação do arquivo middlewares/auth.js para o app.js e adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.
