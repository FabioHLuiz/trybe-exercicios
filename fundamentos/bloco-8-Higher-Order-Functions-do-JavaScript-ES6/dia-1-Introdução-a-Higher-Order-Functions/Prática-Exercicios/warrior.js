//   2 - Crie uma função que retorna o dano causado pelo warrior.

// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

// Solução:

// Primeiro Passo

// Vamos definir os valores de dano máximo e mínimo.

const warriorAttack = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = Math.floor(Math.random() *(minDmg * warrior.weaponDmg));
};

// Segundo Passo

// Se o valor da multiplicação for menor que o dano mínimo retornamos o dano mínimo, senão retornamos o dano máximo.

const warriorAttack = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = Math.floor(Math.random() *(minDmg * warrior.weaponDmg));
  const warriorDmg = maxDmg > minDmg ? maxDmg : minDmg;
  return warriorDmg;
};
