class Multiples{
    constructor(minimo,maximo){
        this.minimo = minimo;
        this.maximo = maximo;
        this.contador = 0
    }
    encontrarNumero(){
        for(let i=1;i<5000000000000000;i++){
            for(let j=this.minimo;j<=this.maximo;j++){
                if(i%j===0){
                    this.contador++;
                    if(this.contador==this.maximo){
                        return i
                    }
                }
                else{
                    this.contador=0;
                    break;
                }
            }
        }

    }
}
var multiplo = new Multiples(1,20)
console.log(multiplo.encontrarNumero());