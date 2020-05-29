"use strict";
(() => {
    //clases
    class TestClass {
        // nombre: string;
        // equipo: string;
        // nombreReal: string;
        // puedePelear?: boolean;
        // peleaGanadas?: number;
        constructor(nombre, equipo, nombreReal, puedePelear = true, peleaGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleaGanadas = peleaGanadas;
        }
    }
    const hulk = new TestClass("cacaroto", "brokoli", "Garen de demacia");
    console.log(hulk.equipo);
})();
