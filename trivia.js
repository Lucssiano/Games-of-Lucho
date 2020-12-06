// ### VARIABLES ###

// Temas de la triva
let temas = ["Geografía", "Arte", "Deportes", "Ciencia", "Historia"];
// Tema seleccionado
let tema;
// Pregunta de cada tema
let preg;
// Respuesta de cada tema
let resp1;
let resp2;
let resp3;
let resp4;
// Contador de preguntas que se hicieron
let contPregs = 0;
// Preguntas de geografía
let preguntasGeo = ["¿Cuántas provincias tiene Argentina?", "¿Qué paises atraviesa el Río Paraná?"];
// Respuestas de geografia
let respuestasGeo1 = ["24", "23", "22", "Ninguna de las anteriores"];
let respuestasGeo2 = [
  "Argentina - Uruguay - Paraguay ",
  "Argentina - Brasil - Uruguay",
  "Argentina - Brasil - Paraguay",
  "Ninguna de las anteriores",
];
// Preguntas de arte
let preguntasArte = ["¿Quién pintó la Mona Lisa?", "¿En que Museo está la Mona Lisa?"];
// Respuestas de arte
let respuestasArte1 = ["Leonardo Di Caprio", "Miguel Ángel", "Leonardo Da Vinci", "Emilio Salgari"];
let respuestasArte2 = ["Museo del Prado", "Louvre", "British Museum", "Galería Uffizi"];
// Preguntas de deportes
let preguntasDeportes = ["¿Cuántas libertadores tiene Boca?", "¿Cuántas libertadores tiene River?"];
// Respuestas de deportes
let respuestasDeportes1 = ["6", "7", "5", "Ninguna de las anteriores"];
let respuestasDeportes2 = ["3", "6", "5", "4"];
// Preguntas de ciencia
let preguntasCiencia = ["¿Qué utilizan los peces para respirar?", "¿Qué es el Sol?"];
// Respuestas de ciencia
let respuestasCiencia1 = ["Las branqueas", "Los pulmones", "La nariz", "Ninguna de las anteriores"];
let respuestasCiencia2 = ["Un planeta", "Un satélite", "Un planetoide", "Una estrella"];
// Preguntas de Historia
let preguntasHistoria = ["¿Quién creó la bandera Argentina?", "¿En que año fue la Revolución Industrial?"];
// Respuestas de Historia
let respuestasHistoria1 = ["San Martín", "Martin de Güemes", "Juan Bautista Alberdi", "Ninguno de las anteriores"];
let respuestasHistoria2 = ["1760", "1670", "1870", "1860"];
// Contador del tiempo para las respuestas
let contTiempo = 10;
// Contador de respuestas correctas
let contCorrec = 0;
// Contador de veces que se paró el tiempo por no haber contestado la pregunta a tiempo
let contNoti = 0;
// Contador que indica que el juego se terminó cuando es = 1
let contFin = 0;


// ### FUNCIONES ###

