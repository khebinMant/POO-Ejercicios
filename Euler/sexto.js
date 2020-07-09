class Squares{
    constructor(numero){
        this.numero=numero;
        this.sumaCuadrados=0;
        this.suma=0;
    }
    calcularDiferencia(){
        for(let i=1;i<=this.numero;i++){
            this.sumaCuadrados+= Math.pow(i,2);
            this.suma+=i;
        }
        return Math.pow(this.suma,2)-this.sumaCuadrados
    }
}
var square = new Squares(20);
console.log(square.calcularDiferencia());