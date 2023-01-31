// Crie uma função que recebe três parâmetros e retorna uma Promise.

// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro((a + b) * c).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
//   Solução

// Criar uma pasta para o projeto e nela um arquivo index.js contendo a base da função.

function doMath(a, b, c) {
  return new Promise((resolve, reject) => { 


// Adicionar validação para garantir que todos os valores são numéricos.

// Caso o tipo de algum parâmetro não seja `number`, rejeitamos a Promise

if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
  return reject(new Error('Informe apenas números'));
}

  // Validar se o resultado é maior que 50 e resolver ou rejeitar a Promise.
  const result = (a + b) * c;

  if (result < 50) {
    return reject(new Error('Valor muito baixo'));
  }

  resolve(result);
});
  // Chamar a função nas condições de entrada e verificar sua saída.

  async function firstResolve() {
    try {
      const resolve = await doMath(10, 10, 10);
      console.log(resolve);
    } catch (error) {
      console.log(error.message);
    }
  }
  firstResolve();

  async function secondResolve() {
    try {
      const resolve = await doMath(1, 1, 'a');
      console.log(resolve);
    } catch (error) {
      console.log(error.message);
    }
  }
  secondResolve();

  async function thirdResolve() {
    try {
      const resolve = await doMath(1, 1, 1);
      console.log(resolve);
    } catch (error) {
      console.log(error.message);
    }
  }
  thirdResolve();

}


