(() => {
  // destructuracion de objetos
  const avenger = {
    nombre: "Bad bunny",
    clave: "Cantante",
    poder: "ninguno",
  };
  const { nombre, clave } = avenger;
  console.log(nombre);
  console.log(clave);

  const extraer = ({ poder, nombre }: any) => {
    console.log(nombre);
    console.log(poder);
  };
  extraer(avenger);
  const avengers: string[] = ["thor", "Ironman", "Spiderman"];
  // const [loki, hombre, chino] = avengers;
  const [, , loki] = avengers;
  console.log(loki);
  // console.log(hombre);
  // console.log(chino);

  const extraerArr = ([chicharito, ironman, spiderman]: string[]) => {
    console.log(chicharito), console.log(ironman), console.log(spiderman);
  };

  extraerArr(avengers);
})();
