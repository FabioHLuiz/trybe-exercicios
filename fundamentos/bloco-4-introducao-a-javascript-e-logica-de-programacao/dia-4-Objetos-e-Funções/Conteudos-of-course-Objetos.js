let singer = {
  nome: 'Milton',
  lastName: 'Nasciemnto',
  nickName: 'Bituca',
  age: 77,
  bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
  bornInfo: {
    city: 'Rio de Janeiro',
    state: 'Rio de Janeiro'
  }
};
console.log(`O cantor ${singer.nome} ${singer.lastName} possui ${singer.age} anos.`);
console.log(`O cantor ${singer.nome} ${singer.lastName} possui ${singer.age} anos.`);

singer ['fullName'] = `${singer.nome} ${singer.lastName}`;
console.table(singer);
console.log(`O cantor ${singer.nome} nasceu no estado do ${singer.bornInfo.state} na cidade do ${singer.bornInfo.city}`);

// Então, pessoal, como vocês viram, objetos são estruturas ou coleções compostas por pares chave-valor. Também é possível armazenar um objeto dentro de outro, ou até mesmo dentro de um array.

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

// Para acessar as chaves dentro de um objeto, temos duas formas:

// notação de ponto: car.type

// notação de colchetes: car[type]

// Se o objeto está dentro de um array, ele é acessado através do seu índice, da mesma forma que se acessaria uma informação num array de strings. As chaves de um objeto são armazenadas como strings e, para conseguir acessar propriedades nomeadas com números, como 0, por exemplo, só é possível usando a notação de colchetes. Se você usar a notação de ponto, um erro será retornado. Ao usar a notação de colchetes também é possível chamar variáveis que fazem relação com a chave que você quer acessar dentro desses colchetes.

// As chaves de um objeto são armazenadas como strings e, para conseguir acessar propriedades nomeadas com números, como 0, por exemplo, só é possível usando a notação de colchetes. Se você usar a notação de ponto, ocorre um erro. Ao usar a notação de colchetes também é possível chamar variáveis que fazem relação com a chave que você quer acessar dentro desses colchetes.

// Escreva os códigos abaixo no seu VSCode para acompanhar os resultados

let diasDaSemana = {
  : 'domingo',
  : 'segunda',
  : 'terça',
  : 'quarta',
  : 'quinta',
  : 'sexta',
  : 'sábado',
  };
  
  diasDaSemana.1; // SyntaxError: Unexpected number
  console.log(diasDaSemana['1']); // domingo

  // No código acima, ocorre um erro por usar notação de ponto ao invés de notação de colchetes com uma propriedade nomeada com número.

// Agora veja este exemplo:

let conta = {
  agencia: '0000',
  banco: {
    cod: '012',
    id: 4,
    nome: 'TrybeBank',
  },
};

let infoDoBanco = 'banco';
console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
console.log(conta[infoDoBanco]['nome']); // TrybeBank

console.log(conta.agencia); // 0000
console.log(conta['agencia']); // 0000

console.log(conta.banco.cod); // 012
console.log(conta['banco']['id']); // 4

// Neste exemplo, a chave banco do objeto conta, guarda um outro objeto, e também há o uso de variável na notação de colchetes, além de você poder ver exemplos usando notação de ponto e notação de colchetes.

// Neste outro exemplo, veja como vamos adicionar as informações de forma encadeada:

let usuario = {
  id: 99,
  email: 'jakeperalta@gmail.com',
  infoPessoal: {
    nome: 'Jake',
    sobrenome: 'Peralta',
    endereco: {
      rua: 'Smith Street',
      bairro: 'Brooklyn',
      cidade: 'Nova Iorque',
      estado: 'Nova Iorque',
    },
  },
};

console.log(usuario['id']); // 99
console.log(usuario.email); // jakeperalta@gmail.com

console.log(usuario.infoPessoal.endereco.rua); // Smith Street
console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

// O objeto deste exemplo possui a chave infoPessoal que possui outras 3 chaves, uma delas sendo endereco, que é outro objeto! Ou seja, o objeto usuario possui outros dois dentro dele.

// Agora, e se o nosso objeto está dentro de um array? Como acessamos as propriedades do objeto? Veja este exemplo:

let moradores = [
  {
    nome: 'Luiza',
    sobrenome: 'Guimarães',
    andar: 10,
    apartamento: 1005,
  },
  {
    nome: 'William',
    sobrenome: 'Albuquerque',
    andar: 5,
    apartamento: 502,
  },
  {
    nome: 'Murilo',
    sobrenome: 'Ferraz',
    andar: 8,
    apartamento: 804,
  },
  {
    nome: 'Zoey',
    sobrenome: 'Brooks',
    andar: 1,
    apartamento: 101,
  },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
console.log(primeiroMorador['andar']); // 10

let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); // Zoey

// Esse último bloco de código é um exemplo de um array composto por objetos. Os objetos desejados foram acessados através dos seus índices e armazenados dentro de variáveis para facilitar a compreensão.

// Perceba que o nome que escolhemos para a função é um nome composto, e para a escrita de nomes compostos em JavaScript existem algumas convenções. Uma delas é a kebab case, onde o nome fica separado por um traço. Apesar de ser uma convenção, não é uma boa prática de escrita, pois muitas linguagens interpretam o traço como um sinal de subtração, o que pode ocasionar bugs.

// Você se lembra das regras de nomeação de variáveis? As mesmas se aplicam aqui. O recomendado é usar nomes descritíveis para as propriedades, além de escrevê-las no estilo camelCase.

// ATENÇÃO: Não use o estilo de escrita kebab-case no JavaScript, isso não é uma boa prática porque o traço pode ser interpretado como um sinal de subtração. Use o estilo camelCase.

// Exemplos de escrita camelCase:
// nomeCompleto;
// cidadeNatal;
// tituloOriginal.

// Exemplos de escrita kebab-case:
// nome-completo;
// cidade-natal;
// titulo-original.
