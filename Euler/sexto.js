class Squares{
    constructor(){
        this.numero;
        this.resultado;
    }
    getNumero(){
        return this.numero
    }
    setNumero(numero){
        this.numero=numero;
    }
    getResultado(){
        return this.resultado;
    }


    
    calcularDiferencia(){
        let sumaCuadrados=0;
        let suma=0;
        for(let i=1;i<=this.numero;i++){
            sumaCuadrados+= Math.pow(i,2);
            suma+=i;
        }
        this.resultado= Math.pow(suma,2)-sumaCuadrados
        console.log(this.resultado)
    }
}
var square = new Squares();
square.setNumero(100);
square.calcularDiferencia();
//console.log(square.getResultado());