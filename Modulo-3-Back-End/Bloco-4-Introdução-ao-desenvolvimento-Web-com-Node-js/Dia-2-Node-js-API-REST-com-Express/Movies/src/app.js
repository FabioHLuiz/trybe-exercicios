//  Exercício 3
// Crie um servidor Node.js utilizando o framework Express.

const express = require('express');

//  Exercício 4
// Crie uma função de leitura do JSON com o modulo fs.
// Primeiro passo: No arquivo app.js importe os módulos fs e path.
const fs = require('fs').promises;
const path = require('path');


const app = express();

app.use(express.json());

// Segundo passo: Crie uma função assíncrona para utilizar o módulo fs.Utilizaremos o path para garantir que o arquivo com nossos filmes seja encontrado sem problemas.Como usaremos esse caminho de arquivo em todas as rotas, vamos definir uma variável para guardar seu valor e reutilizá - la sempre que necessário.Para fazer leitura do JSON, usaremos o método readFile.Por fim, retornaremos os dados lidos convertidos em objeto:
const moviesPath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

//  Exercício 5
// Crie um endpoint do tipo GET com a rota / movies /: id, que possa listar um filme do JSON por id.

//   Solução
// Primeiro passo: Utilizando o método get, adicione a rota / movies /:id como primeiro parâmetro e uma callback assíncrona como segundo parâmetro, que será responsável por lidar com as requisições(req) e respostas(res) do servidor.Dentro dessa callback, crie um bloco de try/catch que chame a função de leitura do JSON no try e devolva um erro interno no catch
app.get('/movies/:id', async (req, res) => {
  try {
    const movies = await readFile();

// Segundo passo: Aplique o método find no array de objetos movies, buscando pelo filme cuja propriedade id seja igual ao id recebido como parâmetro de rota na requisição(req), que capturamos por meio do req.params.id.
    
// Atente para a conversão do id recebido na requisição de string para number com o método Number().
    const movie = movies.find(({ id }) => id === Number(req.params.id));

// Terceiro passo: Por fim, utilize o método status para enviar o código de resposta HTTP 200 e retornar a atividade em formato json correspondente ao id solicitado pelo cliente como resposta.
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Exercício 6
// Crie um endpoint do tipo GET com a rota / movies, que possa listar todos os filmes do JSON.

//   Solução
// Primeiro passo: Utilizando o método get, adicione a rota / movies /:id como primeiro parâmetro e uma callback assíncrona como segundo parâmetro, que será responsável por lidar com as requisições(req) e respostas(res) do servidor.Dentro dessa callback, crie um bloco de try/catch que chame a função de leitura do JSON no try e devolva um erro interno no catch.
app.get('/movies', async (req, res) => {
  try {
    const movies = await readFile();

// Segundo passo: Utilize o método status para enviar o código de resposta HTTP 200 e retornando o array de objetos movies em formato json com todos os filmes para o cliente como resposta.
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Exercício 7
// Crie um endpoint do tipo POST com a rota / movies, para cadastrar um novo filme no JSON.

// O corpo da requisição deve receber o seguinte formato:
// {
//   "movie": "Vingadores",
//     "price": 5
// }

// Solução
// Primeiro passo: Utilizando o método post, adicione a rota / movies como primeiro parâmetro e uma callback assíncrona como segundo parâmetro, que será responsável por lidar com as requisições(req) e respostas(res) do servidor.Dentro dessa callback, crie um bloco de try/catch que devolva um erro interno no catch.

// Desenvolveremos o bloco dentro do try nos próximos passos.
app.post('/movies', async (req, res) => {
  try {

// Segundo passo: Desestruture as informações movie e price do corpo da requisição.
    const { movie, price } = req.body;

// Terceiro passo: Chame a função de leitura do JSON.
    const movies = await readFile();

//  Quarto passo: Crie um objeto contendo as informações do corpo da requisição e adicione uma chave id.Em seguida, crie uma variável para guardar o que será a lista completa de filmes, ou seja, as informações dos filmes já existentes mais o novo filme que estamos cadastrando, fazendo a conversão(parse) dessas informações de JavaScript para uma string JSON.

// Esse parse é importante porque vamos utilizar essas informações no método writeFile daqui a pouco.   
    const newMovie = {
      // acessamos a chave id do ultimo objeto do array de maneira dinâmica e incrementamos + 1 em seu valor
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
    };
    const allMovies = JSON.stringify([...movies, newMovie]);

// Quinto passo: Agora vamos escrever no arquivo utilizando o modulo fs e para garantir que não teremos problemas, utilizaremos também o express.json.
    await fs.writeFile(moviesPath, allMovies);

// Sexto passo: Por fim, utilize o método status para enviar o código de resposta HTTP 201 e retornando o novo filme em formato json para o cliente como resposta.
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Exercício 8
// Crie um endpoint do tipo PUT com a rota / movies /: id, que possa editar informações de um filme do JSON.

// O corpo da requisição deve receber o seguinte formato:
// {
//   "movie": "Vingadores: Ultimato",
//     "price": 5
// }

// Solução
// Primeiro passo: Utilize o método put vindo do arquivo app.Após isso, adicione a rota / movies /:id como primeiro parâmetro e como segundo parâmetro uma callback assíncrona responsável por lidar com as requisições(req) e respostas(res) do servidor.Dentro dessa callback, crie um bloco de try/catch que devolva um erro interno no catch.

// Desenvolveremos o bloco dentro do try nos próximos passos.
app.put('/movies/:id', async (req, res) => {
  try {

// Segundo passo: Desestruture o id do parametro da requisição e as informações movie e price do corpo da requisição.
    const { id } = req.params;
    const { movie, price } = req.body;

// Terceiro passo: Chame a função de leitura do JSON.
    const movies = await readFile();

// Quarto Passo: Localize o index correspondente ao id do parametro da requisição.
// Atente para a conversão do id recebido na requisição de string para number com o método Number() para permitir que a comparação seja feita com sucesso.
    const index = movies.findIndex((element) => element.id === Number(id));

//Quinto passo: Altere o valor do elemento pelo que foi fornecido pelo corpo da requisição.
// Atente para a conversão do id recebido na requisição de string para number com o método Number() também na hora de criar o novo filme.
    movies[index] = { id: Number(id), movie, price };

// Sexto passo: Faça o parse das informações para string JSON e escreva no arquivo movies.json o conteúdo atualizado.
// Os dois últimos parâmetros passados no método stringify são opcionais e têm por objetivo melhorar a formatação do arquivo JSON.
    const updatedMovies = JSON.stringify(movies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies)

// Sétimo passo: Por fim, utilize o método status para enviar o código de resposta HTTP 200 e retornando o filme atualizado em formato json para o cliente como resposta.
    res.status(200).json(movies[index]);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Exercício 9
// Crie um endpoint do tipo DELETE com a rota / movies /:id que possa deletar um filme do JSON.

//   Solução
// Primeiro passo: Utilize o método delete vindo do arquivo app.Após isso, adicione a rota / movies /:id como primeiro parâmetro e como segundo parâmetro uma callback assíncrona responsável por lidar com as requisições(req) e respostas(res) do servidor.Dentro dessa callback, crie um bloco de try/catch que devolva um erro interno no catch.

// Desenvolveremos o bloco dentro do try nos próximos passos.
app.delete('/movies/:id', async (req, res) => {
  try {

// Segundo passo: Desestruture o id do parametro da requisição
    const { id } = req.params;

// Terceiro passo: Chame a função de leitura do JSON.
    const movies = await readFile();

// Quarto passo: Filtre o array pelos objetos que não possuem o mesmo id que o fornecido pelo parâmetro da requisição.
    const filteredMovies = movies.filter((movie) => movie.id !== Number(id));

// Quinto passo: Com o array filtrado, podemos escrever no arquivo movies.json utilizando o modulo fs.
// Fazemos o parse com o método JSON.stringify para evitar erros no método writeFile.
    const updatedMovies = JSON.stringify(filteredMovies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);

// Oitavo passo: Por fim, utilize o método status para enviar o código de HTTP 204 como resposta.
    res.status(204).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Exercício 10
// Crie um endpoint do tipo GET com a rota / movies / search, que possa listar todos os filmes do JSON.

// A rota deve receber a informação por query e a chave deve - se chamar q.A chave vai trazer consigo valor de ‘gente’ por exemplo, e o filtro deve trazer apenas os filmes com esse termo, se não encontrar, traga um array vazio.
//   Solução
// Primeiro passo: Utilize o método get vindo do arquivo app.Após isso, adicione a rota / movies / search como primeiro parâmetro e como segundo parâmetro uma callback assíncrona responsável por lidar com as requisições(req) e respostas(res) do servidor.Dentro dessa callback, crie um bloco de try/catch que devolva um erro interno no catch.

// ⚠️ É importante que essa rota venha antes das demais que apresentam rotas dinâmicas no arquivo app.js para que funcione corretamente.Por isso, ela será a primeira rota de nosso arquivo.

// Desenvolveremos o bloco dentro do try nos próximos passos.

app.get('/movies/search', async (req, res) => {
  try {

// Segundo passo: Desestruture q de req.query e chame a função de leitura do JSON no bloco do try.
    const { q } = req.query;
    const movies = await readFile();

// Terceiro passo: Use uma condicional para verificar se o q repassado por meio do parâmetro de rota existe.Se existir, filtre a lista com todos os filmes para saber quais deles incluem o conteúdo de q.Caso haja um q, utilizamos o método status enviando o código de resposta HTTP 200 e retornando a atividade filtrada pelo movie em formato json.Caso nenhum termo seja passado em q, devolvemos o status 200, mas sem enviar nada.
    if (q) {
      const filteredMovies = movies.filter((element) => element.movie.includes(q));
      return res.status(200).json(filteredMovies);
    }
    res.status(200).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = app;