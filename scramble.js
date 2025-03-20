const wordDisplay = document.querySelector(".word");
const inputWord = document.querySelector(".inputWord");
const btnStart = document.querySelector(".btnStart");
const btnVerify = document.querySelector(".btnVerify");
const message = document.querySelector(".message");


const scoreDisplay = document.createElement("div");
scoreDisplay.classList.add("score");
scoreDisplay.textContent = "Puntuación: 0";
document.querySelector(".gameArea").appendChild(scoreDisplay);

const wordsList = ["perro", "gato", "raton", "vaca", "mesa", "burro", "carro", "mariposa", "mosqueteros", "tempestad", "aguacate"]; 

let currentWord = "";
let score = 0; 
let attempts = 3; 

btnStart.addEventListener("click", function () {
    btnStart.style.display = "none"; 
    btnVerify.style.display = "inline-block"; 
    inputWord.style.display = "block"; 
    attempts = 3; 
    score = 0; 
    scoreDisplay.textContent = "Puntuación: " + score;
    iniciarJuego();
});

function iniciarJuego() {
    currentWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    wordDisplay.textContent = desordenarPalabra(currentWord);
    inputWord.value = "";
    message.textContent = ""; 
}

//Para verificar si es correcto o no
btnVerify.addEventListener("click", function () {
    if (inputWord.value.toLowerCase() === currentWord) {
        score++; 
        scoreDisplay.textContent = "Puntuación: " + score;
        message.textContent = "✅ ¡Correcto!";
        message.style.color = "green";
        attempts = 3; 
        setTimeout(iniciarJuego, 1000);
    } else {
        attempts--; 
        if (attempts > 0) {
            message.textContent = `❌ Incorrecto. Intentos restantes: ${attempts}`;
            message.style.color = "red";
        } else {
            message.textContent = "😢 Has perdido. ¡Reinicia el juego!";
            message.style.color = "red";
            btnVerify.style.display = "none"; // Ocultar botón de verificar
            btnStart.style.display = "inline-block"; // Mostrar botón de inicio
        }
    }
});

function desordenarPalabra(word) {
    return word.split("").sort(() => Math.random() - 0.5).join("");
}