// Inicio de las preguntas de la trivia
function inicio() {
  document.querySelector(".botonGrid").style.visibility = "hidden";
  document.querySelector(".posGrids").style.visibility = "visible";
  document.querySelector(".posGrids2").style.visibility = "visible";
  if (contPregs == 0 || contNoti == 1) {
    tema = temas[0];
    preg = preguntasGeo[0];
    resp1 = respuestasGeo1[0];
    resp2 = respuestasGeo1[1];
    resp3 = respuestasGeo1[2];
    resp4 = respuestasGeo1[3];
  } else if (preg == preguntasGeo[0]) {
    tema = temas[0];
    preg = preguntasGeo[1];
    resp1 = respuestasGeo2[0];
    resp2 = respuestasGeo2[1];
    resp3 = respuestasGeo2[2];
    resp4 = respuestasGeo2[3];
    limpiar();
  } else if (preg == preguntasGeo[1]) {
    tema = temas[1];
    preg = preguntasArte[0];
    resp1 = respuestasArte1[0];
    resp2 = respuestasArte1[1];
    resp3 = respuestasArte1[2];
    resp4 = respuestasArte1[3];
    limpiar();
  } else if (preg == preguntasArte[0]) {
    tema = temas[1];
    preg = preguntasArte[1];
    resp1 = respuestasArte2[0];
    resp2 = respuestasArte2[1];
    resp3 = respuestasArte2[2];
    resp4 = respuestasArte2[3];
    limpiar();
  } else if (preg == preguntasArte[1]) {
    tema = temas[2];
    preg = preguntasDeportes[0];
    resp1 = respuestasDeportes1[0];
    resp2 = respuestasDeportes1[1];
    resp3 = respuestasDeportes1[2];
    resp4 = respuestasDeportes1[3];
    limpiar();
  } else if (preg == preguntasDeportes[0]) {
    tema = temas[2];
    preg = preguntasDeportes[1];
    resp1 = respuestasDeportes2[0];
    resp2 = respuestasDeportes2[1];
    resp3 = respuestasDeportes2[2];
    resp4 = respuestasDeportes2[3];
    limpiar();
  } else if (preg == preguntasDeportes[1]) {
    tema = temas[3];
    preg = preguntasCiencia[0];
    resp1 = respuestasCiencia1[0];
    resp2 = respuestasCiencia1[1];
    resp3 = respuestasCiencia1[2];
    resp4 = respuestasCiencia1[3];
    limpiar();
  } else if (preg == preguntasCiencia[0]) {
    tema = temas[3];
    preg = preguntasCiencia[1];
    resp1 = respuestasCiencia2[0];
    resp2 = respuestasCiencia2[1];
    resp3 = respuestasCiencia2[2];
    resp4 = respuestasCiencia2[3];
    limpiar();
  } else if (preg == preguntasCiencia[1]) {
    tema = temas[4];
    preg = preguntasHistoria[0];
    resp1 = respuestasHistoria1[0];
    resp2 = respuestasHistoria1[1];
    resp3 = respuestasHistoria1[2];
    resp4 = respuestasHistoria1[3];
    limpiar();
  } else if (preg == preguntasHistoria[0]) {
    tema = temas[4];
    preg = preguntasHistoria[1];
    resp1 = respuestasHistoria2[0];
    resp2 = respuestasHistoria2[1];
    resp3 = respuestasHistoria2[2];
    resp4 = respuestasHistoria2[3];
    limpiar();
  }
  document.querySelector(".temaAleatorio").innerHTML = tema;
  document.querySelector(".cambioPreg").innerHTML = preg;
  document.getElementById("primeraRespuesta").value = resp1;
  document.getElementById("segundaRespuesta").value = resp2;
  document.getElementById("terceraRespuesta").value = resp3;
  document.getElementById("cuartaRespuesta").value = resp4;
  timer();
}

