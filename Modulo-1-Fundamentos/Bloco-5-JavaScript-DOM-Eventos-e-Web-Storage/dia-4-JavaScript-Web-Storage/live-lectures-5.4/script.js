// 1. Para evitar a fadiga, vamos criar uma função que reseta a posição dos carros
// precisaremos fazer isso mais de uma vez
function resetCarPosition(redCar, greenCar) {
  redCar.style.marginLeft = 0;
  greenCar.style.marginLeft = 0;
}

function onClickAlternatives(event) {
  let clickedElementClass = event.target.className;

  let car1 = document.getElementById('car1');
  car1.className = 'car ' + clickedElementClass;
}

window.onload = function () {
  let alternatives = document.querySelector('.alternatives');
  alternatives.addEventListener('click', onClickAlternatives);

  let car1 = document.getElementById('car1');
  // 2. aplicar a mesma ideia para o car2
  let car2 = document.getElementById('car2');

  // 3. ao invés de alterarmos aqui a margem vamos usar a função lá de cima
  // car1.style.marginLeft = 0;
  // car2.style.marginLeft = 0;
  resetCarPosition(car1, car2);

  let startButton = document.querySelector('#start-race-btn');
  startButton.addEventListener('click', function (event) {
    car1.style.marginLeft = (parseInt(car1.style.marginLeft) + Math.random() * 100) + 'px'; //100px

    // 4. aplicar a mesma modificação para o car2
    car2.style.marginLeft = (parseInt(car2.style.marginLeft) + Math.random() * 100) + 'px'; //100px

    // 5. verificar se o car1 encontrou a extremidade da tela
    // DICA: podemos usar o window.innerWidth para obter o tamanho da tela 
    // se a margem esquerda do carro for maior que o tamanho da tela significa
    // que a tela acabou e portanto ele ganhou a corrida!
    if (parseInt(car1.style.marginLeft) >= window.innerWidth) {
      alert('Carro VERMELHO venceu!!!');
      // 6. após vencer precisamos voltar os carros para a posição inicial
      // para começar um novo jogo
      resetCarPosition(car1, car2);
    }

    // 7. Fazer o mesmo processo para o car2, caso ele ganhe...
    if (parseInt(car2.style.marginLeft) >= window.innerWidth) {
      alert('Carro VERDE venceu!!!');
      // 6. após vencer precisamos voltar os carros para a posição inicial
      // para começar um novo jogo
      resetCarPosition(car1, car2);
    }
  });
};