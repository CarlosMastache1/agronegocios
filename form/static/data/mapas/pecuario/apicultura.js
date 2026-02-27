const regionesConMunicipios = {
  // 68 municipios totales en la tabla
  Costa: [
    { id: 20153, volumen: 338, nombre: "San Gabriel Mixtepec" },
    { id: 20482, volumen: 284, nombre: "Santiago Pinotepa Nacional" },
    { id: 20414, volumen: 135, nombre: "Santa María Huazolotitlán" },
    { id: 20324, volumen: 127, nombre: "San Pedro Pochutla" },
    { id: 20367, volumen: 121, nombre: "Santa Catarina Mechoacán" },
    { id: 20467, volumen: 109, nombre: "Santiago Jamiltepec" },
    { id: 20526, volumen: 110, nombre: "Santos Reyes Nopala" },
    { id: 20185, volumen: 108, nombre: "San Juan Cacahuatepec" },
    { id: 20090, volumen: 101, nombre: "San Andrés Huaxpaltepec" },
    { id: 20012, volumen: 83, nombre: "Candelaria Loxicha" },
    { id: 20334, volumen: 56, nombre: "Villa de Tututepec de Melchor Ocampo" },
    { id: 20168, volumen: 53, nombre: "San José Estancia Grande" },
    { id: 20364, volumen: 49, nombre: "Santa Catarina Juquila" },
    { id: 20318, volumen: 48, nombre: "San Pedro Mixtepec" },
    { id: 20302, volumen: 42, nombre: "San Pedro Atoyac" },
    { id: 20312, volumen: 41, nombre: "San Pedro Jicayán" },
    { id: 20202, volumen: 36, nombre: "San Juan Lachao" },
    { id: 20401, volumen: 29, nombre: "Santa María Colotepec" },
    { id: 20225, volumen: 29, nombre: "San Lorenzo" },
    { id: 20413, volumen: 28, nombre: "Santa María Huatulco" },
    { id: 20070, volumen: 25, nombre: "Pinotepa de Don Luis" },
    { id: 20366, volumen: 24, nombre: "Santa Catarina Loxicha" },
    { id: 20082, volumen: 22, nombre: "San Agustín Chayuco" },
    { id: 20071, volumen: 11, nombre: "Pluma Hidalgo" }
  ],
  "Sierra Sur": [
    { id: 20073, volumen: 455, nombre: "Putla Villa de Guerrero" },
    { id: 20211, volumen: 197, nombre: "San Juan Ozolotepec" },
    { id: 20344, volumen: 89, nombre: "San Sebastián Coatlán" },
    { id: 20377, volumen: 79, nombre: "Santa Cruz Itundujia" },
    { id: 20447, volumen: 57, nombre: "Santa María Zacatepec" },
    { id: 20415, volumen: 55, nombre: "Santa María Ipalapa" },
    { id: 20495, volumen: 60, nombre: "Santiago Xanica" },
    { id: 20020, volumen: 45, nombre: "Constancia del Rosario" },
    { id: 20148, volumen: 44, nombre: "San Francisco Ozolotepec" },
    { id: 20037, volumen: 27, nombre: "Mesones Hidalgo" },
    { id: 20076, volumen: 23, nombre: "La Reforma" }, // ID Corregido (era 20076)
    { id: 20424, volumen: 24, nombre: "Santa María Ozolotepec" },
    { id: 20021, volumen: 12, nombre: "San Juan Juquila Mixes" }
  ],
  Papaloapan: [
    { id: 20184, volumen: 77, nombre: "San Juan Bautista Tuxtepec" },
    { id: 20166, volumen: 42, nombre: "San José Chiltepec" },
    { id: 20002, volumen: 38, nombre: "Acatlán de Pérez Figueroa" },
    { id: 20136, volumen: 30, nombre: "San Felipe Usila" },
    { id: 20241, volumen: 24, nombre: "San Juan Bautista Valle Nacional" }, // ID Corregido
    { id: 20009, volumen: 16, nombre: "Ayotzintepec" },
    { id: 20278, volumen: 16, nombre: "San Miguel Soyaltepec" },
    { id: 20205, volumen: 16, nombre: "San Juan Lalana" },
    { id: 20468, volumen: 15, nombre: "Santiago Jocotepec" },
    { id: 20498, volumen: 12, nombre: "Santiago Yaveo" },
    { id: 20417, volumen: 15, nombre: "Santa María Jacatepec" }
  ],
  Istmo: [
    { id: 20025, volumen: 98, nombre: "Chahuites" },
    { id: 20057, volumen: 84, nombre: "Matías Romero Avendaño" },
    { id: 20327, volumen: 67, nombre: "San Pedro Tapanatepec" },
    { id: 20010, volumen: 56, nombre: "El Barrio de la Soledad" },
    { id: 20427, volumen: 30, nombre: "Santa María Petapa" }
  ],
  "Sierra de Juarez ": [
    { id: 20280, volumen: 83, nombre: "Villa Talea de Castro" },
    { id: 20207, volumen: 24, nombre: "San Juan Mazatlán" },
    { id: 20190, volumen: 16, nombre: "San Juan Cotzocón" },
    { id: 20042, volumen: 15, nombre: "Ixtlán de Juárez" }
  ],
  "Valles Centrales": [
    { id: 20067, volumen: 30, nombre: "Ocotlán de Morelos" }, // ID Corregido (era 20067)
    { id: 20295, volumen: 20, nombre: "San Pablo Huixtepec" },
    { id: 20006, volumen: 14, nombre: "Ayoquezco de Aldama" } // ID Corregido
  ],
  "Sierra de Flores Magón": [
    { id: 20029, volumen: 29, nombre: "Eloxochitlán de Flores Magón" },
    { id: 20163, volumen: 27, nombre: "San Jerónimo Tecóatl" },
    { id: 20322, volumen: 28, nombre: "San Pedro Ocopetatillo" }
  ],
  Mixteca: [
    { id: 20446, volumen: 121, nombre: "Santa María Yucuhiti" },
    { id: 20481, volumen: 16, nombre: "Santiago Nuyoó" }
  ]
};

