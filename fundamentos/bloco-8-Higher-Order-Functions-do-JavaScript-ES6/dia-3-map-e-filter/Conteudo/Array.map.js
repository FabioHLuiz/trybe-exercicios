// A função map possui a mesma estrutura das outras HOFs, o que muda é o seu retorno.

const pessoas = ['Joicy', 'Joel', 'Ronald', 'Ana', 'Carol'];

pessoas.map((element) => console.log(element));

// resposta = Joicy Joel Ronald Ana Carol, nessa caso ele mostra cada elemento do meu array

// O map também recebe uma função callback como parametro de entrada, ela pode receber 3 parametro porém só o primeiro é obrigatorio

//////////////////////////////////////////////////////////////////////

const pessoas = ['Joicy', 'Joel', 'Ronald', 'Ana', 'Carol'];

pessoas.map((element, index, array) => console.log(element, index,array));

// reposta = Joicy 0 [ 'Joicy', 'Joel', 'Ronald', 'Ana', 'Carol' ]
//           Joel 1 [ 'Joicy', 'Joel', 'Ronald', 'Ana', 'Carol' ]
//           Ronald 2 [ 'Joicy', 'Joel', 'Ronald', 'Ana', 'Carol' ]
//           Ana 3 [ 'Joicy', 'Joel', 'Ronald', 'Ana', 'Carol' ]
//           Carol 4 [ 'Joicy', 'Joel', 'Ronald', 'Ana', 'Carol' ]

// Então eu tenho variáveis caso eu queira manipular o indice ou o array por algum motivo, por que o (.map) funciona como se fosse o (for) se eu quiser fazer qualquer outra manipulação ali dentro eu tenho ferramentas para isso.

// O (.map) retorna um array com os mesmo tamanho do array original com os elementos manipulados

//////////////////////////////////////////////////////////////////////

const pessoas = ['Joicy', 'Joel', 'Ronald', 'Ana', 'Carol'];

const novasPessoas = pessoas.map((element) => element);

console.log(novasPessoas);

// resposta = [ 'Joicy', 'Joel', 'Ronald', 'Ana', 'Carol' ]

// A minha saida nesse caso acima é um array da mesma forma que eles estavam antes por que para elemento ele me retorna um elemento

//////////////////////////////////////////////////////////////////////

// Agora iremos pegar cada elemento e colocar em letra maiuscula mais apenas no novo array, e como fazemos isso, é só fazer uma modificação no nosso (.map) então para cada elemento do array original eu retorno o elemento com a função de deixar em letra maiuscula que é a função (toUpperCase)

const pessoas = ['Joicy', 'Joel', 'Ronald', 'Ana', 'Carol'];

const novasPessoas = pessoas.map((element) => element.toUpperCase());

console.log(novasPessoas);

// resposta = [ 'JOICY', 'JOEL', 'RONALD', 'ANA', 'CAROL' ]


//////////////////////////////////////////////////////////////////////

// A partir desse array iremos criar criar um registro de pessoas e empresas e para esse registro eu quero criar um objeto e esse objeto terá dois propriedades, o nome e a empresa, vamos utilizar o .map para fazer isso, um array original retornar um array de objetos.

// Fizemos uma nova const, então criamos um objeto novo chamado registro, e esse objeto será vazio.

//Esse objeto vazio receberá o nome da pessoa, ele  recebe cada pessoa que está no array ficando assim =(registro.nome = element;) e cada pessoa que está no array é cada elemento, então para o objeto vazio eu digo que a propriedade .nome desse objeto será o nome que está no array original . 

// Logo após criamos uma outra propriedade que será o meu  (registro.empresa = 'Trybe';) e ele irá receber o nome Trybe. 

// E no final tenho que retorna o novo array de objetos


const pessoas = ['Joicy', 'Joel', 'Ronald', 'Ana', 'Carol'];

const novasPessoas = pessoas.map((element) => {
  const registro = {};
  registro.nome = element;
  registro.empresa = 'Trybe';
  return registro;
});
console.log(novasPessoas);

// resposta = [
//               { nome: 'Joicy', empresa: 'Trybe' },
//               { nome: 'Joel', empresa: 'Trybe' },
//               { nome: 'Ronald', empresa: 'Trybe' },
//               { nome: 'Ana', empresa: 'Trybe' },
//               { nome: 'Carol', empresa: 'Trybe' }
//            ] 

//////////////////////////////////////////////////////////////////////

// Veja a diferença entre fazer uma mesma função usando for e em seguida usando map:

const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
  fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}

console.log(fullNames);

//////////////////////////////////////////////////////////////////////

// Agora com a função map:

const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

// O for foi substituído por apenas uma linha de código.

// A função juntou o primeiro nome com o sobrenome de cada pessoa e retornou um array novo com cada um dos valores. Observe que o tamanho dos arrays persons e fullNames é o mesmo (3 elementos).

//////////////////////////////////////////////////////////////////////

