const destinos = [
    {
        nombre: "Argentina",
        region: "América",
        descripcion: "Montañas, naturaleza y paisajes para descubrir.",
        imagen: "imagenes/argentina.jpg"
    },
    {
        nombre: "Brasil",
        region: "América",
        descripcion: "Playas, naturaleza y ciudades llenas de vida.",
        imagen: "imagenes/brasil.jpg"
    },
    {
        nombre: "España",
        region: "Europa",
        descripcion: "Historia, cultura y una gran variedad de paisajes.",
        imagen: "imagenes/espana.jpg"
    },
    {
        nombre: "Italia",
        region: "Europa",
        descripcion: "Historia, gastronomía y ciudades inolvidables.",
        imagen: "imagenes/italia.jpg"
    },
    {
        nombre: "Tailandia",
        region: "Asia",
        descripcion: "Templos, playas paradisíacas y una cultura única.",
        imagen: "imagenes/tailandia.jpg"
    },
    {
        nombre: "Japón",
        region: "Asia",
        descripcion: "Tradición, tecnología y paisajes sorprendentes.",
        imagen: "imagenes/japon.jpg"
    }
];
const itinerarios = [
    {
        duracion: "3 días",
        titulo: "Escapada",
        descripcion: "Un recorrido corto para conocer los lugares imprescindibles de tu destino.",
        actividades: [
            "Recorrido por los principales atractivos",
            "Experiencia gastronómica",
            "Tiempo libre para explorar"
        ]
    },
    {
        duracion: "7 días",
        titulo: "Una semana",
        descripcion: "Un viaje equilibrado para recorrer, descubrir y disfrutar con más tiempo.",
        actividades: [
            "Visita a los principales atractivos",
            "Excursión de día completo",
            "Experiencia gastronómica",
            "Tiempo libre para actividades personales"
        ]
    },
    {
        duracion: "14 días",
        titulo: "Aventura completa",
        descripcion: "Un recorrido completo para conocer diferentes lugares y vivir nuevas experiencias.",
        actividades: [
            "Recorrido por diferentes ciudades",
            "Excursiones y actividades culturales",
            "Experiencias gastronómicas",
            "Días libres para explorar"
        ]
    }
];
const mostrarDestinos = (lista) => {

    const listaDestinos = document.getElementById("listaDestinos");

    listaDestinos.innerHTML = "";

    lista.forEach(destino => {

        listaDestinos.innerHTML += `
            <article class="tarjeta-destino">
                <img src="${destino.imagen}" alt="Paisaje de ${destino.nombre}">
                <h3>${destino.nombre}</h3>
                <p class="region-destino">${destino.region}</p>
                <p>${destino.descripcion}</p>
            </article>
        `;

    });

}
const filtrarDestinos = () => {

    const region = document.getElementById("region").value;

    if (region == "Todos") {
        mostrarDestinos(destinos);
    } else {
        const destinosFiltrados = destinos.filter(destino => destino.region == region);
        mostrarDestinos(destinosFiltrados);
    }

}
const mostrarItinerarios = (lista) => {

    const listaItinerarios = document.getElementById("listaItinerarios");

    listaItinerarios.innerHTML = "";

    lista.forEach(itinerario => {

        let listaActividades = "";

        itinerario.actividades.forEach(actividad => {
            listaActividades += `<li>${actividad}</li>`;
        });

        listaItinerarios.innerHTML += `
            <article class="tarjeta-itinerario">
                <h3>${itinerario.duracion}</h3>
                <h4>${itinerario.titulo}</h4>
                <p>${itinerario.descripcion}</p>

                <h4>Incluye:</h4>
                <ul>
                    ${listaActividades}
                </ul>
            </article>
        `;

    });

}