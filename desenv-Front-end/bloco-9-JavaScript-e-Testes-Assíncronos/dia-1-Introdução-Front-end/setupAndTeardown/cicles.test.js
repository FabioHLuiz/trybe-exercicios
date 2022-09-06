// cicles.test.js

let cities = [];

const addCity = (city) => {
  cities.push(city);
};

const removeCity = (city) => {
  cities = cities.filter((eachCity) => eachCity !== city);
};

// Aqui temos a declaração de uma variável cities, que é uma lista de cidades;

// Há duas funções, addCity, que adiciona cidades ao array, e removeCity, que... Pasmem! Remove cidades desse array.

// Agora, você vai realizar dois testes, para saber se essas funções funcionam exatamente como deseja.

// cicles.test.js

// let cities = [];

// const addCity = (city) => {
//  cities.push(city);
// };

// const removeCity = (city) => {
//  cities = cities.filter((eachCity) => eachCity !== city);
// };

// test('Testa a função addCity', () => {
//   expect.assertions(4);
//   addCity('Campinas');
//   addCity('Goiania');
//   addCity('Recife');
//   expect(cities).toHaveLength(3);
//   expect(cities).toContain('Campinas');
//   expect(cities).toContain('Goiania');
//   expect(cities).toContain('Recife');
// });

// test('Testa a função removeCity', () => {
//   expect.assertions(4);
//   removeCity('Campinas');
//   expect(cities).toHaveLength(2);
//   expect(cities).not.toContain('Campinas');
//   expect(cities).toContain('Goiania');
//   expect(cities).toContain('Recife');
// });
// cicles.test.js

// let cities = [];

// const addCity = (city) => {
// cities.push(city);
// };

// const removeCity = (city) => {
// cities = cities.filter((eachCity) => eachCity !== city);
// };

// beforeEach(() => {
//   cities = [...cities, 'Pindamonhangaba'];
// });


// test('Testa a função addCity utilizando o beforeEach', () => {
//   expect.assertions(5);
//   addCity('Campinas');
//   addCity('Goiania');
//   addCity('Recife');
//   expect(cities).toHaveLength(4);
//   expect(cities).toContain('Campinas');
//   expect(cities).toContain('Goiania');
//   expect(cities).toContain('Recife');
//   expect(cities).toContain('Pindamonhangaba');
// });

// test('Testa a função removeCity utilizando o beforeEach', () => {
//   expect.assertions(5);
//   removeCity('Campinas');
//   expect(cities).toHaveLength(4);
//   expect(cities).not.toContain('Campinas');
//   expect(cities).toContain('Goiania');
//   expect(cities).toContain('Recife');
//   expect(cities).toContain('Pindamonhangaba');
//   console.log(cities);
// });
// cicles.test.js

// let cities = [];

// const addCity = (city) => {
// cities.push(city);
// };

// const removeCity = (city) => {
// cities = cities.filter((eachCity) => eachCity !== city);
// };

// beforeEach(() => {
//  cities = [...cities, 'Pindamonhangaba'];
// });

// afterEach(() => {
//   cities = [];
// });

// test('Testa a função addCity utilizando o beforeEach', () => {
//   expect.assertions(5);
//   addCity('Campinas');
//   addCity('Goiania');
//   addCity('Recife');
//   expect(cities).toHaveLength(4);
//   expect(cities).toContain('Campinas');
//   expect(cities).toContain('Goiania');
//   expect(cities).toContain('Recife');
//   expect(cities).toContain('Pindamonhangaba');
// });

// test('Testa a função removeCity utilizando o beforeEach', () => {
//   expect.assertions(2);
//   removeCity('Pindamonhangaba');
//   expect(cities).toHaveLength(0);
//   expect(cities).not.toContain('Pindamonhangaba');
// });

// Repare que, como estamos limpado o array cities depois de cada teste com o afterEach, as cidades que foram adicionadas no teste da função addCity não estão mais presentes no teste da função removeCity. A única cidade presente no array no segundo teste é Pindamonhangaba, já que ela sempre é adicionada antes de cada teste pelo beforeEach.

//////////////////////////////////////////////////////////////////////

// Utilizando beforeEach e afterEach junto com describe

// Agora, se você tem um bloco de describe agrupando os testes e o beforeEach ou afterEach estiverem dentro desse describe, ele rodará apenas dentro dos testes que estão nesse describe, ou seja, se criarmos um segundo describe, aquele beforeEach e afterEach que estão no primeiro describe não serão rodados antes e/ou depois dos testes do segundo.

// Para visualizar melhor, veja outro exemplo dentro do mesmo contexto.

// cicles.test.js

// let cities = [];

// const addCity = (city) => {
// cities.push(city);
// };

// const removeCity = (city) => {
// cities = cities.filter((eachCity) => eachCity !== city);
// };

describe('Agrupa o primeiro bloco de testes', () => {
  beforeEach(() => {
    cities = [...cities, 'Pindamonhangaba'];
  });

  afterEach(() => {
    cities = [];
  });

  test('Testa a função addCity dentro do primeiro bloco de testes', () => {
    expect.assertions(5);
    addCity('Campinas');
    addCity('Goiania');
    addCity('Recife');
    expect(cities).toHaveLength(4);
    expect(cities).toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
    expect(cities).toContain('Pindamonhangaba');
  });

  test('Testa a função removeCity dentro do primeiro bloco de testes', () => {
    expect.assertions(2);
    removeCity('Pindamonhangaba');
    expect(cities).toHaveLength(0);
    expect(cities).not.toContain('Pindamonhangaba');
  });
});

describe('Agrupa o segundo bloco de testes', () => {
  beforeEach(() => {
    cities = [...cities, 'Tangamandapio'];
  });


  afterEach(() => {
    cities = [];
  });

  test('Testa a função addCity dentro do segundo bloco de testes', () => {
    expect.assertions(5);
    addCity('Campinas');
    addCity('Goiania');
    addCity('Recife');
    expect(cities).toHaveLength(4);
    expect(cities).toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
    expect(cities).toContain('Tangamandapio');
  });

  test('Testa a função removeCity dentro do segundo bloco de testes', () => {
    expect.assertions(3);
    removeCity('Tangamandapio');
    expect(cities).toHaveLength(0);
    expect(cities).not.toContain('Tangamandapio');
    expect(cities).not.toContain('Pindamonhangaba');
  });
});

// Dessa maneira, você pode organizar uma configuração para cada bloco de testes dentro de um describe.

// Uma observação importante é que, para facilitar o entendimento, nós utilizamos funções síncronas para entender como usar o setup e o teardown, porém elas geralmente são utilizadas em funções assíncronas.

// Ufa, bastante coisa, não é mesmo? Aproveite para fazer uma pausa, tomar um café, se alongar, e volte para fixar seus conhecimentos!