// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const newEmployees = (nomeAdress) => {
  const employees = { 
   
     id1: nomeAdress('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas

     id2: nomeAdress('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas

     id3: nomeAdress('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas

     
    
    
  };
  return employees;
  
};

const nomeAdress = (nomeCompleto) => {
const email = nomeCompleto.toLowerCase().split(' ').join('_');
return {nomeCompleto, email: `${email}@betrybe.com`};
}

console.log(newEmployees(nomeAdress));

// .toLowerCase = passa todas as letras para minuscula
// .split = ela separa cada uma das palvras 
// .join = ela junta as palvras 


// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const sorteio = (num1, num2) => num1 === num2;

const loteria = (num1, callback) => {
  const num2 = Math.floor((Math.random() * 5) + 1);
  return callback(num1, num2) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(loteria(1, sorteio));

// return callback(num1, num2) ? 'Parabéns você ganhou' : 'Tente novamente';
// Se você por acaso não comprendeu a sintaxe com ? e : não se preocupe. Este tipo de validação é conhecido como "operador ternário" e é uma alternativa para se realizar uma validação if, else onde ? é equivalente ao if e : ao else. Desta forma, o que está acontecendo é: O retorno da função sorteio é verdadeiro ? se sim retorne 'Parabéns você ganhou', se não :, retorne 'Tente novamente'

// Math.floor((Math.random() * 5) + 1); = gera um numero aleatório de 1 a 5



// 3 - Crie uma HOF que receberá três parâmetros:

// O primeiro será um array de respostas corretas (Gabarito);

// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:

// Uma resposta correta adiciona 1 ponto à pontuação final;

// A ausência de uma resposta não altera a pontuação (quando for "N.A");

// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];