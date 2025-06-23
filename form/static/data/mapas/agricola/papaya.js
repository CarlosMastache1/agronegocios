// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  Costa: [
    // Cada objeto representa un municipio de la región Costa con sus datos
    { id: 20334, territorio: "1,228", toneladas: "130,297" }, //Villa de Tututepec de Melchor Ocampo
    { id: 20482, territorio: "422", toneladas: "54,252" }, //Santiago Pinotepa Nacional
    { id: 20467, territorio: "342", toneladas: "42,379" }, //Santiago Jamiltepec
    { id: 20414, territorio: "164", toneladas: "21,149" }, //Santa María Huazolotitlán
    { id: 20413, territorio: "66", toneladas: "8,699" }, //Santa María Huatulco
    { id: 20439, territorio: "130", toneladas: "14,392" }, //Santa María Tonameca
    { id: 20319, territorio: "69", toneladas: "6,426" }, //San Pedro Mixtepec
    { id: 20401, territorio: "60", toneladas: "5,691" }, //Santa María Colotepec
    { id: 20090, territorio: "56", toneladas: "4,899" }, //San Andrés Huaxpaltepec
    { id: 20474, territorio: "35", toneladas: "3,613" }, //Santiago Llano Grande
    { id: 20266, territorio: "29", toneladas: "3,465" }, //San Miguel del Puerto
    { id: 20367, territorio: "31", toneladas: "1,702" }, //Santa Catarina Mechoacán
    { id: 20509, territorio: "21", toneladas: "1,397" }, //Santo Domingo de Morelos
    { id: 20180, territorio: "17", toneladas: "1,374" }, //San Juan Bautista Lo de Soto
    { id: 20485, territorio: "12", toneladas: "1,274" }, //Santiago Tapextla
  ],
  Istmo: [
    // Municipios de la región del Istmo con datos de producción
    { id: 20418, territorio: "40", toneladas: "3,766" }, //Santa María Jalapa del Marqués
    { id: 20421, territorio: "30", toneladas: "2,840" }, //Santa María Mixtequilla
    { id: 20307, territorio: "22", toneladas: "2,080" }, //San Pedro Huamelula
    { id: 20453, territorio: "19", toneladas: "1,792" }, //Santiago Astata
    { id: 20515, territorio: "13", toneladas: "1,131" }, //Santo Domingo Tehuantepec
    { id: 20525, territorio: "14", toneladas: "880" }, //Santo Domingo Zanatepec
    { id: 20052, territorio: "14", toneladas: "769" }, //Magdalena Tequisistlán
    { id: 20005, territorio: "4", toneladas: "257" }, //Asunción Ixtaltepec
  ],
  "Sierra Sur": [
    // Municipios de la región Sierra Sur
    { id: 20008, territorio: "12", toneladas: "598" }, //Asunción Tlacolulita
    { id: 20064, territorio: "9", toneladas: "492" }, //Nejapa de Madero
    { id: 20357, territorio: "9", toneladas: "440" }, //Santa Ana Tavela
  ],
  "Sierra de Flores Magón": [
    // Municipios de la región Sierra de Flores Magón
    { id: 20177, territorio: "10", toneladas: "400" }, //San Juan Bautista Cuicatlán
    { id: 20545, territorio: "9", toneladas: "325" }, //Teotitlán de Flores Magón
    { id: 20431, territorio: "8", toneladas: "306" }, //Santa María Tecomavaca
    { id: 20206, territorio: "4", toneladas: "159" }, //San Juan de Los Cués
    { id: 20558, territorio: "1", toneladas: "39" }, //Valerio Trujano
  ],
  Papaloapan: [
    // Un solo municipio reportado en esta región
    { id: 20002, territorio: "11", toneladas: "546" }, //Acatlán de Pérez Figueroa
  ],
  "Valles Centrales": [
    { id: 20449, territorio: "8", toneladas: "330" }, //Santa María Zoquitlán
    { id: 20333, territorio: "6", toneladas: "166" }, //San Pedro Totolápam
  ],
};

