// Crie um código que exiba o valor dos n primeiros elementos da sequência de Fibonacci.

// A sequência de Fibonacci começa com 0 e 1 e os números seguintes são sempre a soma dos dois números anteriores.

// Armazene o código no arquivo fibonacci.js.
// Utilize o readline - sync para realizar o input de dados.
// O código deve ser acionado através do comando npm run fibonacci.
// Não imprima o valor 0, uma vez que ele não está incluso na sequência.
// Quando n = 10, exatamente 10 elementos devem ser exibidos.
// Adicione validações para garantir que o valor informado é um inteiro maior que 0.
// Solução

// Criar o arquivo fibonacci.js:

const readline = require('readline-sync');

function handleFibonacci(quantity) {
  // a armazena o último número que calculamos
  let a = 1;
  // b armazena o penúltimo número que calculamos
  let b = 1;

  // Repetimos o loop enquanto `n` for maior que 0
  for (let n = quantity; n >= 0; n -= 1) {
    if (b) console.log(b);
    // Armazenamos o último valor calculado em uma variável temporária
    const temp = a;
    // Para calcular o novo valor, somamos o último valor com o penúltimo valor
    // O novo valor é armazenado em `a`, já que ele passa a ser o último valor calculado
    a += b;
    // O valor antigo de `a`, que estava armazenado na variável temporária
    // agora se torna o penúltimo número e, por isso, é armazenado em `b`
    b = temp;
  }

  console.log(b);
  return b;
}

function main() {
  const n = readline.questionInt('Enter \'n\' value: ');

  if (n <= 0) {
    console.log('Enter a number greater then \'0\'!');
    return;
  }

  console.log(`n: ${n}`);

  handleFibonacci(n - 2);
}

main();