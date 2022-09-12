// O async é bastante útil! Para começar a usá-lo, basta colocar o async antes da definição de uma função. Vamos refatorar a função anterior para usar async:

const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
};

fetchJoke();

// Pronto! Perceba que continua funcionando exatamente da mesma forma que anteriormente. Tá achando que acabou? Ainda tem mais!

// A funcionalidade async sozinha é fantástica mas não resolve nosso problema com a função fetchJoke. Assim, junto com ela vem um bônus: o await que faz exatamente o que diz: faz a função esperar uma resposta para continuar a sua execução.

// Lembre-se: O await só pode ser usado dentro de uma função com async.

// Agora, vamos refatorar a fetchJoke:

// Temos duas maneiras de utilizar o async await, a primeira é mesclando com o .then() e o .catch():

const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.value)
    .catch((error) => `Algo deu errado :( \n${error}`);

  console.log(result);
};

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.

// Usando o await , a fetchJoke espera o fetch terminar toda sua execução (até o último .then() ou .catch()) para só depois executar o console.log().

// A segunda é refatorando o .then() e o .catch() usando o try e o catch:

const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch (error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.

// Note que, quando você usa o try e o catch, é executado o código inserido no escopo do try, e caso alguma parte desse código dê erro, você o trata no escopo do catch(error).


// const fetch = require('node-fetch');

// const getRandomAdvice = () => {
//   const url = 'https://api.adviceslip.com/advice';
//   const request = fetch(url)
//     .then((response) => response.json())
//     .then(({ slip: { id, advice } }) => console.log(advice))
//     .catch((error) => console.log('Ops, algo deu errado!', error.errno));
// };
//     getRandomAdvice();

////////////////////////////////////////////////////////////////////////////////////////

const fetch = require('node-fetch');
// Para utilizar o (await) minha função tem que ser assincrona (async) ela vai retornar um promisse.
const getRandomAdvice = async () => {
  try {
    const url = 'https://api.adviceslip.com/advice';
    const request = await fetch(url); // (await) executa o fetch mais esperar para lançar dentro dp request.
    const json = await request.json();
    const { slip } = json;
    const { id, advice } = slip;
    return advice;
  } catch (err) {
    return 'Always check your connection and your URLs.';
  }
};

getRandomAdvice();