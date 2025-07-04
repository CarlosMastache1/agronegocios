// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  Mixteca: [
    //14
    {
      id: 20004,
      superficie: 2,
      volumen: 73,
      nombre: "Asunción Cuyotepeji"
    },
    {
      id: 20039,
      superficie: 15,
      volumen: 414,
      nombre: "Heroica Ciudad de Huajuapan de León"
    },
    {
      id: 20081,
      superficie: 30,
      volumen: 719,
      nombre: "San Agustín Atenango"
    },
    {
      id: 20089,
      superficie: 1,
      volumen: 35,
      nombre: "San Andrés Dinicuiti"
    },
    {
      id: 20089,
      superficie: 2,
      volumen: 39,
      nombre: "San Juan Bautista Suchitepec"
    },
    {
      id: 20237,
      superficie: 8,
      volumen: 215,
      nombre: "San Marcos Arteaga"
    },
    {
      id: 20400,
      superficie: 24,
      volumen: 603,
      nombre: "Santa María Camotlán"
    },
    {
      id: 20461,
      superficie: 3,
      volumen: 76,
      nombre: "Santiago del Río"
    },
    {
      id: 20462,
      superficie: 62,
      volumen: 1600,
      nombre: "Santiago Huajolotitlán"
    },
    {
      id: 20476,
      superficie: 1,
      volumen: 33,
      nombre: "Santiago Miltepec"
    },
    {
      id: 20520,
      superficie: 183,
      volumen: 4659,
      nombre: "Santo Domingo Tonalá"
    },
    {
      id: 20524,
      superficie: 3,
      volumen: 70,
      nombre: "Santo Domingo Yodohino"
    },
    {
      id: 20537,
      superficie: 6,
      volumen: 158,
      nombre: "Silacayoápam"
    },
    {
      id: 20549,
      superficie: 29,
      volumen: 700,
      nombre: "H. V. Tezoatlán de Segura y Luna, C. de la I.de O."
    },
  ],
  "Valles Centrales": [
    //21
    {
      id: 20023,
      superficie: 2,
      volumen: 25,
      nombre: "Cuilápam de Guerrero"
    },
    {
      id: 20068,
      superficie: 21,
      volumen: 325,
      nombre: "Ocotlán de Morelos"
    },
    {
      id: 20092,
      superficie: 6,
      volumen: 100,
      nombre: "San Andrés Ixtlahuaca"
    },
    {
      id: 20103,
      superficie: 16,
      volumen: 254,
      nombre: "San Antonino Castillo Velasco"
    },
    {
      id: 20132,
      superficie: 8,
      volumen: 117,
      nombre: "San Dionisio Ocotlán"
    },
    {
      id: 20150,
      superficie: 2,
      volumen: 30,
      nombre: "San Francisco Telixtlahuaca"
    },
    {
      id: 20273,
      superficie: 3,
      volumen: 39,
      nombre: "San Miguel Peras"
    },
    {
      id: 20294,
      superficie: 7,
      volumen: 107,
      nombre: "San Pablo Huitzo"
    },
    {
      id: 20301,
      superficie: 3,
      volumen: 55,
      nombre: "San Pedro Apóstol"
    },
    {
      id: 20310,
      superficie: 2,
      volumen: 39,
      nombre: "San Pedro Ixtlahuaca"
    },
    {
      id: 20315,
      superficie: 2,
      volumen: 34,
      nombre: "San Pedro Mártir"
    },
    {
      id: 20368,
      superficie: 2,
      volumen: 25,
      nombre: "Santa Catarina Minas"
    },
    {
      id: 20388,
      superficie: 2,
      volumen: 30,
      nombre: "Santa Inés del Monte"
    },
    {
      id: 20393,
      superficie: 4,
      volumen: 60,
      nombre: "Santa Lucía Ocotlán"
    },
    {
      id: 20399,
      superficie: 2,
      volumen: 34,
      nombre: "Santa María Atzompa"
    },
    {
      id: 20452,
      superficie: 6,
      volumen: 97,
      nombre: "Santiago Apóstol"
    },
    {
      id: 20483,
      superficie: 8,
      volumen: 117,
      nombre: "Santiago Suchilquitongo"
    },
    {
      id: 20561,
      superficie: 4,
      volumen: 64,
      nombre: "Yaxe"
    },
    {
      id: 20570,
      superficie: 2,
      volumen: 33,
      nombre: "Zimatlán de Álvarez"
    },
    {
      id: 20028,
      superficie: 21,
      volumen: 238,
      nombre: "Heroica Ciudad de Ejutla de Crespo"
    },
    {
      id: 20268,
      superficie: 7,
      volumen: 89,
      nombre: "San Miguel Ejutla"
    },
  ],
  "Sierra de Flores Magón": [
    //1
    {
      id: 20431,
      superficie: 26,
      volumen: 575,
      nombre: "Santa María Tecomavaca"
    },
  ],
  "Sierra Sur": [
    //1
    {
      id: 20059,
      superficie: 11,
      volumen: 131,
      nombre: "Miahuatlán de Porfirio Díaz"
    },
  ],
};

// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
/* const tab_pro_nacional = [
  {
    ranking: 1,
    entidad: "Sonora",
    volumen: 165704,
    superficie: 6099,
    rendimiento: 22.65,
    valor: 1103951520,
  },
  {
    ranking: 2,
    entidad: "Puebla",
    volumen: 71148,
    superficie: 4080,
    rendimiento: 16.75,
    valor: 382094599,
  },
  {
    ranking: 3,
    entidad: "Sinaloa",
    volumen: 55646,
    superficie: 2027,
    rendimiento: 24.29,
    valor: 391017819,
  },
  {
    ranking: 4,
    entidad: "Michoacán",
    volumen: 44156,
    superficie: 2027,
    rendimiento: 20.84,
    valor: 331253924,
  },
  {
    ranking: 5,
    entidad: "Hidalgo",
    volumen: 28712,
    superficie: 1541,
    rendimiento: 14.94,
    valor: 147108286,
  },
  {
    ranking: 6,
    entidad: "Jalisco",
    volumen: 25817,
    superficie: 1150,
    rendimiento: 21.73,
    valor: 171972032,
  },
  {
    ranking: 7,
    entidad: "Zacatecas",
    volumen: 20425,
    superficie: 785,
    rendimiento: 23.44,
    valor: 99933242,
  },
  {
    ranking: 8,
    entidad: "Morelos",
    volumen: 18625,
    superficie: 1279,
    rendimiento: 14.68,
    valor: 86305609,
  },
  {
    ranking: 9,
    entidad: "Yucatán",
    volumen: 17123,
    superficie: 1027,
    rendimiento: 14.07,
    valor: 120347279,
  },
  {
    ranking: 10,
    entidad: "México",
    volumen: 14350,
    superficie: 950,
    rendimiento: 14.19,
    valor: 90286761,
  },
  {
    ranking: 11,
    entidad: "Guanajuato",
    volumen: 13970,
    superficie: 805,
    rendimiento: 16.06,
    valor: 74999431,
  },
  {
    ranking: 12,
    entidad: "Oaxaca",
    volumen: 12012,
    superficie: 535,
    rendimiento: 18.48,
    valor: 76207510,
  },
  {
    ranking: 13,
    entidad: "Baja California Sur",
    volumen: 10067,
    superficie: 303,
    rendimiento: 27.64,
    valor: 62269063,
  },
  {
    ranking: 14,
    entidad: "San Luis Potosí",
    volumen: 7769,
    superficie: 351,
    rendimiento: 21.65,
    valor: 60339488,
  },
  {
    ranking: 15,
    entidad: "Guerrero",
    volumen: 7382,
    superficie: 698,
    rendimiento: 9.42,
    valor: 44772501,
  },
  {
    ranking: 16,
    entidad: "Aguascalientes",
    volumen: 6798,
    superficie: 260,
    rendimiento: 21.41,
    valor: 31105736,
  },
  {
    ranking: 17,
    entidad: "Coahuila",
    volumen: 5572,
    superficie: 314,
    rendimiento: 19.33,
    valor: 36420972,
  },
  {
    ranking: 18,
    entidad: "Baja California",
    volumen: 4997,
    superficie: 186,
    rendimiento: 20.27,
    valor: 41882676,
  },
  {
    ranking: 19,
    entidad: "Nuevo León",
    volumen: 4698,
    superficie: 142,
    rendimiento: 33.33,
    valor: 41994926,
  },
  {
    ranking: 20,
    entidad: "Chihuahua",
    volumen: 3820,
    superficie: 226,
    rendimiento: 21.48,
    valor: 31435562,
  },
  {
    ranking: 21,
    entidad: "Veracruz",
    volumen: 3504,
    superficie: 315,
    rendimiento: 10.67,
    valor: 20762712,
  },
  {
    ranking: 22,
    entidad: "Quintana Roo",
    volumen: 2669,
    superficie: 411,
    rendimiento: 9.42,
    valor: 15828768,
  },
  {
    ranking: 23,
    entidad: "Durango",
    volumen: 2662,
    superficie: 90,
    rendimiento: 21.84,
    valor: 17765744,
  },
  {
    ranking: 24,
    entidad: "Querétaro",
    volumen: 1406,
    superficie: 97,
    rendimiento: 16.55,
    valor: 9655217,
  },
  {
    ranking: 25,
    entidad: "Campeche",
    volumen: 1173,
    superficie: 121,
    rendimiento: 10.52,
    valor: 11476392,
  },
  {
    ranking: 26,
    entidad: "Nayarit",
    volumen: 990,
    superficie: 84,
    rendimiento: 11.26,
    valor: 5319565,
  },
  {
    ranking: 27,
    entidad: "Ciudad de México",
    volumen: 855,
    superficie: 84,
    rendimiento: 9.78,
    valor: 7660914,
  },
  {
    ranking: 28,
    entidad: "Tamaulipas",
    volumen: 840,
    superficie: 53,
    rendimiento: 15.91,
    valor: 8727288,
  },
  {
    ranking: 29,
    entidad: "Tlaxcala",
    volumen: 378,
    superficie: 27,
    rendimiento: 13.78,
    valor: 2190407,
  },
  {
    ranking: 30,
    entidad: "Colima",
    volumen: 85,
    superficie: 6,
    rendimiento: 15.88,
    valor: 535083,
  },
];
 */
