let generoSeleccionado = null;

function seleccionarGenero(genero) {
  generoSeleccionado = genero;
}

function recomendarPelicula() {
  const edad = parseInt(document.getElementById("edad").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(edad) || edad < 1) {
    resultado.innerText = "Por favor, ingresa una edad válida.";
    return;
  }

  if (!generoSeleccionado) {
    resultado.innerText = "Por favor, selecciona un género.";
    return;
  }

  let recomendacion = "";

  const peliculas = {
    Drama: [
      { titulo: "Avengers", edadMinima: 7 },
      { titulo: "En busca de la felicidad", edadMinima: 12 },
      { titulo: "Son como niños", edadMinima: 18 }
    ],
    Comedia: [
      { titulo: "Mi villano favorito", edadMinima: 5 },
      { titulo: "invensible", edadMinima: 7 },
      { titulo: "¿Qué pasó ayer?", edadMinima: 16 }
    ],
    Musical: [
      { titulo: "Encanto", edadMinima: 5 },
      { titulo: "La La Land", edadMinima: 12 },
      { titulo: "Musica, Amigos, Fiesta", edadMinima: 14 }
    ],
    Crimen: [
      { titulo: "Sherlock Holmes", edadMinima: 13 },
      { titulo: "Taxi driver", edadMinima: 16 },
      { titulo: "Driver", edadMinima: 18 }
    ]
  };

  const listaGenero = peliculas[generoSeleccionado];
  const disponibles = listaGenero.filter(p => edad >= p.edadMinima);

  if (disponibles.length === 0) {
    resultado.innerText = `Lo sentimos, no hay películas disponibles para tu edad en el género ${generoSeleccionado}.`;
  } else {
    const pelicula = disponibles[Math.floor(Math.random() * disponibles.length)];
    resultado.innerText = `Nuestra recomendacion es "${pelicula.titulo}" (${generoSeleccionado})`;
  }
}