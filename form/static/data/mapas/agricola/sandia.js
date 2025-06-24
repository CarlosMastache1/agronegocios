// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  "Sierra Sur": [
    //5
    {
      id: 20037,
      territorio: "52",
      toneladas: "1,334",
    }, //Mesones Hidalgo
    {
      id: 20300,
      territorio: "64",
      toneladas: "1,811",
    }, //San Pedro Amuzgos
    {
      id: 20415,
      territorio: "179",
      toneladas: "4,747",
    }, //Santa María Ipalapa
    {
      id: 20447,
      territorio: "325",
      toneladas: "1,102",
    }, //Santa María Zacatepec
    {
      id: 20064,
      territorio: "35",
      toneladas: "546",
    }, //Nejapa de Madero
  ],
  Costa: [
    //12
    {
      id: 20285,
      territorio: "30",
      toneladas: "838",
    }, //San Miguel Tlacamama
    {
      id: 20345,
      territorio: "26",
      toneladas: "780",
    }, //San Sebastián Ixcapa
    {
      id: 20414,
      territorio: "44",
      toneladas: "1,232",
    }, //Santa María Huazolotitlán
    {
      id: 20467,
      territorio: "34",
      toneladas: "1,122",
    }, //Santiago Jamiltepec
    {
      id: 20482,
      territorio: "39",
      toneladas: "1,078",
    }, //Santiago Pinotepa Nacional
    {
      id: 20507,
      territorio: "200",
      toneladas: "5,400",
    }, //Santo Domingo Armenta
    {
      id: 20319,
      territorio: "21",
      toneladas: "475",
    }, //San Pedro Mixtepec
    {
      id: 20334,
      territorio: "46",
      toneladas: "1,153",
    }, //Villa de Tututepec de Melchor Ocampo
    {
      id: 20401,
      territorio: "44",
      toneladas: "1,135",
    }, //Santa María Colotepec
    {
      id: 20439,
      territorio: "50",
      toneladas: "1,419",
    }, //Santa María Tonameca
    {
      id: 20509,
      territorio: "21",
      toneladas: "502",
    }, //Santo Domingo de Morelos
    {
      id: 20413,
      territorio: "8",
      toneladas: "231",
    }, //Santa María Huatulco
  ],
  Istmo: [
    //9
    {
      id: 20025,
      territorio: "42",
      toneladas: "736",
    }, //Chahuites
    {
      id: 20075,
      territorio: "197",
      toneladas: "3,517",
    }, //Reforma de Pineda
    {
      id: 20143,
      territorio: "87",
      toneladas: "1,560",
    }, //San Francisco Ixhuatán
    {
      id: 20327,
      territorio: "85",
      toneladas: "1,481",
    }, //San Pedro Tapanatepec
    {
      id: 20525,
      territorio: "197",
      toneladas: "3,456",
    }, //Santo Domingo Zanatepec
    {
      id: 20066,
      territorio: "48",
      toneladas: "508",
    }, //Santiago Niltepec
    {
      id: 20141,
      territorio: "57",
      toneladas: "635",
    }, //San Francisco del Mar
    {
      id: 20124,
      territorio: "8",
      toneladas: "111",
    }, //San Blas Atempa
    {
      id: 20557,
      territorio: "8",
      toneladas: "105",
    }, //Unión Hidalgo
  ],
  Papaloapan: [
    //4
    {
      id: 20044,
      territorio: "50",
      toneladas: "1,035",
    }, //Loma Bonita
    {
      id: 20184,
      territorio: "48",
      toneladas: "982",
    }, //San Juan Bautista Tuxtepec
    {
      id: 20559,
      territorio: "68",
      toneladas: "1,421",
    }, //San Juan Bautista Valle Nacional
    {
      id: 20498,
      territorio: "80",
      toneladas: "1,672",
    }, //Santiago Yaveo
  ],
  "Sierra de Juárez": [
    //1
    {
      id: 20190,
      territorio: "85",
      toneladas: "1,743",
    }, //San Juan Cotzocón
  ],
  "Valles Centrales": [
    //10
    {
      id: 20007,
      territorio: "2",
      toneladas: "47",
    }, //Asunción Ocotlán
    {
      id: 20068,
      territorio: "7",
      toneladas: "210",
    }, //Ocotlán de Morelos
    {
      id: 20295,
      territorio: "6",
      toneladas: "185",
    }, //San Pablo Huixtepec
    {
      id: 20530,
      territorio: "0.2",
      toneladas: "1",
    }, //Santo Tomás Jalieza
    {
      id: 20561,
      territorio: "0.35",
      toneladas: "11",
    }, //Yaxe
    {
      id: 20570,
      territorio: "4",
      toneladas: "126",
    }, //Zimatlán de Álvarez
    {
      id: 20333,
      territorio: "7",
      toneladas: "207",
    }, //San Pedro Totolápam
    {
      id: 20449,
      territorio: "7",
      toneladas: "232",
    }, //Santa María Zoquitlán
    {
      id: 20028,
      territorio: "15",
      toneladas: "426",
    }, //Heroica Ciudad de Ejutla de Crespo
    {
      id: 20268,
      territorio: "5",
      toneladas: "136",
    }, //San Miguel Ejutla
  ],
};

