// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  Papaloapam: [
    { id: 20044, superficie: 1587.00, volumen: 135525.90, nombre: "Loma Bonita" },
    { id: 20184, superficie: 625.00, volumen: 52575.00, nombre: "San Juan Bautista Tuxtepec" }
  ],
  Istmo: [
    { id: 20198, superficie: 9.00, volumen: 139.20, nombre: "San Juan Guichicovi" }
  ],
  "Sierra Sur": [
    { id: 20516, superficie: 4.05, volumen: 68.15, nombre: "Santo Domingo Teojomulco" },
    { id: 20229, superficie: 2.45, volumen: 36.23, nombre: "San Lorenzo Texmelúcan" },
    { id: 20448, superficie: 2.45, volumen: 41.52, nombre: "Santa María Zaniza" }
  ]
};
// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    id: "VER",
    entidad: "Veracruz",
    volumen: 841360.26,
    superficie: 38784.87,
    rendimiento: 46.44,
    valor: 4220235549.51,
  },
  {
    ranking: 2,
    id: "OAX",
    entidad: "Oaxaca",
    volumen: 188386.00,
    superficie: 2229.95,
    rendimiento: 56.38,
    valor: 1292225317.55,
  },
  {
    ranking: 3,
    id: "NAY",
    entidad: "Nayarit",
    volumen: 74735.20,
    superficie: 2025.00,
    rendimiento: 26.59,
    valor: 473809328.37,
  },
  {
    ranking: 4,
    id: "TAB",
    entidad: "Tabasco",
    volumen: 61022.85,
    superficie: 1680.00,
    rendimiento: 40.53,
    valor: 224605255.80,
  },
  {
    ranking: 5,
    id: "QR",
    entidad: "Quintana Roo",
    volumen: 45230.70,
    superficie: 880.00,
    rendimiento: 50.07,
    valor: 367262217.32,
  },
  {
    ranking: 6,
    id: "COL",
    entidad: "Colima",
    volumen: 36833.37,
    superficie: 473.92,
    rendimiento: 73.17,
    valor: 256745367.46,
  },
  {
    ranking: 7,
    id: "JAL",
    entidad: "Jalisco",
    volumen: 34419.54,
    superficie: 571.00,
    rendimiento: 47.39,
    valor: 289350460.66,
  },
  {
    ranking: 8,
    id: "CHS",
    entidad: "Chiapas",
    volumen: 8022.87,
    superficie: 368.00,
    rendimiento: 37.64,
    valor: 37563330.13,
  },
  {
    ranking: 9,
    id: "CAM",
    entidad: "Campeche",
    volumen: 1200.28,
    superficie: 43.00,
    rendimiento: 20.59,
    valor: 10210684.86,
  },
  {
    ranking: 10,
    id: "GRO",
    entidad: "Guerrero",
    volumen: 483.82,
    superficie: 46.50,
    rendimiento: 13.04,
    valor: 3377821.40,
  },
  {
    ranking: 11,
    id: "TAMP",
    entidad: "Tamaulipas",
    volumen: 356.25,
    superficie: 10.50,
    rendimiento: 37.50,
    valor: 3382501.13,
  },
  {
    ranking: 12,
    id: "HGO",
    entidad: "Hidalgo",
    volumen: 345.75,
    superficie: 7.50,
    rendimiento: 46.10,
    valor: 3550852.50,
  },
  {
    ranking: 13,
    id: "EM",
    entidad: "México",
    volumen: 125.40,
    superficie: 15.00,
    rendimiento: 8.36,
    valor: 1087218.00,
  },
  {
    ranking: 14,
    id: "YUC",
    entidad: "Yucatán",
    volumen: 122.40,
    superficie: 6.00,
    rendimiento: 20.40,
    valor: 871080.41,
  },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { id: "AGO", ranking: 1, pais: "Angola", superficie: 196840 },
  { id: "ATG", ranking: 2, pais: "Antigua y Barbuda", superficie: 108000 },
  { id: "ARG", ranking: 3, pais: "Argentina", superficie: 78226 },
  { id: "AUS", ranking: 4, pais: "Australia", superficie: 71008 },
  { id: "BGD", ranking: 5, pais: "Bangladesh", superficie: 69149 },
  { id: "BLZ", ranking: 6, pais: "Belice", superficie: 63943 },
  { id: "BEN", ranking: 7, pais: "Benin", superficie: 54586 },
  { id: "BTN", ranking: 8, pais: "Bután", superficie: 41620 },
  { id: "BOL", ranking: 9, pais: "Bolivia (Estado Plurinacional de)", superficie: 40000 },
  { id: "BRA", ranking: 10, pais: "Brasil", superficie: 38067 },
  { id: "BRN", ranking: 11, pais: "Brunei Darussalam", superficie: 25960 },
  { id: "KHM", ranking: 12, pais: "Camboya", superficie: 23550 },
  { id: "CMR", ranking: 13, pais: "Camerún", superficie: 22553 },
  { id: "CHN", ranking: 14, pais: "China", superficie: 22526 },
  { id: "CHN", ranking: 15, pais: "China, Continental", superficie: 18136 },
  { id: "TWN", ranking: 16, pais: "China, Taiwán provincia de", superficie: 17222 },
  { id: "COL", ranking: 17, pais: "Colombia", superficie: 16851 },
  { id: "COG", ranking: 18, pais: "Congo", superficie: 16435 },
  { id: "CRI", ranking: 19, pais: "Costa Rica", superficie: 15696 },
  { id: "CIV", ranking: 20, pais: "Côte d'Ivoire", superficie: 13726 },
  { id: "CUB", ranking: 21, pais: "Cuba", superficie: 13143 },
  { id: "DMA", ranking: 22, pais: "Dominica", superficie: 11854 },
  { id: "ECU", ranking: 23, pais: "Ecuador", superficie: 11015 },
  { id: "SLV", ranking: 24, pais: "El Salvador", superficie: 10667 },
  { id: "USA", ranking: 25, pais: "Estados Unidos de América", superficie: 10196 },
  { id: "MEX", ranking: 52, pais: "México", superficie: 1021 },
  { ranking: "", pais: "Otros", superficie: 121701 },
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
  2023, 2024
];

