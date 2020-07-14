class Fibonacci{
    constructor(){
        this.previo 
        this.actual 
        this.siguiente 
        this.arrayPar = []
        this.suma = 0
    }
    setPrevio(previo){
        this.previo=previo;
    }
    getPrevio(){
        return this.previo
    }

    setActual(actual){
        this.actual=actual;
    }
    getActual(){
        return this.actual
    }
    
    setSiguiente(siguiente){
        this.siguiente=siguiente;
    }
    getSiguiente(){
        return this.siguiente
    }

    getArray(){
        return this.arrayPar;
    }
    getSuma(){
        return this.suma;
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
var fibo = new Fibonacci()

fibo.setPrevio(0)
fibo.setActual(1)
fibo.setSiguiente(0)

fibo.obtenerSecuencia();



