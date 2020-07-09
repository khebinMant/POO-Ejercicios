class Primos{
    constructor(position){
        this.position = position;
        this.contador = 0;
        this.primosContador = 0;
        this.primosArray = [0];
        this.suma=0;
    }
    hallarPosicion(){
            let i=0;
            while(this.primosArray[this.primosArray.length-1]<10){
                for(let j=1;j<=i;j++){
                    if(i%j===0){
                        this.contador++;
                    }
                }
                if(this.contador===2){
                    this.primosContador++;
                    this.primosArray.push(i)
                    this.contador=0;
                    //console.log(i);
                }
                else{
                    this.contador=0;
                }
                i++; 
            }
            for(let i=0; i<this.primosArray.length-1;i++){
                this.suma+=this.primosArray[i];
            }
            return this.suma
        }

}
var primo = new Primos(10001)
console.log(primo.hallarPosicion())