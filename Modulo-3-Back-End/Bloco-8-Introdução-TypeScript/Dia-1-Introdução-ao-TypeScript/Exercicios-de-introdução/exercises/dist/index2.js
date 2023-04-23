"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ex = __importStar(require("./exercises2"));
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