const tab_mex_sub_pro = [
  {
    ranking: 1,
    id: "YUC",
    entidad: "Yucatán",
    volumen: 162,
    precio: 70.60,
    valor: 11463,
  },
  {
    ranking: 2,
    id: "VER",
    entidad: "Veracruz",
    volumen: 147,
    precio: 82.25,
    valor: 12088,
  },
  {
    ranking: 3,
    id: "JAL",
    entidad: "Jalisco",
    volumen: 129,
    precio: 81.14,
    valor: 10482,
  },
  {
    ranking: 4,
    id: "OAX",
    entidad: "Oaxaca",
    volumen: 107,
    precio: 75.05,
    valor: 8054,
  },
  {
    ranking: 5,
    id: "CHS",
    entidad: "Chiapas",
    volumen: 105,
    precio: 73.02,
    valor: 7657,
  },
  {
    ranking: 6,
    id: "QR",
    entidad: "Quintana Roo",
    volumen: 69,
    precio: 79.49,
    valor: 5415,
  },
  {
    ranking: 7,
    id: "CAM",
    entidad: "Campeche",
    volumen: 67,
    precio: 78.44,
    valor: 5278,
  },
  {
    ranking: 8,
    id: "MICH",
    entidad: "Michoacán",
    volumen: 56,
    precio: 79.37,
    valor: 4411,
  },
  {
    ranking: 9,
    id: "GRO",
    entidad: "Guerrero",
    volumen: 47,
    precio: 70.84,
    valor: 3317,
  },
  {
    ranking: 10,
    id: "PUE",
    entidad: "Puebla",
    volumen: 41,
    precio: 77.17,
    valor: 3142,
  },
  {
    ranking: 11,
    id: "HGO",
    entidad: "Hidalgo",
    volumen: 33,
    precio: 78.98,
    valor: 2666,
  },
  {
    ranking: 12,
    id: "SLP",
    entidad: "San Luis Potosí",
    volumen: 24,
    precio: 85.67,
    valor: 2078,
  },
  {
    ranking: 13,
    id: "TAM",
    entidad: "Tamaulipas",
    volumen: 20,
    precio: 77.09,
    valor: 1548,
  },
  {
    ranking: 14,
    id: "ZAC",
    entidad: "Zacatecas",
    volumen: 20,
    precio: 80.62,
    valor: 1593,
  },
  {
    ranking: 15,
    id: "MEX",
    entidad: "México",
    volumen: 15,
    precio: 75.65,
    valor: 1144,
  },
  {
    ranking: 16,
    id: "COL",
    entidad: "Colima",
    volumen: 14,
    precio: 81.40,
    valor: 1128,
  },
  {
    ranking: 17,
    id: "TLA",
    entidad: "Tlaxcala",
    volumen: 11,
    precio: 80.68,
    valor: 874,
  },
  {
    ranking: 18,
    id: "TAB",
    entidad: "Tabasco",
    volumen: 9,
    precio: 76.25,
    valor: 711,
  },
  {
    ranking: 19,
    id: "NAY",
    entidad: "Nayarit",
    volumen: 9,
    precio: 81.60,
    valor: 741,
  },
  {
    ranking: 20,
    id: "DUR",
    entidad: "Durango",
    volumen: 7,
    precio: 76.57,
    valor: 536,
  },
  {
    ranking: 21,
    id: "BCN",
    entidad: "Baja California",
    volumen: 7,
    precio: 64.41,
    valor: 451,
  },
  {
    ranking: 22,
    id: "BCS",
    entidad: "Baja California Sur",
    volumen: 7,
    precio: 72.21,
    valor: 470,
  },
  {
    ranking: 23,
    id: "COA",
    entidad: "Coahuila",
    volumen: 5,
    precio: 79.15,
    valor: 426,
  },
  {
    ranking: 24,
    id: "CHH",
    entidad: "Chihuahua",
    volumen: 5,
    precio: 70.05,
    valor: 369,
  },
  {
    ranking: 25,
    id: "NLE",
    entidad: "Nuevo León",
    volumen: 3,
    precio: 77.32,
    valor: 198,
  },
  {
    ranking: 26,
    id: "GTO",
    entidad: "Guanajuato",
    volumen: 1,
    precio: 70.64,
    valor: 68,
  },
  {
    ranking: 27,
    id: "QUE",
    entidad: "Querétaro",
    volumen: 1,
    precio: 80.48,
    valor: 71,
  },
  {
    ranking: 28,
    id: "SIN",
    entidad: "Sinaloa",
    volumen: 0,
    precio: 86.26,
    valor: 42,
  },
];