// Datos agregados por entidad federativa (estado) a nivel nacional
const estados_datos_pro = [
  { id: "OAX", territorio: "2,923", toneladas: "318,323" },
  { id: "COL", territorio: "3,706", toneladas: "204,924" },
  { id: "CHS", territorio: "2,078", toneladas: "160,252" },
  { id: "MICH", territorio: "3,585", toneladas: "122,421" },
  { id: "VER", territorio: "3,800", toneladas: "121,628" },
  { id: "GRO", territorio: "1,625", toneladas: "53,721" },
  { id: "JAL", territorio: "581", toneladas: "34,071" },
  { id: "SLP", territorio: "472", toneladas: "32,708" },
  { id: "TAMP", territorio: "385", toneladas: "24,999" },
  { id: "CAM", territorio: "319", toneladas: "15,233" },
  { id: "NAY", territorio: "350", toneladas: "12,755" },
  { id: "YUC", territorio: "206", toneladas: "12,039" },
  { id: "SIN", territorio: "424", toneladas: "11,086" },
  { id: "TAB", territorio: "142", toneladas: "7,795" },
  { id: "PUE", territorio: "188", toneladas: "6,582" },
  { id: "QR", territorio: "94", toneladas: "5,930" },
  { id: "MOR", territorio: "104", toneladas: "3,528" },
  { id: "BCS", territorio: "15", toneladas: "320" },
  { id: "EM", territorio: "21", toneladas: "233" },
];

