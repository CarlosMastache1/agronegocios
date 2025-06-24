// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  //55
  "Sierra de Flores Magón": [
    //7
    { id: 20206, territorio: "360", toneladas: "2,797" }, // "San Juan de Los Cués"
    { id: 20244, territorio: "353", toneladas: "2,499" }, // "San Martín Toxpalan"
    { id: 20431, territorio: "415", toneladas: "2,975" }, // "Santa María Tecomavaca"
    { id: 20545, territorio: "190", toneladas: "988" }, // "Teotitlán de Flores Magón"
    { id: 20027, territorio: "387", toneladas: "2,409" }, // "Chiquihuitlán de Benito Juárez"
    { id: 20177, territorio: "339", toneladas: "2,340" }, // "San Juan Bautista Cuicatlán"
    { id: 20558, territorio: "59", toneladas: "350" }, // "Valerio Trujano"
  ],
  Costa: [
    //6
    { id: 20090, territorio: "28", toneladas: "397" }, // "San Andrés Huaxpaltepec"
    { id: 20414, territorio: "68", toneladas: "817" }, // "Santa María Huazolotitlán"
    { id: 20467, territorio: "574", toneladas: "8,119" }, // "Santiago Jamiltepec"
    { id: 20482, territorio: "261", toneladas: "3,260" }, // "Santiago Pinotepa Nacional"
    { id: 20319, territorio: "35", toneladas: "474" }, // "San Pedro Mixtepec"
    { id: 20334, territorio: "3,599", toneladas: "57,282" }, // "Villa de Tututepec de Melchor Ocampo"
  ],
  Istmo: [
    //15
    { id: 20025, territorio: "17", toneladas: "159" }, // "Chahuites"
    { id: 20075, territorio: "6", toneladas: "19" }, // "Reforma de Pineda"
    { id: 20143, territorio: "27", toneladas: "136" }, // "San Francisco Ixhuatán"
    { id: 20327, territorio: "61", toneladas: "536" }, // "San Pedro Tapanatepec"
    { id: 20525, territorio: "33", toneladas: "264" }, // "Santo Domingo Zanatepec"
    { id: 20057, territorio: "347", toneladas: "4,959" }, // "Matías Romero Avendaño"
    { id: 20198, territorio: "99", toneladas: "1,458" }, // "San Juan Guichicovi"
    { id: 20030, territorio: "3", toneladas: "21" }, // "El Espinal"
    { id: 20053, territorio: "4", toneladas: "31" }, // "Magdalena Tlacotepec"
    { id: 20124, territorio: "6", toneladas: "58" }, // "San Blas Atempa"
    { id: 20418, territorio: "40", toneladas: "362" }, // "Santa María Jalapa del Marqués"
    { id: 20472, territorio: "9", toneladas: "81" }, // "Santiago Laollaga"
    { id: 20508, territorio: "8", toneladas: "67" }, // "Santo Domingo Chihuitán"
    { id: 20515, territorio: "9", toneladas: "83" }, // "Santo Domingo Tehuantepec"
    { id: 20052, territorio: "131", toneladas: "1,615" }, // "Magdalena Tequisistlán"
  ],
  Mixteca: [
    //8
    { id: 20039, territorio: "5", toneladas: "54" }, // "Heroica Ciudad de Huajuapan de León"
    { id: 20081, territorio: "2", toneladas: "19" }, // "San Agustín Atenango"
    { id: 20237, territorio: "1", toneladas: "10" }, // "San Marcos Arteaga"
    { id: 20462, territorio: "4", toneladas: "29" }, // "Santiago Huajolotitlán"
    { id: 20469, territorio: "4", toneladas: "33" }, // "Santiago Juxtlahuaca"
    { id: 20520, territorio: "3", toneladas: "32" }, // "Santo Domingo Tonalá"
    { id: 20537, territorio: "7", toneladas: "73" }, // "Silacayoápam"
    { id: 20549, territorio: "10", toneladas: "89" }, // "Heroica Villa Tezoatlán de Segura y Luna, Cuna de la Independencia de Oaxaca"
  ],
  Papaloapan: [
    //6
    { id: 20044, territorio: "30", toneladas: "360" }, // "Loma Bonita"
    { id: 20184, territorio: "931", toneladas: "13,702" }, // "San Juan Bautista Tuxtepec"
    { id: 20232, territorio: "16", toneladas: "141" }, // "San Lucas Ojitlán"
    { id: 20002, territorio: "1,044", toneladas: "14,154" }, // "Acatlán de Pérez Figueroa"
    { id: 20278, territorio: "510", toneladas: "6,895" }, // "San Miguel Soyaltepec"
    { id: 20498, territorio: "7,642", toneladas: "94,436" }, // "Santiago Yaveo"
  ],
  "Sierra de Juárez": [
    //2
    { id: 20207, territorio: "2,149", toneladas: "26,770" }, // "San Juan Mazatlán"
    { id: 20190, territorio: "3,984", toneladas: "47,664" }, // "San Juan Cotzocón"
  ],
  "Sierra Sur": [
    //5
    { id: 20088, territorio: "18", toneladas: "63" }, // "San Andrés Cabecera Nueva"
    { id: 20377, territorio: "65", toneladas: "307" }, // "Santa Cruz Itundujia"
    { id: 20392, territorio: "10", toneladas: "40" }, // "Santa Lucía Monteverde"
    { id: 20447, territorio: "11", toneladas: "132" }, // "Santa María Zacatepec"
    { id: 20064, territorio: "37", toneladas: "468" }, // "Nejapa de Madero"
  ],
  "Valles Centrales": [
    //6
    { id: 20007, territorio: "1", toneladas: "8" }, // "Asunción Ocotlán"
    { id: 20132, territorio: "7", toneladas: "41" }, // "San Dionisio Ocotlán"
    { id: 20301, territorio: "5", toneladas: "41" }, // "San Pedro Apóstol"
    { id: 20333, territorio: "22", toneladas: "133" }, // "San Pedro Totolápam"
    { id: 20449, territorio: "9", toneladas: "43" }, // "Santa María Zoquitlán"
    { id: 20551, territorio: "4", toneladas: "17" }, // "Tlacolula de Matamoros"
  ],
};

