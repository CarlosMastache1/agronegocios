// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  Istmo: [
    { id: 20143, superficie: 204.50, volumen: 3032.74, nombre: "San Francisco Ixhuatán" },
    { id: 20075, superficie: 172.50, volumen: 2459.85, nombre: "Reforma de Pineda" },
    { id: 20525, superficie: 126.50, volumen: 1739.38, nombre: "Santo Domingo Zanatepec" },
    { id: 20327, superficie: 124.50, volumen: 1716.86, nombre: "San Pedro Tapanatepec" },
    { id: 20141, superficie: 93.50, volumen: 1329.57, nombre: "San Francisco del Mar" },
    { id: 20066, superficie: 65.75, volumen: 904.72, nombre: "Santiago Niltepec" },
    { id: 20025, superficie: 58.75, volumen: 793.71, nombre: "Chahuites" },
    { id: 20052, superficie: 32.25, volumen: 636.62, nombre: "Magdalena Tequisistlán" },
    { id: 20515, superficie: 13.25, volumen: 170.26, nombre: "Santo Domingo Tehuantepec" },
    { id: 20421, superficie: 12.50, volumen: 162.00, nombre: "Santa María Mixtequilla" },
    { id: 20124, superficie: 9.50, volumen: 125.40, nombre: "San Blas Atempa" }
  ],
  Costa: [
    { id: 20439, superficie: 27.50, volumen: 742.50, nombre: "Santa María Tonameca" },
    { id: 20414, superficie: 26.50, volumen: 624.08, nombre: "Santa María Huazolotitlán" },
    { id: 20467, superficie: 23.25, volumen: 536.61, nombre: "Santiago Jamiltepec" },
    { id: 20413, superficie: 8.50, volumen: 235.03, nombre: "Santa María Huatulco" }
  ],
  "Sierra de Flores Magón": [
    { id: 20431, superficie: 21.35, volumen: 437.70, nombre: "Santa María Tecomavaca" },
    { id: 20206, superficie: 17.30, volumen: 357.52, nombre: "San Juan de los Cués" },
    { id: 20177, superficie: 16.25, volumen: 327.90, nombre: "San Juan Bautista Cuicatlán" },
    { id: 20545, superficie: 12.25, volumen: 258.04, nombre: "Teotitlán de Flores Magón" },
    { id: 20109, superficie: 11.65, volumen: 234.00, nombre: "San Antonio Nanahuatípam" },
    { id: 20558, superficie: 3.00, volumen: 58.56, nombre: "Valerio Trujano" }
  ],
  "Sierra Sur": [
    { id: 20064, superficie: 29.75, volumen: 570.01, nombre: "Nejapa de Madero" }
  ],
  "Valles Centrales": [
    { id: 20028, superficie: 7.50, volumen: 148.50, nombre: "Heroica Ciudad de Ejutla de Crespo" },
    { id: 20449, superficie: 6.00, volumen: 140.70, nombre: "Santa María Zoquitlán" },
    { id: 20068, superficie: 2.00, volumen: 44.56, nombre: "Ocotlán de Morelos" }
  ],
  Mixteca: [
    { id: 20381, superficie: 4.69, volumen: 57.78, nombre: "Santa Cruz Tacache de Mina" },
    { id: 20290, superficie: 2.62, volumen: 33.80, nombre: "San Nicolás Hidalgo" },
    { id: 20055, superficie: 1.45, volumen: 16.99, nombre: "Mariscala de Juárez" }
  ]
};
// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  { ranking: 1, id: "MICH", entidad: "Michoacán", volumen: 138077.60, superficie: 3853.00, rendimiento: 27.14, valor: 1193053997.30 },
  { ranking: 2, id: "COA", entidad: "Coahuila", volumen: 109790.39, superficie: 3250.20, rendimiento: 27.38, valor: 545583031.20 },
  { ranking: 3, id: "GRO", entidad: "Guerrero", volumen: 101961.64, superficie: 3528.45, rendimiento: 21.56, valor: 766770958.93 },
  { ranking: 4, id: "SON", entidad: "Sonora", volumen: 87622.43, superficie: 2500.00, rendimiento: 34.69, valor: 648495564.62 },
  { ranking: 5, id: "DGO", entidad: "Durango", volumen: 64604.60, superficie: 1669.10, rendimiento: 39.13, valor: 320350962.00 },
  { ranking: 6, id: "OAX", entidad: "Oaxaca", volumen: 17895.39, superficie: 1135.06, rendimiento: 18.33, valor: 122431623.53 },
  { ranking: 7, id: "CHIH", entidad: "Chihuahua", volumen: 16273.55, superficie: 892.30, rendimiento: 22.14, valor: 80410695.65 },
  { ranking: 8, id: "COL", entidad: "Colima", volumen: 14131.29, superficie: 294.00, rendimiento: 46.27, valor: 101193757.53 },
  { ranking: 9, id: "BCS", entidad: "Baja California Sur", volumen: 5394.90, superficie: 228.00, rendimiento: 24.18, valor: 29283135.43 },
  { ranking: 10, id: "NAY", entidad: "Nayarit", volumen: 4766.44, superficie: 235.00, rendimiento: 22.22, valor: 37752431.48 },
  { ranking: 11, id: "GTO", entidad: "Guanajuato", volumen: 4608.31, superficie: 190.00, rendimiento: 23.35, valor: 27383410.04 },
  { ranking: 12, id: "JAL", entidad: "Jalisco", volumen: 3995.84, superficie: 164.40, rendimiento: 26.52, valor: 26360887.70 },
  { ranking: 13, id: "SLP", entidad: "San Luis Potosí", volumen: 3542.40, superficie: 115.00, rendimiento: 30.97, valor: 20992676.03 },
  { ranking: 14, id: "TAB", entidad: "Tabasco", volumen: 1857.08, superficie: 205.25, rendimiento: 9.41, valor: 7637707.05 },
  { ranking: 15, id: "BCN", entidad: "Baja California", volumen: 1839.20, superficie: 82.60, rendimiento: 22.40, valor: 7517000.48 },
  { ranking: 16, id: "PUE", entidad: "Puebla", volumen: 791.66, superficie: 39.50, rendimiento: 19.62, valor: 4304093.30 },
  { ranking: 17, id: "CHS", entidad: "Chiapas", volumen: 647.14, superficie: 43.70, rendimiento: 16.87, valor: 4263630.80 },
  { ranking: 18, id: "VER", entidad: "Veracruz", volumen: 503.58, superficie: 22.00, rendimiento: 22.89, valor: 2325688.55 },
  { ranking: 19, id: "YUC", entidad: "Yucatán", volumen: 252.66, superficie: 17.40, rendimiento: 13.34, valor: 1815665.74 },
  { ranking: 20, id: "ZAC", entidad: "Zacatecas", volumen: 194.00, superficie: 8.00, rendimiento: 24.00, valor: 1358000.00 },
  { ranking: 21, id: "EM", entidad: "México", volumen: 91.80, superficie: 5.16, rendimiento: 17.79, valor: 550708.20 },
  { ranking: 22, id: "TAMP", entidad: "Tamaulipas", volumen: 85.00, superficie: 4.00, rendimiento: 21.25, valor: 747000.00 },
  { ranking: 23, id: "SIN", entidad: "Sinaloa", volumen: 80.00, superficie: 5.00, rendimiento: 16.00, valor: 680000.00 },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)


