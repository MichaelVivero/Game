const gameArea = document.querySelector(".gameArea"); //Creamos el contenedor del area del juego
const btnEmpezar = document.createElement("button"); //Boton de Iniciar el juego

//creamos el contenedor de las palabras
const output = document.createElement("div");

//creamos el texto del buton    
btnEmpezar.textContent = "Iniciar Juego";
console.log(btnEmpezar);

//creamos el texto del contenedor de las palabras
output.textContent = "Click en el boton para Empezar";
console.log(output);

// Agregar a la pagina del Html
gameArea.appendChild(output);
gameArea.appendChild(btnEmpezar);

// Valores Iniciales del juego
const Level = 1;

const wordsList1 = ["perro", "gato", "raton", "vaca", "mesa", "burro", "carro"];
const wordsList2 = ["mariposa", "cucarachon", "carretera", "mosqueteros", "tempestad", "tamarindo", "aguacate"];
const wordsList3 = [];


// Evento de Click del boton Empezar

btnEmpezar.addEventListener("click", function(e) {
    wordsList1.sort(() => {
        return 0.5 - Math.random();
    }); // Lista de las palabras
    let selWord

    if (Level == 1) {
        selWord = wordsList1[0];
      } else if (Level == 2){
        selWord = wordsList2[0]; 
      } else if (Level == 3){
        selWord = wordsList3[0];
    }
    

    output.textContent = selWord;
    console.log(orden);
})