// Datos agregados por entidad federativa (estado) a nivel nacional
const estados_datos_pro = [
  // 28
  { id: "MICH", territorio: "953652", toneladas: "63396" },
  { id: "VER", territorio: "867916", toneladas: "52924" },
  { id: "COL", territorio: "312047", toneladas: "21832" },
  { id: "OAX", territorio: "300310", toneladas: "23993" },
  { id: "TAMP", territorio: "135886", toneladas: "8508" },
  { id: "YUC", territorio: "110132", toneladas: "5999" },
  { id: "JAL", territorio: "108797", toneladas: "6967" },
  { id: "TAB", territorio: "90381", toneladas: "7237" },
  { id: "GRO", territorio: "71731", toneladas: "6995" },
  { id: "SLP", territorio: "46299", toneladas: "1759" },
  { id: "PUE", territorio: "44328", toneladas: "3166" },
  { id: "QR", territorio: "42141", toneladas: "4702" },
  { id: "CHS", territorio: "34590", toneladas: "3115" },
  { id: "NAY", territorio: "34050", toneladas: "3206" },
  { id: "SIN", territorio: "27656", toneladas: "1784" },
  { id: "CAM", territorio: "16650", toneladas: "1873" },
  { id: "ZAC", territorio: "11338", toneladas: "761" },
  { id: "SON", territorio: "9646", toneladas: "1215" },
  { id: "AGS", territorio: "5271", toneladas: "600" },
  { id: "NL", territorio: "5171", toneladas: "1081" },
  { id: "MOR", territorio: "4807", toneladas: "422" },
  { id: "BCN", territorio: "2692", toneladas: "209" },
  { id: "HGO", territorio: "1463", toneladas: "239" },
  { id: "EM", territorio: "1180", toneladas: "150" },
  { id: "GTO", territorio: "971", toneladas: "169" },
  { id: "DGO", territorio: "526", toneladas: "263" },
  { id: "BCS", territorio: "254", toneladas: "75" },
  { id: "QRO", territorio: "30", toneladas: "8" },
];

