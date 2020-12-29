window.onload = function () {
  // Variable para el audio de fondo
  var startAudio = document.createElement("audio");
  // Indicamos el archivo de audio a cargar
  startAudio.setAttribute("src", "sonidos/musica-inicio.mp3");
  // Indico que el audio de fondo se ejecuta infinitamente (en loop)
  startAudio.setAttribute("loop", "true");
  // Activo el sonido con el botón
  document.getElementById("play").addEventListener("click", function () {
    startAudio.play(); 
    document.getElementById("play").style.backgroundColor = "greenyellow";
    document.getElementById("pause").style.backgroundColor = "white";
  });

  // Pauso el sonido con el botón
  document.getElementById("pause").addEventListener("click", function () {
    startAudio.pause();
    document.getElementById("pause").style.backgroundColor = "red";
    document.getElementById("play").style.backgroundColor = "white";
  });
}

