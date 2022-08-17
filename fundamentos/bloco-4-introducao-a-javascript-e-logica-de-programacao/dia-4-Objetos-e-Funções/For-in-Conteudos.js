let pizzas = {
  sabor: `Palmito`,
  preco: 39.90,
  bordaCatupiry: true
};

for (let key in pizzas) {

  console.log(key);
  // resultado :
  // sabor
  // preco
  // bordaCatupiry


  console.log(pizzas);
  // resultado:
  // { sabor: 'Palmito', preco: 39.9, bordaCatupiry: true }
  // { sabor: 'Palmito', preco: 39.9, bordaCatupiry: true }
  // { sabor: 'Palmito', preco: 39.9, bordaCatupiry: true }



  console.log(pizzas.preco);
  // resultado:
  // 39.9
  // 39.9
  // 39.9


  console.log(pizzas[`bordaCatupiry`]);
  // resultado: 
  // true
  // true
  // true


  console.log(pizzas[key]);
  // resultado : 
  // Palmito
  // 39.9
  // true
  // }

  let pizzaDoces = [`Chocolate`, `Banana`, `Morango`];

  for (let key in pizzaDoces) {
    console.log(key);
    // resultado:
    // 0
    // 1 
    // 2

    console.log(pizzaDoces);
    // resultado:
    // [ 'Chocolate', 'Banana', 'Morango' ]
    // [ 'Chocolate', 'Banana', 'Morango' ]
    // [ 'Chocolate', 'Banana', 'Morango' ]

    console.log(pizzaDoces[key]);
    // resultado:
    // Chocolate
    // Banana
    // Morango

    console.log(key, pizzaDoces[key]);
    // resultado:
    // 0 Chocolate
    // 1 Banana
    // 2 Morango

    // }

    // Depois de conhecer o laço for/in, o código que mostra as marcas de carros presentes em um Array é:

    let cars = ['Saab', 'Volvo', 'BMW'];

    for (let index in cars) {
      console.log(cars[index]);
    }

    // Um outro exemplo é a iteração nas chaves de um objeto:

    // let car = {
    // type: 'Fiat',
    // model: '500',
    // color: 'white',
    // };

    for (let index in car) {
      console.log(index, car[index]);
    }
    // O resultado do código acima é:
    // type Fiat
    // model 500
    // color white

    // for/of

    // O for/of tem uma aplicação bastante parecida com o que vimos agora no for/in, mas com uma diferença crucial.

    // Como dito no vídeo, o for/in percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, e não nos valores das propriedades, ou seja, nos retorna o índice. Por exemplo, se tivermos um array com três strings dentro:

    // let food = ['hamburguer', 'bife', 'acarajé'];

    // As propriedades dos elementos do array serão os índices de cada posição, começando por zero. É por isso que os números retornados pelo console.log são 0, 1 e 2: as propriedades que correspondem ao índice de cada posição do array.

    for (let position in food) {
      console.log(position);
    };
    //resultado: 0, 1, 2;

    // Se percorrermos um objeto, também teremos o mesmo resultado. O for/in irá percorrer a propriedade declarada, e não o seu valor em si.

    // Já o for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o for/in. Vejamos o exemplo:

    let food = ['hamburguer', 'bife', 'acarajé'];
    for (let value of food) {
      console.log(value);
    };
//resultado: hamburguer, bife, acarajé;