"use strict";
// Exercício 5
// Crie um script para converter unidades de medida de área:
// Esse script deverá se chamar area.ts;
// Ele script deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string
// Obs: atente-se à conversão de metros quadrados, que deve ser realizada de 100 em 100.
// ./area.ts
const units5 = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
function convert4(value, fromUnit, toUnit) {
    const fromIndex = units5.indexOf(fromUnit);
    const toIndex = units5.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(100, exponent);
}
