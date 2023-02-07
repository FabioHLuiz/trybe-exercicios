// Exercicio 1 Parte 1
// Crie um servidor Node.js utilizando o framework Express com a estrutura inicial do app.js e server.js e prepare o ambiente instalando a biblioteca nodemon.
// Primeiro passo: Crie o arquivo app.js. Agora, importe a biblioteca express e chame a função em uma variável.
// Segundo passo no server.js
const express = require('express');

// Exercicio 2
// Quinto passo: Importe o arquivo utils/generateToken.js para o app.js e chame a função em uma variável chamada token.
const generateToken = require('./utils/generateToken');

// Parte 4
// Quinto passo: Por fim, realiza-se a importação do arquivo middlewares/validateName.js para o app.js e adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.
const validateName = require('./middlewares/validateName');

// Parte 5
// Quinto passo: Por fim, realiza-se a importação do arquivo middlewares/validatePrice.js para o app.js e adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.
const validatePrice = require('./middlewares/validatePrice');

// Parte 6
// Sétimo passo: Por fim, realiza-se a importação do arquivo middlewares/validateDescription.js para o app.js e adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.
const validateDescription = require('./middlewares/validateDescription');

// Parte 7
// Quarto passo: Por fim, realiza-se a importação do arquivo middlewares/validateCreatedAt.js para o app.js e adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.
const validateCreatedAt = require('./middlewares/validateCreatedAt');

// Parte 8
// Quarto passo: Por fim, realiza-se a importação do arquivo middlewares/validateRating.js para o app.js e adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.
const validateRating = require('./middlewares/validateRating');

// Parte 9
// Quarto passo: Por fim, realiza-se a importação do arquivo middlewares/validateDifficulty.js para o app.js e adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.
const validateDifficulty = require('./middlewares/validateDifficulty');

// Exercicio 2
// Quarto passo: Por fim, realiza-se a importação do arquivo middlewares/auth.js para o app.js e adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.
const auth = require('./middlewares/auth');

const app = express();

// Parte 2
// Adicione um middleware criado pela comunidade que tem como função interpretar conteúdo JSON.
// Primeiro passo: Utilize o método use e use o express.json() como middleware para interpretar os conteúdos JSON.
app.use(express.json());

// Parte 3
// Crie um endpoint POST com a rota /activities para adicionar novas atividades. Ela deve:

// Primeiro passo: Utilize o método post vindo do arquivo app. Após isso, adicione a rota /activities como primeiro parâmetro e como segundo parâmetro uma callback responsável por lidar com as requisições(_req) e respostas(res) do servidor

// Exercicio 2
// Crie um endpoint POST com a rota /signup para cadastrar pessoas usuárias. Ela deve:

// Ter os campos email, password, firstName e phone obrigatoriamente;
// Caso os campos não sejam preenchidos, retornar o status 401 - Unauthorized e uma mensagem (formato json);
// Sugestão: { "message": "Campos ausentes!" }.
// Gerar um token aleatório válido;
// Retornar o status 200 e uma mensagem contendo o token (formato json);
// Sugestão: { token: '<token-aleatorio>' }.
// De olho na dica👀: Para gerar o token você pode utilizar a função randomBytes, do módulo crypto do Node, dessa forma:

// Parte 1
// Primeiro passo:

// Primeiro passo: Utilize o método post vindo do arquivo app. Após isso, adicione a rota /signup como primeiro parâmetro e como segundo parâmetro uma callback responsável por lidar com as requisições(_req) e respostas(res) do servidor.

app.post(
  '/signup',
  auth,
  validateDifficulty,
  validateRating,
  validateCreatedAt,
  validateDescription,
  validatePrice,
  validateName,
  (req, res) => {
    // Exercicio 2
    // Segundo passo: Acesse as chaves email, password, firstName e phone usando req.body. Em seguida, aplique uma condicional para verificar se todos os campos existem por meio do método includes.
    const { email, password, firstName, phone } = req.body;
    if ([email, password, firstName, phone].includes(undefined)) {
      // Exercicio 1
      // Segundo passo: Utilize o método status enviando o código de resposta HTTP 201 com a mensagem informando que a atividade foi cadastrada com sucesso.
      // res.status(201).json({ message: 'Atividade registrada com sucesso!' });

      // Exercicio 2
      // Terceiro passo: Se não existirem, utilizamos o método status enviando o código de resposta HTTP 401 com a mensagem informando que os campos são obrigatórios.
      return res.status(401).json({ message: 'Campos ausentes!' });
    }
    // Exercicio 2
    //   Quinto passo: Importe o arquivo utils/generateToken.js para o app.js e chame a função em uma variável chamada token.
    const token = generateToken();
    //  Exercicio 2
    //   Sexto passo: Por fim, utilizamos o método status enviando o código de resposta HTTP 200 com um token aleatório e válido.
    return res.status(200).json({ token });
  },
);

module.exports = app;

// Exercicio 2
// O quarto passo está na pasta generateToken
// Quarto passo: Crie um diretório utils e dentro crie um arquivo chamado generateToken.js. Agora, vamos adicionar o código que é fornecido como dica
