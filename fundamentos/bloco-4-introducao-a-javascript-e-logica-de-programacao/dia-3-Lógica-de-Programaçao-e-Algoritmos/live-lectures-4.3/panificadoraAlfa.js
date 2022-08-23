/**
 * 1- ​Uma padaria acaba de juntar um dinheirinho a mais e quer comprar um robô para otimizar uma tarefa, para isso, contrataram você, pessoa estudante da Trybe, para poder ajudar a criar esse algoritmo. 
 * 
 * Bora?​​ Crie a tela do login. 
 * 
 * Obs: Pensando que temos um lugar que salva dados e que a senha validada tem que bater com ‘1234’ e exibirá a mensagem “Acesso permitido” e caso contrário “Acesso negado”.
 * 
 * ​​Como salvar nosso login ? 
 * E a nossa senha ? 
 * Como exibo uma mensagem?​​
 */

// Entrada
let userName = 'renanlf';
let password = '1234';
let access;

// Processamento
if (userName === 'renanlf' && password === '1234') {
  console.log('Acesso permitido'); // Saída
  access = true;
} else {
  console.log('Acesso negado'); // Saída
  access = false;
}

// Saída
// a variável access
console.log('Saída: access =', access);
console.log('-------------------------');

/**
 * 2- Faça um programa que com determinada quantidade, adicione pães em uma sacola e exiba quantos pães foram adicionados, um por um, se o acesso for permitido.
 * Se não for permitido o acesso, não é possível acessar essa página​/
 * 
 * Como eu sei que o acesso está permitido ? 
 * Se tiver permitido, exibe os pães na sacola
 * Senão, mensagem de erro​​
 */

// Entrada
let amount = 6;
let bag = 0;
// Processamento
if (access === true) {
  // adicionar os pães na sacola
  for (let index = 0; index < amount; index += 1) {
    bag += 1;
    console.log('Quantidade de pães na sacola: ', bag);
  }

} else {
  console.log('não é possível acessar essa página');
}

// Saída