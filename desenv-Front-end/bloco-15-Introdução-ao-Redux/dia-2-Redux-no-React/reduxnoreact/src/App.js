import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './redux/actions';

class App extends React.Component {
  render() {
    const { dispatch, countState } = this.props;
    return (
      <div>
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button onClick={() => dispatch(actionCreator(1))}>Incrementa 1</button>
        <button onClick={() => dispatch(actionCreator(5))}>Incrementa 5</button>
      </div>
    );
  }
}

// Função mapStateToProps

// Para lermos as informações do estado global com o Redux, precisamos utilizar uma função chamada mapStateToProps.Ela recebe como parâmetro as informações do estado global e retorna os valores que estão armazenados na store.Esses valores poderão ser acessados via props no componente.

const mapStateToProps = (state) => ({
  countState: state.count,
});

// No código acima estamos criando uma prop chamada countState, que recebe o valor da chave count armazenada no estado global.Agora basta buscarmos essa prop e adicioná - la no código:

// Note que a função mapStateToProps está sendo definida fora do escopo da classe do componente.

// Adicionando o código acima você irá perceber que o componente ainda não consegue acessar a prop que definimos como countState.Isso acontece pois ainda precisamos conectar o componente com o nosso Redux.Para fazermos isso podemos utilizar a função connect, disponibilizada pela biblioteca react - redux, que instalamos anteriormente.

export default connect(mapStateToProps)(App);
