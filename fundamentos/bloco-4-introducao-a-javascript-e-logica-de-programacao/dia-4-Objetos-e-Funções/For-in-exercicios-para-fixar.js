// Para fixar

// No exemplo acima, utilizamos o for/of para percorrer o nosso iterável e nos retornar o valor dos índices.

// Agora que você já sabe a diferença entre eles e como usá-los, vamos praticar?

// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for (let salve in names) {
//   console.log(`Olá, ${names[salve]}`);
// }


// 2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let valores in car) {
  console.log(`valores ${car[valores]}`);
}