// ### VARIABLES ###

// Palabras de los distintos niveles
var palabras = ["COMPARAR", "ALEMANIA", "MEZCLA"];
// Palabra del nivel
var palabraF = "";
// Guiones que representan la palabra indicada
var oculta = [];
// Habilitación para ganar el juego
var test;
// Contador para cambiar de nivel y palabra
var contN = 0;
// Variable para el audio de fondo
var audioFondo = document.createElement("audio");
// Variable para el sonido cuando se gana
var audio1 = document.createElement("audio");
// Habilitación para el audio
var audioH = "";
// Palabra para la habilitación del audio
var habilitado = ["h"];
// Agrego el audio a la variable audio1
audio1.setAttribute("src", "../sonidos/ganador.mp3");
// Indico el archivo de audio a cargar
audioFondo.setAttribute("src", "../sonidos/musica-fondo.mp3");
audioFondo.setAttribute("loop", "true");

// ### FUNCIONES ###

// Función para iniciar el juego
function inicio() {
  document.querySelector(".sonidos").style.visibility = "visible";
  if (contN === 0) {
    palabraF = palabras[0];
    pintarGuiones(palabraF.length);
    document.getElementById("botonComienzo").style.visibility = "hidden";
    document.getElementById("botones").style.visibility = "visible";
    document.querySelector(".grid").style.visibility = "visible";
    document.querySelector(".level").style.visibility = "visible";
    document.querySelector(".level").innerHTML = "Nivel 1";
  } else if (contN === 1) {
    palabraF = palabras[1];
    pintarGuiones(palabraF.length);
    document.getElementById("botonComienzo").style.visibility = "hidden";
    document.getElementById("botones").style.visibility = "visible";
    document.querySelector(".grid").style.visibility = "visible";
    document.querySelector(".level").style.visibility = "visible";
    document.querySelector(".level").innerHTML = "Nivel 2";
  } else if (contN === 2) {
    palabraF = palabras[2];
    pintarGuiones(palabraF.length);
    document.getElementById("botonComienzo").style.visibility = "hidden";
    document.getElementById("botones").style.visibility = "visible";
    document.querySelector(".grid").style.visibility = "visible";
    document.querySelector(".level").style.visibility = "visible";
    document.querySelector(".level").innerHTML = "Nivel 3";
  }
}

// Función para dibujar los guiones de la palabra
function pintarGuiones(num) {
  var hueco = document.getElementById("palabra");
  oculta = [];
  for (var i = 0; i < num; i++) {
    oculta[i] = "_";
  }
  hueco.innerHTML = oculta.join("");
}

// Funciónes para poner las letras indicadas en los guiones de los niveles y deshabilita aquellas que acertás
function B1() {
  if (palabraF === palabras[0]) {
    var botonR1 = document.getElementById("R1");
    botonR1.setAttribute("disabled", "true");
    var hueco = document.getElementById("palabra");
    oculta.splice(5, 1, "R");
    hueco.innerHTML = oculta.join("");
    test = oculta.join("");
    verificarGanador();
  } else if (palabraF === palabras[1]) {
    var botonR1 = document.getElementById("R1");
    botonR1.setAttribute("disabled", "true");
    var hueco = document.getElementById("palabra");
    oculta.splice(0, 1, "A");
    hueco.innerHTML = oculta.join("");
    test = oculta.join("");
    verificarGanador();
  }
}

function B2() {
  if (palabraF === palabras[1]) {
    var botonF1 = document.getElementById("F1");
    botonF1.setAttribute("disabled", "true");
    var hueco = document.getElementById("palabra");
    oculta.splice(4, 1, "A");
    hueco.innerHTML = oculta.join("");
    test = oculta.join("");
    verificarGanador();
  }
}

function B3() {
  if (palabraF === palabras[0]) {
    var botonR2 = document.getElementById("R2");
    botonR2.setAttribute("disabled", "true");
    var hueco = document.getElementById("palabra");
    oculta.splice(7, 1, "R");
    hueco.innerHTML = oculta.join("");
    test = oculta.join("");
    verificarGanador();
  } else if (palabraF === palabras[1]) {
    var botonR2 = document.getElementById("R2");
    botonR2.setAttribute("disabled", "true");
    var hueco = document.getElementById("palabra");
    oculta.splice(7, 1, "A");
    hueco.innerHTML = oculta.join("");
    test = oculta.join("");
    verificarGanador();
  }
}