//Datos por país: superficie cosechada
const paises_datos_pro = [
  //total de entradas
  { id: "NGA", territorio: "193,2900", toneladas: "" },
  { id: "IND", territorio: "150,000", toneladas: "" },
  { id: "BGD", territorio: "49,770", toneladas: "" },
  { id: "BRA", territorio: "26,431", toneladas: "" },
  { id: "MEX", territorio: "19,613", toneladas: "" },
  { id: "PER", territorio: "14,368", toneladas: "" },
  { id: "COD", territorio: "12,355", toneladas: "" },
  { id: "IDN", territorio: "11,208", toneladas: "" },
  { id: "CHN", territorio: "18,531", toneladas: "" },
  { id: "DOM", territorio: "10,022", toneladas: "" },
  { id: "VNM", territorio: "8,733", toneladas: "" },
  { id: "VEN", territorio: "8,453", toneladas: "" },
  { id: "PHL", territorio: "7,554", toneladas: "" },
  { id: "COL", territorio: "6,794", toneladas: "" },
  { id: "ETH", territorio: "6,078", toneladas: "" },
  { id: "KEN", territorio: "6,052", toneladas: "" },
  { id: "CIV", territorio: "5,925", toneladas: "" },
  { id: "MWI", territorio: "5,757", toneladas: "" },
  { id: "Cuba", territorio: "4,796", toneladas: "" },
  { id: "MLI", territorio: "4,495", toneladas: "" },
  { id: "MOZ", territorio: "4,312", toneladas: "" },
  { id: "THA", territorio: "4,135", toneladas: "" },
  { id: "ECU", territorio: "3,804", toneladas: "" },
  { id: "GTM", territorio: "2,906", toneladas: "" },
  { id: "LAO", territorio: "2,620", toneladas: "" },
  { id: "TWN", territorio: "2,531", toneladas: "" },
  { id: "BOL", territorio: "2,339", toneladas: "" },
  { id: "MYS", territorio: "2,255", toneladas: "" },
  { id: "PAK", territorio: "1,677", toneladas: "" },
  { id: "GHA", territorio: "1,619", toneladas: "" },
  { id: "YEM", territorio: "1,610", toneladas: "" },
  { id: "HTI", territorio: "1,440", toneladas: "" },
  { id: "NPL", territorio: "1,325", toneladas: "" },
  { id: "PRY", territorio: "1,115", toneladas: "" },
  { id: "CRI", territorio: "1,010", toneladas: "" },
  { id: "ZAF", territorio: "913", toneladas: "" },
  { id: "AUS", territorio: "904", toneladas: "" },
  { id: "FJI", territorio: "898", toneladas: "" },
  { id: "PAN", territorio: "577", toneladas: "" },
  { id: "JAM", territorio: "568", toneladas: "" },
  { id: "GNB", territorio: "327", toneladas: "" },
  { id: "GUY", territorio: "305", toneladas: "" },
  { id: "OMN", territorio: "395", toneladas: "" },
  { id: "ISR", territorio: "267", toneladas: "" },
  { id: "WSM", territorio: "12", toneladas: "" },
  { id: "PRI", territorio: "228", toneladas: "" },
  { id: "COG", territorio: "225", toneladas: "" },
  { id: "SAU", territorio: "220", toneladas: "" },
  { id: "USA", territorio: "202", toneladas: "" },
  { id: "ARG", territorio: "201", toneladas: "" },
  { id: "CHL", territorio: "136", toneladas: "" },
  { id: "TLS", territorio: "95", toneladas: "" },
  { id: "SLV", territorio: "74", toneladas: "" },
  { id: "COK", territorio: "70", toneladas: "" },
  { id: "TTO", territorio: "64", toneladas: "" },
  { id: "RWA", territorio: "57", toneladas: "" },
  { id: "MAR", territorio: "55", toneladas: "" },
  { id: "BHS", territorio: "37", toneladas: "" },
  { id: "BTN", territorio: "32", toneladas: "" },
  { id: "IRN", territorio: "28", toneladas: "" },
  { id: "BLZ", territorio: "23", toneladas: "" },
  { id: "SUR", territorio: "15", toneladas: "" },
  { id: "MDV", territorio: "13", toneladas: "" },
  { id: "ZWE", territorio: "13", toneladas: "" },
  { id: "HND", territorio: "12", toneladas: "" },
  { id: "DOM", territorio: "6", toneladas: "" },
  { id: "GRD", territorio: "0", toneladas: "" },
  { id: "NRU", territorio: "0", toneladas: "" },
  { id: "SGP", territorio: "0", toneladas: "" },
  { id: "CMR", territorio: "0", toneladas: "" },
  { id: "TUN", territorio: "0", toneladas: "" },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { ranking: 1, pais: "India", superficie: 150000 },
  { ranking: 2, pais: "Nigeria", superficie: 95052 },
  { ranking: 3, pais: "Bangladesh", superficie: 49770 },
  { ranking: 4, pais: "Brasil", superficie: 26431 },
  { ranking: 5, pais: "México", superficie: 19613 },
  { ranking: 6, pais: "Perú", superficie: 14368 },
  { ranking: 7, pais: "República Democrática del Congo", superficie: 12355 },
  { ranking: 8, pais: "Indonesia", superficie: 11208 },
  { ranking: 9, pais: "China", superficie: 10531 },
  { ranking: 10, pais: "República Dominicana", superficie: 10022 },
  { ranking: 11, pais: "Viet Nam", superficie: 8733 },
  {
    ranking: 12,
    pais: "Venezuela (República Bolivariana de)",
    superficie: 8453,
  },
  { ranking: 13, pais: "China, Continental", superficie: 8000 },
  { ranking: 14, pais: "Filipinas", superficie: 7554 },
  { ranking: 15, pais: "Colombia", superficie: 6794 },
  { ranking: 16, pais: "Etiopía", superficie: 6078 },
  { ranking: 17, pais: "Kenya", superficie: 6052 },
  { ranking: 18, pais: "Côte d'Ivoire", superficie: 5925 },
  { ranking: 19, pais: "Malawi", superficie: 5757 },
  { ranking: 20, pais: "Cuba", superficie: 4796 },
  { ranking: 21, pais: "Malí", superficie: 4495 },
  { ranking: 22, pais: "Mozambique", superficie: 4312 },
  { ranking: 23, pais: "Tailandia", superficie: 4135 },
  { ranking: 24, pais: "Ecuador", superficie: 3804 },
  { ranking: 25, pais: "Guatemala", superficie: 2906 },
  { ranking: 26, pais: "República Democrática Popular Lao", superficie: 2620 },
  { ranking: 27, pais: "China, Taiwán provincia de", superficie: 2531 },
  { ranking: 28, pais: "Bolivia (Estado Plurinacional de)", superficie: 2339 },
  { ranking: 29, pais: "Malasia", superficie: 2255 },
  { ranking: 30, pais: "Pakistán", superficie: 1677 },
  { ranking: 31, pais: "Ghana", superficie: 1619 },
  { ranking: 32, pais: "Yemen", superficie: 1610 },
  { ranking: 33, pais: "Haití", superficie: 1440 },
  { ranking: 34, pais: "Nepal", superficie: 1325 },
  { ranking: 35, pais: "Paraguay", superficie: 1115 },
  { ranking: 36, pais: "Costa Rica", superficie: 1010 },
  { ranking: 37, pais: "Sudáfrica", superficie: 913 },
  { ranking: 38, pais: "Australia", superficie: 904 },
  { ranking: 39, pais: "Fiji", superficie: 898 },
  { ranking: 40, pais: "Panamá", superficie: 577 },
  { ranking: 41, pais: "Jamaica", superficie: 568 },
  { ranking: 42, pais: "Guinea-Bissau", superficie: 327 },
  { ranking: 43, pais: "Guyana", superficie: 305 },
  { ranking: 44, pais: "Omán", superficie: 295 },
  { ranking: 45, pais: "Israel", superficie: 267 },
  { ranking: 46, pais: "Samoa", superficie: 241 },
  { ranking: 47, pais: "Puerto Rico", superficie: 228 },
  { ranking: 48, pais: "Congo", superficie: 225 },
  { ranking: 49, pais: "Arabia Saudita", superficie: 220 },
  { ranking: 50, pais: "Estados Unidos de América", superficie: 202 },
  { ranking: 51, pais: "Argentina", superficie: 201 },
  { ranking: 52, pais: "Chile", superficie: 136 },
  { ranking: 53, pais: "Timor-Leste", superficie: 95 },
  { ranking: 54, pais: "El Salvador", superficie: 74 },
  { ranking: 55, pais: "Islas Cook", superficie: 70 },
  { ranking: 56, pais: "Trinidad y Tabago", superficie: 64 },
  { ranking: 57, pais: "Rwanda", superficie: 57 },
  { ranking: 58, pais: "Marruecos", superficie: 55 },
  { ranking: 59, pais: "Bahamas", superficie: 37 },
  { ranking: 60, pais: "Bután", superficie: 32 },
  { ranking: 61, pais: "Irán (República Islámica del)", superficie: 28 },
  { ranking: 62, pais: "Belice", superficie: 23 },
  { ranking: 63, pais: "Suriname", superficie: 15 },
  { ranking: 64, pais: "Maldivas", superficie: 13 },
  { ranking: 65, pais: "Zimbabwe", superficie: 13 },
  { ranking: 66, pais: "Honduras", superficie: 12 },
  { ranking: 67, pais: "Dominica", superficie: 6 },
  { ranking: 68, pais: "Granada", superficie: 0 },
  { ranking: 69, pais: "Nauru", superficie: 0 },
  { ranking: 70, pais: "Singapur", superficie: 0 },
  { ranking: 71, pais: "Camerún", superficie: 0 },
  { ranking: 72, pais: "Túnez", superficie: 0 },
];

