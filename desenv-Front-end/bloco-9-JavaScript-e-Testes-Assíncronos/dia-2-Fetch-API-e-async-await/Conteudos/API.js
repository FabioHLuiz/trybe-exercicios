// Application Programming Interface (API)

// Em resumo, uma API permite que aplicações se comuniquem umas com as outras, servindo de "ponte" para elas. Uma API não é um banco de dados ou um servidor, mas a responsável pelo controle dos pontos de acesso a eles, através de um conjunto de rotinas e padrões de programação.

// O que é JSON e por que o usamos?

// JSON significa JavaScript Object Notation e é basicamente uma forma de representarmos dados como objetos Javascript:

{
  "trybers": [
    {
      "name": "Lauro Cesar",
      "github": "lauroandrade",
      "status": "#vqv"
    }
  ]
}

// Perceba o quão legível é o formato JSON, já que nossos dados ficam guardados como pares de key/value. A key (chave) fica no lado esquerdo e o value (valor) no lado direito. No array trybers, podem ser adicionados vários outros objetos.

// Apesar do nome, ele não é um objeto JavaScript, apenas é estruturado de forma que faz uso de chaves e valores. Então, por não ser um objeto nativo do JavaScript, precisamos traduzir ele para que fique a par da linguagem que estamos usando. Para isso existe a função JSON.parse(), assim como existe a função JSON.stringify() que transforma uma estrutura JavaScript em string.

// Como utilizar APIs na minha aplicação?

// APIs podem incrementar as funcionalidades da sua aplicação e colocá-la em um outro patamar. Você pode adicionar mapas, receber dados sobre o tempo e outras informações úteis.

// Para utilizá-las siga as boas práticas a seguir:

// Encontre uma API pública, que seja bem documentada e mantida;

// Leia a documentação para ter certeza de que aquela API resolve o problema que você deseja solucionar;

// Entenda o formato dos dados disponíveis;

// Faça requests e receba responses da API com os dados que você deseja receber.

// Fazendo uma requisição a uma API

// Você pode fazer requisições a uma API de várias formas. Uma delas é no terminal.

// No exemplo a seguir, vamos fazer um request para uma API, que retorna um JSON como response.

wget 'https://pokeapi.co/api/v2/pokemon/ditto' -O - -q

// Relembrando o fluxo assíncrono

// Vamos relembrar rapidamente como funciona a ordem de execução de funções no javascript: as funções são lidas de cima para baixo e suas execuções são colocadas em uma fila. Assim, a primeira função lida é a primeira a ser executada. Quando sua execução termina, ela "entrega seu retorno", permitindo que o mesmo processo ocorra com a próxima função da fila.

// A função assíncrona é diferente! Quando o javascript lê uma função desse tipo, ela é enviada para uma área especial, e a fila síncrona continua correndo. Quando a função assíncrona termina sua execução, ela volta para a fila novamente para "entregar a resposta" de sua execução. Vale lembrar que a área especial das assíncronas não é muito ordenada, ou seja, a primeira função assíncrona que entra não é, necessariamente, a primeira a sair, já que depende do tempo de execução de cada uma. Grave essas informações, elas serão importantes para explicar alguns acontecimentos mais a frente!

// Com esse sistema de "filas", fica difícil colocar uma ordem nas funções assíncronas. Como fazer uma função executar somente depois de outra, se não existe uma ordem para sua execução? Para isso, as pessoas desenvolvedoras começaram a usar callbacks, o que era excelente a princípio. Porém, em alguns casos, a sequência de callbacks crescia de forma descontrolada, criando o famoso callback hell, que vimos anteriormente. Para contornar o problema, as callbacks deram lugar às Promises!
