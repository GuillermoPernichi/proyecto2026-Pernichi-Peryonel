import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@layout/Layout.jsx";
import Home from "@pages/Home.jsx";
import Destinos from "@pages/Destinos.jsx";
import Itinerarios from "@pages/Itinerarios.jsx";
import Cotizacion from "@pages/Cotizacion.jsx";
import Nosotros from "@pages/Nosotros.jsx";

import "@styles/main.scss";
import DetalleDestino from "@pages/DetalleDestino.jsx";
import ScrollToTop from "@components/ScrollToTop.jsx";
import DetalleItinerario from "@pages/DetalleItinerario.jsx";
import AdministrarDestinos from "@pages/AdministrarDestinos";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="destinos" element={<Destinos />} />
            <Route path="itinerarios" element={<Itinerarios />} />
            <Route path="cotizacion" element={<Cotizacion />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="destinos/:id" element={<DetalleDestino />} />
            <Route path="itinerarios/:id" element={<DetalleItinerario />} />
            <Route
              path="administrar-destinos"
              element={<AdministrarDestinos />}
            />
          </Route>
        }
      </Routes>
    </BrowserRouter>
  );
}
export default App;
