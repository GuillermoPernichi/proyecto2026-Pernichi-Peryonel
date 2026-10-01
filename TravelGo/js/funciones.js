const destinos = [

    // =========================
    // AMÉRICA
    // =========================

    {
        id: 1,
        nombre: "Anguila",
        continente: "América",
        descripcion: "Playas de arena blanca, aguas turquesas y una atmósfera tranquila en pleno Caribe.",
        imagen: "imagenes/anguila.jpg",
        moneda: "Dólar del Caribe Oriental",
        idioma: "Inglés",
        mejorEpoca: "De diciembre a abril",
        lugares: []
    },
    {
        id: 2,
        nombre: "Antigua y Barbuda",
        continente: "América",
        descripcion: "Un destino caribeño reconocido por sus playas, bahías y paisajes tropicales.",
        imagen: "imagenes/antigua-barbuda.jpg",
        moneda: "Dólar del Caribe Oriental",
        idioma: "Inglés",
        mejorEpoca: "De diciembre a abril",
        lugares: []
    },
    {
        id: 3,
        nombre: "Argentina",
        continente: "América",
        descripcion: "Grandes ciudades, montañas, vinos y algunos de los paisajes más diversos de Sudamérica.",
        imagen: "imagenes/argentina.jpg",
        moneda: "Peso argentino",
        idioma: "Español",
        mejorEpoca: "Todo el año, según la región",
        lugares: [
            {
                nombre: "Buenos Aires",
                zona: "",
                descripcion: "Una ciudad de gran vida cultural, gastronomía, arquitectura y barrios con identidades muy diferentes.",
                imagen: "imagenes/buenos-aires.jpg"
            },
            {
                nombre: "Mendoza",
                zona: "",
                descripcion: "Una de las principales regiones vitivinícolas del país, rodeada por los paisajes de la cordillera de los Andes.",
                imagen: "imagenes/mendoza.jpg"
            },
            {
                nombre: "San Carlos de Bariloche",
                zona: "",
                descripcion: "Lagos, montañas y bosques patagónicos en uno de los grandes destinos naturales de Argentina.",
                imagen: "imagenes/bariloche.jpg"
            }
        ]
    },
    {
        id: 4,
        nombre: "Aruba",
        continente: "América",
        descripcion: "Playas paradisíacas, clima cálido y paisajes únicos en el Caribe neerlandés.",
        imagen: "imagenes/aruba.jpg",
        moneda: "Florín arubeño",
        idioma: "Neerlandés y papiamento",
        mejorEpoca: "Todo el año",
        lugares: []
    },
    {
        id: 5,
        nombre: "Bahamas",
        continente: "América",
        descripcion: "Un archipiélago de aguas cristalinas, playas espectaculares y numerosas islas para descubrir.",
        imagen: "imagenes/bahamas.jpg",
        moneda: "Dólar bahameño",
        idioma: "Inglés",
        mejorEpoca: "De diciembre a abril",
        lugares: [
            {
                nombre: "Isla Nueva Providencia",
                zona: "",
                descripcion: "La isla donde se encuentra Nassau combina playas, vida urbana, gastronomía y una amplia oferta turística.",
                imagen: "imagenes/nueva-providencia.jpg"
            },
            {
                nombre: "Gran Exuma",
                zona: "",
                descripcion: "Una isla rodeada de aguas transparentes, bancos de arena y paisajes característicos de las Exumas.",
                imagen: "imagenes/gran-exuma.jpg"
            }
        ]
    },
    {
        id: 6,
        nombre: "Barbados",
        continente: "América",
        descripcion: "Playas, cultura caribeña y paisajes tropicales en una de las islas más conocidas del Caribe.",
        imagen: "imagenes/barbados.jpg",
        moneda: "Dólar barbadense",
        idioma: "Inglés",
        mejorEpoca: "De diciembre a abril",
        lugares: []
    },
    {
        id: 7,
        nombre: "Bermudas",
        continente: "América",
        descripcion: "Playas de tonos rosados, pequeñas bahías y un ambiente insular con identidad propia.",
        imagen: "imagenes/bermudas.jpg",
        moneda: "Dólar bermudeño",
        idioma: "Inglés",
        mejorEpoca: "De mayo a octubre",
        lugares: []
    },
    {
        id: 8,
        nombre: "Bonaire",
        continente: "América",
        descripcion: "Naturaleza, tranquilidad y aguas ideales para descubrir la vida marina del Caribe.",
        imagen: "imagenes/bonaire.jpg",
        moneda: "Dólar estadounidense",
        idioma: "Neerlandés y papiamento",
        mejorEpoca: "Todo el año",
        lugares: []
    },
    {
        id: 9,
        nombre: "Brasil",
        continente: "América",
        descripcion: "Playas, naturaleza, gastronomía y ciudades llenas de energía y diversidad.",
        imagen: "imagenes/brasil.jpg",
        moneda: "Real brasileño",
        idioma: "Portugués",
        mejorEpoca: "Todo el año, según la región",
        lugares: [
            {
                nombre: "Foz do Iguaçu",
                zona: "Sur",
                descripcion: "Puerta de entrada brasileña a las Cataratas del Iguazú y a uno de los grandes paisajes naturales de Sudamérica.",
                imagen: "imagenes/foz-do-iguacu.jpg"
            },
            {
                nombre: "Gramado",
                zona: "Sur",
                descripcion: "Una ciudad serrana conocida por su arquitectura, gastronomía y ambiente de inspiración europea.",
                imagen: "imagenes/gramado.jpg"
            },
            {
                nombre: "Natal",
                zona: "Nordeste",
                descripcion: "Playas, dunas y clima tropical en la costa del nordeste brasileño.",
                imagen: "imagenes/natal.jpg"
            },
            {
                nombre: "Recife",
                zona: "Nordeste",
                descripcion: "Una ciudad costera de playas, cultura e importante patrimonio histórico.",
                imagen: "imagenes/recife.jpg"
            },
            {
                nombre: "Río de Janeiro",
                zona: "Sudeste",
                descripcion: "Playas, montañas y algunos de los paisajes urbanos más reconocibles de Brasil.",
                imagen: "imagenes/rio-de-janeiro.jpg"
            }
        ]
    },
    {
        id: 10,
        nombre: "Canadá",
        continente: "América",
        descripcion: "Grandes ciudades, montañas, lagos y parques nacionales de paisajes espectaculares.",
        imagen: "imagenes/canada.jpg",
        moneda: "Dólar canadiense",
        idioma: "Inglés y francés",
        mejorEpoca: "Todo el año, según la experiencia buscada",
        lugares: [
            {
                nombre: "Banff",
                zona: "Oeste y Rocosas",
                descripcion: "Una localidad rodeada por las montañas, lagos y paisajes del Parque Nacional Banff.",
                imagen: "imagenes/banff.jpg"
            },
            {
                nombre: "Calgary",
                zona: "Oeste y Rocosas",
                descripcion: "Una ciudad moderna de Alberta y una de las principales puertas de entrada a las Montañas Rocosas.",
                imagen: "imagenes/calgary.jpg"
            },
            {
                nombre: "Edmonton",
                zona: "Oeste y Rocosas",
                descripcion: "La capital de Alberta combina espacios urbanos, cultura y acceso a los paisajes del oeste canadiense.",
                imagen: "imagenes/edmonton.jpg"
            },
            {
                nombre: "Jasper",
                zona: "Oeste y Rocosas",
                descripcion: "Montañas, lagos, glaciares y naturaleza dentro de uno de los grandes parques nacionales de Canadá.",
                imagen: "imagenes/jasper.jpg"
            },
            {
                nombre: "Lago Louise",
                zona: "Oeste y Rocosas",
                descripcion: "Un lago alpino de aguas turquesas rodeado por montañas dentro del Parque Nacional Banff.",
                imagen: "imagenes/lago-louise.jpg"
            },
            {
                nombre: "Tofino",
                zona: "Oeste y Rocosas",
                descripcion: "Naturaleza, bosques y playas sobre la costa occidental de la isla de Vancouver.",
                imagen: "imagenes/tofino.jpg"
            },
            {
                nombre: "Vancouver",
                zona: "Oeste y Rocosas",
                descripcion: "Una gran ciudad del Pacífico rodeada de montañas, mar y extensos espacios naturales.",
                imagen: "imagenes/vancouver.jpg"
            },
            {
                nombre: "Victoria",
                zona: "Oeste y Rocosas",
                descripcion: "La capital de Columbia Británica destaca por sus jardines, puerto y arquitectura.",
                imagen: "imagenes/victoria.jpg"
            },
            {
                nombre: "Whistler",
                zona: "Oeste y Rocosas",
                descripcion: "Un reconocido destino de montaña con actividades tanto de invierno como de verano.",
                imagen: "imagenes/whistler.jpg"
            },
            {
                nombre: "Cataratas del Niágara",
                zona: "Ontario y Quebec",
                descripcion: "Uno de los grandes atractivos naturales de Canadá, ubicado en la frontera con Estados Unidos.",
                imagen: "imagenes/cataratas-niagara.jpg"
            },
            {
                nombre: "Montreal",
                zona: "Ontario y Quebec",
                descripcion: "Una ciudad cosmopolita donde conviven la cultura francófona, la historia y una intensa vida urbana.",
                imagen: "imagenes/montreal.jpg"
            },
            {
                nombre: "Mont-Tremblant",
                zona: "Ontario y Quebec",
                descripcion: "Un destino de montaña de Quebec conocido por sus paisajes y actividades al aire libre.",
                imagen: "imagenes/mont-tremblant.jpg"
            },
            {
                nombre: "Niagara-on-the-Lake",
                zona: "Ontario y Quebec",
                descripcion: "Una pequeña localidad histórica rodeada de viñedos y situada cerca de las Cataratas del Niágara.",
                imagen: "imagenes/niagara-on-the-lake.jpg"
            },
            {
                nombre: "Ottawa",
                zona: "Ontario y Quebec",
                descripcion: "La capital canadiense reúne museos, edificios institucionales, parques y el canal Rideau.",
                imagen: "imagenes/ottawa.jpg"
            },
            {
                nombre: "Quebec",
                zona: "Ontario y Quebec",
                descripcion: "Una ciudad histórica de fuerte identidad francófona y uno de los centros culturales más importantes de Canadá.",
                imagen: "imagenes/quebec.jpg"
            },
            {
                nombre: "Toronto",
                zona: "Ontario y Quebec",
                descripcion: "La ciudad más grande de Canadá combina barrios multiculturales, gastronomía y una intensa vida urbana.",
                imagen: "imagenes/toronto.jpg"
            },
            {
                nombre: "Halifax",
                zona: "Canadá Atlántico",
                descripcion: "Una ciudad portuaria de Nueva Escocia con historia marítima y ambiente atlántico.",
                imagen: "imagenes/halifax.jpg"
            },
            {
                nombre: "Isla del Cabo Bretón",
                zona: "Canadá Atlántico",
                descripcion: "Una isla de Nueva Escocia conocida por sus paisajes costeros y rutas panorámicas.",
                imagen: "imagenes/cabo-breton.jpg"
            },
            {
                nombre: "Saint John",
                zona: "Canadá Atlántico",
                descripcion: "Una histórica ciudad portuaria de Nuevo Brunswick situada sobre la bahía de Fundy.",
                imagen: "imagenes/saint-john-canada.jpg"
            },
            {
                nombre: "Winnipeg",
                zona: "Centro",
                descripcion: "Una ciudad de las praderas canadienses con una importante propuesta cultural e histórica.",
                imagen: "imagenes/winnipeg.jpg"
            }
        ]
    },
    {
        id: 11,
        nombre: "Chile",
        continente: "América",
        descripcion: "Un país de contrastes entre grandes ciudades, desiertos, montañas y paisajes andinos.",
        imagen: "imagenes/chile.jpg",
        moneda: "Peso chileno",
        idioma: "Español",
        mejorEpoca: "Todo el año, según la región",
        lugares: [
            {
                nombre: "San Pedro de Atacama",
                zona: "",
                descripcion: "Desiertos, salares, lagunas y paisajes de altura en el norte de Chile.",
                imagen: "imagenes/san-pedro-atacama.jpg"
            },
            {
                nombre: "Santiago",
                zona: "",
                descripcion: "La capital chilena combina vida urbana, gastronomía y la cercanía de la cordillera de los Andes.",
                imagen: "imagenes/santiago.jpg"
            }
        ]
    },
    {
        id: 12,
        nombre: "Colombia",
        continente: "América",
        descripcion: "Ciudades históricas, cultura, montañas y costas caribeñas llenas de color.",
        imagen: "imagenes/colombia.jpg",
        moneda: "Peso colombiano",
        idioma: "Español",
        mejorEpoca: "De diciembre a marzo y de julio a agosto",
        lugares: [
            {
                nombre: "Bogotá",
                zona: "",
                descripcion: "La capital colombiana combina historia, museos, gastronomía y una intensa vida cultural.",
                imagen: "imagenes/bogota.jpg"
            },
            {
                nombre: "Cali",
                zona: "",
                descripcion: "Una ciudad reconocida por su música, baile y ambiente cultural en el suroeste colombiano.",
                imagen: "imagenes/cali.jpg"
            },
            {
                nombre: "Cartagena",
                zona: "",
                descripcion: "Una ciudad histórica sobre el Caribe conocida por sus murallas, arquitectura colonial y ambiente costero.",
                imagen: "imagenes/cartagena.jpg"
            },
            {
                nombre: "Medellín",
                zona: "",
                descripcion: "Una ciudad rodeada de montañas, con espacios culturales, gastronomía y una amplia propuesta urbana.",
                imagen: "imagenes/medellin.jpg"
            }
        ]
    },
    {
        id: 13,
        nombre: "Cuba",
        continente: "América",
        descripcion: "Historia, arquitectura, música y playas caribeñas en un destino de identidad inconfundible.",
        imagen: "imagenes/cuba.jpg",
        moneda: "Peso cubano",
        idioma: "Español",
        mejorEpoca: "De noviembre a abril",
        lugares: []
    },
    {
        id: 14,
        nombre: "Curazao",
        continente: "América",
        descripcion: "Arquitectura colorida, playas y aguas cristalinas en el corazón del Caribe.",
        imagen: "imagenes/curazao.jpg",
        moneda: "Florín caribeño",
        idioma: "Neerlandés, papiamento e inglés",
        mejorEpoca: "Todo el año",
        lugares: []
    },
    {
        id: 15,
        nombre: "Dominica",
        continente: "América",
        descripcion: "Selvas tropicales, cascadas y naturaleza exuberante en una isla ideal para la aventura.",
        imagen: "imagenes/dominica.jpg",
        moneda: "Dólar del Caribe Oriental",
        idioma: "Inglés",
        mejorEpoca: "De diciembre a abril",
        lugares: []
    },
    {
        id: 16,
        nombre: "Ecuador",
        continente: "América",
        descripcion: "Historia andina, cultura y paisajes naturales en uno de los países más diversos de Sudamérica.",
        imagen: "imagenes/ecuador.jpg",
        moneda: "Dólar estadounidense",
        idioma: "Español",
        mejorEpoca: "Todo el año, según la región",
        lugares: [
            {
                nombre: "Quito",
                zona: "",
                descripcion: "La capital ecuatoriana combina un importante centro histórico con paisajes de los Andes.",
                imagen: "imagenes/quito.jpg"
            }
        ]
    },
    {
        id: 17,
        nombre: "Estados Unidos",
        continente: "América",
        descripcion: "Grandes ciudades, parques, playas, rutas y paisajes muy diferentes a lo largo de todo el país.",
        imagen: "imagenes/estados-unidos.jpg",
        moneda: "Dólar estadounidense",
        idioma: "Inglés",
        mejorEpoca: "Todo el año, según la región",
        lugares: [
            {
                nombre: "Asheville",
                zona: "Costa Este",
                descripcion: "Una ciudad de Carolina del Norte rodeada por las montañas Blue Ridge y conocida por su ambiente cultural.",
                imagen: "imagenes/asheville.jpg"
            },
            {
                nombre: "Boston",
                zona: "Costa Este",
                descripcion: "Una de las ciudades históricas más importantes del país, con barrios tradicionales y una intensa vida cultural.",
                imagen: "imagenes/boston.jpg"
            },
            {
                nombre: "Charleston",
                zona: "Costa Este",
                descripcion: "Una ciudad histórica de Carolina del Sur reconocida por su arquitectura y gastronomía.",
                imagen: "imagenes/charleston.jpg"
            },
            {
                nombre: "Mount Desert Island",
                zona: "Costa Este",
                descripcion: "Una isla de Maine donde se encuentra gran parte del Parque Nacional Acadia.",
                imagen: "imagenes/mount-desert-island.jpg"
            },
            {
                nombre: "Nueva York",
                zona: "Costa Este",
                descripcion: "Una de las grandes capitales culturales del mundo, con barrios, museos y lugares emblemáticos.",
                imagen: "imagenes/nueva-york.jpg"
            },
            {
                nombre: "Washington D.C.",
                zona: "Costa Este",
                descripcion: "La capital del país reúne monumentos, museos e importantes edificios institucionales.",
                imagen: "imagenes/washington-dc.jpg"
            },
            {
                nombre: "Isla Anna Maria",
                zona: "Florida",
                descripcion: "Una pequeña isla de la costa del Golfo de Florida con playas y un ambiente relajado.",
                imagen: "imagenes/anna-maria-island.jpg"
            },
            {
                nombre: "Key Largo",
                zona: "Florida",
                descripcion: "La mayor de las islas superiores de los Cayos de Florida, conocida por sus arrecifes y actividades acuáticas.",
                imagen: "imagenes/key-largo.jpg"
            },
            {
                nombre: "Key West",
                zona: "Florida",
                descripcion: "La ciudad más meridional de los Cayos de Florida combina historia, arquitectura y ambiente tropical.",
                imagen: "imagenes/key-west.jpg"
            },
            {
                nombre: "Miami",
                zona: "Florida",
                descripcion: "Una ciudad internacional de gastronomía, cultura, compras y vida urbana junto al mar.",
                imagen: "imagenes/miami.jpg"
            },
            {
                nombre: "Miami Beach",
                zona: "Florida",
                descripcion: "Playas, arquitectura art déco y una intensa vida urbana frente al Atlántico.",
                imagen: "imagenes/miami-beach.jpg"
            },
            {
                nombre: "Orlando",
                zona: "Florida",
                descripcion: "Uno de los principales destinos de entretenimiento y parques temáticos del mundo.",
                imagen: "imagenes/orlando.jpg"
            },
            {
                nombre: "Los Ángeles",
                zona: "Costa Oeste",
                descripcion: "Cine, cultura, barrios diversos y extensas playas sobre la costa del Pacífico.",
                imagen: "imagenes/los-angeles.jpg"
            },
            {
                nombre: "Napa",
                zona: "Costa Oeste",
                descripcion: "Una reconocida región vitivinícola de California con viñedos, gastronomía y paisajes rurales.",
                imagen: "imagenes/napa.jpg"
            },
            {
                nombre: "San Diego",
                zona: "Costa Oeste",
                descripcion: "Playas, clima templado y una amplia oferta urbana en el sur de California.",
                imagen: "imagenes/san-diego.jpg"
            },
            {
                nombre: "San Francisco",
                zona: "Costa Oeste",
                descripcion: "Una ciudad de colinas, barrios característicos y algunos de los íconos urbanos más conocidos de California.",
                imagen: "imagenes/san-francisco.jpg"
            },
            {
                nombre: "Isla de Hawái",
                zona: "Hawái",
                descripcion: "La mayor isla del archipiélago combina volcanes, playas y paisajes de gran diversidad.",
                imagen: "imagenes/isla-hawai.jpg"
            },
            {
                nombre: "Kauai",
                zona: "Hawái",
                descripcion: "Una isla de paisajes verdes, acantilados, playas y espectaculares áreas naturales.",
                imagen: "imagenes/kauai.jpg"
            },
            {
                nombre: "Maui",
                zona: "Hawái",
                descripcion: "Playas, volcanes, rutas panorámicas y una gran variedad de paisajes hawaianos.",
                imagen: "imagenes/maui.jpg"
            },
            {
                nombre: "Oahu",
                zona: "Hawái",
                descripcion: "La isla donde se encuentra Honolulu combina vida urbana, historia y famosas playas.",
                imagen: "imagenes/oahu.jpg"
            },
            {
                nombre: "Nashville",
                zona: "Sur",
                descripcion: "Una de las grandes capitales musicales de Estados Unidos, especialmente vinculada a la música country.",
                imagen: "imagenes/nashville.jpg"
            },
            {
                nombre: "Nueva Orleans",
                zona: "Sur",
                descripcion: "Una ciudad de fuerte identidad cultural, reconocida por su música, gastronomía y arquitectura.",
                imagen: "imagenes/nueva-orleans.jpg"
            },
            {
                nombre: "Big Sky",
                zona: "Centro, Montañas y Suroeste",
                descripcion: "Un destino de montaña de Montana conocido por sus paisajes y actividades al aire libre.",
                imagen: "imagenes/big-sky.jpg"
            },
            {
                nombre: "Chicago",
                zona: "Centro, Montañas y Suroeste",
                descripcion: "Arquitectura, cultura, gastronomía y grandes espacios urbanos junto al lago Míchigan.",
                imagen: "imagenes/chicago.jpg"
            },
            {
                nombre: "Galena",
                zona: "Centro, Montañas y Suroeste",
                descripcion: "Una pequeña ciudad histórica de Illinois conocida por su arquitectura y ambiente tradicional.",
                imagen: "imagenes/galena.jpg"
            },
            {
                nombre: "Las Vegas",
                zona: "Centro, Montañas y Suroeste",
                descripcion: "Entretenimiento, espectáculos y una ubicación estratégica para recorrer paisajes del suroeste.",
                imagen: "imagenes/las-vegas.jpg"
            },
            {
                nombre: "Moab",
                zona: "Centro, Montañas y Suroeste",
                descripcion: "Una localidad de Utah rodeada por extraordinarios paisajes desérticos y parques nacionales.",
                imagen: "imagenes/moab.jpg"
            },
            {
                nombre: "Sedona",
                zona: "Centro, Montañas y Suroeste",
                descripcion: "Formaciones rocosas rojizas, senderos y paisajes desérticos en Arizona.",
                imagen: "imagenes/sedona.jpg"
            }
        ]
    },
    {
        id: 18,
        nombre: "Granada",
        continente: "América",
        descripcion: "Playas, naturaleza tropical y tradición caribeña en la conocida isla de las especias.",
        imagen: "imagenes/granada.jpg",
        moneda: "Dólar del Caribe Oriental",
        idioma: "Inglés",
        mejorEpoca: "De enero a mayo",
        lugares: []
    },
    {
        id: 19,
        nombre: "Guadalupe",
        continente: "América",
        descripcion: "Un archipiélago caribeño que combina playas, vegetación tropical y cultura francesa.",
        imagen: "imagenes/guadalupe.jpg",
        moneda: "Euro",
        idioma: "Francés",
        mejorEpoca: "De diciembre a mayo",
        lugares: []
    },
    {
        id: 20,
        nombre: "Islas Vírgenes Británicas",
        continente: "América",
        descripcion: "Islas de aguas transparentes, pequeñas bahías y algunos de los paisajes más atractivos del Caribe.",
        imagen: "imagenes/islas-virgenes-britanicas.jpg",
        moneda: "Dólar estadounidense",
        idioma: "Inglés",
        mejorEpoca: "De diciembre a abril",
        lugares: [
            {
                nombre: "Tórtola",
                zona: "",
                descripcion: "La mayor de las Islas Vírgenes Británicas combina montañas, playas y pequeñas bahías.",
                imagen: "imagenes/tortola.jpg"
            }
        ]
    },
    {
        id: 21,
        nombre: "Islas Vírgenes de Estados Unidos",
        continente: "América",
        descripcion: "Playas, naturaleza y ambiente caribeño distribuidos entre varias islas de gran belleza.",
        imagen: "imagenes/islas-virgenes-estados-unidos.jpg",
        moneda: "Dólar estadounidense",
        idioma: "Inglés",
        mejorEpoca: "De diciembre a abril",
        lugares: [
            {
                nombre: "Saint Croix",
                zona: "",
                descripcion: "La mayor de las Islas Vírgenes de Estados Unidos combina playas, historia y paisajes tropicales.",
                imagen: "imagenes/saint-croix.jpg"
            },
            {
                nombre: "Saint John",
                zona: "",
                descripcion: "Una isla especialmente reconocida por sus playas y extensas áreas naturales protegidas.",
                imagen: "imagenes/saint-john.jpg"
            },
            {
                nombre: "Saint Thomas",
                zona: "",
                descripcion: "Una isla de playas, miradores, puerto y una amplia oferta turística.",
                imagen: "imagenes/saint-thomas.jpg"
            }
        ]
    },
    {
        id: 22,
        nombre: "Jamaica",
        continente: "América",
        descripcion: "Música, cultura, playas y paisajes tropicales en uno de los grandes destinos del Caribe.",
        imagen: "imagenes/jamaica.jpg",
        moneda: "Dólar jamaiquino",
        idioma: "Inglés",
        mejorEpoca: "De diciembre a abril",
        lugares: []
    },
    {
        id: 23,
        nombre: "Martinica",
        continente: "América",
        descripcion: "Naturaleza tropical, playas y cultura franco-caribeña en una isla de gran diversidad.",
        imagen: "imagenes/martinica.jpg",
        moneda: "Euro",
        idioma: "Francés",
        mejorEpoca: "De diciembre a abril",
        lugares: []
    },
    {
        id: 24,
        nombre: "México",
        continente: "América",
        descripcion: "Historia, gastronomía, playas, grandes ciudades y una enorme diversidad cultural y natural.",
        imagen: "imagenes/mexico.jpg",
        moneda: "Peso mexicano",
        idioma: "Español",
        mejorEpoca: "Todo el año, según la región",
        lugares: [
            {
                nombre: "Ciudad de México",
                zona: "Centro",
                descripcion: "Una enorme capital de museos, gastronomía, barrios históricos y una intensa vida cultural.",
                imagen: "imagenes/ciudad-de-mexico.jpg"
            },
            {
                nombre: "San Miguel de Allende",
                zona: "Centro",
                descripcion: "Una ciudad colonial reconocida por su arquitectura, calles históricas y ambiente cultural.",
                imagen: "imagenes/san-miguel-de-allende.jpg"
            },
            {
                nombre: "Teotihuacán",
                zona: "Centro",
                descripcion: "Una de las zonas arqueológicas más importantes de México, conocida por sus grandes pirámides.",
                imagen: "imagenes/teotihuacan.jpg"
            },
            {
                nombre: "Bacalar",
                zona: "Caribe mexicano",
                descripcion: "Un destino del sur de Quintana Roo conocido por su extensa laguna de diferentes tonalidades.",
                imagen: "imagenes/bacalar.jpg"
            },
            {
                nombre: "Cancún",
                zona: "Caribe mexicano",
                descripcion: "Playas, resorts y una importante oferta turística sobre el Caribe.",
                imagen: "imagenes/cancun.jpg"
            },
            {
                nombre: "Cozumel",
                zona: "Caribe mexicano",
                descripcion: "Una isla caribeña especialmente conocida por sus arrecifes y actividades acuáticas.",
                imagen: "imagenes/cozumel.jpg"
            },
            {
                nombre: "Tulum",
                zona: "Caribe mexicano",
                descripcion: "Playas caribeñas, sitios arqueológicos y paisajes naturales de la Riviera Maya.",
                imagen: "imagenes/tulum.jpg"
            },
            {
                nombre: "Nuevo Nayarit",
                zona: "Pacífico",
                descripcion: "Playas y complejos turísticos sobre la costa del Pacífico mexicano.",
                imagen: "imagenes/nuevo-nayarit.jpg"
            },
            {
                nombre: "Puerto Vallarta",
                zona: "Pacífico",
                descripcion: "Una ciudad costera entre el Pacífico y las montañas, con playas, gastronomía y vida urbana.",
                imagen: "imagenes/puerto-vallarta.jpg"
            },
            {
                nombre: "Cabo San Lucas",
                zona: "Baja California Sur",
                descripcion: "Playas, formaciones rocosas y paisajes desérticos junto al mar en el extremo de Baja California Sur.",
                imagen: "imagenes/cabo-san-lucas.jpg"
            },
            {
                nombre: "Puerto Escondido",
                zona: "Oaxaca",
                descripcion: "Un destino de la costa de Oaxaca conocido por sus playas, surf y ambiente relajado.",
                imagen: "imagenes/puerto-escondido.jpg"
            }
        ]
    },
    {
        id: 25,
        nombre: "Perú",
        continente: "América",
        descripcion: "Historia, cultura andina, gastronomía y algunos de los paisajes más emblemáticos de Sudamérica.",
        imagen: "imagenes/peru.jpg",
        moneda: "Sol",
        idioma: "Español",
        mejorEpoca: "De mayo a septiembre para la región andina",
        lugares: [
            {
                nombre: "Cusco",
                zona: "",
                descripcion: "Una ciudad histórica de los Andes y principal punto de partida para conocer el legado inca.",
                imagen: "imagenes/cusco.jpg"
            },
            {
                nombre: "Lima",
                zona: "",
                descripcion: "La capital peruana destaca por su gastronomía, barrios costeros y patrimonio histórico.",
                imagen: "imagenes/lima.jpg"
            },
            {
                nombre: "Urubamba",
                zona: "",
                descripcion: "Una localidad del Valle Sagrado rodeada por paisajes andinos y sitios de gran importancia histórica.",
                imagen: "imagenes/urubamba.jpg"
            }
        ]
    },
    {
        id: 26,
        nombre: "Puerto Rico",
        continente: "América",
        descripcion: "Playas, ciudades históricas, naturaleza y cultura caribeña en un destino lleno de contrastes.",
        imagen: "imagenes/puerto-rico.jpg",
        moneda: "Dólar estadounidense",
        idioma: "Español e inglés",
        mejorEpoca: "De diciembre a abril",
        lugares: []
    },
    {
        id: 27,
        nombre: "República Dominicana",
        continente: "América",
        descripcion: "Extensas playas, paisajes tropicales y una amplia propuesta de experiencias caribeñas.",
        imagen: "imagenes/republica-dominicana.jpg",
        moneda: "Peso dominicano",
        idioma: "Español",
        mejorEpoca: "De diciembre a abril",
        lugares: []
    },
    {
        id: 28,
        nombre: "Saint Kitts y Nevis",
        continente: "América",
        descripcion: "Dos pequeñas islas caribeñas de playas, montañas y paisajes tropicales.",
        imagen: "imagenes/saint-kitts-nevis.jpg",
        moneda: "Dólar del Caribe Oriental",
        idioma: "Inglés",
        mejorEpoca: "De diciembre a abril",
        lugares: []
    },
    {
        id: 29,
        nombre: "Santa Lucía",
        continente: "América",
        descripcion: "Montañas volcánicas, selva y playas en uno de los paisajes más característicos del Caribe.",
        imagen: "imagenes/santa-lucia.jpg",
        moneda: "Dólar del Caribe Oriental",
        idioma: "Inglés",
        mejorEpoca: "De diciembre a abril",
        lugares: []
    },
    {
        id: 30,
        nombre: "Sint Maarten",
        continente: "América",
        descripcion: "Playas, ambiente caribeño y una particular combinación de influencias culturales.",
        imagen: "imagenes/sint-maarten.jpg",
        moneda: "Florín caribeño",
        idioma: "Neerlandés e inglés",
        mejorEpoca: "De diciembre a abril",
        lugares: []
    },
    {
        id: 31,
        nombre: "Tobago",
        continente: "América",
        descripcion: "Una isla de playas tranquilas, arrecifes y naturaleza tropical.",
        imagen: "imagenes/tobago.jpg",
        moneda: "Dólar de Trinidad y Tobago",
        idioma: "Inglés",
        mejorEpoca: "De enero a mayo",
        lugares: []
    },

    // =========================
    // EUROPA
    // =========================

    {
        id: 32,
        nombre: "Alemania",
        continente: "Europa",
        descripcion: "Historia, cultura y ciudades dinámicas en el corazón de Europa.",
        imagen: "imagenes/alemania.jpg",
        moneda: "Euro",
        idioma: "Alemán",
        mejorEpoca: "De mayo a septiembre",
        lugares: [
            {
                nombre: "Berlín",
                zona: "",
                descripcion: "La capital alemana combina historia, arquitectura, museos y una intensa vida cultural.",
                imagen: "imagenes/berlin.jpg"
            }
        ]
    },
    {
        id: 33,
        nombre: "Austria",
        continente: "Europa",
        descripcion: "Arquitectura imperial, música, cultura y paisajes centroeuropeos.",
        imagen: "imagenes/austria.jpg",
        moneda: "Euro",
        idioma: "Alemán",
        mejorEpoca: "Todo el año, según la experiencia buscada",
        lugares: [
            {
                nombre: "Viena",
                zona: "",
                descripcion: "Una capital imperial reconocida por sus palacios, museos, música y elegantes cafés históricos.",
                imagen: "imagenes/viena.jpg"
            }
        ]
    },
    {
        id: 34,
        nombre: "Croacia",
        continente: "Europa",
        descripcion: "Ciudades históricas, costa adriática y paisajes mediterráneos.",
        imagen: "imagenes/croacia.jpg",
        moneda: "Euro",
        idioma: "Croata",
        mejorEpoca: "De mayo a septiembre",
        lugares: [
            {
                nombre: "Dubrovnik",
                zona: "",
                descripcion: "Una ciudad amurallada sobre el Adriático, reconocida por su centro histórico y sus paisajes costeros.",
                imagen: "imagenes/dubrovnik.jpg"
            },
            {
                nombre: "Split",
                zona: "",
                descripcion: "Una ciudad costera construida alrededor del histórico Palacio de Diocleciano y frente al mar Adriático.",
                imagen: "imagenes/split.jpg"
            }
        ]
    },
    {
        id: 35,
        nombre: "España",
        continente: "Europa",
        descripcion: "Historia, gastronomía, playas, islas y ciudades llenas de cultura.",
        imagen: "imagenes/espana.jpg",
        moneda: "Euro",
        idioma: "Español",
        mejorEpoca: "Todo el año, según la región",
        lugares: [
            {
                nombre: "Barcelona",
                zona: "Península",
                descripcion: "Arquitectura, cultura, gastronomía y playas en una de las grandes ciudades del Mediterráneo.",
                imagen: "imagenes/barcelona.jpg"
            },
            {
                nombre: "Córdoba",
                zona: "Península",
                descripcion: "Una ciudad andaluza de enorme patrimonio histórico, reconocida especialmente por su Mezquita-Catedral.",
                imagen: "imagenes/cordoba-espana.jpg"
            },
            {
                nombre: "Girona",
                zona: "Península",
                descripcion: "Una ciudad histórica de Cataluña con un atractivo casco antiguo y arquitectura medieval.",
                imagen: "imagenes/girona.jpg"
            },
            {
                nombre: "Granada",
                zona: "Península",
                descripcion: "Historia andalusí, barrios tradicionales y la Alhambra en un entorno próximo a Sierra Nevada.",
                imagen: "imagenes/granada-espana.jpg"
            },
            {
                nombre: "Madrid",
                zona: "Península",
                descripcion: "La capital española reúne grandes museos, barrios históricos, gastronomía y una intensa vida urbana.",
                imagen: "imagenes/madrid.jpg"
            },
            {
                nombre: "Málaga",
                zona: "Península",
                descripcion: "Una ciudad mediterránea que combina playas, patrimonio histórico, museos y gastronomía.",
                imagen: "imagenes/malaga.jpg"
            },
            {
                nombre: "Marbella",
                zona: "Península",
                descripcion: "Playas, casco histórico y una amplia propuesta turística en la Costa del Sol.",
                imagen: "imagenes/marbella.jpg"
            },
            {
                nombre: "Sevilla",
                zona: "Península",
                descripcion: "Una de las grandes ciudades andaluzas, reconocida por su arquitectura, cultura y tradiciones.",
                imagen: "imagenes/sevilla.jpg"
            },
            {
                nombre: "Valencia",
                zona: "Península",
                descripcion: "Historia, playas, gastronomía y arquitectura contemporánea sobre la costa mediterránea.",
                imagen: "imagenes/valencia.jpg"
            },
            {
                nombre: "Ibiza",
                zona: "Islas Baleares",
                descripcion: "Calas mediterráneas, pueblos y una reconocida vida nocturna en una de las Baleares.",
                imagen: "imagenes/ibiza.jpg"
            },
            {
                nombre: "Mallorca",
                zona: "Islas Baleares",
                descripcion: "Playas, calas, pueblos y montañas en la mayor de las Islas Baleares.",
                imagen: "imagenes/mallorca.jpg"
            },
            {
                nombre: "Menorca",
                zona: "Islas Baleares",
                descripcion: "Una isla mediterránea de calas, playas y un ambiente más tranquilo y natural.",
                imagen: "imagenes/menorca.jpg"
            },
            {
                nombre: "Fuerteventura",
                zona: "Islas Canarias",
                descripcion: "Extensas playas, paisajes volcánicos y condiciones ideales para actividades vinculadas al mar.",
                imagen: "imagenes/fuerteventura.jpg"
            },
            {
                nombre: "Gran Canaria",
                zona: "Islas Canarias",
                descripcion: "Playas, montañas, dunas y una gran diversidad de paisajes dentro de una misma isla.",
                imagen: "imagenes/gran-canaria.jpg"
            },
            {
                nombre: "Lanzarote",
                zona: "Islas Canarias",
                descripcion: "Paisajes volcánicos, playas y una identidad natural muy característica del archipiélago canario.",
                imagen: "imagenes/lanzarote.jpg"
            },
            {
                nombre: "Tenerife",
                zona: "Islas Canarias",
                descripcion: "Playas, pueblos, paisajes volcánicos y el Teide en la mayor de las Islas Canarias.",
                imagen: "imagenes/tenerife.jpg"
            }
        ]
    },
    {
        id: 36,
        nombre: "Francia",
        continente: "Europa",
        descripcion: "Arte, gastronomía, grandes ciudades, pueblos, costas y paisajes alpinos.",
        imagen: "imagenes/francia.jpg",
        moneda: "Euro",
        idioma: "Francés",
        mejorEpoca: "Todo el año, según la región",
        lugares: [
            {
                nombre: "París",
                zona: "París",
                descripcion: "Arte, arquitectura, gastronomía y algunos de los monumentos y museos más reconocidos del mundo.",
                imagen: "imagenes/paris.jpg"
            },
            {
                nombre: "Bayeux",
                zona: "Norte y oeste",
                descripcion: "Una pequeña ciudad normanda conocida por su patrimonio medieval y su proximidad a la costa histórica de Normandía.",
                imagen: "imagenes/bayeux.jpg"
            },
            {
                nombre: "Burdeos",
                zona: "Norte y oeste",
                descripcion: "Arquitectura, gastronomía y una de las regiones vitivinícolas más reconocidas de Francia.",
                imagen: "imagenes/burdeos.jpg"
            },
            {
                nombre: "La Rochelle",
                zona: "Norte y oeste",
                descripcion: "Una histórica ciudad portuaria sobre el Atlántico con un atractivo centro urbano y ambiente marítimo.",
                imagen: "imagenes/la-rochelle.jpg"
            },
            {
                nombre: "Córcega",
                zona: "Mediterráneo",
                descripcion: "Una isla mediterránea de playas, montañas, pueblos y paisajes naturales de gran diversidad.",
                imagen: "imagenes/corcega.jpg"
            },
            {
                nombre: "Niza",
                zona: "Mediterráneo",
                descripcion: "Una elegante ciudad de la Costa Azul situada frente al Mediterráneo y próxima a numerosos destinos de la Riviera Francesa.",
                imagen: "imagenes/niza.jpg"
            },
            {
                nombre: "Beaune",
                zona: "Interior y Alpes",
                descripcion: "Una ciudad histórica de Borgoña especialmente vinculada a la tradición vitivinícola de la región.",
                imagen: "imagenes/beaune.jpg"
            },
            {
                nombre: "Lyon",
                zona: "Interior y Alpes",
                descripcion: "Una importante ciudad histórica reconocida por su arquitectura y destacada tradición gastronómica.",
                imagen: "imagenes/lyon.jpg"
            },
            {
                nombre: "Morzine-Avoriaz",
                zona: "Interior y Alpes",
                descripcion: "Un destino alpino de montaña con actividades de invierno y verano en los Alpes franceses.",
                imagen: "imagenes/morzine-avoriaz.jpg"
            },
            {
                nombre: "Talloires",
                zona: "Interior y Alpes",
                descripcion: "Una pequeña localidad situada junto al lago de Annecy y rodeada por paisajes alpinos.",
                imagen: "imagenes/talloires.jpg"
            }
        ]
    },
    {
        id: 37,
        nombre: "Grecia",
        continente: "Europa",
        descripcion: "Historia antigua, pueblos mediterráneos y algunas de las islas más famosas de Europa.",
        imagen: "imagenes/grecia.jpg",
        moneda: "Euro",
        idioma: "Griego",
        mejorEpoca: "De abril a octubre",
        lugares: [
            {
                nombre: "Atenas",
                zona: "Grecia continental",
                descripcion: "La capital griega reúne algunos de los grandes monumentos de la Antigüedad junto con una intensa vida urbana.",
                imagen: "imagenes/atenas.jpg"
            },
            {
                nombre: "Pireo",
                zona: "Grecia continental",
                descripcion: "El gran puerto de Atenas y principal punto de conexión marítima con numerosas islas griegas.",
                imagen: "imagenes/pireo.jpg"
            },
            {
                nombre: "Creta",
                zona: "Islas griegas",
                descripcion: "La mayor isla de Grecia combina playas, montañas, ciudades históricas y una importante tradición gastronómica.",
                imagen: "imagenes/creta.jpg"
            },
            {
                nombre: "Míconos",
                zona: "Islas griegas",
                descripcion: "Casas blancas, playas y una animada vida social en una de las islas más famosas de las Cícladas.",
                imagen: "imagenes/miconos.jpg"
            },
            {
                nombre: "Paros",
                zona: "Islas griegas",
                descripcion: "Una isla de las Cícladas con pueblos tradicionales, playas y un ambiente mediterráneo relajado.",
                imagen: "imagenes/paros.jpg"
            },
            {
                nombre: "Santorini",
                zona: "Islas griegas",
                descripcion: "Pueblos blancos sobre acantilados volcánicos y espectaculares vistas sobre el mar Egeo.",
                imagen: "imagenes/santorini.jpg"
            }
        ]
    },
    {
        id: 38,
        nombre: "Hungría",
        continente: "Europa",
        descripcion: "Historia, arquitectura y tradición centroeuropea a orillas del Danubio.",
        imagen: "imagenes/hungria.jpg",
        moneda: "Forinto húngaro",
        idioma: "Húngaro",
        mejorEpoca: "De abril a octubre",
        lugares: [
            {
                nombre: "Budapest",
                zona: "",
                descripcion: "Una capital monumental a orillas del Danubio, reconocida por su arquitectura, puentes y baños termales.",
                imagen: "imagenes/budapest.jpg"
            }
        ]
    },
    {
        id: 39,
        nombre: "Irlanda",
        continente: "Europa",
        descripcion: "Paisajes verdes, historia, música y una cultura reconocida en todo el mundo.",
        imagen: "imagenes/irlanda.jpg",
        moneda: "Euro",
        idioma: "Irlandés e inglés",
        mejorEpoca: "De mayo a septiembre",
        lugares: [
            {
                nombre: "Dublín",
                zona: "",
                descripcion: "La capital irlandesa combina historia, literatura, música, pubs tradicionales y una animada vida urbana.",
                imagen: "imagenes/dublin.jpg"
            }
        ]
    },
    {
        id: 40,
        nombre: "Islandia",
        continente: "Europa",
        descripcion: "Volcanes, glaciares, cascadas y algunos de los paisajes naturales más singulares de Europa.",
        imagen: "imagenes/islandia.jpg",
        moneda: "Corona islandesa",
        idioma: "Islandés",
        mejorEpoca: "De junio a agosto para recorrer el país y de septiembre a marzo para auroras boreales",
        lugares: [
            {
                nombre: "Reikiavik",
                zona: "",
                descripcion: "La capital islandesa es el principal punto de partida para descubrir los paisajes naturales del país.",
                imagen: "imagenes/reikiavik.jpg"
            }
        ]
    },
    {
        id: 41,
        nombre: "Italia",
        continente: "Europa",
        descripcion: "Arte, historia, gastronomía y una extraordinaria variedad de ciudades y paisajes.",
        imagen: "imagenes/italia.jpg",
        moneda: "Euro",
        idioma: "Italiano",
        mejorEpoca: "De abril a junio y de septiembre a octubre",
        lugares: [
            {
                nombre: "Milán",
                zona: "Norte",
                descripcion: "Una ciudad de arquitectura, diseño, moda y cultura que funciona además como puerta de entrada al norte italiano.",
                imagen: "imagenes/milan.jpg"
            },
            {
                nombre: "Venecia",
                zona: "Norte",
                descripcion: "Una ciudad construida sobre canales y reconocida mundialmente por su arquitectura y patrimonio histórico.",
                imagen: "imagenes/venecia.jpg"
            },
            {
                nombre: "Florencia",
                zona: "Centro",
                descripcion: "Uno de los grandes centros del Renacimiento, con extraordinarios museos, iglesias y arquitectura histórica.",
                imagen: "imagenes/florencia.jpg"
            },
            {
                nombre: "Roma",
                zona: "Centro",
                descripcion: "Historia antigua, plazas, iglesias, gastronomía y algunos de los monumentos más reconocidos del mundo.",
                imagen: "imagenes/roma.jpg"
            },
            {
                nombre: "Matera",
                zona: "Sur y Costa Amalfitana",
                descripcion: "Una ciudad histórica del sur italiano conocida por sus antiguos barrios excavados en la roca.",
                imagen: "imagenes/matera.jpg"
            },
            {
                nombre: "Nápoles",
                zona: "Sur y Costa Amalfitana",
                descripcion: "Una ciudad de enorme personalidad, historia y gastronomía frente al golfo de Nápoles.",
                imagen: "imagenes/napoles.jpg"
            },
            {
                nombre: "Positano",
                zona: "Sur y Costa Amalfitana",
                descripcion: "Un pueblo construido sobre las laderas de la Costa Amalfitana, conocido por sus vistas sobre el Mediterráneo.",
                imagen: "imagenes/positano.jpg"
            },
            {
                nombre: "Sorrento",
                zona: "Sur y Costa Amalfitana",
                descripcion: "Una localidad costera situada sobre acantilados y estratégicamente ubicada para recorrer el golfo de Nápoles.",
                imagen: "imagenes/sorrento.jpg"
            },
            {
                nombre: "Sicilia",
                zona: "Sicilia",
                descripcion: "La gran isla del sur de Italia combina patrimonio histórico, playas, volcanes, pueblos y una identidad gastronómica propia.",
                imagen: "imagenes/sicilia.jpg"
            },
            {
                nombre: "Palermo",
                zona: "Sicilia",
                descripcion: "La capital siciliana combina arquitectura, mercados, gastronomía y siglos de influencias culturales.",
                imagen: "imagenes/palermo.jpg"
            },
            {
                nombre: "Taormina",
                zona: "Sicilia",
                descripcion: "Una histórica localidad siciliana situada sobre la costa oriental con vistas al Mediterráneo y al Etna.",
                imagen: "imagenes/taormina.jpg"
            }
        ]
    },
    {
        id: 42,
        nombre: "Malta",
        continente: "Europa",
        descripcion: "Historia mediterránea, pequeñas ciudades y costas de aguas transparentes.",
        imagen: "imagenes/malta.jpg",
        moneda: "Euro",
        idioma: "Maltés e inglés",
        mejorEpoca: "De abril a octubre",
        lugares: [
            {
                nombre: "Isla de Malta",
                zona: "",
                descripcion: "La principal isla del archipiélago concentra ciudades históricas, playas y gran parte del patrimonio cultural maltés.",
                imagen: "imagenes/isla-de-malta.jpg"
            }
        ]
    },
    {
        id: 43,
        nombre: "Noruega",
        continente: "Europa",
        descripcion: "Fiordos, montañas y paisajes escandinavos en un entorno de gran belleza natural.",
        imagen: "imagenes/noruega.jpg",
        moneda: "Corona noruega",
        idioma: "Noruego",
        mejorEpoca: "De mayo a septiembre",
        lugares: [
            {
                nombre: "Trondheim",
                zona: "",
                descripcion: "Una histórica ciudad noruega de arquitectura colorida situada junto al fiordo de Trondheim.",
                imagen: "imagenes/trondheim.jpg"
            }
        ]
    },
    {
        id: 44,
        nombre: "Países Bajos",
        continente: "Europa",
        descripcion: "Canales, arquitectura, cultura y ciudades de gran identidad.",
        imagen: "imagenes/paises-bajos.jpg",
        moneda: "Euro",
        idioma: "Neerlandés",
        mejorEpoca: "De abril a septiembre",
        lugares: [
            {
                nombre: "Ámsterdam",
                zona: "",
                descripcion: "Canales, museos, arquitectura histórica y una intensa vida cultural en la capital neerlandesa.",
                imagen: "imagenes/amsterdam.jpg"
            }
        ]
    },
    {
        id: 45,
        nombre: "Polonia",
        continente: "Europa",
        descripcion: "Historia, arquitectura y ciudades con un importante patrimonio cultural.",
        imagen: "imagenes/polonia.jpg",
        moneda: "Złoty",
        idioma: "Polaco",
        mejorEpoca: "De mayo a septiembre",
        lugares: [
            {
                nombre: "Cracovia",
                zona: "",
                descripcion: "Una de las ciudades históricas más importantes de Polonia, con un centro medieval de gran valor patrimonial.",
                imagen: "imagenes/cracovia.jpg"
            }
        ]
    },
    {
        id: 46,
        nombre: "Portugal",
        continente: "Europa",
        descripcion: "Ciudades históricas, costa atlántica, gastronomía e islas de paisajes únicos.",
        imagen: "imagenes/portugal.jpg",
        moneda: "Euro",
        idioma: "Portugués",
        mejorEpoca: "De abril a octubre",
        lugares: [
            {
                nombre: "Lisboa",
                zona: "Portugal continental",
                descripcion: "Una capital construida sobre colinas, con barrios históricos, miradores, tranvías y una importante tradición gastronómica.",
                imagen: "imagenes/lisboa.jpg"
            },
            {
                nombre: "Oporto",
                zona: "Portugal continental",
                descripcion: "Una ciudad histórica a orillas del Duero, reconocida por su arquitectura y tradición vitivinícola.",
                imagen: "imagenes/oporto.jpg"
            },
            {
                nombre: "Madeira",
                zona: "Islas",
                descripcion: "Un archipiélago atlántico de montañas, senderos, vegetación y espectaculares paisajes costeros.",
                imagen: "imagenes/madeira.jpg"
            }
        ]
    },
    {
        id: 47,
        nombre: "Reino Unido",
        continente: "Europa",
        descripcion: "Grandes ciudades, historia, pueblos y paisajes que recorren Inglaterra, Escocia, Gales e Irlanda del Norte.",
        imagen: "imagenes/reino-unido.jpg",
        moneda: "Libra esterlina",
        idioma: "Inglés",
        mejorEpoca: "De mayo a septiembre",
        lugares: [
            {
                nombre: "Bath",
                zona: "Inglaterra",
                descripcion: "Una histórica ciudad inglesa conocida por sus termas romanas y elegante arquitectura georgiana.",
                imagen: "imagenes/bath.jpg"
            },
            {
                nombre: "Brixham",
                zona: "Inglaterra",
                descripcion: "Una pequeña localidad pesquera de Devon con puerto y ambiente marítimo tradicional.",
                imagen: "imagenes/brixham.jpg"
            },
            {
                nombre: "Cambridge",
                zona: "Inglaterra",
                descripcion: "Una histórica ciudad universitaria de arquitectura, colegios y espacios verdes junto al río Cam.",
                imagen: "imagenes/cambridge.jpg"
            },
            {
                nombre: "Keswick",
                zona: "Inglaterra",
                descripcion: "Una localidad del Lake District rodeada por lagos y montañas.",
                imagen: "imagenes/keswick.jpg"
            },
            {
                nombre: "Liverpool",
                zona: "Inglaterra",
                descripcion: "Una ciudad portuaria reconocida por su historia musical, arquitectura y cultura.",
                imagen: "imagenes/liverpool.jpg"
            },
            {
                nombre: "Londres",
                zona: "Inglaterra",
                descripcion: "Una de las grandes capitales mundiales de historia, cultura, museos, gastronomía y entretenimiento.",
                imagen: "imagenes/londres.jpg"
            },
            {
                nombre: "Mánchester",
                zona: "Inglaterra",
                descripcion: "Una ciudad de importante patrimonio industrial, música, cultura y tradición deportiva.",
                imagen: "imagenes/manchester.jpg"
            },
            {
                nombre: "Newcastle upon Tyne",
                zona: "Inglaterra",
                descripcion: "Una ciudad del noreste inglés conocida por sus puentes, arquitectura y ambiente cultural.",
                imagen: "imagenes/newcastle.jpg"
            },
            {
                nombre: "Oxford",
                zona: "Inglaterra",
                descripcion: "Una histórica ciudad universitaria reconocida por sus colegios y arquitectura.",
                imagen: "imagenes/oxford.jpg"
            },
            {
                nombre: "Torquay",
                zona: "Inglaterra",
                descripcion: "Una localidad costera de Devon con playas y ambiente tradicional de la Riviera Inglesa.",
                imagen: "imagenes/torquay.jpg"
            },
            {
                nombre: "Windermere",
                zona: "Inglaterra",
                descripcion: "Uno de los principales puntos para conocer los lagos y paisajes del Lake District.",
                imagen: "imagenes/windermere.jpg"
            },
            {
                nombre: "York",
                zona: "Inglaterra",
                descripcion: "Una ciudad amurallada con importante patrimonio medieval y una de las grandes catedrales de Inglaterra.",
                imagen: "imagenes/york.jpg"
            },
            {
                nombre: "Edimburgo",
                zona: "Escocia",
                descripcion: "La capital escocesa combina un espectacular centro histórico, castillo, cultura y festivales.",
                imagen: "imagenes/edimburgo.jpg"
            },
            {
                nombre: "Glasgow",
                zona: "Escocia",
                descripcion: "La mayor ciudad de Escocia destaca por su arquitectura, música, museos y vida cultural.",
                imagen: "imagenes/glasgow.jpg"
            },
            {
                nombre: "Inverness",
                zona: "Escocia",
                descripcion: "Una pequeña ciudad considerada puerta de entrada a las Highlands escocesas.",
                imagen: "imagenes/inverness.jpg"
            },
            {
                nombre: "Isla de Arran",
                zona: "Escocia",
                descripcion: "Una isla de montañas, costa y pequeños pueblos que reúne muchos de los paisajes característicos de Escocia.",
                imagen: "imagenes/isla-de-arran.jpg"
            },
            {
                nombre: "Lewis y Harris",
                zona: "Escocia",
                descripcion: "Una isla de las Hébridas Exteriores conocida por sus playas, montañas y paisajes remotos.",
                imagen: "imagenes/lewis-harris.jpg"
            },
            {
                nombre: "Cardiff",
                zona: "Gales",
                descripcion: "La capital galesa combina historia, cultura, espacios urbanos y un importante castillo.",
                imagen: "imagenes/cardiff.jpg"
            },
            {
                nombre: "Belfast",
                zona: "Irlanda del Norte",
                descripcion: "La capital de Irlanda del Norte combina patrimonio industrial, historia y una renovada propuesta cultural.",
                imagen: "imagenes/belfast.jpg"
            },
            {
                nombre: "Jersey",
                zona: "Islas del Canal",
                descripcion: "Una isla del canal de la Mancha de playas, acantilados y una particular mezcla de influencias británicas y francesas.",
                imagen: "imagenes/jersey.jpg"
            }
        ]
    },
    {
        id: 48,
        nombre: "República Checa",
        continente: "Europa",
        descripcion: "Arquitectura, historia y tradición centroeuropea con ciudades de gran atractivo cultural.",
        imagen: "imagenes/republica-checa.jpg",
        moneda: "Corona checa",
        idioma: "Checo",
        mejorEpoca: "De abril a octubre",
        lugares: [
            {
                nombre: "Praga",
                zona: "",
                descripcion: "Una de las grandes ciudades históricas de Europa, conocida por sus torres, plazas, puentes y arquitectura.",
                imagen: "imagenes/praga.jpg"
            }
        ]
    },
    {
        id: 49,
        nombre: "Rumania",
        continente: "Europa",
        descripcion: "Historia, arquitectura y paisajes de Europa oriental.",
        imagen: "imagenes/rumania.jpg",
        moneda: "Leu rumano",
        idioma: "Rumano",
        mejorEpoca: "De mayo a septiembre",
        lugares: [
            {
                nombre: "Bucarest",
                zona: "",
                descripcion: "La capital rumana combina grandes avenidas, arquitectura histórica y una activa vida cultural.",
                imagen: "imagenes/bucarest.jpg"
            }
        ]
    },

    // =========================
    // ASIA
    // =========================

    {
        id: 50,
        nombre: "Arabia Saudita",
        continente: "Asia",
        descripcion: "Una combinación de ciudades modernas, tradición, desiertos y patrimonio histórico.",
        imagen: "imagenes/arabia-saudita.jpg",
        moneda: "Riyal saudí",
        idioma: "Árabe",
        mejorEpoca: "De noviembre a marzo",
        lugares: [
            {
                nombre: "Riad",
                zona: "",
                descripcion: "La capital saudita combina arquitectura contemporánea, centros culturales y tradiciones de la península arábiga.",
                imagen: "imagenes/riad.jpg"
            }
        ]
    },
    {
        id: 51,
        nombre: "Baréin",
        continente: "Asia",
        descripcion: "Un pequeño país insular del golfo Pérsico donde conviven historia y modernidad.",
        imagen: "imagenes/barein.jpg",
        moneda: "Dinar bareiní",
        idioma: "Árabe",
        mejorEpoca: "De noviembre a marzo",
        lugares: [
            {
                nombre: "Manama",
                zona: "",
                descripcion: "La capital de Baréin reúne arquitectura moderna, mercados tradicionales y espacios culturales.",
                imagen: "imagenes/manama.jpg"
            }
        ]
    },
    {
        id: 52,
        nombre: "Camboya",
        continente: "Asia",
        descripcion: "Templos, historia y paisajes del sudeste asiático en un destino de enorme riqueza cultural.",
        imagen: "imagenes/camboya.jpg",
        moneda: "Riel camboyano",
        idioma: "Jemer",
        mejorEpoca: "De noviembre a febrero",
        lugares: [
            {
                nombre: "Siem Reap",
                zona: "",
                descripcion: "La principal base para visitar los templos de Angkor y uno de los grandes centros turísticos de Camboya.",
                imagen: "imagenes/siem-reap.jpg"
            }
        ]
    },
    {
        id: 53,
        nombre: "Catar",
        continente: "Asia",
        descripcion: "Arquitectura contemporánea, cultura árabe y paisajes del golfo Pérsico.",
        imagen: "imagenes/catar.jpg",
        moneda: "Riyal catarí",
        idioma: "Árabe",
        mejorEpoca: "De noviembre a marzo",
        lugares: [
            {
                nombre: "Doha",
                zona: "",
                descripcion: "Una moderna capital del golfo con museos, mercados, arquitectura contemporánea y un extenso paseo marítimo.",
                imagen: "imagenes/doha.jpg"
            }
        ]
    },
    {
        id: 54,
        nombre: "China",
        continente: "Asia",
        descripcion: "Una enorme diversidad de historia, cultura, gastronomía y grandes ciudades.",
        imagen: "imagenes/china.jpg",
        moneda: "Yuan renminbi",
        idioma: "Chino mandarín",
        mejorEpoca: "De abril a mayo y de septiembre a octubre",
        lugares: [
            {
                nombre: "Pekín",
                zona: "",
                descripcion: "La capital china reúne grandes monumentos históricos, palacios, templos y una extensa propuesta cultural.",
                imagen: "imagenes/pekin.jpg"
            },
            {
                nombre: "Hong Kong",
                zona: "",
                descripcion: "Una gran metrópolis asiática de rascacielos, mercados, gastronomía, montañas e islas.",
                imagen: "imagenes/hong-kong.jpg"
            },
            {
                nombre: "Shanghái",
                zona: "",
                descripcion: "Una de las mayores ciudades de China, donde conviven arquitectura histórica y un impresionante perfil urbano moderno.",
                imagen: "imagenes/shanghai.jpg"
            }
        ]
    },
    {
        id: 55,
        nombre: "Corea del Sur",
        continente: "Asia",
        descripcion: "Tradición, tecnología, gastronomía y cultura contemporánea en Asia oriental.",
        imagen: "imagenes/corea-del-sur.jpg",
        moneda: "Won surcoreano",
        idioma: "Coreano",
        mejorEpoca: "De abril a junio y de septiembre a noviembre",
        lugares: [
            {
                nombre: "Seúl",
                zona: "",
                descripcion: "Una enorme capital donde palacios históricos, barrios tradicionales y tecnología conviven en un mismo paisaje urbano.",
                imagen: "imagenes/seul.jpg"
            }
        ]
    },
    {
        id: 56,
        nombre: "Emiratos Árabes Unidos",
        continente: "Asia",
        descripcion: "Ciudades futuristas, desierto, playas y una extraordinaria arquitectura contemporánea.",
        imagen: "imagenes/emiratos-arabes-unidos.jpg",
        moneda: "Dírham de los Emiratos Árabes Unidos",
        idioma: "Árabe",
        mejorEpoca: "De noviembre a marzo",
        lugares: [
            {
                nombre: "Abu Dabi",
                zona: "",
                descripcion: "La capital combina grandes mezquitas, museos, arquitectura contemporánea y paseos frente al golfo.",
                imagen: "imagenes/abu-dabi.jpg"
            },
            {
                nombre: "Dubái",
                zona: "",
                descripcion: "Rascacielos, playas, centros comerciales y algunos de los proyectos arquitectónicos más conocidos del mundo.",
                imagen: "imagenes/dubai.jpg"
            },
            {
                nombre: "Ras al-Jaima",
                zona: "",
                descripcion: "Un emirato de playas, desiertos y montañas que ofrece una alternativa más tranquila a las grandes ciudades.",
                imagen: "imagenes/ras-al-jaima.jpg"
            }
        ]
    },
    {
        id: 57,
        nombre: "Filipinas",
        continente: "Asia",
        descripcion: "Un enorme archipiélago de playas, naturaleza tropical y una gran diversidad cultural.",
        imagen: "imagenes/filipinas.jpg",
        moneda: "Peso filipino",
        idioma: "Filipino e inglés",
        mejorEpoca: "De diciembre a abril",
        lugares: [
            {
                nombre: "Luzón",
                zona: "",
                descripcion: "La isla más grande de Filipinas reúne grandes ciudades, montañas, volcanes, arrozales y extensas costas.",
                imagen: "imagenes/luzon.jpg"
            }
        ]
    },
    {
        id: 58,
        nombre: "Georgia",
        continente: "Asia",
        descripcion: "Montañas, historia, gastronomía y una cultura situada entre Europa y Asia.",
        imagen: "imagenes/georgia.jpg",
        moneda: "Lari georgiano",
        idioma: "Georgiano",
        mejorEpoca: "De mayo a octubre",
        lugares: [
            {
                nombre: "Tiflis",
                zona: "",
                descripcion: "La capital georgiana combina un casco histórico de gran personalidad con arquitectura contemporánea y tradición gastronómica.",
                imagen: "imagenes/tiflis.jpg"
            }
        ]
    },
    {
        id: 59,
        nombre: "India",
        continente: "Asia",
        descripcion: "Una enorme diversidad de culturas, paisajes, religiones, ciudades y tradiciones.",
        imagen: "imagenes/india.jpg",
        moneda: "Rupia india",
        idioma: "Hindi e inglés",
        mejorEpoca: "De octubre a marzo, según la región",
        lugares: [
            {
                nombre: "Nueva Delhi",
                zona: "Norte",
                descripcion: "La capital india reúne monumentos históricos, grandes avenidas, mercados y una intensa vida urbana.",
                imagen: "imagenes/nueva-delhi.jpg"
            },
            {
                nombre: "Jaipur",
                zona: "Rajastán",
                descripcion: "La conocida Ciudad Rosa destaca por sus palacios, fortalezas, mercados y arquitectura.",
                imagen: "imagenes/jaipur.jpg"
            },
            {
                nombre: "Udaipur",
                zona: "Rajastán",
                descripcion: "Una ciudad de palacios y lagos rodeada por los paisajes de Rajastán.",
                imagen: "imagenes/udaipur.jpg"
            },
            {
                nombre: "Goa",
                zona: "Costa occidental",
                descripcion: "Playas, patrimonio histórico y una particular combinación de influencias indias y portuguesas.",
                imagen: "imagenes/goa.jpg"
            },
            {
                nombre: "Mumbai",
                zona: "Costa occidental",
                descripcion: "Una de las grandes metrópolis de India, centro financiero, cultural y cinematográfico del país.",
                imagen: "imagenes/mumbai.jpg"
            }
        ]
    },
    {
        id: 60,
        nombre: "Indonesia",
        continente: "Asia",
        descripcion: "Miles de islas, volcanes, playas, templos y una enorme diversidad cultural.",
        imagen: "imagenes/indonesia.jpg",
        moneda: "Rupia indonesia",
        idioma: "Indonesio",
        mejorEpoca: "De mayo a septiembre, según la región",
        lugares: [
            {
                nombre: "Bali",
                zona: "",
                descripcion: "Templos, arrozales, playas, cultura y paisajes tropicales en una de las islas más conocidas de Indonesia.",
                imagen: "imagenes/bali.jpg"
            }
        ]
    },
    {
        id: 61,
        nombre: "Japón",
        continente: "Asia",
        descripcion: "Tradición, tecnología, gastronomía y una extraordinaria diversidad de ciudades y paisajes.",
        imagen: "imagenes/japon.jpg",
        moneda: "Yen japonés",
        idioma: "Japonés",
        mejorEpoca: "De marzo a mayo y de octubre a noviembre",
        lugares: [
            {
                nombre: "Tokio",
                zona: "Tokio y alrededores",
                descripcion: "Una enorme metrópolis donde conviven barrios ultramodernos, templos, gastronomía y cultura tradicional.",
                imagen: "imagenes/tokio.jpg"
            },
            {
                nombre: "Toyosu",
                zona: "Tokio y alrededores",
                descripcion: "Una zona moderna de Tokio conocida especialmente por su gran mercado y su relación con la gastronomía japonesa.",
                imagen: "imagenes/toyosu.jpg"
            },
            {
                nombre: "Fujikawaguchiko-machi",
                zona: "Tokio y alrededores",
                descripcion: "Una localidad junto al lago Kawaguchi con algunas de las vistas más conocidas del monte Fuji.",
                imagen: "imagenes/fujikawaguchiko.jpg"
            },
            {
                nombre: "Kioto",
                zona: "Kansai",
                descripcion: "Templos, santuarios, jardines y barrios históricos en una de las grandes capitales culturales de Japón.",
                imagen: "imagenes/kioto.jpg"
            },
            {
                nombre: "Nara",
                zona: "Kansai",
                descripcion: "Una antigua capital japonesa conocida por sus templos históricos, parques y patrimonio cultural.",
                imagen: "imagenes/nara.jpg"
            },
            {
                nombre: "Osaka",
                zona: "Kansai",
                descripcion: "Una gran ciudad especialmente reconocida por su gastronomía, entretenimiento y animada vida urbana.",
                imagen: "imagenes/osaka.jpg"
            },
            {
                nombre: "Kanazawa",
                zona: "Centro",
                descripcion: "Una ciudad histórica conocida por sus jardines, barrios tradicionales, artesanías y patrimonio samurái.",
                imagen: "imagenes/kanazawa.jpg"
            },
            {
                nombre: "Takayama",
                zona: "Centro",
                descripcion: "Una ciudad de montaña con un casco histórico tradicional y acceso a los paisajes de los Alpes japoneses.",
                imagen: "imagenes/takayama.jpg"
            },
            {
                nombre: "Hiroshima",
                zona: "Oeste",
                descripcion: "Una ciudad de enorme importancia histórica que combina memoria, cultura y una moderna vida urbana.",
                imagen: "imagenes/hiroshima.jpg"
            },
            {
                nombre: "Okinawa",
                zona: "Okinawa",
                descripcion: "Un archipiélago subtropical de playas, arrecifes y una identidad cultural diferenciada del resto de Japón.",
                imagen: "imagenes/okinawa.jpg"
            },
            {
                nombre: "Naha",
                zona: "Okinawa",
                descripcion: "La principal ciudad de Okinawa y punto de entrada para conocer la cultura y las islas del archipiélago.",
                imagen: "imagenes/naha.jpg"
            },
            {
                nombre: "Miyakojima",
                zona: "Okinawa",
                descripcion: "Una isla de Okinawa conocida por sus playas de arena clara y aguas transparentes.",
                imagen: "imagenes/miyakojima.jpg"
            }
        ]
    },
    {
        id: 62,
        nombre: "Jordania",
        continente: "Asia",
        descripcion: "Ciudades históricas, desiertos y algunos de los grandes sitios arqueológicos de Medio Oriente.",
        imagen: "imagenes/jordania.jpg",
        moneda: "Dinar jordano",
        idioma: "Árabe",
        mejorEpoca: "De marzo a mayo y de septiembre a noviembre",
        lugares: [
            {
                nombre: "Ammán",
                zona: "",
                descripcion: "La capital jordana combina restos históricos, mercados, gastronomía y una extensa vida urbana.",
                imagen: "imagenes/amman.jpg"
            },
            {
                nombre: "Petra / Wadi Musa",
                zona: "",
                descripcion: "Wadi Musa es la principal base para conocer Petra, la extraordinaria ciudad histórica excavada en la roca.",
                imagen: "imagenes/petra.jpg"
            },
            {
                nombre: "Áqaba",
                zona: "",
                descripcion: "Una ciudad costera sobre el mar Rojo conocida por sus playas y actividades acuáticas.",
                imagen: "imagenes/aqaba.jpg"
            }
        ]
    },
    {
        id: 63,
        nombre: "Malasia",
        continente: "Asia",
        descripcion: "Grandes ciudades, diversidad cultural, gastronomía y naturaleza tropical.",
        imagen: "imagenes/malasia.jpg",
        moneda: "Ringgit malasio",
        idioma: "Malayo",
        mejorEpoca: "Todo el año, según la región",
        lugares: [
            {
                nombre: "Kuala Lumpur",
                zona: "",
                descripcion: "Una moderna capital multicultural conocida por sus rascacielos, gastronomía, mercados y centros comerciales.",
                imagen: "imagenes/kuala-lumpur.jpg"
            }
        ]
    },
    {
        id: 64,
        nombre: "Maldivas",
        continente: "Asia",
        descripcion: "Atolones, playas de arena blanca y aguas transparentes en pleno océano Índico.",
        imagen: "imagenes/maldivas.jpg",
        moneda: "Rufiyaa maldiva",
        idioma: "Dhivehi",
        mejorEpoca: "De noviembre a abril",
        lugares: []
    },
    {
        id: 65,
        nombre: "Nepal",
        continente: "Asia",
        descripcion: "Montañas, templos y cultura en el corazón del Himalaya.",
        imagen: "imagenes/nepal.jpg",
        moneda: "Rupia nepalesa",
        idioma: "Nepalí",
        mejorEpoca: "De marzo a mayo y de octubre a noviembre",
        lugares: [
            {
                nombre: "Katmandú",
                zona: "",
                descripcion: "La capital nepalesa reúne templos, plazas históricas, mercados y una cultura estrechamente vinculada al Himalaya.",
                imagen: "imagenes/katmandu.jpg"
            }
        ]
    },
    {
        id: 66,
        nombre: "Omán",
        continente: "Asia",
        descripcion: "Desiertos, montañas, costas y ciudades que conservan una marcada identidad árabe.",
        imagen: "imagenes/oman.jpg",
        moneda: "Rial omaní",
        idioma: "Árabe",
        mejorEpoca: "De octubre a abril",
        lugares: [
            {
                nombre: "Mascate",
                zona: "",
                descripcion: "La capital omaní combina montañas, costa, mezquitas, mercados y una arquitectura de perfil tradicional.",
                imagen: "imagenes/mascate.jpg"
            },
            {
                nombre: "Salalah",
                zona: "",
                descripcion: "Una ciudad del sur de Omán conocida por sus playas, paisajes naturales y temporada del monzón.",
                imagen: "imagenes/salalah.jpg"
            }
        ]
    },
    {
        id: 67,
        nombre: "Singapur",
        continente: "Asia",
        descripcion: "Una ciudad-Estado moderna, multicultural y reconocida por su arquitectura, gastronomía y espacios verdes.",
        imagen: "imagenes/singapur.jpg",
        moneda: "Dólar de Singapur",
        idioma: "Inglés, malayo, mandarín y tamil",
        mejorEpoca: "Todo el año",
        lugares: []
    },
    {
        id: 68,
        nombre: "Sri Lanka",
        continente: "Asia",
        descripcion: "Playas, ciudades históricas, montañas y paisajes tropicales en el océano Índico.",
        imagen: "imagenes/sri-lanka.jpg",
        moneda: "Rupia de Sri Lanka",
        idioma: "Cingalés y tamil",
        mejorEpoca: "Según la costa y la época del monzón",
        lugares: [
            {
                nombre: "Bentota",
                zona: "Costa",
                descripcion: "Un destino costero conocido por sus playas y actividades acuáticas.",
                imagen: "imagenes/bentota.jpg"
            },
            {
                nombre: "Galle",
                zona: "Costa",
                descripcion: "Una histórica ciudad costera conocida por su fuerte y su arquitectura colonial.",
                imagen: "imagenes/galle.jpg"
            },
            {
                nombre: "Tangalle",
                zona: "Costa",
                descripcion: "Una zona costera del sur de Sri Lanka con extensas playas y un ambiente tranquilo.",
                imagen: "imagenes/tangalle.jpg"
            },
            {
                nombre: "Colombo",
                zona: "Ciudades",
                descripcion: "La principal ciudad del país combina mercados, arquitectura, gastronomía y vida urbana.",
                imagen: "imagenes/colombo.jpg"
            },
            {
                nombre: "Ella",
                zona: "Tierras altas",
                descripcion: "Una pequeña localidad de montaña rodeada por plantaciones de té, senderos y paisajes verdes.",
                imagen: "imagenes/ella.jpg"
            }
        ]
    },
    {
        id: 69,
        nombre: "Tailandia",
        continente: "Asia",
        descripcion: "Templos, gastronomía, grandes ciudades, montañas y algunas de las playas más famosas del sudeste asiático.",
        imagen: "imagenes/tailandia.jpg",
        moneda: "Baht tailandés",
        idioma: "Tailandés",
        mejorEpoca: "De noviembre a febrero, según la región",
        lugares: [
            {
                nombre: "Bangkok",
                zona: "Centro",
                descripcion: "Una enorme capital de templos, mercados, gastronomía, centros comerciales y una intensa vida urbana.",
                imagen: "imagenes/bangkok.jpg"
            },
            {
                nombre: "Chiang Mai",
                zona: "Norte",
                descripcion: "Una ciudad del norte rodeada de montañas y reconocida por sus templos, mercados y cultura tradicional.",
                imagen: "imagenes/chiang-mai.jpg"
            },
            {
                nombre: "Ao Nang",
                zona: "Sur",
                descripcion: "Una localidad costera de Krabi utilizada como base para recorrer playas, islas y formaciones de piedra caliza.",
                imagen: "imagenes/ao-nang.jpg"
            },
            {
                nombre: "Phuket",
                zona: "Sur",
                descripcion: "Una de las principales islas turísticas del país, con playas y una amplia oferta de actividades.",
                imagen: "imagenes/phuket.jpg"
            }
        ]
    },
    {
        id: 70,
        nombre: "Turquía",
        continente: "Asia",
        descripcion: "Historia, cultura, gastronomía y paisajes situados entre Europa y Asia.",
        imagen: "imagenes/turquia.jpg",
        moneda: "Lira turca",
        idioma: "Turco",
        mejorEpoca: "De abril a junio y de septiembre a octubre",
        lugares: [
            {
                nombre: "Estambul",
                zona: "",
                descripcion: "Una ciudad entre dos continentes, repleta de mezquitas, palacios, mercados y barrios históricos.",
                imagen: "imagenes/estambul.jpg"
            },
            {
                nombre: "Göreme",
                zona: "",
                descripcion: "Una localidad de Capadocia rodeada por formaciones rocosas, iglesias excavadas y paisajes únicos.",
                imagen: "imagenes/goreme.jpg"
            }
        ]
    },
    {
        id: 71,
        nombre: "Vietnam",
        continente: "Asia",
        descripcion: "Ciudades vibrantes, gastronomía, historia y paisajes muy diversos de norte a sur.",
        imagen: "imagenes/vietnam.jpg",
        moneda: "Dong vietnamita",
        idioma: "Vietnamita",
        mejorEpoca: "Según la región",
        lugares: [
            {
                nombre: "Hanói",
                zona: "Norte",
                descripcion: "La capital vietnamita combina lagos, barrios históricos, templos y una intensa cultura gastronómica.",
                imagen: "imagenes/hanoi.jpg"
            },
            {
                nombre: "Hué",
                zona: "Centro",
                descripcion: "La antigua capital imperial conserva ciudadelas, tumbas y un importante patrimonio histórico.",
                imagen: "imagenes/hue.jpg"
            },
            {
                nombre: "Hoi An",
                zona: "Centro",
                descripcion: "Una histórica ciudad de calles peatonales, arquitectura tradicional y una característica iluminación nocturna.",
                imagen: "imagenes/hoi-an.jpg"
            },
            {
                nombre: "Quy Nhon",
                zona: "Centro",
                descripcion: "Una ciudad costera de playas y paisajes marinos con un ambiente más tranquilo que otros destinos vietnamitas.",
                imagen: "imagenes/quy-nhon.jpg"
            },
            {
                nombre: "Ho Chi Minh",
                zona: "Sur",
                descripcion: "La mayor ciudad de Vietnam combina historia, mercados, gastronomía y una intensa vida urbana.",
                imagen: "imagenes/ho-chi-minh.jpg"
            }
        ]
    },

    // =========================
    // ÁFRICA
    // =========================

    {
        id: 72,
        nombre: "Egipto",
        continente: "África",
        descripcion: "Historia milenaria, templos, ciudades y paisajes entre el Nilo, el desierto y el mar Rojo.",
        imagen: "imagenes/egipto.jpg",
        moneda: "Libra egipcia",
        idioma: "Árabe",
        mejorEpoca: "De octubre a abril",
        lugares: [
            {
                nombre: "El Cairo",
                zona: "Norte",
                descripcion: "La gran capital egipcia es la principal puerta de entrada para conocer las pirámides, museos y la historia del antiguo Egipto.",
                imagen: "imagenes/el-cairo.jpg"
            },
            {
                nombre: "Alejandría",
                zona: "Norte",
                descripcion: "Una histórica ciudad mediterránea vinculada durante siglos al intercambio cultural y comercial.",
                imagen: "imagenes/alejandria.jpg"
            },
            {
                nombre: "Lúxor",
                zona: "Valle del Nilo",
                descripcion: "Uno de los grandes centros arqueológicos de Egipto, rodeado de templos, tumbas y monumentos del mundo antiguo.",
                imagen: "imagenes/luxor.jpg"
            },
            {
                nombre: "Hurghada",
                zona: "Mar Rojo",
                descripcion: "Un destino costero conocido por sus playas, resorts y actividades acuáticas sobre el mar Rojo.",
                imagen: "imagenes/hurghada.jpg"
            }
        ]
    },
    {
        id: 73,
        nombre: "Kenia",
        continente: "África",
        descripcion: "Sabana, vida silvestre, grandes ciudades y playas sobre el océano Índico.",
        imagen: "imagenes/kenia.jpg",
        moneda: "Chelín keniano",
        idioma: "Suajili e inglés",
        mejorEpoca: "De junio a octubre y de enero a febrero",
        lugares: [
            {
                nombre: "Nairobi",
                zona: "",
                descripcion: "La capital keniana combina vida urbana, cultura y acceso a importantes experiencias de naturaleza.",
                imagen: "imagenes/nairobi.jpg"
            },
            {
                nombre: "Watamu",
                zona: "",
                descripcion: "Una localidad costera conocida por sus playas, arrecifes y áreas naturales protegidas.",
                imagen: "imagenes/watamu.jpg"
            }
        ]
    },
    {
        id: 74,
        nombre: "Marruecos",
        continente: "África",
        descripcion: "Medinas, desiertos, montañas, mercados y una cultura marcada por múltiples influencias.",
        imagen: "imagenes/marruecos.jpg",
        moneda: "Dírham marroquí",
        idioma: "Árabe y amazigh",
        mejorEpoca: "De marzo a mayo y de septiembre a noviembre",
        lugares: [
            {
                nombre: "Marrakech",
                zona: "Ciudades imperiales",
                descripcion: "Una de las grandes ciudades históricas de Marruecos, reconocida por su medina, mercados, jardines y palacios.",
                imagen: "imagenes/marrakech.jpg"
            },
            {
                nombre: "Fez",
                zona: "Ciudades imperiales",
                descripcion: "Una histórica ciudad imperial conocida por su extensa medina y patrimonio cultural.",
                imagen: "imagenes/fez.jpg"
            },
            {
                nombre: "Merzouga",
                zona: "Desierto",
                descripcion: "Una pequeña localidad junto a las grandes dunas del Sahara y punto de partida para recorrer el desierto.",
                imagen: "imagenes/merzouga.jpg"
            },
            {
                nombre: "Taghazout",
                zona: "Costa atlántica",
                descripcion: "Una localidad costera de ambiente relajado conocida especialmente por sus playas y surf.",
                imagen: "imagenes/taghazout.jpg"
            }
        ]
    },
    {
        id: 75,
        nombre: "Mauricio",
        continente: "África",
        descripcion: "Playas tropicales, montañas y una rica combinación de culturas en el océano Índico.",
        imagen: "imagenes/mauricio.jpg",
        moneda: "Rupia de Mauricio",
        idioma: "Inglés, francés y criollo mauriciano",
        mejorEpoca: "De mayo a diciembre",
        lugares: []
    },
    {
        id: 76,
        nombre: "Sudáfrica",
        continente: "África",
        descripcion: "Grandes ciudades, costas, montañas, viñedos y una extraordinaria diversidad natural.",
        imagen: "imagenes/sudafrica.jpg",
        moneda: "Rand sudafricano",
        idioma: "Múltiples idiomas oficiales",
        mejorEpoca: "Todo el año, según la región",
        lugares: [
            {
                nombre: "Ciudad del Cabo",
                zona: "",
                descripcion: "Una ciudad situada entre el océano y las montañas, reconocida por sus paisajes, gastronomía y alrededores vitivinícolas.",
                imagen: "imagenes/ciudad-del-cabo.jpg"
            }
        ]
    },
    {
        id: 77,
        nombre: "Tanzania",
        continente: "África",
        descripcion: "Safaris, montañas, naturaleza y playas tropicales sobre el océano Índico.",
        imagen: "imagenes/tanzania.jpg",
        moneda: "Chelín tanzano",
        idioma: "Suajili e inglés",
        mejorEpoca: "De junio a octubre",
        lugares: [
            {
                nombre: "Arusha",
                zona: "Norte",
                descripcion: "Una de las principales bases para comenzar recorridos por parques nacionales y zonas de safari del norte de Tanzania.",
                imagen: "imagenes/arusha.jpg"
            },
            {
                nombre: "Moshi",
                zona: "Norte",
                descripcion: "Una localidad situada cerca del Kilimanjaro y utilizada como punto de partida para conocer la región.",
                imagen: "imagenes/moshi.jpg"
            },
            {
                nombre: "Zanzíbar",
                zona: "Costa e islas",
                descripcion: "Un archipiélago de playas tropicales, historia, cultura suajili y aguas del océano Índico.",
                imagen: "imagenes/zanzibar.jpg"
            }
        ]
    },
    {
        id: 78,
        nombre: "Zambia",
        continente: "África",
        descripcion: "Naturaleza, grandes ríos y paisajes espectaculares en el sur de África.",
        imagen: "imagenes/zambia.jpg",
        moneda: "Kwacha zambiano",
        idioma: "Inglés",
        mejorEpoca: "De mayo a octubre",
        lugares: [
            {
                nombre: "Livingstone",
                zona: "",
                descripcion: "Una de las principales bases para visitar las Cataratas Victoria desde el lado de Zambia.",
                imagen: "imagenes/livingstone.jpg"
            }
        ]
    },
    {
        id: 79,
        nombre: "Zimbabue",
        continente: "África",
        descripcion: "Paisajes naturales, vida silvestre y uno de los grandes atractivos naturales del continente africano.",
        imagen: "imagenes/zimbabue.jpg",
        moneda: "Zimbabwe Gold y otras monedas de uso aceptado",
        idioma: "Múltiples idiomas oficiales",
        mejorEpoca: "De mayo a octubre",
        lugares: [
            {
                nombre: "Cataratas Victoria",
                zona: "",
                descripcion: "Una de las mayores cataratas del mundo, situada sobre el río Zambeze en la frontera con Zambia.",
                imagen: "imagenes/cataratas-victoria.jpg"
            }
        ]
    },

    // =========================
    // OCEANÍA
    // =========================

    {
        id: 80,
        nombre: "Australia",
        continente: "Oceanía",
        descripcion: "Grandes ciudades, playas, naturaleza, regiones vitivinícolas y paisajes únicos.",
        imagen: "imagenes/australia.jpg",
        moneda: "Dólar australiano",
        idioma: "Inglés",
        mejorEpoca: "Todo el año, según la región",
        lugares: [
            {
                nombre: "Sídney",
                zona: "Costa este",
                descripcion: "Una de las grandes ciudades australianas, reconocida por su bahía, playas y arquitectura emblemática.",
                imagen: "imagenes/sidney.jpg"
            },
            {
                nombre: "Melbourne",
                zona: "Sur",
                descripcion: "Una ciudad reconocida por su cultura, gastronomía, arte, barrios y vida urbana.",
                imagen: "imagenes/melbourne.jpg"
            },
            {
                nombre: "Hobart",
                zona: "Tasmania",
                descripcion: "La capital de Tasmania combina patrimonio histórico, gastronomía y espectaculares paisajes naturales cercanos.",
                imagen: "imagenes/hobart.jpg"
            },
            {
                nombre: "Port Douglas",
                zona: "Queensland",
                descripcion: "Una localidad tropical utilizada como base para conocer la Gran Barrera de Coral y los paisajes del norte de Queensland.",
                imagen: "imagenes/port-douglas.jpg"
            },
            {
                nombre: "Margaret River",
                zona: "Australia Occidental",
                descripcion: "Una región conocida por sus viñedos, gastronomía, playas y paisajes costeros.",
                imagen: "imagenes/margaret-river.jpg"
            }
        ]
    },
    {
        id: 81,
        nombre: "Fiyi",
        continente: "Oceanía",
        descripcion: "Islas tropicales, playas, arrecifes y cultura del Pacífico Sur.",
        imagen: "imagenes/fiyi.jpg",
        moneda: "Dólar fiyiano",
        idioma: "Inglés, fiyiano e hindi de Fiyi",
        mejorEpoca: "De mayo a octubre",
        lugares: [
            {
                nombre: "Viti Levu",
                zona: "",
                descripcion: "La mayor isla de Fiyi reúne ciudades, playas, montañas y algunos de los principales accesos turísticos del país.",
                imagen: "imagenes/viti-levu.jpg"
            }
        ]
    },
    {
        id: 82,
        nombre: "Islas Cook",
        continente: "Oceanía",
        descripcion: "Pequeñas islas del Pacífico de lagunas transparentes, playas y paisajes tropicales.",
        imagen: "imagenes/islas-cook.jpg",
        moneda: "Dólar neozelandés",
        idioma: "Inglés y maorí de las Islas Cook",
        mejorEpoca: "De mayo a octubre",
        lugares: [
            {
                nombre: "Aitutaki",
                zona: "",
                descripcion: "Una isla especialmente reconocida por su extensa laguna de aguas transparentes y pequeños islotes.",
                imagen: "imagenes/aitutaki.jpg"
            },
            {
                nombre: "Rarotonga",
                zona: "",
                descripcion: "La principal isla del archipiélago combina montañas, playas, pueblos y una laguna tropical.",
                imagen: "imagenes/rarotonga.jpg"
            }
        ]
    },
    {
        id: 83,
        nombre: "Nueva Zelanda",
        continente: "Oceanía",
        descripcion: "Montañas, lagos, volcanes, grandes paisajes naturales y ciudades rodeadas de naturaleza.",
        imagen: "imagenes/nueva-zelanda.jpg",
        moneda: "Dólar neozelandés",
        idioma: "Inglés y maorí",
        mejorEpoca: "De diciembre a marzo para clima más cálido",
        lugares: [
            {
                nombre: "Auckland",
                zona: "Isla Norte",
                descripcion: "La ciudad más grande del país combina vida urbana, puertos, islas y paisajes volcánicos.",
                imagen: "imagenes/auckland.jpg"
            },
            {
                nombre: "Rotorua",
                zona: "Isla Norte",
                descripcion: "Una región conocida por su actividad geotérmica, lagos y fuerte presencia de la cultura maorí.",
                imagen: "imagenes/rotorua.jpg"
            },
            {
                nombre: "Whitianga",
                zona: "Isla Norte",
                descripcion: "Una localidad costera utilizada como base para conocer playas y paisajes de la península de Coromandel.",
                imagen: "imagenes/whitianga.jpg"
            },
            {
                nombre: "Queenstown",
                zona: "Isla Sur",
                descripcion: "Una ciudad rodeada por montañas y lagos, reconocida por sus paisajes y actividades de aventura.",
                imagen: "imagenes/queenstown.jpg"
            },
            {
                nombre: "Wanaka",
                zona: "Isla Sur",
                descripcion: "Una localidad junto al lago Wanaka rodeada por montañas y grandes paisajes naturales.",
                imagen: "imagenes/wanaka.jpg"
            }
        ]
    },
    {
        id: 84,
        nombre: "Polinesia Francesa",
        continente: "Oceanía",
        descripcion: "Islas volcánicas, lagunas turquesas y algunos de los paisajes tropicales más reconocidos del Pacífico.",
        imagen: "imagenes/polinesia-francesa.jpg",
        moneda: "Franco CFP",
        idioma: "Francés",
        mejorEpoca: "De mayo a octubre",
        lugares: [
            {
                nombre: "Bora Bora",
                zona: "",
                descripcion: "Una isla volcánica rodeada por una extensa laguna de aguas turquesas y arrecifes.",
                imagen: "imagenes/bora-bora.jpg"
            },
            {
                nombre: "Moorea",
                zona: "",
                descripcion: "Una isla montañosa de bahías, playas y lagunas situada cerca de Tahití.",
                imagen: "imagenes/moorea.jpg"
            }
        ]
    },
    {
        id: 85,
        nombre: "Islas Caimán",
        continente: "América",
        descripcion: "Un archipiélago caribeño de playas de aguas transparentes, arrecifes y paisajes tropicales.",
        imagen: "imagenes/islas-caiman.jpg",
        moneda: "Dólar de las Islas Caimán",
        idioma: "Inglés",
        mejorEpoca: "De diciembre a abril",
        lugares: [
            {
                nombre: "Gran Caimán",
                zona: "",
                descripcion: "La mayor de las Islas Caimán concentra algunas de sus playas más conocidas y gran parte de la oferta turística del archipiélago.",
                imagen: "imagenes/gran-caiman.jpg"
            }
        ]
    }]
