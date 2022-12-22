// App.test.js
// Logo abaixo desse teste está com ele todo foi feito passo a passo

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});

it('fetches a new joke when button is clicked', async () => {
  const joke1 = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  const joke2 = {
    id: 'xXSv492wPmb',
    joke: 'What is red and smells like blue paint? Red paint!',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(joke1),
  });

  render(<App />);
  const newJokeButton = screen.getByRole('button', { name: 'New joke' });

  expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
  expect(screen.queryByText(joke2.joke)).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);

  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(joke2),
  });
  userEvent.click(newJokeButton);

  expect(await screen.findByText(joke2.joke)).toBeInTheDocument()
  expect(screen.queryByText(joke1.joke)).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(2);
});

///////////////////////////////////////////////////////////////////////

// Criando o teste para a nova funcionalidade

// Apesar de pouco código ter sido adicionado na aplicação, existem novos cenários que precisam ser testados.Vamos adicionar esse teste no arquivo App.test.js, criando um novo test, logo abaixo do bloco que já existe no arquivo:
//
// afterEach(() => jest.clearAllMocks());
//
// it('fetches a joke', async () => {
//   const joke = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };
//
//   jest.spyOn(global, 'fetch');
//   global.fetch.mockResolvedValue({
//     json: jest.fn().mockResolvedValue(joke),
//   });
//
//   render(<App />);
//   const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
//   expect(renderedJoke).toBeInTheDocument();
//   expect(global.fetch).toBeCalledTimes(1);
//   expect(global.fetch).toBeCalledWith(
//     'https://icanhazdadjoke.com/',
//     { headers: { Accept: 'application/json' } },
//   );
// });

///////////////////////////////////////////////////////////////////////

// Parte 1

// Agora, vamos testar nossa aplicação! A primeira coisa que precisamos testar é se uma piada está sendo renderizada na tela logo que a aplicação é iniciada.Essa parte é bastante semelhante com o primeiro teste que já existe no arquivo:

// test('ao renderizar a página, a primeira piada é exibida na tela', async () => {
//   const joke1 = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };

//   jest.spyOn(global, 'fetch');
//   global.fetch.mockResolvedValue({
//     json: jest.fn().mockResolvedValue(joke1),
//   });

//   render(<App />);

//   expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
//   expect(global.fetch).toBeCalledTimes(1);
// });

// Com o teste acima, conseguimos garantir que a primeira piada é exibida na tela quando a aplicação é renderizada e que a função fetch foi chamada apenas uma vez.

///////////////////////////////////////////////////////////////////////

// Parte 2

// O próximo passo é testar se, quando o botão “New joke” for clicado, uma nova piada é renderizada.Vamos dividir essa etapa em partes.Primeiro, vamos pegar o botão para poder usar ele nos testes:

// App.test.js

// it('fetches a new joke when button is clicked', async () => {
//   const joke1 = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };
//
//   jest.spyOn(global, 'fetch');
//   global.fetch.mockResolvedValue({
//     json: jest.fn().mockResolvedValue(joke1),
//   });
//
//   render(<App />);

///////////////////////////////////////////////////////////////////////
//Nessa linha 149 adicionamos essa nova constante usada na linha 53.
// const newJokeButton = screen.getByRole('button', { name: 'New joke' });
///////////////////////////////////////////////////////////////////////

//   expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
//   expect(global.fetch).toBeCalledTimes(1);
//
// });

///////////////////////////////////////////////////////////////////////

// Parte 3

// Antes de clicarmos no botão para fazer uma nova requisição, precisamos preparar nosso mock, para que seja retornada uma piada diferente da que foi recebida na primeira requisição.

// Para isso, vamos precisar alterar o nosso mock existente e criar um novo.Ao invés de usar o mockResolvedValue, vamos usar o mockResolvedValueOnce.Assim, o mock da primeira somente será utilizado uma vez.Dessa forma, podemos controlar qual resposta será dada em cada vez que a requisição for feita.

// App.test.js

// it('fetches a new joke when button is clicked', async () => {
//   const joke1 = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };
//
//   jest.spyOn(global, 'fetch');
///////////////////////////////////////////////////////////////////////
// Modificamos a Linha 178 usada tbm na linha 48
// global.fetch.mockResolvedValueOnce({
///////////////////////////////////////////////////////////////////////
//     json: jest.fn().mockResolvedValue(joke1),
//   });
//
//   render(<App />);
//     const newJokeButton = screen.getByRole('button', { name: 'New joke' });
//
//   expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
//   expect(global.fetch).toBeCalledTimes(1);
//
// });

// Parte 4

// E agora, para criar o segundo mock, precisamos criar também uma segunda variável com outra piada e configurar o mock para retornar essa nova piada:

// App.test.js

// it('fetches a new joke when button is clicked', async () => {
//   const joke1 = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };
///////////////////////////////////////////////////////////////////////
// Segunda Mock usada também a partir da linha  41 até a 45
// const joke2 = {
//   id: 'xXSv492wPmb',
//   joke: 'What is red and smells like blue paint? Red paint!',
//   status: 200,
// };
///////////////////////////////////////////////////////////////////////
//   jest.spyOn(global, 'fetch');
//   global.fetch.mockResolvedValueOnce({
//     json: jest.fn().mockResolvedValue(joke1),
//   });
//
//   render(<App />);
//   const newJokeButton = screen.getByRole('button', { name: 'New joke' });
//
//   expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
//   expect(global.fetch).toBeCalledTimes(1);
///////////////////////////////////////////////////////////////////////
// Criada a segunda variável com outra piada e configurado o mock para retornar essa nova piada: Usadas nas linhas 59,60,61
// global.fetch.mockResolvedValueOnce({
//   json: jest.fn().mockResolvedValue(joke2),
// });
///////////////////////////////////////////////////////////////////////
// });

