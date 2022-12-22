let switchColor = "rgb(0, 0, 0)"
const grade = document.getElementById("pixel-board");
const firtsColor = document.querySelector("#color-palette");
const pixel = document.querySelector("#pixel-board");
const btnClearBoard = document.getElementById("clear-board");

document.getElementsByClassName("color")[0].style.background = "black"
document.getElementsByClassName("color")[1].style.background = "red"
document.getElementsByClassName("color")[2].style.background = "blue"
document.getElementsByClassName("color")[3].style.background = "green"

for (let i = 0; i < 25; i += 1) {
  let quadrados = document.createElement("div");
  quadrados.className = "pixel";
  grade.appendChild(quadrados);
}

function clickcolor(event) {
  const selectedcolor = document.querySelector(".selected");
  selectedcolor.classList.remove("selected");
  event.target.classList.add("selected");
}
firtsColor.addEventListener("click", clickcolor);


function captur(event) {
  const quadrados = event.target;
  const capturColor = document.querySelector(".selected");
  capturColor.classList.remove("selected");
  quadrados.classList.add("selected");
  getComputedStyle(quadrados).backgroundColor;
  switchColor = getComputedStyle(quadrados).backgroundColor;
}
firtsColor.addEventListener("click", captur);

function paintquadrado(event) {
  const pintar = event.target;
  pintar.style.background = switchColor;
}
pixel.addEventListener("click", paintquadrado);

btnClearBoard.addEventListener("click", function (event) {
  const pixel = document.querySelectorAll(".pixel");
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = "white";
  }
})
