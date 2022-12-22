// this

// O this acessa, nos componentes React, um objeto que guarda tudo que importa àquele componente.Um código de Hello, World! em React, ilustrado abaixo, gera a impressão no console a seguir:

import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    console.log(this)
    return <span>Hello, world!</span>
  }
}

export default App;

App {
  context: { }
  props: { }
  refs: { }
  state: null
  updater: { isMounted: ƒ, enqueueSetState: ƒ, enqueueReplaceState: ƒ, enqueueForceUpdate: ƒ }
  _reactInternalFiber: FiberNode { tag: 1, key: null, stateNode: App, elementType: ƒ, type: ƒ, … }
  _reactInternalInstance: { _processChildContext: ƒ }
  isMounted: (...)
  replaceState: (...)
  __proto__: Component
  constructor: class App
    isMounted: (...)
    render: ƒ render()
  replaceState: (...)
    __proto__: {... }
  // ... Continua
}
// Como se pode ver, o this, dentro das classes de componentes React, é um objeto enorme que contém, basicamente, tudo o que concerne àquele componente dentro da aplicação.Quando fazemos this.props, estamos acessando a chave props dentro do objeto this, que irá conter as propriedades (props vem de propriedades!) passadas àquele componente.Com ele, por exemplo, conseguimos acessar as props e outras coisas, como o estado do componente, dentro das funções render e constructor, para dar dois exemplos.

// Mas qual é, então, o grande problema do this ? Quando definimos funções nossas em uma classe de componente React, ele não funciona tão bem! Veja só:

import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick() {
    // Essa chamada ao `this` retorna `undefined`? !
    console.log(this)
    console.log('Clicou')
  }

  render() {
    // Já essa chamada ao `this`, feita de dentro da função `render`, retorna o objeto que esperamos
    console.log(this)
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;

// 💡 Execute os exemplos localmente para ver com seus próprios olhos e digitar com seus próprios dedos as particularidades de React!

// Esse comportamento acontece, em resumo, em função de dificuldades que o JavaScript tem com a implementação de uma lógica de classes, lógica para qual a linguagem não foi feita!.A solução é, no constructor, fazermos, para cada uma de nossas funções, um vínculo “manual” da nossa função com o this.

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // Agora esse log retorna o objeto `this`, já acessível para nossa função!
    // Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    // e tudo o mais daqui de dentro
    console.log(this)
    console.log('Clicou!')
  }

  render() {
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;

// 💡 Ao definir uma função da classe com uma arrow function, com a sintaxe minhaFuncao = () => {... }, você não precisará fazer o bind.Então não precisaremos do construtor nesse caso.Veja como o exemplo acima seria feito com arrow function:

import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick = () => {
    console.log('Clicou!')
  }

  render() {
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;