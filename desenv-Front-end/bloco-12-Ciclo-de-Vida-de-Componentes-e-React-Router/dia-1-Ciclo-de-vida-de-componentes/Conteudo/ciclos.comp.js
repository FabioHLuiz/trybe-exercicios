// Ciclos dos componentes

// O Ciclo de Vida de um componente React

// Para auxiliar na lógica de sua aplicação e evitar o mal uso dos recursos disponíveis, cada componente React possui seu próprio ciclo de vida.

// Os componentes React, assim como os seres vivos, possuem um ciclo de vida.O ciclo do React é dividido em 3 etapas.São elas:

// Montagem: quando o componente é inicializado e inserido no DOM;

// Atualização: quando as props ou estados do componente são alterados;

// Desmontagem: quando o componente morre 🧟‍♂️, sumindo do DOM

// O ciclo de vida é acessível por meio de métodos nativos dos class components. Como exemplo, pense no render, que é um método de renderização dos class components e que é chamado toda vez que uma atualização acontece.Ele possui características intrínsecas que permitem adicionar o componente no DOM.Assim como o render, outros métodos possuem suas próprias características e objetivos.

// O ciclo de vida e os principais métodos funcionam da seguinte maneira:

// Montagem:
// constructor - recebe as props e define o estado;

// render - renderiza o componente, inserindo - o no DOM;

// componentDidMount - dispara uma ou mais ações após o componente ser inserido no DOM(ideal para requisições);

// Atualização:

// shouldComponentUpdate - possibilita autorizar ou não o componente a atualizar;

// componentDidUpdate - dispara uma ou mais ações após o componente ser atualizado;

// Desmontagem:

// componentWillUnmount - dispara uma ou mais ações antes de o componente ser desmontado.

// Entendendo quando cada método é chamado

// Vamos agora fazer uma simulação, para ver na prática quando cada método chamado:

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("construtor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

// Ao executar o código acima, sem o clique no botão Soma, aparecerão as seguintes mensagens no console do seu browser:

// As mensagens ‘constructor’, ‘render’ e ‘componentDidMount’ são exibidas no console do navegador

// Atente - se para a ordem de chamada dos métodos.As mensagens refletem a ordem de execução dos métodos de ciclo de vida do componente.

// Os métodos shouldComponentUpdate e componentDidUpdate não apareceram no console, pois não houve atualização.Caso o botão Soma seja clicado, teremos mais mensagens no console:

// As mensagens ‘constructor’, ‘render’, ‘componentDidMount’, ‘shouldComponentUpdate’, ‘render’ e ‘componentDidUpdate’ são exibidas no console do navegador

// Note que, durante o processo de atualização, o método render é chamado novamente.Isso acontece porque, quando se atualiza uma props ou estado, o React “pede” que o componente seja renderizado no DOM.Como apresentamos acima, caso seja válido, podemos impedir essa renderização retornando false com o método shouldComponentUpdate.

// Podemos também, nos métodos shouldComponentUpdate e componentDidUpdate, acessar os estados ou props próximos e anteriores.Para isso, devemos utilizar os parâmetros nextProps e nextState no shouldComponentUpdate e prevProps e prevState no componentDidUpdate.Veja um exemplo:

// Antes, vamos alterar os console.log() dos métodos citados acima:

shouldComponentUpdate(nextProps, nextState) {
  console.log("shouldComponentUpdate", this.state, nextState);
  return true;
}

componentDidUpdate(prevProps, prevState) {
  console.log("componentDidUpdate", this.state, prevState);
}

// Clicando uma vez no botão Somar, temos:

// Imagem que mostra as mensagens ‘constructor’, ‘render’, ‘componentDidMount’, ‘shouldComponentUpdate’, ‘componentDidUpdate’ e os estados no console

// Perceba que o estado só é de fato atualizado quando chega no método componentDidUpdate.Por isso, caso seja necessário impedir uma renderização, você deve utilizar o método shouldComponentUpdate, que permite comparar os atuais e próximos estados ou props e adicionar a lógica.