function B4() {
  if (palabraF === palabras[0]) {
    var botonA1 = document.getElementById("A1");
    botonA1.setAttribute("disabled", "true");
    var hueco = document.getElementById("palabra");
    oculta.splice(4, 1, "A");
    hueco.innerHTML = oculta.join("");
    test = oculta.join("");
    verificarGanador();
  } else if (palabraF === palabras[1]) {
    var botonA1 = document.getElementById("A1");
    botonA1.setAttribute("disabled", "true");
    var hueco = document.getElementById("palabra");
    oculta.splice(1, 1, "L");
    hueco.innerHTML = oculta.join("");
    test = oculta.join("");
    verificarGanador();
  }
}

function B5() {
  if (palabraF === palabras[0]) {
    var botonM = document.getElementById("M");
    botonM.setAttribute("disabled", "true");
    var hueco = document.getElementById("palabra");
    oculta.splice(2, 1, "M");
    hueco.innerHTML = oculta.join("");
    test = oculta.join("");
    verificarGanador();
  } else if (palabraF === palabras[1]) {
    var botonM = document.getElementById("M");
    botonM.setAttribute("disabled", "true");
    var hueco = document.getElementById("palabra");
    oculta.splice(5, 1, "N");
    hueco.innerHTML = oculta.join("");
    test = oculta.join("");
    verificarGanador();
  } else if (palabraF === palabras[2]) {
    var botonM = document.getElementById("M");
    botonM.setAttribute("disabled", "true");
    var hueco = document.getElementById("palabra");
    oculta.splice(2, 1, "Z");
    hueco.innerHTML = oculta.join("");
    test = oculta.join("");
    verificarGanador();
  }
}

function B6() {
  if (palabraF === palabras[0]) {
    var botonO = document.getElementById("O");
    botonO.setAttribute("disabled", "true");
    var hueco = document.getElementById("palabra");
    oculta.splice(1, 1, "O");
    hueco.innerHTML = oculta.join("");
    test = oculta.join("");
    verificarGanador();
  } else if (palabraF === palabras[2]) {
    var botonO = document.getElementById("O");
    botonO.setAttribute("disabled", "true");
    var hueco = document.getElementById("palabra");
    oculta.splice(1, 1, "E");
    hueco.innerHTML = oculta.join("");
    test = oculta.join("");
    verificarGanador();
  }
}

function B7() {
  if (palabraF === palabras[0]) {
    var botonA2 = document.getElementById("A2");
    botonA2.setAttribute("disabled", "true");
    var hueco = document.getElementById("palabra");
    oculta.splice(6, 1, "A");
    hueco.innerHTML = oculta.join("");
    test = oculta.join("");
    verificarGanador();
  } else if (palabraF === palabras[2]) {
    var botonA2 = document.getElementById("A2");
    botonA2.setAttribute("disabled", "true");
    var hueco = document.getElementById("palabra");
    oculta.splice(0, 1, "M");
    hueco.innerHTML = oculta.join("");
    test = oculta.join("");
    verificarGanador();
  }
}

function B9() {
  if (palabraF === palabras[1]) {
    var botonF2 = document.getElementById("F2");
    botonF2.setAttribute("disabled", "true");
    var hueco = document.getElementById("palabra");
    oculta.splice(2, 1, "E");
    hueco.innerHTML = oculta.join("");
    test = oculta.join("");
    verificarGanador();
  } else if (palabraF === palabras[2]) {
    var botonF2 = document.getElementById("F2");
    botonF2.setAttribute("disabled", "true");
    var hueco = document.getElementById("palabra");
    oculta.splice(3, 1, "C");
    hueco.innerHTML = oculta.join("");
    test = oculta.join("");
    verificarGanador();
  }
}

function B10() {
  if (palabraF === palabras[0]) {
    var botonC = document.getElementById("C");
    botonC.setAttribute("disabled", "true");
    var hueco = document.getElementById("palabra");
    oculta.splice(0, 1, "C");
    hueco.innerHTML = oculta.join("");
    test = oculta.join("");
    verificarGanador();
  }
}

