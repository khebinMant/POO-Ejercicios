class Palindromos{
    constructor(){
        this.arrayAux =[]
        this.arrayAuxReverse = []
        this.palindromos = []
        this.digito1 =100
        this.digito2 =100
    }
    obtenerMaximo(){
        for(let i = this.digito1; i<=999;i++){
            for(let j= this.digito2;j<=999;j++){
                this.arrayAux = (i*j).toString()
                this.arrayAuxReverse = this.arrayAux.split("").reverse()
                this.arrayAux = this.arrayAux.split("")
                if(JSON.stringify(this.arrayAuxReverse)==JSON.stringify(this.arrayAux)){
                    this.palindromos.push(this.arrayAux)
                }
            }
        }

        return parseInt(this.palindromos[this.palindromos.length-1].join(""))
    }   
}
var palindromo = new Palindromos()
console.log(palindromo.obtenerMaximo())