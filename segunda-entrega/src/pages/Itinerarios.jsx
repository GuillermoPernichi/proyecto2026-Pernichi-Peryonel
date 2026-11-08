import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { obtenerItinerarios } from "@api/itinerariosApi";
import { obtenerDestinos } from "@api/destinosApi";

function Itinerarios() {
  const [searchParams, setSearchParams] = useSearchParams();

  const busqueda = searchParams.get("buscar") || "";

  const [destinoSeleccionado, setDestinoSeleccionado] = useState("Todos");
  const [duracion, setDuracion] = useState("Todos");
  const [orden, setOrden] = useState("az");
  const [itinerarios, setItinerarios] = useState([]);
  const [destinos, setDestinos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const controlador = new AbortController();

    const cargarItinerarios = async () => {
      try {
        setCargando(true);
        setError("");

        const [datosItinerarios, datosDestinos] = await Promise.all([
          obtenerItinerarios({ signal: controlador.signal }),
          obtenerDestinos({ signal: controlador.signal }),
        ]);

        if (!controlador.signal.aborted) {
          setItinerarios(datosItinerarios);
          setDestinos(datosDestinos);
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

    cargarItinerarios();

    return () => controlador.abort();
  }, []);

  const destinosConItinerarios = destinos
    .filter((destino) =>
      itinerarios.some(
        (itinerario) => String(itinerario.idDestino) === String(destino.id),
      ),
    )
    .sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));

  const obtenerNombreDestino = (idDestino) => {
    const destino = destinos.find(
      (destino) => String(destino.id) === String(idDestino),
    );
    return destino ? destino.nombre : "Destino desconocido";
  };

  const itinerariosFiltrados = itinerarios
    .filter((itinerario) => {
      const nombreDestino = obtenerNombreDestino(itinerario.idDestino);

      const texto = busqueda.toLocaleLowerCase("es");

      const coincideBusqueda =
        itinerario.nombre.toLocaleLowerCase("es").includes(texto) ||
        nombreDestino.toLocaleLowerCase("es").includes(texto);

      const coincideDestino =
        destinoSeleccionado === "Todos" ||
        String(itinerario.idDestino) === String(destinoSeleccionado);

      let coincideDuracion = true;

      if (duracion === "corto") {
        coincideDuracion = itinerario.dias <= 5;
      } else if (duracion === "medio") {
        coincideDuracion = itinerario.dias >= 6 && itinerario.dias <= 10;
      } else if (duracion === "largo") {
        coincideDuracion = itinerario.dias > 10;
      }

      return coincideBusqueda && coincideDestino && coincideDuracion;
    })
    .sort((a, b) => {
      if (orden === "za") {
        return b.nombre.localeCompare(a.nombre, "es");
      }

      if (orden === "diasMenor") {
        return a.dias - b.dias;
      }

      if (orden === "diasMayor") {
        return b.dias - a.dias;
      }

      return a.nombre.localeCompare(b.nombre, "es");
    });

  return (
    <main>
      <section className="presentacion-pagina">
        <h1>Itinerarios</h1>
        <p>Encontrá el recorrido ideal para tu próximo viaje.</p>
      </section>

      <section className="filtros-itinerarios">
        <div className="buscador-itinerarios">
          <label htmlFor="buscarItinerario">Buscar itinerario</label>

          <input
            type="text"
            id="buscarItinerario"
            placeholder="Ej: Japón, Italia clásica, Caribe..."
            maxLength={50}
            value={busqueda}
            onChange={(e) => {
              const valor = e.target.value;
              setSearchParams(valor ? { buscar: valor } : {}, {
                replace: true,
              });
            }}
          />
        </div>

        <div className="opciones-filtros-itinerarios">
          <div className="filtro-itinerario">
            <label htmlFor="destinoItinerario">Destino</label>

            <select
              id="destinoItinerario"
              value={destinoSeleccionado}
              onChange={(e) => setDestinoSeleccionado(e.target.value)}
            >
              <option value="Todos">Todos los destinos</option>

              {destinosConItinerarios.map((destino) => (
                <option key={destino.id} value={destino.id}>
                  {destino.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="filtro-itinerario">
            <label htmlFor="duracionItinerario">Duración</label>

            <select
              id="duracionItinerario"
              value={duracion}
              onChange={(e) => setDuracion(e.target.value)}
            >
              <option value="Todos">Todas</option>
              <option value="corto">Hasta 5 días</option>
              <option value="medio">De 6 a 10 días</option>
              <option value="largo">Más de 10 días</option>
            </select>
          </div>

          <div className="filtro-itinerario">
            <label htmlFor="ordenItinerario">Ordenar por</label>

            <select
              id="ordenItinerario"
              value={orden}
              onChange={(e) => setOrden(e.target.value)}
            >
              <option value="az">A - Z</option>
              <option value="za">Z - A</option>
              <option value="diasMenor">Menor duración</option>
              <option value="diasMayor">Mayor duración</option>
            </select>
          </div>
        </div>
      </section>
      {cargando ? (
        <p className="estado-itinerarios">Cargando itinerarios...</p>
      ) : error ? (
        <p className="estado-itinerarios error-itinerarios">{error}</p>
      ) : (
        <section className="seccion-itinerarios">
          <h2>Itinerarios disponibles ({itinerariosFiltrados.length})</h2>

          {itinerariosFiltrados.length > 0 ? (
            <div className="contenedor-itinerarios">
              {itinerariosFiltrados.map((itinerario) => (
                <article className="tarjeta-itinerario" key={itinerario.id}>
                  <h3>{itinerario.nombre}</h3>

                  <p>
                    <strong>Duración:</strong> {itinerario.dias} días
                  </p>

                  <p>{itinerario.descripcion}</p>

                  <Link to={`/itinerarios/${itinerario.id}`}>
                    Ver itinerario
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p className="sin-resultados">
              No encontramos itinerarios con esos filtros.
            </p>
          )}
        </section>
      )}
    </main>
  );
}

export default Itinerarios;