const tab_mex_pro = [
  { ranking: 1, id: "YUC", entidad: "Yucatán", volumen: 9250, precio: 27.02, valor: 249887 },
  { ranking: 2, id: "CHS", entidad: "Chiapas", volumen: 5942, precio: 50.30, valor: 294787 },
  { ranking: 3, id: "JAL", entidad: "Jalisco", volumen: 5849, precio: 51.38, valor: 300684 },
  { ranking: 4, id: "VER", entidad: "Veracruz", volumen: 5233, precio: 49.56, valor: 256378 },
  { ranking: 5, id: "OAX", entidad: "Oaxaca", volumen: 4716, precio: 42.54, valor: 210015 },
  { ranking: 6, id: "CAM", entidad: "Campeche", volumen: 4408, precio: 26.46, valor: 118742 },
  { ranking: 7, id: "QR", entidad: "Quintana Roo", volumen: 2937, precio: 26.81, valor: 78266 },
  { ranking: 8, id: "PUE", entidad: "Puebla", volumen: 2357, precio: 49.46, valor: 116318 },
  { ranking: 9, id: "GRO", entidad: "Guerrero", volumen: 2089, precio: 50.48, valor: 105845 },
  { ranking: 10, id: "MOR", entidad: "Morelos", volumen: 2039, precio: 46.52, valor: 95264 },
  { ranking: 11, id: "MICH", entidad: "Michoacán", volumen: 2032, precio: 54.49, valor: 110670 },
  { ranking: 12, id: "HGO", entidad: "Hidalgo", volumen: 1422, precio: 47.25, valor: 66570 },
  { ranking: 13, id: "SLP", entidad: "San Luis Potosí", volumen: 947, precio: 50.60, valor: 48203 },
  { ranking: 14, id: "ZAC", entidad: "Zacatecas", volumen: 941, precio: 48.05, valor: 44945 },
  { ranking: 15, id: "MEX", entidad: "México", volumen: 918, precio: 54.62, valor: 50195 },
  { ranking: 16, id: "TAM", entidad: "Tamaulipas", volumen: 795, precio: 47.54, valor: 37854 },
  { ranking: 17, id: "GTO", entidad: "Guanajuato", volumen: 721, precio: 52.54, valor: 37656 },
  { ranking: 18, id: "AGS", entidad: "Aguascalientes", volumen: 641, precio: 50.79, valor: 32555 },
  { ranking: 19, id: "COL", entidad: "Colima", volumen: 530, precio: 52.06, valor: 27388 },
  { ranking: 20, id: "TLA", entidad: "Tlaxcala", volumen: 501, precio: 51.21, valor: 25703 },
  { ranking: 21, id: "NAY", entidad: "Nayarit", volumen: 461, precio: 48.52, valor: 22316 },
  { ranking: 22, id: "TAB", entidad: "Tabasco", volumen: 418, precio: 50.82, valor: 21281 },
  { ranking: 23, id: "CHH", entidad: "Chihuahua", volumen: 406, precio: 49.21, valor: 20063 },
  { ranking: 24, id: "DUR", entidad: "Durango", volumen: 301, precio: 52.39, valor: 15764 },
  { ranking: 25, id: "SON", entidad: "Sonora", volumen: 296, precio: 52.57, valor: 15540 },
  { ranking: 26, id: "BCN", entidad: "Baja California", volumen: 287, precio: 51.24, valor: 14695 },
  { ranking: 27, id: "NLE", entidad: "Nuevo León", volumen: 265, precio: 52.34, valor: 13908 },
  { ranking: 28, id: "BCS", entidad: "Baja California Sur", volumen: 227, precio: 53.30, valor: 12049 },
  { ranking: 29, id: "COA", entidad: "Coahuila", volumen: 218, precio: 52.64, valor: 11493 },
  { ranking: 30, id: "SIN", entidad: "Sinaloa", volumen: 168, precio: 50.93, valor: 8571 },
  { ranking: 31, id: "CMX", entidad: "Ciudad de México", volumen: 78, precio: 55.01, valor: 4309 },
  { ranking: 32, id: "QUE", entidad: "Querétaro", volumen: 38, precio: 49.75, valor: 1922 },
];

