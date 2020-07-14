class Multiplos {
    constructor(multiplo2,maximo){
        this.multiplo1;
        this.multiplo2=multiplo2;
        this.maximo = maximo;
        this.suma = 0
    }
    setMultiplos(multiplo1,multiplo2){
        this.multiplo1=multiplo1;
        this.multiplo2=multiplo2;
    }
    getMultiplo1(){
        return this.multiplo1
    }
    getMultiplo2(){
        return this.multiplo2
    }
    sumar(){
        let i=0;
        while(i<this.maximo){
            if(i%this.multiplo1===0||i%this.multiplo2===0){
                this.suma+=i;
            }
            i++;
        }
        return this.suma;
        /*for(let i=0;i<this.maximo;i++){
            if(i%this.multiplo1===0||i%this.multiplo2===0){
                this.suma+=i;
            }
        }
    	return this.suma;*/
    } 

}

console.log(person.fullName())

var multiplo = new Multiplos(5,1000);


multiplo.setMultiplo1(4,7);


console.log(multiplo.getMultiplo1());


console.log(multiplo.sumar());