// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});

// Vamos entender passo a passo o que está acontecendo:

// A constante joke cria um objeto similar ao que é retornado da API;

// O jest.spyOn espiona as chamadas à função fetch do objeto global.É por meio deste objeto global que conseguimos usar qualquer função do sistema, por exemplo, a função parseInt;

// Quando a função fetch for chamada, em vez de fazer uma requisição a uma API externa, será chamado nosso mock.Repare que para cada.then utilizamos.mockResolvedValue e simulamos o retorno que o fetch teria.Primeiro retornamos um objeto que contém a função.json e dentro dela criamos um mock que retorna a nossa piada, satisfazendo o que é esperado no nosso componente;

// É importante termos o async em it('fetch joke', async () => {, para que se possa utilizar await findByText onde estamos dizendo ao nosso teste: espere até que consiga encontrar esse texto no dom ou uma mensagem de erro por limite de tempo;

// As funções toBeCalledTimes e toBeCalledWith servem para garantir respectivamente, o número de chamadas ao nosso fetch e que ele foi chamado com os argumentos corretos.

// A linha afterEach(() => jest.clearAllMocks()); faz com que, após cada teste, nosso mock seja limpo, ou seja, no caso acima, garante que após o teste o fetch não seja mais um mock.Isso é bem útil para que não haja interferência entre um teste e outro.

///////////////////////////////////////////////////////////////////////

// Segunda forma de mock do fetch

// Existem diversas formas de mockagem! Você se lembra que a função fetch é uma Promise ? Podemos então, mockar de outra forma(e igualmente válida) o fetch do exemplo acima:

// App.test.js
// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  // Outra forma de mock do fetch:
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(joke),
  }));

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
});

// Nesse exemplo estamos dizendo que global.fetch agora é uma função mockada com jest.fn que retorna uma Promise, e na primeira vez que ela for resolvida, deve retornar um objeto com uma outra função json que também é uma Promise, que quando resolvida retorna sua piada.

///////////////////////////////////////////////////////////////////////

// Terceira forma de mock do fetch

// Uma terceira forma de escrever o mesmo exemplo seria com a sintaxe async / await, onde temos o mock dessa forma:

global.fetch = jest.fn(async () => ({
  json: async () => joke
}));
