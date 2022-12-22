const INITIAL_STATE = {
  count: 0,
};

function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return { count: state.count + action.payload }; //Agora que temos nossa action criada, vamos ajustar a função reducer para incrementar de acordo com o valor recebido pela chave payload

    default:
      return state;
  }
}

// A função reducer criada acima recebe como parâmetro o estado inicial e uma action.Por padrão, a action sempre retornará um objeto com a chave type, que informa qual ação deve ser feita no estado.Verificamos se a ação é INCREMENT_COUNTER.Em caso positivo, ele irá incrementar o valor da chave count, que está no estado global, em 1.

export default counterReducer;