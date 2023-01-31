// Uma função async retorna uma promise, tal como o exemplo abaixo:

// function dividirNumeros(num1, num2) {
//   const promise = new Promise((resolve, reject) => {
//     if (num2 == 0)
//       reject(new Error("Não pode ser feito uma divisão por zero"));

//     const resultado = num1 / num2;
//     resolve(resultado)
//   });

//   return promise;
// }

// Contudo, quando você chama a função dividirNumeros com o prefixo await, a execução irá esperar até que a Promise seja resolvida ou rejeitada.

// Precisamos ter bastante atenção aqui 😳!A função que fizer a chamada da Promise dividirNumeros(ou qualquer outra função que retorne uma Promise) deve ser definida como async, conforme o exemplo a seguir:


// const doSomething = async () => {
//   console.log(await dividirNumeros(2,2));
// };

// Anota aí 🖊: Toda função na qual utilizamos async, passa automaticamente a retornar uma Promise, que será rejeitada em caso de erro, e resolvida em caso de sucesso.

// Como você pode ver no exemplo anterior, nosso código fica muito mais simples e legível.Além disso, os maiores benefícios surgirão quando o código for muito maior e mais complexo.

// As funções async podem ser encadeadas facilmente e, além disso, seu código será muito mais legível, se comparado ao uso de Promises.Veja o exemplo a seguir:

const promiseParaFazerAlgumaCoisa = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('Eu fiz alguma coisa'), 2000)
  })
}

const assistirAlguemFazendoAlgumaCoisa = async () => {
  const something = await promiseParaFazerAlgumaCoisa()
  return something + '\n e Eu vi você fazendo'
}

const AssistirAlguemAssistindoAlguemFazendoAlgumaCoisa = async () => {
  const something = await assistirAlguemFazendoAlgumaCoisa()
  return something + '\n e Eu também vi você vendo ele fazendo'
}

AssistirAlguemAssistindoAlguemFazendoAlgumaCoisa().then(res => {
  console.log(res)
})

// A função setTimeout() está sendo utilizada apenas para simular uma operação que irá demorar, neste caso, dois segundos para ser concluída.Se quiser conhecer um pouco mais sobre essa função, veja a documentação.