// Vamos acessar o estado de um componente React! Veja o exemplo abaixo para conhecer a sintaxe:

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    // Para definir um estado inicial ao componente, a ser definido

    // no momento em que o componente for colocado na tela, faça uma atribuição

    // de um objeto à chave `state` do `this`, ou seja, ao `this.state`
    this.state = {
      numeroDeCliques: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {

    // Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,

    // ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do

    // React

    this.setState({
      numeroDeCliques: 1,
    });
  }
  render() {
    // Para LER o estado, você pode usar `this.state.chaveDoMeuEstado`
    const { numeroDeCliques } = this.state;
    return (
      <button
        type="button"
        onClick={this.handleClick}
      >
        {numeroDeCliques}
      </button>
    );
  }
}
export default App;

// E muita atenção ao que foi dito acima! Você NUNCA deve atribuir valores ao estado diretamente com this.state.O estado é atualizado de forma assíncrona pelo React, para garantir performance, e o React não garante a ordem em que as atualizações ocorrerão.Se você fizer uma atribuição direta, terá problemas! Faça - o sempre através da função this.setState(meuNovoObjetoQueRepresentaOEstado).NÃO se esqueça disso! 😃

// Mas se a a atualização do estado não ocorre em ordem, vocês perguntam, “como eu atualizo meu estado com base no estado anterior ? Se tudo ocorre fora de ordem, como eu sei que uma conta de novoEstado = estadoAtual + 1 não dará problemas ?”

// Pois bem! Lembre - se de que, com Promises, para garantir que algum código executasse somente após o retorno da Promise, que é assíncrona, você tinha que colocá - lo dentro da função.then.Aqui a lógica é da mesma natureza:

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //Passando uma callback à função setState, que recebe de parâmetros
    // o estado anterior e as props do componente, você garante que as atualizações
    // do estado acontecerão uma depois da outra!
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  }

  render() {
    const { numeroDeCliques } = this.state;
    return (
      <button
        type="button"
        onClick={this.handleClick}
      >
        {numeroDeCliques}
      </button>
    );
  }
}

export default App;

// Definindo o estado inicial através de Public Class Fields
// Até agora vimos que podemos definir o estado inicial através do constructor.Uma outra maneira de definir o estado inicial de seus componentes é utilizando a sintaxe Public Class Fields.É uma forma mais simples e menos verbosa de definirmos nosso estado.Utilizando essa sintaxe, podemos fazer esta declaração fora de nosso constructor.Vamos ver nosso exemplo acima com essa sintaxe:

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    // Removemos a declaração do estado de dentro do construtor
    // this.state = {
    //   numeroDeCliques: 0,
    // };

    this.handleClick = this.handleClick.bind(this);
  }

  // Fazemos a definição do estado utilizando a sintaxe Public Class Field
  state = {
    numeroDeCliques: 0,
  };

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  }

  render() {
    const { numeroDeCliques } = this.state;
    return (
      <button type="button" onClick={this.handleClick}>
        {numeroDeCliques}
      </button>
    );
  }
}

export default App;

// Sinta - se livre para escolher qualquer uma dessas formas para definir seu estado! O importante é que você entenda seu funcionamento e sua utilização.

// 💡 Se você quisesse chamar, no elemento, um evento passando um parâmetro, você deveria trocar a sintaxe < button onClick{ this.minhaFuncao } ...> por < button onClick = {() => this.minhaFuncao('meu parametro')}.Basicamente, substitua a função do evento por uma chamada à mesma feita via callback! Experimente!