const itinerarios = [
    {
        duracion: "3 días",
        titulo: "Escapada",
        descripcion: "Un recorrido corto para conocer los lugares imprescindibles de tu destino.",
        actividades: [
            "Recorrido por los principales atractivos",
            "Experiencia gastronómica",
            "Tiempo libre para explorar"
        ]
    },
    {
        duracion: "7 días",
        titulo: "Una semana",
        descripcion: "Un viaje equilibrado para recorrer, descubrir y disfrutar con más tiempo.",
        actividades: [
            "Visita a los principales atractivos",
            "Excursión de día completo",
            "Experiencia gastronómica",
            "Tiempo libre para actividades personales"
        ]
    },
    {
        duracion: "14 días",
        titulo: "Aventura completa",
        descripcion: "Un recorrido completo para conocer diferentes lugares y vivir nuevas experiencias.",
        actividades: [
            "Recorrido por diferentes ciudades",
            "Excursiones y actividades culturales",
            "Experiencias gastronómicas",
            "Días libres para explorar"
        ]
    }
];
let continenteSeleccionado = "Todos";
function iniciarDestinos() {

    marcarContinenteActivo();

    aplicarFiltrosDestinos();
}
function mostrarDestinos(lista) {

    const contenedor = document.getElementById("listaDestinos");

    let contenido = "";

    lista.forEach(destino => {

        contenido += `
            <article class="tarjeta-destino">
                <img
    src="${destino.imagen}"
    alt="${destino.nombre}"
    onerror="this.onerror=null; this.src='imagenes/sin-imagen.jpg';"
>

                <div class="contenido-destino">
                    <p class="continente-destino">${destino.continente}</p>
                    <h2>${destino.nombre}</h2>
                    <p>${destino.descripcion}</p>

                    <button type="button" onclick="verDestino(${destino.id})">
                        Ver destino
                    </button>
                </div>
            </article>
        `;
    });

    contenedor.innerHTML = contenido;
}
function verDestino(idDestino) {

    localStorage.setItem("destinoSeleccionado", idDestino);

    window.location.href = "detalle-destino.html";
}
function filtrarPorContinente(continente) {

    continenteSeleccionado = continente;

    marcarContinenteActivo();

    aplicarFiltrosDestinos();
}
function marcarContinenteActivo() {

    const botones = document.querySelectorAll(".continentes-destinos button");

    botones.forEach(boton => {
        boton.classList.remove("continente-activo");
    });

    if (continenteSeleccionado == "Todos") {
        document.getElementById("btnTodos").classList.add("continente-activo");
    }

    if (continenteSeleccionado == "América") {
        document.getElementById("btnAmerica").classList.add("continente-activo");
    }

    if (continenteSeleccionado == "Europa") {
        document.getElementById("btnEuropa").classList.add("continente-activo");
    }

    if (continenteSeleccionado == "Asia") {
        document.getElementById("btnAsia").classList.add("continente-activo");
    }

    if (continenteSeleccionado == "África") {
        document.getElementById("btnAfrica").classList.add("continente-activo");
    }

    if (continenteSeleccionado == "Oceanía") {
        document.getElementById("btnOceania").classList.add("continente-activo");
    }
}

