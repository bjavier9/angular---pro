(() => {
  const miFunction = (a: string) => a;
  const sumarN = (a: number, b: number) => a + b;
  console.log(miFunction("hola"));
  console.log(sumarN(5, 8));

  const hul = {
    nombre: "Hulk",
    smash() {
      setTimeout(() => {
        console.log(`${this.nombre} demencia.`);
      }, 1000);
    },
  };

  hul.smash();
})();
