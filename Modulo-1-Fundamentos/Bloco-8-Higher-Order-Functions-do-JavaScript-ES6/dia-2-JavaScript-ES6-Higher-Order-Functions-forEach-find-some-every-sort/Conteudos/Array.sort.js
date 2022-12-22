// Por último, existe a função sort. Ela permite ordenar um array de acordo com algum critério estabelecido. Veja este exemplo com um array de strings:

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

// Funcionou bem com um array de strings, não é mesmo? Por tanto, caso queira ordenar de forma alfabética, basta chamar sort, sem parâmetros algum na função. Agora, veja este exemplo com um array de números:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

// 😮 O que aconteceu com esta ordenação?

// Como pode notar, a forma como ela organiza os elementos do array não é tão intuitiva. Isso ocorre, pois ela distribui sempre por ordem alfabética. No caso, quando há elementos como números, a sort coloca de acordo com a ordem alfabética dos códigos desse elemento na tabela de caracteres unicode!

// Agora, se deseja ordenar de forma numérica crescente, é necessário passar a função a seguir:

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]

// A lógica é a seguinte: a função recebe, da sort, todos os elementos do array, em pares (elemento1, elemento2), e vai comparando-os. O formato é meuArray.sort((elemento1, elemento2) => /* logica da função */). Ou seja: para o array [1, 2, 3, 4], a função receberá (2, 1), (3, 2), (4, 3) como parâmetros e ordenará o array com base em seu resultado. Se a operação de elemento1 com elemento2 der resultado negativo, elemento1 vai para trás. Caso contrário, vai para frente, para, de forma decrescente, só inverter elemento1 - elemento2 para elemento2 - elemento1.

// Veja agora se realizarmos uma simples modificação no retorno da função que ordena os números e veja o que acontece:

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]

// Repare que invertemos os parametros a - b do primeiro exemplo para b - a no segundo exemplo assim invertemos de ordem crescente para decrescente.

// Exemplos;

const arrayNumbers = [9, 5, 3, 4, 1, 8];
const sortNumber = arrayNumbers.sort();
console.log(sortNumber);
console.log(arrayNumbers);

// O .sort ele altera o array original e já deixa o array ordenado

// Com outros elementos também da para fazer por exemplo texto:

const arrayNames = ['Eduardo', 'Ana', 'Bob', 'Carlo', 'Alice', 'Alvaro', 'José'];
arrayNames.sort();
console.log(arrayNames);

Vamos modificar nosso primeiro exemplo, adicionando o numero 10. nesse caso a ordenação fica,
  [1, 10, 3, 4, 5, 8, 9] isso acontece por que a orde

const arrayNumbers = [9, 10, 5, 3, 4, 1, 8];
arrayNumbers.sort();
console.log(arrayNumbers);

// nesse caso a ordenação fica, [ 1, 10, 3, 4, 5, 8, 9 ] isso acontece por que a ordenação é feito como se fosse uma string, ele converte o numero para texto e no caso de texto ordena pelo primeiros caracteres.

// Para alterar isso usamos uma callback ou seja outra função já que .sort é uma HOFs, 

const arrayNumbers = [9, 10, 5, 3, 4, 5, 1, 8];
arrayNumbers.sort((a, b) => {
  if (a > b) {
    console.log(a, 'a é maior do que', b, 'b');
    return 1;
  }
  if (b > a) {
    console.log(b, 'b é maior que', a, 'a');
    return -1;
  }
  return 0;
});

console.log(arrayNumbers);

// Agora sabemos retornar a função,  por regra eu tenho o seguinte se o elemento 'a' é maior (>) do que o elemento 'b' eu tenho que passar um valor 'positivo', se o 'a' é menor (<) que o 'b' eu passo uma valor 'negativo', o que isso, significa se eu passar que o 'a' e maior(>) que o 'b',
// o 'b' vem antes, se eu passar que o 'b' é maior(>) que o 'a' vem antes.

// Então no caso de (a) ser maior(>) do que (b) eu tenho que (retorna 1) para falar para colocar o (a) antes do (b)

// Se o (b) for maior(>) do que (a) eu tenho que (retorna um -1) para falar que é uma valor negativo coloca o (a) antes do (b)