// Producción histórica (en toneladas) por región desde 2010 hasta 2023
// Cada objeto contiene el nombre de una region('nom') y arreglo ('fila')
const produccion_historica_producto = [
  {
    nom: "Costa",
    fila: [3100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    nom: "Istmo",
    fila: [
      0, 420, 293.1, 105, 148, 72, 43, 86.8, 110, 83, 70.35, 93.68, 112.34,
      146.63, 139.2,
    ],
  },
  {
    nom: "Papaloapan",
    fila: [
      101012.03, 97779.84, 102306, 106666.5, 107373, 112176, 111484, 129955,
      139331.5, 144915, 155993.1, 168981.78, 167459.09, 177564.25, 188100.9,
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [
      573.4, 505.82, 516.74, 373.5, 314.22, 324.54, 398.56, 394.79, 425.62,
      419.34, 415.35, 364.5, 323.37, 205.64, 145.9,
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
    volumen: 188100.90,
    superficie: 2212.00,
    rendimiento: 84.31,
    valor: 1290550294.50,
    cantidad: 5,
  },
  {
    region: "Sierra Sur",
    volumen: 145.90,
    superficie: 8.95,
    rendimiento: 20.91,
    valor: 750877.03,
    cantidad: 3,
  },
  {
    region: "Istmo",
    volumen: 139.20,
    superficie: 9.00,
    rendimiento: 23.20,
    valor: 924146.02,
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
    "Mixe"
  ],
  [135594.05, 52575, 77.75, 139.2],
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
