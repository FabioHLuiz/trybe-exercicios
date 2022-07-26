// let soma1 = 10;
// let soma2 = 15;

// let soma = soma1 + soma2;
// console.log(soma);

// let num1 = 33;
// let num2 = 15;

// let sub = num1 - num2;
// console.log(sub);

// let num1 = 5;
// let num2 = 8;

// let mult = num1 * num2;
// console.log(mult);

// let num1 = 81;
// let num2 = 9;

// let div = num1 / num2;
// console.log(div);

// let num1 = 63;
// let num2 = 117;

// let mod = ((num1 + num2) %2) === 0;
// console.log(mod);

// let num1 = 10;
// let num2 = 20;

// let maior = num1 > num2;
// console.log(maior);

// const a = 20;
// const b = 21;

// if( a > b ){
//   console.log(" a é maior que b ");
// } else {
//   console.log(" b é maior que a ");
// };
// const a = 25;
// const b = 30;
// const c = 35;

// if ( a > b && a > c) {
//   console.log("O maior número é: a ");
// } else if (b > a && b > c) {
//   console.log("O maior número e: b ");
// } else {
//   console.log("O maior número é: c ");
// };

// const param1 = 10;

// if ( param1 > 0) {
//   console.log ("positivo");
// } else if (param1 < 0) {
// console.log ("Negativo");
// } else {
//   console.log ("zero");
//  }

// let a = 65;
// let b = 85;
// let c = 35;

// let somadosangulos = a + b + c;

// let angulopositivo = a > 0 && b > 0 && c > 0;

// if (angulopositivo){
//   if (somadosangulos === 180){
//   console.log(true);
// } else {
//   console.log (false);
// };
// } else {
//   console.log("Erro: angulo inválido);

// const peçadexadrez = "cavalo";

// switch (peçadexadrez.toLowerCase()) {
//   case 'rei':
//     console.log('Rei-> Uma casa apenas para qualquer direção.');
//     break;
//   case 'bispo':
//     console.log('Bispo-> Diagonal.');
//     break;
//   case 'rainha':
//     console.log('Rainha-> Diagonal, horizontal e vertical.');
//     break;
//   case 'cavalo':
//     console.log('Cavalo -> "L" pode pular sobre as peças.');
//     break;
//   case 'torre':
//     console.log('Torre -> Horizontal e vertical.');
//     break;
//   case 'peão':
//     console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
//     break;
//   default:
//     console.log('Erro, peça inválida!');
//     break;
// };

//  const nota = "82";

//  if (nota < 0 || nota > 100) {
//   console.log("Erro, nota incorreta!");

// } else if (nota >= 90) {
//   console.log("A");

// } else if (nota >= 80) {
//   console.log("B");

// } else if (nota >= 70) {
//   console.log("C");

// } else if (nota >= 60) {
//   console.log("D");

// } else if (nota >= 50) {
//   console.log("E");
  
// } else {
//   console.log("F");
// }

const num1 = 11;
const num2 = 17;
const num3 = 21;

let par = false;

if ((num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0 )){
  par = true;
};
console.log(par);