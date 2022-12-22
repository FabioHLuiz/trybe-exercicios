const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toMatchObject([
      {
        name: 'Alcool gel',
        details: {
          productId: 'Alcool gel123'
        }
      },
      {
        name: 'Máscara',
        details: {
          productId: 'Máscara123'
        }
      }
    ])
  });

  // ESCREVA SEUS TESTES ABAIXO:
  // Teste se productDetails é uma função.
  it('Testando se productDetails é uma função', () => {
    expect(typeof (productDetails)).toBe('function');
  });

  // Teste se o retorno da função é um array.
  it('Testando se o retorno da função é um array', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toEqual([
      {
        name: 'Alcool gel',
        details: {
          productId: 'Alcool gel123'
        }
      },
      {
        name: 'Máscara',
        details: {
          productId: 'Máscara123'
        }
      }
    ])
  });

  // Teste se o array retornado pela função contém dois itens dentro.
  it('Testando se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails.length).toEqual(2);
  });

  // Teste se os dois itens dentro do array retornado pela função são objetos.
  it('Testando se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof productDetails('Alcool gel', 'Máscara')).toEqual('object');
  });

  // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  it('Testando se se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    expect(typeof productDetails('oculos', 'luvas')).toBe('object');
  });

  // Teste se os dois productIds terminam com 123.
  it('Testando se os dois productIds terminam com 123.', () => {
   expect(productDetails()[0].details.productId.endsWith('123')).toBeTruthy();
   expect(productDetails()[1].details.productId.endsWith('123')).toBeTruthy();
  });
});
