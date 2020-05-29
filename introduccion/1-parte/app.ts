(() => {
  //clases
  class TestClass {
    nombre: string;
    equipo: string;
    nombreReal: string;
    puedePelear?: boolean;
    peleaGanadas?: number;

    constructor(nombre: string, equipo: string, nombreReal: string) {
      this.nombre = nombre;
      this.equipo = equipo;
      this.nombreReal = nombreReal;
    }
  }

  const hulk = new TestClass("cacaroto", "brokoli", "Garen de demacia");
  console.log(hulk.equipo);
})();