function buscarDestinos() {

    aplicarFiltrosDestinos();
}


function ordenarDestinos() {

    aplicarFiltrosDestinos();
}
function aplicarFiltrosDestinos() {

    const texto = document.getElementById("buscarDestino").value.toLowerCase();

    const orden = document.getElementById("ordenDestinos").value;

    let destinosFiltrados = destinos.filter(destino => {

        const coincideContinente =
            continenteSeleccionado == "Todos" ||
            destino.continente == continenteSeleccionado;

        const coincideBusqueda =
            destino.nombre.toLowerCase().includes(texto);

        return coincideContinente && coincideBusqueda;
    });


    if (orden == "az") {

        destinosFiltrados.sort(
            (a, b) => a.nombre.localeCompare(b.nombre)
        );

    } else {

        destinosFiltrados.sort(
            (a, b) => b.nombre.localeCompare(a.nombre)
        );
    }


    mostrarDestinos(destinosFiltrados);
}
const mostrarItinerarios = (lista) => {

    const listaItinerarios = document.getElementById("listaItinerarios");

    listaItinerarios.innerHTML = "";

    lista.forEach(itinerario => {

        let listaActividades = "";

        itinerario.actividades.forEach(actividad => {
            listaActividades += `<li>${actividad}</li>`;
        });

        listaItinerarios.innerHTML += `
            <article class="tarjeta-itinerario">
                <h3>${itinerario.duracion}</h3>
                <h4>${itinerario.titulo}</h4>
                <p>${itinerario.descripcion}</p>

                <h4>Incluye:</h4>
                <ul>
                    ${listaActividades}
                </ul>
            </article>
        `;

    });

}
const cargarDestinosCotizacion = () => {

    const selectDestino = document.getElementById("destinoCotizacion");

    destinos.forEach(destino => {
        selectDestino.innerHTML += `
            <option value="${destino.nombre}">${destino.nombre}</option>
        `;
    });

}
const calcularCotizacion = () => {

    const nombreDestino = document.getElementById("destinoCotizacion").value;
    const dias = Number(document.getElementById("dias").value);
    const viajeros = Number(document.getElementById("viajeros").value);
    const alojamiento = document.getElementById("alojamiento").value;
    const resultado = document.getElementById("resultadoCotizacion");
    const traslado = document.getElementById("traslado").checked;
    const excursion = document.getElementById("excursion").checked;

    if (nombreDestino == "" || dias <= 0 || viajeros <= 0 || alojamiento == "") {
        resultado.innerHTML = "<p>Por favor, completá correctamente todos los datos.</p>";
        return;
    }

    const destinoSeleccionado = destinos.find(destino => destino.nombre == nombreDestino);

    let multiplicadorAlojamiento = 1;

    if (alojamiento == "estandar") {
        multiplicadorAlojamiento = 1.25;
    } else if (alojamiento == "premium") {
        multiplicadorAlojamiento = 1.50;
    }

    let total = destinoSeleccionado.precioDia * dias * viajeros * multiplicadorAlojamiento;

    if (traslado) {
        total += 50 * viajeros;
    }

    if (excursion) {
        total += 80 * viajeros;
    }

    resultado.innerHTML = `
    <h3>Cotización estimada</h3>
    <p>Destino: ${destinoSeleccionado.nombre}</p>
    <p>Duración: ${dias} días</p>
    <p>Viajeros: ${viajeros}</p>
    <p>Alojamiento: ${alojamiento}</p>
    <p><strong>Total estimado: USD ${total}</strong></p>
`;

}
const validarContacto = () => {

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const motivo = document.getElementById("motivo").value;
    const mensaje = document.getElementById("mensaje").value;
    const resultado = document.getElementById("resultadoContacto");

    if (nombre == "" || email == "" || motivo == "" || mensaje == "") {
        resultado.innerHTML = "<p>Por favor, completá todos los campos.</p>";
        return;
    }

    resultado.innerHTML = `
        <h3>¡Consulta enviada!</h3>
        <p>Gracias ${nombre}. Recibimos tu mensaje correctamente.</p>
    `;

}
function cargarDetalleDestino() {

    const idDestino = Number(
        localStorage.getItem("destinoSeleccionado")
    );

    const destino = destinos.find(
        destino => destino.id == idDestino
    );

    const contenedor = document.getElementById("detalleDestino");

    if (destino) {

        let lugaresHTML = "";

        if (destino.lugares && destino.lugares.length > 0) {

            const zonas = [];

            destino.lugares.forEach(lugar => {

                if (
                    lugar.zona != "" &&
                    !zonas.includes(lugar.zona)
                ) {
                    zonas.push(lugar.zona);
                }
            });

            if (zonas.length > 0) {

                zonas.forEach(zona => {

                    lugaresHTML += `
                <div class="grupo-zona">

                    <h3 class="titulo-zona">${zona}</h3>

                    <div class="contenedor-lugares">
            `;

                    destino.lugares.forEach(lugar => {

                        if (lugar.zona == zona) {

                            lugaresHTML += `
                        <article class="tarjeta-lugar">

                            <img
    src="${lugar.imagen}"
    alt="${lugar.nombre}"
    onerror="this.onerror=null; this.src='imagenes/sin-imagen.jpg';"
>

                            <div class="contenido-lugar">
                                <h4>${lugar.nombre}</h4>
                                <p>${lugar.descripcion}</p>
                            </div>

                        </article>
                    `;
                        }
                    });

                    lugaresHTML += `
                    </div>
                </div>
            `;
                });

            } else {

                lugaresHTML += `
            <div class="contenedor-lugares">
        `;

                destino.lugares.forEach(lugar => {

                    lugaresHTML += `
                <article class="tarjeta-lugar">

                    <img
    src="${lugar.imagen}"
    alt="${lugar.nombre}"
    onerror="this.onerror=null; this.src='imagenes/sin-imagen.jpg';"
>

                    <div class="contenido-lugar">
                        <h3>${lugar.nombre}</h3>
                        <p>${lugar.descripcion}</p>
                    </div>

                </article>
            `;
                });

                lugaresHTML += `
            </div>
        `;
            }
        }

        contenedor.innerHTML = `

            <div class="encabezado-detalle">

                <img
    src="${destino.imagen}"
    alt="${destino.nombre}"
    onerror="this.onerror=null; this.src='imagenes/sin-imagen.jpg';"
>

                <div class="informacion-detalle">

                    <p class="continente-destino">
                        ${destino.continente}
                    </p>

                    <h1>${destino.nombre}</h1>

                    <p>${destino.descripcion}</p>

                    <div class="datos-destino">

                        <p>
                            <strong>Moneda:</strong>
                            ${destino.moneda}
                        </p>

                        <p>
                            <strong>Idioma:</strong>
                            ${destino.idioma}
                        </p>

                        <p>
                            <strong>Mejor época:</strong>
                            ${destino.mejorEpoca}
                        </p>

                    </div>

                </div>

            </div>

<section class="lugares-destino">

    <h2>Lugares destacados</h2>

    ${lugaresHTML}

</section>

            <a href="destinos.html" class="volver-destinos">
                Volver a destinos
            </a>
        `;

    } else {

        contenedor.innerHTML = `
            <h1>Destino no encontrado</h1>
            <p>No pudimos encontrar el destino seleccionado.</p>
            <a href="destinos.html">Volver a destinos</a>
        `;
    }
}