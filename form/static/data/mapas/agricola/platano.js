// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  Papaloapan: [
    //7
    {
      id: 20184,
      territorio: "1,770",
      toneladas: "42,777",
    }, //San Juan Bautista Tuxtepec
    {
      id: 20559,
      territorio: "162",
      toneladas: "2,757",
    }, //San Juan Bautista Valle Nacional
    {
      id: 20166,
      territorio: "105",
      toneladas: "1,796",
    }, //San José Chiltepec
    {
      id: 20417,
      territorio: "80",
      toneladas: "1,403",
    }, //Santa María Jacatepec
    {
      id: 20468,
      territorio: "52",
      toneladas: "785",
    }, //Santiago Jocotepec
    {
      id: 20498,
      territorio: "30",
      toneladas: "541",
    }, //Santiago Yaveo
    {
      id: 20009,
      territorio: "12",
      toneladas: "186",
    }, //Ayotzintepec
  ],
  Costa: [
    //10
    {
      id: 20334,
      territorio: "209",
      toneladas: "6,527",
    }, //Villa de Tututepec de Melchor Ocampo
    {
      id: 20413,
      territorio: "121",
      toneladas: "4,075",
    }, //Santa María Huatulco
    {
      id: 20467,
      territorio: "263",
      toneladas: "7,151",
    }, //Santiago Jamiltepec
    {
      id: 20439,
      territorio: "104",
      toneladas: "3,754",
    }, //Santa María Tonameca
    {
      id: 20324,
      territorio: "55",
      toneladas: "1,619",
    }, //San Pedro Pochutla
    {
      id: 20012,
      territorio: "57",
      toneladas: "1,571",
    }, //Candelaria Loxicha
    {
      id: 20414,
      territorio: "94",
      toneladas: "2,455",
    }, //Santa María Huazolotitlán
    {
      id: 20071,
      territorio: "39",
      toneladas: "1,062",
    }, //Pluma Hidalgo
    {
      id: 20319,
      territorio: "26",
      toneladas: "801",
    }, //San Pedro Mixtepec
    {
      id: 20401,
      territorio: "23",
      toneladas: "637",
    }, //Santa María Colotepec
  ],
  "Sierra Sur": [
    //12
    {
      id: 20073,
      territorio: "62",
      toneladas: "371",
    }, //Putla Villa de Guerrero
    {
      id: 20392,
      territorio: "54",
      toneladas: "309",
    }, //Santa Lucía Monteverde
    {
      id: 20447,
      territorio: "47",
      toneladas: "291",
    }, //Santa María Zacatepec
    {
      id: 20020,
      territorio: "32",
      toneladas: "201",
    }, //Constancia del Rosario
    {
      id: 20229,
      territorio: "18",
      toneladas: "165",
    }, //San Lorenzo Texmelúcan
    {
      id: 20516,
      territorio: "16",
      toneladas: "149",
    }, //Santo Domingo Teojomulco
    {
      id: 20300,
      territorio: "18",
      toneladas: "106",
    }, //San Pedro Amuzgos
    {
      id: 20088,
      territorio: "15",
      toneladas: "98",
    }, //San Andrés Cabecera Nueva
    {
      id: 20448,
      territorio: "8",
      toneladas: "64",
    }, //Santa María Zaniza
    {
      id: 20415,
      territorio: "7",
      toneladas: "41",
    }, //Santa María Ipalapa
    {
      id: 20037,
      territorio: "6",
      toneladas: "40",
    }, //Mesones Hidalgo
    {
      id: 20377,
      territorio: "5",
      toneladas: "34",
    }, //Santa Cruz Itundujia
  ],
  Mixteca: [
    //2
    {
      id: 20469,
      territorio: "148",
      toneladas: "710",
    }, //Santiago Juxtlahuaca
    {
      id: 20016,
      territorio: "11",
      toneladas: "46",
    }, //Coicoyán de Las Flores
  ],
  "Sierra de Juárez": [
    //1
    {
      id: 20190,
      territorio: "28",
      toneladas: "475",
    }, //San Juan Cotzocón
  ],
};

