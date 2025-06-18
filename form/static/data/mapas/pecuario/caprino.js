const regionesConMunicipios = {
  //39
  Mixteca: [
    //19
    {
      id: 20549,
      territorio: "",
      toneladas: "134",
    }, //H. V. Tezoatlán de Segura y Luna, C. de la I.de O.
    {
      id: 20261,
      territorio: "",
      toneladas: "106",
    }, //San Miguel Amatitlán
    {
      id: 20039,
      territorio: "",
      toneladas: "81",
    }, //Heroica Ciudad de Huajuapan de León
    {
      id: 20459,
      territorio: "",
      toneladas: "67",
    }, //Santiago Chazumba
    {
      id: 20469,
      territorio: "",
      toneladas: "52",
    }, //Santiago Juxtlahuaca
    {
      id: 20089,
      territorio: "",
      toneladas: "50",
    }, //San Andrés Dinicuiti
    {
      id: 20340,
      territorio: "",
      toneladas: "45",
    }, //San Pedro Y San Pablo Tequixtepec
    {
      id: 20417,
      territorio: "",
      toneladas: "45",
    }, //San Juan Mixtepec
    {
      id: 20252,
      territorio: "",
      toneladas: "44",
    }, //San Mateo Peñasco
    {
      id: 20397,
      territorio: "",
      toneladas: "43",
    }, //Heroica Ciudad de Tlaxiaco
    {
      id: 20348,
      territorio: "",
      toneladas: "43",
    }, //San Sebastián Tecomaxtlahuaca
    {
      id: 20210,
      territorio: "",
      toneladas: "39",
    }, //San Juan Ñumí
    {
      id: 20537,
      territorio: "",
      toneladas: "33",
    }, //Silacayoápam
    {
      id: 20297,
      territorio: "",
      toneladas: "33",
    }, //San Pablo Tijaltepec
    {
      id: 20445,
      territorio: "",
      toneladas: "33",
    }, //Santa María Yosoyúa
    {
      id: 2022,
      territorio: "",
      toneladas: "28",
    }, //Cosoltepec
    {
      id: 20548,
      territorio: "",
      toneladas: "26",
    }, //Tepelmeme Villa de Morelos
    {
      id: 20006,
      territorio: "",
      toneladas: "25",
    }, //Asunción Nochixtlán
    {
      id: 20176,
      territorio: "",
      toneladas: "24",
    }, //San Juan Bautista Coixtlahuaca
  ],
  "Sierra Sur": [
    //4
    {
      id: 20059,
      territorio: "",
      toneladas: "74",
    }, //Miahuatlán de Porfirio Díaz
    {
      id: 20277,
      territorio: "",
      toneladas: "37",
    }, //Villa Sola de Vega
    {
      id: 20073,
      territorio: "",
      toneladas: "23",
    }, //Putla Villa de Guerrero
    {
      id: 20450,
      territorio: "",
      toneladas: "20",
    }, //Santiago Amoltepec
  ],
  "Valles Centrales": [
    //14
    {
      id: 20068,
      territorio: "",
      toneladas: "65",
    }, //Ocotlán de Morelos
    {
      id: 20028,
      territorio: "",
      toneladas: "62",
    }, //Heroica Ciudad de Ejutla de Crespo
    {
      id: 20570,
      territorio: "",
      toneladas: "55",
    }, //Zimatlán de Álvarez
    {
      id: 20565,
      territorio: "",
      toneladas: "36",
    }, //Villa de Zaachila
    {
      id: 20295,
      territorio: "",
      toneladas: "35",
    }, //San Pablo Huixtepec

    {
      id: 20387,
      territorio: "",
      toneladas: "27",
    }, //Santa Gertrudis

    {
      id: 20398,
      territorio: "",
      toneladas: "33",
    }, //Ayoquezco de Aldama

    {
      id: 20013,
      territorio: "",
      toneladas: "25",
    }, //Ciénega de Zimatlán
    {
      id: 20072,
      territorio: "",
      toneladas: "25",
    }, //San José del Progreso
    {
      id: 20494,
      territorio: "",
      toneladas: "24",
    }, //Santiago Tlazoyaltepec
    {
      id: 20017,
      territorio: "",
      toneladas: "24",
    }, //La Compañía
    {
      id: 20551,
      territorio: "",
      toneladas: "22",
    }, //Tlacolula de Matamoros
    {
      id: 20555,
      territorio: "",
      toneladas: "22",
    }, //Trinidad Zaachila
    {
      id: 20550,
      territorio: "",
      toneladas: "21",
    }, //San Jerónimo Tlacochahuaya
  ],
  Istmo: [
    //1
    {
      id: 20515,
      territorio: "",
      toneladas: "29",
    }, //Santo Domingo Tehuantepec
  ],
  "Sierra de Juárez": [
    //1

    {
      id: 20262,
      territorio: "",
      toneladas: "24",
    }, //San Miguel Amatlán
  ],
};

