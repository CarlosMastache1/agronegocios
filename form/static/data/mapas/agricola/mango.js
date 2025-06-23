// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  //60
  "Sierra de Flores Magón": [
    //6
    { id: 20206, territorio: "23", toneladas: "103" }, // San Juan de Los Cués
    { id: 20244, territorio: "36", toneladas: "159" }, // San Martín Toxpalan

    { id: 20431, territorio: "4", toneladas: "18" }, // Santa María Tecomavaca

    { id: 20545, territorio: "61", toneladas: "291" }, // Teotitlán de Flores Magón

    { id: 20177, territorio: "519", toneladas: "2,554" }, // San Juan Bautista Cuicatlán

    { id: 20558, territorio: "42", toneladas: "183" }, // Valerio Trujano
  ],
  Costa: [
    //21
    { id: 20070, territorio: "7", toneladas: "50" }, // Pinotepa de Don Luis
    { id: 20090, territorio: "16", toneladas: "124" }, // San Andrés Huaxpaltepec
    { id: 20180, territorio: "21", toneladas: "170" }, // San Juan Bautista Lo de Soto
    { id: 20185, territorio: "16", toneladas: "142" }, // San Juan Cacahuatepec
    { id: 20188, territorio: "9", toneladas: "72" }, // San Juan Colorado
    { id: 20226, territorio: "8", toneladas: "70" }, // San Lorenzo
    { id: 20285, territorio: "8", toneladas: "52" }, // San Miguel Tlacamama
    { id: 20302, territorio: "4", toneladas: "15" }, // San Pedro Atoyac
    { id: 20312, territorio: "6", toneladas: "40" }, // San Pedro Jicayán
    { id: 20345, territorio: "18", toneladas: "203" }, // San Sebastián Ixcapa
    { id: 20367, territorio: "7", toneladas: "36" }, // Santa Catarina Mechoacán
    { id: 20402, territorio: "10", toneladas: "71" }, // Santa María Cortijo
    { id: 20414, territorio: "123", toneladas: "1,438" }, // Santa María Huazolotitlán
    { id: 20466, territorio: "5", toneladas: "31" }, // Santiago Ixtayutla
    { id: 20467, territorio: "438", toneladas: "5,406" }, // Santiago Jamiltepec
    { id: 20482, territorio: "47", toneladas: "440" }, // Santiago Pinotepa Nacional
    { id: 20489, territorio: "8", toneladas: "56" }, // Santiago Tetepec
    { id: 20319, territorio: "28", toneladas: "289" }, // San Pedro Mixtepec
    { id: 20334, territorio: "536", toneladas: "6,330" }, // Villa de Tututepec de Melchor Ocampo
    { id: 20401, territorio: "375", toneladas: "4,151" }, // Santa María Colotepec
    { id: 20439, territorio: "70", toneladas: "788" }, // Santa María Tonameca
  ],
  Istmo: [
    //18
    { id: 20025, territorio: "1,122", toneladas: "13,210" }, // Chahuites
    { id: 20075, territorio: "533", toneladas: "6,077" }, // Reforma de Pineda
    { id: 20143, territorio: "875", toneladas: "9,897" }, // San Francisco Ixhuatán
    { id: 20327, territorio: "10,596", toneladas: "123,362" }, // San Pedro Tapanatepec
    { id: 20525, territorio: "2,662", toneladas: "30,943" }, // Santo Domingo Zanatepec
    { id: 20066, territorio: "33", toneladas: "275" }, // Santiago Niltepec
    { id: 20141, territorio: "170", toneladas: "1,801" }, // San Francisco del Mar
    { id: 20014, territorio: "8", toneladas: "61" }, // Ciudad Ixtepec
    { id: 20030, territorio: "3", toneladas: "25" }, // El Espinal
    { id: 20053, territorio: "8", toneladas: "56" }, // Magdalena Tlacotepec
    { id: 20124, territorio: "20", toneladas: "162" }, // San Blas Atempa
    { id: 20307, territorio: "25", toneladas: "165" }, // San Pedro Huamelula
    { id: 20308, territorio: "5", toneladas: "42" }, // San Pedro Huilotepec
    { id: 20421, territorio: "10", toneladas: "66" }, // Santa María Mixtequilla
    { id: 20472, territorio: "165", toneladas: "1,312" }, // Santiago Laollaga
    { id: 20508, territorio: "31", toneladas: "258" }, // Santo Domingo Chihuitán
    { id: 20515, territorio: "27", toneladas: "221" }, // Santo Domingo Tehuantepec
    { id: 20052, territorio: "139", toneladas: "1,457" }, // Magdalena Tequisistlán
  ],
  Mixteca: [
    //1
    { id: 20245, territorio: "14", toneladas: "74" }, // San Martín Zacatepec
  ],
  Papaloapan: [
    //4
    { id: 20044, territorio: "48", toneladas: "120" }, // Loma Bonita
    { id: 20184, territorio: "117", toneladas: "268" }, // San Juan Bautista Tuxtepec
    { id: 20002, territorio: "90", toneladas: "252" }, // Acatlán de Pérez Figueroa
    { id: 20278, territorio: "74", toneladas: "222" }, // San Miguel Soyaltepec
  ],
  "Sierra Sur": [
    //10
    { id: 20020, territorio: "2", toneladas: "12" }, // Constancia del Rosario
    { id: 20037, territorio: "8", toneladas: "41" }, // Mesones Hidalgo
    { id: 20073, territorio: "93", toneladas: "521" }, // Putla Villa de Guerrero
    { id: 20076, territorio: "2", toneladas: "12" }, // La Reforma
    { id: 20300, territorio: "20", toneladas: "100" }, // San Pedro Amuzgos
    { id: 20377, territorio: "1", toneladas: "6" }, // Santa Cruz Itundujia
    { id: 20415, territorio: "8", toneladas: "47" }, // Santa María Ipalapa
    { id: 20447, territorio: "28", toneladas: "169" }, // Santa María Zacatepec
    { id: 20064, territorio: "6", toneladas: "66" }, // Nejapa de Madero

    { id: 20357, territorio: "12", toneladas: "110" }, // Santa Ana Tavela
  ],
};

