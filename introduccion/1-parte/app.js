"use strict";
(function () {
    var miFunction = function (a) { return a; };
    var sumarN = function (a, b) { return a + b; };
    console.log(miFunction("hola"));
    console.log(sumarN(5, 8));
    var hul = {
        nombre: "Hulk",
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.nombre + " demencia.");
            }, 1000);
        },
    };
    hul.smash();
})();
