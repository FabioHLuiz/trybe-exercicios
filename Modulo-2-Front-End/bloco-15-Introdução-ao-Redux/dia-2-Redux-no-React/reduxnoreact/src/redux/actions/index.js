//   Action e Action Creator
// A action é um objeto que envia uma ação ao reducer, o qual realizará uma alteração no estado global.Podemos defini - la como abaixo:

//   Além da chave type, que é obrigatória, podemos enviar outros valores ao reducer, como no exemplo abaixo:

// As actions creators são funções que criam e retornam uma action, evitando o trabalho de precisarmos digitar o objeto inteiro toda vez que formos chamar a action.Além disso, é uma boa forma de padronizarmos uma ação, evitando assim possíveis erros caso ela seja utilizada várias vezes.

// Voltando ao contexto do nosso contador:

// Ao clicar no primeiro botão, ele incrementa o contador em 1;
// Ao clicar no segundo botão, ele incrementa o contador em 5.
// Sem a action creator precisaríamos digitar o objeto inteiro da action duas vezes, uma para enviar o valor 1, outra para enviar o valor 5. Consegue perceber como essa maneira não é escalável ?

//   Criando uma action creator, poderíamos apenas enviar por parâmetro o valor que deve ser incrementado, evitando que nossa aplicação possua muito código repetido:

export const actionCreator = (increment = 1) => ({
  type: 'INCREMENT_COUNTER',
  payload: increment, //payload, passa informção da action para o reducer é uma conveção, porém não é obrigatória pode se usar qualquer nome 
});