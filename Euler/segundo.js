class Fibonacci{
    constructor(previo,actual,siguiente){
        this.previo = previo
        this.actual = actual
        this.siguiente = siguiente
        this.arrayPar = []
        this.suma = 0
    }
     obtenerSecuencia() {
        while(this.actual<=4000000){
            this.siguiente = this.previo
            this.previo = this.actual+this.previo
            this.actual=this.siguiente
            this.arrayPar.push(this.actual)
        }
        for(let i=0;i<this.arrayPar.length;i++){
            if(this.arrayPar[i]%2==0){
                this.suma= this.suma+this.arrayPar[i]
            }
        }
        console.log(this.arrayPar)
        console.log(this.suma)
    }
}
var fibo = new Fibonacci(0,1,0)
fibo.obtenerSecuencia();

