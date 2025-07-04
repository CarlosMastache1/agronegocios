// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  Papaloapan: [
    { id: 20044, superficie: 1554, volumen: 129374, nombre: "Loma Bonita" },
    {
      id: 20184,
      superficie: 610,
      volumen: 48190,
      nombre: "San Juan Bautista Tuxtepec",
    },
  ],
  Istmo: [
    { id: 20198, superficie: 13, volumen: 147, nombre: "San Juan Guichicovi" },
  ],
  "Sierra Sur": [
    {
      id: 20516,
      superficie: 5,
      volumen: 81,
      nombre: "Santo Domingo Teojomulco",
    },
    { id: 20448, superficie: 4, volumen: 72, nombre: "Santa María Zaniza" },
    { id: 20229, superficie: 3, volumen: 53, nombre: "San Lorenzo Texmelúcan" },
  ],
};

// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    id: "VER",
    entidad: "Veracruz",
    volumen: 840317,
    superficie: 38642,
    rendimiento: 46.41,
    valor: 3939416780,
  },
  {
    ranking: 2,
    id: "OAX",
    entidad: "Oaxaca",
    volumen: 177917,
    superficie: 2189,
    rendimiento: 47.16,
    valor: 1584329629,
  },
  {
    ranking: 3,
    id: "NAY",
    entidad: "Nayarit",
    volumen: 61739,
    superficie: 2018,
    rendimiento: 21.55,
    valor: 532724480,
  },
  {
    ranking: 4,
    id: "TAB",
    entidad: "Tabasco",
    volumen: 61040,
    superficie: 1680,
    rendimiento: 40.54,
    valor: 224602734,
  },
  {
    ranking: 5,
    id: "QR",
    entidad: "Quintana Roo",
    volumen: 52618,
    superficie: 892,
    rendimiento: 57.5,
    valor: 387571550,
  },
  {
    ranking: 6,
    id: "COL",
    entidad: "Colima",
    volumen: 36131,
    superficie: 472,
    rendimiento: 73.16,
    valor: 249381200,
  },
  {
    ranking: 7,
    id: "JAL",
    entidad: "Jalisco",
    volumen: 32133,
    superficie: 554,
    rendimiento: 38.92,
    valor: 315067728,
  },
  {
    ranking: 8,
    id: "CHS",
    entidad: "Chiapas",
    volumen: 7972,
    superficie: 368,
    rendimiento: 37.48,
    valor: 36595560,
  },
  {
    ranking: 9,
    id: "CAM",
    entidad: "Campeche",
    volumen: 1030,
    superficie: 43,
    rendimiento: 28.26,
    valor: 11445500,
  },
  {
    ranking: 10,
    id: "TAMP",
    entidad: "Tamaulipas",
    volumen: 563,
    superficie: 19,
    rendimiento: 35.09,
    valor: 4186667,
  },
  {
    ranking: 11,
    id: "GRO",
    entidad: "Guerrero",
    volumen: 504,
    superficie: 47,
    rendimiento: 12.58,
    valor: 3475992,
  },
  {
    ranking: 12,
    id: "HGO",
    entidad: "Hidalgo",
    volumen: 349,
    superficie: 8,
    rendimiento: 46.5,
    valor: 3576431,
  },
  {
    ranking: 13,
    id: "EM",
    entidad: "México",
    volumen: 128,
    superficie: 15,
    rendimiento: 8.5,
    valor: 1107975,
  },
  {
    ranking: 14,
    id: "YUC",
    entidad: "Yucatán",
    volumen: 121,
    superficie: 8,
    rendimiento: 20.2,
    valor: 848400,
  },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { id: "NGA", ranking: 1, pais: "Nigeria", superficie: 193290 },
  { id: "IND", ranking: 2, pais: "India", superficie: 108000 },
  { id: "CHN", ranking: 3, pais: "China", superficie: 76723 },
  { id: "THA", ranking: 4, pais: "Tailandia", superficie: 71518 },
  { id: "CHN", ranking: 5, pais: "China, Continental", superficie: 69000 },
  { id: "PHL", ranking: 6, pais: "Filipinas", superficie: 67722 },
  { id: "BRA", ranking: 7, pais: "Brasil", superficie: 64147 },
  { id: "CRI", ranking: 8, pais: "Costa Rica", superficie: 40000 },
  { id: "VNM", ranking: 9, pais: "Viet Nam", superficie: 39647 },
  { id: "AGO", ranking: 10, pais: "Angola", superficie: 36946 },
  { id: "MEX", ranking: 11, pais: "México", superficie: 25626 },
  { id: "IDN", ranking: 12, pais: "Indonesia", superficie: 24327 },
  { id: "COL", ranking: 13, pais: "Colombia", superficie: 22870 },
  { id: "VEN", ranking: 14, pais: "Venezuela", superficie: 22173 },
  { id: "PER", ranking: 15, pais: "Perú", superficie: 16830 },
  { ranking: "", pais: "Otros", superficie: 257109 },
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
