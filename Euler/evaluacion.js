var pelota ={
    nombre: "Pelota de basket",
    tamaño: 73,
    color: "Naranja",
    peso: 650,
    logo: "🏀",
    rebotar (){
        console.log("Estoy rebotando "+this.logo)
    }
}

class Pelota{
    constructor(nombre, tamaño, color, peso, logo){
        this.nombre = nombre;
        this.tamaño= tamaño;
        this.color = color,
        this.logo = logo;
    }
    rebotar(){
        console.log("Estoy rebotando "+this.logo)
    }
}

var pelotaSoccer = new Pelota("Pelota de soccer",60,"Blanco con negro",600,"⚽️");
var pelotaFutbol = new Pelota("Pelota de futbol",40,"Cafe",500,"🏈");


pelotaSoccer.rebotar();
pelotaFutbol.rebotar();
pelota.rebotar()