// Datos agregados por entidad federativa (estado) a nivel nacional
const estados_datos_pro = [
  // 23
  { id: "SIN", territorio: "49,133", toneladas: "517,119" },
  { id: "GRO", territorio: "27,491", toneladas: "415,689" },
  { id: "NAY", territorio: "29,442", toneladas: "329,624" },
  { id: "CHS", territorio: "38,782", toneladas: "272,174" },
  { id: "OAX", territorio: "19,392", toneladas: "214,915" },
  { id: "MICH", territorio: "26,111", toneladas: "200,119" },
  { id: "JAL", territorio: "8663", toneladas: "129,992" },
  { id: "VER", territorio: "15,018", toneladas: "104,888" },
  { id: "COL", territorio: "4,586", toneladas: "62,705" },
  { id: "TAMP", territorio: "922", toneladas: "13,184" },
  { id: "CAM", territorio: "1,136", toneladas: "12,607" },
  { id: "BCS", territorio: "1,835", toneladas: "10,389" },
  { id: "MOR", territorio: "345", toneladas: "5,155" },
  { id: "EM", territorio: "370", toneladas: "2,970" }, // Estado de México
  { id: "YUC", territorio: "213", toneladas: "2,399" },
  { id: "DGO", territorio: "529", toneladas: "1,973" },
  { id: "SON", territorio: "201", toneladas: "1,164" },
  { id: "TAB", territorio: "194", toneladas: "1,113" },
  { id: "PUE", territorio: "55", toneladas: "518" },
  { id: "HGO", territorio: "70", toneladas: "440" },
  { id: "QRO", territorio: "77", toneladas: "384" },
  { id: "SLP", territorio: "55", toneladas: "239" },
  { id: "ZAC", territorio: "26", toneladas: "221" },
];

//Datos por país: superficie cosechada
const paises_datos_pro = [
  //14
  { id: "IND", territorio: "2,704,000" },
  { id: "CHN", territorio: "778,355" },
  { id: "IDN", territorio: "303,413" },
  { id: "CIV", territorio: "283,232" },
  { id: "MEX", territorio: "221,858" },
  { id: "PAK", territorio: "213,639" },
  { id: "PHL", territorio: "192,503" },
  { id: "THA", territorio: "144,776" },
  { id: "BGD", territorio: "139,132" },
  { id: "NGA", territorio: "131,204" },
  { id: "VNM", territorio: "118,943" },
  { id: "EGY", territorio: "110,337" },
  { id: "GIN", territorio: "101,385" },
  { id: "BRA", territorio: "100,663" },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { ranking: 1, pais: "India", superficie: 2704000 },
  { ranking: 2, pais: "China", superficie: 397355 },
  { ranking: 3, pais: "China, Continental", superficie: 381000 },
  { ranking: 4, pais: "Indonesia", superficie: 303413 },
  { ranking: 5, pais: "Côte d'Ivoire", superficie: 283232 },
  { ranking: 6, pais: "México", superficie: 221858 },
  { ranking: 7, pais: "Pakistán", superficie: 213639 },
  { ranking: 8, pais: "Filipinas", superficie: 192503 },
  { ranking: 9, pais: "Tailandia", superficie: 144776 },
  { ranking: 10, pais: "Bangladesh", superficie: 139132 },
  { ranking: 11, pais: "Nigeria", superficie: 131204 },
  { ranking: 12, pais: "Viet Nam", superficie: 118943 },
  { ranking: 13, pais: "Egipto", superficie: 110337 },
  { ranking: 14, pais: "Guinea", superficie: 101385 },
  { ranking: 15, pais: "Brasil", superficie: 100663 },
  { ranking: "", pais: "Otros", superficie: 863640 },
];

// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    entidad: "Sinaloa",
    volumen: 517119,
    superficie: 49133,
    rendimiento: 12.35,
    valor: 2177610251,
  },
  {
    ranking: 2,
    entidad: "Guerrero",
    volumen: 415689,
    superficie: 27491,
    rendimiento: 12.12,
    valor: 3456131419,
  },
  {
    ranking: 3,
    entidad: "Nayarit",
    volumen: 329624,
    superficie: 29442,
    rendimiento: 10.83,
    valor: 1577930147,
  },
  {
    ranking: 4,
    entidad: "Chiapas",
    volumen: 272174,
    superficie: 38782,
    rendimiento: 8.78,
    valor: 1444154658,
  },
  {
    ranking: 5,
    entidad: "Oaxaca",
    volumen: 214915,
    superficie: 19392,
    rendimiento: 8.96,
    valor: 1070664171,
  },
  {
    ranking: 6,
    entidad: "Michoacán",
    volumen: 200119,
    superficie: 26111,
    rendimiento: 9.64,
    valor: 1583899587,
  },
  {
    ranking: 7,
    entidad: "Jalisco",
    volumen: 129992,
    superficie: 8663,
    rendimiento: 12.9,
    valor: 673123078,
  },
  {
    ranking: 8,
    entidad: "Veracruz",
    volumen: 104888,
    superficie: 15018,
    rendimiento: 7.48,
    valor: 644641898,
  },
  {
    ranking: 9,
    entidad: "Colima",
    volumen: 62705,
    superficie: 4586,
    rendimiento: 12.33,
    valor: 348942246,
  },
  {
    ranking: 10,
    entidad: "Tamaulipas",
    volumen: 13184,
    superficie: 922,
    rendimiento: 14.34,
    valor: 102068686,
  },
  {
    ranking: 11,
    entidad: "Campeche",
    volumen: 12607,
    superficie: 1136,
    rendimiento: 7.79,
    valor: 87458126,
  },
  {
    ranking: 12,
    entidad: "Baja California Sur",
    volumen: 10389,
    superficie: 1835,
    rendimiento: 6.11,
    valor: 75534923,
  },
  {
    ranking: 13,
    entidad: "Morelos",
    volumen: 5155,
    superficie: 345,
    rendimiento: 14.77,
    valor: 18300420,
  },
  {
    ranking: 14,
    entidad: "México",
    volumen: 2970,
    superficie: 370,
    rendimiento: 7.52,
    valor: 20078237,
  },
  {
    ranking: 15,
    entidad: "Yucatán",
    volumen: 2399,
    superficie: 213,
    rendimiento: 14.09,
    valor: 14627794,
  },
  {
    ranking: 16,
    entidad: "Durango",
    volumen: 1973,
    superficie: 529,
    rendimiento: 4.17,
    valor: 8988697,
  },
  {
    ranking: 17,
    entidad: "Sonora",
    volumen: 1164,
    superficie: 201,
    rendimiento: 12.28,
    valor: 6295260,
  },
  {
    ranking: 18,
    entidad: "Tabasco",
    volumen: 1113,
    superficie: 194,
    rendimiento: 5.25,
    valor: 3427797,
  },
  {
    ranking: 19,
    entidad: "Puebla",
    volumen: 518,
    superficie: 55,
    rendimiento: 9.36,
    valor: 2456040,
  },
  {
    ranking: 20,
    entidad: "Hidalgo",
    volumen: 440,
    superficie: 70,
    rendimiento: 6.85,
    valor: 2135997,
  },
  {
    ranking: 21,
    entidad: "Querétaro",
    volumen: 384,
    superficie: 77,
    rendimiento: 6.17,
    valor: 2029100,
  },
  {
    ranking: 22,
    entidad: "San Luis Potosí",
    volumen: 239,
    superficie: 55,
    rendimiento: 4.35,
    valor: 892381,
  },
  {
    ranking: 23,
    entidad: "Zacatecas",
    volumen: 221,
    superficie: 26,
    rendimiento: 8.76,
    valor: 1169849,
  },
];

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
  2023,
];

