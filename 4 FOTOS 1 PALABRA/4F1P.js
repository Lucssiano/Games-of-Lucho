// ### VARIABLES ###

// Palabras de los distintos niveles
var words = ["COMPARAR", "ALEMANIA", "MEZCLA"];
// Palabra del nivel
var levelWord = "";
// Guiones que representan la palabra indicada
var hyphens = [];
// Habilitación para ganar el juego
var test;
// Contador para cambiar de nivel y palabra
var contN = 0;
// Variable para el audio de fondo
var backgroundMusic = document.createElement("audio");
// Variable para el sonido cuando se gana
var winSound = document.createElement("audio");
// Indico el archivo de audio a cargar a la variable winSound
winSound.setAttribute("src", "../sonidos/ganador.mp3");
// Indico el archivo de audio a cargar a la variable backgroundMusic
backgroundMusic.setAttribute("src", "../sonidos/musica-fondo.mp3");
backgroundMusic.setAttribute("loop", "true");
// Habilitación para el audio
var audioH = "";
// Palabra para la habilitación del audio
const enabled = ["h"];


// ### FUNCIONES ###

// Función para iniciar el juego
function start() {
  document.querySelector(".sounds").style.visibility = "visible";
  document.getElementById("start-button").style.visibility = "hidden";
  document.getElementById("buttons-letters").style.visibility = "visible";
  document.querySelector(".grid-images").style.visibility = "visible";
  document.querySelector(".level").style.visibility = "visible";
  if (contN === 0) {
    levelWord = words[0];
    paintHyphens(levelWord.length);
    document.querySelector(".level").innerHTML = "Nivel 1";
  } else if (contN === 1) {
    levelWord = words[1];
    paintHyphens(levelWord.length);
    document.querySelector(".level").innerHTML = "Nivel 2";
  } else if (contN === 2) {
    levelWord = words[2];
    paintHyphens(levelWord.length);
    document.querySelector(".level").innerHTML = "Nivel 3";
  }
}

// Función para dibujar los guiones de la palabra
function paintHyphens(num) {
  var gap = document.getElementById("word-id");
  hyphens = [];
  for (let i = 0; i < num; i++) {
    hyphens[i] = "_";
  }
  gap.innerHTML = hyphens.join("");
}

// Funciónes para poner las letras indicadas en los guiones de los niveles y deshabilita aquellas que acertás
function B1() {
  if (levelWord === words[0]) {
    hyphens.splice(5, 1, "R");
    var firstButton = document.getElementById("R1");
    firstButton.setAttribute("disabled", "true");
  } else if (levelWord === words[1]) {
    hyphens.splice(0, 1, "A");
    var firstButton = document.getElementById("R1");
    firstButton.setAttribute("disabled", "true");
  }
  var gap = document.getElementById("word-id");
  gap.innerHTML = hyphens.join("");
  test = hyphens.join("");
  verifyWinner();
}

function B2() {
  if (levelWord === words[1]) {
    var secondButton = document.getElementById("F1");
    secondButton.setAttribute("disabled", "true");
    var gap = document.getElementById("word-id");
    hyphens.splice(4, 1, "A");
    gap.innerHTML = hyphens.join("");
    test = hyphens.join("");
    verifyWinner();
  }
}

function B3() {
  if (levelWord === words[0]) {
    hyphens.splice(7, 1, "R");
    var thirdButton = document.getElementById("R2");
    thirdButton.setAttribute("disabled", "true");
  } else if (levelWord === words[1]) {
    hyphens.splice(7, 1, "A");
    var thirdButton = document.getElementById("R2");
    thirdButton.setAttribute("disabled", "true");
  }
  var gap = document.getElementById("word-id");
  gap.innerHTML = hyphens.join("");
  test = hyphens.join("");
  verifyWinner();
}

function B4() {
  if (levelWord === words[0]) {
    hyphens.splice(4, 1, "A");
    var fourthButton = document.getElementById("A1");
    fourthButton.setAttribute("disabled", "true");
  } else if (levelWord === words[1]) {
    hyphens.splice(1, 1, "L");
    var fourthButton = document.getElementById("A1");
    fourthButton.setAttribute("disabled", "true");
  }
  var gap = document.getElementById("word-id");
  gap.innerHTML = hyphens.join("");
  test = hyphens.join("");
  verifyWinner();
}

function B5() {
  if (levelWord === words[0]) {
    hyphens.splice(2, 1, "M");
    var fifthButton = document.getElementById("M");
    fifthButton.setAttribute("disabled", "true");
  } else if (levelWord === words[1]) {
    hyphens.splice(5, 1, "N");
    var fifthButton = document.getElementById("M");
    fifthButton.setAttribute("disabled", "true");
  } else if (levelWord === words[2]) {
    hyphens.splice(2, 1, "Z");
    var fifthButton = document.getElementById("M");
    fifthButton.setAttribute("disabled", "true");
  }
  var gap = document.getElementById("word-id");
  gap.innerHTML = hyphens.join("");
  test = hyphens.join("");
  verifyWinner();
}

