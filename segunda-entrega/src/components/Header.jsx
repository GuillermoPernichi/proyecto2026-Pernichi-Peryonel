import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="marca">
        <h2>TravelGo</h2>
        <p>Viajá · Descubrí · Viví</p>
      </div>

      <nav>
        <NavLink to="/" end>
          Inicio
        </NavLink>
        <NavLink to="/destinos">Destinos</NavLink>
        <NavLink to="/itinerarios">Itinerarios</NavLink>
        <NavLink to="/cotizacion">Cotización</NavLink>
        <NavLink to="/nosotros">Nosotros</NavLink>
        <NavLink to="/administrar-destinos">Administrar</NavLink>
      </nav>
    </header>
  );
}

export default Header;
