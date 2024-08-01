// en la comptacion se puede crear leer actualizar y borrar


let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// usar el punto es para llamar a una propiedad o una accion del objrto
// las acciones se distinguen por parentesis

typewriter
  .pauseFor(2500)
  .typeString('Laura Arrona')
  .pauseFor(300)
  .deleteAll(10)
  .typeString('Estudiante de ing biomedica')
  .pauseFor(1000)
  .start();