function B6() {
  if (levelWord === words[0]) {
    hyphens.splice(1, 1, "O");
    var sixthButton = document.getElementById("O");
    sixthButton.setAttribute("disabled", "true");
  } else if (levelWord === words[2]) {
    hyphens.splice(1, 1, "E");
    var sixthButton = document.getElementById("O");
    sixthButton.setAttribute("disabled", "true");
  }
  var gap = document.getElementById("word-id");
  gap.innerHTML = hyphens.join("");
  test = hyphens.join("");
  verifyWinner();
}

function B7() {
  if (levelWord === words[0]) {
    hyphens.splice(6, 1, "A");
    var seventhButton = document.getElementById("A2");
    seventhButton.setAttribute("disabled", "true");
  } else if (levelWord === words[2]) {
    hyphens.splice(0, 1, "M");
    var seventhButton = document.getElementById("A2");
    seventhButton.setAttribute("disabled", "true");
  }
  var gap = document.getElementById("word-id");
  gap.innerHTML = hyphens.join("");
  test = hyphens.join("");
  verifyWinner();
}

function B9() {
  if (levelWord === words[1]) {
    hyphens.splice(2, 1, "E");
    var ninthButton = document.getElementById("F2");
    ninthButton.setAttribute("disabled", "true");
  } else if (levelWord === words[2]) {
    hyphens.splice(3, 1, "C");
    var ninthButton = document.getElementById("F2");
    ninthButton.setAttribute("disabled", "true");
  }
  var gap = document.getElementById("word-id");
  gap.innerHTML = hyphens.join("");
  test = hyphens.join("");
  verifyWinner();
}

function B10() {
  if (levelWord === words[0]) {
    var tenthButton = document.getElementById("C");
    tenthButton.setAttribute("disabled", "true");
    var gap = document.getElementById("word-id");
    hyphens.splice(0, 1, "C");
    gap.innerHTML = hyphens.join("");
    test = hyphens.join("");
    verifyWinner();
  }
}

function B11() {
  if (levelWord === words[1]) {
    hyphens.splice(6, 1, "I");
    var eleventhButton = document.getElementById("T");
    eleventhButton.setAttribute("disabled", "true");
  } else if (levelWord === words[2]) {
    hyphens.splice(5, 1, "A");
    var eleventhButton = document.getElementById("T");
    eleventhButton.setAttribute("disabled", "true");
  }
  var gap = document.getElementById("word-id");
  gap.innerHTML = hyphens.join("");
  test = hyphens.join("");
  verifyWinner();
}

function B12() {
  if (levelWord === words[0]) {
    hyphens.splice(3, 1, "P");
    var twelfthButton = document.getElementById("P");
    twelfthButton.setAttribute("disabled", "true");
  } else if (levelWord === words[1]) {
    hyphens.splice(3, 1, "M");
    var twelfthButton = document.getElementById("P");
    twelfthButton.setAttribute("disabled", "true");
  } else if (levelWord === words[2]) {
    hyphens.splice(4, 1, "L");
    var twelfthButton = document.getElementById("P");
    twelfthButton.setAttribute("disabled", "true");
  }
  var gap = document.getElementById("word-id");
  gap.innerHTML = hyphens.join("");
  test = hyphens.join("");
  verifyWinner();
}

// Verifica que toda la palabra esté escrita correctamente
function verifyWinner() {
  var changeLevel = document.getElementById("final-button");
  if (test === words[0]) {
    alert("Felicitaciones, terminaste el nivel 1");
    changeLevel.style.visibility = "visible";
    contN++;
    if (audioH === enabled[0]) {
      backgroundMusic.pause();
      winSound.play();
    } else {
      backgroundMusic.pause();
      winSound.pause();
    }
  } else if (test === words[1]) {
    alert("Felicitaciones, terminaste el nivel 2");
    changeLevel.value = "CONTINUAR AL NIVEL 3";
    changeLevel.style.visibility = "visible";
    contN++;
    if (audioH === enabled[0]) {
      backgroundMusic.pause();
      winSound.play();
    } else {
      backgroundMusic.pause();
      winSound.pause();
    }
  } else if (test === words[2]) {
    alert("Felicitaciones, terminaste el nivel 3");
    changeLevel.value = "CONTINUAR";
    changeLevel.style.visibility = "visible";
    contN++;
    if (audioH === enabled[0]) {
      backgroundMusic.pause();
      winSound.play();
    } else {
      backgroundMusic.pause();
      winSound.pause();
    }
  }
}