// Producción histórica (en toneladas) por región desde 2010 hasta 2023
// Cada objeto contiene el nombre de una region('nom') y arreglo ('fila')
const produccion_historica_producto = [
  {
    nom: "Sierra de Flores Magón",
    fila: [
      11550.77, 10153.58, 3719.13, 4035.4, 3715.03, 3706.22, 3730.8, 4022.03,
      4418.51, 4263.87, 4427.55, 4494.4, 4339.03, 3306.73,
    ],
  },
  {
    nom: "Costa",
    fila: [
      13683.1, 9040.01, 10176.81, 14693.82, 16230.38, 16592.9, 17437.68,
      17883.9, 17877.73, 18286.53, 17696.6, 18356.64, 19549.95, 20198.6,
    ],
  },
  {
    nom: "Istmo",
    fila: [
      129115.48, 157681.5, 119529.42, 139216.15, 132107.61, 120859.05,
      113592.69, 123198.61, 160411.03, 179877.57, 182919.89, 187608.91,
      188623.57, 189388.19,
    ],
  },
  {
    nom: "Mixteca",
    fila: [
      822.75, 825.49, 847.65, 123.8, 41.5, 36.2, 41, 54.8, 68.25, 68.35, 74.34,
      75.06, 77, 73.97,
    ],
  },
  {
    nom: "Papaloapan",
    fila: [
      10351.56, 12518, 2895.1, 6030, 7571, 3853.3, 5321.3, 2258, 4886.1,
      5240.77, 1561.3, 1991.48, 2273.6, 862.35,
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [
      916.04, 952.03, 915.55, 954.1, 1039.1, 981.4, 959.5, 983.3, 1012.95,
      1061.18, 1030.04, 1026, 1071.1, 1084.78,
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
    volumen: 189388,
    superficie: 16429,
    rendimiento: 10.01,
    valor: 959021903.16,
    cantidad: 18,
  },
  {
    region: "Costa",
    volumen: 20199,
    superficie: 1756,
    rendimiento: 11.38,
    valor: 83563366.32,
    cantidad: 21,
  },
  {
    region: "Sierra de Flores Magón",
    volumen: 3307,
    superficie: 684,
    rendimiento: 4.73,
    valor: 18641343.39,
    cantidad: 6,
  },
  {
    region: "Sierra Sur",
    volumen: 1085,
    superficie: 181,
    rendimiento: 6.26,
    valor: 6300812.11,
    cantidad: 10,
  },
  {
    region: "Papaloapan",
    volumen: 862,
    superficie: 329,
    rendimiento: 2.65,
    valor: 2772044.01,
    cantidad: 4,
  },
  {
    region: "Mixteca",
    volumen: 74,
    superficie: 14,
    rendimiento: 5.36,
    valor: 364702.43,
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
    "Zoque",
    "Mixteco",
    "Cuicateco",
    "Huave",
    "Mixe",
    "Chinanteco",
    "Mazateco",
    "Chatino",
    "Nahua",
    "Chontal De Oaxaca",
    "Amuzgo",
    "Triqui",
  ],
  [
    13440, 153578, 30943, 9066, 2554, 1801, 1457, 610, 531, 319, 291, 165, 148,
    12,
  ],
];

// Datos de estacionalidad del producto por mes
// Cada número representa una medida relativa o índice de producción o actividad para cada mes del año,
// probablemente de enero (índice 0) a diciembre (índice 11)
const estacionalidad_producto = [2, 258, 405, 290, 442, 161, 0, 0, 0, 0, 0, 7];

// Número de municipios productores por región en Oaxaca
// Cada objeto indica la región y la cantidad de municipios que participan en la producción del producto
const tab_mun_producto_oax = [
  { nom: "Istmo", num: 18 },
  { nom: "Costa", num: 21 },
  { nom: "Sierra de Flores Magón", num: 6 },
  { nom: "Papaloapan", num: 4 },
  { nom: "Sierra Sur", num: 10 },
  { nom: "Mixteca", num: 1 },
];
