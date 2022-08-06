// 1 °Adicionar o array;

let fruits = [3, 4, 10, 1, 12];

// 2°Criar uma variável com valor 0;

let sum = 0;

// 3° Criar um loop que percorre o array;

for(let i =0; i < fruits.length; i += 1) {

//  4° Incrementar a variável com o valor correspondente a cada loop;

  sum += fruits[i];
}

// 5° Criar um if com a condição da váriavel ser maior que 15;

if (sum > 15) {

//  6° Caso a varíavel obedeça a condição: Imprimir a varíavel;

  console.log(sum);
} else {

// 7° Caso não obedeça a condição: Imprimir a mensagem “valor menor que 16”;

  console.log("Valor menor que 16");
}