const tab_pro_mundial = [
  { id: "NGA", ranking: 1, pais: "Nigeria", superficie: 899728 },
  { id: "SDN", ranking: 2, pais: "Sudán", superficie: 484273 },
  { id: "CHN", ranking: 3, pais: "China", superficie: 414909 },
  { id: "CHN", ranking: 4, pais: "China, Continental", superficie: 411281 },
  { id: "CMR", ranking: 5, pais: "Camerún", superficie: 131416 },
  { id: "COD", ranking: 6, pais: "República Democrática del Congo", superficie: 99834 },
  { id: "AFG", ranking: 7, pais: "Afganistán", superficie: 73628 },
  { id: "IRN", ranking: 8, pais: "Irán (República Islámica del)", superficie: 72318 },
  { id: "IND", ranking: 9, pais: "India", superficie: 68000 },
  { id: "CAF", ranking: 10, pais: "República Centroafricana", superficie: 58198 },
  { id: "TUR", ranking: 11, pais: "Türkiye", superficie: 54812 },
  { id: "KAZ", ranking: 12, pais: "Kazajstán", superficie: 54575 },
  { id: "GTM", ranking: 13, pais: "Guatemala", superficie: 39600 },
  { id: "SSD", ranking: 14, pais: "Sudán del Sur", superficie: 39420 },
  { id: "TCD", ranking: 15, pais: "Chad", superficie: 35973 },
  { id: "BGD", ranking: 16, pais: "Bangladesh", superficie: 31259 },
  { id: "BRA", ranking: 17, pais: "Brasil", superficie: 30535 },
  { id: "ITA", ranking: 18, pais: "Italia", superficie: 25490 },
  { id: "PAK", ranking: 19, pais: "Pakistán", superficie: 23256 },
  { id: "USA", ranking: 20, pais: "Estados Unidos de América", superficie: 20963 },
  { id: "MEX", ranking: 21, pais: "México", superficie: 19784 },
  { ranking: "", pais: "Otros", superficie: 246162 },

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
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024
];

