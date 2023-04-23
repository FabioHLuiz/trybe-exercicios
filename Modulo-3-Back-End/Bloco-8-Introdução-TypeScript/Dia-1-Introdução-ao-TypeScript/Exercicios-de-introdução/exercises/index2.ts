import * as Ex from './exercises2';

console.log('A ÁREA DE UM:');

console.log(`- Losango de lado, D = 32cm e d = 18cm: ${Ex.getDiamondArea(32, 18)}cm²`);
console.log(`- Losango de lado, D = 200cm e d = 50cm: ${Ex.getDiamondArea(200, 50)}cm²`);
console.log(`- Losango de lado, D = 75cm e d = 25cm: ${Ex.getDiamondArea(75, 25)}cm²`);

console.log('A ÁREA DE UM:');

console.log(`- Trapézio que tem , B = 100cm, b = 70cm e altura = 50cm: ${Ex.getTrapezeArea(100, 70, 50)}cm²`);
console.log(`- Trapézio que tem , B = 75cm, b = 50cm e altura = 35cm: ${Ex.getTrapezeArea(75, 50, 35)}cm²`);
console.log(`- Trapézio que tem , B = 150cm, b = 120cm e altura = 80cm: ${Ex.getTrapezeArea(150, 120, 80)}cm²`);

console.log("A ÁREA DE UM:");

console.log(`- Círculo de raio 10cm: ${Ex.getCircleArea(10)}cm²`);
console.log(`- Círculo de raio 5cm: ${Ex.getCircleArea(5)}cm²`);
console.log(`- Círculo de raio 100cm: ${Ex.getCircleArea(100)}cm²`);