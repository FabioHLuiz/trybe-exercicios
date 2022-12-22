const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: true },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: true },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: true }
];

// FUNÇÃO some: verifica cada elemento do array e retorna true ou false, se PELO MENOS um dos elementos atende a condição testada.

// Pelo menos uma das pessoas dirige?

// A const isDriver = (users - nome do array acima) (.some) que é a HOFs com o parametro (elemento) usado de parametro na callback =  element.isDriver === true

const isDriver = users.some((element) => element.isDriver === true);

console.log(isDriver);



//////////////////////////////////////////////////////////////////////////////////////////////////



// FUNÇÃO find: verifica cada elemento do array e retorna o primeiro que passa no critério.


const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: true },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: true },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: true }
];

// A const quemDirige = (users - nome do array acima) (.find) que é a HOFs com o parametro (elemento) usado de parametro na callback =  element.isDriver === true irá retorna o primeiro que passa no critério ou seja irá retorna (Homer) que foi a primeira que se enquadrou nos parametros.

const quemDirige = users.find((element) => element.isDriver === true);

console.log(quemDirige);
console.log(`A primeira pessoa que dirige da família Simpson é ${quemDirige.firstName}`);


// FUNÇÃO every: verifica cada elemento do array e retorna um true ou false, caso todos os elementos passem na condição.

const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: true },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: true },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: true }
];

// A const todoMundoDirige = (users - nome do array acima) (.every) que é a HOFs com o parametro (elemento) usado de parametro na callback =  element.isDriver === true irá retorna se todos dirigem como isso não é real irá retorna false

const todoMundoDirige = users.every((element) => element.isDriver === true);

console.log(todoMundoDirige);

// operador ternário = (?) usamos da maneira abaixo
// condição true ou false

let resposta = todoMundoDirige ? 'Sim!' : 'Não!';

console.log(`Todo mundo dirige? ${resposta}`);

///////////////////////////////////////////////////////////////////////

const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false }
]

const some = users.some((element) => element.isDriver === true);
const every = users.every((element) => element.isDriver === false);
const find = users.find((element) => element.isDriver === false);

console.log(some); //true = some retorna um valor boleano caso um dos valores passados atinja as condições necessária

console.log(every);//false = every retorná um valor boleano, porém todos as condições tem que serem  atingidas, nesse caso todas as resposta teria que ser false para ele retornar true.

console.log(find);//valor = find retorna o valor do primeiro elemento do array que sastifaça as condições .