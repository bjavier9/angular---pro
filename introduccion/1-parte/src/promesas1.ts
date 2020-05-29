(() => {
  //promesas
  console.log("inicio");

  const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('se termino');
      reject("se termino");
    }, 2000);
  });

  prom1
    .then((mensaje) => console.log(mensaje))
    .catch((err) => console.warn(err));

  console.log("fin");
})();
