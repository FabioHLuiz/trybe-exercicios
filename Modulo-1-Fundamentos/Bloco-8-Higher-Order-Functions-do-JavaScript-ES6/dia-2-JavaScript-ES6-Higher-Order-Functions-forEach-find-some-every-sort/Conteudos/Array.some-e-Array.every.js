// As funções some e every são parecidas. A primeira retorna true se ao menos um elemento de um array satisfaz a uma condição. A segunda retorna true se todos os elementos de um array satisfazem a uma condição. O MDN contém explicações mais detalhadas sobre essas funções, além de exemplos.

// O exemplo abaixo usa o some para verificar se possui algum nome que começa com a letra desejada:

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

// O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias:

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));

// Observe que foi usado Object.values junto com o every. Como o Object.values retorna um array apenas com os valores do objeto, o every percorrerá esse array retornado. Interessante essa combinação de funções, hein?! Experimente alguma combinação dessas na sua própria máquina agora!

// Para fixar

// 1 - Escreva uma função que recebe dois parâmetros: o primeiro um array de nomes e o segundo, um nome qualquer. Essa função deve retornar true se o segundo parâmetro - um nome qualquer - estiver contido no primeiro parâmetro - array de nomes. Caso não esteja contido, deve retornar false.

// Dica: use some.

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {

}
console.log(hasName(names, 'Ana'));

// Utilizamos o método some sobre o array passado como parâmetro e verificamos se a cada iteração se aquele item corresponde ao nosso segundo parâmetro. Tendo pelo menos um caso de sucesso a função deve retornar true.

// Usamos tbm o return com implicito para deixarmos tudo em uma linha.

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((currentName) => currentName === name);

console.log(hasName(names, 'Ana'));

// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((smaller) => smaller >= minimumAge);+

console.log(verifyAges(people, 18));

// Implementamos o método every sobre o array passado como parâmetro e verificamos a cada iteração se a chave age daquela pessoa é maior ou igual à idade passada como segundo parâmetro em nossa função. Se algum caso falhar a função já retorna false.

// Usamos tbm o return com implicito para deixarmos tudo em uma linha.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((smaller) => smaller >= minimumAge);+

console.log(verifyAges(people, 18));
