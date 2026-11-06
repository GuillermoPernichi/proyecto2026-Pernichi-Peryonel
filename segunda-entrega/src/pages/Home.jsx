import { Link } from "react-router-dom";
import TarjetaDestino from "@components/TarjetaDestino.jsx";
import imagenArgentina from "@assets/argentina.jpg";

function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Descubrí tu próximo destino</h1>
        <p>Ideas, itinerarios y experiencias para vivir tu próxima aventura.</p>
        <Link to="/destinos">Explorar destinos</Link>
      </section>

      <section className="destinos-destacados">
        <h2>Destinos destacados</h2>
        <p>Descubrí algunos de nuestros destinos recomendados.</p>
        <div className="contenedor-destinos">
          <TarjetaDestino
            nombre="Tailandia"
            descripcion="Templos, playas paradisíacas y una cultura única."
            imagen="/imagenes/tailandia.jpg"
          />

          <TarjetaDestino
            nombre="Italia"
            descripcion="Historia, gastronomía y ciudades inolvidables."
            imagen="/imagenes/italia.jpg"
          />

          <TarjetaDestino
            nombre="Argentina"
            descripcion="Montañas, naturaleza y paisajes para descubrir."
            imagen={imagenArgentina}
          />
        </div>
      </section>

      <section>
        <h2>Itinerarios recomendados</h2>
        <p>Descubrí algunos de nuestros recorridos recomendados.</p>

        <div className="contenedor-itinerarios">
          <article className="tarjeta-itinerario">
            <h3>Italia clásica</h3>
            <p>10 días</p>
            <p>
              Arte, historia y gastronomía en las grandes ciudades italianas.
            </p>
            <Link to="/itinerarios?buscar=Italia%20clásica">
              Ver itinerario
            </Link>
          </article>

          <article className="tarjeta-itinerario">
            <h3>Japón tradicional y Alpes</h3>
            <p>9 días</p>
            <p>Ciudades tradicionales y paisajes del centro de Japón.</p>
            <Link to="/itinerarios?buscar=Japón%20tradicional%20y%20Alpes">
              Ver itinerario
            </Link>
          </article>

          <article className="tarjeta-itinerario">
            <h3>Tokio y gastronomía</h3>
            <p>6 días</p>
            <p>
              Una experiencia urbana y gastronómica en Tokio y sus alrededores.
            </p>
            <Link to="/itinerarios?buscar=Tokio%20y%20gastronomía">
              Ver itinerario
            </Link>
          </article>
        </div>
      </section>

      <section className="seccion-cotizacion">
        <h2>Planificá tu próximo viaje</h2>
        <p>
          Calculá un presupuesto estimado según el destino, la duración y la
          cantidad de viajeros.
        </p>
        <Link to="/cotizacion">Cotizar mi viaje</Link>
      </section>
    </main>
  );
}

export default Home;
