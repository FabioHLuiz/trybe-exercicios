// Para fixar
// Faça dois de seus campos serem componentes filhos do seu componente de formulário.Garanta que seu estado ainda pertence ao componente pai.

// Faça duas validações em um desses componentes filhos e uma em um outro.

//   Crie, no estado do componente pai, um campo formularioComErros que deve ser true caso algum desses componentes tenha erros e false caso contrário.

// 🦜 Dica: Se algum dos componentes transmitir true para a função que fará o handle dos erros, qual valor deve ser armazenado no Estado ?

import React, { Component } from 'react';
import DataFieldset from './DataFieldset';
import PersonalFieldset from './PersonalFieldset';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: '',
      anecdote: '',
      terms: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, email, age, anecdote, terms } = this.state;

    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <PersonalFieldset
            nameValue={name}
            emailValue={email}
            ageValue={age}
            handleChange={this.handleChange}
          />

          <DataFieldset anecdoteValue={anecdote} handleChange={this.handleChange} />

          <label htmlFor="terms">
            <input
              id="terms"
              type="checkbox"
              name="terms"
              onChange={this.handleChange}
              value={terms}
            />
            Concordo com termos e acordos
          </label>
        </form>
      </div>
    );
  }
}

export default Form;

// PersonalFieldset.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PersonalFieldset extends Component {
  render() {
    const { nameValue, emailValue, ageValue, handleChange } = this.props;

    return (
      <fieldset>
        <legend>Informações pessoais</legend>

        <label htmlFor="name">
          Nome:
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={nameValue}
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={emailValue}
          />
        </label>

        <label htmlFor="age">
          Idade:
          <select
            id="age"
            name="age"
            onChange={handleChange}
            value={ageValue}
          >
            <option value="">Selecione</option>
            <option value="adult">Maior que 18</option>
            <option value="underage">Menor que 18</option>
          </select>
        </label>
      </fieldset>
    );
  }
}

PersonalFieldset.propTypes = {
  handleChange: PropTypes.func.isRequired,
  nameValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  ageValue: PropTypes.string.isRequired,
};

export default PersonalFieldset;

// DataFieldset.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DataFieldset extends Component {
  render() {
    const { anecdoteValue, handleChange } = this.props;

    return (
      <fieldset>
        <legend>Texto e arquivos</legend>
        <label htmlFor="anecdote">
          Anedota:
          <textarea
            id="anecdote"
            name="anecdote"
            onChange={handleChange}
            value={anecdoteValue}
          />
        </label>

        <input type="file" />
      </fieldset>
    );
  }
}

DataFieldset.propTypes = {
  handleChange: PropTypes.func.isRequired,
  anecdoteValue: PropTypes.string.isRequired,
};

export default DataFieldset;

// Faça duas validações em um desses componentes filhos e uma em um outro.
//   PersonalFieldset.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PersonalFieldset extends Component {
  render() {
    const { nameValue, emailValue, ageValue, handleChange } = this.props;

    return (
      <fieldset>
        <legend>Informações pessoais</legend>

        <label htmlFor="name">
          Nome:
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={nameValue}
          />
          {!nameValue.length ? ' -nome inválido- ' : ' -ok- '}
        </label>

        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={emailValue}
          />
          {!emailValue.match(/^\S+@\S+$/i)
            ? ' -email inválido- ' : ' -ok- '}
        </label>

        <label htmlFor="age">
          Idade:
          <select
            id="age"
            name="age"
            onChange={handleChange}
            value={ageValue}
          >
            <option value="">Selecione</option>
            <option value="adult">Maior que 18</option>
            <option value="underage">Menor que 18</option>
          </select>
          {!ageValue.length ? ' -idade inválida- ' : ' -ok- '}
        </label>

      </fieldset>
    );
  }
}

PersonalFieldset.propTypes = {
  handleChange: PropTypes.func.isRequired,
  nameValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  ageValue: PropTypes.string.isRequired,
};

export default PersonalFieldset;

// DataFieldset.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DataFieldset extends Component {
  render() {
    const { anecdoteValue, handleChange } = this.props;

    return (
      <fieldset>
        <legend>Texto e arquivos</legend>
        <label htmlFor="anecdote">
          Anedota:
          <textarea
            id="anecdote"
            name="anecdote"
            onChange={handleChange}
            value={anecdoteValue}
          />
          {!anecdoteValue.length ? ' -campo vazio- ' : ' -ok- '}
        </label>
        <input type="file" />
      </fieldset>
    );
  }
}

DataFieldset.propTypes = {
  handleChange: PropTypes.func.isRequired,
  anecdoteValue: PropTypes.string.isRequired,
};

export default DataFieldset;

// Crie, no estado do componente pai, um campo formularioComErros que deve ser true, caso algum desses componentes tenha erros, e false, caso contrário.
// 🦜 Dica: Se algum dos componentes transmitir true para a função que fará o handle dos erros, qual valor deve ser armazenado no Estado ?

//   Form.js

import React, { Component } from 'react';
import DataFieldset from './DataFieldset';
import PersonalFieldset from './PersonalFieldset';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: '',
      anecdote: '',
      terms: false,
      formularioComErros: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleError() {
    const { name, email, age, anecdote, terms } = this.state;

    const errorCases = [
      !name.length,
      !email.match(/^\S+@\S+$/i),
      !age.length,
      !anecdote.length,
      !terms,
    ];

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => { this.handleError(); });
  }

  render() {
    const { name, email, age, anecdote, terms, formularioComErros } = this.state;

    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <PersonalFieldset
            nameValue={name}
            emailValue={email}
            ageValue={age}
            handleChange={this.handleChange}
          />

          <DataFieldset anecdoteValue={anecdote} handleChange={this.handleChange} />

          <label htmlFor="terms">
            <input
              id="terms"
              type="checkbox"
              name="terms"
              onChange={this.handleChange}
              value={terms}
            />
            Concordo com termos e acordos
          </label>
        </form>
        {formularioComErros
          ? <span style={{ color: 'red' }}>Preencha todos os campos</span>
          : <span style={{ color: 'green' }}>Todos campos foram preenchidos</span>}
      </div>
    );
  }
}

export default Form;

