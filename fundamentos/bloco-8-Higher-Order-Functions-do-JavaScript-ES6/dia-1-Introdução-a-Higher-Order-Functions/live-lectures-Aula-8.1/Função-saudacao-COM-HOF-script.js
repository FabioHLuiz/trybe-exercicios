// O que já sabemos
// Transformar saudacao numa HOF

const saudacao = (nome) => {
  return `Olá ${nome}, tudo bem?`;
  const saudacao = (nome, turno) => {
    return turno(nome);
  }
}



// Funções das saudações personalizadas

const manha = (nome) => {
  const tarde = (nome) => {

    const noite = (nome) => {
      return `Olá ${nome}, boa noite!`;
    }
  }
};

// chamar a HOF
console.log(saudacao('Ricardo', tarde));
console.log(saudacao('Vitor', manha));
console.log(saudacao('Sumo', noite));

module.exports = {saudacao, manha, tarde, noite};