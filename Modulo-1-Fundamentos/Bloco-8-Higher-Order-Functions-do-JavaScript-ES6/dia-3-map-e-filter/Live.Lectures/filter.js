// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [50, 21, 34, 54, 67, 98, 13, 33, 59];

// Criar um novos arrays apenas com os numeros impares de numbers e de newNumbers

// const filterOdd = (array) => {
//   return array.filter((item) => {
//   return item % 2 !== 0 
// });
// };

// Refatorando:

const filterOdd = (array) => array.filter((item) => item % 2 !== 0 );

// se item multiplicado por 2 for diferente de 0 retornar os impares
console.log(filterOdd(numbers));
console.log(filterOdd(newNumbers));



// FUNÇÃO filter

const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false }
]

// com o filter eu quero retornar todos as pessoas que não dirigem.

const naoDirige = users.filter((elemento) => elemento.isDriver === false);

console.log(naoDirige); // Retornará todos aqueles que não dirigem.

// FUNÇÃO map
// O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.



// Encadeamento de HOFs
// Como retornar nome e sobrenome apenas das pessoas que não dirigem?


const birds = [
  { ID: 'DV8', Name: 'Eurasian Collared-Dove', Type: 'Dove' },
  { ID: 'HK12', Name: 'Bald Eagle', Type: 'Hawk' },
  { ID: 'HK6', Name: 'Red-Tailed Hawk', Type: 'Hawk' },
  { ID: 'SP11', Name: 'Old World Sparrow', Type: 'Sparrow' },
  { ID: 'DV2', Name: 'Mourning Dove', Type: 'Dove' },
];
