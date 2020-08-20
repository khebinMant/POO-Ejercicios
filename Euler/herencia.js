class Personaje {
    constructor(nombre, poder){
        this.nombre = nombre
        this.poder = poder
    }
    habilidad(){
        console.log("Tengo una super habilidad 1")
    }
    habilidad(){
        console.log("Tengo una super habilidad 2")
    }
    habilidad(){
        console.log("Tengo una super habilidad 3")
    }
    saludar(){
        console.log("Hola")
    }
    saludar(mensaje){
        console.log(mensaje)
    }
}
class Villano extends Personaje{
    constructor(nombre, poder, maldad ){
        super(nombre,poder)
        this.maldad = maldad;
    }
    //Override
    habilidad(mensaje){
        var resultado =mensaje + " Habilidad mala"
        return resultado
    }
}
class Heroe extends Personaje{
    constructor(nombre, poder, bondad ){
        super(nombre,poder)
        this.bondad = bondad;
    }
    habilidad(){
        console.log("Tengo una habilidad buena")
    }
}

const wolverine = new Heroe("Logan","Regeneracion",75)
const loki = new Villano("Unknown","Magia",100)
const joel = new Villano("Joel","Fuerza",90)
const tania = new Heroe("Tania","Vision",90)



var superman = {
    nombre: "Clark",
    poder: "SuperFuerza"
}
const loli = new Personaje();

loli.habilidad();

//console.log(wolverine.habilidad) 
//console.log(loki.habilidad)
//wolverine.saludar("saludando");