// Lo que sucede cuando se apreta el boton 1 de las respuestas en las preguntas
function cambio1() {
  if (preg == preguntasGeo[0]) {
    document.getElementById("cambio1").style.backgroundColor = "red";
    document.getElementById("cambio1").style.border = "3px solid black";
    document.getElementById("cambio2").style.backgroundColor = "green";
    document.getElementById("cambio2").style.border = "3px solid green";
    alert("Respuesta incorrecta");
    contPregs++;
  } else if (preg == preguntasGeo[1]) {
    document.getElementById("cambio1").style.backgroundColor = "red";
    document.getElementById("cambio1").style.border = "3px solid black";
    document.getElementById("cambio3").style.backgroundColor = "green";
    document.getElementById("cambio3").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasArte[0]) {
    document.getElementById("cambio1").style.backgroundColor = "red";
    document.getElementById("cambio1").style.border = "3px solid black";
    document.getElementById("cambio3").style.backgroundColor = "green";
    document.getElementById("cambio3").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasArte[1]) {
    document.getElementById("cambio1").style.backgroundColor = "red";
    document.getElementById("cambio1").style.border = "3px solid black";
    document.getElementById("cambio2").style.backgroundColor = "green";
    document.getElementById("cambio2").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasDeportes[0]) {
    document.getElementById("cambio1").style.backgroundColor = "green";
    document.getElementById("cambio1").style.border = "3px solid black";
    alert("Respuesta correcta");
    contCorrec++;
  } else if (preg == preguntasDeportes[1]) {
    document.getElementById("cambio1").style.backgroundColor = "red";
    document.getElementById("cambio1").style.border = "3px solid black";
    document.getElementById("cambio4").style.backgroundColor = "green";
    document.getElementById("cambio4").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasCiencia[0]) {
    document.getElementById("cambio1").style.backgroundColor = "green";
    document.getElementById("cambio1").style.border = "3px solid black";
    alert("Respuesta correcta");
    contCorrec++;
  } else if (preg == preguntasCiencia[1]) {
    document.getElementById("cambio1").style.backgroundColor = "red";
    document.getElementById("cambio1").style.border = "3px solid black";
    document.getElementById("cambio4").style.backgroundColor = "green";
    document.getElementById("cambio4").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasHistoria[0]) {
    document.getElementById("cambio1").style.backgroundColor = "red";
    document.getElementById("cambio1").style.border = "3px solid black";
    document.getElementById("cambio4").style.backgroundColor = "green";
    document.getElementById("cambio4").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasHistoria[1]) {
    document.getElementById("cambio1").style.backgroundColor = "green";
    document.getElementById("cambio1").style.border = "3px solid black";
    alert("Respuesta correcta");
    contCorrec++;
    document.getElementById("sigPreg").value = "FINALIZAR TRIVIA";
    contFin++;
  }
  document.getElementById("sigPreg").style.visibility = "visible";
  document.querySelector(".cambioCorrectas").innerHTML = contCorrec;
}

// Lo que sucede cuando se apreta el boton 2 de las respuestas en las preguntas
function cambio2() {
  if (preg == preguntasGeo[0]) {
    document.getElementById("cambio2").style.backgroundColor = "green";
    document.getElementById("cambio2").style.border = "3px solid black";
    alert("Respuesta correcta");
    contCorrec++;
    contPregs++;
  } else if (preg == preguntasGeo[1]) {
    document.getElementById("cambio2").style.backgroundColor = "red";
    document.getElementById("cambio2").style.border = "3px solid black";
    document.getElementById("cambio3").style.backgroundColor = "green";
    document.getElementById("cambio3").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasArte[0]) {
    document.getElementById("cambio2").style.backgroundColor = "red";
    document.getElementById("cambio2").style.border = "3px solid black";
    document.getElementById("cambio3").style.backgroundColor = "green";
    document.getElementById("cambio3").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasArte[1]) {
    document.getElementById("cambio2").style.backgroundColor = "green";
    document.getElementById("cambio2").style.border = "3px solid black";
    alert("Respuesta correcta");
    contCorrec++;
  } else if (preg == preguntasDeportes[0]) {
    document.getElementById("cambio2").style.backgroundColor = "red";
    document.getElementById("cambio2").style.border = "3px solid black";
    document.getElementById("cambio1").style.backgroundColor = "green";
    document.getElementById("cambio1").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasDeportes[1]) {
    document.getElementById("cambio2").style.backgroundColor = "red";
    document.getElementById("cambio2").style.border = "3px solid black";
    document.getElementById("cambio4").style.backgroundColor = "green";
    document.getElementById("cambio4").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasCiencia[0]) {
    document.getElementById("cambio2").style.backgroundColor = "red";
    document.getElementById("cambio2").style.border = "3px solid black";
    document.getElementById("cambio1").style.backgroundColor = "green";
    document.getElementById("cambio1").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasCiencia[1]) {
    document.getElementById("cambio2").style.backgroundColor = "red";
    document.getElementById("cambio2").style.border = "3px solid black";
    document.getElementById("cambio4").style.backgroundColor = "green";
    document.getElementById("cambio4").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasHistoria[0]) {
    document.getElementById("cambio2").style.backgroundColor = "red";
    document.getElementById("cambio2").style.border = "3px solid black";
    document.getElementById("cambio4").style.backgroundColor = "green";
    document.getElementById("cambio4").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasHistoria[1]) {
    document.getElementById("cambio2").style.backgroundColor = "red";
    document.getElementById("cambio2").style.border = "3px solid black";
    document.getElementById("cambio1").style.backgroundColor = "green";
    document.getElementById("cambio1").style.border = "3px solid green";
    alert("Respuesta incorrecta");
    document.getElementById("sigPreg").value = "FINALIZAR TRIVIA";
    contFin++;
  }
  document.getElementById("sigPreg").style.visibility = "visible";
  document.querySelector(".cambioCorrectas").innerHTML = contCorrec;
}

