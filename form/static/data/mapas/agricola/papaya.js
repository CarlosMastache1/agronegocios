// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  Costa: [
    // Cada objeto representa un municipio de la región Costa con sus datos
    {
      id: 20334,
      superficie: 1228,
      volumen: 130297,
      nombre: "Villa de Tututepec de Melchor Ocampo",
    },
    {
      id: 20482,
      superficie: 422,
      volumen: 54252,
      nombre: "Santiago Pinotepa Nacional",
    },
    {
      id: 20467,
      superficie: 342,
      volumen: 42379,
      nombre: "Santiago Jamiltepec",
    },
    {
      id: 20414,
      superficie: 164,
      volumen: 21149,
      nombre: "Santa María Huazolotitlán",
    },
    {
      id: 20413,
      superficie: 66,
      volumen: 8699,
      nombre: "Santa María Huatulco",
    },
    {
      id: 20439,
      superficie: 130,
      volumen: 14392,
      nombre: "Santa María Tonameca",
    },
    {
      id: 20319,
      superficie: 69,
      volumen: 6426,
      nombre: "San Pedro Mixtepec",
    },
    {
      id: 20401,
      superficie: 60,
      volumen: 5691,
      nombre: "Santa María Colotepec",
    },
    {
      id: 20090,
      superficie: 56,
      volumen: 4899,
      nombre: "San Andrés Huaxpaltepec",
    },
    {
      id: 20474,
      superficie: 35,
      volumen: 3613,
      nombre: "Santiago Llano Grande",
    },
    {
      id: 20266,
      superficie: 29,
      volumen: 3465,
      nombre: "San Miguel del Puerto",
    },
    {
      id: 20367,
      superficie: 31,
      volumen: 1702,
      nombre: "Santa Catarina Mechoacán",
    },
    {
      id: 20509,
      superficie: 21,
      volumen: 1397,
      nombre: "Santo Domingo de Morelos",
    },
    {
      id: 20180,
      superficie: 17,
      volumen: 1374,
      nombre: "San Juan Bautista Lo de Soto",
    },
    {
      id: 20485,
      superficie: 12,
      volumen: 1274,
      nombre: "Santiago Tapextla",
    },
  ],
  Istmo: [
    // Municipios de la región del Istmo con datos de producción
    {
      id: 20418,
      superficie: 40,
      volumen: 3766,
      nombre: "Santa María Jalapa del Marqués",
    },
    {
      id: 20421,
      superficie: 30,
      volumen: 2840,
      nombre: "Santa María Mixtequilla",
    },
    {
      id: 20307,
      superficie: 22,
      volumen: 2080,
      nombre: "San Pedro Huamelula",
    },
    {
      id: 20453,
      superficie: 19,
      volumen: 1792,
      nombre: "Santiago Astata",
    },
    {
      id: 20515,
      superficie: 13,
      volumen: 1131,
      nombre: "Santo Domingo Tehuantepec",
    },
    {
      id: 20525,
      superficie: 14,
      volumen: 880,
      nombre: "Santo Domingo Zanatepec",
    },
    {
      id: 20052,
      superficie: 14,
      volumen: 769,
      nombre: "Magdalena Tequisistlán",
    },
    {
      id: 20005,
      superficie: 4,
      volumen: 257,
      nombre: "Asunción Ixtaltepec",
    },
  ],
  "Sierra Sur": [
    // Municipios de la región Sierra Sur
    {
      id: 20008,
      superficie: 12,
      volumen: 598,
      nombre: "Asunción Tlacolulita",
    },
    {
      id: 20064,
      superficie: 9,
      volumen: 492,
      nombre: "Nejapa de Madero",
    },
    {
      id: 20357,
      superficie: 9,
      volumen: 440,
      nombre: "Santa Ana Tavela",
    },
  ],
  "Sierra de Flores Magón": [
    // Municipios de la región Sierra de Flores Magón
    {
      id: 20177,
      superficie: 10,
      volumen: 400,
      nombre: "San Juan Bautista Cuicatlán",
    },
    {
      id: 20545,
      superficie: 9,
      volumen: 325,
      nombre: "Teotitlán de Flores Magón",
    },
    {
      id: 20431,
      superficie: 8,
      volumen: 306,
      nombre: "Santa María Tecomavaca",
    },
    {
      id: 20206,
      superficie: 4,
      volumen: 159,
      nombre: "San Juan de Los Cués",
    },
    {
      id: 20558,
      superficie: 1,
      volumen: 39,
      nombre: "Valerio Trujano",
    },
  ],
  Papaloapan: [
    // Un solo municipio reportado en esta región
    {
      id: 20002,
      superficie: 11,
      volumen: 546,
      nombre: "Acatlán de Pérez Figueroa",
    },
  ],
  "Valles Centrales": [
    { id: 20449, superficie: 8, volumen: 330, nombre: "Santa María Zoquitlán" },
    { id: 20333, superficie: 6, volumen: 166, nombre: "San Pedro Totolápam" },
  ],
};

// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    id: "OAX",
    entidad: "Oaxaca",
    volumen: 318323,
    superficie: 2923,
    rendimiento: 84.54,
    valor: 1927827104,
  },
  {
    ranking: 2,
    id: "COL",
    entidad: "Colima",
    volumen: 204924,
    superficie: 3706,
    rendimiento: 57.31,
    valor: 1588411496,
  },
  {
    ranking: 3,
    id: "CHS",
    entidad: "Chiapas",
    volumen: 160252,
    superficie: 2078,
    rendimiento: 79.29,
    valor: 825823431,
  },
  {
    ranking: 4,
    id: "MICH",
    entidad: "Michoacán",
    volumen: 122421,
    superficie: 3585,
    rendimiento: 40.74,
    valor: 852083156,
  },
  {
    ranking: 5,
    id: "VER",
    entidad: "Veracruz",
    volumen: 121628,
    superficie: 3800,
    rendimiento: 29.33,
    valor: 583646496,
  },
  {
    ranking: 6,
    id: "GRO",
    entidad: "Guerrero",
    volumen: 53721,
    superficie: 1625,
    rendimiento: 28.7,
    valor: 444854172,
  },
  {
    ranking: 7,
    id: "JAL",
    entidad: "Jalisco",
    volumen: 34071,
    superficie: 581,
    rendimiento: 49.31,
    valor: 375058437,
  },
  {
    ranking: 8,
    id: "SLP",
    entidad: "San Luis Potosí",
    volumen: 32708,
    superficie: 472,
    rendimiento: 68.38,
    valor: 211594767,
  },
  {
    ranking: 9,
    id: "TAMP",
    entidad: "Tamaulipas",
    volumen: 24999,
    superficie: 385,
    rendimiento: 54.24,
    valor: 302792280,
  },
  {
    ranking: 10,
    id: "CAM",
    entidad: "Campeche",
    volumen: 15233,
    superficie: 319,
    rendimiento: 49.07,
    valor: 122854858,
  },
  {
    ranking: 11,
    id: "NAY",
    entidad: "Nayarit",
    volumen: 12755,
    superficie: 350,
    rendimiento: 32.32,
    valor: 87104477,
  },
  {
    ranking: 12,
    id: "YUC",
    entidad: "Yucatán",
    volumen: 12039,
    superficie: 206,
    rendimiento: 53.71,
    valor: 84348452,
  },
  {
    ranking: 13,
    id: "SIN",
    entidad: "Sinaloa",
    volumen: 11086,
    superficie: 424,
    rendimiento: 19.46,
    valor: 66544369,
  },
  {
    ranking: 14,
    id: "TAB",
    entidad: "Tabasco",
    volumen: 7795,
    superficie: 142,
    rendimiento: 47.0,
    valor: 33051859,
  },
  {
    ranking: 15,
    id: "PUE",
    entidad: "Puebla",
    volumen: 6582,
    superficie: 188,
    rendimiento: 32.32,
    valor: 33562746,
  },
  {
    ranking: 16,
    id: "QR",
    entidad: "Quintana Roo",
    volumen: 5930,
    superficie: 94,
    rendimiento: 81.6,
    valor: 39089709,
  },
  {
    ranking: 17,
    id: "MOR",
    entidad: "Morelos",
    volumen: 3528,
    superficie: 104,
    rendimiento: 33.65,
    valor: 22445922,
  },
  {
    ranking: 18,
    id: "BCS",
    entidad: "Baja California Sur",
    volumen: 320,
    superficie: 15,
    rendimiento: 31.95,
    valor: 2132330,
  },
  {
    ranking: 19,
    id: "EM",
    entidad: "México",
    volumen: 233,
    superficie: 21,
    rendimiento: 16.2,
    valor: 1994185,
  },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { id: "IND", ranking: 1, pais: "India", superficie: 150000 },
  { id: "NGA", ranking: 2, pais: "Nigeria", superficie: 95052 },
  { id: "BGD", ranking: 3, pais: "Bangladesh", superficie: 49770 },
  { id: "BRA", ranking: 4, pais: "Brasil", superficie: 26431 },
  { id: "MEX", ranking: 5, pais: "México", superficie: 19613 },
  { id: "PER", ranking: 6, pais: "Perú", superficie: 14368 },
  { id: "COD", ranking: 7, pais: "República Democrática del Congo", superficie: 12355 },
  { id: "IDN", ranking: 8, pais: "Indonesia", superficie: 11208 },
  { id: "CHN", ranking: 9, pais: "China", superficie: 10531 },
  { id: "DOM", ranking: 10, pais: "República Dominicana", superficie: 10022 },
  { id: "VNM", ranking: 11, pais: "Viet Nam", superficie: 8733 },
  { id: "VEN", ranking: 12,  pais: "Venezuela (República Bolivariana de)", superficie: 8453, },
  { id: "CHN", ranking: 13, pais: "China, Continental", superficie: 8000 },
  { id: "PHL", ranking: 14, pais: "Filipinas", superficie: 7554 },
  { id: "COL", ranking: 15, pais: "Colombia", superficie: 6794 },
  { id: "ETH", ranking: 16, pais: "Etiopía", superficie: 6078 },
  { id: "KEN", ranking: 17, pais: "Kenya", superficie: 6052 },
  { id: "CIV", ranking: 18, pais: "Côte d'Ivoire", superficie: 5925 },
  { id: "MWI", ranking: 19, pais: "Malawi", superficie: 5757 },
  { id: "CUB", ranking: 20, pais: "Cuba", superficie: 4796 },
  { id: "MLI", ranking: 21, pais: "Malí", superficie: 4495 },
  { id: "MOZ", ranking: 22, pais: "Mozambique", superficie: 4312 },
  { id: "THA", ranking: 23, pais: "Tailandia", superficie: 4135 },
  { id: "ECU", ranking: 24, pais: "Ecuador", superficie: 3804 },
  { id: "GTM", ranking: 25, pais: "Guatemala", superficie: 2906 },
  { id: "LAO", ranking: 26, pais: "República Democrática Popular Lao", superficie: 2620 },
  { id: "TWN", ranking: 27, pais: "China, Taiwán provincia de", superficie: 2531 },
  { id: "BOL", ranking: 28, pais: "Bolivia (Estado Plurinacional de)", superficie: 2339 },
  { id: "MYS", ranking: 29, pais: "Malasia", superficie: 2255 },
  { id: "PAK", ranking: 30, pais: "Pakistán", superficie: 1677 },
  { id: "GHA", ranking: 31, pais: "Ghana", superficie: 1619 },
  { id: "YEM", ranking: 32, pais: "Yemen", superficie: 1610 },
  { id: "HTI", ranking: 33, pais: "Haití", superficie: 1440 },
  { id: "NPL", ranking: 34, pais: "Nepal", superficie: 1325 },
  { id: "PRY", ranking: 35, pais: "Paraguay", superficie: 1115 },
  { id: "CRI", ranking: 36, pais: "Costa Rica", superficie: 1010 },
  { id: "ZAF", ranking: 37, pais: "Sudáfrica", superficie: 913 },
  { id: "AUS", ranking: 38, pais: "Australia", superficie: 904 },
  { id: "FJI", ranking: 39, pais: "Fiji", superficie: 898 },
  { id: "PAN", ranking: 40, pais: "Panamá", superficie: 577 },
  { id: "JAM", ranking: 41, pais: "Jamaica", superficie: 568 },
  { id: "GNB", ranking: 42, pais: "Guinea-Bissau", superficie: 327 },
  { id: "GUY", ranking: 43, pais: "Guyana", superficie: 305 },
  { id: "OMN", ranking: 44, pais: "Omán", superficie: 295 },
  { id: "ISR", ranking: 45, pais: "Israel", superficie: 267 },
  { id: "WSM", ranking: 46, pais: "Samoa", superficie: 241 },
  { id: "PRI", ranking: 47, pais: "Puerto Rico", superficie: 228 },
  { id: "COG", ranking: 48, pais: "Congo", superficie: 225 },
  { id: "SAU", ranking: 49, pais: "Arabia Saudita", superficie: 220 },
  { id: "USA", ranking: 50, pais: "Estados Unidos de América", superficie: 202 },
  { id: "ARG", ranking: 51, pais: "Argentina", superficie: 201 },
  { id: "CHL", ranking: 52, pais: "Chile", superficie: 136 },
  { id: "TLS", ranking: 53, pais: "Timor-Leste", superficie: 95 },
  { id: "SLV", ranking: 54, pais: "El Salvador", superficie: 74 },
  { id: "COK", ranking: 55, pais: "Islas Cook", superficie: 70 },
  { id: "TTO", ranking: 56, pais: "Trinidad y Tabago", superficie: 64 },
  { id: "RWA", ranking: 57, pais: "Rwanda", superficie: 57 },
  { id: "MAR", ranking: 58, pais: "Marruecos", superficie: 55 },
  { id: "BHS", ranking: 59, pais: "Bahamas", superficie: 37 },
  { id: "BTN", ranking: 60, pais: "Bután", superficie: 32 },
  { id: "IRN", ranking: 61, pais: "Irán (República Islámica del)", superficie: 28 },
  { id: "BLZ", ranking: 62, pais: "Belice", superficie: 23 },
  { id: "SUR", ranking: 63, pais: "Suriname", superficie: 15 },
  { id: "MDV", ranking: 64, pais: "Maldivas", superficie: 13 },
  { id: "ZWE", ranking: 65, pais: "Zimbabwe", superficie: 13 },
  { id: "HND", ranking: 66, pais: "Honduras", superficie: 12 },
  { id: "DOM", ranking: 67, pais: "Dominica", superficie: 6 },
  { id: "GRD", ranking: 68, pais: "Granada", superficie: 0 },
  { id: "NRU", ranking: 69, pais: "Nauru", superficie: 0 },
  { id: "SGP", ranking: 70, pais: "Singapur", superficie: 0 },
  { id: "CMR", ranking: 71, pais: "Camerún", superficie: 0 },
  { id: "TUN", ranking: 72, pais: "Túnez", superficie: 0 },
];

