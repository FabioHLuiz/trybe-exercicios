// Exercício 4
// Crie um script para converter unidades de medida de capacidade:

// Esse script deverá se chamar capacity.ts;
// Ele deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string

const units4 = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function convert3(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = units4.indexOf(fromUnit);
    const toIndex = units4.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
  
    return value * Math.pow(10, exponent);
}