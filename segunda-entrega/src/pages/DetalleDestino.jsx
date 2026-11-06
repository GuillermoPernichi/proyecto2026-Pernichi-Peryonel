import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerDestinos } from "@api/destinosApi";
import itinerarios from "@/data/itinerarios.js";

function DetalleDestino() {
  const { id } = useParams();

  const [destinos, setDestinos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  const destino = destinos.find((destino) => String(destino.id) === String(id));
  useEffect(() => {
    const controlador = new AbortController();

    const cargarDestino = async () => {
      try {
        setCargando(true);
        setError("");

        const datos = await obtenerDestinos({
          signal: controlador.signal,
        });

        if (!controlador.signal.aborted) {
          setDestinos(datos);
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

    cargarDestino();

    return () => controlador.abort();
  }, []);
  if (cargando) {
    return (
      <main>
        <section className="destino-no-encontrado">
          <h2>Cargando destino...</h2>
          <p>Estamos obteniendo la información del viaje.</p>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <section className="destino-no-encontrado">
          <h2>No pudimos cargar el destino</h2>
          <p>{error}</p>
          <Link to="/destinos" className="volver-destinos">
            Volver a destinos
          </Link>
        </section>
      </main>
    );
  }

  if (!destino) {
    return (
      <main>
        <section className="destino-no-encontrado">
          <h1>Destino no encontrado</h1>

          <p>
            No pudimos encontrar el destino seleccionado. Podés explorar los
            destinos disponibles y elegir otro lugar para tu próximo viaje.
          </p>

          <Link to="/destinos" className="volver-destinos">
            Volver a destinos
          </Link>
        </section>
      </main>
    );
  }

  const zonas = [
    ...new Set(
      destino.lugares.filter((lugar) => lugar.zona).map((lugar) => lugar.zona),
    ),
  ];

  const lugaresSinZona = destino.lugares.filter((lugar) => !lugar.zona);
  const itinerariosDelDestino = destino
    ? itinerarios.filter(
        (item) => String(item.idDestino) === String(destino.id),
      )
    : [];
  return (
    <main>
      <section className="detalle-destino">
        <div className="encabezado-detalle">
          <img src={destino.imagen} alt={`Paisaje de ${destino.nombre}`} />

          <div className="informacion-detalle">
            <p>{destino.continente}</p>
            <h1>{destino.nombre}</h1>
            <p>{destino.descripcion}</p>

            <div className="datos-destino">
              <p>
                <strong>Moneda:</strong> {destino.moneda}
              </p>
              <p>
                <strong>Idioma:</strong> {destino.idioma}
              </p>
              <p>
                <strong>Mejor época:</strong> {destino.mejorEpoca}
              </p>
            </div>
          </div>
        </div>

        <div className="lugares-destino">
          <h2>Lugares destacados</h2>

          {zonas.map((zona) => (
            <div className="grupo-zona" key={zona}>
              <h3 className="titulo-zona">{zona}</h3>

              <div className="contenedor-lugares">
                {destino.lugares
                  .filter((lugar) => lugar.zona === zona)
                  .map((lugar) => (
                    <article className="tarjeta-lugar" key={lugar.nombre}>
                      <img src={lugar.imagen} alt={lugar.nombre} />
                      <div className="contenido-lugar">
                        <h4>{lugar.nombre}</h4>
                        <p>{lugar.descripcion}</p>
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          ))}

          {lugaresSinZona.length > 0 && (
            <div className="contenedor-lugares">
              {lugaresSinZona.map((lugar) => (
                <article className="tarjeta-lugar" key={lugar.nombre}>
                  <img src={lugar.imagen} alt={lugar.nombre} />
                  <div className="contenido-lugar">
                    <h4>{lugar.nombre}</h4>
                    <p>{lugar.descripcion}</p>
                  </div>
                </article>
              ))}
            </div>
          )}

          {destino.lugares.length === 0 && (
            <p>
              Próximamente incorporaremos lugares destacados para este destino.
            </p>
          )}
        </div>
        <section className="itinerarios-del-destino">
          <h2>Itinerarios disponibles en {destino.nombre}</h2>

          {itinerariosDelDestino.length > 0 ? (
            <div className="contenedor-itinerarios">
              {itinerariosDelDestino.map((itinerario) => (
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
            <p>Todavía no tenemos itinerarios disponibles para este destino.</p>
          )}
        </section>
        <Link className="volver-destinos" to="/destinos">
          Volver a destinos
        </Link>
      </section>
    </main>
  );
}

export default DetalleDestino;
