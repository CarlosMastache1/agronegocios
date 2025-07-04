// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  "Valles Centrales": [
    //7
    {
      id: 20103,
      superficie: 9,
      volumen: 171,
      nombre: "San Antonino Castillo Velasco",
    },
    {
      id: 20295,
      superficie: 22,
      volumen: 1533,
      nombre: "San Pablo Huixtepec",
    },
    {
      id: 20301,
      superficie: 1,
      volumen: 22,
      nombre: "San Pedro Apóstol",
    },
    {
      id: 20316,
      superficie: 3,
      volumen: 50,
      nombre: "San Pedro Mártir",
    },
    {
      id: 20385,
      superficie: 0.3,
      volumen: 6,
      nombre: "Santa Cruz Xoxocotlán",
    },
    {
      id: 20452,
      superficie: 0.3,
      volumen: 6,
      nombre: "Santiago Apóstol",
    },
    {
      id: 20561,
      superficie: 0.6,
      volumen: 13,
      nombre: "Yaxe",
    },
  ],
  Mixteca: [
    //5
    {
      id: 20081,
      superficie: 1,
      volumen: 15,
      nombre: "San Agustín Atenango",
    },
    {
      id: 20400,
      superficie: 4,
      volumen: 56,
      nombre: "Santa María Camotlán",
    },
    {
      id: 20462,
      superficie: 4,
      volumen: 62,
      nombre: "Santiago Huajolotitlán",
    },
    {
      id: 20520,
      superficie: 7,
      volumen: 84,
      nombre: "Santo Domingo Tonalá",
    },
    {
      id: 20549,
      superficie: 0.7,
      volumen: 8,
      nombre: "H. V. Tezoatlán de Segura y Luna, C. de la I.de O.",
    },
  ],
  "Sierra Sur": [
    //1
    {
      id: 20064,
      superficie: 21,
      volumen: 179,
      nombre: "Nejapa de Madero",
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
    volumen: 262530,
    superficie: 3381,
    rendimiento: 61.16,
    valor: 2052254990,
  },
  {
    ranking: 2,
    id: "SON",
    entidad: "Sonora",
    volumen: 198103,
    superficie: 2102,
    rendimiento: 91.28,
    valor: 1664424824,
  },
  {
    ranking: 3,
    id: "MICH",
    entidad: "Michoacán",
    volumen: 98923,
    superficie: 3505,
    rendimiento: 33.51,
    valor: 680563383,
  },
  {
    ranking: 4,
    id: "GTO",
    entidad: "Guanajuato",
    volumen: 64100,
    superficie: 1484,
    rendimiento: 76.55,
    valor: 651047542,
  },
  {
    ranking: 5,
    id: "MOR",
    entidad: "Morelos",
    volumen: 61999,
    superficie: 1699,
    rendimiento: 76.67,
    valor: 368122925,
  },
  {
    ranking: 6,
    id: "BCN",
    entidad: "Baja California",
    volumen: 42780,
    superficie: 478,
    rendimiento: 71.56,
    valor: 865333622,
  },
  {
    ranking: 7,
    id: "YUC",
    entidad: "Yucatán",
    volumen: 41516,
    superficie: 862,
    rendimiento: 16.34,
    valor: 348735951,
  },
  {
    ranking: 8,
    id: "COA",
    entidad: "Coahuila",
    volumen: 33939,
    superficie: 295,
    rendimiento: 117.27,
    valor: 324243495,
  },
  {
    ranking: 9,
    id: "COL",
    entidad: "Colima",
    volumen: 32742,
    superficie: 902,
    rendimiento: 32.64,
    valor: 184374213,
  },
  {
    ranking: 10,
    id: "SLP",
    entidad: "San Luis Potosí",
    volumen: 28152,
    superficie: 188,
    rendimiento: 86.63,
    valor: 365308781,
  },
  {
    ranking: 11,
    id: "BCS",
    entidad: "Baja California Sur",
    volumen: 27128,
    superficie: 309,
    rendimiento: 53.36,
    valor: 209907605,
  },
  {
    ranking: 12,
    id: "JAL",
    entidad: "Jalisco",
    volumen: 27032,
    superficie: 1028,
    rendimiento: 30.03,
    valor: 190637979,
  },
  {
    ranking: 13,
    id: "ZAC",
    entidad: "Zacatecas",
    volumen: 18639,
    superficie: 220,
    rendimiento: 85.2,
    valor: 112675872,
  },
  {
    ranking: 14,
    id: "TAMP",
    entidad: "Tamaulipas",
    volumen: 13880,
    superficie: 290,
    rendimiento: 47.86,
    valor: 146074689,
  },
  {
    ranking: 15,
    id: "VER",
    entidad: "Veracruz",
    volumen: 13835,
    superficie: 501,
    rendimiento: 25.19,
    valor: 62250402,
  },
  {
    ranking: 16,
    id: "QRO",
    entidad: "Querétaro",
    volumen: 13434,
    superficie: 50,
    rendimiento: 248.01,
    valor: 215796695,
  },
  {
    ranking: 17,
    id: "EM",
    entidad: "México",
    volumen: 10296,
    superficie: 639,
    rendimiento: 41.25,
    valor: 60919768,
  },
  {
    ranking: 18,
    id: "PUE",
    entidad: "Puebla",
    volumen: 9203,
    superficie: 359,
    rendimiento: 27.62,
    valor: 64867558,
  },
  {
    ranking: 19,
    id: "QR",
    entidad: "Quintana Roo",
    volumen: 7597,
    superficie: 107,
    rendimiento: 65.46,
    valor: 156073500,
  },
  {
    ranking: 20,
    id: "NAY",
    entidad: "Nayarit",
    volumen: 7309,
    superficie: 387,
    rendimiento: 15.86,
    valor: 34486791,
  },
  {
    ranking: 21,
    id: "AGS",
    entidad: "Aguascalientes",
    volumen: 6538,
    superficie: 108,
    rendimiento: 48.0,
    valor: 15515428,
  },
  {
    ranking: 22,
    id: "CHI",
    entidad: "Chihuahua",
    volumen: 6117,
    superficie: 128,
    rendimiento: 32.59,
    valor: 41737676,
  },
  {
    ranking: 23,
    id: "GRO",
    entidad: "Guerrero",
    volumen: 3289,
    superficie: 166,
    rendimiento: 18.75,
    valor: 17105416,
  },
  {
    ranking: 24,
    id: "OAX",
    entidad: "Oaxaca",
    volumen: 2204,
    superficie: 74,
    rendimiento: 21.63,
    valor: 17221548,
  },
  {
    ranking: 25,
    id: "HGO",
    entidad: "Hidalgo",
    volumen: 1845,
    superficie: 93,
    rendimiento: 18.69,
    valor: 10952090,
  },
  {
    ranking: 26,
    id: "NL",
    entidad: "Nuevo León",
    volumen: 1503,
    superficie: 30,
    rendimiento: 70.05,
    valor: 15426000,
  },
  {
    ranking: 27,
    id: "CHS",
    entidad: "Chiapas",
    volumen: 1079,
    superficie: 39,
    rendimiento: 27.75,
    valor: 5174261,
  },
  {
    ranking: 28,
    id: "DGO",
    entidad: "Durango",
    volumen: 383,
    superficie: 7,
    rendimiento: 49.68,
    valor: 3006602,
  },
  {
    ranking: 29,
    id: "CAM",
    entidad: "Campeche",
    volumen: 382,
    superficie: 34,
    rendimiento: 11.24,
    valor: 4078706,
  },
  {
    ranking: 30,
    id: "TAB",
    entidad: "Tabasco",
    volumen: 240,
    superficie: 22,
    rendimiento: 10.93,
    valor: 916970,
  },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { id: "CHN",ranking: 1, pais: "China", superficie: 1311461 },
  { id: "CHN", ranking: 2, pais: "China, Continental", superficie: 1309411 },
  { id: "CMR", ranking: 3, pais: "Camerún", superficie: 278341 },
  { id: "UKR", ranking: 4, pais: "Ucrania", superficie: 45100 },
  { id: "IDN", ranking: 5, pais: "Indonesia", superficie: 41386 },
  { id: "RUS", ranking: 6, pais: "Federación de Rusia", superficie: 36506 },
  { id: "TUR", ranking: 7, pais: "Turquía", superficie: 35333 },
  { id: "USA", ranking: 8, pais: "Estados Unidos de América", superficie: 33792 },
  { id: "IND", ranking: 9, pais: "India", superficie: 28763 },
  { id: "UZB", ranking: 10, pais: "Uzbekistán", superficie: 27489 },
  { id: "KAZ", ranking: 11, pais: "Kazajstán", superficie: 22970 },
  { id: "EGY", ranking: 12, pais: "Egipto", superficie: 20403 },
  { id: "IRQ", ranking: 13, pais: "Iraq", superficie: 20381 },
  { id: "MEX", ranking: 14, pais: "México", superficie: 19123 },
  { id: "THA", ranking: 15, pais: "Tailandia", superficie: 18858 },
  { ranking: "", pais: "Otros", superficie: 236491 },
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
const importacion_balanza = [818, 1154, 2460, 2061, , , 0, , 3];

// Valores anuales de exportación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las exportaciones del producto
const exportacion_balanza = [
  498822, 497030, 540334, 584928, 610940, 655191, 693611, 750511, 767073,
  782161, 809814, 840143, 850291,
];

// Tabla de los principales destinos de exportación
// Cada objeto representa un país y el valor (en USD) de exportaciones realizadas hacia ese país
const tab_destino_exportacion = [
  { num: 1, pais: "Estados Unidos", valor: 139491145 },
  { num: 1, pais: "Canadá", valor: 3494165 },
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
    nom: "Mixteca",
    fila: [
      470.7, 470.7, 472.6, 501.1, 419.6, 405.5, 338.55, 271.99, 234.62, 281.17,
      235.45, 191.21, 206.8, 223.51,
    ],
  },
  {
    nom: "Sierra de Juárez",
    fila: [
      60.3, 144, 174.02, 165, 168, 184.4, 212.45, 201.42, 185.57, 246.74,
      275.36, 189.44, 192.06, 179.38,
    ],
  },
  {
    nom: "Valles Centrales",
    fila: [
      211.22, 208.95, 238.53, 249.87, 231.4, 252.49, 233.52, 196.41, 210.52,
      289.4, 317.15, 242.07, 280.08, 1801.32,
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
    region: "Valles Centrales",
    volumen: 1801, // Total toneladas producidas en la región Valles Centrales
    superficie: 36, // Total hectáreas sembradas
    rendimiento: 30.19, // Toneladas por hectárea (alta productividad)
    valor: 14334359, // Valor económico total de la producción
    cantidad: 7, // Número de municipios/productores considerados
  },
  {
    region: "Mixteca",
    volumen: 224,
    superficie: 18,
    rendimiento: 12.53,
    valor: 1394747,
    cantidad: 5,
  },
  {
    region: "Sierra Sur",
    volumen: 179,
    superficie: 21,
    rendimiento: 8.75,
    valor: 1492442,
    cantidad: 1,
  },
];

// Datos de producción por grupo indígena
// Primer array: nombres de pueblos indígenas y categoría "No es pueblo indígena"
// Segundo array: volumen producido en toneladas por cada grupo correspondiente
const pub_indigenas_producto = [
  [
    "No es pueblo indigena", // Producción fuera de comunidades indígenas
    "Zapoteco",
    "Mixteco",
  ],
  [
    158, // Producción toneladas para "No es pueblo indigena"
    1940, // Zapoteco
    107, // Mixteco
  ],
];

// Datos de estacionalidad del producto por mes
// Cada número representa una medida relativa o índice de producción o actividad para cada mes del año,
// probablemente de enero (índice 0) a diciembre (índice 11)
const estacionalidad_producto = [
  27, 0, 345, 846, 545, 147, 0, 0, 0, 73, 288, 295,
];
