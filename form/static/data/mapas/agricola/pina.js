// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  Papaloapan: [
    { id: 20044, territorio: "1,554", toneladas: "129,374" },
    { id: 20184, territorio: "610", toneladas: "48,190" },
  ],
  Istmo: [{ id: 20198, territorio: "13", toneladas: "147" }],
  "Sierra Sur": [
    { id: 20516, territorio: "5", toneladas: "81" },
    { id: 20448, territorio: "4", toneladas: "72" },
    { id: 20229, territorio: "3", toneladas: "53" },
  ],
};

// Datos agregados por entidad federativa (estado) a nivel nacional
const estados_datos_pro = [
  { id: "VER", territorio: "38,642", toneladas: "840,317" },
  { id: "OAX", territorio: "2,189", toneladas: "177,917" },
  { id: "NAY", territorio: "2,018", toneladas: "61,739" },
  { id: "TAB", territorio: "1,680", toneladas: "61,040" },
  { id: "QR", territorio: "892", toneladas: "52,618" },
  { id: "COL", territorio: "472", toneladas: "36,131" },
  { id: "JAL", territorio: "554", toneladas: "32,133" },
  { id: "CHS", territorio: "368", toneladas: "7,972" },
  { id: "CAM", territorio: "43", toneladas: "1,030" },
  { id: "TAMP", territorio: "19", toneladas: "563" },
  { id: "GRO", territorio: "47", toneladas: "504" },
  { id: "HGO", territorio: "8", toneladas: "349" },
  { id: "EM", territorio: "15", toneladas: "128" },
  { id: "YUC", territorio: "8", toneladas: "121" },
];

//Datos por país: superficie cosechada
const paises_datos_pro = [
  //15
  { id: "NGA", territorio: "193,2900" },
  { id: "IND", territorio: "108,000" },
  { id: "CHN", territorio: "76,723" },
  { id: "THA", territorio: "71,518" },
  { id: "PHL", territorio: "67,722" },
  { id: "BRA", territorio: "64,147" },
  { id: "CRI", territorio: "40,000" },
  { id: "VNM", territorio: "39,647" },
  { id: "AGO", territorio: "36,946" },
  { id: "MEX", territorio: "25,626" },
  { id: "IDN", territorio: "24,327" },
  { id: "COL", territorio: "22,870" },
  { id: "VEN", territorio: "22,173" },
  { id: "PER", territorio: "16,830" },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { ranking: 1, pais: "Nigeria", superficie: 193290 },
  { ranking: 2, pais: "India", superficie: 108000 },
  { ranking: 3, pais: "China", superficie: 76723 },
  { ranking: 4, pais: "Tailandia", superficie: 71518 },
  { ranking: 5, pais: "China, Continental", superficie: 69000 },
  { ranking: 6, pais: "Filipinas", superficie: 67722 },
  { ranking: 7, pais: "Brasil", superficie: 64147 },
  { ranking: 8, pais: "Costa Rica", superficie: 40000 },
  { ranking: 9, pais: "Viet Nam", superficie: 39647 },
  { ranking: 10, pais: "Angola", superficie: 36946 },
  { ranking: 11, pais: "México", superficie: 25626 },
  { ranking: 12, pais: "Indonesia", superficie: 24327 },
  { ranking: 13, pais: "Colombia", superficie: 22870 },
  { ranking: 14, pais: "Venezuela", superficie: 22173 },
  { ranking: 15, pais: "Perú", superficie: 16830 },
  { ranking: "", pais: "Otros", superficie: 257109 },
];

// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    entidad: "Veracruz",
    volumen: 840317,
    superficie: 38642,
    rendimiento: 46.41,
    valor: 3939416780,
  },
  {
    ranking: 2,
    entidad: "Oaxaca",
    volumen: 177917,
    superficie: 2189,
    rendimiento: 47.16,
    valor: 1584329629,
  },
  {
    ranking: 3,
    entidad: "Nayarit",
    volumen: 61739,
    superficie: 2018,
    rendimiento: 21.55,
    valor: 532724480,
  },
  {
    ranking: 4,
    entidad: "Tabasco",
    volumen: 61040,
    superficie: 1680,
    rendimiento: 40.54,
    valor: 224602734,
  },
  {
    ranking: 5,
    entidad: "Quintana Roo",
    volumen: 52618,
    superficie: 892,
    rendimiento: 57.5,
    valor: 387571550,
  },
  {
    ranking: 6,
    entidad: "Colima",
    volumen: 36131,
    superficie: 472,
    rendimiento: 73.16,
    valor: 249381200,
  },
  {
    ranking: 7,
    entidad: "Jalisco",
    volumen: 32133,
    superficie: 554,
    rendimiento: 38.92,
    valor: 315067728,
  },
  {
    ranking: 8,
    entidad: "Chiapas",
    volumen: 7972,
    superficie: 368,
    rendimiento: 37.48,
    valor: 36595560,
  },
  {
    ranking: 9,
    entidad: "Campeche",
    volumen: 1030,
    superficie: 43,
    rendimiento: 28.26,
    valor: 11445500,
  },
  {
    ranking: 10,
    entidad: "Tamaulipas",
    volumen: 563,
    superficie: 19,
    rendimiento: 35.09,
    valor: 4186667,
  },
  {
    ranking: 11,
    entidad: "Guerrero",
    volumen: 504,
    superficie: 47,
    rendimiento: 12.58,
    valor: 3475992,
  },
  {
    ranking: 12,
    entidad: "Hidalgo",
    volumen: 349,
    superficie: 8,
    rendimiento: 46.5,
    valor: 3576431,
  },
  {
    ranking: 13,
    entidad: "México",
    volumen: 128,
    superficie: 15,
    rendimiento: 8.5,
    valor: 1107975,
  },
  {
    ranking: 14,
    entidad: "Yucatán",
    volumen: 121,
    superficie: 8,
    rendimiento: 20.2,
    valor: 848400,
  },
];

// Años de referencia para los datos de balanza comercial
const labels_balanza = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
];

// Valores anuales de importación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las importaciones del producto
const importacion_balanza = [
  368,
  685,
  1019,
  1035,
  760,
  511,
  1258,
  263,
  494,
  422,
  ,
  ,
  56,
];

// Valores anuales de exportación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las exportaciones del producto
const exportacion_balanza = [
  53648, 38069, 56405, 56997, 41271, 76987, 86267, 87476, 75217, 60748, 41517,
  27233, 27241,
];

// Tabla de los principales destinos de exportación
// Cada objeto representa un país y el valor (en USD) de exportaciones realizadas hacia ese país
const tab_destino_exportacion = [
  { num: 1, pais: "Estados Unidos", valor: 15954395 },
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
    fila: [3100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    nom: "Istmo",
    fila: [
      0, 420, 293.1, 105, 148, 72, 43, 86.8, 110, 83, 70.35, 93.68, 112.34,
      146.63,
    ],
  },
  {
    nom: "Papaloapan",
    fila: [
      101012.03, 97779.84, 102306, 106666.5, 107373, 112176, 111484, 129955,
      139331.5, 144915, 155993.1, 168981.78, 167459.09, 177564.25,
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [
      573.4, 505.82, 516.74, 373.5, 314.22, 324.54, 398.56, 394.79, 425.62,
      419.34, 415.35, 364.5, 323.37, 205.64,
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
    volumen: 177564,
    superficie: 2164,
    rendimiento: 81.52,
    valor: 1582455090,
    cantidad: 2,
  },
  {
    region: "Sierra Sur",
    volumen: 206,
    superficie: 12,
    rendimiento: 20.63,
    valor: 973471,
    cantidad: 3,
  },
  {
    region: "Istmo",
    volumen: 147,
    superficie: 13,
    rendimiento: 23.65,
    valor: 901068,
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
    "Zapoteco",
  ],
  [81, 177564, 271],
];

// Datos de estacionalidad del producto por mes
// Cada número representa una medida relativa o índice de producción o actividad para cada mes del año,
// probablemente de enero (índice 0) a diciembre (índice 11)
const estacionalidad_producto = [
  66, 67, 229, 401, 279, 163, 193, 153, 39, 43, 185, 177,
];

// Número de municipios productores por región en Oaxaca
// Cada objeto indica la región y la cantidad de municipios que participan en la producción del producto
const tab_mun_producto_oax = [
  { nom: "Papaloapan", num: 2 },
  { nom: "Sierra Sur", num: 3 },
  { nom: "Istmo", num: 1 },
];
