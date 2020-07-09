class Primos{
    constructor(numero){
        this.numero=numero
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
}
var primo = new Primos(600851475143)
console.log(primo.encontrar()); 