function B11() {
  if (palabraF === palabras[1]) {
    var botonT = document.getElementById("T");
    botonT.setAttribute("disabled", "true");
    var hueco = document.getElementById("palabra");
    oculta.splice(6, 1, "I");
    hueco.innerHTML = oculta.join("");
    test = oculta.join("");
    verificarGanador();
  } else if (palabraF === palabras[2]) {
    var botonT = document.getElementById("T");
    botonT.setAttribute("disabled", "true");
    var hueco = document.getElementById("palabra");
    oculta.splice(5, 1, "A");
    hueco.innerHTML = oculta.join("");
    test = oculta.join("");
    verificarGanador();
  }
}

function B12() {
  if (palabraF === palabras[0]) {
    var botonP = document.getElementById("P");
    botonP.setAttribute("disabled", "true");
    var hueco = document.getElementById("palabra");
    oculta.splice(3, 1, "P");
    hueco.innerHTML = oculta.join("");
    test = oculta.join("");
    verificarGanador();
  } else if (palabraF === palabras[1]) {
    var botonP = document.getElementById("P");
    botonP.setAttribute("disabled", "true");
    var hueco = document.getElementById("palabra");
    oculta.splice(3, 1, "M");
    hueco.innerHTML = oculta.join("");
    test = oculta.join("");
    verificarGanador();
  } else if (palabraF === palabras[2]) {
    var botonP = document.getElementById("P");
    botonP.setAttribute("disabled", "true");
    var hueco = document.getElementById("palabra");
    oculta.splice(4, 1, "L");
    hueco.innerHTML = oculta.join("");
    test = oculta.join("");
    verificarGanador();
  }
}

// Verifica que toda la palabra esté escrita
function verificarGanador() {
  if (test === palabras[0]) {
    alert("Felicitaciones, terminaste el nivel 1");
    document.getElementById("botonFinal").style.visibility = "visible";
    contN++;
    if (audioH === habilitado[0]) {
      audioFondo.pause();
      audio1.play();
      // audio1.currentTime = 0;
    } else {
      audioFondo.pause();
      audio1.pause();
    }
  } else if (test === palabras[1]) {
    alert("Felicitaciones, terminaste el nivel 2");
    var cnivel2 = document.getElementById("botonFinal");
    cnivel2.value = "CONTINUAR AL NIVEL 3";
    cnivel2.style.visibility = "visible";
    contN++;
    if (audioH === habilitado[0]) {
      audioFondo.pause();
      audio1.play();
      // audio1.currentTime = 0;
    } else {
      audioFondo.pause();
      audio1.pause();
    }
  } else if (test === palabras[2]) {
    alert("Felicitaciones, terminaste el nivel 3");
    contN++;
    var cnivel3 = document.getElementById("botonFinal");
    cnivel3.value = "CONTINUAR";
    cnivel3.style.visibility = "visible";
    contN++;
    if (audioH === habilitado[0]) {
      audioFondo.pause();
      audio1.play();
      // audio1.currentTime = 0;
    } else {
      audioFondo.pause();
      audio1.pause();
    }
  }
}

// Función para el cambio de los niveles
function niveles() {
  if (audioH === habilitado[0]) {
    audio1.pause();
    audioFondo.play();
    // Para que siempre se inicie desde el principio el audioFondo
    // audioFondo.currentTime = 0;
    audio1.currentTime = 0;
    // Variables para el cambio de letras de los botones de los niveles
    if (palabraF == palabras[0]) {
      nivel2();
    } else if (palabraF == palabras[1]) {
      nivel3();
    } else if (palabraF == palabras[2]) {
      fin();
    }
  } else {
    audioFondo.pause();
    audio1.pause();
    if (palabraF == palabras[0]) {
      nivel2();
    } else if (palabraF == palabras[1]) {
      nivel3();
    } else if (palabraF == palabras[2]) {
      fin();
    }
  }
}

