// Exercicio 1 Parte 1
// Crie um servidor Node.js utilizando o framework Express com a estrutura inicial do app.js e server.js e prepare o ambiente instalando a biblioteca nodemon.
// Primeiro passo: Crie o arquivo app.js. Agora, importe a biblioteca express e chame a função em uma variável.
// Segundo passo no server.js
const express = require('express');

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

const app = express();

// Parte 2
// Adicione um middleware criado pela comunidade que tem como função interpretar conteúdo JSON.
// Primeiro passo: Utilize o método use e use o express.json() como middleware para interpretar os conteúdos JSON.
app.use(express.json());

// Parte 3
// Crie um endpoint POST com a rota /activities para adicionar novas atividades. Ela deve:

// Primeiro passo: Utilize o método post vindo do arquivo app. Após isso, adicione a rota /activities como primeiro parâmetro e como segundo parâmetro uma callback responsável por lidar com as requisições(_req) e respostas(res) do servidor

app.post(
  '/activities',
  validateDifficulty,
  validateRating,
  validateCreatedAt,
  validateDescription,
  validatePrice,
  validateName,
  (_req, res) => {
    // Segundo passo: Utilize o método status enviando o código de resposta HTTP 201 com a mensagem informando que a atividade foi cadastrada com sucesso.
    res.status(201).json({ message: 'Atividade registrada com sucesso!' });
  },
);

module.exports = app;