// Agora a prática

// Estes exercícios praticam os conceitos de Higher Order Functions associados a outros já vistos, como arrow functions, template literals, objetos e temas dos fundamentos. Essa mistura de conceitos é muito importante para seu aprendizado, então use tudo o que sabe para resolver os exercícios!

// Utilize o seguinte código como template para realizar os exercícios:

// const books = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: {
//       name: 'George R. R. Martin',
//       birthYear: 1948,
//     },
//     releaseYear: 1991,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: {
//       name: 'J. R. R. Tolkien',
//       birthYear: 1892,
//     },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Isaac Asimov',
//       birthYear: 1920,
//     },
//     releaseYear: 1951,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Frank Herbert',
//       birthYear: 1920,
//     },
//     releaseYear: 1965,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: {
//       name: 'Stephen King',
//       birthYear: 1947,
//     },
//     releaseYear: 1986,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: {
//       name: 'H. P. Lovecraft',
//       birthYear: 1890,
//     },
//     releaseYear: 1928,
//   },
// ];

//////////////////////////////////////////////////////////////////////////////////////////////////

// 🚀 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

// Usando a função .find localizamos a primeiro pessoa, usamos a sintaxe abaixo para acessar o array, logo após o objeto, e depois o outro objeto ficando assim; (birth.author.birthYear === 1947).author.name;


// const authorBornIn1947 = () => books.find((birth) => birth.author.birthYear === 1947).author.name;

// console.log(authorBornIn1947());

// 2 - Retorne o nome do livro de menor nome.

// Dica: use a função forEach.

// Uma variável do tipo vazia representa para nós false, então usamos a negação da variével (!nameBook) então (SE) a negação de (!nameBook) acontece eu irei guardar o nome do livro dentro da variável nameBook.

// Usamos o operador lógico (OU-||) 

// nameBook = book.name = (nameBook recebe= o nome do livro que encontrei) esse passo alimenta minha variável fazendo que ela receba o nome do primeiro, porém eu não quero que ela receba o nome do primeiro livro, eu que ela também seja capaz de guardar o nome do livro que ela encontrou caso o que já esteja dentro tenha menos caracteres ou seja ou quando minha variável está vazia ou quando eu encontro o nome de livro com tamanho de caracteres menor eu vou substituir o nome do livro na minha variável, nessas duas situações irei usar essa linha citada acima, então Usamos o operador lógico (OU-||) 

// Então será que o nome que achei no meu objeto é menor que o nome que já está guardado na minha variável nameBook, se for eu irei salvar essa informação dentro de nameBook então fica assim o codigo: 

// const smallerName = () => {
//   let nameBook;

//   books.forEach((book) => {
//     if(!nameBook || book.name.length < nameBook.length){
//       nameBook = book.name
//     }
//   })

//   return nameBook;
// };

//////////////////////////////////////////////////////////////////////////////////////////////////

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

// const expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// };

// const getNamedBook = () => books.find((word) => word.name.length === 26);
// console.log(getNamedBook());

//////////////////////////////////////////////////////////////////////////////////////////////////

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

// expectedResult.sort((a, b) => b.releaseYear > a.releaseYear ? 1 : -1);

// console.log(expectedResult );

//////////////////////////////////////////////////////////////////////////////////////////////////

// 🚀 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

// const expectedResult = false;

expectedResult.every((book) => book.author.birthYear >= 1901 && book.author.birthYear <= 2000);

console.log(expectedResult);
