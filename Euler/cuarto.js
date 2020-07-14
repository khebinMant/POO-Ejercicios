class Palindromos {
  constructor(unidad) {
    this.digito = 100;
    this.unidades = unidad;
  }

  setDigito(digito) {
    this.digito = digito;
  }
  getDigito() {
    return (this.digito = digito);
  }
  setUnidades(unidad) {
    this.unidades = unidad;
  }
  getUnidades() {
    return (this.unidades = unidades);
  }

  obtenerMaximo() {
    let arrayAux = [];
    let arrayAuxReverse = [];
    let palindromos = [];
    for (let i = this.digito; i <= this.unidades; i++) {
      for (let j = this.digito; j <= this.unidades; j++) {
        arrayAux = (i * j).toString();
        arrayAuxReverse = arrayAux.split("").reverse();
        arrayAux = arrayAux.split("");
        if (
          JSON.stringify(arrayAuxReverse) == JSON.stringify(arrayAux)
        ) {
          this.palindromos.push(arrayAux);
        }
      }
    }

    return parseInt(palindromos[palindromos.length - 1].join(""));
  }
}
var palindromo = new Palindromos(999);
console.log(palindromo.obtenerMaximo());
