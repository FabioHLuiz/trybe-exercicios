"use strict";
//Exercicios 3
// Crie um script para converter unidades de medida de massa:
// Esse script deverá se chamar mass.ts;
// Ele deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string
const units3 = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function convert2(value, fromUnit, toUnit) {
    const fromIndex = units3.indexOf(fromUnit);
    const toIndex = units3.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(10, exponent);
}
