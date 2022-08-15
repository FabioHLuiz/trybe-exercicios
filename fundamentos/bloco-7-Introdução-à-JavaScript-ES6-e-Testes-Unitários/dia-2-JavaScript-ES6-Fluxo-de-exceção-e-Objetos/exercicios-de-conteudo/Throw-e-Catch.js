// A função abaixo é bastante simples: recebe dois parâmetros e retorna a soma entre eles. Chame a função com dois parâmetros numéricos (por exemplo, 2 e 3).
const sum = (value1, value2) => value1 + value2;
console.log(sum(2, 3)); //resultado 5


// Tudo funciona perfeitamente quando você tem o controle do código, certo? Mas digamos que você está desenvolvendo uma aplicação onde uma pessoa irá fornecer os valores. Sabemos que pessoas cometem erros e podem, por exemplo, tentar somar o número 2 com a string '3'. O que aconteceria nesse caso?
const sum = (value1, value2) => value1 + value2;
console.log(sum(2, '3')); // resultado 23
// 2 + '3' = 23?? Uma interação bastante inusitada, concorda? O que aconteceu foi que a sua função, ao perceber que estava fazendo uma operação com parâmetros de tipos distintos, tentou adaptá-los para que o código não quebrasse - no caso, o primeiro parâmetro foi convertido para uma string, e a operação realizada foi uma concatenação de strings através do sinal de +.
// Esse comportamento ocorre porque considera-se o JavaScript como uma linguagem dinâmica. Ou seja, quando se declara uma variável, não é necessário atrelar ela a nenhum tipo, o que permite inclusive que ela mude de tipo ao longo da execução do código.

const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    return 'Os valores devem ser numéricos';
  }
  return value1 + value2;
};

// console.log(sum(2, '3')); 
// resultado = Os valores devem ser numéricos

// Pronto, agora o seu código avisa para a pessoa usuária que a função sum só aceita números. Aparentemente está tudo funcionando como deveria, mas essa ainda não é a melhor forma de se tratar um erro em JavaScript. Na prática, a função sum está retornando uma string, e essa não é o objetivo de uma função que soma dois números, certo? Você precisa indicar de alguma forma que ocorreu um erro.

// Para isso existe o fluxo de exceção: quando um erro acontece em Javascript, devemos lançar uma exceção, que vai interromper o funcionamento do código. Essa é a função do throw:
const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};

console.log(sum(2, '3'));
// Percebeu a diferença? Agora a execução da função sum foi interrompida e temos uma mensagem de erro no console, bem como uma indicação da linha onde esse erro ocorre.

// Refatorando a Função

const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
};

const sum = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    return error.message;
  }
};

console.log(sum(2, '3'));
// Agora sim! Você criou um fluxo para quando nosso código é executado com sucesso, representado pelo bloco try, que tenta fazer a soma de dois valores. Esse bloco chama a função recém-criada verifyIsNumber, que verifica se os parâmetros passados são números. Quando se depara com um valor que não é um número, o código lança um erro com o throw, que é capturado pelo catch no fluxo de exceção, através da variável error (aqui podemos usar qualquer nome). Dentro do catch retornamos a chave error.message, uma propriedade do objeto nativo Error que contém a mensagem de erro criada anteriormente.