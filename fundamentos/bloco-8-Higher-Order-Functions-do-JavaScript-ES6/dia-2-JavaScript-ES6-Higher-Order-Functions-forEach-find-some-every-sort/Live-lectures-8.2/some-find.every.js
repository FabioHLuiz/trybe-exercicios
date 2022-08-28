const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: true },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: true },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: true }
];

// FUNÇÃO some: verifica cada elemento do array e retorna true ou false, se PELO MENOS um dos elementos atende a condição testada.

// Pelo menos uma das pessoas dirige?

const isDriver = users.some((element) => element.isDriver === true);

console.log(isDriver);

// FUNÇÃO find: verifica cada elemento do array e retorna o primeiro que passa no critério.

const quemDirige = users.find((element) => element.isDriver === true);

console.log(quemDirige);
console.log(`A primeira pessoa que dirige da família Simpson é ${quemDirige.firstName}`);


// FUNÇÃO every: verifica cada elemento do array e retorna um true ou false, caso todos os elementos passem na condição.

const todoMundoDirige = users.every((element) => element.isDriver === true);

console.log(todoMundoDirige);

// operador ternário
// condição true ou false
const resposta = todoMundoDirige ? 'Sim!' : 'Não!';

console.log(`Todo mundo dirige? ${resposta}`);