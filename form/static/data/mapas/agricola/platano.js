// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  Papaloapan: [
    //7
    {
      id: 20184,
      superficie: 1770,
      volumen: 42777,
      nombre: "San Juan Bautista Tuxtepec",
    },
    {
      id: 20559,
      superficie: 162,
      volumen: 2757,
      nombre: "San Juan Bautista Valle Nacional",
    },
    {
      id: 20166,
      superficie: 105,
      volumen: 1796,
      nombre: "San José Chiltepec",
    },
    {
      id: 20417,
      superficie: 80,
      volumen: 1403,
      nombre: "Santa María Jacatepec",
    },
    {
      id: 20468,
      superficie: 52,
      volumen: 785,
      nombre: "Santiago Jocotepec",
    },
    {
      id: 20498,
      superficie: 30,
      volumen: 541,
      nombre: "Santiago Yaveo",
    },
    {
      id: 20009,
      superficie: 12,
      volumen: 186,
      nombre: "Ayotzintepec",
    },
  ],
  Costa: [
    //10
    {
      id: 20334,
      superficie: 209,
      volumen: 6527,
      nombre: "Villa de Tututepec de Melchor Ocampo",
    },
    {
      id: 20413,
      superficie: 121,
      volumen: 4075,
      nombre: "Santa María Huatulco",
    },
    {
      id: 20467,
      superficie: 263,
      volumen: 7151,
      nombre: "Santiago Jamiltepec",
    },
    {
      id: 20439,
      superficie: 104,
      volumen: 3754,
      nombre: "Santa María Tonameca",
    },
    {
      id: 20324,
      superficie: 55,
      volumen: 1619,
      nombre: "San Pedro Pochutla",
    },
    {
      id: 20012,
      superficie: 57,
      volumen: 1571,
      nombre: "Candelaria Loxicha",
    },
    {
      id: 20414,
      superficie: 94,
      volumen: 2455,
      nombre: "Santa María Huazolotitlán",
    },
    {
      id: 20071,
      superficie: 39,
      volumen: 1062,
      nombre: "Pluma Hidalgo",
    },
    {
      id: 20319,
      superficie: 26,
      volumen: 801,
      nombre: "San Pedro Mixtepec",
    },
    {
      id: 20401,
      superficie: 23,
      volumen: 637,
      nombre: "Santa María Colotepec",
    },
  ],
  "Sierra Sur": [
    //12
    {
      id: 20073,
      superficie: 62,
      volumen: 371,
      nombre: "Putla Villa de Guerrero",
    },
    {
      id: 20392,
      superficie: 54,
      volumen: 309,
      nombre: "Santa Lucía Monteverde",
    },
    {
      id: 20447,
      superficie: 47,
      volumen: 291,
      nombre: "Santa María Zacatepec",
    },
    {
      id: 20020,
      superficie: 32,
      volumen: 201,
      nombre: "Constancia del Rosario",
    },
    {
      id: 20229,
      superficie: 18,
      volumen: 165,
      nombre: "San Lorenzo Texmelúcan",
    },
    {
      id: 20516,
      superficie: 16,
      volumen: 149,
      nombre: "Santo Domingo Teojomulco",
    },
    {
      id: 20300,
      superficie: 18,
      volumen: 106,
      nombre: "San Pedro Amuzgos",
    },
    {
      id: 20088,
      superficie: 15,
      volumen: 98,
      nombre: "San Andrés Cabecera Nueva",
    },
    {
      id: 20448,
      superficie: 8,
      volumen: 64,
      nombre: "Santa María Zaniza",
    },
    {
      id: 20415,
      superficie: 7,
      volumen: 41,
      nombre: "Santa María Ipalapa",
    },
    {
      id: 20037,
      superficie: 6,
      volumen: 40,
      nombre: "Mesones Hidalgo",
    },
    {
      id: 20377,
      superficie: 5,
      volumen: 34,
      nombre: "Santa Cruz Itundujia",
    },
  ],
  Mixteca: [
    //2
    {
      id: 20469,
      superficie: 148,
      volumen: 710,
      nombre: "Santiago Juxtlahuaca",
    },
    {
      id: 20016,
      superficie: 11,
      volumen: 46,
      nombre: "Coicoyán de Las Flores",
    },
  ],
  "Sierra de Juárez": [
    //1
    {
      id: 20190,
      superficie: 28,
      volumen: 475,
      nombre: "San Juan Cotzocón",
    },
  ],
};

// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    id: "CHS",
    entidad: "Chiapas",
    volumen: 672021,
    superficie: 23496,
    rendimiento: 19.01,
    valor: 1660642155,
  },
  {
    ranking: 2,
    id: "TAB",
    entidad: "Tabasco",
    volumen: 621552,
    superficie: 11708,
    rendimiento: 42.84,
    valor: 2243949189,
  },
  {
    ranking: 3,
    id: "COL",
    entidad: "Colima",
    volumen: 359202,
    superficie: 11480,
    rendimiento: 34.91,
    valor: 2135486093,
  },
  {
    ranking: 4,
    id: "VER",
    entidad: "Veracruz",
    volumen: 336984,
    superficie: 16469,
    rendimiento: 16.98,
    valor: 1349578452,
  },
  {
    ranking: 5,
    id: "JAL",
    entidad: "Jalisco",
    volumen: 203087,
    superficie: 4084,
    rendimiento: 34.59,
    valor: 1161130122,
  },
  {
    ranking: 6,
    id: "MICH",
    entidad: "Michoacán",
    volumen: 178492,
    superficie: 5837,
    rendimiento: 30.09,
    valor: 929036790,
  },
  {
    ranking: 7,
    id: "GRO",
    entidad: "Guerrero",
    volumen: 93122,
    superficie: 3981,
    rendimiento: 19.52,
    valor: 574937876,
  },
  {
    ranking: 8,
    id: "OAX",
    entidad: "Oaxaca",
    volumen: 82995,
    superficie: 3672,
    rendimiento: 18.16,
    valor: 518097491,
  },
  {
    ranking: 9,
    id: "PUE",
    entidad: "Puebla",
    volumen: 41337,
    superficie: 2591,
    rendimiento: 10.75,
    valor: 263399442,
  },
  {
    ranking: 10,
    id: "NAY",
    entidad: "Nayarit",
    volumen: 37879,
    superficie: 2526,
    rendimiento: 13.2,
    valor: 225978190,
  },
  {
    ranking: 11,
    id: "QR",
    entidad: "Quintana Roo",
    volumen: 11429,
    superficie: 753,
    rendimiento: 13.99,
    valor: 60994940,
  },
  {
    ranking: 12,
    id: "YUC",
    entidad: "Yucatán",
    volumen: 2398,
    superficie: 351,
    rendimiento: 8.55,
    valor: 12780184,
  },
  {
    ranking: 13,
    id: "CAM",
    entidad: "Campeche",
    volumen: 1298,
    superficie: 110,
    rendimiento: 11.03,
    valor: 6223849,
  },
  {
    ranking: 14,
    id: "MOR",
    entidad: "Morelos",
    volumen: 280,
    superficie: 9,
    rendimiento: 31.09,
    valor: 1397030,
  },
  {
    ranking: 15,
    id: "EM",
    entidad: "México",
    volumen: 226,
    superficie: 18,
    rendimiento: 11.55,
    valor: 1272067,
  },
  {
    ranking: 16,
    id: "HGO",
    entidad: "Hidalgo",
    volumen: 36,
    superficie: 7,
    rendimiento: 5.21,
    valor: 163528,
  },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { id: "UGA", ranking: 1, pais: "Uganda", superficie: 2351010 },
  {
    id: "COD",
    ranking: 2,
    pais: "República Democrática del Congo",
    superficie: 1086253,
  },
  { id: "CIV", ranking: 3, pais: "Côte d'Ivoire", superficie: 549434 },
  { id: "CMR", ranking: 4, pais: "Camerún", superficie: 503290 },
  { id: "GHA", ranking: 5, pais: "Ghana", superficie: 421423 },
  {
    id: "TZA",
    ranking: 6,
    pais: "República Unida de Tanzanía",
    superficie: 314211,
  },
  { id: "COL", ranking: 7, pais: "Colombia", superficie: 274731 },
  { id: "PHL", ranking: 8, pais: "Filipinas", superficie: 258035 },
  { id: "ECU", ranking: 9, pais: "Ecuador", superficie: 114526 },
  { id: "GIN", ranking: 10, pais: "Guinea", superficie: 92082 },
  { id: "MMR", ranking: 11, pais: "Myanmar", superficie: 90204 },
  { id: "RWA", ranking: 12, pais: "Rwanda", superficie: 89777 },
  { id: "CUB", ranking: 13, pais: "Cuba", superficie: 64833 },
  { id: "VEN", ranking: 14, pais: "Venezuela", superficie: 57918 },
  { id: "GAB", ranking: 15, pais: "Gabón", superficie: 50527 },
  { id: "DOM", ranking: 16, pais: "República Dominicana", superficie: 49086 },
  { id: "LKA", ranking: 17, pais: "Sri Lanka", superficie: 47912 },
  { id: "BOL", ranking: 18, pais: "Bolivia", superficie: 41016 },
  { id: "HTI", ranking: 19, pais: "Haití", superficie: 37871 },
  { id: "MWI", ranking: 20, pais: "Malawi", superficie: 36295 },
  {
    id: "CAF",
    ranking: 21,
    pais: "República Centroafricana",
    superficie: 30984,
  },
  { id: "LBR", ranking: 22, pais: "Liberia", superficie: 23165 },
  { id: "PAN", ranking: 23, pais: "Panamá", superficie: 21944 },
  { id: "MEX", ranking: 24, pais: "México", superficie: 18115 },
  { ranking: "", pais: "Otros", superficie: 127264 },
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
  2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
];

