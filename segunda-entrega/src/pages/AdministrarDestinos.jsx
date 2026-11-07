import { useEffect, useState } from "react";
import {
  obtenerDestinos,
  crearDestino,
  actualizarDestino,
  eliminarDestino,
} from "@api/destinosApi";

function AdministrarDestinos() {
  const [destinos, setDestinos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [formulario, setFormulario] = useState({
    nombre: "",
    continente: "",
    descripcion: "",
    moneda: "",
    idioma: "",
    mejorEpoca: "",
    imagen: "",
  });

  const [guardando, setGuardando] = useState(false);
  const [mensajeFormulario, setMensajeFormulario] = useState("");
  const [errorFormulario, setErrorFormulario] = useState("");
  const [errorNombre, setErrorNombre] = useState("");
  const [errorContinente, setErrorContinente] = useState("");
  const [errorDescripcion, setErrorDescripcion] = useState("");
  const [errorMoneda, setErrorMoneda] = useState("");
  const [errorIdioma, setErrorIdioma] = useState("");
  const [errorMejorEpoca, setErrorMejorEpoca] = useState("");
  const [idEnEdicion, setIdEnEdicion] = useState(null);
  const [idEliminando, setIdEliminando] = useState(null);
  useEffect(() => {
    const controlador = new AbortController();

    const cargarDestinos = async () => {
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

    cargarDestinos();

    return () => controlador.abort();
  }, []);
  const manejarCambio = (evento) => {
    const { name, value } = evento.target;

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));

    if (name === "nombre") {
      const nombreLimpio = value.trim();

      if (!nombreLimpio) {
        setErrorNombre("Ingresá el nombre del destino.");
      } else {
        const nombreDuplicado = destinos.some(
          (destino) =>
            String(destino.id) !== String(idEnEdicion) &&
            destino.nombre.toLocaleLowerCase("es") ===
              nombreLimpio.toLocaleLowerCase("es"),
        );

        setErrorNombre(
          nombreDuplicado ? "Ya existe un destino con ese nombre." : "",
        );
      }
    }

    if (name === "continente") {
      setErrorContinente(value === "" ? "Seleccioná un continente." : "");
    }
    if (name === "descripcion") {
      setErrorDescripcion(
        value.trim() === "" ? "Ingresá una descripción del destino." : "",
      );
    }
    if (name === "moneda") {
      setErrorMoneda(
        value.trim() === "" ? "Ingresá la moneda del destino." : "",
      );
    }
    if (name === "idioma") {
      setErrorIdioma(
        value.trim() === "" ? "Ingresá el idioma del destino." : "",
      );
    }
    if (name === "mejorEpoca") {
      setErrorMejorEpoca(
        value.trim() === "" ? "Ingresá la mejor época para viajar." : "",
      );
    }
  };
  const comenzarEdicion = (destino) => {
    setIdEnEdicion(destino.id);

    setFormulario({
      nombre: destino.nombre || "",
      continente: destino.continente || "",
      descripcion: destino.descripcion || "",
      moneda: destino.moneda || "",
      idioma: destino.idioma || "",
      mejorEpoca: destino.mejorEpoca || "",
      imagen: destino.imagen || "",
    });

    setMensajeFormulario("");
    setErrorFormulario("");
    setErrorNombre("");
    setErrorContinente("");
    setErrorDescripcion("");
    setErrorMoneda("");
    setErrorIdioma("");
    setErrorMejorEpoca("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const cancelarEdicion = () => {
    setIdEnEdicion(null);

    setFormulario({
      nombre: "",
      continente: "",
      descripcion: "",
      moneda: "",
      idioma: "",
      mejorEpoca: "",
      imagen: "",
    });

    setMensajeFormulario("");
    setErrorFormulario("");
    setErrorNombre("");
    setErrorContinente("");
    setErrorDescripcion("");
    setErrorMoneda("");
    setErrorIdioma("");
    setErrorMejorEpoca("");
  };
  const manejarEliminacion = async (destino) => {
    const confirmado = window.confirm(
      `¿Estás seguro de que querés eliminar "${destino.nombre}"?`,
    );

    if (!confirmado) {
      return;
    }

    try {
      setIdEliminando(destino.id);
      setErrorFormulario("");
      setMensajeFormulario("");

      await eliminarDestino(destino.id);

      setDestinos((anterior) =>
        anterior.filter((item) => String(item.id) !== String(destino.id)),
      );

      if (String(idEnEdicion) === String(destino.id)) {
        cancelarEdicion();
      }

      setMensajeFormulario(
        `El destino "${destino.nombre}" se eliminó correctamente.`,
      );
    } catch (error) {
      setErrorFormulario(error.message);
    } finally {
      setIdEliminando(null);
    }
  };
  const manejarEnvio = async (evento) => {
    evento.preventDefault();

    setMensajeFormulario("");
    setErrorFormulario("");

    const datosDestino = {
      nombre: formulario.nombre.trim(),
      continente: formulario.continente,
      descripcion: formulario.descripcion.trim(),
      moneda: formulario.moneda.trim(),
      idioma: formulario.idioma.trim(),
      mejorEpoca: formulario.mejorEpoca.trim(),
      imagen: formulario.imagen.trim() || "/imagenes/sin-imagen.jpg",
    };

    const errores = {
      nombre: !datosDestino.nombre,
      continente: !datosDestino.continente,
      descripcion: !datosDestino.descripcion,
      moneda: !datosDestino.moneda,
      idioma: !datosDestino.idioma,
      mejorEpoca: !datosDestino.mejorEpoca,
    };

    setErrorNombre(errores.nombre ? "Ingresá el nombre del destino." : "");

    setErrorContinente(errores.continente ? "Seleccioná un continente." : "");

    setErrorDescripcion(
      errores.descripcion ? "Ingresá una descripción del destino." : "",
    );

    setErrorMoneda(errores.moneda ? "Ingresá la moneda del destino." : "");

    setErrorIdioma(errores.idioma ? "Ingresá el idioma del destino." : "");

    setErrorMejorEpoca(
      errores.mejorEpoca ? "Ingresá la mejor época para viajar." : "",
    );

    if (Object.values(errores).some(Boolean)) {
      setErrorFormulario("Completá todos los campos obligatorios.");
      return;
    }

    const nombreDuplicado = destinos.some(
      (destino) =>
        String(destino.id) !== String(idEnEdicion) &&
        destino.nombre.toLocaleLowerCase("es") ===
          datosDestino.nombre.toLocaleLowerCase("es"),
    );

    if (nombreDuplicado) {
      setErrorNombre("Ya existe un destino con ese nombre.");
      return;
    }

    setErrorNombre("");

    try {
      setGuardando(true);

      if (idEnEdicion !== null) {
        const destinoActualizado = await actualizarDestino(
          idEnEdicion,
          datosDestino,
        );

        setDestinos((anterior) =>
          anterior.map((destino) =>
            String(destino.id) === String(idEnEdicion)
              ? destinoActualizado
              : destino,
          ),
        );

        setMensajeFormulario("¡Destino actualizado correctamente!");
      } else {
        const destinoCreado = await crearDestino({
          ...datosDestino,
          lugares: [],
        });

        setDestinos((anterior) => [...anterior, destinoCreado]);

        setMensajeFormulario("¡Destino agregado correctamente!");
      }

      setIdEnEdicion(null);

      setFormulario({
        nombre: "",
        continente: "",
        descripcion: "",
        moneda: "",
        idioma: "",
        mejorEpoca: "",
        imagen: "",
      });
      setErrorNombre("");
      setErrorContinente("");
      setErrorDescripcion("");
      setErrorMoneda("");
      setErrorIdioma("");
      setErrorMejorEpoca("");
    } catch (error) {
      setErrorFormulario(error.message);
    } finally {
      setGuardando(false);
    }
  };
  return (
    <main>
      <section className="encabezado-pagina">
        <h1>Administrar destinos</h1>
        <p>Gestioná los destinos disponibles en TravelGo.</p>
      </section>
      <section className="seccion-formulario-destino">
        <h2>
          {idEnEdicion !== null ? "Editar destino" : "Agregar nuevo destino"}
        </h2>

        <form onSubmit={manejarEnvio} className="formulario-destino" noValidate>
          <div className="campos-formulario-destino">
            <div className="campo-destino">
              <label htmlFor="nombre-destino">Nombre *</label>
              <input
                id="nombre-destino"
                name="nombre"
                type="text"
                value={formulario.nombre}
                onChange={manejarCambio}
                required
                maxLength={100}
                aria-invalid={Boolean(errorNombre)}
                aria-describedby={errorNombre ? "error-nombre" : undefined}
              />

              {errorNombre && (
                <p id="error-nombre" className="error-formulario" role="alert">
                  {errorNombre}
                </p>
              )}
            </div>

            <div className="campo-destino">
              <label htmlFor="continente-destino">Continente *</label>
              <select
                id="continente-destino"
                name="continente"
                value={formulario.continente}
                onChange={manejarCambio}
                required
                aria-invalid={Boolean(errorContinente)}
                aria-describedby={
                  errorContinente ? "error-continente" : undefined
                }
              >
                <option value="">Seleccioná un continente</option>
                <option value="América">América</option>
                <option value="Europa">Europa</option>
                <option value="Asia">Asia</option>
                <option value="África">África</option>
                <option value="Oceanía">Oceanía</option>
              </select>
              {errorContinente && (
                <p
                  id="error-continente"
                  className="error-formulario"
                  role="alert"
                >
                  {errorContinente}
                </p>
              )}
            </div>

            <div className="campo-destino campo-ancho-completo">
              <label htmlFor="descripcion-destino">Descripción *</label>
              <textarea
                id="descripcion-destino"
                name="descripcion"
                value={formulario.descripcion}
                onChange={manejarCambio}
                rows={4}
                required
                aria-invalid={Boolean(errorDescripcion)}
                aria-describedby={
                  errorDescripcion ? "error-descripcion" : undefined
                }
              />
              {errorDescripcion && (
                <p
                  id="error-descripcion"
                  className="error-formulario"
                  role="alert"
                >
                  {errorDescripcion}
                </p>
              )}
            </div>

            <div className="campo-destino">
              <label htmlFor="moneda-destino">Moneda *</label>
              <input
                id="moneda-destino"
                name="moneda"
                type="text"
                value={formulario.moneda}
                onChange={manejarCambio}
                required
                aria-invalid={Boolean(errorMoneda)}
                aria-describedby={errorMoneda ? "error-moneda" : undefined}
              />
              {errorMoneda && (
                <p id="error-moneda" className="error-formulario" role="alert">
                  {errorMoneda}
                </p>
              )}
            </div>

            <div className="campo-destino">
              <label htmlFor="idioma-destino">Idioma *</label>
              <input
                id="idioma-destino"
                name="idioma"
                type="text"
                value={formulario.idioma}
                onChange={manejarCambio}
                required
                aria-invalid={Boolean(errorIdioma)}
                aria-describedby={errorIdioma ? "error-idioma" : undefined}
              />
              {errorIdioma && (
                <p id="error-idioma" className="error-formulario" role="alert">
                  {errorIdioma}
                </p>
              )}
            </div>

            <div className="campo-destino">
              <label htmlFor="epoca-destino">Mejor época para viajar *</label>
              <input
                id="epoca-destino"
                name="mejorEpoca"
                type="text"
                value={formulario.mejorEpoca}
                onChange={manejarCambio}
                required
                aria-invalid={Boolean(errorMejorEpoca)}
                aria-describedby={
                  errorMejorEpoca ? "error-mejor-epoca" : undefined
                }
              />
              {errorMejorEpoca && (
                <p
                  id="error-mejor-epoca"
                  className="error-formulario"
                  role="alert"
                >
                  {errorMejorEpoca}
                </p>
              )}
            </div>

            <div className="campo-destino">
              <label htmlFor="imagen-destino">Ruta de imagen (opcional)</label>
              <input
                id="imagen-destino"
                name="imagen"
                type="text"
                value={formulario.imagen}
                onChange={manejarCambio}
                placeholder="/imagenes/sin-imagen.jpg"
              />
            </div>
          </div>

          {errorFormulario && (
            <p className="mensaje-formulario error-formulario" role="alert">
              {errorFormulario}
            </p>
          )}

          {mensajeFormulario && (
            <p className="mensaje-formulario exito-formulario" role="status">
              {mensajeFormulario}
            </p>
          )}

          <div className="acciones-formulario-destino">
            <button
              type="submit"
              className="boton-guardar-destino"
              disabled={guardando}
            >
              {guardando
                ? "Guardando..."
                : idEnEdicion !== null
                  ? "Guardar cambios"
                  : "Agregar destino"}
            </button>

            {idEnEdicion !== null && (
              <button
                type="button"
                className="boton-cancelar-edicion"
                onClick={cancelarEdicion}
                disabled={guardando}
              >
                Cancelar
              </button>
            )}
          </div>
        </form>
      </section>
      <section className="administracion-destinos">
        <div className="encabezado-administracion">
          <h2>Listado de destinos</h2>
          <span>{destinos.length} destinos registrados</span>
        </div>

        {cargando ? (
          <p className="estado-destinos">Cargando destinos...</p>
        ) : error ? (
          <p className="estado-destinos error-destinos">{error}</p>
        ) : destinos.length === 0 ? (
          <p className="estado-destinos">No hay destinos registrados.</p>
        ) : (
          <div className="contenedor-tabla-destinos">
            <table className="tabla-destinos">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Continente</th>
                  <th>Moneda</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {[...destinos]
                  .sort((a, b) =>
                    a.nombre.localeCompare(b.nombre, "es", {
                      sensitivity: "base",
                    }),
                  )
                  .map((destino) => (
                    <tr key={destino.id}>
                      <td>{destino.nombre}</td>
                      <td>{destino.continente}</td>
                      <td>{destino.moneda}</td>
                      <td>
                        <div className="acciones-destino">
                          <button
                            type="button"
                            className="boton-editar-destino"
                            onClick={() => comenzarEdicion(destino)}
                            disabled={guardando}
                          >
                            Editar
                          </button>

                          <button
                            type="button"
                            className="boton-eliminar-destino"
                            onClick={() => manejarEliminacion(destino)}
                            disabled={guardando || idEliminando !== null}
                          >
                            {String(idEliminando) === String(destino.id)
                              ? "Eliminando..."
                              : "Eliminar"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}

export default AdministrarDestinos;
