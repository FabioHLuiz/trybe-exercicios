// Exercício 1
// 🚀 Crie um código para calcular o índice de massa corporal(IMC) de uma pessoa.

const readline = require('readline-sync');

const imc = (kg, alt) => {
  console.log(`kg: ${kg}, alt: ${alt}`);

  const inMetros = alt / 100;
  const calc = inMetros ** 2; // ** exponeciação = potência

  const bmi = kg / calc;

  return bmi;
}

// Exercicio 5
const BMI_MAX_AND_MIN = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
  },
};

const handleBMIResult = (bmi) => {
  const statuses = Object.keys(BMI_MAX_AND_MIN); // ['Underweight', 'Normal Weight', 'Overweight'...]

  const resultFind = statuses.find((status) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status]; // acessamos as informações do intervalo da situação iterada

    // caso esteja dentro do intervalo, significa que encontramos a situação apropriada
    return bmi >= minBMI && bmi <= maxBMI;
  });

  return resultFind;
}

const main = () => {

  const kilos = readline.questionFloat('Qual seu peso ? (kg)');
  const altura = readline.questionInt('Qual sua altura ? (cm)');

  const bmi = imc(kilos, altura);
  const bmiResult = handleBMIResult(bmi);

  console.log(`Estado: ${bmiResult}`);
  console.log(`BMI: ${bmi.toFixed(2)}`);  //toFixed 2 casas após a virgula
}

main();

// Exercício 2
// 🚀 Agora, permita que o código seja executado através do comando npm run bmi.

// O novo código criado deve conter o comando que chama o node para executar o arquivo bmi.js.

// Edite o arquivo package.json para adicionar o novo script com a chave bmi e valor node bmi.js:

// "scripts": {
//   "bmi": "node bmi.js"
// },

// Exercício 3

// 🚀 Chegou a hora de tornar nosso código mais interativo! Vamos adicionar inputs de entrada para quem usar.

// Instale o pacote readline - sync:

// Importe o readline - sync no arquivo bmi.js e substitua os valores das variáveis weight e height por perguntas à pessoa que executou o script.Utilizaremos o método questionInt do pacote readline - sync:

// Exercício 4

// 🚀 Agora temos um problema, o peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.

//   Obs.Da forma como está, ao inserirmos um valor como 60.99 para o peso, ele é transformado no número inteiro 60, comprometendo o resultado.

// Encontre, na documentação do readline - sync, a função questionFloat;

// Altere o código da função main para que em vez de questionInt, passe a utilizar a função questionFloat ao solicitar o peso da pessoa:

// const weight = readline.questionFloat('What\'s your weight? (kg) ');

// Exercício 5
// 🚀 Vamos sofisticar um pouco mais nosso exercício.Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:

// Aqui nós temos a opção de fazer uma série de verificações com if, para saber em que situação se encontra o IMC calculado.Porém, a utilização de muitos ifs pode aumentar bastante a complexidade ciclomática do código.Sendo assim, resolveremos de outra maneira.Mas, a título de exemplo, a solução com if seria a inclusão de um código como esse:

// const BMI_MAX_AND_MIN = {
//   'Underweight': {
//     minBMI: 0,
//     maxBMI: 18.4,
//   },
//   'Normal Weight': {
//     minBMI: 18.5,
//     maxBMI: 24.9,
//   },
//   'Overweight': {
//     minBMI: 25,
//     maxBMI: 29.9,
//   },
//   'Obese Class I': {
//     minBMI: 30.0,
//     maxBMI: 34.9,
//   },
//   'Obese Class II': {
//     minBMI: 35,
//     maxBMI: 39.9,
//   },
//   'Obese Class III': {
//     minBMI: 40,
//     maxBMI: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
//   },
// };

// Agora que temos as relações entre as situações e os IMCs máximos / mínimos mapeadas, podemos verificar para cada chave(situação) do objeto BMI_MAX_AND_MIN, onde o IMC calculado se encontra.Para isto, vamos criar uma função chamada handleBMIResult, na qual primeiramente extrairemos as chaves do objeto BMI_MAX_AND_MIN.Em seguida, iremos iterar no array em que as as chaves são listadas e utilizar o find para encontrar a situação cujo intervalo compreenda o IMC Calculado.

// const statuses = Object.keys(BMI_MAX_AND_MIN); // ['Underweight', 'Normal Weight', 'Overweight'...]

// const resultFind = statuses.find((status) => {
//   const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status]; // acessamos as informações do intervalo da situação iterada

  // caso esteja dentro do intervalo, significa que encontramos a situação apropriada
//   return bmi >= minBMI && bmi <= maxBMI;
// });

// return resultFind;
// }

// Para finalizar, executaremos a handleBMIResult e mostraremos o seu resultado na função main, no console.

// const bmiResult = handleBMIResult(bmi);
// console.log(`bmiResult`);