// Valores anuales de importación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las importaciones del producto
const importacion_balanza = [
  30567, 38142, 18750, 16105, 31311, 18454, 29319, 32265, 44096, 27069, 10619,
  8832, 11243, 10283.6, 8489.19
];

// Valores anuales de exportación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las exportaciones del producto
const exportacion_balanza = [
  150816, 146437, 134574, 145688, 142146, 147705, 157070, 142199, 132744,
  105054, 106368, 97383, 120074, 144897.76, 114479.96
];

// Tabla de los principales destinos de exportación
// Cada objeto representa un país y el valor (en USD) de exportaciones realizadas hacia ese país
const tab_destino_exportacion = [
  { num: 1, pais: "Japón", valor: 276751 },
  { num: 2, pais: "Belice", valor: 3938 },
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
      1398.66, 2112.64, 2620.65, 1812.26, 1542.83, 1975.56, 1756.72, 1877.48,
      1740.72, 1986.98, 2145.19, 2257.01, 2192.17, 1795.46, 1673.72, 
    ],
  },
  {
    nom: "Costa",
    fila: [
      2512.1, 2587.77, 1961.2, 2071.75, 2045.72, 1257, 1557.1, 1698.01, 1866.48,
      2088, 2191.75, 2430.75, 2400.76, 2431.04, 2138.22, 
    ],
  },
  {
    nom: "Istmo",
    fila: [
      14301.78, 21961.18, 17385.04, 11999.78, 11147.35, 10063.76, 10762.48,
      12449.14, 12484.67, 12882.46, 12221.48, 13322.33, 13164.66, 13216.1, 13071.11, 
    ],
  },
  {
    nom: "Mixteca",
    fila: [
      305.5, 301.02, 302.14, 226.9, 142.4, 41.5, 113.35, 103.5, 77.2, 99.65,
      95.2, 98.33, 89.11, 103.71, 108.57,
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [
      540, 682.67, 800, 580, 483, 388.96, 540, 425.5, 448.8, 463.05, 511.92,
      520.03, 539.79, 551.58, 570.01,
    ],
  },
  {
    nom: "Valles Centrales",
    fila: [
      579.24, 636.2, 256.53, 338.42, 314.06, 321.53, 315.25, 328.37, 341.17,
      361.48, 382.12, 370.69, 383.04, 361.95, 333.76
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
    volumen: 13071.11,
    superficie: 913.50,
    rendimiento: 14.26,
    valor: 89555809.14,
    cantidad: 11,
  },
  {
    region: "Costa",
    volumen: 2138.22,
    superficie: 85.75,
    rendimiento: 25.32,
    valor: 12637202.16,
    cantidad: 4,
  },
  {
    region: "Sierra de Flores Magón",
    volumen: 1673.72,
    superficie: 81.80,
    rendimiento: 20.47,
    valor: 12706450.20,
    cantidad: 11,
  },
  {
    region: "Sierra Sur",
    volumen: 570.01,
    superficie: 29.75,
    rendimiento: 19.16,
    valor: 3574555.51,
    cantidad: 1,
  },
  {
    region: "Valles Centrales",
    volumen: 333.76,
    superficie: 15.50,
    rendimiento: 21.84,
    valor: 3103097.74,
    cantidad: 3,
  },
  {
    region: "Mixteca",
    volumen: 108.57,
    superficie: 8.76,
    rendimiento: 12.31,
    valor: 854508.78,
    cantidad: 3,
  },
];

// Datos de producción por grupo indígena
// Primer array: nombres de pueblos indígenas y categoría "No es pueblo indígena"
// Segundo array: volumen producido en toneladas por cada grupo correspondiente
const pub_indigenas_producto = [
  [
    "No es pueblo indigena",
    "Zapoteco",
    "Huave",
    "Mixteco",
    "Mazateco",
    "Cuicateco",
  ],
  [8530.79, 5434.62, 1329.57, 1219.25, 1053.26, 327.9,],
];

// Datos de estacionalidad del producto por mes
// Cada número representa una medida relativa o índice de producción o actividad para cada mes del año,
// probablemente de enero (índice 0) a diciembre (índice 11)
const estacionalidad_producto = [90, 622, 272, 163, 96, 22, 0, 0, 0, 13, 40, 4];
