"use strict";
(function () {
    // destructuracion de objetos
    var avenger = {
        nombre: "Bad bunny",
        clave: "Cantante",
        poder: "ninguno",
    };
    var nombre = avenger.nombre, clave = avenger.clave;
    console.log(nombre);
    console.log(clave);
    var extraer = function (_a) {
        var poder = _a.poder, nombre = _a.nombre;
        console.log(nombre);
        console.log(poder);
    };
    extraer(avenger);
    var avengers = ["thor", "Ironman", "Spiderman"];
    // const [loki, hombre, chino] = avengers;
    var loki = avengers[2];
    console.log(loki);
    // console.log(hombre);
    // console.log(chino);
    var extraerArr = function (_a) {
        var chicharito = _a[0], ironman = _a[1], spiderman = _a[2];
        console.log(chicharito), console.log(ironman), console.log(spiderman);
    };
    extraerArr(avengers);
})();
