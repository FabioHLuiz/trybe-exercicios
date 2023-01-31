// Lendo arquivos com métodos assíncronos
// O método fornecido pelo módulo fs para leitura assíncrona de arquivos é o fs.readFile.Esse método possui diferentes formas de retornar a leitura de um arquivo.Neste caso, iremos utilizar o retorno de uma Promise que deve deixar nosso código muito mais legível.

//   Observação: Para utilizar as operações assíncronas do fs, precisamos alterar a importação do módulo fs para('fs').promises.Dessa forma, poderemos chamar as funções assíncronas para leitura e escrita de arquivos que retornarão Promises.

// Vamos ver como ficaria o código do nosso exemplo anterior, agora de forma assíncrona com o uso de Promises e funções async:

const fs = require('fs').promises;

async function main() {
  try {
    const data = await fs.readFile('./meu-arquivo.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main()

// Note que para podermos utilizar o async / await, precisamos criar uma função main e colocar nossa lógica dentro dela.Isso acontece porque o await só pode ser utilizado dentro de funções async.