// let statusCarros = 'desligado';
// let aceleracao = 0;
// let rotacaoDoVolante = 0;

// const ligarDesligar = () => {
//   if (statusCarros === 'desligado') {
//     statusCarros = 'ligado';
//   } else {
//     statusCarros = 'desligado';
//   }
//   return statusCarros;
// }
// console.log(ligarDesligar());

// const acelerar = (incremento) => {
//   aceleracao = aceleracao + incremento;

//   return 'Acelerando a ' + aceleracao + 'm/s²';
// }
// console.log(acelerar(30));

// const frear = (decremento) => {
//   aceleracao = aceleracao - decremento;

//   return 'Desacelerando para' + aceleracao + 'm/s²';
// }
// console.log(frear(5));

// const girarVolante = (anguloRotacao) => {
//   rotacaoDoVolante = anguloRotacao;

//   return rotacaoDoVolante + 'º';
// }
// console.log(girarVolante(0));

// ligarDesligar();
// acelerar(20);
// girarVolante(-45);
// frear(5);
// girarVolante(0);
// frear(15);
// ligarDesligar();


// Como foi visto, é possível criar funções que recebem ou não parâmetros. E, para decidir se a sua função precisa ou não deles, você deve pensar em sua lógica.
// Por exemplo, se a função tiver o objetivo de cumprimentar a pessoa que está executando o programa pelo nome, tal como: "Bom dia, João!", ela vai precisar receber o nome da pessoa como parâmetro. Porém, se ela foi desenvolvida apenas para dar "Bom dia!", um parâmetro não é necessário.
// Veja o exemplo abaixo:


// Sem função
// let nome = 'João';

// console.log('Bom dia, ' + nome);


// // Com função
// function bomDiaTryber(nome) {
//   console.log('Bom dia, ' + nome);
// }

// bomDiaTryber('João'); // Bom dia, João
// bomDiaTryber('Julia'); // Bom dia, Julia
// bomDiaTryber('Marcelo'); // Bom dia, Marcelo

// Com base nesse exemplo, se você optasse por não usar função e precisasse dar bom dia para pessoas diferentes várias vezes durante o código, teria que estar sempre mudando o valor da variável nome e sempre escrevendo a mesma mensagem, o que pode acabar gerando erros de digitação e causar erros na sua aplicação.
// Veja dois exemplos de funções sem parâmetros:

// function bomDia() {
//   return 'Bom dia!';
// }

// console.log(bomDia()); // Bom dia!

// let status = 'deslogado';

// function logarDeslogar() {
//   if (status === 'deslogado') {
//     status = 'logado';
//   } else {
//     status = 'deslogado';
//   }
// }

// console.log(status); // deslogado

// logarDeslogar();
// console.log(status); // logado

// logarDeslogar();
// console.log(status); // deslogado

// console.log('O usuário está ' + status); // O usuário está deslogado

// E agora exemplos de funções usando parâmetros:

// Exemplo 1
// Com função

// function soma(a, b) {
//   return a + b;
// }

// console.log(soma(5, 2)); // 7

// Exemplo 2

// function maiorNum(primeiroNum, segundoNum) {
//   if (primeiroNum > segundoNum) {
//     return primeiroNum + ' é maior que ' + segundoNum;
//   } else if (segundoNum > primeiroNum) {
//     return segundoNum + ' é maior que ' + primeiroNum;
//   } else {
//     return 'Os números são iguais';
//   }
// }

// console.log(maiorNum(10, 20)); // 20 é maior que 10
// console.log(maiorNum(2, -5)); // 2 é maior que -5
// console.log(maiorNum(1, 1)); // Os números são iguais