() => {
  //tipo de variables
  let mensaje: string = "hola";
  let numero: number = 123; //number
  let booleano: boolean = true; //true or false
  let hoy: Date = new Date(); //fecha

  let variableRandom: string | number; //aceptan tipos
  var tipoObject = {
    nombre: "juan",
    edad: 23,
  };

  tipoObject = {
    nombre: "mia khalifa",
    edad: 27,
  };

  function getEdad(numero: number): number {
    return numero * 400;
  }

  // @TODO: 'literals'
  const nombre = "Gato";
  const apellido = "Con botas";
  const edad = 34;
  const salida = `${nombre} ${apellido} (${getEdad(edad)})`;
};
