// Bônus

// Parte I

// 1 - Crie uma função que retorna o dano do dragão.

// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

// Solução:

// Primeiro Passo

// Faremos uma fórmula básica para o dano do dragão. Precisamos multiplicar um número aleatório pelo seu atributo strength para calcular o valor máximo. Vamos definir os dois valores de dano mínimo e máximo.

const dragonAttack = (dragon) => {
  const minDmg = 15;
  const maxDmg = Math.floor(Math.random() * dragon.strength);
};

// Segundo Passo

// Vamos adicionar nosso retorno. Caso nossa multiplicação seja menor do que 15, devemos retornar 15, senão retornamos o valor da multiplicação.

const dragonAttack = (dragon) => { const minDmg = 15; const maxDmg = Math.floor(Math.random() * dragon.strength);
  const dragonDmg = maxDmg > minDmg ? maxDmg : minDmg;
  return dragonDmg; };
