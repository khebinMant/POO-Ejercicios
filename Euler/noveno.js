class Pitagoras{
    constructor(){
        this.condicion=0
    }
    
    encontrarProducto(){
        for(let a=1;a<=500;a++){
            for(let b=1;b<=500;b++){
                for(let c=1;c<=500;c++){
                    if(Math.pow(a,2)+Math.pow(b,2)==Math.pow(c,2)){
                        if(a+b+c==1000){
                            console.log(a,b,c)
                            console.log(a*b*c)
                        }
                    }
                }
            }
        }
    }
}
var pitagoras = new Pitagoras()
pitagoras.encontrarProducto();