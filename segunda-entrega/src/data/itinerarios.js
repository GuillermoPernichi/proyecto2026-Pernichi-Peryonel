const itinerarios = [
    {
        id: 1,
        idDestino: 1,
        nombre: "Escapada a Anguila",
        dias: 5,
        descripcion: "Playas de arena blanca y aguas turquesas en una escapada por Anguila.",
        recorrido: "Anguila",
        precio: 1450,
        actividades: [
            "Recorrido por la isla",
            "Día de playa",
            "Actividad acuática"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 2,
        idDestino: 2,
        nombre: "Antigua y Barbuda caribeña",
        dias: 6,
        descripcion: "Playas, bahías y paisajes tropicales en Antigua y Barbuda.",
        recorrido: "Antigua y Barbuda",
        precio: 1550,
        actividades: [
            "Recorrido panorámico",
            "Días de playa",
            "Paseo en embarcación"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 3,
        idDestino: 3,
        nombre: "Argentina entre ciudad y montaña",
        dias: 9,
        descripcion: "Grandes ciudades, vinos y paisajes patagónicos en un recorrido por Argentina.",
        recorrido: "Buenos Aires → Mendoza → San Carlos de Bariloche",
        precio: 1750,
        actividades: [
            "Recorrido por Buenos Aires",
            "Visita a bodegas en Mendoza",
            "Circuito panorámico en Bariloche"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 4,
        idDestino: 4,
        nombre: "Aruba esencial",
        dias: 6,
        descripcion: "Playas, paisajes y descanso en una experiencia por Aruba.",
        recorrido: "Aruba",
        precio: 1600,
        actividades: [
            "Recorrido por la isla",
            "Día de playa",
            "Atardecer en la costa"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 5,
        idDestino: 5,
        nombre: "Bahamas entre islas",
        dias: 7,
        descripcion: "Aguas cristalinas y playas en un recorrido por dos islas de Bahamas.",
        recorrido: "Isla Nueva Providencia → Gran Exuma",
        precio: 1950,
        actividades: [
            "Recorrido por Nueva Providencia",
            "Excursión a Gran Exuma",
            "Días de playa"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados entre islas",
            "Excursiones indicadas"
        ]
    },
    {
        id: 6,
        idDestino: 6,
        nombre: "Barbados caribeño",
        dias: 6,
        descripcion: "Playas, cultura y paisajes tropicales en Barbados.",
        recorrido: "Barbados",
        precio: 1600,
        actividades: [
            "Recorrido por la isla",
            "Día de playa",
            "Experiencia cultural"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 7,
        idDestino: 7,
        nombre: "Bermudas esencial",
        dias: 5,
        descripcion: "Playas y pequeñas bahías en una escapada por Bermudas.",
        recorrido: "Bermudas",
        precio: 1650,
        actividades: [
            "Recorrido panorámico",
            "Día de playa",
            "Paseo por la costa"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 8,
        idDestino: 8,
        nombre: "Bonaire natural",
        dias: 5,
        descripcion: "Naturaleza y aguas caribeñas en una experiencia por Bonaire.",
        recorrido: "Bonaire",
        precio: 1500,
        actividades: [
            "Recorrido por la isla",
            "Actividad de snorkel",
            "Día de playa"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 9,
        idDestino: 9,
        nombre: "Brasil de norte a sur",
        dias: 13,
        descripcion: "Playas, ciudades y naturaleza en un recorrido por distintas regiones de Brasil.",
        recorrido: "Recife → Natal → Río de Janeiro → Foz do Iguaçu → Gramado",
        precio: 2350,
        actividades: [
            "Recorrido por Recife y Natal",
            "Visita a Río de Janeiro",
            "Excursión a Foz do Iguaçu"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 10,
        idDestino: 10,
        nombre: "Canadá entre ciudades y Rocosas",
        dias: 15,
        descripcion: "Grandes ciudades, lagos y montañas en un recorrido por Canadá.",
        recorrido: "Toronto → Cataratas del Niágara → Montreal → Quebec → Calgary → Banff → Lago Louise → Vancouver",
        precio: 3450,
        actividades: [
            "Visita a las Cataratas del Niágara",
            "Recorrido por Montreal y Quebec",
            "Excursión por las Montañas Rocosas"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 11,
        idDestino: 11,
        nombre: "Chile entre ciudad y desierto",
        dias: 7,
        descripcion: "Una combinación de vida urbana y paisajes del norte de Chile.",
        recorrido: "Santiago → San Pedro de Atacama",
        precio: 1500,
        actividades: [
            "Recorrido por Santiago",
            "Excursión por el desierto de Atacama",
            "Visita a paisajes naturales"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 12,
        idDestino: 12,
        nombre: "Colombia completa",
        dias: 10,
        descripcion: "Ciudades, montañas y Caribe en un recorrido por Colombia.",
        recorrido: "Bogotá → Medellín → Cartagena → Cali",
        precio: 1850,
        actividades: [
            "Recorrido por Bogotá",
            "Visita a Medellín",
            "Paseo por Cartagena"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 13,
        idDestino: 13,
        nombre: "Cuba esencial",
        dias: 7,
        descripcion: "Historia, música, cultura y playas en una semana por Cuba.",
        recorrido: "Cuba",
        precio: 1400,
        actividades: [
            "Recorrido cultural",
            "Visita histórica",
            "Día de playa"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 14,
        idDestino: 14,
        nombre: "Curazao caribeño",
        dias: 6,
        descripcion: "Arquitectura, playas y aguas cristalinas en Curazao.",
        recorrido: "Curazao",
        precio: 1550,
        actividades: [
            "Recorrido por la isla",
            "Día de playa",
            "Actividad de snorkel"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 15,
        idDestino: 15,
        nombre: "Dominica natural",
        dias: 6,
        descripcion: "Selva, cascadas y naturaleza tropical en Dominica.",
        recorrido: "Dominica",
        precio: 1500,
        actividades: [
            "Sendero por la naturaleza",
            "Visita a cascadas",
            "Día de playa"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 16,
        idDestino: 16,
        nombre: "Quito y Ecuador",
        dias: 5,
        descripcion: "Historia andina y cultura ecuatoriana con base en Quito.",
        recorrido: "Quito",
        precio: 1050,
        actividades: [
            "Recorrido por el centro histórico",
            "Visita a miradores",
            "Excursión por los alrededores"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 17,
        idDestino: 17,
        nombre: "Estados Unidos de costa a costa",
        dias: 15,
        descripcion: "Grandes ciudades y paisajes en un recorrido por Estados Unidos.",
        recorrido: "Nueva York → Washington D.C. → Chicago → Las Vegas → Los Ángeles → San Francisco",
        precio: 3750,
        actividades: [
            "Recorrido por Nueva York",
            "Visita a Washington D.C. y Chicago",
            "Ruta por la costa oeste"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 18,
        idDestino: 18,
        nombre: "Granada tropical",
        dias: 6,
        descripcion: "Playas y naturaleza tropical en la isla de Granada.",
        recorrido: "Granada",
        precio: 1550,
        actividades: [
            "Recorrido por la isla",
            "Día de playa",
            "Excursión de naturaleza"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 19,
        idDestino: 19,
        nombre: "Guadalupe caribeña",
        dias: 6,
        descripcion: "Naturaleza, cultura y playas en Guadalupe.",
        recorrido: "Guadalupe",
        precio: 1600,
        actividades: [
            "Recorrido panorámico",
            "Día de playa",
            "Excursión de naturaleza"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 20,
        idDestino: 20,
        nombre: "Tórtola y el Caribe británico",
        dias: 6,
        descripcion: "Una experiencia entre playas y pequeñas bahías de las Islas Vírgenes Británicas.",
        recorrido: "Tórtola",
        precio: 1800,
        actividades: [
            "Recorrido por Tórtola",
            "Paseo en embarcación",
            "Día de playa"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 21,
        idDestino: 21,
        nombre: "Islas Vírgenes estadounidenses",
        dias: 8,
        descripcion: "Un recorrido por tres de las principales Islas Vírgenes de Estados Unidos.",
        recorrido: "Saint Thomas → Saint John → Saint Croix",
        precio: 2100,
        actividades: [
            "Recorrido por Saint Thomas",
            "Excursión a Saint John",
            "Visita a Saint Croix"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados entre islas",
            "Excursiones indicadas"
        ]
    },
    {
        id: 22,
        idDestino: 22,
        nombre: "Jamaica tropical",
        dias: 7,
        descripcion: "Playas, música y cultura en una semana por Jamaica.",
        recorrido: "Jamaica",
        precio: 1650,
        actividades: [
            "Recorrido cultural",
            "Día de playa",
            "Excursión de naturaleza"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 23,
        idDestino: 23,
        nombre: "Martinica esencial",
        dias: 6,
        descripcion: "Naturaleza tropical y cultura franco-caribeña en Martinica.",
        recorrido: "Martinica",
        precio: 1600,
        actividades: [
            "Recorrido por la isla",
            "Día de playa",
            "Visita cultural"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 24,
        idDestino: 24,
        nombre: "México entre historia y Caribe",
        dias: 12,
        descripcion: "Historia, cultura y playas en un recorrido por México.",
        recorrido: "Ciudad de México → Teotihuacán → San Miguel de Allende → Cancún → Tulum",
        precio: 2350,
        actividades: [
            "Recorrido por Ciudad de México",
            "Excursión a Teotihuacán",
            "Días de playa en el Caribe"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 25,
        idDestino: 25,
        nombre: "Perú histórico",
        dias: 8,
        descripcion: "Historia, gastronomía y paisajes andinos en Perú.",
        recorrido: "Lima → Cusco → Urubamba",
        precio: 1650,
        actividades: [
            "Recorrido por Lima",
            "Visita histórica a Cusco",
            "Excursión por el Valle Sagrado"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 26,
        idDestino: 26,
        nombre: "Puerto Rico esencial",
        dias: 6,
        descripcion: "Historia, naturaleza y playas en Puerto Rico.",
        recorrido: "Puerto Rico",
        precio: 1500,
        actividades: [
            "Recorrido histórico",
            "Día de playa",
            "Excursión de naturaleza"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 27,
        idDestino: 27,
        nombre: "República Dominicana tropical",
        dias: 7,
        descripcion: "Playas y paisajes tropicales en República Dominicana.",
        recorrido: "República Dominicana",
        precio: 1550,
        actividades: [
            "Días de playa",
            "Recorrido cultural",
            "Paseo en embarcación"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 28,
        idDestino: 28,
        nombre: "Saint Kitts y Nevis",
        dias: 6,
        descripcion: "Dos pequeñas islas caribeñas entre playas y montañas.",
        recorrido: "Saint Kitts → Nevis",
        precio: 1750,
        actividades: [
            "Recorrido por Saint Kitts",
            "Excursión a Nevis",
            "Día de playa"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 29,
        idDestino: 29,
        nombre: "Santa Lucía natural",
        dias: 6,
        descripcion: "Montañas volcánicas, selva y playas en Santa Lucía.",
        recorrido: "Santa Lucía",
        precio: 1750,
        actividades: [
            "Recorrido panorámico",
            "Excursión de naturaleza",
            "Día de playa"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 30,
        idDestino: 30,
        nombre: "Sint Maarten caribeño",
        dias: 6,
        descripcion: "Playas y ambiente caribeño en Sint Maarten.",
        recorrido: "Sint Maarten",
        precio: 1700,
        actividades: [
            "Recorrido por la isla",
            "Día de playa",
            "Paseo costero"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 31,
        idDestino: 31,
        nombre: "Tobago tropical",
        dias: 6,
        descripcion: "Playas, arrecifes y naturaleza tropical en Tobago.",
        recorrido: "Tobago",
        precio: 1500,
        actividades: [
            "Recorrido panorámico",
            "Día de playa",
            "Actividad acuática"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 32,
        idDestino: 32,
        nombre: "Berlín esencial",
        dias: 5,
        descripcion: "Historia, arquitectura y cultura en la capital alemana.",
        recorrido: "Berlín",
        precio: 1250,
        actividades: [
            "Recorrido histórico",
            "Visita a monumentos",
            "Tiempo libre en Berlín"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 33,
        idDestino: 33,
        nombre: "Viena imperial",
        dias: 5,
        descripcion: "Palacios, música y arquitectura en la capital austríaca.",
        recorrido: "Viena",
        precio: 1300,
        actividades: [
            "Recorrido por el centro histórico",
            "Visita a un palacio",
            "Paseo cultural"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 34,
        idDestino: 34,
        nombre: "Croacia del Adriático",
        dias: 7,
        descripcion: "Ciudades históricas y costa mediterránea en Croacia.",
        recorrido: "Split → Dubrovnik",
        precio: 1650,
        actividades: [
            "Recorrido por Split",
            "Visita a Dubrovnik",
            "Paseo por la costa"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 35,
        idDestino: 35,
        nombre: "España completa",
        dias: 14,
        descripcion: "Grandes ciudades y Andalucía en un recorrido por España.",
        recorrido: "Madrid → Córdoba → Sevilla → Granada → Málaga → Valencia → Barcelona",
        precio: 2850,
        actividades: [
            "Recorrido por Madrid",
            "Ruta por Andalucía",
            "Visita a Valencia y Barcelona"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados entre ciudades",
            "Excursiones indicadas"
        ]
    },
    {
        id: 36,
        idDestino: 36,
        nombre: "Francia clásica",
        dias: 12,
        descripcion: "Arte, gastronomía y ciudades en un recorrido por Francia.",
        recorrido: "París → Beaune → Lyon → Niza",
        precio: 2750,
        actividades: [
            "Recorrido por París",
            "Visita a Beaune y Lyon",
            "Paseo por Niza"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados entre ciudades",
            "Excursiones indicadas"
        ]
    },
    {
        id: 37,
        idDestino: 37,
        nombre: "Grecia entre historia e islas",
        dias: 11,
        descripcion: "Historia clásica y paisajes del mar Egeo en Grecia.",
        recorrido: "Atenas → Pireo → Míconos → Paros → Santorini",
        precio: 2450,
        actividades: [
            "Recorrido histórico por Atenas",
            "Visita a Míconos y Paros",
            "Estadía en Santorini"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados entre islas",
            "Excursiones indicadas"
        ]
    },
    {
        id: 38,
        idDestino: 38,
        nombre: "Budapest esencial",
        dias: 5,
        descripcion: "Historia y arquitectura a orillas del Danubio.",
        recorrido: "Budapest",
        precio: 1100,
        actividades: [
            "Recorrido por Buda",
            "Paseo por Pest",
            "Visita a baños termales"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 39,
        idDestino: 39,
        nombre: "Dublín y cultura irlandesa",
        dias: 5,
        descripcion: "Historia, música y cultura irlandesa en Dublín.",
        recorrido: "Dublín",
        precio: 1250,
        actividades: [
            "Recorrido histórico",
            "Visita cultural",
            "Excursión por los alrededores"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 40,
        idDestino: 40,
        nombre: "Islandia natural",
        dias: 7,
        descripcion: "Volcanes, cascadas y paisajes naturales de Islandia.",
        recorrido: "Reikiavik y alrededores",
        precio: 2200,
        actividades: [
            "Recorrido por Reikiavik",
            "Excursión por paisajes volcánicos",
            "Visita a cascadas y áreas geotérmicas"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 41,
        idDestino: 41,
        nombre: "Italia clásica",
        dias: 10,
        descripcion: "Arte, historia y gastronomía en las grandes ciudades italianas.",
        recorrido: "Milán → Venecia → Florencia → Roma",
        precio: 2350,
        actividades: [
            "Recorrido por Milán y Venecia",
            "Visita a Florencia",
            "Recorrido histórico por Roma"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados entre ciudades",
            "Excursiones indicadas"
        ]
    },
    {
        id: 42,
        idDestino: 42,
        nombre: "Malta mediterránea",
        dias: 6,
        descripcion: "Historia y costa mediterránea en Malta.",
        recorrido: "Isla de Malta",
        precio: 1450,
        actividades: [
            "Recorrido histórico",
            "Paseo por la costa",
            "Día libre"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 43,
        idDestino: 43,
        nombre: "Noruega del norte",
        dias: 6,
        descripcion: "Historia y paisajes escandinavos con base en Trondheim.",
        recorrido: "Trondheim",
        precio: 1850,
        actividades: [
            "Recorrido por Trondheim",
            "Excursión panorámica",
            "Experiencia de naturaleza"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 44,
        idDestino: 44,
        nombre: "Ámsterdam esencial",
        dias: 5,
        descripcion: "Canales, museos y arquitectura en los Países Bajos.",
        recorrido: "Ámsterdam",
        precio: 1350,
        actividades: [
            "Recorrido por los canales",
            "Visita cultural",
            "Paseo por el centro histórico"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 45,
        idDestino: 45,
        nombre: "Cracovia histórica",
        dias: 5,
        descripcion: "Historia y arquitectura en una escapada por Polonia.",
        recorrido: "Cracovia",
        precio: 1050,
        actividades: [
            "Recorrido por el centro histórico",
            "Visita cultural",
            "Excursión por los alrededores"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 46,
        idDestino: 46,
        nombre: "Portugal completo",
        dias: 9,
        descripcion: "Ciudades históricas y paisajes atlánticos de Portugal.",
        recorrido: "Lisboa → Oporto → Madeira",
        precio: 1950,
        actividades: [
            "Recorrido por Lisboa",
            "Visita a Oporto",
            "Experiencia de naturaleza en Madeira"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 47,
        idDestino: 47,
        nombre: "Gran recorrido británico",
        dias: 14,
        descripcion: "Grandes ciudades y paisajes históricos del Reino Unido.",
        recorrido: "Londres → Oxford → Liverpool → York → Edimburgo → Inverness",
        precio: 3100,
        actividades: [
            "Recorrido por Londres",
            "Ruta por ciudades históricas inglesas",
            "Visita a Edimburgo e Inverness"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados entre ciudades",
            "Excursiones indicadas"
        ]
    },
    {
        id: 48,
        idDestino: 48,
        nombre: "Praga esencial",
        dias: 5,
        descripcion: "Arquitectura e historia en la capital de República Checa.",
        recorrido: "Praga",
        precio: 1100,
        actividades: [
            "Recorrido por la Ciudad Vieja",
            "Visita histórica",
            "Paseo por el río"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 49,
        idDestino: 49,
        nombre: "Bucarest esencial",
        dias: 5,
        descripcion: "Historia y arquitectura en la capital de Rumania.",
        recorrido: "Bucarest",
        precio: 1050,
        actividades: [
            "Recorrido histórico",
            "Visita cultural",
            "Excursión por los alrededores"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 50,
        idDestino: 50,
        nombre: "Riad esencial",
        dias: 5,
        descripcion: "Tradición y modernidad en la capital de Arabia Saudita.",
        recorrido: "Riad",
        precio: 1500,
        actividades: [
            "Recorrido por Riad",
            "Visita histórica",
            "Excursión por los alrededores"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 51,
        idDestino: 51,
        nombre: "Baréin esencial",
        dias: 5,
        descripcion: "Historia y modernidad del Golfo con base en Manama.",
        recorrido: "Manama",
        precio: 1350,
        actividades: [
            "Recorrido por Manama",
            "Visita cultural",
            "Excursión panorámica"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 52,
        idDestino: 52,
        nombre: "Templos de Camboya",
        dias: 6,
        descripcion: "Historia y cultura con base en Siem Reap.",
        recorrido: "Siem Reap",
        precio: 1250,
        actividades: [
            "Recorrido por Siem Reap",
            "Visita a templos",
            "Experiencia cultural"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 53,
        idDestino: 53,
        nombre: "Doha moderna",
        dias: 5,
        descripcion: "Arquitectura, cultura y modernidad en Catar.",
        recorrido: "Doha",
        precio: 1450,
        actividades: [
            "Recorrido por Doha",
            "Visita cultural",
            "Excursión al desierto"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 54,
        idDestino: 54,
        nombre: "China entre tradición y modernidad",
        dias: 12,
        descripcion: "Grandes ciudades e historia en un recorrido por China.",
        recorrido: "Pekín → Shanghái → Hong Kong",
        precio: 2750,
        actividades: [
            "Recorrido histórico por Pekín",
            "Visita a Shanghái",
            "Experiencia urbana en Hong Kong"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 55,
        idDestino: 55,
        nombre: "Seúl esencial",
        dias: 6,
        descripcion: "Tradición, tecnología y cultura urbana en Corea del Sur.",
        recorrido: "Seúl",
        precio: 1550,
        actividades: [
            "Recorrido por Seúl",
            "Visita a palacios",
            "Experiencia gastronómica"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 56,
        idDestino: 56,
        nombre: "Emiratos completos",
        dias: 8,
        descripcion: "Modernidad, desierto y costa en Emiratos Árabes Unidos.",
        recorrido: "Dubái → Abu Dabi → Ras al-Jaima",
        precio: 2250,
        actividades: [
            "Recorrido por Dubái",
            "Visita a Abu Dabi",
            "Experiencia en Ras al-Jaima"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 57,
        idDestino: 57,
        nombre: "Filipinas esencial",
        dias: 8,
        descripcion: "Cultura y paisajes tropicales en Luzón.",
        recorrido: "Luzón",
        precio: 1650,
        actividades: [
            "Recorrido cultural",
            "Excursión de naturaleza",
            "Día libre"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 58,
        idDestino: 58,
        nombre: "Tiflis y Georgia",
        dias: 6,
        descripcion: "Historia y gastronomía del Cáucaso con base en Tiflis.",
        recorrido: "Tiflis",
        precio: 1250,
        actividades: [
            "Recorrido por Tiflis",
            "Experiencia gastronómica",
            "Excursión por los alrededores"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 59,
        idDestino: 59,
        nombre: "India entre palacios y ciudades",
        dias: 13,
        descripcion: "Historia, ciudades y costa en un recorrido por India.",
        recorrido: "Nueva Delhi → Jaipur → Udaipur → Mumbai → Goa",
        precio: 2550,
        actividades: [
            "Recorrido por Nueva Delhi",
            "Visita a Jaipur y Udaipur",
            "Estadía en Mumbai y Goa"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 60,
        idDestino: 60,
        nombre: "Bali esencial",
        dias: 8,
        descripcion: "Templos, naturaleza y playas en Indonesia.",
        recorrido: "Bali",
        precio: 1750,
        actividades: [
            "Visita a templos",
            "Excursión por terrazas de arroz",
            "Días de playa"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 61,
        idDestino: 61,
        nombre: "Japón esencial",
        dias: 12,
        descripcion: "Grandes ciudades, historia y tradición en Japón.",
        recorrido: "Tokio → Fujikawaguchiko-machi → Kioto → Nara → Osaka → Hiroshima",
        precio: 2950,
        actividades: [
            "Recorrido por Tokio",
            "Visita a Kioto y Nara",
            "Experiencia cultural en Hiroshima"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 62,
        idDestino: 62,
        nombre: "Jordania histórica",
        dias: 8,
        descripcion: "Ciudades, historia y costa en Jordania.",
        recorrido: "Ammán → Petra / Wadi Musa → Áqaba",
        precio: 1850,
        actividades: [
            "Recorrido por Ammán",
            "Visita a Petra",
            "Estadía en Áqaba"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 63,
        idDestino: 63,
        nombre: "Kuala Lumpur esencial",
        dias: 5,
        descripcion: "Cultura y vida urbana en la capital de Malasia.",
        recorrido: "Kuala Lumpur",
        precio: 1200,
        actividades: [
            "Recorrido por Kuala Lumpur",
            "Visita cultural",
            "Experiencia gastronómica"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 64,
        idDestino: 64,
        nombre: "Maldivas paradisíacas",
        dias: 7,
        descripcion: "Playas y lagunas tropicales en Maldivas.",
        recorrido: "Maldivas",
        precio: 2600,
        actividades: [
            "Días de playa",
            "Actividad de snorkel",
            "Paseo en embarcación"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 65,
        idDestino: 65,
        nombre: "Katmandú y Nepal",
        dias: 7,
        descripcion: "Cultura, templos y paisajes del Himalaya.",
        recorrido: "Katmandú",
        precio: 1450,
        actividades: [
            "Recorrido por Katmandú",
            "Visita a templos",
            "Excursión panorámica"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 66,
        idDestino: 66,
        nombre: "Omán entre Mascate y Salalah",
        dias: 8,
        descripcion: "Ciudades y paisajes naturales en Omán.",
        recorrido: "Mascate → Salalah",
        precio: 1950,
        actividades: [
            "Recorrido por Mascate",
            "Excursión por paisajes naturales",
            "Visita a Salalah"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 67,
        idDestino: 67,
        nombre: "Singapur esencial",
        dias: 5,
        descripcion: "Arquitectura, jardines y barrios culturales en Singapur.",
        recorrido: "Singapur",
        precio: 1450,
        actividades: [
            "Recorrido por Marina Bay",
            "Visita a Gardens by the Bay",
            "Paseo por barrios culturales"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 68,
        idDestino: 68,
        nombre: "Sri Lanka completa",
        dias: 10,
        descripcion: "Ciudades, tierras altas y costa en Sri Lanka.",
        recorrido: "Colombo → Ella → Galle → Bentota → Tangalle",
        precio: 1950,
        actividades: [
            "Recorrido por Colombo",
            "Experiencia en las tierras altas",
            "Ruta por la costa"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 69,
        idDestino: 69,
        nombre: "Tailandia completa",
        dias: 11,
        descripcion: "Templos, cultura, ciudades y playas en Tailandia.",
        recorrido: "Bangkok → Chiang Mai → Ao Nang → Phuket",
        precio: 2250,
        actividades: [
            "Visita a templos de Bangkok",
            "Recorrido por Chiang Mai",
            "Días de playa en el sur"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 70,
        idDestino: 70,
        nombre: "Turquía entre Estambul y Capadocia",
        dias: 8,
        descripcion: "Historia y paisajes únicos en Turquía.",
        recorrido: "Estambul → Göreme",
        precio: 1850,
        actividades: [
            "Recorrido histórico por Estambul",
            "Visita a Capadocia",
            "Excursión por Göreme"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 71,
        idDestino: 71,
        nombre: "Vietnam de norte a sur",
        dias: 13,
        descripcion: "Ciudades históricas, cultura y costa en Vietnam.",
        recorrido: "Hanói → Hué → Hoi An → Quy Nhon → Ho Chi Minh",
        precio: 2350,
        actividades: [
            "Recorrido por Hanói",
            "Visita a Hué y Hoi An",
            "Experiencia en Ho Chi Minh"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 72,
        idDestino: 72,
        nombre: "Egipto milenario",
        dias: 10,
        descripcion: "Historia antigua, ciudades y mar Rojo en Egipto.",
        recorrido: "El Cairo → Alejandría → Lúxor → Hurghada",
        precio: 2150,
        actividades: [
            "Visita histórica en El Cairo",
            "Recorrido por Lúxor",
            "Días de descanso en Hurghada"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 73,
        idDestino: 73,
        nombre: "Kenia entre ciudad y costa",
        dias: 8,
        descripcion: "Una experiencia entre Nairobi y la costa del océano Índico.",
        recorrido: "Nairobi → Watamu",
        precio: 2250,
        actividades: [
            "Recorrido por Nairobi",
            "Experiencia de naturaleza",
            "Días de playa en Watamu"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 74,
        idDestino: 74,
        nombre: "Marruecos completo",
        dias: 10,
        descripcion: "Ciudades, costa y desierto en Marruecos.",
        recorrido: "Marrakech → Fez → Merzouga → Taghazout",
        precio: 1950,
        actividades: [
            "Recorrido por Marrakech y Fez",
            "Experiencia en el desierto",
            "Estadía en la costa atlántica"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 75,
        idDestino: 75,
        nombre: "Mauricio tropical",
        dias: 7,
        descripcion: "Playas y naturaleza en una semana por Mauricio.",
        recorrido: "Mauricio",
        precio: 2200,
        actividades: [
            "Días de playa",
            "Recorrido por la isla",
            "Excursión de naturaleza"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 76,
        idDestino: 76,
        nombre: "Ciudad del Cabo esencial",
        dias: 7,
        descripcion: "Paisajes, cultura y gastronomía en Sudáfrica.",
        recorrido: "Ciudad del Cabo",
        precio: 1800,
        actividades: [
            "Recorrido por la ciudad",
            "Excursión panorámica",
            "Visita a una región vitivinícola"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 77,
        idDestino: 77,
        nombre: "Tanzania entre montaña y mar",
        dias: 10,
        descripcion: "Naturaleza y playas en un recorrido por Tanzania.",
        recorrido: "Arusha → Moshi → Zanzíbar",
        precio: 2650,
        actividades: [
            "Experiencia de naturaleza en Arusha",
            "Visita a Moshi",
            "Días de playa en Zanzíbar"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 78,
        idDestino: 78,
        nombre: "Livingstone y el Zambeze",
        dias: 5,
        descripcion: "Naturaleza y grandes paisajes con base en Livingstone.",
        recorrido: "Livingstone",
        precio: 1550,
        actividades: [
            "Recorrido por Livingstone",
            "Visita a las Cataratas Victoria desde Zambia",
            "Paseo por el río Zambeze"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 79,
        idDestino: 79,
        nombre: "Cataratas Victoria",
        dias: 5,
        descripcion: "Una experiencia natural en uno de los grandes paisajes de Zimbabue.",
        recorrido: "Cataratas Victoria",
        precio: 1550,
        actividades: [
            "Visita a las Cataratas Victoria",
            "Recorrido panorámico",
            "Experiencia de naturaleza"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 80,
        idDestino: 80,
        nombre: "Australia completa",
        dias: 15,
        descripcion: "Grandes ciudades, naturaleza y costa en un recorrido por Australia.",
        recorrido: "Sídney → Melbourne → Hobart → Margaret River → Port Douglas",
        precio: 3950,
        actividades: [
            "Recorrido por Sídney y Melbourne",
            "Experiencia en Tasmania",
            "Visita a Margaret River y Port Douglas"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 81,
        idDestino: 81,
        nombre: "Fiyi tropical",
        dias: 7,
        descripcion: "Playas, cultura y naturaleza en Fiyi.",
        recorrido: "Viti Levu",
        precio: 2200,
        actividades: [
            "Recorrido por Viti Levu",
            "Días de playa",
            "Actividad acuática"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 82,
        idDestino: 82,
        nombre: "Islas Cook paradisíacas",
        dias: 8,
        descripcion: "Lagunas y playas del Pacífico entre Rarotonga y Aitutaki.",
        recorrido: "Rarotonga → Aitutaki",
        precio: 2450,
        actividades: [
            "Recorrido por Rarotonga",
            "Excursión a Aitutaki",
            "Paseo por la laguna"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados entre islas",
            "Excursiones indicadas"
        ]
    },
    {
        id: 83,
        idDestino: 83,
        nombre: "Nueva Zelanda completa",
        dias: 13,
        descripcion: "Ciudades y grandes paisajes naturales de Nueva Zelanda.",
        recorrido: "Auckland → Whitianga → Rotorua → Queenstown → Wanaka",
        precio: 3250,
        actividades: [
            "Recorrido por Auckland",
            "Visita a Rotorua y Whitianga",
            "Experiencia en Queenstown y Wanaka"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 84,
        idDestino: 84,
        nombre: "Polinesia Francesa",
        dias: 9,
        descripcion: "Lagunas y paisajes del Pacífico en dos de sus islas más reconocidas.",
        recorrido: "Moorea → Bora Bora",
        precio: 3200,
        actividades: [
            "Recorrido por Moorea",
            "Estadía en Bora Bora",
            "Actividad en la laguna"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados entre islas",
            "Excursiones indicadas"
        ]
    },
    {
        id: 85,
        idDestino: 85,
        nombre: "Gran Caimán esencial",
        dias: 6,
        descripcion: "Playas de aguas transparentes y paisajes caribeños en las Islas Caimán.",
        recorrido: "Gran Caimán",
        precio: 1850,
        actividades: [
            "Recorrido por Gran Caimán",
            "Día de playa",
            "Actividad de snorkel"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 86,
        idDestino: 10,
        nombre: "Canadá del Pacífico",
        dias: 10,
        descripcion: "Ciudades, costa y naturaleza del oeste canadiense.",
        recorrido: "Vancouver → Victoria → Tofino → Whistler",
        precio: 2450,
        actividades: [
            "Recorrido por Vancouver",
            "Visita a Victoria y Tofino",
            "Experiencia de montaña en Whistler"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 87,
        idDestino: 10,
        nombre: "Canadá atlántico",
        dias: 8,
        descripcion: "Ciudades portuarias y paisajes costeros del este canadiense.",
        recorrido: "Halifax → Isla del Cabo Bretón → Saint John",
        precio: 1950,
        actividades: [
            "Recorrido por Halifax",
            "Ruta panorámica por Isla del Cabo Bretón",
            "Visita a Saint John"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 88,
        idDestino: 10,
        nombre: "Canadá central",
        dias: 8,
        descripcion: "Un recorrido por ciudades y paisajes del centro canadiense.",
        recorrido: "Winnipeg → Edmonton → Jasper",
        precio: 1950,
        actividades: [
            "Recorrido por Winnipeg",
            "Visita a Edmonton",
            "Experiencia de naturaleza en Jasper"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 89,
        idDestino: 10,
        nombre: "Ontario y Quebec",
        dias: 11,
        descripcion: "Ciudades históricas, naturaleza y cultura francófona en el este de Canadá.",
        recorrido: "Toronto → Niagara-on-the-Lake → Ottawa → Montreal → Mont-Tremblant → Quebec",
        precio: 2550,
        actividades: [
            "Recorrido por Toronto y Ottawa",
            "Visita a Niagara-on-the-Lake",
            "Ruta por Montreal, Mont-Tremblant y Quebec"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 90,
        idDestino: 17,
        nombre: "Costa Este de Estados Unidos",
        dias: 12,
        descripcion: "Grandes ciudades, historia y paisajes de la costa este estadounidense.",
        recorrido: "Boston → Nueva York → Washington D.C. → Asheville → Charleston",
        precio: 2950,
        actividades: [
            "Recorrido por Boston y Nueva York",
            "Visita a Washington D.C.",
            "Ruta por Asheville y Charleston"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 91,
        idDestino: 17,
        nombre: "Nueva Inglaterra y Acadia",
        dias: 6,
        descripcion: "Naturaleza y costa en el noreste de Estados Unidos.",
        recorrido: "Boston → Mount Desert Island",
        precio: 1650,
        actividades: [
            "Recorrido por Boston",
            "Visita a Mount Desert Island",
            "Experiencia de naturaleza"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 92,
        idDestino: 17,
        nombre: "Florida completa",
        dias: 11,
        descripcion: "Ciudades, playas y cayos en un recorrido por Florida.",
        recorrido: "Orlando → Isla Anna Maria → Miami → Miami Beach → Key Largo → Key West",
        precio: 2750,
        actividades: [
            "Visita a Orlando",
            "Días de playa en Miami y Anna Maria",
            "Ruta por los Cayos de Florida"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 93,
        idDestino: 17,
        nombre: "California completa",
        dias: 11,
        descripcion: "Ciudades, playas y viñedos en un recorrido por California.",
        recorrido: "San Francisco → Napa → Los Ángeles → San Diego",
        precio: 2950,
        actividades: [
            "Recorrido por San Francisco",
            "Visita a Napa",
            "Ruta por Los Ángeles y San Diego"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 94,
        idDestino: 17,
        nombre: "Hawái entre islas",
        dias: 13,
        descripcion: "Volcanes, playas y paisajes tropicales en las principales islas hawaianas.",
        recorrido: "Oahu → Maui → Isla de Hawái → Kauai",
        precio: 3650,
        actividades: [
            "Recorrido por Oahu",
            "Estadía en Maui e Isla de Hawái",
            "Experiencia de naturaleza en Kauai"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados entre islas",
            "Excursiones indicadas"
        ]
    },
    {
        id: 95,
        idDestino: 17,
        nombre: "Música del sur",
        dias: 7,
        descripcion: "Música, gastronomía e historia en dos ciudades emblemáticas del sur.",
        recorrido: "Nashville → Nueva Orleans",
        precio: 1750,
        actividades: [
            "Recorrido musical por Nashville",
            "Visita a Nueva Orleans",
            "Experiencia gastronómica"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 96,
        idDestino: 17,
        nombre: "Montañas y desiertos de Estados Unidos",
        dias: 12,
        descripcion: "Un recorrido por algunos de los paisajes interiores más característicos del país.",
        recorrido: "Big Sky → Las Vegas → Sedona → Moab",
        precio: 2850,
        actividades: [
            "Experiencia de montaña en Big Sky",
            "Visita a Las Vegas y Sedona",
            "Recorrido por los paisajes de Moab"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 97,
        idDestino: 17,
        nombre: "Chicago y Galena",
        dias: 6,
        descripcion: "Arquitectura, cultura e historia en Illinois.",
        recorrido: "Chicago → Galena",
        precio: 1450,
        actividades: [
            "Recorrido arquitectónico por Chicago",
            "Visita cultural",
            "Excursión a Galena"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 98,
        idDestino: 24,
        nombre: "Caribe mexicano",
        dias: 10,
        descripcion: "Playas, lagunas y cultura en el Caribe mexicano.",
        recorrido: "Cancún → Cozumel → Tulum → Bacalar",
        precio: 2150,
        actividades: [
            "Días de playa en Cancún",
            "Excursión a Cozumel",
            "Visita a Tulum y Bacalar"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 99,
        idDestino: 24,
        nombre: "México del Pacífico",
        dias: 9,
        descripcion: "Playas y ciudades costeras del Pacífico mexicano.",
        recorrido: "Puerto Vallarta → Nuevo Nayarit → Puerto Escondido",
        precio: 1850,
        actividades: [
            "Recorrido por Puerto Vallarta",
            "Días de playa en Nuevo Nayarit",
            "Estadía en Puerto Escondido"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 100,
        idDestino: 24,
        nombre: "Baja California Sur",
        dias: 6,
        descripcion: "Desierto y mar en el extremo sur de la península de Baja California.",
        recorrido: "Cabo San Lucas",
        precio: 1650,
        actividades: [
            "Recorrido por Cabo San Lucas",
            "Excursión costera",
            "Día de playa"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 101,
        idDestino: 35,
        nombre: "Cataluña y Mediterráneo",
        dias: 7,
        descripcion: "Ciudades históricas y costa mediterránea en Cataluña.",
        recorrido: "Barcelona → Girona",
        precio: 1650,
        actividades: [
            "Recorrido por Barcelona",
            "Excursión a Girona",
            "Experiencia gastronómica"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 102,
        idDestino: 35,
        nombre: "Andalucía completa",
        dias: 10,
        descripcion: "Historia, cultura y costa en un recorrido por Andalucía.",
        recorrido: "Córdoba → Sevilla → Granada → Málaga → Marbella",
        precio: 2150,
        actividades: [
            "Visita a Córdoba y Sevilla",
            "Recorrido por Granada",
            "Estadía en Málaga y Marbella"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 103,
        idDestino: 35,
        nombre: "Islas Baleares",
        dias: 10,
        descripcion: "Calas, playas y pueblos mediterráneos en las Baleares.",
        recorrido: "Mallorca → Menorca → Ibiza",
        precio: 2350,
        actividades: [
            "Recorrido por Mallorca",
            "Días de playa en Menorca",
            "Visita a Ibiza"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados entre islas",
            "Excursiones indicadas"
        ]
    },
    {
        id: 104,
        idDestino: 35,
        nombre: "Islas Canarias",
        dias: 12,
        descripcion: "Playas y paisajes volcánicos en las principales Islas Canarias.",
        recorrido: "Tenerife → Gran Canaria → Lanzarote → Fuerteventura",
        precio: 2650,
        actividades: [
            "Recorrido por Tenerife",
            "Visita a Gran Canaria",
            "Experiencia volcánica en Lanzarote y Fuerteventura"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados entre islas",
            "Excursiones indicadas"
        ]
    },
    {
        id: 105,
        idDestino: 36,
        nombre: "Francia atlántica y Normandía",
        dias: 9,
        descripcion: "Historia, puertos y regiones vitivinícolas del oeste francés.",
        recorrido: "París → Bayeux → La Rochelle → Burdeos",
        precio: 2250,
        actividades: [
            "Recorrido por París",
            "Visita a Bayeux y La Rochelle",
            "Experiencia gastronómica en Burdeos"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 106,
        idDestino: 36,
        nombre: "Francia mediterránea",
        dias: 7,
        descripcion: "Costa, ciudades y paisajes mediterráneos del sur de Francia.",
        recorrido: "Niza → Córcega",
        precio: 1950,
        actividades: [
            "Recorrido por Niza",
            "Traslado a Córcega",
            "Días de naturaleza y costa"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 107,
        idDestino: 36,
        nombre: "Borgoña y Alpes franceses",
        dias: 9,
        descripcion: "Gastronomía, lagos y montañas en el interior de Francia.",
        recorrido: "Beaune → Lyon → Talloires → Morzine-Avoriaz",
        precio: 2250,
        actividades: [
            "Visita a Beaune y Lyon",
            "Estadía junto al lago en Talloires",
            "Experiencia de montaña en Morzine-Avoriaz"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 108,
        idDestino: 37,
        nombre: "Creta mediterránea",
        dias: 7,
        descripcion: "Historia, playas y gastronomía en la mayor isla de Grecia.",
        recorrido: "Creta",
        precio: 1750,
        actividades: [
            "Recorrido histórico",
            "Días de playa",
            "Experiencia gastronómica"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 109,
        idDestino: 41,
        nombre: "Sur de Italia y Costa Amalfitana",
        dias: 10,
        descripcion: "Historia, gastronomía y costa en el sur de Italia.",
        recorrido: "Nápoles → Sorrento → Positano → Matera",
        precio: 2350,
        actividades: [
            "Recorrido por Nápoles",
            "Visita a Sorrento y Positano",
            "Experiencia histórica en Matera"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 110,
        idDestino: 41,
        nombre: "Sicilia completa",
        dias: 9,
        descripcion: "Historia, gastronomía y paisajes mediterráneos en Sicilia.",
        recorrido: "Sicilia → Palermo → Taormina",
        precio: 2050,
        actividades: [
            "Recorrido por Palermo",
            "Ruta por Sicilia",
            "Visita a Taormina"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 111,
        idDestino: 47,
        nombre: "Sur de Inglaterra",
        dias: 9,
        descripcion: "Ciudades históricas y costa del sur inglés.",
        recorrido: "Londres → Cambridge → Bath → Torquay → Brixham",
        precio: 2250,
        actividades: [
            "Recorrido por Londres",
            "Visita a Cambridge y Bath",
            "Ruta costera por Torquay y Brixham"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 112,
        idDestino: 47,
        nombre: "Norte de Inglaterra y Lake District",
        dias: 10,
        descripcion: "Ciudades, lagos y montañas del norte de Inglaterra.",
        recorrido: "Mánchester → Liverpool → York → Newcastle upon Tyne → Keswick → Windermere",
        precio: 2350,
        actividades: [
            "Recorrido por Mánchester y Liverpool",
            "Visita a York y Newcastle",
            "Experiencia de naturaleza en Lake District"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 113,
        idDestino: 47,
        nombre: "Escocia completa",
        dias: 10,
        descripcion: "Ciudades, islas y paisajes de las Highlands escocesas.",
        recorrido: "Edimburgo → Glasgow → Isla de Arran → Inverness → Lewis y Harris",
        precio: 2550,
        actividades: [
            "Recorrido por Edimburgo y Glasgow",
            "Visita a Isla de Arran",
            "Ruta por Inverness y Lewis y Harris"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 114,
        idDestino: 47,
        nombre: "Gales e Irlanda del Norte",
        dias: 7,
        descripcion: "Dos capitales y culturas diferentes dentro del Reino Unido.",
        recorrido: "Cardiff → Belfast",
        precio: 1750,
        actividades: [
            "Recorrido por Cardiff",
            "Visita a Belfast",
            "Experiencias culturales"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 115,
        idDestino: 47,
        nombre: "Escapada a Jersey",
        dias: 5,
        descripcion: "Playas y paisajes costeros en las Islas del Canal.",
        recorrido: "Jersey",
        precio: 1350,
        actividades: [
            "Recorrido por Jersey",
            "Paseo por la costa",
            "Día libre"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 116,
        idDestino: 61,
        nombre: "Japón tradicional y Alpes",
        dias: 9,
        descripcion: "Ciudades tradicionales y paisajes del centro de Japón.",
        recorrido: "Tokio → Kanazawa → Takayama → Kioto",
        precio: 2350,
        actividades: [
            "Recorrido por Tokio",
            "Visita a Kanazawa",
            "Experiencia tradicional en Takayama y Kioto"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    },
    {
        id: 117,
        idDestino: 61,
        nombre: "Tokio y gastronomía",
        dias: 6,
        descripcion: "Una experiencia urbana y gastronómica en Tokio y sus alrededores.",
        recorrido: "Tokio → Toyosu → Fujikawaguchiko-machi",
        precio: 1650,
        actividades: [
            "Recorrido por Tokio",
            "Visita a Toyosu",
            "Excursión al área del monte Fuji"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados",
            "Excursiones indicadas"
        ]
    },
    {
        id: 118,
        idDestino: 61,
        nombre: "Okinawa tropical",
        dias: 9,
        descripcion: "Playas, cultura y paisajes subtropicales del sur de Japón.",
        recorrido: "Okinawa → Naha → Miyakojima",
        precio: 2250,
        actividades: [
            "Recorrido por Okinawa",
            "Visita a Naha",
            "Días de playa en Miyakojima"
        ],
        incluye: [
            "Alojamiento",
            "Desayuno",
            "Traslados internos",
            "Excursiones indicadas"
        ]
    }
]

export default itinerarios