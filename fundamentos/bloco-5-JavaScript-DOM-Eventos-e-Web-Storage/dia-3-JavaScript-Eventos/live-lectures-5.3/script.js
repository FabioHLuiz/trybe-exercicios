// declaração da função
// receita do bolo
// function magicFunction() {
//     alert('Oi sumido');
// }

// chamando a função
// fazendo o bolo
// magicFunction();

// Função anônima
// let variavel = function() {
//     alert('Outra chamada');
// };

// variavel();

function onClickAlternatives(event) {
  let clickedElementClass = event.target.className;

  let car1 = document.getElementById('car1');
  car1.className = 'car ' + clickedElementClass;
}

window.onload = function () {
  let alternatives = document.querySelector('.alternatives');
  alternatives.addEventListener('click', onClickAlternatives);

  let car1 = document.getElementById('car1');
  car1.style.marginLeft = 0;

  let startButton = document.querySelector('#start-race-btn');
  startButton.addEventListener('click', function (event) {
    car1.style.marginLeft = (parseInt(car1.style.marginLeft) + Math.random() * 100) + 'px'; //100px
  });
};