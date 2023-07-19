// index.js

function initMap() {
  // Coordenadas de tus lugares favoritos
  const lugaresFavoritos = [
    { nombre: "Nueva York", latitud: 40.712776, longitud: -74.005974 },
    { nombre: "Londres", latitud: 51.507351, longitud: -0.127758 },
    { nombre: "Sidney", latitud: -33.86882, longitud: 151.209296 },
  ];

  // Crear el mapa centrado en una ubicación
  const mapa = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.712776, lng: -74.005974 },
    zoom: 3,
  });

  lugaresFavoritos.forEach((lugar) => {
    new google.maps.Marker({
      position: { lat: lugar.latitud, lng: lugar.longitud },
      map: mapa,
      title: lugar.nombre,
    });
  });
}