// Datos agregados por entidad federativa (estado) a nivel nacional
const estados_datos_pro = [
  { id: "SON", territorio: "8,278", toneladas: "437,673" },
  { id: "CHI", territorio: "4,329", toneladas: "161,488" },
  { id: "VER", territorio: "5,986", toneladas: "131,975" },
  { id: "JAL", territorio: "2,310", toneladas: "119,447" },
  { id: "CAM", territorio: "2,481", toneladas: "82,758" },
  { id: "GRO", territorio: "3,254", toneladas: "76,872" },
  { id: "NAY", territorio: "2,823", toneladas: "60,642" },
  { id: "OAX", territorio: "2,327", toneladas: "53,924" },
  { id: "SIN", territorio: "1,760", toneladas: "41,843" },
  { id: "CHS", territorio: "1,965", toneladas: "40,118" },
  { id: "TAMP", territorio: "1,176", toneladas: "33,103" },
  { id: "COA", territorio: "828", toneladas: "29,584" },
  { id: "MICH", territorio: "837", toneladas: "27,463" },
  { id: "COL", territorio: "499", toneladas: "25,800" },
  { id: "TAB", territorio: "1,608", toneladas: "25,410" },
  { id: "DGO", territorio: "509", toneladas: "20,471" },
  { id: "SLP", territorio: "421", toneladas: "14,280" },
  { id: "QR", territorio: "714", toneladas: "13,989" },
  { id: "YUC", territorio: "580", toneladas: "9,892" },
  { id: "GTO", territorio: "216", toneladas: "6,778" },
  { id: "BCN", territorio: "156", toneladas: "6,418" },
  { id: "PUE", territorio: "116", toneladas: "2,661" },
  { id: "BCS", territorio: "84", toneladas: "2,315" },
  { id: "MOR", territorio: "89", toneladas: "1,827" },
  { id: "NL", territorio: "31", toneladas: "900" },
  { id: "EM", territorio: "34", toneladas: "743" },
  { id: "ZAC", territorio: "18", toneladas: "539" },
];

//Datos por país: superficie cosechada
const paises_datos_pro = [
  //16
  { id: "CHN", territorio: "1,391,910" },
  { id: "IND", territorio: "120,000" },
  { id: "RUS", territorio: "91,042" },
  { id: "SEN", territorio: "89,555" },
  { id: "BRA", territorio: "85,729" },
  { id: "TUR", territorio: "69,021" },
  { id: "AFG", territorio: "61,939" },
  { id: "DZA", territorio: "54,440" },
  { id: "KAZ", territorio: "50,769" },
  { id: "IRN", territorio: "50,000" },
  { id: "PAK", territorio: "49,967" },
  { id: "VNM", territorio: "47,888" },
  { id: "UZB", territorio: "41,922" },
  { id: "USA", territorio: "37,717" },
  { id: "SDN", territorio: "37,384" },
  { id: "MEX", territorio: "36,795" },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { ranking: 1, pais: "China", superficie: 1391910 },
  { ranking: 2, pais: "China, Continental", superficie: 1384052 },
  { ranking: 3, pais: "India", superficie: 120000 },
  { ranking: 4, pais: "Federación de Rusia", superficie: 91042 },
  { ranking: 5, pais: "Senegal", superficie: 89555 },
  { ranking: 6, pais: "Brasil", superficie: 85729 },
  { ranking: 7, pais: "Turquía", superficie: 69021 },
  { ranking: 8, pais: "Afganistán", superficie: 61939 },
  { ranking: 9, pais: "Argelia", superficie: 54440 },
  { ranking: 10, pais: "Kazajstán", superficie: 50769 },
  { ranking: 11, pais: "Irán", superficie: 50000 },
  { ranking: 12, pais: "Pakistán", superficie: 49967 },
  { ranking: 13, pais: "Viet Nam", superficie: 47888 },
  { ranking: 14, pais: "Uzbekistán", superficie: 41922 },
  { ranking: 15, pais: "Estados Unidos de América", superficie: 37717 },
  { ranking: 16, pais: "Sudán", superficie: 37384 },
  { ranking: 17, pais: "México", superficie: 36795 },
  { ranking: "", pais: "Otros", superficie: 608231 },
];

// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    entidad: "Sonora",
    volumen: 437673,
    superficie: 8278,
    rendimiento: 46.4,
    valor: 2394631856,
  },
  {
    ranking: 2,
    entidad: "Chihuahua",
    volumen: 161488,
    superficie: 4329,
    rendimiento: 41.39,
    valor: 904434911,
  },
  {
    ranking: 3,
    entidad: "Veracruz",
    volumen: 131975,
    superficie: 5986,
    rendimiento: 24.88,
    valor: 549444395,
  },
  {
    ranking: 4,
    entidad: "Jalisco",
    volumen: 119447,
    superficie: 2310,
    rendimiento: 41.04,
    valor: 513245622,
  },
  {
    ranking: 5,
    entidad: "Campeche",
    volumen: 82758,
    superficie: 2481,
    rendimiento: 27.18,
    valor: 299409792,
  },
  {
    ranking: 6,
    entidad: "Guerrero",
    volumen: 76872,
    superficie: 3254,
    rendimiento: 22.73,
    valor: 472619846,
  },
  {
    ranking: 7,
    entidad: "Nayarit",
    volumen: 60642,
    superficie: 2823,
    rendimiento: 18.98,
    valor: 281317007,
  },
  {
    ranking: 8,
    entidad: "Oaxaca",
    volumen: 53924,
    superficie: 2327,
    rendimiento: 23.48,
    valor: 254980035,
  },
  {
    ranking: 9,
    entidad: "Sinaloa",
    volumen: 41843,
    superficie: 1760,
    rendimiento: 26.72,
    valor: 229514112,
  },
  {
    ranking: 10,
    entidad: "Chiapas",
    volumen: 40118,
    superficie: 1965,
    rendimiento: 21.23,
    valor: 151480256,
  },
  {
    ranking: 11,
    entidad: "Tamaulipas",
    volumen: 33103,
    superficie: 1176,
    rendimiento: 24.53,
    valor: 234596475,
  },
  {
    ranking: 12,
    entidad: "Coahuila",
    volumen: 29584,
    superficie: 828,
    rendimiento: 28.57,
    valor: 150585707,
  },
  {
    ranking: 13,
    entidad: "Michoacán",
    volumen: 27463,
    superficie: 837,
    rendimiento: 32.04,
    valor: 187906218,
  },
  {
    ranking: 14,
    entidad: "Colima",
    volumen: 25800,
    superficie: 499,
    rendimiento: 51.99,
    valor: 140299418,
  },
  {
    ranking: 15,
    entidad: "Tabasco",
    volumen: 25410,
    superficie: 1608,
    rendimiento: 12.94,
    valor: 99257349,
  },
  {
    ranking: 16,
    entidad: "Durango",
    volumen: 20471,
    superficie: 509,
    rendimiento: 38.42,
    valor: 114023561,
  },
  {
    ranking: 17,
    entidad: "San Luis Potosí",
    volumen: 14280,
    superficie: 421,
    rendimiento: 34.58,
    valor: 79693726,
  },
  {
    ranking: 18,
    entidad: "Quintana Roo",
    volumen: 13989,
    superficie: 714,
    rendimiento: 19.44,
    valor: 82352968,
  },
  {
    ranking: 19,
    entidad: "Yucatán",
    volumen: 9892,
    superficie: 580,
    rendimiento: 16.7,
    valor: 52504195,
  },
  {
    ranking: 20,
    entidad: "Guanajuato",
    volumen: 6778,
    superficie: 216,
    rendimiento: 28.73,
    valor: 33238371,
  },
  {
    ranking: 21,
    entidad: "Baja California",
    volumen: 6418,
    superficie: 156,
    rendimiento: 37.04,
    valor: 31638918,
  },
  {
    ranking: 22,
    entidad: "Puebla",
    volumen: 2661,
    superficie: 116,
    rendimiento: 23.29,
    valor: 17976615,
  },
  {
    ranking: 23,
    entidad: "Baja California Sur",
    volumen: 2315,
    superficie: 84,
    rendimiento: 31.09,
    valor: 10898634,
  },
  {
    ranking: 24,
    entidad: "Morelos",
    volumen: 1827,
    superficie: 89,
    rendimiento: 20.13,
    valor: 8540019,
  },
  {
    ranking: 25,
    entidad: "Nuevo León",
    volumen: 900,
    superficie: 31,
    rendimiento: 36.99,
    valor: 4399233,
  },
  {
    ranking: 26,
    entidad: "México",
    volumen: 743,
    superficie: 34,
    rendimiento: 21.62,
    valor: 4915108,
  },
  {
    ranking: 27,
    entidad: "Zacatecas",
    volumen: 539,
    superficie: 18,
    rendimiento: 31.24,
    valor: 2460106,
  },
];

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
  { num: 1, pais: "Estados Unidos", valor:   330318615  },
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

// Número de municipios productores por región en Oaxaca
// Cada objeto indica la región y la cantidad de municipios que participan en la producción del producto
const tab_mun_producto_oax = [
  { nom: "Sierra Sur", num: 5 },
  { nom: "Costa", num: 12 },
  { nom: "Istmo", num: 9 },
  { nom: "Papaloapan", num: 4 },
  { nom: "Sierra de Juárez", num: 1 },
  { nom: "Valles Centrales", num: 10 },
];
