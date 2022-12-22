// Inicialmente, vamos criar um componente dentro da pasta src / components chamado DadJoke que vai ser o responsável por realizar a chamada a nossa API e renderizar a nossa piada.

import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    const requestHeaders = { headers: { Accept: 'application/json' } }
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const requestObject = await requestReturn.json();
    this.setState({
      jokeObj: requestObject,
    })
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    // Esse método será responsável por salvar a piada no array de piadas storedJokes!!

  }

  render() {
    const { storedJokes } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

        {
          /*
          Aqui vamos construir nossa lógica com uma renderização condicional
          do nosso componente Joke, a ideia é renderizar um loading enquanto
          esperamos a nossa requisição de piadas finalizar.
  
          <p>RENDERIZAÇÃO CONDICIONAL</p>
          */
        }

      </div>
    );
  }
}

export default DadJoke;