// Lo que sucede cuando se apreta el boton 3 de las respuestas en las preguntas
function cambio3() {
  if (preg == preguntasGeo[0]) {
    document.getElementById("cambio3").style.backgroundColor = "red";
    document.getElementById("cambio3").style.border = "3px solid black";
    document.getElementById("cambio2").style.backgroundColor = "green";
    document.getElementById("cambio2").style.border = "3px solid green";
    alert("Respuesta incorrecta");
    contPregs++;
  } else if (preg == preguntasGeo[1]) {
    document.getElementById("cambio3").style.backgroundColor = "green";
    document.getElementById("cambio3").style.border = "3px solid black";
    alert("Respuesta correcta");
    contCorrec++;
  } else if (preg == preguntasArte[0]) {
    document.getElementById("cambio3").style.backgroundColor = "green";
    document.getElementById("cambio3").style.border = "3px solid black";
    alert("Respuesta correcta");
    contCorrec++;
  } else if (preg == preguntasArte[1]) {
    document.getElementById("cambio3").style.backgroundColor = "red";
    document.getElementById("cambio3").style.border = "3px solid black";
    document.getElementById("cambio2").style.backgroundColor = "green";
    document.getElementById("cambio2").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasDeportes[0]) {
    document.getElementById("cambio3").style.backgroundColor = "red";
    document.getElementById("cambio3").style.border = "3px solid black";
    document.getElementById("cambio1").style.backgroundColor = "green";
    document.getElementById("cambio1").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasDeportes[1]) {
    document.getElementById("cambio3").style.backgroundColor = "red";
    document.getElementById("cambio3").style.border = "3px solid black";
    document.getElementById("cambio4").style.backgroundColor = "green";
    document.getElementById("cambio4").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasCiencia[0]) {
    document.getElementById("cambio3").style.backgroundColor = "red";
    document.getElementById("cambio3").style.border = "3px solid black";
    document.getElementById("cambio1").style.backgroundColor = "green";
    document.getElementById("cambio1").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasCiencia[1]) {
    document.getElementById("cambio3").style.backgroundColor = "red";
    document.getElementById("cambio3").style.border = "3px solid black";
    document.getElementById("cambio4").style.backgroundColor = "green";
    document.getElementById("cambio4").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasHistoria[0]) {
    document.getElementById("cambio3").style.backgroundColor = "red";
    document.getElementById("cambio3").style.border = "3px solid black";
    document.getElementById("cambio4").style.backgroundColor = "green";
    document.getElementById("cambio4").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasHistoria[1]) {
    document.getElementById("cambio3").style.backgroundColor = "red";
    document.getElementById("cambio3").style.border = "3px solid black";
    document.getElementById("cambio1").style.backgroundColor = "green";
    document.getElementById("cambio1").style.border = "3px solid green";
    alert("Respuesta incorrecta");
    document.getElementById("sigPreg").value = "FINALIZAR TRIVIA";
    contFin++;
  }
  document.getElementById("sigPreg").style.visibility = "visible";
  document.querySelector(".cambioCorrectas").innerHTML = contCorrec;
}

