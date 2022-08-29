// O filter é bem parecido com o find. O que o filter traz de novo é que, em vez de retornar apenas um elemento do array, ele retornará outro array com todos os elementos que satisfaçam à condição verificada pela função.

const arr = ['Ana', 'Pedro', 'Giovana'];

arr.filter((element) => console.log(element));

// resposta = Ana Pedro Giovana

//////////////////////////////////////////////////////////////////////////////////////////

const arr = ['Ana', 'Pedro', 'Giovana'];

arr.filter((element, index, array) => console.log('Elemento:', element, 'Indice:', index, 'Array:', array));

// resposta = Elemento: Ana Indice: 0 Array: [ 'Ana', 'Pedro', 'Giovana' ]
//            Elemento: Pedro Indice: 1 Array: [ 'Ana', 'Pedro', 'Giovana' ]
//            Elemento: Giovana Indice: 2 Array: [ 'Ana', 'Pedro', 'Giovana' ]

// Normalmente não se usa o (index) e o (array) porem o primeiro parametro é obrigatório

//////////////////////////////////////////////////////////////////////////////////////////

const arr = ['Ana', 'Pedro', 'Giovana'];

const filtered = arr.filter((element) => element === 'Ana');
console.log(filtered);

// resposta = [ 'Ana' ]

// Repare que diferente do (find) ele não retorna direto o elemento Ana ele retorna um array com elementos então o (filter) sempre retorna um array mesmo que seja de um elemnto só.

//////////////////////////////////////////////////////////////////////////////////////////

const notaEstudantes = [
  {
    nome: 'Joicy',
    nota: 100
  },
  {
    nome: 'Ronald',
    nota: 50
  },
  {
    nome: 'Joel',
    nota: 80
  },
  {
    nome: 'Ana',
    nota: 90
  },
  {
    nome: 'Carol',
    nota: 70
  }
];

const estudantesComAprovacao = notaEstudantes.filter((pessoas) => pessoas.nota >= 80);
console.log(estudantesComAprovacao);

// resposta = [
//               { nome: 'Joicy', nota: 100 },
//               { nome: 'Joel', nota: 80 },
//               { nome: 'Ana', nota: 90 }
//            ]


// E assim funciona nosso metodo .filter eu quero filtrar, passo uma condição se for verdadeira aparece no array.

// É importante a gente notar, o filtro sempre retorna um array e esse array sempre tem o mesmo numero de elementos ou menos elemento que o array original, pq ele vai filtrando e pode ser até um elemnto vazio caso nenhuma condição entre. 

const estudantesSemAprovacao = notaEstudantes.filter((pessoas) => pessoas.nota < 80);
console.log(estudantesSemAprovacao);

// resposta = [ { nome: 'Ronald', nota: 50 }, { nome: 'Carol', nota: 70 } ]

// No exemplo abaixo usamos o operador de (negação-!) ou seja a condição verdadeira é transformada em falsa .

const estudantesSemAprovacao = notaEstudantes.filter((pessoas) => !(pessoas.nota >= 80));
console.log(estudantesSemAprovacao);


//////////////////////////////////////////////////////////////////////////////////////////

// No exemplo abaixo, apenas substituiremos o find por filter.

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);

console.log(isEven); // [ 30, 22 ]

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0);

console.log(isEven2); // [ 30, 22 ]

// Verifique que o retorno é um novo array com os dois números pares vindos do array numbers.

// Observe este outro exemplo que busca os elementos através da condição do filter. Neste caso, como resultado teremos pessoas que possuem idade menor que 18 anos, ou seja, que ainda não podem dirigir:

const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (
  arrayOfPeople.filter((people) => (people.age < 18))
);

console.log(verifyAgeDrive(objPeople));
// [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]

// Outra forma de se usar o filter é retornar um array sem o elemento desejado. É preciso remover o Ricardo do objeto agora, já que ele não é mais um estudante.

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
  listStudents.filter((student) => student !== name);
  // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]

// Observe que o filter foi usado dentro de uma função que recebe dois parâmetros, o array de valores e uma string, o que será removido. A condição de dentro do filter é para retornar sempre que o elemento for diferente do name passado. Se tiver ficado confuso, rode esse código por conta própria e altere um pouco o seu funcionamento! Isso ajudará muito.