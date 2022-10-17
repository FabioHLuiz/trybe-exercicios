// App.test.js

// Agora, precisamos testar se esse input está, de fato, aparecendo na tela.Como ele não possui um texto, não podemos usar o getByText, mas podemos usar o getByLabelText, onde ele pegará o input de acordo com o texto da label que está associado a ele.Nesse caso, o input está relacionado com a label Email.


import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

// Como pode ver, mudamos os expects também, verificando se o elemento está na tela e é do tipo correto.

///////////////////////////////////////////////////

// Mas e se um campo não tiver texto nem label ? Podemos usar o getByRole.Ele busca pelo atributo role.No caso de um botão, o role é definido pela propriedade type = "button".O role serve, por exemplo, para buscar por um elemento < button > Enviar < button /> ou < input type = "button" value = "Enviar" />.


test('Verificando se existem dois botões', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});

test('Verificando se existe um botão de enviar', () => {
  render(<App />);
  const btnSend = screen.getByTestId('id-send');
  expect(btnSend).toBeInTheDocument();
  expect(btnSend).toHaveProperty('type', 'button');
  expect(btnSend).toHaveValue('Enviar');
});

// Buscamos o elemento pelo data - testid e verificamos se ele está na tela.Em seguida, verificamos se este elemento é um botão e, com a propriedade toHaveValue, conferimos se possui o texto Enviar.

test('Verificando se o botão e o campo email estão funcionando.', () => {
  render(<App />);

// Passo 1: Renderizamos a aplicação, depois salvamos o email da pessoa usuária em uma variável(o que é uma boa prática).
  const EMAIL_USER = 'email@email.com';

  // Passo 2: Verificamos se a tag < h2 > onde o email aparece na tela está apenas com o texto Valor:,

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  // Passo 3: Procuramos pelo o campo de email e o botão que enviará os dados.
  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');

  // Passo 4: Simulamos a digitação da pessoa usuária no campo de email, com o userEvent.type(inputEmail, EMAIL_USER), passando o campo do input como primeiro parâmetro e o valor esperado como segundo parâmetro('email@email.com').
  userEvent.type(inputEmail, EMAIL_USER);

  // Passo 5: Simulamos um clique no botão com o userEvent.click(btnSend), passando o elemento do botão como parâmetro.
  userEvent.click(btnSend);

  // Passo 6: Verificamos se após o click, o campo de input do email retorna para vazio e se a tag < h2 >, que anteriormente só exibia Valor:, agora recebe o email passado ao input, resultando em Valor: email @email.com.
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});
