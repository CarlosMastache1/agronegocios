// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  "Valles Centrales": [
    { id: 20295, superficie: 25.00, volumen: 2456.58, nombre: "San Pablo Huixtepec" },
    { id: 20103, superficie: 7.50, volumen: 160.20, nombre: "San Antonino Castillo Velasco" },
    { id: 20315, superficie: 2.50, volumen: 51.10, nombre: "San Pedro Mártir" },
    { id: 20301, superficie: 1.20, volumen: 25.48, nombre: "San Pedro Apóstol" },
    { id: 20452, superficie: 1.20, volumen: 26.76, nombre: "Santiago Apóstol" },
    { id: 20561, superficie: 0.50, volumen: 11.20, nombre: "Yaxe" },
    { id: 20385, superficie: 0.25, volumen: 5.14, nombre: "Santa Cruz Xoxocotlán" }
  ],
  "Sierra Sur": [
    { id: 20064, superficie: 21.25, volumen: 187.64, nombre: "Nejapa de Madero" }
  ],
  "Mixteca": [
    { id: 20520, superficie: 7.32, volumen: 106.04, nombre: "Santo Domingo Tonalá" },
    { id: 20462, superficie: 4.43, volumen: 73.65, nombre: "Santiago Huajolotitlán" },
    { id: 20400, superficie: 3.99, volumen: 59.71, nombre: "Santa María Camotlán" },
    { id: 20081, superficie: 1.30, volumen: 16.41, nombre: "San Agustín Atenango" },
    { id: 20549, superficie: 0.51, volumen: 6.20, nombre: "Heroica Villa Tezoatlán de Segura y Luna, Cuna de la Independencia de Oaxaca" }
  ]
};
// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    id: "SIN",
    entidad: "Sinaloa",
    volumen: 258675.47,
    superficie: 2855.04,
    rendimiento: 101.08,
    valor: 2301994581.29,
  },
  {
    ranking: 2,
    id: "SON",
    entidad: "Sonora",
    volumen: 131399.68,
    superficie: 1346.70,
    rendimiento: 115.02,
    valor: 1076437846.42,
  },
  {
    ranking: 3,
    id: "MICH",
    entidad: "Michoacán",
    volumen: 100305.09,
    superficie: 2847.50,
    rendimiento: 43.29,
    valor: 727184613.68,
  },
  {
    ranking: 4,
    id: "MOR",
    entidad: "Morelos",
    volumen: 84299.13,
    superficie: 1720.50,
    rendimiento: 127.06,
    valor: 520409855.97,
  },
  {
    ranking: 5,
    id: "GTO",
    entidad: "Guanajuato",
    volumen: 69393.60,
    superficie: 1366.95,
    rendimiento: 85.45,
    valor: 596935903.87,
  },
  {
    ranking: 6,
    id: "YUC",
    entidad: "Yucatán",
    volumen: 44219.36,
    superficie: 860.40,
    rendimiento: 17.53,
    valor: 332948627.98,
  },
  {
    ranking: 7,
    id: "COL",
    entidad: "Colima",
    volumen: 38601.67,
    superficie: 883.50,
    rendimiento: 43.76,
    valor: 216702684.62,
  },
  {
    ranking: 8,
    id: "COA",
    entidad: "Coahuila",
    volumen: 26686.16,
    superficie: 223.60,
    rendimiento: 136.28,
    valor: 222067883.23,
  },
  {
    ranking: 9,
    id: "SLP",
    entidad: "San Luis Potosí",
    volumen: 26636.70,
    superficie: 186.00,
    rendimiento: 114.15,
    valor: 297093599.08,
  },
  {
    ranking: 10,
    id: "ZAC",
    entidad: "Zacatecas",
    volumen: 23710.62,
    superficie: 266.00,
    rendimiento: 104.76,
    valor: 99353524.22,
  },
  {
    ranking: 11,
    id: "JAL",
    entidad: "Jalisco",
    volumen: 21876.78,
    superficie: 656.44,
    rendimiento: 33.56,
    valor: 177633743.28,
  },
  {
    ranking: 12,
    id: "BCN",
    entidad: "Baja California",
    volumen: 19505.00,
    superficie: 225.50,
    rendimiento: 88.24,
    valor: 310588553.20,
  },
  {
    ranking: 13,
    id: "VER",
    entidad: "Veracruz",
    volumen: 16743.78,
    superficie: 506.64,
    rendimiento: 29.54,
    valor: 73568937.10,
  },
  {
    ranking: 14,
    id: "BCS",
    entidad: "Baja California Sur",
    volumen: 14816.63,
    superficie: 257.00,
    rendimiento: 57.44,
    valor: 106988381.70,
  },
  {
    ranking: 15,
    id: "QRO",
    entidad: "Querétaro",
    volumen: 14319.86,
    superficie: 50.02,
    rendimiento: 277.00,
    valor: 176234698.68,
  },
  {
    ranking: 16,
    id: "EM",
    entidad: "México",
    volumen: 12970.26,
    superficie: 356.39,
    rendimiento: 47.16,
    valor: 75948125.63,
  },
  {
    ranking: 17,
    id: "PUE",
    entidad: "Puebla",
    volumen: 12176.20,
    superficie: 346.90,
    rendimiento: 35.18,
    valor: 85934977.77,
  },
  {
    ranking: 18,
    id: "NAY",
    entidad: "Nayarit",
    volumen: 8673.80,
    superficie: 380.00,
    rendimiento: 16.82,
    valor: 57264110.50,
  },
  {
    ranking: 19,
    id: "TAMP",
    entidad: "Tamaulipas",
    volumen: 7080.00,
    superficie: 120.00,
    rendimiento: 59.00,
    valor: 90972507.60,
  },
  {
    ranking: 20,
    id: "AGS",
    entidad: "Aguascalientes",
    volumen: 6417.95,
    superficie: 97.04,
    rendimiento: 76.00,
    valor: 15867944.26,
  },
  {
    ranking: 21,
    id: "CHI",
    entidad: "Chihuahua",
    volumen: 5891.99,
    superficie: 60.55,
    rendimiento: 43.96,
    valor: 39164230.00,
  },
  {
    ranking: 22,
    id: "GRO",
    entidad: "Guerrero",
    volumen: 3654.84,
    superficie: 162.07,
    rendimiento: 19.02,
    valor: 18581228.10,
  },
  {
    ranking: 23,
    id: "OAX",
    entidad: "Oaxaca",
    volumen: 3186.11,
    superficie: 76.95,
    rendimiento: 26.05,
    valor: 27063363.82,
  },
  {
    ranking: 24,
    id: "HGO",
    entidad: "Hidalgo",
    volumen: 2303.46,
    superficie: 90.85,
    rendimiento: 22.39,
    valor: 17892386.35,
  },
  {
    ranking: 25,
    id: "QR",
    entidad: "Quintana Roo",
    volumen: 1982.74,
    superficie: 80.00,
    rendimiento: 21.41,
    valor: 13223053.24,
  },
  {
    ranking: 26,
    id: "CHS",
    entidad: "Chiapas",
    volumen: 1520.30,
    superficie: 38.50,
    rendimiento: 39.49,
    valor: 7290507.43,
  },
  {
    ranking: 27,
    id: "NL",
    entidad: "Nuevo León",
    volumen: 1410.00,
    superficie: 12.00,
    rendimiento: 117.50,
    valor: 17014004.70,
  },
  {
    ranking: 28,
    id: "CAM",
    entidad: "Campeche",
    volumen: 268.20,
    superficie: 30.00,
    rendimiento: 8.94,
    valor: 2873886.66,
  },
  {
    ranking: 29,
    id: "TAB",
    entidad: "Tabasco",
    volumen: 245.25,
    superficie: 22.50,
    rendimiento: 10.90,
    valor: 901240.89,
  },
  {
    ranking: 30,
    id: "DGO",
    entidad: "Durango",
    volumen: 67.22,
    superficie: 2.00,
    rendimiento: 27.22,
    valor: 583096.00,
  },
];
//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { id: "CHN", ranking: 1, pais: "China", superficie: 1326633 },
  { id: "CHN", ranking: 2, pais: "China, Continental", superficie: 1324706 },
  { id: "CMR", ranking: 3, pais: "Camerún", superficie: 279425 },
  { id: "UKR", ranking: 4, pais: "Ucrania", superficie: 47200 },
  { id: "IDN", ranking: 5, pais: "Indonesia", superficie: 40666 },
  { id: "RUS", ranking: 6, pais: "Federación de Rusia", superficie: 36308 },
  { id: "TUR", ranking: 7, pais: "Türkiye", superficie: 35278 },
  { id: "USA", ranking: 8, pais: "Estados Unidos de América", superficie: 33144 },
  { id: "UZB", ranking: 9, pais: "Uzbekistán", superficie: 30029 },
  { id: "IND", ranking: 10, pais: "India", superficie: 28575 },
  { id: "EGY", ranking: 11, pais: "Egipto", superficie: 26753 },
  { id: "KAZ", ranking: 12, pais: "Kazajstán", superficie: 21928 },
  { id: "SDN", ranking: 13, pais: "Sudán", superficie: 19830 },
  { id: "THA", ranking: 14, pais: "Tailandia", superficie: 19360 },
  { id: "MEX", ranking: 15, pais: "México", superficie: 19179 },
  { ranking: "", pais: "Otros", superficie: 231777 },

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
  2023, 2024,
];

