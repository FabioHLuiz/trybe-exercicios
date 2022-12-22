// Nosso jogo
let jogoDoTulio = [20, 26, 19, 30, 33, 60];
let jogoDoFernando = [13, 20, 33, 42, 51, 57];

// Jogo sorteado
let megaSenaNumbers = [];

for (let index = 0; index < 6; index += 1) {
  let randomNumber = Math.floor(Math.random() * 60) + 1;

  megaSenaNumbers.push(randomNumber);
}

// Quantidade de acertos
let numberOfHits = 0;

function numerosSorteados(megaSenaNumbers, jogo) {
  for (let index = 0; index < megaSenaNumbers.length; index += 1) {
    let drawNumber = megaSenaNumbers[index];
    // console.log('Número sorteado', drawNumber);

    for (let index2 = 0; index2 < jogo.length; index2 += 1) {
      let studentNumber = jogo[index2];
      // console.log('Número do Túlio', studentNumber);

      if (studentNumber === drawNumber) {
        numberOfHits += 1;
      }
    }
  }

  return numberOfHits;
}


console.log('Jogo sorteado', megaSenaNumbers);

console.log('Jogo do Túlio', jogoDoTulio);
console.log('Acertos:', numerosSorteados(megaSenaNumbers, jogoDoTulio));

console.log('Jogo do Fernando', jogoDoFernando);
console.log('Acertos:', numerosSorteados(megaSenaNumbers, jogoDoFernando));