const tabla_paises_sub_prod = [
  { id: "IND", ranking: 1, pais: "India", volumen: 24801 },
  { id: "ETH", ranking: 2, pais: "Etiopía", volumen: 5939 },
  { id: "ARG", ranking: 3, pais: "Argentina", volumen: 5040 },
  { id: "TUR", ranking: 4, pais: "Türkiye", volumen: 4231 },
  { id: "KOR", ranking: 5, pais: "República de Corea", volumen: 4016 },
  { id: "KEN", ranking: 6, pais: "Kenya", volumen: 2614 },
  { id: "AGO", ranking: 7, pais: "Angola", volumen: 2318 },
  { id: "TZA", ranking: 8, pais: "República Unida de Tanzanía", volumen: 1901 },
  { id: "BRA", ranking: 9, pais: "Brasil", volumen: 1787 },
  { id: "USA", ranking: 10, pais: "Estados Unidos de América", volumen: 1590 },
  { id: "MEX", ranking: 11, pais: "México", volumen: 1360 },
  { id: "UGA", ranking: 12, pais: "Uganda", volumen: 1359 },
  { id: "URY", ranking: 13, pais: "Uruguay", volumen: 1211 },
  { ranking: '', pais: "Otros", volumen: 6869 },

];



const agrupado = {};

tabla_paises_sub_prod.forEach((item) => {
  if (!agrupado[item.id]) {
    agrupado[item.id] = { ...item };
  } else {
    // Sumamos superficie
    agrupado[item.id].superficie += item.superficie;

    agrupado[item.id].volumen += item.volumen;
  }
});

// Convertimos el objeto agrupado a arreglo y ajustamos el ranking
const paises_datos_sub_pro = Object.values(agrupado).map((item, i) => ({
  ...item,
  ranking: i + 1,
}));

