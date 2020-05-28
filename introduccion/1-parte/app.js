"use strict";
(function () {
    //tipo de variables
    var mensaje = "hola";
    var numero = 123; //number
    var booleano = true; //true or false
    var hoy = new Date(); //fecha
    var variableRandom; //aceptan tipos
    var tipoObject = {
        nombre: "juan",
        edad: 23,
    };
    tipoObject = {
        nombre: "mia khalifa",
        edad: 27,
    };
    function getEdad(numero) {
        return numero * 400;
    }
    // @TODO: 'literals'
    var nombre = "Gato";
    var apellido = "Con botas";
    var edad = 34;
    var salida = nombre + " " + apellido + " (" + getEdad(edad) + ")";
});
