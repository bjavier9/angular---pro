"use strict";
(() => {
    const enviarMision = (xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la mision`);
    };
    const regresarMision = (xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la mision`);
    };
    const wolverine = {
        nombre: "Logan",
        edad: 60,
    };
    enviarMision(wolverine);
    regresarMision(wolverine);
})();
