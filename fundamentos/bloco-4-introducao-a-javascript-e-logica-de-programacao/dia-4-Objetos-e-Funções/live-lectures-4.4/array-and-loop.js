let myArray = [34, 55, 27, 12, 97, 58];

console.log(myArray);
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);
// console.log(myArray[4]);
// console.log(myArray[5]);

// console.log(myArray.length);

// for (valor-inicial; condição-de-parada; incremento) {}
for (let index = 0; index < myArray.length; index += 1) {
  console.log(index, '-->', myArray[index]);
}

for (let value of myArray) {
  console.log(value);
}