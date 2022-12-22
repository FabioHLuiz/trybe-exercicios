// Os Mocks

// O objetivo de mockar uma função, módulo ou requisição é permitir a quem desenvolve ter controle sobre todo o funcionamento de seus testes. Pense em uma requisição de API que constantemente muda seu retorno. Como ter certeza do seu retorno e, principalmente, de que seu teste não está caindo em um falso-positivo?

// No exemplo abaixo, podemos ver um caso em que simular o comportamento da função seria necessário para o teste:

const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

test('quando o número aleatório é par, a função retorna `true`', () => {
  expect(divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par?
});

// Mockar o comportamento da função retornaNumeroAleatorio() para garantir que ela está, nesse teste, retornando um número par seria a solução para esse impasse!

// Dentre as principais formas de se mockar algo somente utilizando Jest, destacam-se três:

// jest.fn();
// jest.mock();
// jest.spyOn().

// O método jest.fn() configura-se como a forma mais simples de mockar algo: ele transforma uma função em uma simulação. Ou seja: ao mockar uma função com o jest.fn() e fazer a chamada dela, o comportamento definido no mock será chamado, em vez da função original.

// Ele é muito útil para casos como o do exemplo da seção anterior, em que precisamos ter controle dos números gerados aleatoriamente.

// Fazendo o teste para saber se a função é chamada, temos:

// const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

// const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

test("#divisivelPorDois", () => {
  // testando se a função foi chamada
  divisivelPorDois();
  expect(divisivelPorDois).toHaveBeenCalled();
});

// Esse teste deveria passar, não? Afinal, a função foi chamada logo acima dele. Mas ele não passa, e o erro nos indica o que fazer:

// Matcher error: received value must be a mock or spy function

// Esse erro acontece porque a propriedade toHaveBeenCalled, assim como outras que serão ensinadas a seguir, é exclusiva para funções simuladas. Ou seja: se você não simula uma função, a propriedade não funciona corretamente.

// Portanto, vamos utilizar o jest.fn() para testar a chamada dessa função:

// ...
test("#divisivelPorDois", () => {
  // testando se a função foi chamada. Não simulamos nenhum comportamento aqui, pois, para esse teste, isso não importa! Apenas queremos saber se ela foi chamada.
  divisivelPorDois = jest.fn();

  divisivelPorDois();
  expect(divisivelPorDois).toHaveBeenCalled();
});

// Ao declarar divisivelPorDois = jest.fn();, estamos dizendo ao teste que, a partir daquele momento, estamos tomando controle da função divisivelPorDois e que ela será uma simulação da função original.

// Por ser uma simulação, podemos especificar qual vai ser o retorno da função. Basicamente, o que podemos dizer é: “No contexto deste teste, quando essa função for chamada, ela retornará o valor que eu defini, em vez de um valor aleatório!”. Duas propriedades nos permitem fazer essa declaração: mockReturnValue(value) e mockReturnValueOnce(value). O mockReturnValue define um valor padrão de retorno. Já o mockReturnValueOnce retorna o valor definido apenas uma vez, e é importante, pois pode ser encadeado para que chamadas sucessivas retornem valores diferentes.

//...
test("#divisivelPorDois", () => {
  // testando se a função foi chamada e qual seu retorno
  divisivelPorDois = jest.fn().mockReturnValue(true);

  divisivelPorDois();
  expect(divisivelPorDois).toHaveBeenCalled();
  expect(divisivelPorDois()).toBe(true);
});

// No exemplo acima, estamos manualmente chamando a função divisivelPorDois();. Caso isso não seja feito, o teste expect(divisivelPorDois).toHaveBeenCalled() irá falhar. Isso acontece porque mockar uma função redefine seu comportamento, mas não a executa. A propriedade toHaveBeenCalled() espera que a função dentro do expect tenha sido executada por alguma chamada anterior a essa linha dentro do contexto desse teste.

// Além disso, podemos também testar quantas vezes a função foi chamada. Para isso, utilizamos a propriedade toHaveBeenCalledTimes(number):

// ...
test("#divisivelPorDois", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  divisivelPorDois = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(divisivelPorDois).toHaveBeenCalledTimes(0);

  expect(divisivelPorDois()).toBe("first call");
  expect(divisivelPorDois).toHaveBeenCalledTimes(1);

  expect(divisivelPorDois()).toBe("second call");
  expect(divisivelPorDois).toHaveBeenCalledTimes(2);

  expect(divisivelPorDois()).toBe("default value");
  expect(divisivelPorDois).toHaveBeenCalledTimes(3);
});

// É possível implementar vários comportamentos em uma simulação. No exemplo acima, note que a implementação mockReturnValueOnce se sobrepõe em relação ao mockReturnValue, que se torna um padrão apenas após os retornos de mockReturnValueOnce serem executados.