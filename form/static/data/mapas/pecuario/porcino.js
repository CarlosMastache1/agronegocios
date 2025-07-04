const regionesConMunicipios = {
  //27
  Istmo: [
    //9
    //
    {
      id: 20515,
      superficie: "",
      volumen: "470",
    }, //Santo Domingo Tehuantepec
    {
      id: 20043,
      superficie: "",
      volumen: "329",
    }, //Heroica Ciudad de Juchitán de Zaragoza
    {
      id: 20130,
      superficie: "",
      volumen: "293",
    }, //San Dionisio del Mar
    {
      id: 20057,
      superficie: "",
      volumen: "944",
    }, //Matías Romero Avendaño
    {
      id: 20525,
      superficie: "",
      volumen: "261",
    }, //Santo Domingo Zanatepec
    {
      id: 20141,
      superficie: "",
      volumen: "256",
    }, //San Francisco del Mar
    {
      id: 20427,
      superficie: "",
      volumen: "247",
    }, //Santa María Petapa
    {
      id: 20066,
      superficie: "",
      volumen: "245",
    }, //Santiago Niltepec
    {
      id: 20005,
      superficie: "",
      volumen: "225",
    }, //Asunción Ixtaltepec
  ],
  Papaloapa: [
    //6
    //
    {
      id: 20559,
      superficie: "",
      volumen: "1,188",
    }, //San Juan Bautista Valle Nacional
    {
      id: 20166,
      superficie: "",
      volumen: "499",
    }, //San José Chiltepec
    {
      id: 20417,
      superficie: "",
      volumen: "495",
    }, //Santa María Jacatepec
    {
      id: 20002,
      superficie: "",
      volumen: "294",
    }, //Acatlán de Pérez Figueroa
    {
      id: 20184,
      superficie: "",
      volumen: "289",
    }, //San Juan Bautista Tuxtepec
    {
      id: 20232,
      superficie: "",
      volumen: "286",
    }, //San Lucas Ojitlán
  ],
  "Valles Centrales": [
    //4
    //
    {
      id: 20067,
      superficie: "",
      volumen: "1,961",
    }, //Oaxaca de Juárez
    {
      id: 20068,
      superficie: "",
      volumen: "580",
    }, //Ocotlán de Morelos
    {
      id: 20023,
      superficie: "",
      volumen: "278",
    }, //Cuilápam de Guerrero
    {
      id: 20028,
      superficie: "",
      volumen: "200",
    }, //Heroica Ciudad de Ejutla de Crespo
  ],
  Mixteca: [
    //4
    //
    {
      id: 20039,
      superficie: "",
      volumen: "321",
    }, //Heroica Ciudad de Huajuapan de León
    {
      id: 20549,
      superficie: "",
      volumen: "274",
    }, //H. V. Tezoatlán de Segura y Luna, C. de la I.de O.
    {
      id: 20006,
      superficie: "",
      volumen: "238",
    }, //Asunción Nochixtlán
    {
      id: 20469,
      superficie: "",
      volumen: "207",
    }, //Santiago Juxtlahuaca
  ],
  Costa: [
    //2
    //
    {
      id: 20482,
      superficie: "",
      volumen: "1,633",
    }, //Santiago Pinotepa Nacional
    {
      id: 20467,
      superficie: "",
      volumen: "382",
    }, //Santiago Jamiltepec
  ],
  "Sierra de Flores Magón": [
    //1
    //
    {
      id: 20406,
      superficie: "",
      volumen: "212",
    }, //Santa María Chilchotla
  ],
  "Sierra Sur": [
    //1
    //
    {
      id: 20386,
      superficie: "",
      volumen: "455",
    }, //Santa Cruz Zenzontepec
  ],
};

/* PRODUCCION NACIONAL DE CARNE DE PORCINO	 */
const estados_datos_pro = [
  //11
  {
    id: "JAL",
    superficie: "",
    volumen: "411,681",
  }, //Jalisco
  {
    id: "SON",
    superficie: "",
    volumen: "314,096",
  }, //Sonora
  {
    id: "PUE",
    superficie: "",
    volumen: "187,936",
  }, //Puebla
  {
    id: "YUC",
    superficie: "",
    volumen: "166,132",
  }, //Yucatán
  {
    id: "VER",
    superficie: "",
    volumen: "161,911",
  }, //Veracruz
  {
    id: "GTO",
    superficie: "",
    volumen: "140,169",
  }, //Guanajuato
  {
    id: "MICH",
    superficie: "",
    volumen: "53,140",
  }, //Michoacán
  {
    id: "CHS",
    superficie: "",
    volumen: "32,546",
  }, //Chiapas
  {
    id: "OAX",
    superficie: "",
    volumen: "29,567",
  }, //Oaxaca
  {
    id: "QRO",
    superficie: "",
    volumen: "27,676",
  }, //Querétaro
  {
    id: "SLP",
    superficie: "",
    volumen: "26,070",
  }, //San Luis Potosí
];

