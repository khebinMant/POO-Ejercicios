class Multiplos {
  	constructor(multipl1,multiplo2,maximo){
        this.multiplo1=multipl1;
        this.multiplo2=multiplo2;
        this.maximo = maximo;
        this.suma =0
    }
      sumar(){
        for(let i=0;i<this.maximo;i++){
            if(i%this.multiplo1===0||i%this.multiplo2===0){
                this.suma+=i;
            }
        }
    	return this.suma;
    }
}

var multiplo = new Multiplos(3,5,1000);
console.log(multiplo.sumar());