/* PRODUCCION NACIONAL DE CARNE DE CAPRINO		 */
const estados_datos_pro = [
  //9
  {
    id: "ZAC",
    territorio: "",
    toneladas: "4,487",
  }, //Zacatecas
  {
    id: "SLP",
    territorio: "",
    toneladas: "4,319",
  }, //San Luis Potosí
  {
    id: "PUE",
    territorio: "",
    toneladas: "3,988",
  }, //Puebla
  {
    id: "COA",
    territorio: "",
    toneladas: "3,967",
  }, //Coahuila
  {
    id: "GRO",
    territorio: "",
    toneladas: "3,808",
  }, //Guerrero
  {
    id: "OAX",
    territorio: "",
    toneladas: "3,754",
  }, //Oaxaca
  {
    id: "MICH",
    territorio: "",
    toneladas: "2,666",
  }, //Michoacán
  {
    id: "JAL",
    territorio: "",
    toneladas: "2,085",
  }, //Jalisco
  {
    id: "NL",
    territorio: "",
    toneladas: "1,660",
  }, //Nuevo León
];

/* PRODUCCION MUNDIAL DEL SECTOR CAPRINO */
/* CARNE DE CAPRINOS */
const paises_datos_pro = [
  //22
  { id: "CHN", toneladas: "4,976,950" }, //China, Continental
  { id: "IND", toneladas: "550,615" }, //India
  { id: "PAK", toneladas: "532,000" }, //Pakistán
  { id: "NGA", toneladas: "277,847" }, //Nigeria
  /* { id: "", toneladas: "" },  */
  { id: "AFG", toneladas: "47,562" }, //Afganistán
  { id: "MEX", toneladas: "40,826" }, //México
  { id: "BRA", toneladas: "39,891" }, //Brasil
  { id: "IRN", toneladas: "38,839" }, //Irán (República Islámica del)
];

/* LECHE DE CABRAS */
const paises_datos_sub_pro = [
  //26
  { id: "IND", toneladas: "6248338.34" }, //India
  { id: "SDN", toneladas: "1160272.58" }, //Sudán
  { id: "PAK", toneladas: "1018000" }, //Pakistán
  { id: "BGD", toneladas: "915180" }, //Bangladesh
  { id: "FRA", toneladas: "717610" }, //Francia
  { id: "TUR", toneladas: "540425.93" }, //Turquía
  /* { id: "", toneladas: "" },  */
  { id: "", toneladas: "221600" }, //Rumania
  { id: "CHN", toneladas: "219339.9" }, //China, Continental
  { id: "JAM", toneladas: "196861.3" }, //Jamaica
  { id: "MEX", toneladas: "173673" }, //México
  { id: "MNG", toneladas: "169585.13" }, //Mongolia
];

