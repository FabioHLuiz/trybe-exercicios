import React, { useState } from 'react';

function FormFunction() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState(''); // Para armazenarmos a informação, vamos criar um estado module e a função setModule com o auxílio do useState().
  
  return (
    // Criamos o input que será responsável por capturar o nome da pessoa estudante, onde o value será o estado name e a função onChange será o setName. Dessa forma, tudo que for digitado no input será armazenado no estado name 
      <form>
          <h2>Dados Pessoais</h2>
        <label htmlFor="name">
          Nome Completo
          <input 
          id="name" 
          value="{name}" // value será o estado name
          type="text" 
          onChange={({ target}) => setName(target.value)}
          />
          {/* Função onChange será o setName */}
        </label>

        <label htmlFor="age">
          Idade
          <input 
          id="age"
          type="number"
          value={age}
           onChange={({ target}) => setAge(target.value)} 
           />
        </label>

        <label htmlFor="city">
          Cidade/UF
          <input 
          id="city"
          type="text"
          value={city}
           onChange={({ target}) => setCity(target.value)} 
           />

        </label>

        {/* Para indicar o módulo da pessoa estudante, utilizaremos o input do tipo radio */}
          {/* O processo aqui é semelhante aos anteriores. Repare que nos inputs do tipo radio, além de value também precisamos adicionar o atributo checked, de modo a garantir que cada input só esteja selecionado se o valor do estado module for correspondente com o seu valor. */}
<h2>Módulo</h2>
        <label htmlFor="fundamentos">
          Fundamentos
          <input
            type="radio"
            id="fundamentos"
            name="module"
            value="Fundamentos"
            checked={module === 'Fundamentos'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
         <label htmlFor="frontend">
          Front-end
          <input
            type="radio"
            id="frontend"
            name="module"
            value="Front-end"
            checked={module === 'Front-end'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>

         <label htmlFor="backend">
          Back-end
          <input
            type="radio"
            id="backend"
            name="module"
            value="Back-end"
            checked={module === 'Back-end'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>

         <label htmlFor="backend">
          Back-end
          <input
            type="radio"
            id="backend"
            name="module"
            value="Back-end"
            checked={module === 'Back-end'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>

        {/* Para finalizar, crie um botão sem nenhuma função específica. */}
        <button
        type='submit'
        onClick={(event) => {
          event.preventDefault();
          console.log('Click!');
        }}
      >
        Enviar</button>
      </form>
    );;
  
}
export default FormFunction;