//Datos por país: superficie cosechada
const paises_datos_pro = [
  //15
  { id: "IND", toneladas: "313000" },
  { id: "MEX", toneladas: "201998" },
  { id: "CHN", toneladas: "209392" },
  { id: "BRA", toneladas: "62867" },
  { id: "BGD", toneladas: "55744" },
  { id: "TUR", toneladas: "55246" },
  { id: "ARG", toneladas: "53742" },
  { id: "ESP", toneladas: "52570" },
  { id: "ZAF", toneladas: "35273" },
  { id: "DOM", toneladas: "34124" },
  { id: "SDN", toneladas: "32772" },
  { id: "IRN", toneladas: "28636" },
  { id: "PER", toneladas: "28121" },
  { id: "ITA", toneladas: "24560" },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { ranking: 1, pais: "India", superficie: 313000 },
  { ranking: 2, pais: "México", superficie: 201998 },
  { ranking: 3, pais: "China", superficie: 105923 },
  { ranking: 4, pais: "China, Continental", superficie: 103469 },
  { ranking: 5, pais: "Brasil", superficie: 62867 },
  { ranking: 6, pais: "Bangladesh", superficie: 55744 },
  { ranking: 7, pais: "Turquía", superficie: 55246 },
  { ranking: 8, pais: "Argentina", superficie: 53742 },
  { ranking: 9, pais: "España", superficie: 52570 },
  { ranking: 10, pais: "Sudáfrica", superficie: 35273 },
  { ranking: 11, pais: "República Dominicana", superficie: 34124 },
  { ranking: 12, pais: "Sudán", superficie: 32772 },
  { ranking: 13, pais: "Irán", superficie: 28636 },
  { ranking: 14, pais: "Perú", superficie: 28121 },
  { ranking: 15, pais: "Italia", superficie: 24560 },
  { ranking: "", pais: "Otros", superficie: 252135 },
];

// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    entidad: "Michoacán",
    volumen: 953652,
    superficie: 63396,
    rendimiento: 11.07,
    valor: 11743911310,
  },
  {
    ranking: 2,
    entidad: "Veracruz",
    volumen: 867916,
    superficie: 52924,
    rendimiento: 13.22,
    valor: 6273388787,
  },
  {
    ranking: 3,
    entidad: "Colima",
    volumen: 312047,
    superficie: 21832,
    rendimiento: 12.2,
    valor: 4448390240,
  },
  {
    ranking: 4,
    entidad: "Oaxaca",
    volumen: 300310,
    superficie: 23993,
    rendimiento: 11.02,
    valor: 1938092136,
  },
  {
    ranking: 5,
    entidad: "Tamaulipas",
    volumen: 135886,
    superficie: 8508,
    rendimiento: 14.76,
    valor: 1149923988,
  },
  {
    ranking: 6,
    entidad: "Yucatán",
    volumen: 110132,
    superficie: 5999,
    rendimiento: 12.43,
    valor: 773818419,
  },
  {
    ranking: 7,
    entidad: "Jalisco",
    volumen: 108797,
    superficie: 6967,
    rendimiento: 15.37,
    valor: 1118804930,
  },
  {
    ranking: 8,
    entidad: "Tabasco",
    volumen: 90381,
    superficie: 7237,
    rendimiento: 11.4,
    valor: 430462978,
  },
  {
    ranking: 9,
    entidad: "Guerrero",
    volumen: 71731,
    superficie: 6995,
    rendimiento: 8.7,
    valor: 464078257,
  },
  {
    ranking: 10,
    entidad: "San Luis Potosí",
    volumen: 46299,
    superficie: 1759,
    rendimiento: 10.61,
    valor: 668442875,
  },
  {
    ranking: 11,
    entidad: "Puebla",
    volumen: 44328,
    superficie: 3166,
    rendimiento: 11.63,
    valor: 452469759,
  },
  {
    ranking: 12,
    entidad: "Quintana Roo",
    volumen: 42141,
    superficie: 4702,
    rendimiento: 9.14,
    valor: 435898944,
  },
  {
    ranking: 13,
    entidad: "Chiapas",
    volumen: 34590,
    superficie: 3115,
    rendimiento: 13.2,
    valor: 104259280,
  },
  {
    ranking: 14,
    entidad: "Nayarit",
    volumen: 34050,
    superficie: 3206,
    rendimiento: 11.08,
    valor: 328674336,
  },
  {
    ranking: 15,
    entidad: "Sinaloa",
    volumen: 27656,
    superficie: 1784,
    rendimiento: 13.66,
    valor: 293677103,
  },
  {
    ranking: 16,
    entidad: "Campeche",
    volumen: 16650,
    superficie: 1873,
    rendimiento: 9.17,
    valor: 187799789,
  },
  {
    ranking: 17,
    entidad: "Zacatecas",
    volumen: 11338,
    superficie: 761,
    rendimiento: 10.8,
    valor: 125749498,
  },
  {
    ranking: 18,
    entidad: "Sonora",
    volumen: 9646,
    superficie: 1215,
    rendimiento: 13.1,
    valor: 76605739,
  },
  {
    ranking: 19,
    entidad: "Aguascalientes",
    volumen: 5271,
    superficie: 600,
    rendimiento: 12.55,
    valor: 32507469,
  },
  {
    ranking: 20,
    entidad: "Nuevo León",
    volumen: 5171,
    superficie: 1081,
    rendimiento: 7.82,
    valor: 40370026,
  },
  {
    ranking: 21,
    entidad: "Morelos",
    volumen: 4807,
    superficie: 422,
    rendimiento: 11.46,
    valor: 50423087,
  },
  {
    ranking: 22,
    entidad: "Baja California",
    volumen: 2692,
    superficie: 209,
    rendimiento: 8.77,
    valor: 30953531,
  },
  {
    ranking: 23,
    entidad: "Hidalgo",
    volumen: 1463,
    superficie: 239,
    rendimiento: 5.69,
    valor: 6809825,
  },
  {
    ranking: 24,
    entidad: "México",
    volumen: 1180,
    superficie: 150,
    rendimiento: 7.43,
    valor: 10707503,
  },
  {
    ranking: 25,
    entidad: "Guanajuato",
    volumen: 971,
    superficie: 169,
    rendimiento: 6.78,
    valor: 9606882,
  },
  {
    ranking: 26,
    entidad: "Durango",
    volumen: 526,
    superficie: 263,
    rendimiento: 2.68,
    valor: 3229693,
  },
  {
    ranking: 27,
    entidad: "Baja California Sur",
    volumen: 254,
    superficie: 75,
    rendimiento: 7.43,
    valor: 2114635,
  },
  {
    ranking: 28,
    entidad: "Querétaro",
    volumen: 30,
    superficie: 8,
    rendimiento: 3.72,
    valor: 257450,
  },
];

