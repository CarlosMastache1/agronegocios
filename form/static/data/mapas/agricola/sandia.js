// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  "Sierra Sur": [
    //5
    {
      id: 20037,
      superficie: 52,
      volumen: 1334,
      nombre: "Mesones Hidalgo",
    },
    {
      id: 20300,
      superficie: 64,
      volumen: 1811,
      nombre: "San Pedro Amuzgos",
    },
    {
      id: 20415,
      superficie: 179,
      volumen: 4747,
      nombre: "Santa María Ipalapa",
    },
    {
      id: 20447,
      superficie: 325,
      volumen: 1102,
      nombre: "Santa María Zacatepec",
    },
    {
      id: 20064,
      superficie: 35,
      volumen: 546,
      nombre: "Nejapa de Madero",
    },
  ],
  Costa: [
    //12
    {
      id: 20285,
      superficie: 30,
      volumen: 838,
      nombre: "San Miguel Tlacamama",
    },
    {
      id: 20345,
      superficie: 26,
      volumen: 780,
      nombre: "San Sebastián Ixcapa",
    },
    {
      id: 20414,
      superficie: 44,
      volumen: 1232,
      nombre: "Santa María Huazolotitlán",
    },
    {
      id: 20467,
      superficie: 34,
      volumen: 1122,
      nombre: "Santiago Jamiltepec",
    },
    {
      id: 20482,
      superficie: 39,
      volumen: 1078,
      nombre: "Santiago Pinotepa Nacional",
    },
    {
      id: 20507,
      superficie: 200,
      volumen: 5400,
      nombre: "Santo Domingo Armenta",
    },
    {
      id: 20319,
      superficie: 21,
      volumen: 475,
      nombre: "San Pedro Mixtepec",
    },
    {
      id: 20334,
      superficie: 46,
      volumen: 1153,
      nombre: "Villa de Tututepec de Melchor Ocampo",
    },
    {
      id: 20401,
      superficie: 44,
      volumen: 1135,
      nombre: "Santa María Colotepec",
    },
    {
      id: 20439,
      superficie: 50,
      volumen: 1419,
      nombre: "Santa María Tonameca",
    },
    {
      id: 20509,
      superficie: 21,
      volumen: 502,
      nombre: "Santo Domingo de Morelos",
    },
    {
      id: 20413,
      superficie: 8,
      volumen: 231,
      nombre: "Santa María Huatulco",
    },
  ],
  Istmo: [
    //9
    {
      id: 20025,
      superficie: 42,
      volumen: 736,
      nombre: "Chahuites",
    },
    {
      id: 20075,
      superficie: 197,
      volumen: 3517,
      nombre: "Reforma de Pineda",
    },
    {
      id: 20143,
      superficie: 87,
      volumen: 1560,
      nombre: "San Francisco Ixhuatán",
    },
    {
      id: 20327,
      superficie: 85,
      volumen: 1481,
      nombre: "San Pedro Tapanatepec",
    },
    {
      id: 20525,
      superficie: 197,
      volumen: 3456,
      nombre: "Santo Domingo Zanatepec",
    },
    {
      id: 20066,
      superficie: 48,
      volumen: 508,
      nombre: "Santiago Niltepec",
    },
    {
      id: 20141,
      superficie: 57,
      volumen: 635,
      nombre: "San Francisco del Mar",
    },
    {
      id: 20124,
      superficie: 8,
      volumen: 111,
      nombre: "San Blas Atempa",
    },
    {
      id: 20557,
      superficie: 8,
      volumen: 105,
      nombre: "Unión Hidalgo",
    },
  ],
  Papaloapan: [
    //4
    {
      id: 20044,
      superficie: 50,
      volumen: 1035,
      nombre: "Loma Bonita",
    },
    {
      id: 20184,
      superficie: 48,
      volumen: 982,
      nombre: "San Juan Bautista Tuxtepec",
    },
    {
      id: 20559,
      superficie: 68,
      volumen: 1421,
      nombre: "San Juan Bautista Valle Nacional",
    },
    {
      id: 20498,
      superficie: 80,
      volumen: 1672,
      nombre: "Santiago Yaveo",
    },
  ],
  "Sierra de Juárez": [
    //1
    {
      id: 20190,
      superficie: 85,
      volumen: 1743,
      nombre: "San Juan Cotzocón",
    },
  ],
  "Valles Centrales": [
    //10
    {
      id: 20007,
      superficie: 2,
      volumen: 47,
      nombre: "Asunción Ocotlán",
    },
    {
      id: 20068,
      superficie: 7,
      volumen: 210,
      nombre: "Ocotlán de Morelos",
    },
    {
      id: 20295,
      superficie: 6,
      volumen: 185,
      nombre: "San Pablo Huixtepec",
    },
    {
      id: 20530,
      superficie: 0.2,
      volumen: 1,
      nombre: "Santo Tomás Jalieza",
    },
    {
      id: 20561,
      superficie: 0.35,
      volumen: 11,
      nombre: "Yaxe",
    },
    {
      id: 20570,
      superficie: 4,
      volumen: 126,
      nombre: "Zimatlán de Álvarez",
    },
    {
      id: 20333,
      superficie: 7,
      volumen: 207,
      nombre: "San Pedro Totolápam",
    },
    {
      id: 20449,
      superficie: 7,
      volumen: 232,
      nombre: "Santa María Zoquitlán",
    },
    {
      id: 20028,
      superficie: 15,
      volumen: 426,
      nombre: "Heroica Ciudad de Ejutla de Crespo",
    },
    {
      id: 20268,
      superficie: 5,
      volumen: 136,
      nombre: "San Miguel Ejutla",
    },
  ],
};

// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    id: "SON",
    entidad: "Sonora",
    volumen: 437673,
    superficie: 8278,
    rendimiento: 46.4,
    valor: 2394631856,
  },
  {
    ranking: 2,
    id: "CHI",
    entidad: "Chihuahua",
    volumen: 161488,
    superficie: 4329,
    rendimiento: 41.39,
    valor: 904434911,
  },
  {
    ranking: 3,
    id: "VER",
    entidad: "Veracruz",
    volumen: 131975,
    superficie: 5986,
    rendimiento: 24.88,
    valor: 549444395,
  },
  {
    ranking: 4,
    id: "JAL",
    entidad: "Jalisco",
    volumen: 119447,
    superficie: 2310,
    rendimiento: 41.04,
    valor: 513245622,
  },
  {
    ranking: 5,
    id: "CAM",
    entidad: "Campeche",
    volumen: 82758,
    superficie: 2481,
    rendimiento: 27.18,
    valor: 299409792,
  },
  {
    ranking: 6,
    id: "GRO",
    entidad: "Guerrero",
    volumen: 76872,
    superficie: 3254,
    rendimiento: 22.73,
    valor: 472619846,
  },
  {
    ranking: 7,
    id: "NAY",
    entidad: "Nayarit",
    volumen: 60642,
    superficie: 2823,
    rendimiento: 18.98,
    valor: 281317007,
  },
  {
    ranking: 8,
    id: "OAX",
    entidad: "Oaxaca",
    volumen: 53924,
    superficie: 2327,
    rendimiento: 23.48,
    valor: 254980035,
  },
  {
    ranking: 9,
    id: "SIN",
    entidad: "Sinaloa",
    volumen: 41843,
    superficie: 1760,
    rendimiento: 26.72,
    valor: 229514112,
  },
  {
    ranking: 10,
    id: "CHS",
    entidad: "Chiapas",
    volumen: 40118,
    superficie: 1965,
    rendimiento: 21.23,
    valor: 151480256,
  },
  {
    ranking: 11,
    id: "TAMP",
    entidad: "Tamaulipas",
    volumen: 33103,
    superficie: 1176,
    rendimiento: 24.53,
    valor: 234596475,
  },
  {
    ranking: 12,
    id: "COA",
    entidad: "Coahuila",
    volumen: 29584,
    superficie: 828,
    rendimiento: 28.57,
    valor: 150585707,
  },
  {
    ranking: 13,
    id: "MICH",
    entidad: "Michoacán",
    volumen: 27463,
    superficie: 837,
    rendimiento: 32.04,
    valor: 187906218,
  },
  {
    ranking: 14,
    id: "COL",
    entidad: "Colima",
    volumen: 25800,
    superficie: 499,
    rendimiento: 51.99,
    valor: 140299418,
  },
  {
    ranking: 15,
    id: "TAB",
    entidad: "Tabasco",
    volumen: 25410,
    superficie: 1608,
    rendimiento: 12.94,
    valor: 99257349,
  },
  {
    ranking: 16,
    id: "DGO",
    entidad: "Durango",
    volumen: 20471,
    superficie: 509,
    rendimiento: 38.42,
    valor: 114023561,
  },
  {
    ranking: 17,
    id: "SLP",
    entidad: "San Luis Potosí",
    volumen: 14280,
    superficie: 421,
    rendimiento: 34.58,
    valor: 79693726,
  },
  {
    ranking: 18,
    id: "QR",
    entidad: "Quintana Roo",
    volumen: 13989,
    superficie: 714,
    rendimiento: 19.44,
    valor: 82352968,
  },
  {
    ranking: 19,
    id: "YUC",
    entidad: "Yucatán",
    volumen: 9892,
    superficie: 580,
    rendimiento: 16.7,
    valor: 52504195,
  },
  {
    ranking: 20,
    id: "GTO",
    entidad: "Guanajuato",
    volumen: 6778,
    superficie: 216,
    rendimiento: 28.73,
    valor: 33238371,
  },
  {
    ranking: 21,
    id: "BCN",
    entidad: "Baja California",
    volumen: 6418,
    superficie: 156,
    rendimiento: 37.04,
    valor: 31638918,
  },
  {
    ranking: 22,
    id: "PUE",
    entidad: "Puebla",
    volumen: 2661,
    superficie: 116,
    rendimiento: 23.29,
    valor: 17976615,
  },
  {
    ranking: 23,
    id: "BCS",
    entidad: "Baja California Sur",
    volumen: 2315,
    superficie: 84,
    rendimiento: 31.09,
    valor: 10898634,
  },
  {
    ranking: 24,
    id: "MOR",
    entidad: "Morelos",
    volumen: 1827,
    superficie: 89,
    rendimiento: 20.13,
    valor: 8540019,
  },
  {
    ranking: 25,
    id: "NL",
    entidad: "Nuevo León",
    volumen: 900,
    superficie: 31,
    rendimiento: 36.99,
    valor: 4399233,
  },
  {
    ranking: 26,
    id: "EM",
    entidad: "México",
    volumen: 743,
    superficie: 34,
    rendimiento: 21.62,
    valor: 4915108,
  },
  {
    ranking: 27,
    id: "ZAC",
    entidad: "Zacatecas",
    volumen: 539,
    superficie: 18,
    rendimiento: 31.24,
    valor: 2460106,
  },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { id: "CHN", ranking: 1, pais: "China", superficie: 1391910 },
  { id: "CHN", ranking: 2, pais: "China, Continental", superficie: 1384052 },
  { id: "IND", ranking: 3, pais: "India", superficie: 120000 },
  { id: "RUS", ranking: 4, pais: "Federación de Rusia", superficie: 91042 },
  { id: "SEN", ranking: 5, pais: "Senegal", superficie: 89555 },
  { id: "BRA", ranking: 6, pais: "Brasil", superficie: 85729 },
  { id: "TUR", ranking: 7, pais: "Turquía", superficie: 69021 },
  { id: "AFG", ranking: 8, pais: "Afganistán", superficie: 61939 },
  { id: "DZA", ranking: 9, pais: "Argelia", superficie: 54440 },
  { id: "KAZ", ranking: 10, pais: "Kazajstán", superficie: 50769 },
  { id: "IRN", ranking: 11, pais: "Irán", superficie: 50000 },
  { id: "PAK", ranking: 12, pais: "Pakistán", superficie: 49967 },
  { id: "VNM", ranking: 13, pais: "Viet Nam", superficie: 47888 },
  { id: "UZB", ranking: 14, pais: "Uzbekistán", superficie: 41922 },
  {
    id: "USA",
    ranking: 15,
    pais: "Estados Unidos de América",
    superficie: 37717,
  },
  { id: "SDN", ranking: 16, pais: "Sudán", superficie: 37384 },
  { id: "MEX", ranking: 17, pais: "México", superficie: 36795 },
  { ranking: "", pais: "Otros", superficie: 608231 },
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
  1435, 961, 462, 631, 948, 364, 649, 1213, 1585, 1578, 4465, 10351, 2523,
];

