const fs = require('fs').promises; // Importando o modulo do promises, pois será usado

// A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome.Por exemplo: 1 - Homer Simpson.
async function readAllComAwait() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent); // Fazendo a conversão do arquivo
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`); // Mapeando para pegar o Id e o Name

  strings.forEach((string) => console.log(string));

};

// B - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado.Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.
async function getSimpsonsById(id) {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);
  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);
  if (!chosenSimpson) {
    throw new Error('id não encontrado');
  }
  return chosenSimpson
}

// C - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
async function filterSimpsons() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

// D - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, 
// contendo as personagens com id de 1 a 4.
async function createSimpsonsFamily() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const familyId = [1, 2, 3, 4];
  const simpsonsFamily = simpsons
  .filter((simpson) => familyId.includes(Number(simpson.id)));
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

// E - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
async function addNelsonFamily() {
  const fileContent = await fs
  .readFile('./simpsonsFamily.json', 'utf-8');
  
  const simpsonsFamily = JSON.parse(fileContent);
  simpsonsFamily.push({id: '8', name: 'Nelson Muntz'});
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
  
}

// F - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
async function replaceNelson() {
  const fileContent = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');
  const simpsonsWithMaggie = simpsonsWithoutNelson
  .concat([{ id: '15', name: 'Maggie Simpson'}]);

  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
  
}

// A função ,aim é apenas para termos um ponto de entrada centralizado para o nosso script
function main() {
  // readAllComAwait();
  // getSimpsonsById(3)
  // .then((simpson) => console.log(simpson));
  // filterSimpsons();
  // createSimpsonsFamily();
  // addNelsonFamily();
  replaceNelson();
}

main();