const tabla_paises_prod = [
  { id: "CHN", ranking: 1, pais: "China", volumen: 472221 },
  { id: "CHN", ranking: 2, pais: "China, Continental", volumen: 463500 },
  { id: "TUR", ranking: 3, pais: "Türkiye", volumen: 114886 },
  { id: "ETH", ranking: 4, pais: "Etiopía", volumen: 84591 },
  { id: "IRN", ranking: 5, pais: "Irán (República Islámica del)", volumen: 80389 },
  { id: "ARG", ranking: 6, pais: "Argentina", volumen: 73395 },
  { id: "IND", ranking: 7, pais: "India", volumen: 70850 },
  { id: "RUS", ranking: 8, pais: "Federación de Rusia", volumen: 64511 },
  { id: "BRA", ranking: 9, pais: "Brasil", volumen: 64189 },
  { id: "USA", ranking: 10, pais: "Estados Unidos de América", volumen: 62855 },
  { id: "MEX", ranking: 11, pais: "México", volumen: 58033 },
  { id: "UKR", ranking: 12, pais: "Ucrania", volumen: 57919 },
  { ranking: '', pais: "Otros", volumen: 467441  },

];

const agrupado2 = {};

tabla_paises_prod.forEach((item) => {
  if (!agrupado2[item.id]) {
    agrupado2[item.id] = { ...item };
  } else {
    // Sumamos superficie
    agrupado2[item.id].superficie += item.superficie;

    agrupado2[item.id].volumen += item.volumen;
  }
});

// Convertimos el objeto agrupado a arreglo y ajustamos el ranking
const paises_datos_pro = Object.values(agrupado2).map((item, i) => ({
  ...item,
  ranking: i + 1,
}));

const labels_balanza = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
];

const importacion_balanza = [
  353, 332, 167, 749, 160, 211, 296, 158, 183, 111, 82, 82, 41,
];
const exportacion_balanza = [
  26523, 26892, 32040, 33478, 39171, 42167, 29101, 27728, 55678, 25122, 22618,
  25076, 27443,
];

const produccion_historica_producto = [
  {
    nom: "Sierra de Florez Magón",
    fila: [127, 135, 143, 144, 146, 145, 150, 149, 146, 80, 149, 146, 134, 119,  130.39 ],
  },
  {
    nom: "Costa",
    fila: [
      1937, 1962, 2225, 2086, 1851, 1771, 1889, 1865, 1997, 2030, 2060, 2116,
      2165, 2189, 2088.168,
    ],
  },
  {
    nom: "Istmo",
    fila: [
      218, 225, 226, 232, 235, 236, 310, 312, 339, 365, 375, 344, 351, 357,  341.22 
    ],
  },
  {
    nom: "Mixteca",
    fila: [250, 254, 95, 97, 107, 119, 162, 168, 175, 228, 202, 206, 198, 198, 194.01 ],
  },
  {
    nom: "Papaloapan",
    fila: [
      373, 377, 320, 360, 278, 391, 369, 319, 362, 301, 285, 331, 339, 327,  325.30 
    ],
  },
  {
    nom: "Sierra de Juárez",
    fila: [
      211, 215, 239, 236, 235, 232, 269, 225, 150, 175, 157, 203, 205, 188,  185.89 
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [
      ,
      ,
      383,
      492,
      765,
      779,
      865,
      909,
      1121,
      1390,
      1185,
      1262,
      1282,
      1208,
      1237.185
    ],
  },
  {
    nom: "Valles Centrales",
    fila: [448, 451, 151, 151, 151, 153, 135, 131, 98, 98, 179, 199, 209, 210,  213.73 ],
  },
];

const labels_historica_producto = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  2023, 2024,
];

const labels_historica_sub_producto = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  2023, 2024, 
];

