// Escrevendo dados em arquivos
// Escrever dados em arquivos é um processo bem parecido com a leitura de dados! Assim como o módulo('fs').promises disponibiliza o método readFile para a leitura, há também o método writeFile para a escrita.

//   my - node - project / writeFile.js

const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()

// Rode o script com node writeFile.js e repare que o conteúdo do meu - arquivo.txt foi alterado para “Meu textão”.

// Anota aí 🖊: No writeFile, assim como ocorre no readFile, você pode especificar algumas opções na escrita de arquivos passando um terceiro parâmetro(flag) opcional em seus métodos.

// A opção flag especifica como o arquivo deve ser aberto e manipulado.O padrão é 'w', que especifica que o arquivo deve ser aberto para escrita.
//   Observação: Se o arquivo não existir, ele é criado.Caso contrário, é reescrito, ou seja, tem seu conteúdo apagado antes de o novo conteúdo ser escrito.A flag 'wx', por exemplo, funciona como 'w', mas lança um erro caso o arquivo já exista.