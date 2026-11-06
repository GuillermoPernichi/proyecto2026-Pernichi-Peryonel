import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { obtenerDestinos } from "@api/destinosApi";
import { obtenerItinerarios } from "@api/itinerariosApi";

const preciosExtras = {
  traslado: 50,
  seguro: 70,
  excursion: 80,
  guia: 120,
  comidas: 35,
};

const nombresExtras = {
  traslado: "Traslado aeropuerto - hotel",
  seguro: "Seguro de viaje",
  excursion: "Excursión adicional",
  guia: "Guía privado",
  comidas: "Paquete de comidas",
};

const formatearPrecio = (precio) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "USD",
  }).format(precio);

function Cotizacion() {
  const [carrito, setCarrito] = useState(() => {
    try {
      const guardado = JSON.parse(
        localStorage.getItem("carritoTravelGo") || "[]",
      );

      return Array.isArray(guardado) ? guardado : [];
    } catch {
      return [];
    }
  });

  const agregarAlCarrito = () => {
    if (!resultado) return;

    const cotizacionDuplicada = carrito.some((cotizacion) => {
      const { id: idExistente, ...datosExistentes } = cotizacion;
      const { id: idResultado, ...datosResultado } = resultado;

      void idExistente;
      void idResultado;

      return JSON.stringify(datosExistentes) === JSON.stringify(datosResultado);
    });

    if (cotizacionDuplicada) {
      setMensajeCarrito("Esta cotización ya se encuentra en tu carrito.");
      return;
    }

    const nuevaCotizacion = {
      ...resultado,
      id: crypto.randomUUID(),
    };

    const carritoActualizado = [...carrito, nuevaCotizacion];

    setCarrito(carritoActualizado);

    localStorage.setItem("carritoTravelGo", JSON.stringify(carritoActualizado));

    setMensajeCarrito("¡Cotización agregada al carrito correctamente!");
  };

  const eliminarDelCarrito = (id) => {
    const carritoActualizado = carrito.filter(
      (cotizacion) => cotizacion.id !== id,
    );

    setCarrito(carritoActualizado);

    localStorage.setItem("carritoTravelGo", JSON.stringify(carritoActualizado));
  };
  const [searchParams] = useSearchParams();
  const [destinos, setDestinos] = useState([]);
  const [itinerarios, setItinerarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errorCarga, setErrorCarga] = useState("");

  const [idDestino, setIdDestino] = useState("");
  const [idItinerario, setIdItinerario] = useState("");
  useEffect(() => {
    const controlador = new AbortController();

    const cargarDatos = async () => {
      try {
        setCargando(true);
        setErrorCarga("");

        const [datosDestinos, datosItinerarios] = await Promise.all([
          obtenerDestinos({ signal: controlador.signal }),
          obtenerItinerarios({ signal: controlador.signal }),
        ]);

        if (controlador.signal.aborted) return;

        setDestinos(datosDestinos);
        setItinerarios(datosItinerarios);

        const idInicial = searchParams.get("itinerario");
        const itinerarioInicial = datosItinerarios.find(
          (item) => String(item.id) === String(idInicial),
        );

        if (idInicial && itinerarioInicial) {
          setIdDestino(String(itinerarioInicial.idDestino));
          setIdItinerario(String(itinerarioInicial.id));
        }
      } catch (error) {
        if (!controlador.signal.aborted) {
          setErrorCarga(error.message);
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCargando(false);
        }
      }
    };

    cargarDatos();

    return () => controlador.abort();
  }, [searchParams]);

  const [viajeros, setViajeros] = useState("1");

  const [extras, setExtras] = useState({
    traslado: false,
    seguro: false,
    excursion: false,
    guia: false,
    comidas: false,
  });

  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");
  const [mensajeCarrito, setMensajeCarrito] = useState("");

  const destinosOrdenados = [...destinos].sort((a, b) =>
    a.nombre.localeCompare(b.nombre, "es"),
  );

  const itinerariosDisponibles = itinerarios.filter(
    (item) => String(item.idDestino) === String(idDestino),
  );

  const itinerarioSeleccionado = itinerariosDisponibles.find(
    (item) => String(item.id) === String(idItinerario),
  );

  const cambiarExtra = (nombre) => {
    setExtras((actuales) => ({
      ...actuales,
      [nombre]: !actuales[nombre],
    }));
    setResultado(null);
  };

  const calcularCotizacion = (e) => {
    e.preventDefault();
    setError("");
    setResultado(null);
    setMensajeCarrito("");

    const cantidad = Number(viajeros);

    if (!idDestino || !itinerarioSeleccionado || viajeros === "") {
      setError("Completá todos los datos del viaje.");
      return;
    }

    if (!Number.isInteger(cantidad) || cantidad < 1 || cantidad > 20) {
      setError("La cantidad de pasajeros debe estar entre 1 y 20.");
      return;
    }

    const precioBase = itinerarioSeleccionado.precio * cantidad;

    let precioExtras = 0;
    const extrasSeleccionados = [];

    for (const [nombre, seleccionado] of Object.entries(extras)) {
      if (!seleccionado) continue;

      extrasSeleccionados.push(nombresExtras[nombre]);

      if (nombre === "guia") {
        precioExtras += preciosExtras[nombre] * itinerarioSeleccionado.dias;
      } else if (nombre === "comidas") {
        precioExtras +=
          preciosExtras[nombre] * cantidad * itinerarioSeleccionado.dias;
      } else {
        precioExtras += preciosExtras[nombre] * cantidad;
      }
    }

    const destino = destinos.find(
      (item) => String(item.id) === String(idDestino),
    );

    setResultado({
      destino: destino.nombre,
      itinerario: itinerarioSeleccionado.nombre,
      dias: itinerarioSeleccionado.dias,
      recorrido: itinerarioSeleccionado.recorrido,
      viajeros: cantidad,
      precioBase,
      precioExtras,
      extrasSeleccionados,
      total: precioBase + precioExtras,
    });
  };

  return (
    <main>
      <section className="encabezado-pagina">
        <h1>Cotizá tu próximo viaje</h1>
        <p>
          Elegí un destino, un itinerario y los servicios adicionales para
          obtener un presupuesto estimado.
        </p>
      </section>

      <section className="seccion-formulario">
        <h2>Datos del viaje</h2>
        {cargando && (
          <p className="estado-itinerarios">
            Cargando información para tu cotización...
          </p>
        )}

        {errorCarga && (
          <p className="estado-itinerarios error-itinerarios">{errorCarga}</p>
        )}

        {!cargando && !errorCarga && (
          <form onSubmit={calcularCotizacion}>
            <label htmlFor="destinoCotizacion">Destino:</label>
            <select
              id="destinoCotizacion"
              value={idDestino}
              onChange={(e) => {
                setIdDestino(e.target.value);
                setIdItinerario("");
                setResultado(null);
              }}
            >
              <option value="">Seleccionar destino</option>

              {destinosOrdenados.map((destino) => (
                <option key={destino.id} value={destino.id}>
                  {destino.nombre}
                </option>
              ))}
            </select>

            <label htmlFor="itinerarioCotizacion">Itinerario:</label>
            <select
              id="itinerarioCotizacion"
              value={idItinerario}
              onChange={(e) => {
                setIdItinerario(e.target.value);
                setResultado(null);
              }}
            >
              <option value="">Seleccionar itinerario</option>

              {itinerariosDisponibles.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nombre}
                </option>
              ))}
            </select>

            {itinerarioSeleccionado && (
              <div className="resumen-itinerario-cotizacion">
                <h3>{itinerarioSeleccionado.nombre}</h3>
                <p>
                  <strong>Duración:</strong> {itinerarioSeleccionado.dias} días
                </p>
                <p>
                  <strong>Recorrido:</strong> {itinerarioSeleccionado.recorrido}
                </p>
                <p>
                  <strong>Precio base:</strong>{" "}
                  {formatearPrecio(itinerarioSeleccionado.precio)} por pasajero
                </p>
              </div>
            )}

            <label htmlFor="viajeros">Cantidad de pasajeros:</label>
            <input
              type="number"
              id="viajeros"
              min="1"
              max="20"
              step="1"
              value={viajeros}
              onChange={(e) => {
                setViajeros(e.target.value);
                setResultado(null);
              }}
            />

            <div className="extras-cotizacion">
              <h3>Servicios adicionales</h3>

              {Object.keys(preciosExtras).map((nombre) => {
                const descripcion = {
                  traslado: "USD 50 por pasajero",
                  seguro: "USD 70 por pasajero",
                  excursion: "USD 80 por pasajero",
                  guia: "USD 120 por día",
                  comidas: "USD 35 por pasajero por día",
                };

                return (
                  <label key={nombre}>
                    <input
                      type="checkbox"
                      checked={extras[nombre]}
                      onChange={() => cambiarExtra(nombre)}
                    />
                    {nombresExtras[nombre]} ({descripcion[nombre]})
                  </label>
                );
              })}
            </div>

            <button type="submit">Calcular cotización</button>
          </form>
        )}

        {error && <p className="error-cotizacion">{error}</p>}

        {resultado && (
          <div className="resumen-cotizacion">
            <h2>Resumen de tu viaje</h2>

            <p>
              <strong>Destino:</strong> {resultado.destino}
            </p>
            <p>
              <strong>Itinerario:</strong> {resultado.itinerario}
            </p>
            <p>
              <strong>Duración:</strong> {resultado.dias} días
            </p>
            <p>
              <strong>Recorrido:</strong> {resultado.recorrido}
            </p>
            <p>
              <strong>Pasajeros:</strong> {resultado.viajeros}
            </p>
            <p>
              <strong>Precio base:</strong>{" "}
              {formatearPrecio(resultado.precioBase)}
            </p>

            <p>
              <strong>Servicios adicionales:</strong>
            </p>
            <ul>
              {resultado.extrasSeleccionados.length > 0 ? (
                resultado.extrasSeleccionados.map((extra) => (
                  <li key={extra}>{extra}</li>
                ))
              ) : (
                <li>Sin servicios adicionales</li>
              )}
            </ul>

            <p>
              <strong>Total de adicionales:</strong>{" "}
              {formatearPrecio(resultado.precioExtras)}
            </p>

            <h3>Total estimado: {formatearPrecio(resultado.total)}</h3>
            <button
              type="button"
              className="boton-agregar-carrito"
              onClick={agregarAlCarrito}
            >
              Agregar al carrito
            </button>

            {mensajeCarrito && (
              <p className="mensaje-carrito">{mensajeCarrito}</p>
            )}
          </div>
        )}
      </section>
      <section className="seccion-carrito">
        <h2>Mi carrito de cotizaciones</h2>

        {carrito.length === 0 ? (
          <p className="carrito-vacio">
            Todavía no agregaste ninguna cotización al carrito.
          </p>
        ) : (
          <>
            <div className="lista-carrito">
              {carrito.map((cotizacion) => (
                <article key={cotizacion.id} className="tarjeta-carrito">
                  <h3>{cotizacion.itinerario}</h3>

                  <p>
                    <strong>Destino:</strong> {cotizacion.destino}
                  </p>

                  <p>
                    <strong>Duración:</strong> {cotizacion.dias} días
                  </p>

                  <p>
                    <strong>Pasajeros:</strong> {cotizacion.viajeros}
                  </p>

                  <p>
                    <strong>Servicios adicionales:</strong>{" "}
                    {cotizacion.extrasSeleccionados.length > 0
                      ? cotizacion.extrasSeleccionados.join(", ")
                      : "Ninguno"}
                  </p>

                  <p className="total-carrito">
                    Total: {formatearPrecio(cotizacion.total)}
                  </p>

                  <button
                    type="button"
                    className="boton-eliminar-carrito"
                    onClick={() => eliminarDelCarrito(cotizacion.id)}
                  >
                    Eliminar cotización
                  </button>
                </article>
              ))}
            </div>

            <div className="resumen-total-carrito">
              <h3>
                Total del carrito:{" "}
                {formatearPrecio(
                  carrito.reduce(
                    (total, cotizacion) => total + cotizacion.total,
                    0,
                  ),
                )}
              </h3>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default Cotizacion;
