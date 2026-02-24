// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  "Sierra Sur": [
    { id: 20447, superficie: 328.7, volumen: 9952.07, nombre: "Santa María Zacatepec" },
    { id: 20415, superficie: 182.9, volumen: 4901.06, nombre: "Santa María Ipalapa" },
    { id: 20300, superficie: 67.6, volumen: 1903.26, nombre: "San Pedro Amuzgos" },
    { id: 20037, superficie: 53.3, volumen: 1377.27, nombre: "Mesones Hidalgo" },
    { id: 20064, superficie: 35.25, volumen: 562.94, nombre: "Nejapa de Madero" }
  ],
  Costa: [
    { id: 20507, superficie: 197.5, volumen: 5411.5, nombre: "Santo Domingo Armenta" },
    { id: 20439, superficie: 47.5, volumen: 1365.33, nombre: "Santa María Tonameca" },
    { id: 20414, superficie: 45.25, volumen: 1277.86, nombre: "Santa María Huazolotitlán" },
    { id: 20334, superficie: 44.5, volumen: 1120.07, nombre: "Villa de Tututepec de Melchor Ocampo" },
    { id: 20401, superficie: 44.25, volumen: 1157.14, nombre: "Santa María Colotepec" },
    { id: 20482, superficie: 39.5, volumen: 1111.93, nombre: "Santiago Pinotepa Nacional" },
    { id: 20467, superficie: 33.75, volumen: 1073.25, nombre: "Santiago Jamiltepec" },
    { id: 20285, superficie: 30.25, volumen: 860.61, nombre: "San Miguel Tlacamama" },
    { id: 20345, superficie: 26.75, volumen: 805.71, nombre: "San Sebastián Ixcapa" },
    { id: 20509, superficie: 22, volumen: 527.12, nombre: "Santo Domingo de Morelos" },
    { id: 20319, superficie: 21.75, volumen: 492.42, nombre: "San Pedro Mixtepec" },
    { id: 20413, superficie: 7.25, volumen: 225.04, nombre: "Santa María Huatulco" }
  ],
  Istmo: [
    { id: 20525, superficie: 194.75, volumen: 3441.23, nombre: "Santo Domingo Zanatepec" },
    { id: 20075, superficie: 193.5, volumen: 3455.91, nombre: "Reforma de Pineda" },
    { id: 20143, superficie: 86.5, volumen: 1551.81, nombre: "San Francisco Ixhuatán" },
    { id: 20327, superficie: 82, volumen: 1439.92, nombre: "San Pedro Tapanatepec" },
    { id: 20141, superficie: 58.5, volumen: 652.14, nombre: "San Francisco del Mar" },
    { id: 20066, superficie: 47.75, volumen: 503.3, nombre: "Santiago Niltepec" },
    { id: 20025, superficie: 40.5, volumen: 707.94, nombre: "Chahuites" },
    { id: 20124, superficie: 9.5, volumen: 128.63, nombre: "San Blas Atempa" },
    { id: 20557, superficie: 8.5, volumen: 116.2, nombre: "Unión Hidalgo" }
  ],
  "Sierra Norte": [
    { id: 20190, superficie: 88, volumen: 1746.8, nombre: "San Juan Cotzocón" }
  ],
  Papaloapam: [
    { id: 20498, superficie: 85, volumen: 1717, nombre: "Santiago Yaveo" },
    { id: 20559, superficie: 72, volumen: 1429.2, nombre: "San Juan Bautista Valle Nacional" },
    { id: 20184, superficie: 58, volumen: 1165.8, nombre: "San Juan Bautista Tuxtepec" },
    { id: 20044, superficie: 55, volumen: 1089, nombre: "Loma Bonita" }
  ],
  "Valles Centrales": [
    { id: 20028, superficie: 13.5, volumen: 343.58, nombre: "Heroica Ciudad de Ejutla de Crespo" },
    { id: 20449, superficie: 7, volumen: 228.97, nombre: "Santa María Zoquitlán" },
    { id: 20333, superficie: 6.7, volumen: 217.35, nombre: "San Pedro Totolápam" },
    { id: 20007, superficie: 6.4, volumen: 199.1, nombre: "Ocotlán de Morelos" },
    { id: 20268, superficie: 5.8, volumen: 145, nombre: "San Miguel Ejutla" },
    { id: 20295, superficie: 5.75, volumen: 172.27, nombre: "San Pablo Huixtepec" },
    { id: 20013, superficie: 3.2, volumen: 101.34, nombre: "Zimatlán de Álvarez" },
    { id: 20007, superficie: 1.35, volumen: 42.34, nombre: "Asunción Ocotlán" },
    { id: 20561, superficie: 0.3, volumen: 9.27, nombre: "Yaxe" }
  ]
};

// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    id: "BCN",
    entidad: "Baja California",
    volumen: 2727.58,
    superficie: 74.80,
    rendimiento: 33.18,
    valor: 12454391.00,
  },
  {
    ranking: 2,
    id: "BCS",
    entidad: "Baja California Sur",
    volumen: 2872.08,
    superficie: 99.75,
    rendimiento: 29.95,
    valor: 13407424.74,
  },
  {
    ranking: 3,
    id: "CAM",
    entidad: "Campeche",
    volumen: 44221.83,
    superficie: 1522.00,
    rendimiento: 25.37,
    valor: 242666495.82,
  },
  {
    ranking: 4,
    id: "CHS",
    entidad: "Chiapas",
    volumen: 36350.52,
    superficie: 1709.90,
    rendimiento: 20.78,
    valor: 137823684.34,
  },
  {
    ranking: 5,
    id: "CHI",
    entidad: "Chihuahua",
    volumen: 225740.62,
    superficie: 5640.00,
    rendimiento: 37.00,
    valor: 963316990.37,
  },
  {
    ranking: 6,
    id: "COA",
    entidad: "Coahuila",
    volumen: 33501.24,
    superficie: 959.20,
    rendimiento: 26.79,
    valor: 151937477.00,
  },
  {
    ranking: 7,
    id: "COL",
    entidad: "Colima",
    volumen: 23307.97,
    superficie: 464.50,
    rendimiento: 48.84,
    valor: 140211815.72,
  },
  {
    ranking: 8,
    id: "DGO",
    entidad: "Durango",
    volumen: 20776.89,
    superficie: 463.10,
    rendimiento: 41.93,
    valor: 85093145.37,
  },
  {
    ranking: 9,
    id: "GTO",
    entidad: "Guanajuato",
    volumen: 5927.46,
    superficie: 188.00,
    rendimiento: 29.99,
    valor: 29626196.68,
  },
  {
    ranking: 10,
    id: "GRO",
    entidad: "Guerrero",
    volumen: 78549.11,
    superficie: 3340.14,
    rendimiento: 22.88,
    valor: 472597534.39,
  },
  {
    ranking: 11,
    id: "JAL",
    entidad: "Jalisco",
    volumen: 117626.50,
    superficie: 2250.75,
    rendimiento: 40.74,
    valor: 536919632.77,
  },
  {
    ranking: 12,
    id: "EM",
    entidad: "México",
    volumen: 731.11,
    superficie: 33.92,
    rendimiento: 21.52,
    valor: 4821667.71,
  },
  {
    ranking: 13,
    id: "MICH",
    entidad: "Michoacán",
    volumen: 29063.85,
    superficie: 851.00,
    rendimiento: 32.29,
    valor: 191564073.94,
  },
  {
    ranking: 14,
    id: "MOR",
    entidad: "Morelos",
    volumen: 1770.80,
    superficie: 87.00,
    rendimiento: 20.06,
    valor: 8533238.46,
  },
  {
    ranking: 15,
    id: "NAY",
    entidad: "Nayarit",
    volumen: 52353.18,
    superficie: 2249.50,
    rendimiento: 20.76,
    valor: 226480770.07,
  },
  {
    ranking: 16,
    id: "NL",
    entidad: "Nuevo León",
    volumen: 0.00,
    superficie: 1.00,
    rendimiento: 0.00,
    valor: 0.00,
  },
  {
    ranking: 17,
    id: "OAX",
    entidad: "Oaxaca",
    volumen: 54728.68,
    superficie: 2357.50,
    rendimiento: 23.80,
    valor: 263990305.73,
  },
  {
    ranking: 18,
    id: "PUE",
    entidad: "Puebla",
    volumen: 2915.98,
    superficie: 124.50,
    rendimiento: 22.65,
    valor: 19773515.05,
  },
  {
    ranking: 19,
    id: "QR",
    entidad: "Quintana Roo",
    volumen: 6630.81,
    superficie: 290.50,
    rendimiento: 19.90,
    valor: 36417874.11,
  },
  {
    ranking: 20,
    id: "SLP",
    entidad: "San Luis Potosí",
    volumen: 14117.20,
    superficie: 367.00,
    rendimiento: 38.30,
    valor: 75549867.99,
  },
  {
    ranking: 21,
    id: "SIN",
    entidad: "Sinaloa",
    volumen: 29151.95,
    superficie: 1728.00,
    rendimiento: 22.05,
    valor: 124912195.80,
  },
  {
    ranking: 22,
    id: "SON",
    entidad: "Sonora",
    volumen: 304443.45,
    superficie: 5725.00,
    rendimiento: 48.50,
    valor: 1668453392.00,
  },
  {
    ranking: 23,
    id: "TAB",
    entidad: "Tabasco",
    volumen: 17755.68,
    superficie: 1168.50,
    rendimiento: 12.88,
    valor: 66940794.44,
  },
  {
    ranking: 24,
    id: "TAMP",
    entidad: "Tamaulipas",
    volumen: 23218.60,
    superficie: 852.70,
    rendimiento: 25.88,
    valor: 148761400.00,
  },
  {
    ranking: 25,
    id: "VER",
    entidad: "Veracruz",
    volumen: 130055.88,
    superficie: 5986.78,
    rendimiento: 24.79,
    valor: 539191388.73,
  },
  {
    ranking: 26,
    id: "YUC",
    entidad: "Yucatán",
    volumen: 10947.18,
    superficie: 578.25,
    rendimiento: 17.08,
    valor: 58679979.01,
  },
  {
    ranking: 27,
    id: "ZAC",
    entidad: "Zacatecas",
    volumen: 277.00,
    superficie: 12.00,
    rendimiento: 22.93,
    valor: 1616200.00,
  },
];
//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { id: "CHN", ranking: 1, pais: "China", superficie: 1495331 },
  { id: "CHN", ranking: 2, pais: "China, Continental", superficie: 1488028 },
  { id: "IND", ranking: 3, pais: "India", superficie: 126000 },
  { id: "RUS", ranking: 4, pais: "Federación de Rusia", superficie: 97334 },
  { id: "SEN", ranking: 5, pais: "Senegal", superficie: 90938 },
  { id: "BRA", ranking: 6, pais: "Brasil", superficie: 80833 },
  { id: "TUR", ranking: 7, pais: "Türkiye", superficie: 64070 },
  { id: "DZA", ranking: 8, pais: "Argelia", superficie: 63258 },
  { id: "AFG", ranking: 9, pais: "Afganistán", superficie: 61591 },
  { id: "IRN", ranking: 10, pais: "Irán (República Islámica del)", superficie: 58446 },
  { id: "KAZ", ranking: 11, pais: "Kazajstán", superficie: 53252 },
  { id: "VNM", ranking: 12, pais: "Viet Nam", superficie: 50964 },
  { id: "MEX", ranking: 13, pais: "México", superficie: 42717 },
  { id: "USA", ranking: 14, pais: "Estados Unidos de América", superficie: 40955 },
  { id: "PAK", ranking: 15, pais: "Pakistán", superficie: 40642 },
  { ranking: "", pais: "Otros", superficie: 683909 },

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
  2023, 2024
];

