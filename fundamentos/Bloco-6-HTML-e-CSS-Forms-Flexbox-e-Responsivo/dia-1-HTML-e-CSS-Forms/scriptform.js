// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().

function handleSubmit(event) {
  event.preventDefault();
}

// Primeiramente devemos criar uma função que será o segundo parâmetro do eventListener:

// Concorda que queremos que o botão esteja preparado para funcionar assim que abrirmos a página? Para isso colocaremos então o addEventListener dentro do window.onload.

window.onload = function () {
  const submitBtn = document.querySelector("#submit-btn");
  submitBtn.addEventListener("click", handleSubmit);
}

// Crie um botão que limpe as informações contidas nos campos no HTML;
// Vamos criar também as função responsável por limpar essas informações:

function clear() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
}

// Agora vamos habilitar essa função em nosso botão:

window.onload = function () {
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', clear);
  const submitBtn = document.querySelector('#submit-btn');
  submitBtn.addEventListener('click', handleSubmit);
};

// Esse exercício também faremos tanto no HTML quanto no Javascript, vamos começar pelo HTML que será bem simples. Lembra do nosso botão submit? Vamos definir que ele comece desabilitado:
// Agora vamos fazer a função responsável por habilitá-lo.

// Talvez o operador ! seja uma novidade para você. Então vamos explicar o que ele faz e como está funcionando nessa solução. Esse operador é chamado de "bang", e ele representa uma negação, ou seja, o contrário do retorno de alguma coisa. Se algo for verdadeiro ele retornará falso e vice-versa.

// No nosso código estamos dizendo que a propriedade disabled do submitBtn é igual a negação da propriedade checked da checkbox-concordo2. Sendo assim, se a checkbox estiver "checkada" nosso botão não estará desabilitado (estará habilitado). Massa, né? Esse operador será muito útil em sua vida como pessoa desenvolvedora.

function enableSubmit() {
  const submitBtn = document.querySelector('#submit-btn');
  const agreement = document.querySelector('#checkbox-concordo2');
  submitBtn.disabled = !agreement.checked;
}



// Assim como as demais, vamos adicionar essa função num addEventListener, porém com checkBoxes não usamos 'click' e sim 'change'


window.onload = function () {
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', clear);
  const submitBtn = document.querySelector('#submit-btn');
  submitBtn.addEventListener('click', handleSubmit);
  const agreement = document.querySelector('#checkbox-concordo2');
  agreement.addEventListener('change', enableSubmit);
};

// Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: 'Dados Inválidos'. Caso contrário, a mensagem 'Dados enviados

// Agora sim todos os campos estão criados como deveriam dentro do HTML, portanto esse exercício será feito somente no javascript. Primeiramente faremos a função que validará esses dados:


function textInputValidation() {
  const email = document.querySelector('#input-email').value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector('#nome-completo').value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.querySelector('#textarea-1').value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  }
  else {
    return true;
  }
}

// Agora vamos colocar ela dentro da nossa função handleSubmit que já está funcionando.

function handleSubmit(event) {
  event.preventDefault();
  const validation = textInputValidation();
  if (validation === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}