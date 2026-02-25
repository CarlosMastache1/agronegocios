// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  Papaloapan: [
    { id: 20184, superficie: 1792, volumen: 43495.1, nombre: "San Juan Bautista Tuxtepec" },
    { id: 20559, superficie: 175, volumen: 3456.55, nombre: "San Juan Bautista Valle Nacional" },
    { id: 20166, superficie: 93, volumen: 1752.12, nombre: "San José Chiltepec" },
    { id: 20417, superficie: 77, volumen: 1375.99, nombre: "Santa María Jacatepec" },
    { id: 20468, superficie: 48, volumen: 798.24, nombre: "Santiago Jocotepec" },
    { id: 20498, superficie: 27, volumen: 545.7, nombre: "Santiago Yaveo" },
    { id: 20009, superficie: 12.5, volumen: 212.75, nombre: "Ayotzintepec" }
  ],
  Costa: [
    { id: 20467, superficie: 263, volumen: 7131.75, nombre: "Santiago Jamiltepec" },
    { id: 20334, superficie: 209, volumen: 6536.2, nombre: "Villa de Tututepec de Melchor Ocampo" },
    { id: 20413, superficie: 120.5, volumen: 4076.52, nombre: "Santa María Huatulco" },
    { id: 20439, superficie: 103.5, volumen: 3755.64, nombre: "Santa María Tonameca" },
    { id: 20414, superficie: 93.5, volumen: 2479.3, nombre: "Santa María Huazolotitlán" },
    { id: 20012, superficie: 56.5, volumen: 1571.76, nombre: "Candelaria Loxicha" },
    { id: 20324, superficie: 55, volumen: 1620.58, nombre: "San Pedro Pochutla" },
    { id: 20071, superficie: 39, volumen: 1092.5, nombre: "Pluma Hidalgo" },
    { id: 20318, superficie: 26, volumen: 800.18, nombre: "San Pedro Mixtepec -Dto. 22 -" },
    { id: 20401, superficie: 23, volumen: 621.2, nombre: "Santa María Colotepec" }
  ],
  Mixteca: [
    { id: 20469, superficie: 147.7, volumen: 713.38, nombre: "Santiago Juxtlahuaca" },
    { id: 20016, superficie: 11.1, volumen: 47.73, nombre: "Coicoyán de las Flores" }
  ],
  "Sierra Sur": [
    { id: 20073, superficie: 62.25, volumen: 364.48, nombre: "Putla Villa de Guerrero" },
    { id: 20392, superficie: 53.9, volumen: 314.42, nombre: "Santa Lucía Monteverde" },
    { id: 20447, superficie: 47.15, volumen: 294.89, nombre: "Santa María Zacatepec" },
    { id: 20020, superficie: 31.75, volumen: 199.16, nombre: "Constancia del Rosario" },
    { id: 20300, superficie: 18.1, volumen: 105.51, nombre: "San Pedro Amuzgos" },
    { id: 20229, superficie: 17, volumen: 153.5, nombre: "San Lorenzo Texmelúcan" },
    { id: 20516, superficie: 16.5, volumen: 132.69, nombre: "Santo Domingo Teojomulco" },
    { id: 20088, superficie: 15.25, volumen: 98.8, nombre: "San Andrés Cabecera Nueva" },
    { id: 20448, superficie: 8.75, volumen: 57.38, nombre: "Santa María Zaniza" },
    { id: 20415, superficie: 6.65, volumen: 41.03, nombre: "Santa María Ipalapa" },
    { id: 20037, superficie: 6.3, volumen: 42.08, nombre: "Mesones Hidalgo" },
    { id: 20377, superficie: 5.6, volumen: 34.66, nombre: "Santa Cruz Itundujia" }
  ],
  "Sierra Norte": [
    { id: 20190, superficie: 25, volumen: 400.75, nombre: "San Juan Cotzocón" }
  ]
};

// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    id: "CHS",
    entidad: "Chiapas",
    volumen: 684258.82,
    superficie: 23446.92,
    rendimiento: 20.27,
    valor: 1708920582.09,
  },
  {
    ranking: 2,
    id: "TAB",
    entidad: "Tabasco",
    volumen: 624468.81,
    superficie: 11708.42,
    rendimiento: 37.33,
    valor: 2254411016.99,
  },
  {
    ranking: 3,
    id: "COL",
    entidad: "Colima",
    volumen: 371075.50,
    superficie: 11500.62,
    rendimiento: 27.33,
    valor: 2018152601.32,
  },
  {
    ranking: 4,
    id: "VER",
    entidad: "Veracruz",
    volumen: 334747.05,
    superficie: 16363.71,
    rendimiento: 17.56,
    valor: 1325973226.96,
  },
  {
    ranking: 5,
    id: "JAL",
    entidad: "Jalisco",
    volumen: 203404.29,
    superficie: 4084.00,
    rendimiento: 34.32,
    valor: 1627227953.13,
  },
  {
    ranking: 6,
    id: "MICH",
    entidad: "Michoacán",
    volumen: 173788.88,
    superficie: 5997.50,
    rendimiento: 24.63,
    valor: 1090120565.17,
  },
  {
    ranking: 7,
    id: "GRO",
    entidad: "Guerrero",
    volumen: 98691.34,
    superficie: 4273.70,
    rendimiento: 19.72,
    valor: 624149277.95,
  },
  {
    ranking: 8,
    id: "OAX",
    entidad: "Oaxaca",
    volumen: 84322.54,
    superficie: 3686.50,
    rendimiento: 16.73,
    valor: 475661826.57,
  },
  {
    ranking: 9,
    id: "PUE",
    entidad: "Puebla",
    volumen: 42220.48,
    superficie: 2631.75,
    rendimiento: 12.07,
    valor: 277723241.21,
  },
  {
    ranking: 10,
    id: "NAY",
    entidad: "Nayarit",
    volumen: 38155.62,
    superficie: 2562.50,
    rendimiento: 14.56,
    valor: 236296508.56,
  },
  {
    ranking: 11,
    id: "QR",
    entidad: "Quintana Roo",
    volumen: 10948.87,
    superficie: 679.00,
    rendimiento: 14.54,
    valor: 61798621.03,
  },
  {
    ranking: 12,
    id: "YUC",
    entidad: "Yucatán",
    volumen: 2505.42,
    superficie: 318.30,
    rendimiento: 8.95,
    valor: 13713818.55,
  },
  {
    ranking: 13,
    id: "CAM",
    entidad: "Campeche",
    volumen: 1166.19,
    superficie: 108.00,
    rendimiento: 10.13,
    valor: 5209579.53,
  },
  {
    ranking: 14,
    id: "MOR",
    entidad: "Morelos",
    volumen: 278.73,
    superficie: 9.00,
    rendimiento: 30.97,
    valor: 1369489.68,
  },
  {
    ranking: 15,
    id: "EM",
    entidad: "México",
    volumen: 220.90,
    superficie: 17.00,
    rendimiento: 14.73,
    valor: 1238231.29,
  },
  {
    ranking: 16,
    id: "HGO",
    entidad: "Hidalgo",
    volumen: 37.45,
    superficie: 7.00,
    rendimiento: 5.35,
    valor: 183346.96,
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
  2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024
];

// Valores anuales de importación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las importaciones del producto
const importacion_balanza = [4181, 0, 17, 2, 0.41, 0.1, , , , ,];

// Valores anuales de exportación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las exportaciones del producto
const exportacion_balanza = [
  1805, 21226, 23903, 14056, 15350, 17477, 7820, 11377, 31260, 17872, 14827.23, 19217.68

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
  2023, 2024, 
];

// Producción histórica (en toneladas) por región desde 2010 hasta 2023
// Cada objeto contiene el nombre de una region('nom') y arreglo ('fila')
const produccion_historica_producto = [
  {
    nom: "Costa",
    fila: [
      20544.8, 15407.93, 17119.48, 19654.5, 19150.09, 21429.5, 22316.3,
      21037.15, 22794, 28784.56, 24671.17, 24237.47, 28744.95, 29650.08, 29685.63
    ],
  },
  {
    nom: "Mixteca",
    fila: [
      249.86, 258.61, 253.1, 253, 235.05, 215, 981, 919, 841.5, 757.55, 695.8,
      738.18, 750.2, 755.84, 761.11
    ],
  },
  {
    nom: "Papaloapan",
    fila: [
      30002.9, 31419.47, 39893.4, 46803.5, 47245.81, 40610.2, 41865.56,
      42251.19, 36300.32, 46733.54, 49381.55, 52994.3, 50671.25, 49865.09, 51636.45, 
    ],
  },
  {
    nom: "Sierra de Juárez",
    fila: [
      0, 312, 292.65, 411, 375, 381, 384, 364, 432, 503.54, 528.5, 512.16,
      497.55, 474.6,  400.75, 
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [
      2821.03, 2692.94, 2352.82, 2018.02, 1793.65, 1754.55, 1699.31, 1805.07,
      1943.31, 2044.97, 1931.99, 1953.84, 1929.6, 1867.75, 1838.6,
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
    volumen: 51636.45,
    superficie: 2224.50,
    rendimiento: 23.16,
    valor: 308611554.62,
    cantidad: 12,
  },
  {
    region: "Costa",
    volumen: 29685.63,
    superficie: 989.00,
    rendimiento: 30.42,
    valor: 149677264.79,
    cantidad: 19,
  },
  {
    region: "Sierra Sur",
    volumen: 1838.60,
    superficie: 289.20,
    rendimiento: 6.84,
    valor: 10746177.51,
    cantidad: 28,
  },
  {
    region: "Mixteca",
    volumen: 761.11,
    superficie: 158.80,
    rendimiento: 4.82,
    valor: 4177425.61,
    cantidad: 5,
  },
  {
    region: "Sierra Norte",
    volumen: 400.75,
    superficie: 25.00,
    rendimiento: 16.03,
    valor: 2449404.04,
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
    "Mixe",
  ],
  [12883.43, 51090.75, 11621.85, 7780.06, 946.45, ],
];

// Datos de estacionalidad del producto por mes
// Cada número representa una medida relativa o índice de producción o actividad para cada mes del año,
// probablemente de enero (índice 0) a diciembre (índice 11)
const estacionalidad_producto = [
  107, 114, 90, 118, 105, 96, 200, 106, 147, 108, 110, 121,
];