const produccion_historica_sub_producto = [
  {
    nom: "Sierra de Florez Magón",
    fila: [4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4, 4, 3, 3, 3],
  },
  {
    nom: "Costa",
    fila: [76, 77, 85, 77, 83, 78, 79, 87, 89, 94, 82, 76, 72, 74, 55],
  },
  {
    nom: "Istmo",
    fila: [7, 7, 7, 7, 7, 7, 8, 8, 9, 9, 10, 8, 9, 9, 7],
  },
  {
    nom: "Mixteca",
    fila: [6, 6, 2, 3, 3, 2, 4, 4, 4, 4, 5, 5, 4, 4, 3],
  },
  {
    nom: "Papaloapan",
    fila: [10, 10, 8, 8, 7, 9, 9, 8, 9, 7, 7, 8, 6, 8, 7],
  },
  {
    nom: "Sierra de Juárez",
    fila: [5, 5, 6, 7, 7, 7, 9, 7, 7, 7, 5, 5, 5, 5, 4],
  },
  {
    nom: "Sierra Sur",
    fila: [, , 10, 14, 19, 18, 18, 19, 24, 27, 20, 33, 27, 23, 23],
  },
  {
    nom: "Valles Centrales",
    fila: [11, 11, 4, 5, 5, 4, 4, 4, 3, 2, 7, 6, 7, 7, 5],
  },
];

const tabla_produccion_producto = [
  {
    region: "Costa",
    volumen: 2088,
    precio: 47.90,
    valor: 100687,
    municipios: 39,
  },
  {
    region: "Sierra Sur",
    volumen: 1237,
    precio: 43.19,
    valor: 52286,
    municipios: 32,
  },
  {
    region: "Istmo",
    volumen: 341,
    precio: 44.91,
    valor: 15853,
    municipios: 11,
  },
  {
    region: "Papaloapan",
    volumen: 325,
    precio: 32.08,
    valor: 10493,
    municipios: 17,
  },
  {
    region: "Valles Centrales",
    volumen: 214,
    precio: 45.91,
    valor: 9825,
    municipios: 48,
  },
  {
    region: "Mixteca",
    volumen: 194,
    precio: 40.15,
    valor: 7809,
    municipios: 50,
  },
  {
    region: "Sierra Norte",
    volumen: 186,
    precio: 43.84,
    valor: 8348,
    municipios: 26,
  },
  {
    region: "Sierra de Flores Magón",
    volumen: 130,
    precio: 35.18,
    valor: 4714,
    municipios: 21,
  },
];

const pub_indigenas_producto = [
  [
    "NO PUEBLO INDIGENA",
    "MIXTECO",
    "ZAPOTECO",
    "CHINANTECO",
    "CHATINO",
    "MAZATECO",
    "MIXE",
    "TRIQUI",
    "CUICATECO",
  ],
  [ 1251,  1324,  942,  247,  214,  185,  92,  455,  6],
];

const tabla_produccion_sub_producto = [
  {
    region: "Costa",
    volumen: 55,
    precio: 74.97,
    valor: 4143,
    municipios: 38,
  },
  {
    region: "Sierra Sur",
    volumen: 23,
    precio: 75.06,
    valor: 1733,
    municipios: 32,
  },
  {
    region: "Papaloapan",
    volumen: 7,
    precio: 75.00,
    valor: 530,
    municipios: 17,
  },
  {
    region: "Istmo",
    volumen: 7,
    precio: 75.16,
    valor: 518,
    municipios: 11,
  },
  {
    region: "Valles Centrales",
    volumen: 5,
    precio: 75.10,
    valor: 356,
    municipios: 48,
  },
  {
    region: "Sierra Norte",
    volumen: 4,
    precio: 75.06,
    valor: 316,
    municipios: 26,
  },
  {
    region: "Mixteca",
    volumen: 3,
    precio: 75.02,
    valor: 244,
    municipios: 50,
  },
  {
    region: "Sierra de Flores Magón",
    volumen: 3,
    precio: 75.09,
    valor: 213,
    municipios: 21,
  },
];

const pub_indigenas_sub_producto = [
  [
    "NO PUEBLO INDIGENA",
    "MIXTECO",
    "ZAPOTECO",
    "TRIQUI",
    "CHINANTECO",
    "CHATINO",
    "MAZATECO",
    "MIXE",
    "CUICATECO",
  ],
  [28, 33, 21, 8, 5, 5, 4, 2, 0,],
];

const estacionalidad_producto = [156, 119, 93, 55, 120, 36, 0, 0, 0, 114, 471, 350];