const tab_pro_nacional = [
  {
    ranking: 1,
    id: "SON",
    entidad: "Sonora",
    volumen: 165704,
    superficie: 6099,
    rendimiento: 22.65,
    valor: 1103951520,
  },
  {
    ranking: 2,
    id: "PUE",
    entidad: "Puebla",
    volumen: 71148,
    superficie: 4080,
    rendimiento: 16.75,
    valor: 382094599,
  },
  {
    ranking: 3,
    id: "SIN",
    entidad: "Sinaloa",
    volumen: 55646,
    superficie: 2027,
    rendimiento: 24.29,
    valor: 391017819,
  },
  {
    ranking: 4,
    id: "MICH",
    entidad: "Michoacán",
    volumen: 44156,
    superficie: 2027,
    rendimiento: 20.84,
    valor: 331253924,
  },
  {
    ranking: 5,
    id: "HGO",
    entidad: "Hidalgo",
    volumen: 28712,
    superficie: 1541,
    rendimiento: 14.94,
    valor: 147108286,
  },
  {
    ranking: 6,
    id: "JAL",
    entidad: "Jalisco",
    volumen: 25817,
    superficie: 1150,
    rendimiento: 21.73,
    valor: 171972032,
  },
  {
    ranking: 7,
    id: "ZAC",
    entidad: "Zacatecas",
    volumen: 20425,
    superficie: 785,
    rendimiento: 23.44,
    valor: 99933242,
  },
  {
    ranking: 8,
    id: "MOR",
    entidad: "Morelos",
    volumen: 18625,
    superficie: 1279,
    rendimiento: 14.68,
    valor: 86305609,
  },
  {
    ranking: 9,
    id: "YUC",
    entidad: "Yucatán",
    volumen: 17123,
    superficie: 1027,
    rendimiento: 14.07,
    valor: 120347279,
  },
  {
    ranking: 10,
    id: "EM",
    entidad: "México",
    volumen: 14350,
    superficie: 950,
    rendimiento: 14.19,
    valor: 90286761,
  },
  {
    ranking: 11,
    id: "GTO",
    entidad: "Guanajuato",
    volumen: 13970,
    superficie: 805,
    rendimiento: 16.06,
    valor: 74999431,
  },
  {
    ranking: 12,
    id: "OAX",
    entidad: "Oaxaca",
    volumen: 12012,
    superficie: 535,
    rendimiento: 18.48,
    valor: 76207510,
  },
  {
    ranking: 13,
    id: "BCS",
    entidad: "Baja California Sur",
    volumen: 10067,
    superficie: 303,
    rendimiento: 27.64,
    valor: 62269063,
  },
  {
    ranking: 14,
    id: "SLP",
    entidad: "San Luis Potosí",
    volumen: 7769,
    superficie: 351,
    rendimiento: 21.65,
    valor: 60339488,
  },
  {
    ranking: 15,
    id: "GRO",
    entidad: "Guerrero",
    volumen: 7382,
    superficie: 698,
    rendimiento: 9.42,
    valor: 44772501,
  },
  {
    ranking: 16,
    id: "AGS",
    entidad: "Aguascalientes",
    volumen: 6798,
    superficie: 260,
    rendimiento: 21.41,
    valor: 31105736,
  },
  {
    ranking: 17,
    id: "COA",
    entidad: "Coahuila",
    volumen: 5572,
    superficie: 314,
    rendimiento: 19.33,
    valor: 36420972,
  },
  {
    ranking: 18,
    id: "BCN",
    entidad: "Baja California",
    volumen: 4997,
    superficie: 186,
    rendimiento: 20.27,
    valor: 41882676,
  },
  {
    ranking: 19,
    id: "NL",
    entidad: "Nuevo León",
    volumen: 4698,
    superficie: 142,
    rendimiento: 33.33,
    valor: 41994926,
  },
  {
    ranking: 20,
    id: "CHI",
    entidad: "Chihuahua",
    volumen: 3820,
    superficie: 226,
    rendimiento: 21.48,
    valor: 31435562,
  },
  {
    ranking: 21,
    id: "VER",
    entidad: "Veracruz",
    volumen: 3504,
    superficie: 315,
    rendimiento: 10.67,
    valor: 20762712,
  },
  {
    ranking: 22,
    id: "QR",
    entidad: "Quintana Roo",
    volumen: 2669,
    superficie: 411,
    rendimiento: 9.42,
    valor: 15828768,
  },
  {
    ranking: 23,
    id: "DGO",
    entidad: "Durango",
    volumen: 2662,
    superficie: 90,
    rendimiento: 21.84,
    valor: 17765744,
  },
  {
    ranking: 24,
    id: "QRO",
    entidad: "Querétaro",
    volumen: 1406,
    superficie: 97,
    rendimiento: 16.55,
    valor: 9655217,
  },
  {
    ranking: 25,
    id: "CAM",
    entidad: "Campeche",
    volumen: 1173,
    superficie: 121,
    rendimiento: 10.52,
    valor: 11476392,
  },
  {
    ranking: 26,
    id: "NAY",
    entidad: "Nayarit",
    volumen: 990,
    superficie: 84,
    rendimiento: 11.26,
    valor: 5319565,
  },
  {
    ranking: 27,
    id: "CDMX",
    entidad: "Ciudad de México",
    volumen: 855,
    superficie: 84,
    rendimiento: 9.78,
    valor: 7660914,
  },
  {
    ranking: 28,
    id: "TAMP",
    entidad: "Tamaulipas",
    volumen: 840,
    superficie: 53,
    rendimiento: 15.91,
    valor: 8727288,
  },
  {
    ranking: 29,
    id: "TLAX",
    entidad: "Tlaxcala",
    volumen: 378,
    superficie: 27,
    rendimiento: 13.78,
    valor: 2190407,
  },
  {
    ranking: 30,
    id: "COL",
    entidad: "Colima",
    volumen: 85,
    superficie: 6,
    rendimiento: 15.88,
    valor: 535083,
  },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { id: "CHN", ranking: 1, pais: "China", superficie: 398694 },
  { id: "CHN", ranking: 2, pais: "China, Continental", superficie: 396125 },
  { id: "CMR", ranking: 3, pais: "Camerún", superficie: 152498 },
  { id: "TUR", ranking: 4, pais: "Turquía", superficie: 91839 },
  { id: "CAF", ranking: 5, pais: "República Centroafricana", superficie: 77531 },
  { id: "BGD", ranking: 6, pais: "Bangladesh", superficie: 61542 },
  { id: "UKR", ranking: 7, pais: "Ucrania", superficie: 51900 },
  { id: "RWA", ranking: 8, pais: "Rwanda", superficie: 51105 },
  { id: "RUS", ranking: 9, pais: "Federación de Rusia", superficie: 48158 },
  { id: "USA", ranking: 10, pais: "Estados Unidos de América", superficie: 42492 },
  { id: "ZAF", ranking: 11, pais: "Sudáfrica", superficie: 35530 },
  { id: "MEX", ranking: 12, pais: "México", superficie: 35147 },
  { id: "CUB", ranking: 13, pais: "Cuba", superficie: 31633 },
  { id: "PAK", ranking: 14, pais: "Pakistán", superficie: 28589 },
  { id: "IRN", ranking: 15, pais: "Irán", superficie: 28144 },
  { ranking: "", pais: "Otros", superficie: 389509 },
];