// Valores anuales de exportación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las exportaciones del producto
const exportacion_balanza = [
  509265, 541885, 563091, 632746, 662537, 710870, 768161, 669543, 676704,
  767778, 723610, 782683, 696598,
];

// Tabla de los principales destinos de exportación
// Cada objeto representa un país y el valor (en USD) de exportaciones realizadas hacia ese país
const tab_destino_exportacion = [
  { num: 1, pais: "Estados Unidos", valor: 330318615 },
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
      4087.5, 4368, 4597.5, 5424.29, 9078.69, 9624.7, 10711.1, 12214.74,
      12807.16, 13766.1, 13951.38, 15060.26, 15127.95, 15364.68,
    ],
  },
  {
    nom: "Istmo",
    fila: [
      9699, 17054.7, 13952.1, 11091.36, 11194.85, 9587.15, 11134.73, 10765.7,
      11882.55, 12069.03, 12375.86, 12510.78, 12411.52, 12109.22,
    ],
  },
  {
    nom: "Mixteca",
    fila: [
      212.62, 210.51, 211.96, 125.3, 86.65, 45.1, 14.3, 0, 0, 0, 0, 0, 0, 0,
    ],
  },
  {
    nom: "Papaloapan",
    fila: [
      2974, 2654, 1119.45, 2373.45, 2532.5, 1980.9, 1735.6, 1683.5, 1714.5,
      2783.7, 2725.9, 2774.45, 4801.63, 5109.8,
    ],
  },
  {
    nom: "Sierra de Juárez",
    fila: [
      810, 1125, 385, 577.5, 783, 803.7, 915.2, 1055.6, 1116, 1216, 1246.75,
      1180.35, 1698.9, 1742.5,
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [
      12656.5, 12855.3, 12879.7, 12875, 12323.54, 13199.69, 12812, 15404.4,
      16834.9, 17593.25, 18221.6, 18408.54, 17643.16, 18017.81,
    ],
  },
  {
    nom: "Valles Centrales",
    fila: [
      1903, 2078.08, 1447.62, 1356.22, 1375.6, 1291.29, 1345.76, 1237.31,
      1366.62, 1451.08, 1521.73, 1441.48, 1575.15, 1580.07,
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
    region: "Sierra Sur",
    volumen: 18018,
    superficie: 655,
    rendimiento: 26.01,
    valor: 76938782,
    cantidad: 5,
  },
  {
    region: "Costa",
    volumen: 15365,
    superficie: 561,
    rendimiento: 27.53,
    valor: 74345535,
    cantidad: 13,
  },
  {
    region: "Istmo",
    volumen: 12109,
    superficie: 728,
    rendimiento: 14.17,
    valor: 62540816,
    cantidad: 9,
  },
  {
    region: "Papaloapan",
    volumen: 5110,
    superficie: 246,
    rendimiento: 20.74,
    valor: 23955034,
    cantidad: 4,
  },
  {
    region: "Sierra de Juárez",
    volumen: 1743,
    superficie: 85,
    rendimiento: 20.5,
    valor: 8202645,
    cantidad: 1,
  },
  {
    region: "Valles Centrales",
    volumen: 1580,
    superficie: 52,
    rendimiento: 27.85,
    valor: 8997224,
    cantidad: 10,
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
    "Amuzgo",
    "Chinanteco",
    "Zoque",
    "Mixe",
    "Huave",
    "Chatino",
  ],
  [11188, 15963, 8797, 6558, 5110, 3456, 1743, 635, 475],
];

// Datos de estacionalidad del producto por mes
// Cada número representa una medida relativa o índice de producción o actividad para cada mes del año,
// probablemente de enero (índice 0) a diciembre (índice 11)
const estacionalidad_producto = [
  43, 660, 530, 375, 14, 0, 0, 0, 0, 0, 299, 274,
];
