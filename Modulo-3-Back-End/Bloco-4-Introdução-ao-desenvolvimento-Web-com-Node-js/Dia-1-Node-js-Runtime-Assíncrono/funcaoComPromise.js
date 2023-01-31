// Exemplo 2: Tratando erros de forma assíncrona.

function dividirNumeros(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0)
      reject(new Error("Não pode ser feito uma divisão por zero"));

    const resultado = num1 / num2;
    resolve(resultado)
  });

  return promise;
}

dividirNumeros(2, 1)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));

//   No exemplo 2, note que a função dividirNumeros retorna uma Promise, ou seja, ela promete que vai dividir os números.Caso não consiga realizar a divisão, ela rejeita essa promessa, utilizando a função reject.Caso ocorra tudo certo, ela resolve a promessa, utilizando a função resolve.

// As Promises foram introduzidas para resolver o famoso problema do Callback Hell, mas elas introduziram uma certa complexidade de execução e sintaxe do código.Por esse motivo, em 2017 o JavaScript trouxe uma nova forma para trabalhar com operações assíncronas de forma mais simples: as funções async / await.