// Valores anuales de importación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las importaciones del producto
const importacion_balanza = [4181, 0, 17, 2, 0.41, 0.1, , , , , 4201];

// Valores anuales de exportación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las exportaciones del producto
const exportacion_balanza = [
  1805, 21226, 23903, 14056, 15350, 17477, 7820, 11377, 31260, 17872,
];

// Tabla de los principales destinos de exportación
// Cada objeto representa un país y el valor (en USD) de exportaciones realizadas hacia ese país
const tab_destino_exportacion = [
  { num: 1, pais: "Estados Unidos", valor: 116990100 },
  { num: 2, pais: "Japón", valor: 38140683 },
  { num: 3, pais: "Canadá", valor: 377077 },
  { num: 4, pais: "Países Bajos", valor: 299097 },
  { num: 5, pais: "Alemania", valor: 59004 },
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
    nom: "Costa",
    fila: [
      20544.8, 15407.93, 17119.48, 19654.5, 19150.09, 21429.5, 22316.3,
      21037.15, 22794, 28784.56, 24671.17, 24237.47, 28744.95, 29650.08,
    ],
  },
  {
    nom: "Mixteca",
    fila: [
      249.86, 258.61, 253.1, 253, 235.05, 215, 981, 919, 841.5, 757.55, 695.8,
      738.18, 750.2, 755.84,
    ],
  },
  {
    nom: "Papaloapan",
    fila: [
      30002.9, 31419.47, 39893.4, 46803.5, 47245.81, 40610.2, 41865.56,
      42251.19, 36300.32, 46733.54, 49381.55, 52994.3, 50671.25, 49865.09,
    ],
  },
  {
    nom: "Sierra de Juárez",
    fila: [
      0, 312, 292.65, 411, 375, 381, 384, 364, 432, 503.54, 528.5, 512.16,
      497.55, 474.6,
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [
      2821.03, 2692.94, 2352.82, 2018.02, 1793.65, 1754.55, 1699.31, 1805.07,
      1943.31, 2044.97, 1931.99, 1953.84, 1929.6, 1867.75,
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
    region: "Papaloapan",
    volumen: 50247,
    superficie: 2211,
    rendimiento: 19.25,
    valor: 348622093,
    cantidad: 7,
  },
  {
    region: "Costa",
    volumen: 29650,
    superficie: 988,
    rendimiento: 30.32,
    valor: 150316550,
    cantidad: 10,
  },
  {
    region: "Sierra Sur",
    volumen: 1868,
    superficie: 287,
    rendimiento: 7.37,
    valor: 11296044,
    cantidad: 12,
  },
  {
    region: "Mixteca",
    volumen: 756,
    superficie: 159,
    rendimiento: 4.5,
    valor: 4395519,
    cantidad: 2,
  },
  {
    region: "Sierra de Juárez",
    volumen: 475,
    superficie: 28,
    rendimiento: 16.95,
    valor: 3467285,
    cantidad: 1,
  },
];

// Datos de producción por grupo indígena
// Primer array: nombres de pueblos indígenas y categoría "No es pueblo indígena"
// Segundo array: volumen producido en toneladas por cada grupo correspondiente
const pub_indigenas_producto = [
  [
    "No es pueblo indigena", // Producción fuera de comunidades indígenas
    "Chinanteco",
    "Mixteco",
    "Zapoteco",
    "Chatino",
    "Mixe",
    "Triqui",
    "Amuzgo",
  ],
  [11910, 50247, 11406, 7809, 801, 475, 201, 147],
];

// Datos de estacionalidad del producto por mes
// Cada número representa una medida relativa o índice de producción o actividad para cada mes del año,
// probablemente de enero (índice 0) a diciembre (índice 11)
const estacionalidad_producto = [
  107, 114, 90, 118, 105, 96, 200, 106, 147, 108, 110, 121,
];