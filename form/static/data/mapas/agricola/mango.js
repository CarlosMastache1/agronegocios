// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  Papaloapam: [
    { id: 20498, superficie: 7914.00, volumen: 99629.67, nombre: "Santiago Yaveo" },
    { id: 20002, superficie: 1075.00, volumen: 14596.20, nombre: "Acatlán de Pérez Figueroa" },
    { id: 20184, superficie: 979.00, volumen: 15051.80, nombre: "San Juan Bautista Tuxtepec" },
    { id: 20278, superficie: 532.00, volumen: 7107.90, nombre: "San Miguel Soyaltepec" },
    { id: 20044, superficie: 35.00, volumen: 390.32, nombre: "Loma Bonita" },
    { id: 20232, superficie: 11.50, volumen: 138.00, nombre: "San Lucas Ojitlán" }
  ],
  Costa: [
    { id: 20318, superficie: 4305.57, volumen: 479.00, nombre: "San Pedro Mixtepec -Dto. 22 -" },
    { id: 20334, superficie: 3604.20, volumen: 57251.55, nombre: "Villa de Tututepec de Melchor Ocampo" },
    { id: 20467, superficie: 575.90, volumen: 8103.28, nombre: "Santiago Jamiltepec" },
    { id: 20482, superficie: 263.50, volumen: 3260.78, nombre: "Santiago Pinotepa Nacional" },
    { id: 20414, superficie: 69.50, volumen: 812.14, nombre: "Santa María Huazolotitlán" },
    { id: 20090, superficie: 28.00, volumen: 394.68, nombre: "San Andrés Huaxpaltepec" }
  ],
  "Sierra Norte": [
    { id: 20190, superficie: 4120.00, volumen: 50516.40, nombre: "San Juan Cotzocón" },
    { id: 20207, superficie: 2157.50, volumen: 26770.31, nombre: "San Juan Mazatlán" }
  ],
  Cañada: [
    { id: 20431, superficie: 458.00, volumen: 2954.60, nombre: "Santa María Tecomavaca" },
    { id: 20027, superficie: 421.75, volumen: 2383.25, nombre: "Chiquihuitlán de Benito Juárez" },
    { id: 20244, superficie: 393.00, volumen: 2469.99, nombre: "San Martín Toxpalan" },
    { id: 20206, superficie: 390.00, volumen: 2800.35, nombre: "San Juan de los Cués" },
    { id: 20177, superficie: 379.25, volumen: 2326.26, nombre: "San Juan Bautista Cuicatlán" },
    { id: 20545, superficie: 228.00, volumen: 997.65, nombre: "Teotitlán de Flores Magón" },
    { id: 20558, superficie: 75.25, volumen: 348.96, nombre: "Valerio Trujano" }
  ],
  Istmo: [
    { id: 20057, superficie: 352.25, volumen: 4955.26, nombre: "Matías Romero Avendaño" },
    { id: 20052, superficie: 130.75, volumen: 1620.58, nombre: "Magdalena Tequisistlán" },
    { id: 20198, superficie: 104.00, volumen: 1454.31, nombre: "San Juan Guichicovi" },
    { id: 20327, superficie: 63.00, volumen: 530.70, nombre: "San Pedro Tapanatepec" },
    { id: 20418, superficie: 44.25, volumen: 363.60, nombre: "Santa María Jalapa del Marqués" },
    { id: 20525, superficie: 36.00, volumen: 262.08, nombre: "Santo Domingo Zanatepec" },
    { id: 20143, superficie: 32.50, volumen: 133.55, nombre: "San Francisco Ixhuatán" },
    { id: 20025, superficie: 17.00, volumen: 157.25, nombre: "Chahuites" },
    { id: 20515, superficie: 15.00, volumen: 81.99, nombre: "Santo Domingo Tehuantepec" },
    { id: 20472, superficie: 13.80, volumen: 81.14, nombre: "Santiago Laollaga" },
    { id: 20508, superficie: 11.50, volumen: 66.41, nombre: "Santo Domingo Chihuitán" },
    { id: 20075, superficie: 9.00, volumen: 18.50, nombre: "Reforma de Pineda" },
    { id: 20124, superficie: 8.25, volumen: 57.38, nombre: "San Blas Atempa" },
    { id: 20053, superficie: 5.50, volumen: 30.42, nombre: "Magdalena Tlacotepec" },
    { id: 20030, superficie: 5.50, volumen: 21.13, nombre: "El Espinal" }
  ],
  "Sierra Sur": [
    { id: 20377, superficie: 64.50, volumen: 263.16, nombre: "Santa Cruz Itundujia" },
    { id: 20064, superficie: 37.25, volumen: 463.24, nombre: "Nejapa de Madero" },
    { id: 20088, superficie: 17.70, volumen: 55.40, nombre: "San Andrés Cabecera Nueva" },
    { id: 20447, superficie: 11.30, volumen: 133.11, nombre: "Santa María Zacatepec" },
    { id: 20392, superficie: 9.00, volumen: 32.85, nombre: "Santa Lucía Monteverde" }
  ],
  "Valles Centrales": [
    { id: 20333, superficie: 21.05, volumen: 135.51, nombre: "San Pedro Totolapa" },
    { id: 20449, superficie: 9.60, volumen: 50.27, nombre: "Santa María Zoquitlán" },
    { id: 20132, superficie: 7.15, volumen: 47.41, nombre: "San Dionisio Ocotlán" },
    { id: 20301, superficie: 5.60, volumen: 40.31, nombre: "San Pedro Apóstol" },
    { id: 20551, superficie: 3.50, volumen: 17.55, nombre: "Tlacolula de Matamoros" },
    { id: 20007, superficie: 1.50, volumen: 9.89, nombre: "Asunción Ocotlán" }
  ],
  Mixteca: [
    { id: 20549, superficie: 9.60, volumen: 96.76, nombre: "Tezoatlán de Segura y Luna" },
    { id: 20537, superficie: 7.20, volumen: 74.43, nombre: "Silacayoápam" },
    { id: 20039, superficie: 5.15, volumen: 53.71, nombre: "Heroica Ciudad de Huajuapan de León" },
    { id: 20469, superficie: 4.05, volumen: 37.46, nombre: "Santiago Juxtlahuaca" },
    { id: 20462, superficie: 3.20, volumen: 30.66, nombre: "Santiago Huajolotitlán" },
    { id: 20520, superficie: 3.15, volumen: 31.88, nombre: "Santo Domingo Tonalá" },
    { id: 20081, superficie: 1.85, volumen: 18.67, nombre: "San Agustín Atenango" },
    { id: 20237, superficie: 1.10, volumen: 10.58, nombre: "San Marcos Arteaga" }
  ]
};

// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  { ranking: 1, id: "SIN", entidad: "Sinaloa", volumen: 560355.34, superficie: 45582.04, rendimiento: 11.91, valor: 3160245323.13 },
  { ranking: 2, id: "GRO", entidad: "Guerrero", volumen: 404921.88, superficie: 27186.3, rendimiento: 12.77, valor: 3503832261.5 },
  { ranking: 3, id: "NAY", entidad: "Nayarit", volumen: 352273.94, superficie: 29567.65, rendimiento: 12.31, valor: 1714491359.36 },
  { ranking: 4, id: "CHS", entidad: "Chiapas", volumen: 277835.28, superficie: 38771.48, rendimiento: 8.8, valor: 1492231783.65 },
  { ranking: 5, id: "OAX", entidad: "Oaxaca", volumen: 209760.5, superficie: 19494.15, rendimiento: 9.32, valor: 1302089913.57 },
  { ranking: 6, id: "MICH", entidad: "Michoacán", volumen: 200240.98, superficie: 26274.03, rendimiento: 8.56, valor: 1517698425.71 },
  { ranking: 7, id: "JAL", entidad: "Jalisco", volumen: 128073.23, superficie: 8627.84, rendimiento: 13.33, valor: 595190397.4 },
  { ranking: 8, id: "VER", entidad: "Veracruz", volumen: 101423.94, superficie: 15050.22, rendimiento: 7.38, valor: 569347671.44 },
  { ranking: 9, id: "COL", entidad: "Colima", volumen: 62658.19, superficie: 4521.42, rendimiento: 13.61, valor: 311490863.44 },
  { ranking: 10, id: "CAM", entidad: "Campeche", volumen: 12718.15, superficie: 1087.5, rendimiento: 7.46, valor: 94025610.29 },
  { ranking: 11, id: "BCS", entidad: "Baja California Sur", volumen: 10955.98, superficie: 1825.2, rendimiento: 7.12, valor: 80407835.14 },
  { ranking: 12, id: "TAMP", entidad: "Tamaulipas", volumen: 9656.88, superficie: 937.76, rendimiento: 10.89, valor: 78266249.45 },
  { ranking: 13, id: "MOR", entidad: "Morelos", volumen: 5167, superficie: 345, rendimiento: 14.79, valor: 19098361.51 },
  { ranking: 14, id: "EM", entidad: "México", volumen: 2951.17, superficie: 370, rendimiento: 7.23, valor: 19691204.12 },
  { ranking: 15, id: "YUC", entidad: "Yucatán", volumen: 2802.15, superficie: 182.04, rendimiento: 15.29, valor: 17923483.79 },
  { ranking: 16, id: "DGO", entidad: "Durango", volumen: 1475.43, superficie: 369.06, rendimiento: 4.06, valor: 6916626.43 },
  { ranking: 17, id: "SON", entidad: "Sonora", volumen: 1379.79, superficie: 295.28, rendimiento: 13.48, valor: 8441717.96 },
  { ranking: 18, id: "TAB", entidad: "Tabasco", volumen: 1112.55, superficie: 194, rendimiento: 4.92, valor: 3428595.75 },
  { ranking: 19, id: "PUE", entidad: "Puebla", volumen: 543.49, superficie: 56.7, rendimiento: 9.43, valor: 2444508.42 },
  { ranking: 20, id: "HGO", entidad: "Hidalgo", volumen: 442.13, superficie: 70.25, rendimiento: 6.79, valor: 2220393.14 },
  { ranking: 21, id: "QRO", entidad: "Querétaro", volumen: 377.9, superficie: 77, rendimiento: 5.82, valor: 2022615 },
  { ranking: 22, id: "SLP", entidad: "San Luis Potosí", volumen: 284.9, superficie: 55, rendimiento: 5.18, valor: 1042734 },
  { ranking: 23, id: "ZAC", entidad: "Zacatecas", volumen: 209.39, superficie: 25, rendimiento: 8.33, valor: 1090877 },
];