const agrupado = {};

tab_pro_mundial.forEach((item) => {
  if (!agrupado[item.id]) {
    agrupado[item.id] = { ...item };
  } else {
    // Sumamos superficie
    agrupado[item.id].superficie += item.superficie;

    agrupado[item.id].volumen += item.volumen;
  }
});

// Convertimos el objeto agrupado a arreglo y ajustamos el ranking
const paises_datos_pro = Object.values(agrupado).map((item, i) => ({
  ...item,
  ranking: i + 1,
}));

// Años de referencia para los datos de balanza comercial
const labels_balanza = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
];

// Valores anuales de importación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las importaciones del producto
const importacion_balanza = [264, 152, 71, 9];

// Valores anuales de exportación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las exportaciones del producto
const exportacion_balanza = [
  120635, 104797, 108425, 115054, 131308, 146202, 168703, 162867, 155014,
  160841, 167356, 183558, 201004,
];

// Tabla de los principales destinos de exportación
// Cada objeto representa un país y el valor (en USD) de exportaciones realizadas hacia ese país
const tab_destino_exportacion = [
  { num: 1, pais: "Canadá y Estados Unidos", valor: 65133681 },
];

// Años de refeencia para los datos de producción historica
const labels_historica_producto = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  2023,
];

// Producción histórica (en toneladas) por región desde 2010 hasta 2023
// Cada objeto contiene el nombre de una region('nom') y arreglo ('fila')
const produccion_historica_producto = [
  {
    nom: "Sierra de Flores Magón",
    fila: [
      642.3, 605.85, 976.93, 830.13, 2698.46, 2190.38, 808.06, 882.16, 1005.85,
      1032.41, 1007.52, 1224.29, 1033.72, 1229.1,
    ],
  },
  {
    nom: "Costa",
    fila: [
      102245.05, 101491.5, 112635.4, 199746.23, 259379.68, 260114, 307403.2,
      275888.5, 299325.92, 308227.87, 334219.24, 337487.21, 350195.05,
      301009.35,
    ],
  },
  {
    nom: "Istmo",
    fila: [
      8795.72, 7955.1, 4622.85, 9793.52, 8848.7, 9993.05, 10507.47, 9441.76,
      11888.64, 12225.87, 12014.28, 12421.02, 13369.68, 13513.68,
    ],
  },
  {
    nom: "Mixteca",
    fila: [743.2, 666, 760, 520, 402, 290.5],
  },
  {
    nom: "Papaloapan",
    fila: [
      930, 0, 487.5, 547.5, 252, 259, 514, 612, 620.3, 490.4, 371.4, 517.31,
      604.69, 545.63,
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [
      1215.5, 1181.8, 2614, 997.52, 968.99, 942.94, 1154.05, 645, 1236.5,
      1081.3, 1249.73, 1521.67, 1523.44, 1529.14,
    ],
  },
  {
    nom: "Valles Centrales",
    fila: [
      2385.84, 1805, 594.07, 731.85, 730.63, 735.53, 791.1, 690.18, 636.28,
      556.58, 647.07, 536.53, 426.61, 495.79,
    ],
  },
];

// Tabla resumen de producción por región
// Cada objeto representa una región con sus datos agregados:
// - volumen: toneladas producidas
// - superficie: hectáreas sembradas
// - rendimiento: toneladas por hectárea
// - valor: valor total de la producción (en pesos)
// - cantidad: número de municipios o unidades productivas consideradas
const tabla_produccion_producto = [
  {
    region: "Costa",
    volumen: 301009, // Total toneladas producidas en la región Costa
    superficie: 2681, // Total hectáreas sembradas
    rendimiento: 116.01, // Toneladas por hectárea (alta productividad)
    valor: 1813554906, // Valor económico total de la producción
    cantidad: 16, // Número de municipios/productores considerados
  },
  {
    region: "Istmo",
    volumen: 13514,
    superficie: 156,
    rendimiento: 80.7,
    valor: 88310004,
    cantidad: 8,
  },
  {
    region: "Sierra Sur",
    volumen: 1529,
    superficie: 29,
    rendimiento: 52.78,
    valor: 10268470,
    cantidad: 3,
  },
  {
    region: "Sierra de Flores Magón",
    volumen: 1229,
    superficie: 32,
    rendimiento: 38.63,
    valor: 8089762,
    cantidad: 5,
  },
  {
    region: "Papaloapan",
    volumen: 546,
    superficie: 11,
    rendimiento: 44.1,
    valor: 3780264,
    cantidad: 1,
  },
  {
    region: "Valles Centrales",
    volumen: 496,
    superficie: 14,
    rendimiento: 50.9,
    valor: 3823696,
    cantidad: 2,
  },
];

// Datos de producción por grupo indígena
// Primer array: nombres de pueblos indígenas y categoría "No es pueblo indígena"
// Segundo array: volumen producido en toneladas por cada grupo correspondiente
const pub_indigenas_producto = [
  [
    "No es pueblo indigena", // Producción fuera de comunidades indígenas
    "Mixteco",
    "Zapoteco",
    "Chatino",
    "Chontal De Oaxaca",
    "Mazateco",
    "Zoque",
    "Mixe",
    "Cuicateco",
    "Nahua",
  ],
  [
    149463, // Producción toneladas para "No es pueblo indigena"
    124421, // Mixteco
    30756, // Zapoteco
    6426, // Chatino
    3872, // Chontal De Oaxaca
    1011, // Mazateco
    880, // Zoque
    769, // Mixe
    400, // Cuicateco
    325, // Nahua
  ],
];

// Datos de estacionalidad del producto por mes
// Cada número representa una medida relativa o índice de producción o actividad para cada mes del año,
// probablemente de enero (índice 0) a diciembre (índice 11)
const estacionalidad_producto = [
  93, // Enero
  121, // Febrero
  152, // Marzo
  102, // Abril
  140, // Mayo
  102, // Junio
  156, // Julio
  146, // Agosto
  293, // Septiembre (máximo pico)
  152, // Octubre
  167, // Noviembre
  168, // Diciembre
];
