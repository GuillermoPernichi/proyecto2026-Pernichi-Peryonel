const destinos = [
    {
        nombre: "Argentina",
        region: "América",
        descripcion: "Montañas, naturaleza y paisajes para descubrir.",
        imagen: "imagenes/argentina.jpg",
        precioDia: 80
    },
    {
        nombre: "Brasil",
        region: "América",
        descripcion: "Playas, naturaleza y ciudades llenas de vida.",
        imagen: "imagenes/brasil.jpg",
        precioDia: 100
    },
    {
        nombre: "España",
        region: "Europa",
        descripcion: "Historia, cultura y una gran variedad de paisajes.",
        imagen: "imagenes/espana.jpg",
        precioDia: 140
    },
    {
        nombre: "Italia",
        region: "Europa",
        descripcion: "Historia, gastronomía y ciudades inolvidables.",
        imagen: "imagenes/italia.jpg",
        precioDia: 150
    },
    {
        nombre: "Tailandia",
        region: "Asia",
        descripcion: "Templos, playas paradisíacas y una cultura única.",
        imagen: "imagenes/tailandia.jpg",
        precioDia: 90
    },
    {
        nombre: "Japón",
        region: "Asia",
        descripcion: "Tradición, tecnología y paisajes sorprendentes.",
        imagen: "imagenes/japon.jpg",
        precioDia: 160
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
const cargarDestinosCotizacion = () => {

    const selectDestino = document.getElementById("destinoCotizacion");

    destinos.forEach(destino => {
        selectDestino.innerHTML += `
            <option value="${destino.nombre}">${destino.nombre}</option>
        `;
    });

}
const calcularCotizacion = () => {

    const nombreDestino = document.getElementById("destinoCotizacion").value;
    const dias = Number(document.getElementById("dias").value);
    const viajeros = Number(document.getElementById("viajeros").value);
    const alojamiento = document.getElementById("alojamiento").value;
    const resultado = document.getElementById("resultadoCotizacion");
    const traslado = document.getElementById("traslado").checked;
    const excursion = document.getElementById("excursion").checked;

    if (nombreDestino == "" || dias <= 0 || viajeros <= 0 || alojamiento == "") {
        resultado.innerHTML = "<p>Por favor, completá correctamente todos los datos.</p>";
        return;
    }

    const destinoSeleccionado = destinos.find(destino => destino.nombre == nombreDestino);

    let multiplicadorAlojamiento = 1;

    if (alojamiento == "estandar") {
        multiplicadorAlojamiento = 1.25;
    } else if (alojamiento == "premium") {
        multiplicadorAlojamiento = 1.50;
    }

    let total = destinoSeleccionado.precioDia * dias * viajeros * multiplicadorAlojamiento;

    if (traslado) {
        total += 50 * viajeros;
    }

    if (excursion) {
        total += 80 * viajeros;
    }

    resultado.innerHTML = `
    <h3>Cotización estimada</h3>
    <p>Destino: ${destinoSeleccionado.nombre}</p>
    <p>Duración: ${dias} días</p>
    <p>Viajeros: ${viajeros}</p>
    <p>Alojamiento: ${alojamiento}</p>
    <p><strong>Total estimado: USD ${total}</strong></p>
`;

}
const validarContacto = () => {

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const motivo = document.getElementById("motivo").value;
    const mensaje = document.getElementById("mensaje").value;
    const resultado = document.getElementById("resultadoContacto");

    if (nombre == "" || email == "" || motivo == "" || mensaje == "") {
        resultado.innerHTML = "<p>Por favor, completá todos los campos.</p>";
        return;
    }

    resultado.innerHTML = `
        <h3>¡Consulta enviada!</h3>
        <p>Gracias ${nombre}. Recibimos tu mensaje correctamente.</p>
    `;

}