/* PRODUCCION MUNDIAL DEL SECTOR PORCINO */
const paises_datos_pro = [
  //13
  { id: "CHN", volumen: "111,731,097" }, //China, Continental
  { id: "USA", volumen: "12,251,984" }, //Estados Unidos de América
  { id: "BRA", volumen: "5,186,303" }, //Brasil
  { id: "ESP", volumen: "5,066,350" }, //España
  { id: "RUS", volumen: "4,532,147" }, //Federación de Rusia
  { id: "DEU", volumen: "4,491,710" }, //Alemania
  { id: "VNM", volumen: "3,102,000" }, //VietNam
  { id: "CAN", volumen: "2,262,744" }, //Canadá
  { id: "FRA", volumen: "2,152,260" }, //Francia
  { id: "POL", volumen: "1,804,960" }, //Polonia
  { id: "MEX", volumen: "1,730,051" }, //México
  { id: "NLD", volumen: "1,683,580" }, //Países Bajos (Reino de los)
];

/* Datos para la primera tabla sobre la producción de carne de porcino a nivel mundial */
const tabla_paises_prod = [
  //13
  { ranking: 1, pais: "China", volumen: 56321097 },
  { ranking: 2, pais: "China, Continental", volumen: 55410000 },
  { ranking: 3, pais: "Estados Unidos de América", volumen: 12251984 },
  { ranking: 4, pais: "Brasil", volumen: 5186303 },
  { ranking: 5, pais: "España", volumen: 5066350 },
  { ranking: 6, pais: "Federación de Rusia", volumen: 4532147 },
  { ranking: 7, pais: "Alemania", volumen: 4491710 },
  { ranking: 8, pais: "VietNam", volumen: 3102000 },
  { ranking: 9, pais: "Canadá", volumen: 2262744 },
  { ranking: 10, pais: "Francia", volumen: 2152260 },
  { ranking: 11, pais: "Polonia", volumen: 1804960 },
  { ranking: 12, pais: "México", volumen: 1730051 },
  { ranking: 13, pais: "Países Bajos (Reino de los)", volumen: 1683580 },
  { pais: "otros", volumen: 22911308 },
];

/* PRODUCCION NACIONAL DEL SECTOR PORCINO */
/* CARNE DE PORCINO */
const tab_mex_pro = [
  {
    ranking: 1,
    entidad: "Jalisco",
    volumen: 411681,
    peso: 85,
    precio: 53,
    valor: 22362488000,
  },
  {
    ranking: 2,
    entidad: "Sonora",
    volumen: 314096,
    peso: 97,
    precio: 47,
    valor: 14668509000,
  },
  {
    ranking: 3,
    entidad: "Puebla",
    volumen: 187936,
    peso: 81,
    precio: 57,
    valor: 9777516000,
  },
  {
    ranking: 4,
    entidad: "Yucatán",
    volumen: 166132,
    peso: 82,
    precio: 53,
    valor: 8921092000,
  },
  {
    ranking: 5,
    entidad: "Veracruz",
    volumen: 161911,
    peso: 83,
    precio: 52,
    valor: 8514283000,
  },
  {
    ranking: 6,
    entidad: "Guanajuato",
    volumen: 140169,
    peso: 84,
    precio: 54,
    valor: 7277233000,
  },
  {
    ranking: 7,
    entidad: "Michoacán",
    volumen: 53140,
    peso: 77,
    precio: 54,
    valor: 2727310000,
  },
  {
    ranking: 8,
    entidad: "Chiapas",
    volumen: 32546,
    peso: 77,
    precio: 50,
    valor: 1740605000,
  },
  {
    ranking: 9,
    entidad: "Oaxaca",
    volumen: 29567,
    peso: 64,
    precio: 47,
    valor: 1490919000,
  },
  {
    ranking: 10,
    entidad: "Querétaro",
    volumen: 27676,
    peso: 83,
    precio: 49,
    valor: 1487414000,
  },
  {
    ranking: 11,
    entidad: "San Luis Potosí",
    volumen: 26070,
    peso: 78,
    precio: 58,
    valor: 1386856000,
  },
  {
    ranking: "",
    entidad: "Otros",
    volumen: 217602,
    peso: 79,
    precio: 52,
    valor: 11327842000,
  },
];

/* Etiquetas para el periodo de tiempo usado en la grafica de balanza nacional */
const labels_balanza = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2022,
];
/* Importaciones que del sector porcino */
const importacion_balanza = [
  528475, 456975, 542745, 601991, 629493, 754729, 785160, 833246, 913784,
  914682, 722760, 1057947, 1225374,
];

/* Exportaciones del sector porcino */
const exportacion_balanza = [
  59841, 65836, 72842, 85340, 90220, 98449, 108772, 130780, 136945, 177076,
  244954, 243849, 201635,
];

