// Para os próximos dois exercícios leia este artigo e tente entender o que está acontecendo no código abaixo:

// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

// Resposta:

// [
//   2, 3, 5, 8, 9,
//   19, 27, 35, 70, 100
// ]