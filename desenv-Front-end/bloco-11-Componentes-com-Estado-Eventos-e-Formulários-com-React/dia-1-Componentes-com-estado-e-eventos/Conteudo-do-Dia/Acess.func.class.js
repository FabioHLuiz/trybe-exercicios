// Acessando uma função nossa dentro da classe

// Para acessar uma função que criamos dentro de uma classe, em um eventListener, precisamos explicitar a origem de nossa função com a sintaxe this.minhaFuncao.

import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick() {
    console.log('Clicou!')
  }

  render() {
    // No React, precisamos dizer explicitamente que queremos uma função da nossa classe
    // através da sintaxe `this.minhaFuncao` para usá-la num evento
    
    return <button type="button" onClick={this.handleClick}>Meu botão</button>;
  }
}

export default App;