// Lo que sucede cuando se apreta el boton 4 de las respuestas en las preguntas
function cambio4() {
  if (preg == preguntasGeo[0]) {
    document.getElementById("cambio4").style.backgroundColor = "red";
    document.getElementById("cambio4").style.border = "3px solid black";
    document.getElementById("cambio2").style.backgroundColor = "green";
    document.getElementById("cambio2").style.border = "3px solid green";
    alert("Respuesta incorrecta");
    contPregs++;
  } else if (preg == preguntasGeo[1]) {
    document.getElementById("cambio4").style.backgroundColor = "red";
    document.getElementById("cambio4").style.border = "3px solid black";
    document.getElementById("cambio3").style.backgroundColor = "green";
    document.getElementById("cambio3").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasArte[0]) {
    document.getElementById("cambio4").style.backgroundColor = "red";
    document.getElementById("cambio4").style.border = "3px solid black";
    document.getElementById("cambio3").style.backgroundColor = "green";
    document.getElementById("cambio3").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasArte[1]) {
    document.getElementById("cambio4").style.backgroundColor = "red";
    document.getElementById("cambio4").style.border = "3px solid black";
    document.getElementById("cambio2").style.backgroundColor = "green";
    document.getElementById("cambio2").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasDeportes[0]) {
    document.getElementById("cambio4").style.backgroundColor = "red";
    document.getElementById("cambio4").style.border = "3px solid black";
    document.getElementById("cambio1").style.backgroundColor = "green";
    document.getElementById("cambio1").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasDeportes[1]) {
    document.getElementById("cambio4").style.backgroundColor = "green";
    document.getElementById("cambio4").style.border = "3px solid black";
    alert("Respuesta correcta");
    contCorrec++;
  } else if (preg == preguntasCiencia[0]) {
    document.getElementById("cambio4").style.backgroundColor = "red";
    document.getElementById("cambio4").style.border = "3px solid black";
    document.getElementById("cambio1").style.backgroundColor = "green";
    document.getElementById("cambio1").style.border = "3px solid green";
    alert("Respuesta incorrecta");
  } else if (preg == preguntasCiencia[1]) {
    document.getElementById("cambio4").style.backgroundColor = "green";
    document.getElementById("cambio4").style.border = "3px solid black";
    alert("Respuesta correcta");
    contCorrec++;
  } else if (preg == preguntasHistoria[0]) {
    document.getElementById("cambio4").style.backgroundColor = "green";
    document.getElementById("cambio4").style.border = "3px solid black";
    alert("Respuesta correcta");
    contCorrec++;
  } else if (preg == preguntasHistoria[1]) {
    document.getElementById("cambio4").style.backgroundColor = "red";
    document.getElementById("cambio4").style.border = "3px solid black";
    document.getElementById("cambio1").style.backgroundColor = "green";
    document.getElementById("cambio1").style.border = "3px solid green";
    alert("Respuesta incorrecta");
    document.getElementById("sigPreg").value = "FINALIZAR TRIVIA";
    contFin++;
  }
  document.getElementById("sigPreg").style.visibility = "visible";
  document.querySelector(".cambioCorrectas").innerHTML = contCorrec;
}