// Vamos praticar um outro exemplo numérico, para fixar bem o que o map faz. Suponha que é preciso transformar todos os números em negativos e passa-lós para um array novo.

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

//////////////////////////////////////////////////////////////////////

// E como seria apenas com for?

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = [];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > 0) {
    negativeNumbers.push(numbers[index] * -1);
  } else {
    negativeNumbers.push(numbers[index]);
  }
}

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

//////////////////////////////////////////////////////////////////////

// Outras formas de usar o .map é unir dois arrays para criar um novo. Considere que você possui duas listas: o preço do primeiro produto (Arroz) é o primeiro elemento da lista prices (2.99), e assim por diante:

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

// Deseja-se juntá-las em apenas uma lista de objetos que fique dessa forma:

const listProducts = [{ Arroz: 2.99 },...]

// Tente criar uma função que resolva esse problema. Lembre-se, também, que as funções passadas para as HOFs podem receber vários parâmetros, não só o elemento sobre o qual ela está sendo iterada! Use isso em seu favor. Caso tenha dúvidas, olhe a solução logo abaixo.

const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]


// E antes de seguir em diante, uma pergunta que provavelmente lhe veio! Qual a diferença, afinal, de map para o forEach? São duas principais:

// O map aplica sobre os elementos de um array uma função e retorna um array novo, sem modificar o original;

// A forEach não tem tal restrição. Ela pode modificar o array original e retorna nada por padrão - ela pode criar um array novo a partir de um antigo, pode simplesmente buscar por um elemento e retorná-lo, pode não retornar nada, enfim! Ela é genérica e pode fazer diversas coisas.

//////////////////////////////////////////////////////////////////////

// Ficou mais claro? Em caso de dúvidas, pense neste exemplo:

const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map((numero) => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

const paresMenoresQueCinco = [];
numeros.forEach((numero) => {
  if (numero < 5 && numero % 2 === 0) {
    paresMenoresQueCinco.push(numero);
  }
});
console.log(paresMenoresQueCinco); // Retorno: [2, 4]

// Pense sempre que o forEach faz com arrays o que as outras HOFs não conseguem fazer. Ele é genérico!

//////////////////////////////////////////////////////////////////////

// Agora, hora de ver como pode-se usar as outras HOFs junto com o map. Para os exemplos a seguir será usado um array com os dados de estudantes de um colégio.

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

// Segue-se alguns exemplos de funções apenas usando for e depois como refatorá-las para quem usem HOFs.

// Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.

const allNameStudents = [];

for (let index = 0; index < estudantes.length; index += 1 ) {
  if(estudantes[index].turno === 'Manhã') {
    allNameStudents.push(`${estudantes[index].nome} ${estudantes[index].sobrenome}`)
  }
}

console.log(allNameStudents);

//////////////////////////////////////////////////////////////////////

// Com map e filter.

const allNameStudents = estudantes.filter((estudante) => (
  estudante.turno === 'Manhã')).map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);

console.log(allNameStudents); 
// Resposta =
// [
//   'Jorge Silva',
//   'Jorge Santos',
//   'Maria Silveira',
//   'Natalia Castro',
//   'Wilson Martins'
// ]

// O que foi feito? Primeiro usou-se o filter para filtrar todos os estudantes que estudam no período da manhã. Como o retorno do filter é um array de elementos, você pode usar o map logo em seguida para retornar os nomes completos de estudantes presentes nesse novo array. O map nesse caso é usado apenas para retornar as informações pedidas, o nome completo, enquanto o filter é usado para filtrar o array.

//////////////////////////////////////////////////////////////////////

// Agora vamos usar um map com um find.

// Buscar um estudante pelo nome e retornar a situação dele em cada matéria:


// Apenas com for:

const findStudent = (name, students) => {
  for (let index = 0; index < students.length; index += 1) {
    if (students[index].nome === name) {
      return students[index];
    }
  }
};

const reportStatus = (name, students) => {
  const getStudent = findStudent(name, students);
  const report = [];
  for (let index = 0; index < getStudent.materias.length; index += 1) {
    if (getStudent.materias[index].nota >= 60) {
      report.push(`${getStudent.materias[index].name} Aprovado`);
    } else {
      report.push(`${getStudent.materias[index].name} Reprovado`);
    }
  }
  return report;
};

console.log(reportStatus('Natalia', estudantes));

//////////////////////////////////////////////////////////////////////

// Com find e map:


const reportStatus = (name, students) => {
  const studentInfo = students.find((student) => student.nome === name);
  return studentInfo.materias.map((materia) => (
    `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
  ));
};

console.log(reportStatus('Natalia', estudantes));

// O código teve uma redução drástica no número de linhas! Primeiro, fizemos um find para buscar e retornar os dados do estudante. O objeto foi retornado e salvo na variável studentsInfo, depois o map foi usado para percorrer as matérias do objeto retornado e salvar o que se queria em um array da forma desejada.