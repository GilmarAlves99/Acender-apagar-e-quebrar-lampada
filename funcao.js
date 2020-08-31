var quebrada = false;

function mudaLampada(tipo) {
    if (!quebrada) {
        document.getElementById("luz").src = tipo + ".jpg";
        if (tipo == 'lampada-quebrada') {
            quebrada = true;
        }
    }
}

/*  function apagaLampada() {
      document.getElementById("luz").src = "/lampada-apagada.jpg";
  }

  function quebraLampada() {
      document.getElementById("luz").src = "/lampada-quebrada.jpg";
  } */