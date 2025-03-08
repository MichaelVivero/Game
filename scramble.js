const gameArea = document.querySelector(".gameArea"); //Creamos el contenedor del area del juego
const btnEmpezar = document.createElement("button"); //Boton de Iniciar el juego

btnEmpezar.textContent = "Iniciar Juego";
console.log(btnEmpezar);

// Agregar a la pagina del Html
gameArea.appendChild(btnEmpezar);

// Valores Iniciales del juego
const wordsList1 = ["perro", "gato", "raton", "vaca", "mesa", "burro", "carro"]