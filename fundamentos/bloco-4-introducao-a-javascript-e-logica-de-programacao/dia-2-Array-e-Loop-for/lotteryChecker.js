// Nosso jogo
let jogoDoTulio = [20, 26, 19, 30, 33, 60];

// Jogo sorteado
// let number1 = Math.floor(Math.random() * 60) + 1;
// let number2 = Math.floor(Math.random() * 60) + 1;
// let number3 = Math.floor(Math.random() * 60) + 1;
// let number4 = Math.floor(Math.random() * 60) + 1;
// let number5 = Math.floor(Math.random() * 60) + 1;
// let number6 = Math.floor(Math.random() * 60) + 1;

// let megaSenaNumbers = [number1, number2, number3, number4, number5, number6];

let megaSenaNumbers = [];

for (let index = 0; index < 6; index += 1) {
  let randomNumber = Math.floor(Math.random() * 60) + 1;

  megaSenaNumbers.push(randomNumber);
}

// Quantidade de acertos
let numberOfHits = 0;

for (let index = 0; index < megaSenaNumbers.length; index += 1) {
  let drawNumber = megaSenaNumbers[index];
  // console.log('Número sorteado', drawNumber);

  for (let index2 = 0; index2 < jogoDoTulio.length; index2 += 1) {
    let studentNumber = jogoDoTulio[index2];
    // console.log('Número do Túlio', studentNumber);

    if (studentNumber === drawNumber) {
      numberOfHits += 1;
    }
  }
}

console.log('Jogo do Túlio', jogoDoTulio)
console.log('Jogo sorteado', megaSenaNumbers);
console.log('Acertos:', numberOfHits);