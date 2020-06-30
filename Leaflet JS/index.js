var map = L.map('map').setView([-0.067116, -78.403128], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-0.257128, -78.546270]).addTo(map)
    .bindPopup('Esta en la dirección de mi casa' + distancia)
    //.openPopup();
L.marker([-0.355708, -78.528793]).addTo(map)
    .bindPopup('Esta es la dirección de la casa de Jazmín.')
    .openPopup();
L.marker([-0.225069,-78.5168959]).addTo(map)
    .bindPopup('Aqui esta el instituto')
    .openPopup();
L.marker([-0.2537563,-78.5330725]).addTo(map)
    .bindPopup('Esta es la dirección de la casa de Steven.')
    .openPopup();
L.marker([-0.0866811,-78.5073176]).addTo(map)
    .bindPopup('Esta es la dirección de la casa de Brayan.')
    .openPopup();
L.marker([-0.2235145,-78.5113281]).addTo(map)
    .bindPopup('Esta es la dirección de la casa de Jeniffer.')
    .openPopup();

L.marker([-0.071850, -78.435068]).addTo(map)
    .bindPopup('Esta es la dirección de la casa de Francisco.')
    .openPopup();

L.marker([-0.290397, -78.552108]).addTo(map)
    .bindPopup('Esta es la dirección de la casa de Kevin Quemag.')
    .openPopup();

L.marker([-0.241768, -78.526977]).addTo(map)
    .bindPopup('Esta es la dirección de la casa de Michael.')
    .openPopup();

L.marker([-0.352055, -78.528046]).addTo(map)
    .bindPopup('Esta es la dirección de la casa de Mauricio.')
    .openPopup();

var puntosCasaInsitutos = [
    [    [-0.257128, -78.546270],[-0.225069,-78.5168959]],
    [    [-0.355708, -78.528793],[-0.225069,-78.5168959]],
    [    [-0.2537563,-78.5330725],[-0.225069,-78.5168959]],
    [    [-0.0866811,-78.5073176],[-0.225069,-78.5168959]],
    [    [-0.0866811,-78.5073176],[-0.225069,-78.5168959]],
    [    [-0.071850, -78.435068],[-0.225069,-78.5168959]],
    [    [-0.290397, -78.552108],[-0.225069,-78.5168959]],
    [    [-0.241768, -78.526977],[-0.225069,-78.5168959]],
    [    [-0.352055, -78.528046],[-0.225069,-78.5168959]],

]
for(let i=0 ;i<=puntosCasaInsitutos.length ;i++){
    var polyline = L.polyline(puntosCasaInsitutos[i], {color: colorRandom()}).addTo(map);
}
function colorRandom(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//var distancia= puntosCasaInsitutos[0].distanceTo(puntosCasaInsitutos[1]);
//console.log(distancia);

/*
var yoInstituto = [
    [-0.257128, -78.546270],
    [-0.225069,-78.5168959],
];
var jazInstituto = [
    [-0.355708, -78.528793],
    [-0.225069,-78.5168959],
];
var stevInstituto = [
    [-0.2537563,-78.5330725],
    [-0.225069,-78.5168959],
];
var bryInstituto = [
    [-0.0866811,-78.5073176],
    [-0.225069,-78.5168959],
];
var jennInstituto = [
    [-0.0866811,-78.5073176],
    [-0.225069,-78.5168959],
];
var francInstituto = [
    [-0.071850, -78.435068],
    [-0.225069,-78.5168959],
];
var quemagInstituto = [
    [-0.290397, -78.552108],
    [-0.225069,-78.5168959],
];
var michaelInstituto = [
    [-0.241768, -78.526977],
    [-0.225069,-78.5168959],
];
var mauricioInstituto = [
    [-0.352055, -78.528046],
    [-0.225069,-78.5168959],
];
*/
/*
var polyline = L.polyline(puntosCasaInsitutos[0], {color: 'red'}).addTo(map);
var polyline = L.polyline(jazInstituto, {color: 'blue'}).addTo(map);
var polyline = L.polyline(stevInstituto, {color: 'green'}).addTo(map);
var polyline = L.polyline(bryInstituto, {color: 'yellow'}).addTo(map);
var polyline = L.polyline(jennInstituto, {color: 'brown'}).addTo(map);
var polyline = L.polyline(francInstituto, {color: 'aqua'}).addTo(map);
var polyline = L.polyline(quemagInstituto, {color: 'pink'}).addTo(map);
var polyline = L.polyline(michaelInstituto, {color: 'purple'}).addTo(map);
var polyline = L.polyline(mauricioInstituto, {color: '#3388ff'}).addTo(map);*/

