const numbers = [2, 6, 9, 15, 3, 20, 41, 305];

// Crie um novo array que contenha cada elemento de 'numbers' multiplicado por 3.


// O forEach abaixo resgata cada (elemento) do meu array e multiplica por 3
// Então (forEach-para cada) elemnto de (numbers-array) foi multiplicado por 3

numbers.forEach((elemento) => {
  console.log(elemento * 3);
})

// Trazendo só o indice como retorno

numbers.forEach((elemento, indice) => {
  console.log(indice);
})

// Trazendo só o array como retorno

numbers.forEach((elemento, indice, array) => {
  console.log(array);
})

//////////////////////////////////////////////////////////////////////////////////////////////////

const numbers = [2, 6, 9, 15, 3, 20, 41, 305];

// Crie um novo array que contenha cada elemento de 'numbers' multiplicado por 3.

const newArray = [];


numbers.forEach((valor) => {
  newArray.push(valor * 3);
})
// FUNÇÃO forEach: executa uma lógica a cada elemento de um array.


console.log(newArray);

// Cada uma das opções dentro do forEach abaixo representa algo de um array, sendo assim o primiero paramentro (valor) representa o valor dentro do array sendo de uso obrigatório a primeira posição o nome não importa pode ser qualquer um ele sempre será o valor do array, o segundo paramentro representado por (indice) significa a posição dentro do array começando a partir do 0 o terceiro valor chamado (array) representa o array todo sendo seu uso opcional também.

numbers.forEach((elemento, indice, array) => { 
})
