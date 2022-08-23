// 1. Onde vamos adicionar os elementos?
let container = document.querySelector('#first');

// 2. Qual é o elemento HTML que quero?
function createDivElement(classes) {
  let newDiv = document.createElement('div');
  newDiv.className = classes;

  return newDiv;
}

// 3. Como adiciono o elemento na estrutura HTML via JS?
// pai.appendChild(filho);
function addElementAsChild(element) {
  container.appendChild(createDivElement(element));
}

let features = ["big red circle", "medium yellow square", "small green circle"];

// for (let index = 0; index < features.length; index += 1) {
//   let classes = features[index];

//   addElementAsChild(classes);
// }

for (let feature of features) {
  addElementAsChild(feature);
}

// addElementAsChild("big red circle");
// addElementAsChild("medium yellow square");
// addElementAsChild("small green circle");

// container.appendChild(createDivElement("big red circle"));
// container.appendChild(createDivElement("medium yellow square"));
// container.appendChild(createDivElement("small green circle"));