// Producción histórica (en toneladas) por región desde 2010 hasta 2023
// Cada objeto contiene el nombre de una region('nom') y arreglo ('fila')
const produccion_historica_producto = [
  {
    nom: "Costa",
    fila: [
      4087.5, 4368, 4597.5, 5424.29, 9078.69, 9624.7, 10711.1, 12214.74,
      12807.16, 13766.1, 13951.38, 15060.26, 15127.95, 15364.68, 15427.98,
    ],
  },
  {
    nom: "Istmo",
    fila: [
      9699, 17054.7, 13952.1, 11091.36, 11194.85, 9587.15, 11134.73, 10765.7,
      11882.55, 12069.03, 12375.86, 12510.78, 12411.52, 12109.22, 11997.08,
    ],
  },
  {
    nom: "Mixteca",
    fila: [
      212.62, 210.51, 211.96, 125.3, 86.65, 45.1, 14.3, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
  },
  {
    nom: "Papaloapan",
    fila: [
      2974, 2654, 1119.45, 2373.45, 2532.5, 1980.9, 1735.6, 1683.5, 1714.5,
      2783.7, 2725.9, 2774.45, 4801.63, 5109.8, 5401, 
    ],
  },
  {
    nom: "Sierra de Juárez",
    fila: [
      810, 1125, 385, 577.5, 783, 803.7, 915.2, 1055.6, 1116, 1216, 1246.75,
      1180.35, 1698.9, 1742.5, 1746.8, 
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [
      12656.5, 12855.3, 12879.7, 12875, 12323.54, 13199.69, 12812, 15404.4,
      16834.9, 17593.25, 18221.6, 18408.54, 17643.16, 18017.81, 18696.6, 
    ],
  },
  {
    nom: "Valles Centrales",
    fila: [
      1903, 2078.08, 1447.62, 1356.22, 1375.6, 1291.29, 1345.76, 1237.31,
      1366.62, 1451.08, 1521.73, 1441.48, 1575.15, 1580.07, 1459.22,
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
    volumen: 18696.60,
    superficie: 667.75,
    rendimiento: 26.15,
    valor: 78739344.85,
    cantidad: 8,
  },
  {
    region: "Costa",
    volumen: 15427.98,
    superficie: 560.25,
    rendimiento: 27.60,
    valor: 75998198.03,
    cantidad: 13,
  },
  {
    region: "Istmo",
    volumen: 11997.08,
    superficie: 721.50,
    rendimiento: 14.22,
    valor: 66297842.22,
    cantidad: 11,
  },
  {
    region: "Papaloapan",
    volumen: 5401.00,
    superficie: 270.00,
    rendimiento: 19.99,
    valor: 27073878.96,
    cantidad: 4,
  },
  {
    region: "Sierra Norte",
    volumen: 1746.80,
    superficie: 88.00,
    rendimiento: 19.85,
    valor: 8457848.39,
    cantidad: 1,
  },
  {
    region: "Valles Centrales",
    volumen: 1459.22,
    superficie: 50.00,
    rendimiento: 30.07,
    valor: 7423193.28,
    cantidad: 9,
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
    "Mixe",
    "Chinanteco",
    "Huave",
  ],
  [25399.59, 16458.7, 6159.45,3463.8, 2595, 652.14,],
];

// Datos de estacionalidad del producto por mes
// Cada número representa una medida relativa o índice de producción o actividad para cada mes del año,
// probablemente de enero (índice 0) a diciembre (índice 11)
const estacionalidad_producto = [
  43, 660, 530, 375, 14, 0, 0, 0, 0, 0, 299, 274,
];