/* Datos para la primera tabla sobre la producción de carne de caprino a nivel mundial */
const tabla_paises_prod = [
  //22
  { ranking: 1, pais: "China", volumen: 2489249 },
  { ranking: 2, pais: "China, Continental", volumen: 2487701 },
  { ranking: 3, pais: "India", volumen: 550615 },
  { ranking: 4, pais: "Pakistán", volumen: 532000 },
  { ranking: 5, pais: "Nigeria", volumen: 277847 },
  { ranking: 19, pais: "Afganistán", volumen: 47562 },
  { ranking: 20, pais: "México", volumen: 40826 },
  { ranking: 21, pais: "Brasil", volumen: 39891 },
  { ranking: 22, pais: "Irán (República Islámica del)", volumen: 38839 },
  { pais: "otros", volumen: 984862 },
];

const tabla_paises_sub_prod = [
  { ranking: 1, pais: "India", volumen: 6248338.34 },
  { ranking: 2, pais: "Sudán", volumen: 1160272.58 },
  { ranking: 3, pais: "Pakistán", volumen: 1018000 },
  { ranking: 4, pais: "Bangladesh", volumen: 915180 },
  { ranking: 5, pais: "Francia", volumen: 717610 },
  { ranking: 6, pais: "Turquía", volumen: 540425.93 },
  { ranking: 22, pais: "Rumania", volumen: 221600 },
  { ranking: 23, pais: "China, Continental", volumen: 219339.9 },
  { ranking: 24, pais: "Jamaica", volumen: 196861.3 },
  { ranking: 25, pais: "México", volumen: 173673 },
  { ranking: 26, pais: "Mongolia", volumen: 169585.13 },
  { pais: "otros", volumen: 2780822.24 },
];

/* PRODUCCION NACIONAL DEL SECTOR CAPRINO */
/* CARNE DE CABRA */
const tab_mex_pro = [
  {
    ranking: 1,
    entidad: "Zacatecas",
    volumen: 4487,
    peso: 19,
    precio: 73,
    valor: 335469000,
  },
  {
    ranking: 2,
    entidad: "San Luis Potosí",
    volumen: 4319,
    peso: 20,
    precio: 78,
    valor: 334872000,
  },
  {
    ranking: 3,
    entidad: "Puebla",
    volumen: 3988,
    peso: 20,
    precio: 67,
    valor: 268670000,
  },
  {
    ranking: 4,
    entidad: "Coahuila",
    volumen: 3967,
    peso: 18,
    precio: 72,
    valor: 283596000,
  },
  {
    ranking: 5,
    entidad: "Guerrero",
    volumen: 3808,
    peso: 19,
    precio: 74,
    valor: 280888000,
  },
  {
    ranking: 6,
    entidad: "Oaxaca",
    volumen: 3754,
    peso: 15,
    precio: 73,
    valor: 273500000,
  },
  {
    ranking: 7,
    entidad: "Michoacán",
    volumen: 2666,
    peso: 18,
    precio: 75,
    valor: 197658000,
  },
  {
    ranking: 8,
    entidad: "Jalisco",
    volumen: 2085,
    peso: 21,
    precio: 82,
    valor: 170464000,
  },
  {
    ranking: 9,
    entidad: "Nuevo León",
    volumen: 1660,
    peso: 7,
    precio: 131,
    valor: 175290000,
  },
  {
    ranking: "",
    entidad: "Otros",
    volumen: 10299,
    peso: 18,
    precio: 76,
    valor: 782141000,
  },
];

/* Etiquetas para el periodo de tiempo usado en la grafica de balanza nacional */
const labels_balanza = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2022,
];
/* Importaciones que del sector caprino */
const importacion_balanza = [];

/* Exportaciones del sector caprino */
const exportacion_balanza = [61, 59, 49, 48, 66, 95, 64, 77, 324, 121];

/* Etiquetas para el periodo de tiempo usado en la grafica de produccion historica */
const labels_historica_producto = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  2023,
];