// Años de referencia para los datos de balanza comercial
const labels_balanza = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
];

// Valores anuales de importación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las importaciones del producto
const importacion_balanza = [
  602, 2398, 1420, 1214, 2887, 1610, 2563, 2928, 3981, 3409, 2903, 7579, 13686,
];

// Valores anuales de exportación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las exportaciones del producto
const exportacion_balanza = [
  450338, 469707, 625234, 531543, 524084, 623650, 667572, 733918, 733655,
  768619, 807540, 773342, 715778,
];

/* DATOS DE LA TABLA DESTINO DE LA EXPORTACIÓN 2023 POR PAÍS */
const tab_destino_exportacion = [
  { num: 1, pais: "América del Norte", valor: 792791852 },
  { num: 2, pais: "Europa", valor: 5253772 },
  { num: 3, pais: "Asia", valor: 2855879 },
  { num: 4, pais: "Latinoamérica y Antillas", valor: 415006 },
];

/* Datos grafica de la produccion historica */
/* etiquetas de tiempo  */
const labels_historica_producto = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  2023,
];
/* Valores de la produccion por region */
const produccion_historica_producto = [
  {
    nom: "Sierra de Flores Magón",
    fila: [
      12678.3, 11679.58, 9502.02, 9540.14, 8998.33, 9656.55, 10120.06, 10803.37,
      11373.87, 11178.64, 11019.03, 13533.98, 14376.36, 14358.62,
    ],
  },
  {
    nom: "Costa",
    fila: [
      96114.18, 96246.24, 77960.23, 67611.01, 60634.04, 62713.04, 63808.6,
      64953.04, 65461.67, 66373.8, 67748.08, 68570.57, 69786.19, 70348.41,
    ],
  },
  {
    nom: "Istmo",
    fila: [
      8300.51, 9457.16, 9303.9, 8393.43, 6824.72, 7688.73, 8613.96, 8645.24,
      9227.23, 9475.1, 9521.31, 9536.58, 9763.71, 9848.45,
    ],
  },
  {
    nom: "Mixteca",
    fila: [
      474.6, 429.2, 483.5, 316.4, 363.6, 361.4, 347.05, 321.67, 303.84, 286.2,
      288.76, 323.87, 334.85, 338.7,
    ],
  },
  {
    nom: "Papaloapan",
    fila: [
      53331.1, 50907.3, 63237.8, 69925.4, 80541.25, 97715.15, 106387.98,
      111376.76, 117352.01, 105199.18, 115256.73, 134208.54, 119370.12,
      43915.58,
    ],
  },
  {
    nom: "Sierra de Juárez",
    fila: [
      33282, 38779, 38535.3, 39041.5, 52228, 66380, 73538, 77998, 75510,
      69804.41, 76622.21, 78678.69, 74250.55, 74434.46,
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [
      416.8, 376.88, 419.5, 487.83, 510.39, 483.96, 484.35, 300.08, 767.6,
      888.6, 912.94, 927.93, 948.9, 1010.22,
    ],
  },
  {
    nom: "Valles Centrales",
    fila: [
      193.05, 202.1, 92.87, 109.18, 108.56, 138.46, 152.48, 165.34, 173.34,
      180.62, 189.66, 228.77, 230.12, 282.29,
    ],
  },
];

/* DATO DE LA TABLA PRODUCCION EN OAXACA	 */
const tabla_produccion_producto = [
  {
    region: "Papaloapan",
    volumen: 129689,
    superficie: 10169,
    rendimiento: 15.72,
    valor: 82101252,
    cantidad: 6,
  },
  {
    region: "Sierra de Juárez",
    volumen: 74434,
    superficie: 6133,
    rendimiento: 15.1,
    valor: 48200868,
    cantidad: 2,
  },
  {
    region: "Costa",
    volumen: 70348,
    superficie: 4566,
    rendimiento: 13.62,
    valor: 42907023,
    cantidad: 6,
  },
  {
    region: "Sierra de Flores Magón",
    volumen: 14359,
    superficie: 2103,
    rendimiento: 8.13,
    valor: 12238255,
    cantidad: 7,
  },
  {
    region: "Istmo",
    volumen: 9848,
    superficie: 799,
    rendimiento: 9.92,
    valor: 7016011,
    cantidad: 15,
  },
  {
    region: "Sierra Sur",
    volumen: 1010,
    superficie: 141,
    rendimiento: 7.33,
    valor: 858995,
    cantidad: 5,
  },
  {
    region: "Mixteca",
    volumen: 339,
    superficie: 35,
    rendimiento: 9.84,
    valor: 252730,
    cantidad: 8,
  },
  {
    region: "Valles Centrales",
    volumen: 282,
    superficie: 47,
    rendimiento: 7.09,
    valor: 232002,
    cantidad: 6,
  },
];

/* Datos grafica VOLUMEN DE PRODUCCION POR PUEBLO INDIGENA AGAVE */
const pub_indigenas_producto = [
  [
    "NO PUEBLO INDIGENA",
    "Chinanteco",
    "Mixe",
    "Mazateco",
    "Mixteco",
    "Zapoteco",
    "Cuicateco",
    "Nahua",
    "Chatino",
    "Zoque",
  ],
  [62570, 115535, 76050, 24834, 13721, 3533, 2340, 988, 474, 264],
];

/* Datos grafica Estacionalidad de calabacita en Oaxaca */
const estacionalidad_producto = [
  140, 170, 125, 150, 158, 175, 162, 158, 148, 156, 142, 161,
];

/* Datos Tabla MUNICIPIOS QUE PRODUCEN DE CALABACITA EN OAXACA */
const tab_mun_producto_oax = [
  { nom: "Papaloapan", num: 6 },
  { nom: "Sierra de Juárez", num: 2 },
  { nom: "Costa", num: 6 },
  { nom: "Sierra de Flores Magón", num: 7 },
  { nom: "Istmo", num: 15 },
  { nom: "Sierra Sur", num: 5 },
  { nom: "Mixteca", num: 8 },
  { nom: "Valles Centrales", num: 6 },
];
