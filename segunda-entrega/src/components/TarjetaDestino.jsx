import { Link } from "react-router-dom";

function TarjetaDestino({ nombre, descripcion, imagen }) {
  return (
    <article className="tarjeta-destino">
      <img src={imagen} alt={`Paisaje de ${nombre}`} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <Link to="/destinos">Ver destino</Link>
    </article>
  );
}

export default TarjetaDestino;
