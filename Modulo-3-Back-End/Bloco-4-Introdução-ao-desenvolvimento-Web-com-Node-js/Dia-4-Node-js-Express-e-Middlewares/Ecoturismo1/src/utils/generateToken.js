// Exercicio 2
// Quarto passo: Crie um diretório utils e dentro crie um arquivo chamado generateToken.js. Agora, vamos adicionar o código que é fornecido como dica.

const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = generateToken;

// Quinto passo: Importe o arquivo utils/generateToken.js para o app.js e chame a função em uma variável chamada token.
