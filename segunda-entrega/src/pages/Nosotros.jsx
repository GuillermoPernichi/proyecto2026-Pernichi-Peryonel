function Nosotros() {
  return (
    <main>
      <section className="encabezado-pagina">
        <h1>Sobre nosotros</h1>
        <p>Conocé TravelGo y nuestra forma de ayudarte a descubrir el mundo.</p>
      </section>

      <section className="nosotros-presentacion">
        <h2>¿Quiénes somos?</h2>
        <p>
          TravelGo es una plataforma digital pensada para quienes disfrutan
          viajar, conocer nuevos lugares y vivir experiencias inolvidables.
          Nuestro objetivo es reunir en un solo lugar la información y las
          herramientas necesarias para organizar tu próxima aventura.
        </p>
        <p>
          Creemos que cada viaje comienza mucho antes de hacer las valijas. Por
          eso, queremos acompañarte desde la elección del destino hasta la
          planificación de tu itinerario y presupuesto.
        </p>
      </section>

      <section className="nosotros-mision">
        <h2>Nuestra misión</h2>
        <p>
          Facilitar la planificación de viajes mediante una experiencia
          sencilla, accesible y organizada, que permita explorar destinos,
          comparar itinerarios y obtener cotizaciones personalizadas.
        </p>
      </section>

      <section className="nosotros-servicios">
        <h2>¿Qué ofrecemos?</h2>
        <p>
          Herramientas para que puedas planificar tu viaje de manera práctica y
          a tu propio ritmo.
        </p>

        <div className="contenedor-servicios-nosotros">
          <article className="tarjeta-servicio-nosotros">
            <h3>Explorá destinos</h3>
            <p>
              Descubrí países de distintos continentes, conocé sus principales
              atractivos y encontrá inspiración para tu próximo viaje.
            </p>
          </article>

          <article className="tarjeta-servicio-nosotros">
            <h3>Elegí tu itinerario</h3>
            <p>
              Consultá recorridos turísticos con diferentes duraciones,
              actividades y experiencias para encontrar el viaje que mejor se
              adapte a tus intereses.
            </p>
          </article>

          <article className="tarjeta-servicio-nosotros">
            <h3>Planificá tu presupuesto</h3>
            <p>
              Calculá cotizaciones según la cantidad de pasajeros, la duración
              del viaje y los servicios adicionales que quieras incorporar.
            </p>
          </article>
        </div>
      </section>

      <section className="nosotros-proyecto">
        <h2>Un proyecto desarrollado con dedicación</h2>
        <p>
          TravelGo nació como un proyecto académico de desarrollo web, con el
          propósito de aplicar conocimientos de programación, diseño de
          interfaces y desarrollo de aplicaciones interactivas.
        </p>
        <p>
          A lo largo de su desarrollo incorporamos funcionalidades para mejorar
          la experiencia de navegación, facilitar la búsqueda de viajes y
          permitir la gestión de información mediante tecnologías web modernas.
        </p>
      </section>
    </main>
  );
}

export default Nosotros;