// Función para el cambio de los niveles
function levels() {
  if (audioH === enabled[0]) {
    winSound.pause();
    backgroundMusic.play();
    // Para que siempre se inicie desde el principio el winSound
    winSound.currentTime = 0;
  } else {
    backgroundMusic.pause();
    winSound.pause();
  }
  // Variables para el cambio de letras de los botones de los niveles
  if (levelWord == words[0]) {
    level2();
  } else if (levelWord == words[1]) {
    level3();
  } else if (levelWord == words[2]) {
    alert("¡Esperamos que te hayas divertido , proximamente seguiremos agregando más niveles!");
    window.location.href = "4F1P.html";
  }
}

// Función para el nivel 2
function level2() {
  var change1 = document.getElementById("R1");
  var change2 = document.getElementById("F1");
  var change3 = document.getElementById("R2");
  var change4 = document.getElementById("A1");
  var change5 = document.getElementById("M");
  var change6 = document.getElementById("O");
  var change7 = document.getElementById("A2");
  var change8 = document.getElementById("S");
  var change9 = document.getElementById("F2");
  var change10 = document.getElementById("C");
  var change11 = document.getElementById("T");
  var change12 = document.getElementById("P");
  change1.value = "A";
  change2.value = "A";
  change3.value = "A";
  change4.value = "L";
  change5.value = "N";
  change6.value = "V";
  change7.value = "H";
  change8.value = "P";
  change9.value = "E";
  change10.value = "L";
  change11.value = "I";
  change12.value = "M";
  document.getElementById("R1").removeAttribute("disabled");
  document.getElementById("R2").removeAttribute("disabled");
  document.getElementById("A1").removeAttribute("disabled");
  document.getElementById("A2").removeAttribute("disabled");
  document.getElementById("C").removeAttribute("disabled");
  document.getElementById("O").removeAttribute("disabled");
  document.getElementById("M").removeAttribute("disabled");
  document.getElementById("P").removeAttribute("disabled");
  document.getElementById("final-button").style.visibility = "hidden";
  image1.src = "../imagenes/foto5.jpg";
  image2.src = "../imagenes/foto6.jpg";
  image3.src = "../imagenes/foto7.jpg";
  image4.src = "../imagenes/foto8.jpg";
  start();
}

// Función para el nivel 3
function level3() {
  var change1 = document.getElementById("R1");
  var change2 = document.getElementById("F1");
  var change3 = document.getElementById("R2");
  var change4 = document.getElementById("A1");
  var change5 = document.getElementById("M");
  var change6 = document.getElementById("O");
  var change7 = document.getElementById("A2");
  var change8 = document.getElementById("S");
  var change9 = document.getElementById("F2");
  var change10 = document.getElementById("C");
  var change11 = document.getElementById("T");
  var change12 = document.getElementById("P");
  change1.value = "X";
  change2.value = "E";
  change3.value = "I";
  change4.value = "N";
  change5.value = "Z";
  change6.value = "E";
  change7.value = "M";
  change8.value = "H";
  change9.value = "C";
  change10.value = "U";
  change11.value = "A";
  change12.value = "L";
  document.getElementById("R1").removeAttribute("disabled");
  document.getElementById("F1").removeAttribute("disabled");
  document.getElementById("F2").removeAttribute("disabled");
  document.getElementById("R2").removeAttribute("disabled");
  document.getElementById("A1").removeAttribute("disabled");
  document.getElementById("P").removeAttribute("disabled");
  document.getElementById("T").removeAttribute("disabled");
  document.getElementById("M").removeAttribute("disabled");
  document.getElementById("final-button").style.visibility = "hidden";
  image1.src = "../imagenes/foto9.jpg";
  image2.src = "../imagenes/foto10.jpg";
  image3.src = "../imagenes/foto11.jpg";
  image4.src = "../imagenes/foto12.jpg";
  start();
}

// Sonidos para el juego
window.onload = function () {
  var pauseButton = document.getElementById("pause");
  var playButton = document.getElementById("play");
  // Inicio el sonido
  document.getElementById("start-button").addEventListener("click", function () {
    pauseButton.style.backgroundColor = "white";
    playButton.style.backgroundColor = "greenyellow";
    backgroundMusic.play();
    audioH = enabled[0];
  });

  playButton.addEventListener("click", function () {
    backgroundMusic.play();
    pauseButton.style.backgroundColor = "white";
    playButton.style.backgroundColor = "greenyellow";
    audioH = enabled[0];
  });

  // Pauso el sonido
  pauseButton.addEventListener("click", function () {
    audioH = [];
    backgroundMusic.pause();
    winSound.pause();
    pauseButton.style.backgroundColor = "red";
    playButton.style.backgroundColor = "white";
  });
};
