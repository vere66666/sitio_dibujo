
// Funciones para el sonido de los botones ver y comer

var sonido_ver = new Audio();
sonido_ver.src = "sounds/sound.mp3";

var sonido_comer = new Audio();
sonido_comer.src = "sounds/sound.mp3";

function playSound(parametro) {
  if (parametro === "salutHola") {
    sonido_comer.play();
    setTimeout(function () {
      window.location.href = "forms.html"
    }, 500)
  };
  if (parametro === "cliqueame") {
    sonido_comer.play();
    setTimeout(function () {
      window.location.href = "forms.html"
    }, 200)
  };
};


// Funcione que crea mas botones al ser apretada
  function buttonFunction() {
    var newDiv = document.createElement("div");
    var btn = document.createElement("BUTTON");
    newDiv.appendChild(btn);
    btn.innerHTML = "bienvenide amigue";
    btn.innerHTML = "blog de ver";
    document.body.appendChild(btn);
  }