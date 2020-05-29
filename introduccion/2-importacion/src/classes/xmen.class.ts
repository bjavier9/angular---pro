function imprimirconsola(constructorclase: Function) {
  console.log(constructorclase);
}

@imprimirconsola
export class Xmen {
  constructor(public nombre: string, public clave: string) {}
  imprimir() {
    console.log(this.nombre);
  }
}
