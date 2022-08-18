// Para fixar

// No exemplo acima, utilizamos o for/of para percorrer o nosso iterável e nos retornar o valor dos índices.

// Agora que você já sabe a diferença entre eles e como usá-los, vamos praticar?

// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let salve in names) {
  console.log(`Olá, ${names[salve]}`);
}


// 2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let valores in car) {
  console.log(`valores ${car[valores]}`);
}





// ROLE PARA BAIXO.


let bolo = {
  massa: `Chocolate`,
  recheio: `Morango`,
  cobertura: `Ninho`,
  peso: `2kg`
};

// Com o for/in

// a. A variável key representa as chaves do objeto bolo
 
for (let key in bolo) {
  console.log(key);
}

// b. Mas quando imprimimos bolo[key], conseguimos acessar o valor que está em cada chave de bolo. Obs.: não é possivel fazer a mesma operação utilizando bolo.key 

for (let key in bolo) {
  console.log(bolo[key]);
}

// c. E se quiséssemos unificar as duas informações para uma saida mais legivel


for (let key in bolo) {
  console.log(key + `:` + bolo[key]);
}
