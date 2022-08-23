let num1 = 10;
let num2 = 10;

// Soma
let soma = num1 + num2;
let compara = num1 > num2;

// console.log(soma);
// console.log(compara);

// Estrutura condicional 1 (decisão)
// if (num1 > num2) {
//   console.log('num1 é maior');
// } else {
//   console.log('num2 é maior');
// }

// Estrutura condicional 2 (decisão)
// if (soma == 15) {
//   console.log('Eba! É igual a 15');
// } else {
//   console.log('Que pena. Não é igual a 15');
// }

// if (soma == '15') {
//   console.log('Eba! É igual a 15');
// } else {
//   console.log('Que pena. Não é igual a 15');
// }

// if (soma === '15') {
//   console.log('Eba! É igual a 15');
// } else {
//   console.log('Que pena. Não é igual a 15');
// }

// = é uma atribuição
// == é uma comparação (compara apenas valor)
// === é uma comparação estrita (comapara valor E tipo de dado)

// let divisao = num1 / num2;

// Estrutura condicional 3 (decisão)
// if (soma % 2 === 0 ) {
//   console.log('Resultado é par');
// } else {
//   console.log('O resultado é ímpar');
// }

// Estrutura condicional 4 (decisão)
// if (compara) {
//   console.log('num1 é maior');
// } else {
//   console.log('num1 é menor');
// }

// Estrutura condicional 5 (decisão)
if (num1 > num2) {
  console.log('num1 é maior');
} else if (num1 < num2) {
  console.log('num1 é menor');
} else {
  console.log('num1 e num2 são iguais');
}