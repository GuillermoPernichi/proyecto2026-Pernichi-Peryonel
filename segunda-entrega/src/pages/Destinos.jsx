import { useEffect, useState } from "react";
import { obtenerDestinos } from "@api/destinosApi";
import { useNavigate } from "react-router-dom";

function Destinos() {
  const [busqueda, setBusqueda] = useState("");
  const [continente, setContinente] = useState("Todos");
  const [orden, setOrden] = useState("az");
  const navigate = useNavigate();

  const continentes = [
    "Todos",
    "América",
    "Europa",
    "Asia",
    "África",
    "Oceanía",
  ];
  const [destinos, setDestinos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const controlador = new AbortController();

    const cargarDestinos = async () => {
      try {
        setCargando(true);
        setError("");

        const respuesta = await obtenerDestinos({
          signal: controlador.signal,
        });

        if (!controlador.signal.aborted) {
          setDestinos(respuesta);
        }
      } catch (error) {
        if (!controlador.signal.aborted) {
          setError(error.message);
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCargando(false);
        }
      }
    };

    cargarDestinos();

    return () => controlador.abort();
  }, []);
  const destinosFiltrados = destinos
    .filter((destino) => {
      const coincideBusqueda = destino.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase());

      const coincideContinente =
        continente === "Todos" || destino.continente === continente;

      return coincideBusqueda && coincideContinente;
    })
    .sort((a, b) => {
      if (orden === "az") {
        return a.nombre.localeCompare(b.nombre);
      }

      return b.nombre.localeCompare(a.nombre);
    });

  return (
    <main>
      <section className="encabezado-pagina">
        <h1>Explorá nuestros destinos</h1>
        <p>
          Elegí una región y descubrí lugares increíbles para tu próximo viaje.
        </p>
      </section>

      <section className="filtros-destinos">
        <div className="buscador-destinos">
          <label htmlFor="buscarDestino">Buscar destino</label>

          <input
            type="text"
            id="buscarDestino"
            placeholder="Ej: Italia, Japón, Argentina..."
            maxLength="50"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <div className="continentes-destinos">
          {continentes.map((item) => (
            <button
              key={item}
              type="button"
              className={continente === item ? "continente-activo" : ""}
              onClick={() => setContinente(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="orden-destinos">
          <label htmlFor="ordenDestinos">Ordenar por:</label>

          <select
            id="ordenDestinos"
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
          >
            <option value="az">A - Z</option>
            <option value="za">Z - A</option>
          </select>
        </div>
      </section>

      <section className="seccion-destinos">
        <h2>Destinos disponibles</h2>

        <div className="contenedor-destinos">
          {destinosFiltrados.length > 0 ? (
            destinosFiltrados.map((destino) => (
              <article className="tarjeta-destino" key={destino.id}>
                <img
                  src={destino.imagen}
                  alt={`Paisaje de ${destino.nombre}`}
                />
                {cargando ? (
                  <p className="estado-destinos">Cargando destinos...</p>
                ) : error ? (
                  <p className="estado-destinos error-destinos">{error}</p>
                ) : (
                  <div className="contenido-destino">
                    <p className="continente-destino">{destino.continente}</p>

                    <h2>{destino.nombre}</h2>

                    <p>{destino.descripcion}</p>

                    <button
                      type="button"
                      onClick={() => navigate(`/destinos/${destino.id}`)}
                    >
                      Ver destino
                    </button>
                  </div>
                )}
              </article>
            ))
          ) : (
            <p className="sin-resultados">
              No encontramos destinos con esos filtros.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default Destinos;