// Não precisa ser o numero 1 para retornar pode ser qualquer numero positivo ou negativo

// Quando os numeros forem iguais o retorno será (0);

// Podemos fazer de um jeito mais facil também.

// Se 'a' for maior que 'b' (a > b) = podemos retornar um numero positivo = (a - b);

// Se 'b' for maior que 'a' (b > a) = podemos retornar um numero negativo = (a - b);

// Se 'a' e 'b' for igual  (a === b) = podemos retornar (a - b);

const arrayNumbers = [9, 10, 5, 3, 4, 5, 1, 8];
arrayNumbers.sort((a, b) => {
  if (a > b) {
    console.log(a, 'a é maior do que', b, 'b');
    return a - b;
  }
  if (b > a) {
    console.log(b, 'b é maior que', a, 'a');
    return a - b;
  }
  return a - b;
});

console.log(arrayNumbers);

// E podemos refatorar deixando nosso codigo menor ainda, podemos tirar os ifs e podemos simplesmente retorna (a - b) e aproveitando a sintaxe de arrow function podemos deixar em uma linha só.

// Em ordem crescente fica:

const arrayNumbers = [9, 10, 5, 3, 4, 5, 1, 8];

arrayNumbers.sort((a, b) => a - b);


console.log(arrayNumbers);

// Em ordem decrescente é só inverte 'a' e 'b' e fica:

const arrayNumbers = [9, 10, 5, 3, 4, 5, 1, 8];

arrayNumbers.sort((a, b) => b - a);

console.log(arrayNumbers);

// Você sabia que o sort() também pode ser utilizado em um array de objetos?

// Nem sempre a gente usa elementos tão simples como numeros e strings a gente pode usar elementos mais elaborados como objetos. 

// Veja exemplo abaixo:

const gamers = [
  {
    name: 'Eduardo',
    points: [20, 22, 100, 10, 0]
  },
  {
    name: 'Ana',
    points: [0, 20, 10, 100, 100]
  },
  {
    name: 'Bob',
    points: [0, 100, 10, 10, 5, 20]
  },
  {
    name: 'Carlo',
    points: [3, 20, 10, 10, 10]
  }
];

// Como estou trabalhando com objeto eu tenho que ver qual propriedade que irei ordenar e como irei ordenar

// Continuamos a passar uma função com dois parametros 'a' e 'b' só que irei indicar como cada parametro funcione, lembrando que cada elemento 'a' e 'b' agora é um obejto eu tenho um array de objetos e cada um deles tem sua propriedade.

// Usando um (if(?) ternário), se o a.name for maior que b.name eu vou retornar 1 se não eu vou retornar -1, ficando como o exemplo abaixo e o retorno será feita de ordem alfabética 

gamers.sort((a, b) => a.name > b.name ? 1 : -1);
console.log(gamers);

//  Mais um exemplo, agora ordenando pq quem tem mais ponto fazendo uma compração de pontos

const gamers = [
  {
    name: 'Eduardo',
    points: [20, 22, 100, 10, 0]
  },
  {
    name: 'Ana',
    points: [0, 20, 10, 100, 100]
  },
  {
    name: 'Bob',
    points: [0, 100, 10, 10, 5, 20]
  },
  {
    name: 'Carlo',
    points: [3, 20, 10, 10, 10]
  }
];

gamers.sort((a, b) => {
  let pointsA = 0;
  let pointsB = 0;
  a.points.forEach((element) => pointsA += element);
  b.points.forEach((element) => pointsB += element);
  return pointsA - pointsB;
});
console.log(gamers);

// Utilizamos um .forEach para totalizar os pontos, foi criada duas variavéis, para os pontos da pessoas A e para B, o .forEach vai verificar cada elemento, como eu sei que é um numero, eu peguei esses numeros e somei eles ao pointsA com os points que estão na variavel elementos e assim totalizando todos os pontos, e faço o mesmo na B.

// Logo depois foi usado o return para a operação matemática = (pointsA - pointsB), então significa que se o (A) for menor  vai ficar negativo, se o (A) for maior ficará positivo, se for iguais ficara (0).