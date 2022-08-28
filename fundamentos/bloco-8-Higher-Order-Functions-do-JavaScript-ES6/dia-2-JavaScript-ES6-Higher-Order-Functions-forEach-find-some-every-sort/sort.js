const score = [10, 4, 23, 45, 102, 2, 0];

// FUNÇÃO sort: ordena os elementos de um array e retorna o próprio array, sem a obrigatoriedade de função callback - mas, recomendada. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

score.sort();

console.log(score);

score.sort((a, b) => {
  return b - a;
});

console.log(score);

const ordenaDecrescente = (a, b) => {
  if (a > b) {
    return -1;
  }

  if (a < b) {
    return 1;
  }

  return 0;
}

score.sort(ordenaDecrescente);
console.log(score);