// Tabla de producción estatal 
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    entidad: "Oaxaca",
    volumen: 318323,
    superficie: 2923,
    rendimiento: 84.54,
    valor: 1927827104,
  },
  {
    ranking: 2,
    entidad: "Colima",
    volumen: 204924,
    superficie: 3706,
    rendimiento: 57.31,
    valor: 1588411496,
  },
  {
    ranking: 3,
    entidad: "Chiapas",
    volumen: 160252,
    superficie: 2078,
    rendimiento: 79.29,
    valor: 825823431,
  },
  {
    ranking: 4,
    entidad: "Michoacán",
    volumen: 122421,
    superficie: 3585,
    rendimiento: 40.74,
    valor: 852083156,
  },
  {
    ranking: 5,
    entidad: "Veracruz",
    volumen: 121628,
    superficie: 3800,
    rendimiento: 29.33,
    valor: 583646496,
  },
  {
    ranking: 6,
    entidad: "Guerrero",
    volumen: 53721,
    superficie: 1625,
    rendimiento: 28.7,
    valor: 444854172,
  },
  {
    ranking: 7,
    entidad: "Jalisco",
    volumen: 34071,
    superficie: 581,
    rendimiento: 49.31,
    valor: 375058437,
  },
  {
    ranking: 8,
    entidad: "San Luis Potosí",
    volumen: 32708,
    superficie: 472,
    rendimiento: 68.38,
    valor: 211594767,
  },
  {
    ranking: 9,
    entidad: "Tamaulipas",
    volumen: 24999,
    superficie: 385,
    rendimiento: 54.24,
    valor: 302792280,
  },
  {
    ranking: 10,
    entidad: "Campeche",
    volumen: 15233,
    superficie: 319,
    rendimiento: 49.07,
    valor: 122854858,
  },
  {
    ranking: 11,
    entidad: "Nayarit",
    volumen: 12755,
    superficie: 350,
    rendimiento: 32.32,
    valor: 87104477,
  },
  {
    ranking: 12,
    entidad: "Yucatán",
    volumen: 12039,
    superficie: 206,
    rendimiento: 53.71,
    valor: 84348452,
  },
  {
    ranking: 13,
    entidad: "Sinaloa",
    volumen: 11086,
    superficie: 424,
    rendimiento: 19.46,
    valor: 66544369,
  },
  {
    ranking: 14,
    entidad: "Tabasco",
    volumen: 7795,
    superficie: 142,
    rendimiento: 47.0,
    valor: 33051859,
  },
  {
    ranking: 15,
    entidad: "Puebla",
    volumen: 6582,
    superficie: 188,
    rendimiento: 32.32,
    valor: 33562746,
  },
  {
    ranking: 16,
    entidad: "Quintana Roo",
    volumen: 5930,
    superficie: 94,
    rendimiento: 81.6,
    valor: 39089709,
  },
  {
    ranking: 17,
    entidad: "Morelos",
    volumen: 3528,
    superficie: 104,
    rendimiento: 33.65,
    valor: 22445922,
  },
  {
    ranking: 18,
    entidad: "Baja California Sur",
    volumen: 320,
    superficie: 15,
    rendimiento: 31.95,
    valor: 2132330,
  },
  {
    ranking: 19,
    entidad: "México",
    volumen: 233,
    superficie: 21,
    rendimiento: 16.2,
    valor: 1994185,
  },
];

