"use strict";
(() => {
    //clases
    class TestClass {
        constructor(nombre, equipo, nombreReal) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
        }
    }
    const hulk = new TestClass("cacaroto", "brokoli", "Garen de demacia");
    console.log(hulk.equipo);
})();
