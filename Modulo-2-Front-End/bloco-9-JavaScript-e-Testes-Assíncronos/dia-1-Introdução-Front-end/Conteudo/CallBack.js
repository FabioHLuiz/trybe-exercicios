// Callbacks

// Agora que o conceito de assincronicidade está mais nítido, é hora de dar luz às callbacks!

// De forma resumida, callback é uma função passada como parâmetro para outra função. Um exemplo de função callback é quando chamamos a função setTimeout, essa função recebe dois parâmetros: o primeiro é a função callback, que passamos por meio de uma arrow function; e o segundo é o tempo (em milissegundos) que o interpretador irá esperar para executar a função. Observe a estrutura dela: setTimeout(1parametro, 2parametro);

// O primeiro parâmetro é uma callback sem nome: () => {}.

// O segundo parâmetro será o tempo de espera: 2000 (2000 milissegundos ou 2 segundos, por exemplo).

// setTimeout(() => {}, 2000);

// Agora, veremos um exemplo prático de como podemos utilizar funções callback. Copie e analise com calma cada trecho da implementação do código, se necessário, volte na explicação para que a implementação seja bem compreendida!

// Este exemplo está em português para facilitar a compreensão, os próximos estarão em inglês, ok?

// despesas.js

const minhasDespesas = [
  {
    academia: 99,
  },
  {
    ifood: 200,
  },
  {
    celular: 60,
  },
  {
    internet: 100,
  },
];

const minhaRenda = 1000;

// Neste primeiro trecho de código, temos duas declarações de variáveis. A primeira delas, minhasDespesas, é um array de objetos que representa os gastos de uma pessoa no mês. A segunda, minhaRenda, representa o quanto essa pessoa recebeu nesse mesmo mês.

// Nosso próximo passo será implementar uma função que trate essas informações para que tenhamos como resultado um balanço de entradas e saídas do mês.

// despesas.js

// const minhasDespesas = [
//    ...
// ];

// const minhaRenda = 1000;

const despesaMensal = (renda, despesas, callback) => {
  const despesaTotal = callback(despesas);
  const saldoFinal = renda - despesaTotal;

  console.log(`Balanço do mês:
    Recebido: R$${renda},00
    Gasto: R$${despesaTotal},00
    Saldo: R$${saldoFinal},00 `);
};

// Neste trecho da implementação, podemos notar que foi adicionada a função despesaMensal que recebe três parâmetros: renda, despesas, e callback. Acredito que você deva estar pensando: "O que este parâmetro callback está fazendo nesta função?".

// Como vimos anteriormente, callback é, basicamente, uma função passada por parâmetro para outra função. Neste exemplo, o parâmetro callback receberá uma função que retornará o quanto gastamos no mês, ou seja, nossa função callback irá realizar a lógica necessária para somar todos os gastos contidos no array de objetos minhasDespesas e retornará esse valor para a constante despesaTotal.

// despesas.js

// const minhasDespesas = [
//    ...
// ];

// const minhaRenda = 1000;

// const despesaMensal = (renda, despesas, callback) => {
//    ...
// };

const somaDespesas = (despesas) => {
  const custoItem = despesas.map((item) => Object.values(item));
  const despesaTotal = custoItem.reduce((acc, curr) => {
    const soma = acc + curr[0];
    // acc é a sigla para accumulator (acumulador)
    // curr é a sigla para current_value (valor atual)
    return soma;
  }, 0);
  return despesaTotal;
};

// Por fim, podemos observar a implementação da função callback, representada pela função somaDespesas. Essa função está tratando as informações contidas no array de objetos minhasDespesas e retornando o valor total de gastos.

// Em síntese, o que fizemos foi:

// 1 - Criamos variáveis que representam o quanto recebemos no mês e o quanto gastamos no mês.

// 2 - Implementamos a função despesaMensal que recebe três parâmetros: nossas despesas, nossa renda e a função callback.

// 3 - Realizamos a implementação da função callback representada por somaDespesas que recebe nossos gastos mensais e retorna um valor de gastos total.

// 4 - Adicionamos somaDespesas na chamada da função despesaMensal e como resultado temos o balanço mensal.

// O arquivo completo ficará assim:

// despesas.js

// Declaramos nossa variável de despesas
const minhasDespesas = [
  {
    academia: 99,
  },
  {
    ifood: 200,
  },
  {
    celular: 60,
  },
  {
    internet: 100,
  },
];

// Declaramos nossa renda
const minhaRenda = 1000;

const despesaMensal = (renda, despesas, callback) => {
  // Definimos que a despesa total é igual ao valor retornado pela função callback (que é o parâmetro da nossa função)
  // que vai receber nosso parâmetro/variável "despesas"
  const despesaTotal = callback(despesas);

  // Definimos nosso saldo final, que é nossa renda - nossa despesa total
  const saldoFinal = renda - despesaTotal;

  console.log(`Balanço do mês:
    Recebido: R$${renda},00
    Gasto: R$${despesaTotal},00
    Saldo: R$${saldoFinal},00 `);
};

// Definimos nossa função que será passada como parâmetro
// essa função recebe o parâmetro despesas a partir da função principal despesaMensal
const somaDespesas = (despesas) => {
  // Separamos cada item do nosso array de despesas
  // e fazemos um reduce para somar os valores
  const custoItem = despesas.map((item) => Object.values(item));
  const despesaTotal = custoItem.reduce((acc, curr) => {
    const soma = acc + curr[0];
    // acc é a sigla para accumulator (acumulador)
    // curr é a sigla para current_value (valor atual)
    return soma;
  }, 0);
  return despesaTotal;
};

// Executamos a função principal com as variáveis renda, despesas
// e a nossa função somaDespesas
// callback = somaDespesas
despesaMensal(minhaRenda, minhasDespesas, somaDespesas);

// Saída:
//  Balanço do mês:
//  Recebido: R$1000,00
//  Gasto:    R$459,00
//  Saldo:    R$541,00

// Reparou que você já estava usando callbacks desde a semana de JavaScript com eventListeners? E até a semana passada com filter, map e reduce? A função que você passa como parâmetro para cada uma delas é exemplo de função callback. 😉

// Além disso, lembre-se do exemplo da comida mencionado no Por que isso é importante? O que você faz quando o pedido da comida chega, que nesse caso é jantar, corresponde a uma callback.

// Lembre-se: quando definimos uma função, o parâmetro pode ter qualquer nome, porém, ao fazer a execução/chamada dessa função, o parâmetro deve ser um valor definido. No nosso caso, vamos utilizar uma função como parâmetro (callback).

// Vamos ver um exemplo de como esse processo acontece:

// callback.js

// Definição da função userFullName
const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;

// Definição da função getUser
const getUser = (callback) => {
  const user = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russo',
  };
  // Retornamos nosso parâmetro, que será uma função (callback)
  return callback(user);
};

// Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
console.log(getUser(userFullName));

// Saída:
// Olá! Meu nome é Ivan Ivanovich

// Vamos ao passo a passo:

// Definimos a função userFullName;

// Definimos a função getUser

// Definimos que o parâmetro que a nossa getUser vai receber se chama "callback".

// Ao executar a função getUser, passamos a função userFullName como parâmetro.

// Ou seja, o parâmetro "callback" de dentro da nossa getUser é igual à função userFullName. Isso significa que, ao definirmos nossa função, o parâmetro é dinâmico, ele vai assumir o valor que passarmos no momento em que executarmos a nossa função.

// Tenha tranquilidade e lembre-se sempre: Nada melhor do que a prática. E falando nisso... vamos praticar? ;)