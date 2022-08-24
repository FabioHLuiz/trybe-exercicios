const { saudacao, manha, tarde, noite } = require('./script');

// 3 testes dentro de um bloco de teste
// cada teste vai verificar se vai retornar a frase do turno com o nome da pessoa

describe('Testes referentes à função saudacao', () => {

  it('Testa se a função saudacao funciona corretamente usando como parâmetro o turno da noite', () => {
    expect(saudacao('Saulo', noite)).toBe('Olá Saulo, boa noite!');
  });

  it('Testa se a função saudacao funciona corretamente usando como parâmetro o turno da tarde', () => {
    expect(saudacao('Yago', tarde)).toBe('Olá Yago, boa tarde!');
  });

  it('Testa se a função saudacao funciona corretamente usando como parâmetro o turno da manhã', () => {
    expect(saudacao('Lucas', manha)).toBe('Olá Lucas, bom dia!');
  });

}); 