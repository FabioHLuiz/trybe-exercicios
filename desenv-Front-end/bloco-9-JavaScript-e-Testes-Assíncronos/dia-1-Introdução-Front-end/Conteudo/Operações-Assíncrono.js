// Operações assíncronas

// Operações em JavaScript são tradicionalmente síncronas, ou seja, para que uma cadeia de operações seja realizada é necessário que uma operação termine para que outra comece. Em uma linha de produção de automóveis, por exemplo, várias etapas de produção são codependentes. Podemos relacionar essas etapas de produção às operações síncronas em JavaScript. Observe o exemplo abaixo para que essa analogia fique mais nítida:

console.log('1 - Receber roda');
console.log('2 - Encaixar parafusos');
console.log('3 - Fixar roda no carro');

// Note que existe uma ordem específica de etapas que não pode ser quebrada, pois uma afeta diretamente a outra. Sem roda, não adianta encaixar parafusos; sem encaixar parafusos, fixar a roda não é possível.

//////////////////////////////////////////////////////////////////////////////////////////

// Agora, imagine que o nosso estoque de parafusos está chegando ao fim, e que é necessário que façamos uma reposição para que a linha de produção não pare. No entanto, nossa operação não cobre esse tipo de situação e nossa linha de produção para enquanto uma pessoa funcionária irá comprar os parafusos e repor o estoque.

console.log('1 - Comprar parafusos');
console.log('2 - Adicionar ao estoque');
console.log('3 - Receber roda');
console.log('4 - Encaixar parafusos');
console.log('5 - Fixar roda no carro');

// Observe que estamos trabalhando de forma ineficiente e adicionando etapas desnecessárias à nossa produção, pois, se tivermos parafusos suficientes em estoque, não precisaremos parar a montagem para que mais parafusos sejam comprados e repostos. Assim como na nossa linha de produção, existem operações que não têm essa codependência em JavaScript e com o objetivo de cobrir justamente esse tipo de situação surgem as operações assíncronas.

//////////////////////////////////////////////////////////////////////////////////////////

// Rode em seu editor o código abaixo e veja como nossa linha de produção já não depende mais das etapas de compra de parafusos e de reposição do estoque.

// Não se preocupe com o código em si, falaremos da função setTimeout logo mais! 😉

// linhaDeProducao.js

const TWO_SECONDS = 2000;

setTimeout(() => {
  console.log('Comprar parafusos'); // Comprar parafusos
  console.log('Adicionar ao estoque'); // Adicionar ao estoque
}, TWO_SECONDS);

console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// Saída:
// 1 - Receber roda
// 2 - Encaixar parafusos
// 3 - Fixar roda no carro
// Comprar parafusos
// Adicionar ao estoque

// Note que console.log('Comprar parafusos') e console.log('Adicionar ao estoque') foram declarados antes das etapas 1, 2 e 3, e mesmo assim o retorno das chamadas só ocorre ao final, isso acontece porque utilizamos a função setTimeout. É muito comum que essa função seja utilizada para simular comportamentos assíncronos.

//////////////////////////////////////////////////////////////////////