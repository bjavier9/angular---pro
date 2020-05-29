(() => {
  //promesas
  const retirarDinero = (montoRetirar: number): Promise<number> => {
    let dineroActual = 1000;
    return new Promise((resolve, reject) => {
      if (montoRetirar > dineroActual) {
        reject("no hay suficiente fondos");
      } else {
        dineroActual -= montoRetirar;
        resolve(dineroActual);
      }
    });
  };
  retirarDinero(1500)
    .then((monto) => console.log(`Me queda ${monto}`))
    .catch(console.warn);
})();
