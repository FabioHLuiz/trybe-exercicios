"use strict";
// ./volume.ts
// Exercício 6
// Crie um script para converter unidades de medida de volume:
// Esse script deverá se chamar volume.ts;
// Ele deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string
// Obs: atente-se à conversão de metros cúbicos, que deve ser realizada de 1000 em 1000.
const units6 = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
function convert5(value, fromUnit, toUnit) {
    const fromIndex = units5.indexOf(fromUnit);
    const toIndex = units5.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(1000, exponent);
}