//Ranking mundial de países por superficie sembrada (en hectáreas)



const tab_pro_mundial = [
  { id: "IND", ranking: 1, pais: "India", superficie: 2698000 },
  { id: "CHN", ranking: 2, pais: "China", superficie: 405330 },
  { id: "CHN", ranking: 3, pais: "China, Continental", superficie: 390712 },
  { id: "CIV", ranking: 4, pais: "Côte d'Ivoire", superficie: 347299 },
  { id: "IDN", ranking: 5, pais: "Indonesia", superficie: 298827 },
  { id: "MEX", ranking: 6, pais: "México", superficie: 236374 },
  { id: "PAK", ranking: 7, pais: "Pakistán", superficie: 213496 },
  { id: "PHL", ranking: 8, pais: "Filipinas", superficie: 199710 },
  { id: "EGY", ranking: 9, pais: "Egipto", superficie: 161928 },
  { id: "BGD", ranking: 10, pais: "Bangladesh", superficie: 142373 },
  { id: "THA", ranking: 11, pais: "Tailandia", superficie: 131714 },
  { id: "NGA", ranking: 12, pais: "Nigeria", superficie: 131033 },
  { id: "VNM", ranking: 13, pais: "Viet Nam", superficie: 123157 },
  { id: "BRA", ranking: 14, pais: "Brasil", superficie: 102952 },
  { id: "GIN", ranking: 15, pais: "Guinea", superficie: 102538 },
  { ranking: "", pais: "Otros", superficie: 879762 },

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
  2023, 2024
];

