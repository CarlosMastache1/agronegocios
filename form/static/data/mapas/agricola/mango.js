// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  //60
  "Sierra de Flores Magón": [
    //6
    {
      id: 20206,
      superficie: 23,
      volumen: 103,
      nombre: "San Juan de Los Cués",
    },
    {
      id: 20244,
      superficie: 36,
      volumen: 159,
      nombre: "San Martín Toxpalan",
    },
    {
      id: 20431,
      superficie: 4,
      volumen: 18,
      nombre: "Santa María Tecomavaca",
    },
    {
      id: 20545,
      superficie: 61,
      volumen: 291,
      nombre: "Teotitlán de Flores Magón",
    },
    {
      id: 20177,
      superficie: 519,
      volumen: 2554,
      nombre: "San Juan Bautista Cuicatlán",
    },
    {
      id: 20558,
      superficie: 42,
      volumen: 183,
      nombre: "Valerio Trujano",
    },
  ],
  Costa: [
    //21
    {
      id: 20070,
      superficie: 7,
      volumen: 50,
      nombre: "Pinotepa de Don Luis",
    },
    {
      id: 20090,
      superficie: 16,
      volumen: 124,
      nombre: "San Andrés Huaxpaltepec",
    },
    {
      id: 20180,
      superficie: 21,
      volumen: 170,
      nombre: "San Juan Bautista Lo de Soto",
    },
    {
      id: 20185,
      superficie: 16,
      volumen: 142,
      nombre: "San Juan Cacahuatepec",
    },
    {
      id: 20188,
      superficie: 9,
      volumen: 72,
      nombre: "San Juan Colorado",
    },
    {
      id: 20226,
      superficie: 8,
      volumen: 70,
      nombre: "San Lorenzo",
    },
    {
      id: 20285,
      superficie: 8,
      volumen: 52,
      nombre: "San Miguel Tlacamama",
    },
    {
      id: 20302,
      superficie: 4,
      volumen: 15,
      nombre: "San Pedro Atoyac",
    },
    {
      id: 20312,
      superficie: 6,
      volumen: 40,
      nombre: "San Pedro Jicayán",
    },
    {
      id: 20345,
      superficie: 18,
      volumen: 203,
      nombre: "San Sebastián Ixcapa",
    },
    {
      id: 20367,
      superficie: 7,
      volumen: 36,
      nombre: "Santa Catarina Mechoacán",
    },
    {
      id: 20402,
      superficie: 10,
      volumen: 71,
      nombre: "Santa María Cortijo",
    },
    {
      id: 20414,
      superficie: 123,
      volumen: 1438,
      nombre: "Santa María Huazolotitlán",
    },
    {
      id: 20466,
      superficie: 5,
      volumen: 31,
      nombre: "Santiago Ixtayutla",
    },
    {
      id: 20467,
      superficie: 438,
      volumen: 5406,
      nombre: "Santiago Jamiltepec",
    },
    {
      id: 20482,
      superficie: 47,
      volumen: 440,
      nombre: "Santiago Pinotepa Nacional",
    },
    {
      id: 20489,
      superficie: 8,
      volumen: 56,
      nombre: "Santiago Tetepec",
    },
    {
      id: 20319,
      superficie: 28,
      volumen: 289,
      nombre: "San Pedro Mixtepec",
    },
    {
      id: 20334,
      superficie: 536,
      volumen: 6330,
      nombre: "Villa de Tututepec de Melchor Ocampo",
    },
    {
      id: 20401,
      superficie: 375,
      volumen: 4151,
      nombre: "Santa María Colotepec",
    },
    {
      id: 20439,
      superficie: 70,
      volumen: 788,
      nombre: "Santa María Tonameca",
    },
  ],
  Istmo: [
    //18
    {
      id: 20025,
      superficie: 1122,
      volumen: 13210,
      nombre: "Chahuites",
    },
    {
      id: 20075,
      superficie: 533,
      volumen: 6077,
      nombre: "Reforma de Pineda",
    },
    {
      id: 20143,
      superficie: 875,
      volumen: 9897,
      nombre: "San Francisco Ixhuatán",
    },
    {
      id: 20327,
      superficie: 10596,
      volumen: 123362,
      nombre: "San Pedro Tapanatepec",
    },
    {
      id: 20525,
      superficie: 2662,
      volumen: 30943,
      nombre: "Santo Domingo Zanatepec",
    },
    {
      id: 20066,
      superficie: 33,
      volumen: 275,
      nombre: "Santiago Niltepec",
    },
    {
      id: 20141,
      superficie: 170,
      volumen: 1801,
      nombre: "San Francisco del Mar",
    },
    {
      id: 20014,
      superficie: 8,
      volumen: 61,
      nombre: "Ciudad Ixtepec",
    },
    {
      id: 20030,
      superficie: 3,
      volumen: 25,
      nombre: "El Espinal",
    },
    {
      id: 20053,
      superficie: 8,
      volumen: 56,
      nombre: "Magdalena Tlacotepec",
    },
    {
      id: 20124,
      superficie: 20,
      volumen: 162,
      nombre: "San Blas Atempa",
    },
    {
      id: 20307,
      superficie: 25,
      volumen: 165,
      nombre: "San Pedro Huamelula",
    },
    {
      id: 20308,
      superficie: 5,
      volumen: 42,
      nombre: "San Pedro Huilotepec",
    },
    {
      id: 20421,
      superficie: 10,
      volumen: 66,
      nombre: "Santa María Mixtequilla",
    },
    {
      id: 20472,
      superficie: 165,
      volumen: 1312,
      nombre: "Santiago Laollaga",
    },
    {
      id: 20508,
      superficie: 31,
      volumen: 258,
      nombre: "Santo Domingo Chihuitán",
    },
    {
      id: 20515,
      superficie: 27,
      volumen: 221,
      nombre: "Santo Domingo Tehuantepec",
    },
    {
      id: 20052,
      superficie: 139,
      volumen: 1457,
      nombre: "Magdalena Tequisistlán",
    },
  ],
  Mixteca: [
    //1
    {
      id: 20245,
      superficie: 14,
      volumen: 74,
      nombre: "San Martín Zacatepec",
    },
  ],
  Papaloapan: [
    //4
    {
      id: 20044,
      superficie: 48,
      volumen: 120,
      nombre: "Loma Bonita",
    },
    {
      id: 20184,
      superficie: 117,
      volumen: 268,
      nombre: "San Juan Bautista Tuxtepec",
    },
    {
      id: 20002,
      superficie: 90,
      volumen: 252,
      nombre: "Acatlán de Pérez Figueroa",
    },
    {
      id: 20278,
      superficie: 74,
      volumen: 222,
      nombre: "San Miguel Soyaltepec",
    },
  ],
  "Sierra Sur": [
    //10
    {
      id: 20020,
      superficie: 2,
      volumen: 12,
      nombre: "Constancia del Rosario",
    },
    {
      id: 20037,
      superficie: 8,
      volumen: 41,
      nombre: "Mesones Hidalgo",
    },
    {
      id: 20073,
      superficie: 93,
      volumen: 521,
      nombre: "Putla Villa de Guerrero",
    },
    {
      id: 20076,
      superficie: 2,
      volumen: 12,
      nombre: "La Reforma",
    },
    {
      id: 20300,
      superficie: 20,
      volumen: 100,
      nombre: "San Pedro Amuzgos",
    },
    {
      id: 20377,
      superficie: 1,
      volumen: 6,
      nombre: "Santa Cruz Itundujia",
    },
    {
      id: 20415,
      superficie: 8,
      volumen: 47,
      nombre: "Santa María Ipalapa",
    },
    {
      id: 20447,
      superficie: 28,
      volumen: 169,
      nombre: "Santa María Zacatepec",
    },
    {
      id: 20064,
      superficie: 6,
      volumen: 66,
      nombre: "Nejapa de Madero",
    },
    {
      id: 20357,
      superficie: 12,
      volumen: 110,
      nombre: "Santa Ana Tavela",
    },
  ],
};

// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    id: "SIN",
    entidad: "Sinaloa",
    volumen: 517119,
    superficie: 49133,
    rendimiento: 12.35,
    valor: 2177610251,
  },
  {
    ranking: 2,
    id: "GRO",
    entidad: "Guerrero",
    volumen: 415689,
    superficie: 27491,
    rendimiento: 12.12,
    valor: 3456131419,
  },
  {
    ranking: 3,
    id: "NAY",
    entidad: "Nayarit",
    volumen: 329624,
    superficie: 29442,
    rendimiento: 10.83,
    valor: 1577930147,
  },
  {
    ranking: 4,
    id: "CHS",
    entidad: "Chiapas",
    volumen: 272174,
    superficie: 38782,
    rendimiento: 8.78,
    valor: 1444154658,
  },
  {
    ranking: 5,
    id: "OAX",
    entidad: "Oaxaca",
    volumen: 214915,
    superficie: 19392,
    rendimiento: 8.96,
    valor: 1070664171,
  },
  {
    ranking: 6,
    id: "MICH",
    entidad: "Michoacán",
    volumen: 200119,
    superficie: 26111,
    rendimiento: 9.64,
    valor: 1583899587,
  },
  {
    ranking: 7,
    id: "JAL",
    entidad: "Jalisco",
    volumen: 129992,
    superficie: 8663,
    rendimiento: 12.9,
    valor: 673123078,
  },
  {
    ranking: 8,
    id: "VER",
    entidad: "Veracruz",
    volumen: 104888,
    superficie: 15018,
    rendimiento: 7.48,
    valor: 644641898,
  },
  {
    ranking: 9,
    id: "COL",
    entidad: "Colima",
    volumen: 62705,
    superficie: 4586,
    rendimiento: 12.33,
    valor: 348942246,
  },
  {
    ranking: 10,
    id: "TAMP",
    entidad: "Tamaulipas",
    volumen: 13184,
    superficie: 922,
    rendimiento: 14.34,
    valor: 102068686,
  },
  {
    ranking: 11,
    id: "CAM",
    entidad: "Campeche",
    volumen: 12607,
    superficie: 1136,
    rendimiento: 7.79,
    valor: 87458126,
  },
  {
    ranking: 12,
    id: "BCS",
    entidad: "Baja California Sur",
    volumen: 10389,
    superficie: 1835,
    rendimiento: 6.11,
    valor: 75534923,
  },
  {
    ranking: 13,
    id: "MOR",
    entidad: "Morelos",
    volumen: 5155,
    superficie: 345,
    rendimiento: 14.77,
    valor: 18300420,
  },
  {
    ranking: 14,
    id: "EM",
    entidad: "México",
    volumen: 2970,
    superficie: 370,
    rendimiento: 7.52,
    valor: 20078237,
  },
  {
    ranking: 15,
    id: "YUC",
    entidad: "Yucatán",
    volumen: 2399,
    superficie: 213,
    rendimiento: 14.09,
    valor: 14627794,
  },
  {
    ranking: 16,
    id: "DGO",
    entidad: "Durango",
    volumen: 1973,
    superficie: 529,
    rendimiento: 4.17,
    valor: 8988697,
  },
  {
    ranking: 17,
    id: "SON",
    entidad: "Sonora",
    volumen: 1164,
    superficie: 201,
    rendimiento: 12.28,
    valor: 6295260,
  },
  {
    ranking: 18,
    id: "TAB",
    entidad: "Tabasco",
    volumen: 1113,
    superficie: 194,
    rendimiento: 5.25,
    valor: 3427797,
  },
  {
    ranking: 19,
    id: "PUE",
    entidad: "Puebla",
    volumen: 518,
    superficie: 55,
    rendimiento: 9.36,
    valor: 2456040,
  },
  {
    ranking: 20,
    id: "HGO",
    entidad: "Hidalgo",
    volumen: 440,
    superficie: 70,
    rendimiento: 6.85,
    valor: 2135997,
  },
  {
    ranking: 21,
    id: "QRO",
    entidad: "Querétaro",
    volumen: 384,
    superficie: 77,
    rendimiento: 6.17,
    valor: 2029100,
  },
  {
    ranking: 22,
    id: "SLP",
    entidad: "San Luis Potosí",
    volumen: 239,
    superficie: 55,
    rendimiento: 4.35,
    valor: 892381,
  },
  {
    ranking: 23,
    id: "ZAC",
    entidad: "Zacatecas",
    volumen: 221,
    superficie: 26,
    rendimiento: 8.76,
    valor: 1169849,
  },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { id: "IND", ranking: 1, pais: "India", superficie: 2704000 },
  { id: "CHN", ranking: 2, pais: "China", superficie: 397355 },
  { id: "CHN", ranking: 3, pais: "China, Continental", superficie: 381000 },
  { id: "IDN", ranking: 4, pais: "Indonesia", superficie: 303413 },
  { id: "CIV", ranking: 5, pais: "Côte d'Ivoire", superficie: 283232 },
  { id: "MEX", ranking: 6, pais: "México", superficie: 221858 },
  { id: "PAK", ranking: 7, pais: "Pakistán", superficie: 213639 },
  { id: "PHL", ranking: 8, pais: "Filipinas", superficie: 192503 },
  { id: "THA", ranking: 9, pais: "Tailandia", superficie: 144776 },
  { id: "BGD", ranking: 10, pais: "Bangladesh", superficie: 139132 },
  { id: "NGA", ranking: 11, pais: "Nigeria", superficie: 131204 },
  { id: "VNM", ranking: 12, pais: "Viet Nam", superficie: 118943 },
  { id: "EGY", ranking: 13, pais: "Egipto", superficie: 110337 },
  { id: "GIN", ranking: 14, pais: "Guinea", superficie: 101385 },
  { id: "BRA", ranking: 15, pais: "Brasil", superficie: 100663 },
  { ranking: "", pais: "Otros", superficie: 863640 },
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
const importacion_balanza = [
  2300, 1976, 2921, 3307, 2041, 1588, 1768, 1909, 2347, 1942, 1403, 1087, 2558,
];

