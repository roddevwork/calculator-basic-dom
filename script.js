//. variables Html
const h1 = document.querySelector('h1');
const spanImg = document.getElementById('spanImg');
const form = document.getElementById('form');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const btn = document.querySelector('#btnCalcular');
const mostrarResultadoSuma = document.querySelector('#resultadoSuma');
//.variables
const imgCalculator = document.createElement('img');
//
//.functions
function convertStringToNumber(string) {
  return parseInt(string);
}
//
function sumar(n1, n2) {
  return n1 + n2;
}
//
function inyectarResultado(result) {
  mostrarResultadoSuma.innerText = result;
}
//
function btnOnClick() {
  const valorInput1 = convertStringToNumber(input1.value);
  const valorInput2 = convertStringToNumber(input2.value);
  const result = sumar(valorInput1, valorInput2);
  inyectarResultado(result);
}
//.DOM
h1.innerText = 'Calculadora';
h1.getAttribute('class');
h1.setAttribute('class', 'title');
h1.classList.add('firstTitle');
h1.classList.remove('firstTitle');

imgCalculator.setAttribute('class', 'header__img');
imgCalculator.setAttribute('src', './img/calculator.png');
spanImg.appendChild(imgCalculator);
//
//. events
btn.addEventListener('click', btnOnClick);
//