// Tiempo para responder las preguntas
function timer() {
  let cuentaAtrás = setInterval(function () {
    contTiempo--;
    document.querySelector(".cambioTiempo").innerHTML = contTiempo;
    document.getElementById("primeraRespuesta").addEventListener("click", function () {
      clearInterval(cuentaAtrás);
    });
    document.getElementById("segundaRespuesta").addEventListener("click", function () {
      clearInterval(cuentaAtrás);
    });
    document.getElementById("terceraRespuesta").addEventListener("click", function () {
      clearInterval(cuentaAtrás);
    });
    document.getElementById("cuartaRespuesta").addEventListener("click", function () {
      clearInterval(cuentaAtrás);
    });
    if (contTiempo <= 0) {
      clearInterval(cuentaAtrás);
      alert("Se te acabó el tiempo");
      contNoti++;
      if (preg == preguntasGeo[0]) {
        document.getElementById("cambio2").style.backgroundColor = "green";
        document.getElementById("cambio2").style.border = "3px solid green";
      } else if (preg == preguntasGeo[1]) {
        document.getElementById("cambio3").style.backgroundColor = "green";
        document.getElementById("cambio3").style.border = "3px solid green";
      } else if (preg == preguntasArte[0]) {
        document.getElementById("cambio3").style.backgroundColor = "green";
        document.getElementById("cambio3").style.border = "3px solid green";
      } else if (preg == preguntasArte[1]) {
        document.getElementById("cambio2").style.backgroundColor = "green";
        document.getElementById("cambio2").style.border = "3px solid green";
      } else if (preg == preguntasDeportes[0]) {
        document.getElementById("cambio1").style.backgroundColor = "green";
        document.getElementById("cambio1").style.border = "3px solid green";
      } else if (preg == preguntasDeportes[1]) {
        document.getElementById("cambio4").style.backgroundColor = "green";
        document.getElementById("cambio4").style.border = "3px solid green";
      } else if (preg == preguntasCiencia[0]) {
        document.getElementById("cambio1").style.backgroundColor = "green";
        document.getElementById("cambio1").style.border = "3px solid green";
      } else if (preg == preguntasCiencia[1]) {
        document.getElementById("cambio4").style.backgroundColor = "green";
        document.getElementById("cambio4").style.border = "3px solid green";
      } else if (preg == preguntasHistoria[0]) {
        document.getElementById("cambio4").style.backgroundColor = "green";
        document.getElementById("cambio4").style.border = "3px solid green";
      } else if (preg == preguntasHistoria[1]) {
        document.getElementById("cambio1").style.backgroundColor = "green";
        document.getElementById("cambio1").style.border = "3px solid green";
        document.getElementById("sigPreg").value = "FINALIZAR TRIVIA";
        contFin++;
      }
      document.getElementById("sigPreg").style.visibility = "visible";
    }
  }, 1000);
}

// Deshabilitacion de los botones
function desBotones() {
  document.getElementById("primeraRespuesta").setAttribute("disabled", "true");
  document.getElementById("segundaRespuesta").setAttribute("disabled", "true");
  document.getElementById("terceraRespuesta").setAttribute("disabled", "true");
  document.getElementById("cuartaRespuesta").setAttribute("disabled", "true");
}

// Funcion para volver a habilitar los botones , reiniciar el tiempo y poner los campos de respuesta normales
function limpiar() {
  document.getElementById("primeraRespuesta").removeAttribute("disabled", "false");
  document.getElementById("segundaRespuesta").removeAttribute("disabled", "false");
  document.getElementById("terceraRespuesta").removeAttribute("disabled", "false");
  document.getElementById("cuartaRespuesta").removeAttribute("disabled", "false");
  contTiempo = 10;
  document.querySelector(".cambioTiempo").innerHTML = contTiempo;
  document.getElementById("sigPreg").style.visibility = "hidden";
  document.getElementById("cambio1").style.backgroundColor = "grey";
  document.getElementById("cambio1").style.border = "2px solid white";
  document.getElementById("cambio2").style.backgroundColor = "grey";
  document.getElementById("cambio2").style.border = "2px solid white";
  document.getElementById("cambio3").style.backgroundColor = "grey";
  document.getElementById("cambio3").style.border = "2px solid white";
  document.getElementById("cambio4").style.backgroundColor = "grey";
  document.getElementById("cambio4").style.border = "2px solid white";
}

// Finalizacion del juego 
function fin() {
  if (contFin == 1){
    alert("¡Felicitaciones, terminaste la trivia! Respondiste correctamente " + contCorrec + "  de las 10 preguntas");
    window.location.href = "trivia.html";
  }
}

// Intentar hacer el codigo mas sencillo y eficiente


