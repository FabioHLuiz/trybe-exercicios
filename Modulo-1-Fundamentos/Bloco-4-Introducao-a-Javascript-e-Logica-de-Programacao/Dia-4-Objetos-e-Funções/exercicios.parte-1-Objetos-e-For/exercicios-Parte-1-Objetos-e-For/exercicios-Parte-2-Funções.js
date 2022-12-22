// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara.

// verificaPalindrome('arara');

// Retorno esperado: true

// verificaPalindrome('desenvolvimento');

// Retorno esperado: false

const animal = (arara) => {

  for(let i = 0; i < arara.length / 2; i += 1)
  if(arara[i] != arara[arara.length - i - 1])

  return false;
  
  return true;
}
console.log(animal(`arara`));
console.log(animal(`reviver`));
console.log(animal(`palíndromo`));


// Uma maneira de resolver o exercício é utilizando um loop. Como podemos acessar a posição de uma string da mesma forma que acessamos um array, faça um loop para percorrer cada posição do array.

// Compare o caractere da posição index do loop com o caractere da última posição (length - 1) menos o valor do index. Dessa forma você conseguirá verificar se a sequência de caracteres na string é a mesma do início ao fim e do fim ao início.

function verificaPalindrome(word) {
  for(index in word) {
    if(word[index] != word[(word.length - 1) - index]) {
      return false;
    }
  }
  return true;
}
console.log(verificaPalindrome(`arara`));
console.log(verificaPalindrome(`reviver`));
console.log(verificaPalindrome(`palíndromo`));


// Outra forma de resolver o exercício é utilizando os métodos split, reverse e join. Primeiro o método split transformará a string em um array onde cada posição será uma letra da string. Depois o método reverse fará o array ficar de trás pra frente. Em seguida o método join faz com que todo o array vire uma string novamente.

// Com a string invertida, criamos uma condicional que diz se essa nova string é igual a string passada como parâmetro. Assim, saberemos se a palavra é palíndroma ou não.

function verificaPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome('arara')); //arara
console.log(verificaPalindrome('desenvolvimento')); //otnemivlovnesed




// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// Array de teste: [2, 3, 6, 7, 10, 1];.

// Valor esperado no retorno da função: 4.


const indiceDoMaior = (numeros) => {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }

  return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4