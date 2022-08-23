// EXEMPLO 1
let estudante1 = [10, 9, 8, 10];
let estudante2 = [9, 8, 10, 8];
let estudante3 = [10, 7, 7, 8];

function average(est) {
  let media = 0;

  for (let index = 0; index < est.length; index += 1) {
    media += est[index];
  }

  let med = media / est.length

  return med;
}

let result = average(estudante1);

if (result < 7) {
  console.log('Deu ruim');
} else {
  console.log('Deu bom');
}

console.log(average(estudante1));
// console.log(average(estudante2));
// console.log(average(estudante3));

// ----------

// media = 0;

// for (let index = 0; index < estudante2.length; index += 1) {
//   media += estudante2[index];
// }

// console.log(media / estudante2.length);


// EXEMPLO 2
function max(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(max(32, 25));

// EXEMPLO 3
let myArray = [];

function generateArray() {
  for (let index = 1; index <= 100; index += 1) {
    myArray.push(index);
  }

  return myArray;
}

console.log(generateArray());