/* Valore para la grafica de produccion historica  producto principal carne*/
const produccion_historica_producto = [
  {
    nom: "Sierra de Florez Magón",
    fila: [67, 67, 68, 69, 69, 70, 70, 68, 71, 71, 71, 71, 70, 75],
  },
  {
    nom: "Costa",
    fila: [80, 82, 91, 89, 80, 85, 86, 91, 93, 95, 93, 96, 95, 99],
  },
  {
    nom: "Istmo",
    fila: [
      309, 313, 107, 103, 106, 110, 119, 122, 124, 127, 131, 132, 138, 144,
    ],
  },
  {
    nom: "Mixteca",
    fila: [
      2592, 2660, 2130, 2024, 1958, 1922, 1884, 1861, 1775, 1726, 1667, 1675,
      1687, 1687,
    ],
  },
  {
    nom: "Papaloapan",
    fila: [24, 25, 13, 14, 15, 14, 13, 13, 14, 14, 12, 11, 10, 9],
  },
  {
    nom: "Sierra de Juárez",
    fila: [
      178, 180, 186, 188, 187, 187, 187, 182, 190, 190, 189, 191, 195, 187,
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [, , 306, 327, 364, 358, 361, 373, 367, 372, 380, 389, 392, 397],
  },
  {
    nom: "Valles Centrales",
    fila: [
      1234, 1295, 1132, 1115, 1130, 1150, 1152, 974, 996, 1076, 1116, 1127,
      1136, 1155,
    ],
  },
];

/* DATO DE LA TABLA PRODUCCION  DE CARNE DE CAPRINO EN OAXACA	 */
const tabla_produccion_producto = [
  {
    region: "Mixteca",
    volumen: 1687,
    peso: 17,
    precio: 73,
    valor: 123010000,
    municipios: 145,
  },
  {
    region: "Valles Centrales",
    volumen: 1155,
    peso: 13,
    precio: 73,
    valor: 84184000,
    municipios: 119,
  },
  {
    region: "Sierra Sur",
    volumen: 397,
    peso: 14,
    precio: 73,
    valor: 28957000,
    municipios: 64,
  },
  {
    region: "Sierra de Juárez",
    volumen: 187,
    peso: 17,
    precio: 72,
    valor: 13551000,
    municipios: 53,
  },
  {
    region: "Istmo",
    volumen: 144,
    peso: 16,
    precio: 73,
    valor: 10492000,
    municipios: 33,
  },
  {
    region: "Costa",
    volumen: 99,
    peso: 17,
    precio: 72,
    valor: 7153000,
    municipios: 28,
  },
  {
    region: "Sierra de Flores Magón ",
    volumen: 75,
    peso: 17,
    precio: 73,
    valor: 5469000,
    municipios: 45,
  },
  {
    region: "Papaloapan",
    volumen: 9,
    peso: 18,
    precio: 72,
    valor: 685000,
    municipios: 4,
  },
];

/* Datos grafica VOLUMEN DE PRODUCCION POR PUEBLO INDIGENA CARNE */
const pub_indigenas_producto = [
  [
    "NO PUEBLO INDIGENA",
    "MIXTECO",
    "ZAPOTECO",
    "MIXE",
    "MAZATECO",
    "CHOCHOLTECO",
    "CHATINO",
    "HUAVE",
    "CHINANTECO",
    "TRIQUI",
    "AMUZGO",
    "CUICATECO",
    "CHONTAL DE OAXACA",
    "ZOQUE",
    "NAHUA",
  ],
  [995, 1340, 1169, 54, 42, 35, 35, 17, 15, 15, 9, 9, 8, 7, 5],
];

/* Datos Grafica ESTACIONALIDAD DE LA PRODUCCION EN OAXACA CARNE */
const estacionalidad_producto = [
  68, 72, 76, 80, 84, 93, 94, 102, 112, 126, 124, 110,
];

/* Datos Tabla MUNICIPIOS QUE PRODUCEN CARNE DE CAPRINO EN OAXACA */
const tab_mun_producto_oax = [
  { nom: "Mixteca", num: 19 },
  { nom: "Sierra Sur", num: 4 },
  { nom: "Valles Centrales", num: 14 },
  { nom: "Istmo", num: 1 },
  { nom: "Sierra de Juárez", num: 1 },
];
