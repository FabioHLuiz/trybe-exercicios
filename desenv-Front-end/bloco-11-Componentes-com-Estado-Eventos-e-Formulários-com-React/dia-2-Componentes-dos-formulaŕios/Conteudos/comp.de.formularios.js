// Pois então! Se você reparar com um inspect, vai ver que os dados dos campos preenchidos sempre aparecem no próprio DOM quando inseridos.Você acredita que é aí que esses dados são salvos ? Sim! No próprio DOM.Meio estranho, não acha ? Pensando numa aplicação React, onde nós salvaríamos os dados do nosso formulário ? Pensando no formulário, lógico, como um componente.

// … No Estado, correto ?

//   Pois é! Como todos os dados que concernem os componentes do React, os dados de um formulário também devem ser salvos no Estado! E eis o pulo do gato: a partir do momento que a informação do forms não é mais salva no próprio elemento, no DOM, mas no Estado do componente que o contém, passamos a dizer que esse elemento é um Componente Controlado!

import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
    };
  }


  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
            <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>
          <input
            type="number"
            name="idade"
          />
          <input
            type="checkbox"
            name="vaiComparecer"
          />
        </form>
      </div>
    );
  }
}

export default Form;

// 💡 Atenção! A nomenclatura “componente controlado”, oficial do React, é confusa.Estamos dizendo aqui que o elemento do formulário é um componente controlado.Não estamos falando dos componentes React, mas sim dos elementos que compõem o formulário! Cuidado para não confundir.

