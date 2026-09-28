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