// Años de referencia para los datos de balanza comercial
const labels_balanza = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
];

// Valores anuales de importación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las importaciones del producto
const importacion_balanza = [264, 152, 71, 9];

// Valores anuales de exportación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las exportaciones del producto
const exportacion_balanza = [
  120635, 104797, 108425, 115054, 131308, 146202, 168703, 162867, 155014,
  160841, 167356, 183558, 201004,
];

// Tabla de los principales destinos de exportación
// Cada objeto representa un país y el valor (en USD) de exportaciones realizadas hacia ese país
const tab_destino_exportacion = [
  { num: 1, pais: "Canadá y Estados Unidos", valor: 65133681 },
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
    fila: [
      642.3, 605.85, 976.93, 830.13, 2698.46, 2190.38, 808.06, 882.16, 1005.85,
      1032.41, 1007.52, 1224.29, 1033.72, 1229.1,
    ],
  },
  {
    nom: "Costa",
    fila: [
      102245.05, 101491.5, 112635.4, 199746.23, 259379.68, 260114, 307403.2,
      275888.5, 299325.92, 308227.87, 334219.24, 337487.21, 350195.05,
      301009.35,
    ],
  },
  {
    nom: "Istmo",
    fila: [
      8795.72, 7955.1, 4622.85, 9793.52, 8848.7, 9993.05, 10507.47, 9441.76,
      11888.64, 12225.87, 12014.28, 12421.02, 13369.68, 13513.68,
    ],
  },
  {
    nom: "Mixteca",
    fila: [743.2, 666, 760, 520, 402, 290.5],
  },
  {
    nom: "Papaloapan",
    fila: [
      930, 0, 487.5, 547.5, 252, 259, 514, 612, 620.3, 490.4, 371.4, 517.31,
      604.69, 545.63,
    ],
  },
  {
    nom: "Sierra de Juárez",
    fila: [
      1215.5, 1181.8, 2614, 997.52, 968.99, 942.94, 1154.05, 645, 1236.5,
      1081.3, 1249.73, 1521.67, 1523.44, 1529.14,
    ],
  },
  {
    nom: "Valles Centrales",
    fila: [
      2385.84, 1805, 594.07, 731.85, 730.63, 735.53, 791.1, 690.18, 636.28,
      556.58, 647.07, 536.53, 426.61, 495.79,
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
    region: "Costa",
    volumen: 301009, // Total toneladas producidas en la región Costa
    superficie: 2681, // Total hectáreas sembradas
    rendimiento: 116.01, // Toneladas por hectárea (alta productividad)
    valor: 1813554906, // Valor económico total de la producción
    cantidad: 16, // Número de municipios/productores considerados
  },
  {
    region: "Istmo",
    volumen: 13514,
    superficie: 156,
    rendimiento: 80.7,
    valor: 88310004,
    cantidad: 8,
  },
  {
    region: "Sierra Sur",
    volumen: 1529,
    superficie: 29,
    rendimiento: 52.78,
    valor: 10268470,
    cantidad: 3,
  },
  {
    region: "Sierra de Flores Magón",
    volumen: 1229,
    superficie: 32,
    rendimiento: 38.63,
    valor: 8089762,
    cantidad: 5,
  },
  {
    region: "Papaloapan",
    volumen: 546,
    superficie: 11,
    rendimiento: 44.1,
    valor: 3780264,
    cantidad: 1,
  },
  {
    region: "Valles Centrales",
    volumen: 496,
    superficie: 14,
    rendimiento: 50.9,
    valor: 3823696,
    cantidad: 2,
  },
];

