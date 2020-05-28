"use strict";
var activar = function (quien, momento, objeto) {
    if (objeto === void 0) { objeto = "tortugas"; }
    return quien + " me llamo " + objeto + " " + (momento == null ? "" : momento);
};
console.log(activar("Juan", "batidora"));
