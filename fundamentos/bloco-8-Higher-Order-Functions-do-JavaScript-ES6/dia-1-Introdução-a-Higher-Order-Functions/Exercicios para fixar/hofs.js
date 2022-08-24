const sum = (num1, num2) => num1 + num2;

// const sub = (num1, num2) => num1 - num2;

// const multi = (num1, num2) => num1 * num2;

// const div = (num1, num2) => num1 / num2;

const calculator = (func) => func(10, 5);

console.log(calculator(sum));
// console.log(calculator(sub));
// console.log(calculator(multi));
// console.log(calculator(div));

// Discriminando: calculator => primeira função
//                func       => segunda função dentro da primeira
//                              que recebe os parametros 10 e 5.

// Ao chamar no console.log você invoca a primeira função com os parametros dados nas let ou const e assim trará o resultado esperado.

// E desse jeito usamos as: Higher Order Functions - (HOFs)

// Vamos praticar com os seguintes exercícios:

// 1 - Crie uma função que retorne a string 'Acordando!!';

// 2 - Crie outra função que retorne a string 'Bora tomar café!!';

// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

const morning = () => 'Acordando !!';
const primRef = () => 'Bora tomar café !!';
const cama = () => 'Partiu dormir';

const doingThings = (callBack) => callBack();

console.log(doingThings(morning)); //resultado = Acordando !!
console.log(doingThings(primRef)); //resultado = Bora tomar café !!
console.log(doingThings(cama));    //resultado = Partiu dormir
