// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  //55
  "Sierra de Flores Magón": [
    //7
    {
      id: 20206,
      superficie: 360,
      volumen: 2797,
      nombre: "San Juan de Los Cués",
    },
    {
      id: 20244,
      superficie: 353,
      volumen: 2499,
      nombre: "San Martín Toxpalan",
    },
    {
      id: 20431,
      superficie: 415,
      volumen: 2975,
      nombre: "Santa María Tecomavaca",
    },
    {
      id: 20545,
      superficie: 190,
      volumen: 988,
      nombre: "Teotitlán de Flores Magón",
    },
    {
      id: 20027,
      superficie: 387,
      volumen: 2409,
      nombre: "Chiquihuitlán de Benito Juárez",
    },
    {
      id: 20177,
      superficie: 339,
      volumen: 2340,
      nombre: "San Juan Bautista Cuicatlán",
    },
    {
      id: 20558,
      superficie: 59,
      volumen: 350,

      nombre: "Valerio Trujano",
    },
  ],
  Costa: [
    //6
    {
      id: 20090,
      superficie: 28,
      volumen: 397,
      nombre: "San Andrés Huaxpaltepec",
    },
    {
      id: 20414,
      superficie: 68,
      volumen: 817,
      nombre: "Santa María Huazolotitlán",
    },
    {
      id: 20467,
      superficie: 574,
      volumen: 8119,
      nombre: "Santiago Jamiltepec",
    },
    {
      id: 20482,
      superficie: 261,
      volumen: 3260,
      nombre: "Santiago Pinotepa Nacional",
    },
    {
      id: 20319,
      superficie: 35,
      volumen: 474,
      nombre: "San Pedro Mixtepec",
    },
    {
      id: 20334,
      superficie: 3599,
      volumen: 57282,
      nombre: "Villa de Tututepec de Melchor Ocampo",
    },
  ],
  Istmo: [
    //15
    {
      id: 20025,
      superficie: 17,
      volumen: 159,
      nombre: "Chahuites",
    },
    {
      id: 20075,
      superficie: 6,
      volumen: 19,
      nombre: "Reforma de Pineda",
    },
    {
      id: 20143,
      superficie: 27,
      volumen: 136,
      nombre: "San Francisco Ixhuatán",
    },
    {
      id: 20327,
      superficie: 61,
      volumen: 536,
      nombre: "San Pedro Tapanatepec",
    },
    {
      id: 20525,
      superficie: 33,
      volumen: 264,
      nombre: "Santo Domingo Zanatepec",
    },
    {
      id: 20057,
      superficie: 347,
      volumen: 4959,
      nombre: "Matías Romero Avendaño",
    },
    {
      id: 20198,
      superficie: 99,
      volumen: 1458,
      nombre: "San Juan Guichicovi",
    },
    {
      id: 20030,
      superficie: 3,
      volumen: 21,
      nombre: "El Espinal",
    },
    {
      id: 20053,
      superficie: 4,
      volumen: 31,
      nombre: "Magdalena Tlacotepec",
    },
    {
      id: 20124,
      superficie: 6,
      volumen: 58,
      nombre: "San Blas Atempa",
    },
    {
      id: 20418,
      superficie: 40,
      volumen: 362,
      nombre: "Santa María Jalapa del Marqués",
    },
    {
      id: 20472,
      superficie: 9,
      volumen: 81,
      nombre: "Santiago Laollaga",
    },
    {
      id: 20508,
      superficie: 8,
      volumen: 67,
      nombre: "Santo Domingo Chihuitán",
    },
    {
      id: 20515,
      superficie: 9,
      volumen: 83,
      nombre: "Santo Domingo Tehuantepec",
    },
    {
      id: 20052,
      superficie: 131,
      volumen: 1615,
      nombre: "Magdalena Tequisistlán",
    },
  ],
  Mixteca: [
    //8
    {
      id: 20039,
      superficie: 5,
      volumen: 54,
      nombre: "Heroica Ciudad de Huajuapan de León",
    },
    {
      id: 20081,
      superficie: 2,
      volumen: 19,
      nombre: "San Agustín Atenango",
    },
    {
      id: 20237,
      superficie: 1,
      volumen: 10,
      nombre: "San Marcos Arteaga",
    },
    {
      id: 20462,
      superficie: 4,
      volumen: 29,
      nombre: "Santiago Huajolotitlán",
    },
    {
      id: 20469,
      superficie: 4,
      volumen: 33,
      nombre: "Santiago Juxtlahuaca",
    },
    {
      id: 20520,
      superficie: 3,
      volumen: 32,
      nombre: "Santo Domingo Tonalá",
    },
    {
      id: 20537,
      superficie: 7,
      volumen: 73,
      nombre: "Silacayoápam",
    },
    {
      id: 20549,
      superficie: 10,
      volumen: 89,
      nombre:
        "Heroica Villa Tezoatlán de Segura y Luna, Cuna de la Independencia de Oaxaca",
    },
  ],
  Papaloapan: [
    //6
    {
      id: 20044,
      superficie: 30,
      volumen: 360,
      nombre: "Loma Bonita",
    },
    {
      id: 20184,
      superficie: 931,
      volumen: 13702,
      nombre: "San Juan Bautista Tuxtepec",
    },
    {
      id: 20232,
      superficie: 16,
      volumen: 141,
      nombre: "San Lucas Ojitlán",
    },
    {
      id: 20002,
      superficie: 1044,
      volumen: 14154,
      nombre: "Acatlán de Pérez Figueroa",
    },
    {
      id: 20278,
      superficie: 510,
      volumen: 6895,
      nombre: "San Miguel Soyaltepec",
    },
    {
      id: 20498,
      superficie: 7642,
      volumen: 94436,
      nombre: "Santiago Yaveo",
    },
  ],
  "Sierra de Juárez": [
    //2
    {
      id: 20207,
      superficie: 2149,
      volumen: 26770,
      nombre: "San Juan Mazatlán",
    },
    {
      id: 20190,
      superficie: 3984,
      volumen: 47664,
      nombre: "San Juan Cotzocón",
    },
  ],
  "Sierra Sur": [
    //5
    {
      id: 20088,
      superficie: 18,
      volumen: 63,
      nombre: "San Andrés Cabecera Nueva",
    },
    {
      id: 20377,
      superficie: 65,
      volumen: 307,
      nombre: "Santa Cruz Itundujia",
    },
    {
      id: 20392,
      superficie: 10,
      volumen: 40,
      nombre: "Santa Lucía Monteverde",
    },
    {
      id: 20447,
      superficie: 11,
      volumen: 132,
      nombre: "Santa María Zacatepec",
    },
    {
      id: 20064,
      superficie: 37,
      volumen: 468,
      nombre: "Nejapa de Madero",
    },
  ],
  "Valles Centrales": [
    //6
    {
      id: 20007,
      superficie: 1,
      volumen: 8,
      nombre: "Asunción Ocotlán",
    },
    {
      id: 20132,
      superficie: 7,
      volumen: 41,
      nombre: "San Dionisio Ocotlán",
    },
    {
      id: 20301,
      superficie: 5,
      volumen: 41,
      nombre: "San Pedro Apóstol",
    },
    {
      id: 20333,
      superficie: 22,
      volumen: 133,
      nombre: "San Pedro Totolápam",
    },
    {
      id: 20449,
      superficie: 9,
      volumen: 43,
      nombre: "Santa María Zoquitlán",
    },
    {
      id: 20551,
      superficie: 4,
      volumen: 17,
      nombre: "Tlacolula de Matamoros",
    },
  ],
};

// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    id: "MICH",
    ranking: 1,
    entidad: "Michoacán",
    volumen: 953652,
    superficie: 63396,
    rendimiento: 11.07,
    valor: 11743911310,
  },
  {
    id: "VER",
    ranking: 2,
    entidad: "Veracruz",
    volumen: 867916,
    superficie: 52924,
    rendimiento: 13.22,
    valor: 6273388787,
  },
  {
    id: "COL",
    ranking: 3,
    entidad: "Colima",
    volumen: 312047,
    superficie: 21832,
    rendimiento: 12.2,
    valor: 4448390240,
  },
  {
    id: "OAX",
    ranking: 4,
    entidad: "Oaxaca",
    volumen: 300310,
    superficie: 23993,
    rendimiento: 11.02,
    valor: 1938092136,
  },
  {
    id: "TAMP",
    ranking: 5,
    entidad: "Tamaulipas",
    volumen: 135886,
    superficie: 8508,
    rendimiento: 14.76,
    valor: 1149923988,
  },
  {
    id: "YUC",
    ranking: 6,
    entidad: "Yucatán",
    volumen: 110132,
    superficie: 5999,
    rendimiento: 12.43,
    valor: 773818419,
  },
  {
    id: "JAL",
    ranking: 7,
    entidad: "Jalisco",
    volumen: 108797,
    superficie: 6967,
    rendimiento: 15.37,
    valor: 1118804930,
  },
  {
    id: "TAB",
    ranking: 8,
    entidad: "Tabasco",
    volumen: 90381,
    superficie: 7237,
    rendimiento: 11.4,
    valor: 430462978,
  },
  {
    id: "GRO",
    ranking: 9,
    entidad: "Guerrero",
    volumen: 71731,
    superficie: 6995,
    rendimiento: 8.7,
    valor: 464078257,
  },
  {
    id: "SLP",
    ranking: 10,
    entidad: "San Luis Potosí",
    volumen: 46299,
    superficie: 1759,
    rendimiento: 10.61,
    valor: 668442875,
  },
  {
    id: "PUE",
    ranking: 11,
    entidad: "Puebla",
    volumen: 44328,
    superficie: 3166,
    rendimiento: 11.63,
    valor: 452469759,
  },
  {
    id: "QR",
    ranking: 12,
    entidad: "Quintana Roo",
    volumen: 42141,
    superficie: 4702,
    rendimiento: 9.14,
    valor: 435898944,
  },
  {
    id: "CHS",
    ranking: 13,
    entidad: "Chiapas",
    volumen: 34590,
    superficie: 3115,
    rendimiento: 13.2,
    valor: 104259280,
  },
  {
    id: "NAY",
    ranking: 14,
    entidad: "Nayarit",
    volumen: 34050,
    superficie: 3206,
    rendimiento: 11.08,
    valor: 328674336,
  },
  {
    id: "SIN",
    ranking: 15,
    entidad: "Sinaloa",
    volumen: 27656,
    superficie: 1784,
    rendimiento: 13.66,
    valor: 293677103,
  },
  {
    id: "CAM",
    ranking: 16,
    entidad: "Campeche",
    volumen: 16650,
    superficie: 1873,
    rendimiento: 9.17,
    valor: 187799789,
  },
  {
    id: "ZAC",
    ranking: 17,
    entidad: "Zacatecas",
    volumen: 11338,
    superficie: 761,
    rendimiento: 10.8,
    valor: 125749498,
  },
  {
    id: "SON",
    ranking: 18,
    entidad: "Sonora",
    volumen: 9646,
    superficie: 1215,
    rendimiento: 13.1,
    valor: 76605739,
  },
  {
    id: "AGS",
    ranking: 19,
    entidad: "Aguascalientes",
    volumen: 5271,
    superficie: 600,
    rendimiento: 12.55,
    valor: 32507469,
  },
  {
    id: "NL",
    ranking: 20,
    entidad: "Nuevo León",
    volumen: 5171,
    superficie: 1081,
    rendimiento: 7.82,
    valor: 40370026,
  },
  {
    id: "MOR",
    ranking: 21,
    entidad: "Morelos",
    volumen: 4807,
    superficie: 422,
    rendimiento: 11.46,
    valor: 50423087,
  },
  {
    id: "BCN",
    ranking: 22,
    entidad: "Baja California",
    volumen: 2692,
    superficie: 209,
    rendimiento: 8.77,
    valor: 30953531,
  },
  {
    id: "HGO",
    ranking: 23,
    entidad: "Hidalgo",
    volumen: 1463,
    superficie: 239,
    rendimiento: 5.69,
    valor: 6809825,
  },
  {
    id: "EM",
    ranking: 24,
    entidad: "México",
    volumen: 1180,
    superficie: 150,
    rendimiento: 7.43,
    valor: 10707503,
  },
  {
    id: "GTO",
    ranking: 25,
    entidad: "Guanajuato",
    volumen: 971,
    superficie: 169,
    rendimiento: 6.78,
    valor: 9606882,
  },
  {
    id: "DGO",
    ranking: 26,
    entidad: "Durango",
    volumen: 526,
    superficie: 263,
    rendimiento: 2.68,
    valor: 3229693,
  },
  {
    id: "BCS",
    ranking: 27,
    entidad: "Baja California Sur",
    volumen: 254,
    superficie: 75,
    rendimiento: 7.43,
    valor: 2114635,
  },
  {
    id: "QRO",
    ranking: 28,
    entidad: "Querétaro",
    volumen: 30,
    superficie: 8,
    rendimiento: 3.72,
    valor: 257450,
  },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { id: "IND", ranking: 1, pais: "India", superficie: 313000 },
  { id: "MEX", ranking: 2, pais: "México", superficie: 201998 },
  { id: "CHN", ranking: 3, pais: "China", superficie: 105923 },
  { id: "CHN", ranking: 4, pais: "China, Continental", superficie: 103469 },
  { id: "BRA", ranking: 5, pais: "Brasil", superficie: 62867 },
  { id: "BGD", ranking: 6, pais: "Bangladesh", superficie: 55744 },
  { id: "TUR", ranking: 7, pais: "Turquía", superficie: 55246 },
  { id: "ARG", ranking: 8, pais: "Argentina", superficie: 53742 },
  { id: "ESP", ranking: 9, pais: "España", superficie: 52570 },
  { id: "ZAF", ranking: 10, pais: "Sudáfrica", superficie: 35273 },
  { id: "DOM", ranking: 11, pais: "República Dominicana", superficie: 34124 },
  { id: "SDN", ranking: 12, pais: "Sudán", superficie: 32772 },
  { id: "IRN", ranking: 13, pais: "Irán", superficie: 28636 },
  { id: "PER", ranking: 14, pais: "Perú", superficie: 28121 },
  { id: "ITA", ranking: 15, pais: "Italia", superficie: 24560 },
  { ranking: "", pais: "Otros", superficie: 252135 },
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
