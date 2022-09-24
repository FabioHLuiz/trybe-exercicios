// Constructor

// Toda classe em JavaScript tem acesso a um método chamado constructor(), e, com as classes de React, definidas com class MinhaClasse extends React.Component, não é diferente! Quando um componente React é criado, ou seja, quando é colocado na tela do navegador, a primeira coisa que é executada é a função constructor().Toda a lógica interna que o React adiciona aos seus componentes começa a ser incluída neles nesse momento.

// No JavaScript, o super() refere - se ao construtor da classe pai. (No nosso caso, refere - se à implementação de React.Component.) É importante lembrar que você não pode usar o this em um construtor até que você tenha chamado o construtor da classe pai, pois o JavaScript não vai te deixar fazer isso.Então, por ora, apenas se lembre de que, para usar o this dentro do constructor(), é preciso chamar o super() antes.Ter isso em mente vai ser muito importante ao lidar com estados nas classes!

// A grande questão, no entanto, é que é possível adicionar aos construtores das classes React comportamentos e lógica extras! Fazemos assim:

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super()

    // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
  }

  render() {
    return <span>Meu componente!</span>
  }
}

export default App;

// Conhecer o construtor é uma peça fundamental para usarmos Eventos e Estados nos componentes do React com classes!