const agrupado = {};

tab_pro_mundial.forEach(item => {
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
  66, 41, 893, 1583, 2093, 1506, 1856, 1446, 1535, 0, 1945, 2461, 3156,
];

// Valores anuales de exportación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las exportaciones del producto
const exportacion_balanza = [
  47200, 48994, 41040, 372923, 397691, 414089, 485540, 510387, 507584, 538038,
  547450, 548245, 521857,
];

// Tabla de los principales destinos de exportación
// Cada objeto representa un país y el valor (en USD) de exportaciones realizadas hacia ese país
const tab_destino_exportacion = [
  { num: 1, pais: "Estados Unidos", valor: 342869232 },
  { num: 2, pais: "Japón", valor: 20616950 },
  { num: 3, pais: "Canadá", valor: 630564 },
  { num: 4, pais: "Belice", valor: 748 },
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
    fila: [, , , , , , , , 822.47, 1054.93, 814.2, 836.96, 799.89, 575.12],
  },
  {
    nom: "Mixteca",
    fila: [
      9340.3, 9336.4, 9317.9, 8024.5, 7532.4, 9274.57, 10295.67, 10109.5,
      7845.75, 10137.33, 10429.36, 9154.77, 8421.82, 9395.23,
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [
      64.8, 63, 50, 70.27, 49.35, 74.48, 82.86, 83.58, 82.18, 122.4, 151.23,
      138.08, 131.25, 130.82,
    ],
  },
  {
    nom: "Valles Centrales",
    fila: [
      1324.24, 1299.45, 1177.27, 1180.18, 1177.72, 1299.06, 1332.49, 1567.88,
      1570, 1935.44, 2047.38, 1799.43, 1821.57, 1910.38,
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
    region: "Mixteca",
    volumen: 9395,
    superficie: 370,
    rendimiento: 25.45,
    valor: 51431607,
    cantidad: 14,
  },
  {
    region: "Valles Centrales",
    volumen: 1910,
    superficie: 128,
    rendimiento: 15.5,
    valor: 18600710,
    cantidad: 21,
  },
  {
    region: "Cañada",
    volumen: 575,
    superficie: 26,
    rendimiento: 22.12,
    valor: 5052648,
    cantidad: 1,
  },
  {
    region: "Sierra Sur",
    volumen: 131,
    superficie: 11,
    rendimiento: 12.4,
    valor: 1122545,
    cantidad: 1,
  },
];

// Datos de producción por grupo indígena
// Primer array: nombres de pueblos indígenas y categoría "No es pueblo indígena"
// Segundo array: volumen producido en toneladas por cada grupo correspondiente
const pub_indigenas_producto = [
  ["NO PUEBLO INDIGENA", "Mixteco", "Zapoteco", "Mazateco"],
  [3222, 6925, 1290, 575],
];

// Datos de estacionalidad del producto por mes
// Cada número representa una medida relativa o índice de producción o actividad para cada mes del año,
// probablemente de enero (índice 0) a diciembre (índice 11)
const estacionalidad_producto = [4, 555, 733, 69, 26, 0, 0, 0, 0, 51, 86, 14];

// Número de municipios productores por región en Oaxaca
// Cada objeto indica la región y la cantidad de municipios que participan en la producción del producto
const tab_mun_producto_oax = [
  { nom: "Mixteca", num: 14 },
  { nom: "Valles Centrales", num: 21 },
  { nom: "Sierra de Flores Magón", num: 1 },
  { nom: "Sierra Sur", num: 1 },
];