// Función para el nivel 2
function nivel2() {
  var cambio1 = document.getElementById("R1");
  var cambio2 = document.getElementById("F1");
  var cambio3 = document.getElementById("R2");
  var cambio4 = document.getElementById("A1");
  var cambio5 = document.getElementById("M");
  var cambio6 = document.getElementById("O");
  var cambio7 = document.getElementById("A2");
  var cambio8 = document.getElementById("S");
  var cambio9 = document.getElementById("F2");
  var cambio10 = document.getElementById("C");
  var cambio11 = document.getElementById("T");
  var cambio12 = document.getElementById("P");
  cambio1.value = "A";
  cambio2.value = "A";
  cambio3.value = "A";
  cambio4.value = "L";
  cambio5.value = "N";
  cambio6.value = "V";
  cambio7.value = "H";
  cambio8.value = "P";
  cambio9.value = "E";
  cambio10.value = "L";
  cambio11.value = "I";
  cambio12.value = "M";
  document.getElementById("R1").removeAttribute("disabled");
  document.getElementById("R2").removeAttribute("disabled");
  document.getElementById("A1").removeAttribute("disabled");
  document.getElementById("A2").removeAttribute("disabled");
  document.getElementById("C").removeAttribute("disabled");
  document.getElementById("O").removeAttribute("disabled");
  document.getElementById("M").removeAttribute("disabled");
  document.getElementById("P").removeAttribute("disabled");
  document.getElementById("botonFinal").style.visibility = "hidden";
  image1.src = "../imagenes/foto5.jpg";
  image2.src = "../imagenes/foto6.jpg";
  image3.src = "../imagenes/foto7.jpg";
  image4.src = "../imagenes/foto8.jpg";
  inicio();
}

// Función para el nivel 3
function nivel3() {
  var cambio1 = document.getElementById("R1");
  var cambio2 = document.getElementById("F1");
  var cambio3 = document.getElementById("R2");
  var cambio4 = document.getElementById("A1");
  var cambio5 = document.getElementById("M");
  var cambio6 = document.getElementById("O");
  var cambio7 = document.getElementById("A2");
  var cambio8 = document.getElementById("S");
  var cambio9 = document.getElementById("F2");
  var cambio10 = document.getElementById("C");
  var cambio11 = document.getElementById("T");
  var cambio12 = document.getElementById("P");
  cambio1.value = "X";
  cambio2.value = "E";
  cambio3.value = "I";
  cambio4.value = "N";
  cambio5.value = "Z";
  cambio6.value = "E";
  cambio7.value = "M";
  cambio8.value = "H";
  cambio9.value = "C";
  cambio10.value = "U";
  cambio11.value = "A";
  cambio12.value = "L";
  document.getElementById("R1").removeAttribute("disabled");
  document.getElementById("F1").removeAttribute("disabled");
  document.getElementById("F2").removeAttribute("disabled");
  document.getElementById("R2").removeAttribute("disabled");
  document.getElementById("A1").removeAttribute("disabled");
  document.getElementById("P").removeAttribute("disabled");
  document.getElementById("T").removeAttribute("disabled");
  document.getElementById("M").removeAttribute("disabled");
  document.getElementById("botonFinal").style.visibility = "hidden";
  image1.src = "../imagenes/foto9.jpg";
  image2.src = "../imagenes/foto10.jpg";
  image3.src = "../imagenes/foto11.jpg";
  image4.src = "../imagenes/foto12.jpg";
  inicio();
}

// Fin del juego
function fin() {
  alert("¡Esperamos que te hayas divertido , proximamente seguiremos agregando más niveles!");
  window.location.href = "4F1P.html";
  document.getElementById("botones").style.visibility = "hidden";
  document.querySelector(".grid").style.visibility = "hidden";
  document.getElementById("botonFinal").style.visibility = "hidden";
  document.getElementById("palabra").style.visibility = "hidden";
}

// Sonidos para el juego
window.onload = function () {
  // Inicio el sonido
  document.getElementById("botonComienzo").addEventListener("click", function () {
    document.getElementById("pause").style.backgroundColor = "white";
    document.getElementById("play").style.backgroundColor = "greenyellow";
    audioFondo.play();
    audioH = habilitado[0];
  });

  document.getElementById("play").addEventListener("click", function () {
    audioFondo.play();
    document.getElementById("pause").style.backgroundColor = "white";
    document.getElementById("play").style.backgroundColor = "greenyellow";
    audioH = habilitado[0];
  });

  // Pauso el sonido
  document.getElementById("pause").addEventListener("click", function () {
    audioH = [];
    audioFondo.pause();
    audio1.pause();
    document.getElementById("pause").style.backgroundColor = "red";
    document.getElementById("play").style.backgroundColor = "white";
  });
};
