class Multiples {
  constructor() {
    this.minimo;
    this.maximo;
    this.contador = 0;
  }
  getMinimo() {
    return this.minimo;
  }
  setMinimo(minimo) {
    this.minimo = minimo;
  }
  getMaximo() {
    return this.maximo;
  }
  setMaximo(maximo) {
    this.maximo = maximo;
  }
  encontrarNumero() {
    let i = 1;
    while (this.contador != this.maximo) {
      for (let j = this.minimo; j <= this.maximo; j++) {
        if (i % j === 0) {
          this.contador++;
          if (this.contador == this.maximo) {
            return i;
          }
        } else {
          this.contador = 0;
          i++;
          break;
        }
      }
    }
  }
}
var multiplo = new Multiples();
multiplo.setMinimo(1);
multiplo.setMaximo(20);
console.log(multiplo.encontrarNumero());
