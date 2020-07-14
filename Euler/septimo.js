class Primos{
    constructor(){
        this.position ;
        this.contador = 0;
        this.primosContador = 0;
        this.primosArray = []
    }

    setPosition(position){
        this.position=position;
    }
    getPosition(){
        return this.position;
    }


    hallarPosicion(){
            let i=1;
            while(this.primosContador!=this.position){
                for(let j=1;j<=i;j++){
                    if(i%j===0){
                        this.contador++;
                    }
                }
                if(this.contador===2){
                    this.primosContador++;
                    this.primosArray.push(i)
                    this.contador=0;
                }
                else{
                    this.contador=0;
                }
                i++; 
            }
            return this.primosArray[this.primosArray.length-1]
        }
}
var primo = new Primos()
primo.setPosition(1001);
console.log(primo.hallarPosicion())