///////////////////////////////////////////////////////////////////////

// Parte 5

// Agora sim, com o segundo mock configurado, podemos clicar no botão:

// App.test.js

// it('fetches a new joke when button is clicked', async () => {
//   const joke1 = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };
//
//   const joke2 = {
//     id: 'xXSv492wPmb',
//     joke: 'What is red and smells like blue paint? Red paint!',
//     status: 200,
//   };
//
//   jest.spyOn(global, 'fetch');
//   global.fetch.mockResolvedValueOnce({
//     json: jest.fn().mockResolvedValue(joke1),
//   });
//
//   render(<App />);
//   const newJokeButton = screen.getByRole('button', { name: 'New joke' });
//
//   expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
//   expect(global.fetch).toBeCalledTimes(1);
//
//   global.fetch.mockResolvedValueOnce({
//    json: jest.fn().mockResolvedValue(joke2),
//   });
///////////////////////////////////////////////////////////////////////
// Com o segundo mock configurado, podemos clicar no botão, usado na linha 62
// userEvent.click(newJokeButton);
///////////////////////////////////////////////////////////////////////

// });

///////////////////////////////////////////////////////////////////////

// Parte 6 

// Depois de clicar no botão vamos testar o comportamento da aplicação.Precisamos garantir que a primeira piada foi substituída pela segunda piada, ou seja, a segunda piada está sendo exibida e a primeira piada não está sendo exibida:

// App.test.js

// it('fetches a new joke when button is clicked', async () => {
//   const joke1 = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };
//
//   const joke2 = {
//     id: 'xXSv492wPmb',
//     joke: 'What is red and smells like blue paint? Red paint!',
//     status: 200,
//   };
//
//   jest.spyOn(global, 'fetch');
//   global.fetch.mockResolvedValueOnce({
//     json: jest.fn().mockResolvedValue(joke1),
//   });
//
//   render(<App />);
//   const newJokeButton = screen.getByRole('button', { name: 'New joke' });
//
//   expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
//   expect(global.fetch).toBeCalledTimes(1);
//
//   global.fetch.mockResolvedValueOnce({
//    json: jest.fn().mockResolvedValue(joke2),
//   });
//
//   userEvent.click(newJokeButton);
///////////////////////////////////////////////////////////////////////
// Precisamos garantir que a primeira piada foi substituída pela segunda piada, ou seja, a segunda piada está sendo exibida e a primeira piada não está sendo exibida: usada na linha 64,65

// expect(await screen.findByText(joke2.joke)).toBeInTheDocument();
// expect(screen.queryByText(joke1.joke)).not.toBeInTheDocument();
///////////////////////////////////////////////////////////////////////

// });

///////////////////////////////////////////////////////////////////////

// Parte 7

// Também precisamos garantir que a função fetch foi chamada duas vezes:

// App.tst.js

// it('fetches a new joke when button is clicked', async () => {
//   const joke1 = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };
//
//   const joke2 = {
//     id: 'xXSv492wPmb',
//     joke: 'What is red and smells like blue paint? Red paint!',
//     status: 200,
//   };
//
//   jest.spyOn(global, 'fetch');
//   global.fetch.mockResolvedValueOnce({
//     json: jest.fn().mockResolvedValue(joke1),
//   });
//
//   render(<App />);
//   const newJokeButton = screen.getByRole('button', { name: 'New joke' });
//
//   expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
//   expect(global.fetch).toBeCalledTimes(1);
//
//   global.fetch.mockResolvedValueOnce({
//    json: jest.fn().mockResolvedValue(joke2),
//   });
//
//   userEvent.click(newJokeButton);
//
//   expect(await screen.findByText(joke2.joke)).toBeInTheDocument();
//   expect(screen.queryByText(joke1.joke)).not.toBeInTheDocument();

///////////////////////////////////////////////////////////////////////
// Também precisamos garantir que a função fetch foi chamada duas vezes: usada na linha 66
// expect(global.fetch).toBeCalledTimes(2);
///////////////////////////////////////////////////////////////////////
// });

///////////////////////////////////////////////////////////////////////

// Parte 8

// E, por último, podemos deixar nosso teste mais robusto e adicionar mais uma verificação no começo dele.Vamos garantir que a segunda piada não é renderizada na tela antes de o botão ter sido clicado:

// App.test.js

// it('fetches a new joke when button is clicked', async () => {
//   const joke1 = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };
//
//   const joke2 = {
//     id: 'xXSv492wPmb',
//     joke: 'What is red and smells like blue paint? Red paint!',
//     status: 200,
//   };
//
//   jest.spyOn(global, 'fetch');
//   global.fetch.mockResolvedValueOnce({
//     json: jest.fn().mockResolvedValue(joke1),
//   });
//
//   render(<App />);
//   const newJokeButton = screen.getByRole('button', { name: 'New joke' });
//
//   expect(await screen.findByText(joke1.joke)).toBeInTheDocument();

///////////////////////////////////////////////////////////////////////
// Vamos garantir que a segunda piada não é renderizada na tela antes de o botão ter sido clicado: usada na linha 56

// expect(screen.queryByText(joke2.joke)).not.toBeInTheDocument();
///////////////////////////////////////////////////////////////////////
//   expect(global.fetch).toBeCalledTimes(1);
//
//   global.fetch.mockResolvedValueOnce({
//    json: jest.fn().mockResolvedValue(joke2),
//   });
//
//   userEvent.click(newJokeButton);
//
//   expect(await screen.findByText(joke2.joke)).toBeInTheDocument();
//   expect(screen.queryByText(joke1.joke)).not.toBeInTheDocument();
//   expect(global.fetch).toBeCalledTimes(2);
// });