(() => {
  //interfaces
  interface xmen {
    nombre: string;
    edad: number;
    poder?: string;
  }

  const enviarMision = (xmen: xmen) => {
    console.log(`Enviando a ${xmen.nombre} a la mision`);
  };

  const regresarMision = (xmen: xmen) => {
    console.log(`Enviando a ${xmen.nombre} a la mision`);
  };

  const wolverine: xmen = {
    nombre: "Logan",
    edad: 60,
  };
  enviarMision(wolverine);
  regresarMision(wolverine);
})();
