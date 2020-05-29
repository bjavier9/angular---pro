(() => {
  //clases
  class TestClass {
    // nombre: string;
    // equipo: string;
    // nombreReal: string;
    // puedePelear?: boolean;
    // peleaGanadas?: number;

    constructor(
      public nombre: string,
      public equipo: string,
      public nombreReal?: string,
      public puedePelear: boolean = true,
      public peleaGanadas: number = 0
    ) {}
  }

  const hulk = new TestClass("cacaroto", "brokoli", "Garen de demacia");
  console.log(hulk.equipo);
})();
