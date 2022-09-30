// Depois de transformar o componente App.js em um componente de classe, já podemos definir nosso estado inicial local, para que possamos armazenar nele os dados que a API retornará.Em seguida, também podemos fazer a requisição e colocar um título para ser exibido na página. 

// Note que a chave results é a que contém as informações que queremos, por isso é ela que estamos setando no nosso estado.Verificar se você está inserindo a chave certa é essencial e por isso você não deve deixar de ler a documentação da API que irá consumir para ver como os seus dados são retornados!


// App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({ characters: data.results })
      })
  }
    
    // Depois disso, com nosso estado já recebendo o resultado da API, poderíamos fazer uma desestruturação no estado e fazer apenas um.map para iterar o array e renderizá - lo na tela.Outro detalhe importante aqui é o uso da key, que deve ser um identificador único, como se fosse um ID para cada item da lista iterada.Lembre - se: a função das keys é ajudar o React a identificar quais itens sofreram alterações para que o React não precise renderizar novamente toda a lista novamente e sim apenas se preocupar com a parte modificada.
    
    //   Agora, é só criar tags para encapsular as informações que queremos, ou seja, o nome e a imagem dos personagens.Ou será que há mais o que fazer ? !

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name} />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;