function iniciar_pilas() {
  var pilas = pilasengine.iniciar(200, 200);

  pilas.onready = function() {
    pilas.modo.crear_fondo("imagenes:fondo-plano.png");

    let nave = pilas.actores.nave();
    nave.x = -20;

    nave.y = -50;
    nave.decir("¡Hola!");
    nave.aprender("arrastrable");

    let plataforma = pilas.actores.plataforma();
    plataforma.y = -100;

    let pelota = pilas.actores.pelota();
    pelota.x = 60;
    pelota.aprender("arrastrable");
  };
}
