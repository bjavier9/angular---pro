(() => {
  const sumar = (a: number, b: number): number => a + b;
  const nombre = (): string => "hola fernando";

  const obtnerSalario = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      resolve("locura");
    });
  };

  obtnerSalario().then((a) => console.log(a.toLocaleUpperCase));
})();