// Datos de producción por grupo indígena
// Primer array: nombres de pueblos indígenas y categoría "No es pueblo indígena"
// Segundo array: volumen producido en toneladas por cada grupo correspondiente
const pub_indigenas_producto = [
  [
    "No es pueblo indigena", // Producción fuera de comunidades indígenas
    "Mixteco",
    "Zapoteco",
    "Chatino",
    "Chontal De Oaxaca",
    "Mazateco",
    "Zoque",
    "Mixe",
    "Cuicateco",
    "Nahua",
  ],
  [
    149463, // Producción toneladas para "No es pueblo indigena"
    124421, // Mixteco
    30756, // Zapoteco
    6426, // Chatino
    3872, // Chontal De Oaxaca
    1011, // Mazateco
    880, // Zoque
    769, // Mixe
    400, // Cuicateco
    325, // Nahua
  ],
];

// Datos de estacionalidad del producto por mes
// Cada número representa una medida relativa o índice de producción o actividad para cada mes del año,
// probablemente de enero (índice 0) a diciembre (índice 11)
const estacionalidad_producto = [
  93, // Enero
  121, // Febrero
  152, // Marzo
  102, // Abril
  140, // Mayo
  102, // Junio
  156, // Julio
  146, // Agosto
  293, // Septiembre (máximo pico)
  152, // Octubre
  167, // Noviembre
  168, // Diciembre
];

// Número de municipios productores por región en Oaxaca
// Cada objeto indica la región y la cantidad de municipios que participan en la producción del producto
const tab_mun_producto_oax = [
  { nom: "Costa", num: 16 }, // 16 municipios productores en la región Costa
  { nom: "Istmo", num: 8 }, // 8 municipios productores en la región Istmo
  { nom: "Sierra Sur", num: 3 }, // 3 municipios productores en Sierra Sur
  { nom: "Sierra de Flores Magón", num: 5 }, // 5 municipios productores en Sierra de Flores Magón
  { nom: "Papaloapan", num: 1 }, // 1 municipio productor en Papaloapan
  { nom: "Valles Centrales", num: 2 }, // 2 municipios productores en Valles Centrales
];