// Producción histórica (en toneladas) por región desde 2010 hasta 2023
// Cada objeto contiene el nombre de una region('nom') y arreglo ('fila')
const produccion_historica_producto = [
  {
    nom: "Sierra de Flores Magón",
    fila: [
      11550.77, 10153.58, 3719.13, 4035.4, 3715.03, 3706.22, 3730.8, 4022.03,
      4418.51, 4263.87, 4427.55, 4494.4, 4339.03, 3306.73, 3940, 
    ],
  },
  {
    nom: "Costa",
    fila: [
      13683.1, 9040.01, 10176.81, 14693.82, 16230.38, 16592.9, 17437.68,
      17883.9, 17877.73, 18286.53, 17696.6, 18356.64, 19549.95, 20198.6, 20390.67, 
    ],
  },
  {
    nom: "Istmo",
    fila: [
      129115.48, 157681.5, 119529.42, 139216.15, 132107.61, 120859.05,
      113592.69, 123198.61, 160411.03, 179877.57, 182919.89, 187608.91,
      188623.57, 189388.19,  182058.11, 

    ],
  },
  {
    nom: "Mixteca",
    fila: [
      822.75, 825.49, 847.65, 123.8, 41.5, 36.2, 41, 54.8, 68.25, 68.35, 74.34,
      75.06, 77, 73.97, 72.19, 
    ],
  },
  {
    nom: "Papaloapan",
    fila: [
      10351.56, 12518, 2895.1, 6030, 7571, 3853.3, 5321.3, 2258, 4886.1,
      5240.77, 1561.3, 1991.48, 2273.6, 862.35, 2258.6, 
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [
      916.04, 952.03, 915.55, 954.1, 1039.1, 981.4, 959.5, 983.3, 1012.95,
      1061.18, 1030.04, 1026, 1071.1, 1084.78, 1040.93, 
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
    volumen: 182058.11,
    superficie: 16551.55,
    rendimiento: 10.38,
    valor: 1152059873.91,
    cantidad: 51,
  },
  {
    region: "Costa",
    volumen: 20390.67,
    superficie: 1784.85,
    rendimiento: 11.47,
    valor: 112132368.61,
    cantidad: 38,
  },
  {
    region: "Cañada",
    volumen: 3940.00,
    superficie: 659.60,
    rendimiento: 5.33,
    valor: 23950506.75,
    cantidad: 19,
  },
  {
    region: "Papaloapam",
    volumen: 2258.60,
    superficie: 303.00,
    rendimiento: 7.72,
    valor: 7285505.03,
    cantidad: 6,
  },
  {
    region: "Sierra Sur",
    volumen: 1040.93,
    superficie: 181.40,
    rendimiento: 5.77,
    valor: 6284683.81,
    cantidad: 13,
  },
  {
    region: "Mixteca",
    volumen: 72.19,
    superficie: 13.75,
    rendimiento: 5.25,
    valor: 376975.46,
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
    "Mixteco",
    "Cuicateco",
    "Huave",
    "Chinanteco",
    "Mazateco",
    "Chontal De Oaxaca",
  ],
  [
    163588.11, 29467.57, 9105.83, 3157.07, 1771.2, 867.5, 1647.64, 155.58
  ],
];

// Datos de estacionalidad del producto por mes
// Cada número representa una medida relativa o índice de producción o actividad para cada mes del año,
// probablemente de enero (índice 0) a diciembre (índice 11)
const estacionalidad_producto = [2, 258, 405, 290, 442, 161, 0, 0, 0, 0, 0, 7];