// Datos agregados por entidad federativa (estado) a nivel nacional
const estados_datos_pro = [
  { id: "CHS", territorio: "23,496", toneladas: "672,021" },
  { id: "TAB", territorio: "11,708", toneladas: "621,552" },
  { id: "COL", territorio: "11,480", toneladas: "359,202" },
  { id: "VER", territorio: "16,469", toneladas: "336,984" },
  { id: "JAL", territorio: "4,084", toneladas: "203,087" },
  { id: "MICH", territorio: "5,837", toneladas: "178,492" },
  { id: "GRO", territorio: "3,981", toneladas: "93,122" },
  { id: "OAX", territorio: "3,672", toneladas: "82,995" },
  { id: "PUE", territorio: "2,591", toneladas: "41,337" },
  { id: "NAY", territorio: "2,526", toneladas: "37,879" },
  { id: "QR", territorio: "753", toneladas: "11,429" },
  { id: "YUC", territorio: "351", toneladas: "2,398" },
  { id: "CAM", territorio: "110", toneladas: "1,298" },
  { id: "MOR", territorio: "9", toneladas: "280" },
  { id: "EM", territorio: "18", toneladas: "226" },
  { id: "HGO", territorio: "7", toneladas: "36" },
];

//Datos por país: superficie cosechada
const paises_datos_pro = [
  //24
  { id: "UGA", territorio: "2,351,010" },
  { id: "COD", territorio: "1,086,253" },
  { id: "CIV", territorio: "549,434" },
  { id: "CMR", territorio: "503,290" },
  { id: "GHA", territorio: "421,423" },
  { id: "TZA", territorio: "314,211" },
  { id: "COL", territorio: "274,731" },
  { id: "PHL", territorio: "258,035" },
  { id: "ECU", territorio: "114,526" },
  { id: "GIN", territorio: "92,082" },
  { id: "MMR", territorio: "90,204" },
  { id: "RWA", territorio: "89,777" },
  { id: "CUB", territorio: "64,833" },
  { id: "VEN", territorio: "57,918" },
  { id: "GAB", territorio: "50,527" },
  { id: "DOM", territorio: "49,086" },
  { id: "LKA", territorio: "47,912" },
  { id: "BOL", territorio: "41,016" },
  { id: "HTI", territorio: "37,871" },
  { id: "MWI", territorio: "36,295" },
  { id: "CAF", territorio: "30,984" },
  { id: "LBR", territorio: "23,165" },
  { id: "PAN", territorio: "21,944" },
  { id: "MEX", territorio: "18,115" },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { ranking: 1, pais: "Uganda", superficie: 2351010 },
  { ranking: 2, pais: "República Democrática del Congo", superficie: 1086253 },
  { ranking: 3, pais: "Côte d'Ivoire", superficie: 549434 },
  { ranking: 4, pais: "Camerún", superficie: 503290 },
  { ranking: 5, pais: "Ghana", superficie: 421423 },
  { ranking: 6, pais: "República Unida de Tanzanía", superficie: 314211 },
  { ranking: 7, pais: "Colombia", superficie: 274731 },
  { ranking: 8, pais: "Filipinas", superficie: 258035 },
  { ranking: 9, pais: "Ecuador", superficie: 114526 },
  { ranking: 10, pais: "Guinea", superficie: 92082 },
  { ranking: 11, pais: "Myanmar", superficie: 90204 },
  { ranking: 12, pais: "Rwanda", superficie: 89777 },
  { ranking: 13, pais: "Cuba", superficie: 64833 },
  { ranking: 14, pais: "Venezuela", superficie: 57918 },
  { ranking: 15, pais: "Gabón", superficie: 50527 },
  { ranking: 16, pais: "República Dominicana", superficie: 49086 },
  { ranking: 17, pais: "Sri Lanka", superficie: 47912 },
  { ranking: 18, pais: "Bolivia", superficie: 41016 },
  { ranking: 19, pais: "Haití", superficie: 37871 },
  { ranking: 20, pais: "Malawi", superficie: 36295 },
  { ranking: 21, pais: "República Centroafricana", superficie: 30984 },
  { ranking: 22, pais: "Liberia", superficie: 23165 },
  { ranking: 23, pais: "Panamá", superficie: 21944 },
  { ranking: 24, pais: "México", superficie: 18115 },
  { ranking: "", pais: "Otros", superficie: 127264 },
];

// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    entidad: "Chiapas",
    volumen: 672021,
    superficie: 23496,
    rendimiento: 19.01,
    valor: 1660642155,
  },
  {
    ranking: 2,
    entidad: "Tabasco",
    volumen: 621552,
    superficie: 11708,
    rendimiento: 42.84,
    valor: 2243949189,
  },
  {
    ranking: 3,
    entidad: "Colima",
    volumen: 359202,
    superficie: 11480,
    rendimiento: 34.91,
    valor: 2135486093,
  },
  {
    ranking: 4,
    entidad: "Veracruz",
    volumen: 336984,
    superficie: 16469,
    rendimiento: 16.98,
    valor: 1349578452,
  },
  {
    ranking: 5,
    entidad: "Jalisco",
    volumen: 203087,
    superficie: 4084,
    rendimiento: 34.59,
    valor: 1161130122,
  },
  {
    ranking: 6,
    entidad: "Michoacán",
    volumen: 178492,
    superficie: 5837,
    rendimiento: 30.09,
    valor: 929036790,
  },
  {
    ranking: 7,
    entidad: "Guerrero",
    volumen: 93122,
    superficie: 3981,
    rendimiento: 19.52,
    valor: 574937876,
  },
  {
    ranking: 8,
    entidad: "Oaxaca",
    volumen: 82995,
    superficie: 3672,
    rendimiento: 18.16,
    valor: 518097491,
  },
  {
    ranking: 9,
    entidad: "Puebla",
    volumen: 41337,
    superficie: 2591,
    rendimiento: 10.75,
    valor: 263399442,
  },
  {
    ranking: 10,
    entidad: "Nayarit",
    volumen: 37879,
    superficie: 2526,
    rendimiento: 13.2,
    valor: 225978190,
  },
  {
    ranking: 11,
    entidad: "Quintana Roo",
    volumen: 11429,
    superficie: 753,
    rendimiento: 13.99,
    valor: 60994940,
  },
  {
    ranking: 12,
    entidad: "Yucatán",
    volumen: 2398,
    superficie: 351,
    rendimiento: 8.55,
    valor: 12780184,
  },
  {
    ranking: 13,
    entidad: "Campeche",
    volumen: 1298,
    superficie: 110,
    rendimiento: 11.03,
    valor: 6223849,
  },
  {
    ranking: 14,
    entidad: "Morelos",
    volumen: 280,
    superficie: 9,
    rendimiento: 31.09,
    valor: 1397030,
  },
  {
    ranking: 15,
    entidad: "México",
    volumen: 226,
    superficie: 18,
    rendimiento: 11.55,
    valor: 1272067,
  },
  {
    ranking: 16,
    entidad: "Hidalgo",
    volumen: 36,
    superficie: 7,
    rendimiento: 5.21,
    valor: 163528,
  },
];

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

// Número de municipios productores por región en Oaxaca
// Cada objeto indica la región y la cantidad de municipios que participan en la producción del producto
const tab_mun_producto_oax = [
  { nom: "Papaloapan", num: 7 },
  { nom: "Costa", num: 10 },
  { nom: "Sierra Sur", num: 12 },
  { nom: "Mixteca", num: 2 },
  { nom: "Sierra de Juárez", num: 1 },
];
