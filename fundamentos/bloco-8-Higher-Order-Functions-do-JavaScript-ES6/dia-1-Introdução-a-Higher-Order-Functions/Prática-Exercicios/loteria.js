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