// Valores anuales de exportación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las exportaciones del producto
const exportacion_balanza = [
  275366, 287771, 297295, 338169, 289647, 331148, 369314, 435815, 395539,
  412600, 421636, 429391, 447503,
];

// Tabla de los principales destinos de exportación
// Cada objeto representa un país y el valor (en USD) de exportaciones realizadas hacia ese país
const tab_destino_exportacion = [
  { num: 1, pais: "Estados Unidos", valor: 69219092 },
  { num: 2, pais: "Canadá", valor: 7404412 },
  { num: 3, pais: "Japón", valor: 2314327 },
  { num: 4, pais: "Francia", valor: 1044939 },
  { num: 5, pais: "Países Bajos", valor: 635316 },
  { num: 6, pais: "Alemania", valor: 348028 },
  { num: 7, pais: "Bélgica", valor: 224135 },
  { num: 8, pais: "Italia", valor: 180344 },
  { num: 9, pais: "España", valor: 157420 },
  { num: 10, pais: "Reino Unido", valor: 151412 },
  { num: 11, pais: "Guatemala", valor: 45599 },
  { num: 12, pais: "Emiratos Árabes Unidos", valor: 18967 },
  { num: 13, pais: "Belice", valor: 11315 },
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
      11550.77, 10153.58, 3719.13, 4035.4, 3715.03, 3706.22, 3730.8, 4022.03,
      4418.51, 4263.87, 4427.55, 4494.4, 4339.03, 3306.73,
    ],
  },
  {
    nom: "Costa",
    fila: [
      13683.1, 9040.01, 10176.81, 14693.82, 16230.38, 16592.9, 17437.68,
      17883.9, 17877.73, 18286.53, 17696.6, 18356.64, 19549.95, 20198.6,
    ],
  },
  {
    nom: "Istmo",
    fila: [
      129115.48, 157681.5, 119529.42, 139216.15, 132107.61, 120859.05,
      113592.69, 123198.61, 160411.03, 179877.57, 182919.89, 187608.91,
      188623.57, 189388.19,
    ],
  },
  {
    nom: "Mixteca",
    fila: [
      822.75, 825.49, 847.65, 123.8, 41.5, 36.2, 41, 54.8, 68.25, 68.35, 74.34,
      75.06, 77, 73.97,
    ],
  },
  {
    nom: "Papaloapan",
    fila: [
      10351.56, 12518, 2895.1, 6030, 7571, 3853.3, 5321.3, 2258, 4886.1,
      5240.77, 1561.3, 1991.48, 2273.6, 862.35,
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [
      916.04, 952.03, 915.55, 954.1, 1039.1, 981.4, 959.5, 983.3, 1012.95,
      1061.18, 1030.04, 1026, 1071.1, 1084.78,
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
    region: "Istmo",
    volumen: 189388,
    superficie: 16429,
    rendimiento: 10.01,
    valor: 959021903.16,
    cantidad: 18,
  },
  {
    region: "Costa",
    volumen: 20199,
    superficie: 1756,
    rendimiento: 11.38,
    valor: 83563366.32,
    cantidad: 21,
  },
  {
    region: "Sierra de Flores Magón",
    volumen: 3307,
    superficie: 684,
    rendimiento: 4.73,
    valor: 18641343.39,
    cantidad: 6,
  },
  {
    region: "Sierra Sur",
    volumen: 1085,
    superficie: 181,
    rendimiento: 6.26,
    valor: 6300812.11,
    cantidad: 10,
  },
  {
    region: "Papaloapan",
    volumen: 862,
    superficie: 329,
    rendimiento: 2.65,
    valor: 2772044.01,
    cantidad: 4,
  },
  {
    region: "Mixteca",
    volumen: 74,
    superficie: 14,
    rendimiento: 5.36,
    valor: 364702.43,
    cantidad: 1,
  },
];

// Datos de producción por grupo indígena
// Primer array: nombres de pueblos indígenas y categoría "No es pueblo indígena"
// Segundo array: volumen producido en toneladas por cada grupo correspondiente
const pub_indigenas_producto = [
  [
    "NO PUEBLO INDIGENA",
    "Zapoteco",
    "Zoque",
    "Mixteco",
    "Cuicateco",
    "Huave",
    "Mixe",
    "Chinanteco",
    "Mazateco",
    "Chatino",
    "Nahua",
    "Chontal De Oaxaca",
    "Amuzgo",
    "Triqui",
  ],
  [
    13440, 153578, 30943, 9066, 2554, 1801, 1457, 610, 531, 319, 291, 165, 148,
    12,
  ],
];

// Datos de estacionalidad del producto por mes
// Cada número representa una medida relativa o índice de producción o actividad para cada mes del año,
// probablemente de enero (índice 0) a diciembre (índice 11)
const estacionalidad_producto = [2, 258, 405, 290, 442, 161, 0, 0, 0, 0, 0, 7];