/* Etiquetas para el periodo de tiempo usado en la grafica de produccion historica */
const labels_historica_producto = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  2023,
];

/* Valore para la grafica de produccion historica  producto principal carne*/
const produccion_historica_producto = [
  {
    nom: "Sierra de Florez Magón",
    fila: [
      1281, 1320, 1360, 1385, 1412, 1422, 1438, 1441, 1505, 1514, 1533, 1513,
      1508, 1479,
    ],
  },
  {
    nom: "Costa",
    fila: [
      3675, 3778, 3826, 3856, 3855, 3971, 3765, 3926, 4042, 4239, 4256, 4683,
      4394, 4446,
    ],
  },
  {
    nom: "Istmo",
    fila: [
      5883, 6091, 4891, 4944, 4907, 4743, 4815, 4851, 4965, 5005, 5156, 5595,
      5223, 5305,
    ],
  },
  {
    nom: "Mixteca",
    fila: [
      6638, 6883, 5865, 5571, 5072, 4756, 4667, 4564, 4313, 4111, 4194, 4181,
      4236, 4211,
    ],
  },
  {
    nom: "Papaloapan",
    fila: [
      4193, 4340, 4203, 4439, 4404, 4135, 4311, 4319, 4400, 4590, 4762, 4743,
      4673, 4538,
    ],
  },
  {
    nom: "Sierra de Juárez",
    fila: [
      1830, 1889, 2114, 2059, 2064, 2058, 1990, 2013, 2027, 2109, 2117, 2141,
      2143, 2152,
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [
      ,
      ,
      1928,
      1935,
      2057,
      2057,
      2083,
      2095,
      2129,
      2161,
      2250,
      2294,
      2279,
      2274,
    ],
  },
  {
    nom: "Valles Centrales",
    fila: [
      7182, 7463, 4747, 4626, 4740, 4685, 4803, 4472, 4735, 4815, 5088, 5047,
      5157, 5162,
    ],
  },
];

/* DATO DE LA TABLA PRODUCCION  DE CARNE DE CAPRINO EN OAXACA	 */
const tabla_produccion_producto = [
  {
    region: "Istmo",
    volumen: 5305,
    peso: 67,
    precio: 57,
    valor: 301855000,
    municipios: 41,
  },
  {
    region: "Valles Centrales",
    volumen: 5162,
    peso: 69,
    precio: 42,
    valor: 215203000,
    municipios: 118,
  },
  {
    region: "Papaloapan",
    volumen: 4538,
    peso: 63,
    precio: 61,
    valor: 276557000,
    municipios: 20,
  },
  {
    region: "Costa",
    volumen: 4446,
    peso: 68,
    precio: 50,
    valor: 220883000,
    municipios: 46,
  },
  {
    region: "Mixteca",
    volumen: 4211,
    peso: 59,
    precio: 44,
    valor: 183789000,
    municipios: 155,
  },
  {
    region: "Sierra Sur",
    volumen: 2274,
    peso: 65,
    precio: 46,
    valor: 103025000,
    municipios: 66,
  },
  {
    region: "Sierra de Juárez",
    volumen: 2152,
    peso: 64,
    precio: 47,
    valor: 103040000,
    municipios: 66,
  },
  {
    region: "Sierra de Flores Magón",
    volumen: 1479,
    peso: 62,
    precio: 56,
    valor: 83566000,
    municipios: 45,
  },
];

/* Datos grafica VOLUMEN DE PRODUCCION POR PUEBLO INDIGENA CARNE */
const pub_indigenas_producto = [
  [
    "NO PUEBLO INDIGENA",
    "ZAPOTECO",
    "MIXTECO",
    "CHINANTECO",
    "MAZATECO",
    "CHATINO",
    "HUAVE",
    "MIXE",
    "CHONTAL DE OAXACA",
    "ZOQUE",
    "NAHUA",
    "CUICATECO",
    "CHOCHOLTECO",
    "AMUZGO",
    "TRIQUI",
  ],
  [6883, 7202, 6634, 4050, 1747, 732, 686, 649, 308, 290, 208, 124, 34, 14, 7],
];

/* Datos Grafica ESTACIONALIDAD DE LA PRODUCCION EN OAXACA CARNE */
const estacionalidad_producto = [
  86, 83, 91, 94, 93, 96, 99, 113, 120, 122, 125, 109,
];

/* Datos Tabla MUNICIPIOS QUE PRODUCEN CARNE DE CAPRINO EN OAXACA */
const tab_mun_producto_oax = [
  { nom: "Istmo", num: 9 },
  { nom: "Papaloapan", num: 6 },
  { nom: "Valles Centrales ", num: 4 },
  { nom: "Mixteca", num: 4 },
  { nom: "Costa", num: 2 },
  { nom: "Sierra De Flores Magón ", num: 1 },
  { nom: "Sierra Sur", num: 1 },
];
