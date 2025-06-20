const regionesConMunicipios = {
  Papaloapan: [
    {
      id: 20136,
      territorio: "42",
      toneladas: "332",
    }, //San Felipe Usila
  ],
};

const estados_datos_pro = [
  { id: "PUE", territorio: "195", toneladas: "2,369" },
  { id: "OAX", territorio: "42", toneladas: "332" },
  { id: "GRO", territorio: "1", toneladas: "5" },
];

const paises_datos_pro = [
  //23
  {
    id: "IND",
    territorio: "193,000",
  },
  {
    id: "NGA",
    territorio: "96,120",
  },
  {
    id: "CHN",
    territorio: "125,770",
  },
  {
    id: "NPL",
    territorio: "22,441",
  },
  {
    id: "BGD",
    territorio: "10,429",
  },
  {
    id: "IDN",
    territorio: "10,409",
  },
  {
    id: "THA",
    territorio: "10,269",
  },
  {
    id: "PER",
    territorio: "8,001",
  },
  {
    id: "LKA",
    territorio: "6,736",
  },
  {
    id: "CMR",
    territorio: "5,087",
  },
  {
    id: "PHL",
    territorio: "4,057",
  },
  {
    id: "GUY",
    territorio: "3,877",
  },
  {
    id: "ETH",
    territorio: "3,657",
  },
  {
    id: "KOR",
    territorio: "3,455",
  },
  {
    id: "MLI",
    territorio: "3,121",
  },
  {
    id: "JPN",
    territorio: "1,830",
  },
  {
    id: "TWN",
    territorio: "854",
  },
  {
    id: "BTN",
    territorio: "800",
  },
  {
    id: "PAN",
    territorio: "650",
  },
  {
    id: "FJI",
    territorio: "563",
  },
  {
    id: "CIV",
    territorio: "536",
  },
  {
    id: "MEX",
    territorio: "433",
  },
];

/* DATOS DE LA TABLA Producción mundial (2022) */
const tab_pro_mundial = [
  { ranking: 1, pais: "India", superficie: 193000 },
  { ranking: 2, pais: "Nigeria", superficie: 96120 },
  { ranking: 3, pais: "China", superficie: 63312 },
  { ranking: 4, pais: "China, Continental", superficie: 62458 },
  { ranking: 5, pais: "Nepal", superficie: 22441 },
  { ranking: 6, pais: "Bangladesh", superficie: 10429 },
  { ranking: 7, pais: "Indonesia", superficie: 10409 },
  { ranking: 8, pais: "Tailandia", superficie: 10269 },
  { ranking: 9, pais: "Perú", superficie: 8001 },
  { ranking: 10, pais: "Sri Lanka", superficie: 6736 },
  { ranking: 11, pais: "Camerún", superficie: 5087 },
  { ranking: 12, pais: "Filipinas", superficie: 4057 },
  { ranking: 13, pais: "Guyana", superficie: 3877 },
  { ranking: 14, pais: "Etiopía", superficie: 3657 },
  { ranking: 15, pais: "República de Corea", superficie: 3455 },
  { ranking: 16, pais: "Malí", superficie: 3121 },
  { ranking: 17, pais: "Japón", superficie: 1830 },
  { ranking: 18, pais: "China, Taiwán", superficie: 854 },
  { ranking: 19, pais: "Bhután", superficie: 800 },
  { ranking: 20, pais: "Panamá", superficie: 650 },
  { ranking: 21, pais: "Fiji", superficie: 563 },
  { ranking: 22, pais: "Côte d'Ivoire", superficie: 536 },
  { ranking: 23, pais: "México", superficie: 433 },
  { ranking: "", pais: "Otros", superficie: 1863 },
];

/* DATOS DE LA TABLA Producción nacional (2022) */
const tab_pro_nacional = [
  {
    ranking: 1,
    entidad: "Puebla",
    volumen: 2369,
    superficie: 195,
    rendimiento: 11.93,
    valor: 49171129,
  },
  {
    ranking: 2,
    entidad: "Oaxaca",
    volumen: 332,
    superficie: 42,
    rendimiento: 7.9,
    valor: 4635263,
  },
  {
    ranking: 3,
    entidad: "Guerrero",
    volumen: 5,
    superficie: 1,
    rendimiento: 4.85,
    valor: 92084,
  },
];

/* Datos de la grafica balanza  */
/* Etiquetas para el periodo de tiempo usado en la grafica de balanza nacional */
const labels_balanza = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
];
/* Importaciones  */
const importacion_balanza = [
  105, 105, 141, 176, 77, 213, 787, 573, 256, 353, 456, 868, 656,
];

/* Exportaciones  */
const exportacion_balanza = [
  23, 40, 0, 65, 451, 124, 217, 221, 831, 1926, 1679, 974, 2249,
];

/* DATOS DE LA TABLA DESTINO DE LA EXPORTACIÓN 2023 POR PAÍS */
const tab_destino_exportacion = [
  {
    num: 1,
    pais: "Estados Unidos",
    valor: 13341159,
  },
  {
    num: 2,
    pais: "Canadá",
    valor: 845720,
  },
  {
    num: 3,
    pais: "Cuba",
    valor: 40,
  },
];

/* Datos grafica de la produccion historica */
/* etiquetas de tiempo  */
const labels_historica_producto = [2022, 2023];
/* Valores de la produccion por region */
const produccion_historica_producto = [
  {
    nom: "Papaloapan",
    fila: [713.4, 331.8],
  },
];

/* DATO DE LA TABLA PRODUCCION EN OAXACA	 */
const tabla_produccion_producto = [
  {
    region: "Papaloapan",
    volumen: 332,
    superficie: 42,
    rendimiento: 7.9,
    valor: 4635263,
    cantidad: 1,
  },
];

/* Datos grafica VOLUMEN DE PRODUCCION POR PUEBLO INDIGENA AGAVE */
const pub_indigenas_producto = [["Chinanteco"], [332]];

/* Datos Tabla MUNICIPIOS QUE PRODUCEN EN OAXACA */
const tab_mun_producto_oax = [{ nom: "Papaloapan", num: 1 }];
