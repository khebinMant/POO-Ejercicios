var map = L.map('map').setView([-0.067116, -78.403128], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-0.257128, -78.546270]).addTo(map)
    .bindPopup('Esta en la dirección de mi casa')
    .openPopup();
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
