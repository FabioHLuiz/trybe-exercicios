// Agora, vamos ver um pouco da prática realizando este exercício de fixação. Copie o código para ser executado na sua máquina:

// pushNumberAsync.js

const pushNumber = (list, number) => list.push(number);

const numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers);

// Saída:
// [ 1, 2, 3 ]
Agora, vamos colocar assincronicidade em nosso código com o setTimeout.
Copiar
// pushNumberAsync.js

const pushNumber = (list, number) => list.push(number);

const numbers = [];

const THREE_SECONDS = 3000;

setTimeout(() => pushNumber(numbers, 1), THREE_SECONDS);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers);

// Saída:

// [2, 3]

// Por que o primeiro código retorna o array [1, 2, 3] enquanto o segundo retorna o array [2, 3]? Isso ocorre por causa da função setTimeout. Ela é uma função assíncrona, que espera alguns milissegundos para executar a função passada a ela como parâmetro. No código acima, ela espera 3000 milissegundos (3 segundos) para executar o pushNumber(numbers, 1). Como o console.log é uma função síncrona, ele é executado antes de o setTimeout terminar.

// Para que o console.log mostre o array correto, é necessário chamá-lo após 3000 milissegundos:

// pushNumberAsync.js

const pushNumber = (list, number) => list.push(number);

const numbers = [];

const THREE_SECONDS = 3000;

setTimeout(() => pushNumber(numbers, 1), THREE_SECONDS);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers), THREE_SECONDS);

// Saída:

// [ 2, 3, 1 ]

// Observe que, além de adicionar o setTimeout, o array [1, 2, 3] foi modificado para [2, 3, 1]. Isso se dá porque, como a função é assíncrona, o código continua rodando, mesmo que ela ainda não tenha terminado de executar. Ou seja, o array recebe primeiro o 2, depois o 3, e após os 3 segundos do setTimeout, ele recebe o 1.