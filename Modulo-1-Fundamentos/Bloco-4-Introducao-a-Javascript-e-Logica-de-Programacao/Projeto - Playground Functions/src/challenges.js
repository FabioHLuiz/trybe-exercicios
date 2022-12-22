/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
// Desafio 1
function compareTrue(animal1, animal2) {
  if (animal1 === true && animal2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(trybe) {
  let separar = trybe.split(' ');
  return separar;
}
// Desafio 4
function concatName(array) {
  let firstName = array[0];
  let lastName = array[array.length - 1];
  let concat = `${lastName}, ${firstName}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victory = (wins * 3) + ties * 1;

  return victory;
}

// Desafio 6
function highestCount(maior) {
  let repeat = maior[0];
  let final = 0;

  for (let i = 0; i < maior.length; i += 1) {
    if (maior[i] > repeat) {
      repeat = maior[i];
    }
  }
  for (let i = 0; i < maior.length; i += 1) {
    if (repeat === maior[i]) {
      final += 1;
    }
  }
  return final;
}
// Desafio 7

// https://www.youtube.com/watch?v=F26OCFOvMPU&t=19s

function catAndMouse(mouse, cat1, cat2) {
  let definition = 'os gatos trombam e o rato foge';
  if (Math.abs(mouse - cat1) < (Math.abs(mouse - cat2))) {
    return 'cat1';
  } if (Math.abs(mouse - cat1) > (Math.abs(mouse - cat2))) {
    definition = 'cat2';
  }
  return definition;
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      result.push('fizz');
    } else if (array[i] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  } return result;
}

// Desafio 9

// https://www.youtube.com/watch?v=UShV_TFxs_A
// https://www.w3schools.com/js/js_string_methods.asp

function encode(frase) {
  let troca = frase;
  troca = troca.replace(/a/g, '1');
  troca = troca.replace(/e/g, '2');
  troca = troca.replace(/i/g, '3');
  troca = troca.replace(/o/g, '4');
  troca = troca.replace(/u/g, '5');

  return troca;
}

function decode(trocando) {
  let mudar = trocando;
  mudar = mudar.replace(/1/g, 'a');
  mudar = mudar.replace(/2/g, 'e');
  mudar = mudar.replace(/3/g, 'i');
  mudar = mudar.replace(/4/g, 'o');
  mudar = mudar.replace(/5/g, 'u');

  return mudar;
}

// Desafio 10

function techList(tech, name) {

  if (tech.length === 0) {
    // eslint-disable-next-line quotes
    return "Vazio!";
  }

  let lista = [];
  tech.sort();
  for (let i = 0; i < tech.length; i += 1) {
    lista.push({ name: name, tech: tech[i] });
  }
  return lista;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
