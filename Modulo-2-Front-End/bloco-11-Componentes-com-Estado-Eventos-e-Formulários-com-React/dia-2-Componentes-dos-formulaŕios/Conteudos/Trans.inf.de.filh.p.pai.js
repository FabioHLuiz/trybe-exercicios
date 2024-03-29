// A transmissão de informações de um componente filho para um componente pai é um dos conceitos primordiais de React.Ele se baseia nos seguintes pilares:

// O componente pai detém o Estado e controla completamente como ele será atualizado.Isso significa que as funções que manipularão o estado devem ser declaradas sempre nele mesmo.

// Quando algum componente filho deve passar alguma informação ao componente pai, ele deve receber como props a função que atualiza o estado do pai e dar a ela, como parâmetro, a informação pedida.

// A informação transmitida dessa forma será inserida no estado do componente pai.

// No código abaixo vemos um exemplo disso acontecendo numa aplicação diferente do formulário que estamos vendo: o contador de cliques do qual falamos no primeiro dia da seção.

import React from 'react';

class Button extends React.Component {
  render() {
    //A função que altera o estado do componente pai chega
    //    ao componente filho via `props`!
    const { handleClick } = this.props;

    return (<button type="button" onClick={handleClick} >Contar clique!</button>);
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    // O componente pai é o dono do estado!
    this.state = {
      numeroDeCliques: 0,
    };
  }

  //A função de alterar o estado é definida no componente pai
  handleClick() {
    this.setState((estadoAnterior) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  }

  //O componente filho recebe a função de alterar estado do pai via `props`,
  //    na forma de uma callback
  render() {
    return (
      <div>
        <h1>{`${this.state.numeroDeCliques} cliques!`}</h1>
        <Button handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App