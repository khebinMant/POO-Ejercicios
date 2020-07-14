class Primos{
    constructor(){
        this.numero;
        this.iterador = 2
    }
    encontrar(){
        while(this.numero!=1){
            if(this.numero%this.iterador===0){
                this.numero=(this.numero)/(this.iterador)
            }
            else{
                this.iterador+=1;
            }
        }
        return this.iterador;
    }
    getIterador () {
       return this.iterador;
    }
    setNumero(numero){
        this.numero=numero;
    }
    getNumero(){
        return this.numero;
    }
    
}
var primo = new Primos()

primo.setNumero(600851475143);

console.log(primo.encontrar()); 