// Producción histórica (en toneladas) por región desde 2010 hasta 2023
// Cada objeto contiene el nombre de una region('nom') y arreglo ('fila')
const produccion_historica_producto = [
  {
    nom: "Mixteca",
    fila: [
      470.7, 470.7, 472.6, 501.1, 419.6, 405.5, 338.55, 271.99, 234.62, 281.17,
      235.45, 191.21, 206.8, 223.51,  262.01,  187.64, 
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
      289.4, 317.15, 242.07, 280.08, 1801.32, 2736.46, 
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
    volumen: 2736.46,
    superficie: 38.15,
    rendimiento: 36.72,
    valor: 23623867.09,
    cantidad: 10,
  },
  {
    region: "Mixteca",
    volumen: 262.01,
    superficie: 17.55,
    rendimiento: 14.88,
    valor: 1799485.60,
    cantidad: 8,
  },
  {
    region: "Sierra Sur",
    volumen: 187.64,
    superficie: 21.25,
    rendimiento: 8.83,
    valor: 1640011.13,
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
    2626.62, // Producción toneladas para "No es pueblo indigena"
    430.84, // Zapoteco
    128.65, // Mixteco
  ],
];

// Datos de estacionalidad del producto por mes
// Cada número representa una medida relativa o índice de producción o actividad para cada mes del año,
// probablemente de enero (índice 0) a diciembre (índice 11)
const estacionalidad_producto = [
  27, 0, 345, 846, 545, 147, 0, 0, 0, 73, 288, 295,
];
