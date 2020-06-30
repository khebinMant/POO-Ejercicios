var map = L.map('map').setView([-0.067116, -78.403128], 13);

var puntosCasaInsitutos = [
    [    [-0.257128, -78.546270],[-0.225069,-78.5168959]],
    [    [-0.355708, -78.528793],[-0.225069,-78.5168959]],
    [    [-0.2537563,-78.5330725],[-0.225069,-78.5168959]],
    [    [-0.0866811,-78.5073176],[-0.225069,-78.5168959]],
    [    [-0.2235145,-78.5113281],[-0.225069,-78.5168959]],
    [    [-0.071850, -78.435068],[-0.225069,-78.5168959]],
    [    [-0.290397, -78.552108],[-0.225069,-78.5168959]],
    [    [-0.241768, -78.526977],[-0.225069,-78.5168959]],
    [    [-0.352055, -78.528046],[-0.225069,-78.5168959]],
]
var compañerosCasa = ['Kevin Alexander(Yo)','Jazmin','Steven','Brayan','Jeniffer'
                        ,'Francisco','Kevin Quemag','Michael','Mauricio']
var distancias = [];


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

dibujarLineas(puntosCasaInsitutos);
distanciaDosPuntos(puntosCasaInsitutos);
dibujarPin(puntosCasaInsitutos,compañerosCasa);

function dibujarPin(puntos,compañeros){
    let auxArray = [];
    let numeroCompañero=0;
    for(let i =0; i<puntos.length;i++){
        for(let j = 0; j<2;j++){
            if(j==0)
            {
                auxArray = puntos[i][j];
                L.marker(auxArray).addTo(map)
                .bindPopup('Esta es la dirección de la casa de: '+compañeros[numeroCompañero]+ ' la distancia entre entre el Instituto y su casa es: '+ distancias[numeroCompañero])
                .openPopup();
                numeroCompañero++;
            }

        }
    }
    L.marker([-0.225069,-78.5168959]).addTo(map)
    .bindPopup('Tecnológico De Turismo Y Patrimonio "Yavirac"')
    .openPopup();
} 

function dibujarLineas (puntos){
    for(let i=0 ;i<puntos.length ;i++){
        var polyline = L.polyline(puntos[i], {color: colorRandom()}).addTo(map);
    }
}

function colorRandom(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function distanciaDosPuntos(puntos){
    let distancia = 0;
    let institutoX = -0.225069;
    let institutoY = -78.5168959;
    let auxArray = []
    for(let i =0; i<puntos.length;i++){
        for(let j = 0; j<2;j++){
            if(j==0){  
                auxArray = puntos[i][j];
                distancia = Math.sqrt(Math.pow(institutoX-auxArray[0],2)+Math.pow(institutoY-auxArray[1],2))
                distancias.push(distancia);
                console.log(distancia);
            }
        }
    }
}
