import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerItinerarios } from "@api/itinerariosApi";
import destinos from "@/data/destinos.js";

function DetalleItinerario() {
  const { id } = useParams();

  const [itinerarios, setItinerarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  const itinerario = itinerarios.find((item) => String(item.id) === String(id));
  useEffect(() => {
    const controlador = new AbortController();

    const cargarItinerario = async () => {
      try {
        setCargando(true);
        setError("");

        const datos = await obtenerItinerarios({
          signal: controlador.signal,
        });

        if (!controlador.signal.aborted) {
          setItinerarios(datos);
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

    cargarItinerario();

    return () => controlador.abort();
  }, []);
  if (cargando) {
    return (
      <main>
        <section className="destino-no-encontrado">
          <h2>Cargando itinerario...</h2>
          <p>Estamos obteniendo la información del viaje.</p>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <section className="destino-no-encontrado">
          <h2>No pudimos cargar el itinerario</h2>
          <p>{error}</p>

          <Link to="/itinerarios" className="volver-destinos">
            Volver a itinerarios
          </Link>
        </section>
      </main>
    );
  }
  if (!itinerario) {
    return (
      <main>
        <section className="destino-no-encontrado">
          <h1>Itinerario no encontrado</h1>

          <p>
            No pudimos encontrar el itinerario seleccionado. Podés explorar los
            recorridos disponibles.
          </p>

          <Link to="/itinerarios" className="volver-destinos">
            Volver a itinerarios
          </Link>
        </section>
      </main>
    );
  }

  const destino = destinos.find(
    (item) => String(item.id) === String(itinerario?.idDestino),
  );

  return (
    <main>
      <section className="detalle-itinerario">
        <div className="encabezado-itinerario">
          <p className="etiqueta-itinerario">
            {destino?.nombre || "Destino no disponible"}
          </p>

          <h1>{itinerario.nombre}</h1>

          <p>{itinerario.descripcion}</p>
        </div>

        <div className="informacion-itinerario">
          <div className="contenido-itinerario">
            <section className="bloque-itinerario">
              <h2>Información del viaje</h2>

              <p>
                <strong>Destino:</strong> {destino?.nombre || "No disponible"}
              </p>

              <p>
                <strong>Duración:</strong> {itinerario.dias} días
              </p>

              <p>
                <strong>Recorrido:</strong> {itinerario.recorrido}
              </p>
            </section>

            <section className="bloque-itinerario">
              <h2>Actividades destacadas</h2>

              <ul>
                {itinerario.actividades.map((actividad, index) => (
                  <li key={index}>{actividad}</li>
                ))}
              </ul>
            </section>

            <section className="bloque-itinerario">
              <h2>¿Qué incluye?</h2>

              <ul>
                {itinerario.incluye.map((servicio, index) => (
                  <li key={index}>{servicio}</li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="resumen-itinerario">
            <h2>Precio del itinerario</h2>

            <p className="precio-itinerario">
              USD {itinerario.precio.toLocaleString("es-AR")}
            </p>

            <p>Precio de referencia del itinerario.</p>

            <Link
              className="boton-cotizar"
              to={`/cotizacion?itinerario=${itinerario.id}`}
            >
              Cotizar este itinerario
            </Link>
          </aside>
        </div>

        <div className="navegacion-itinerario">
          <Link to="/itinerarios" className="volver-destinos">
            Volver a itinerarios
          </Link>

          {destino && (
            <Link to={`/destinos/${destino.id}`} className="volver-destinos">
              Ver destino
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}

export default DetalleItinerario;
