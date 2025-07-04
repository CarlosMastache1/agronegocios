const regionesConMunicipios = {
  //39
  Mixteca: [
    //19
    {
      id: 20549,
      volumen: 134,
      nombre: "H. V. Tezoatlán de Segura y Luna, C. de la I.de O."
    }, 
    {
      id: 20261,
      volumen: 106,
      nombre: "San Miguel Amatitlán"
    }, 
    {
      id: 20039,
      volumen: 81,
      nombre: "Heroica Ciudad de Huajuapan de León"
    }, 
    {
      id: 20459,
      volumen: 67,
      nombre: "Santiago Chazumba"
    }, 
    {
      id: 20469,
      volumen: 52,
      nombre: "Santiago Juxtlahuaca"
    }, 
    {
      id: 20089,
      volumen: 50,
      nombre: "San Andrés Dinicuiti"
    }, 
    {
      id: 20340,
      volumen: 45,
      nombre: "San Pedro Y San Pablo Tequixtepec"
    }, 
    {
      id: 20417,
      volumen: 45,
      nombre: "San Juan Mixtepec"
    }, 
    {
      id: 20252,
      volumen: 44,
      nombre: "San Mateo Peñasco"
    }, 
    {
      id: 20397,
      volumen: 43,
      nombre: "Heroica Ciudad de Tlaxiaco"
    }, 
    {
      id: 20348,
      volumen: 43,
      nombre: "San Sebastián Tecomaxtlahuaca"
    }, 
    {
      id: 20210,
      volumen: 39,
      nombre: "San Juan Ñumí"
    }, 
    {
      id: 20537,
      volumen: 33,
      nombre: "Silacayoápam"
    }, 
    {
      id: 20297,
      volumen: 33,
      nombre: "San Pablo Tijaltepec"
    }, 
    {
      id: 20445,
      volumen: 33,
      nombre: "Santa María Yosoyúa"
    }, 
    {
      id: 2022,
      volumen: 28,
      nombre: "Cosoltepec"
    }, 
    {
      id: 20548,
      volumen: 26,
      nombre: "Tepelmeme Villa de Morelos"
    }, 
    {
      id: 20006,
      volumen: 25,
      nombre: "Asunción Nochixtlán"
    }, 
    {
      id: 20176,
      volumen: 24,
      nombre: "San Juan Bautista Coixtlahuaca"
    }, 
  ],
  "Sierra Sur": [
    //4
    {
      id: 20059,
      volumen: 74,
      nombre: "Miahuatlán de Porfirio Díaz"
    }, 
    {
      id: 20277,
      volumen: 37,
      nombre: "Villa Sola de Vega"
    }, 
    {
      id: 20073,
      volumen: 23,
      nombre: "Putla Villa de Guerrero"
    }, 
    {
      id: 20450,
      volumen: 20,
      nombre: "Santiago Amoltepec"
    }, 
  ],
  "Valles Centrales": [
    //14
    {
      id: 20068,
      volumen: 65,
      nombre: "Ocotlán de Morelos"
    }, 
    {
      id: 20028,
      volumen: 62,
      nombre: "Heroica Ciudad de Ejutla de Crespo"
    }, 
    {
      id: 20570,
      volumen: 55,
      nombre: "Zimatlán de Álvarez"
    }, 
    {
      id: 20565,
      volumen: 36,
      nombre: "Villa de Zaachila"
    }, 
    {
      id: 20295,
      volumen: 35,
      nombre: "San Pablo Huixtepec"
    }, 

    {
      id: 20387,
      volumen: 27,
      nombre: "Santa Gertrudis"
    }, 

    {
      id: 20398,
      volumen: 33,
      nombre: "Ayoquezco de Aldama"
    }, 

    {
      id: 20013,
      volumen: 25,
      nombre: "Ciénega de Zimatlán"
    }, 
    {
      id: 20072,
      volumen: 25,
      nombre: "San José del Progreso"
    }, 
    {
      id: 20494,
      volumen: 24,
      nombre: "Santiago Tlazoyaltepec"
    }, 
    {
      id: 20017,
      volumen: 24,
      nombre: "La Compañía"
    }, 
    {
      id: 20551,
      volumen: 22,
      nombre: "Tlacolula de Matamoros"
    }, 
    {
      id: 20555,
      volumen: 22,
      nombre: "Trinidad Zaachila"
    }, 
    {
      id: 20550,
      volumen: 21,
      nombre: "San Jerónimo Tlacochahuaya"
    }, 
  ],
  Istmo: [
    //1
    {
      id: 20515,
      volumen: 29,
      nombre: "Santo Domingo Tehuantepec"
    }, 
  ],
  "Sierra de Juárez": [
    //1

    {
      id: 20262,
      volumen: 24,
      nombre: "San Miguel Amatlán"
    }, 
  ],
};


/* PRODUCCION NACIONAL DEL SECTOR CAPRINO */
/* CARNE DE CABRA */
const tab_mex_pro = [
  {
    ranking: 1,
    id: "ZAC",
    entidad: "Zacatecas",
    volumen: 4487,
    peso: 19,
    precio: 73,
    valor: 335469000,
  },
  {
    ranking: 2,
    id: "SLP",
    entidad: "San Luis Potosí",
    volumen: 4319,
    peso: 20,
    precio: 78,
    valor: 334872000,
  },
  {
    ranking: 3,
    id: "PUE",
    entidad: "Puebla",
    volumen: 3988,
    peso: 20,
    precio: 67,
    valor: 268670000,
  },
  {
    ranking: 4,
    id: "COA",
    entidad: "Coahuila",
    volumen: 3967,
    peso: 18,
    precio: 72,
    valor: 283596000,
  },
  {
    ranking: 5,
    id: "GRO",
    entidad: "Guerrero",
    volumen: 3808,
    peso: 19,
    precio: 74,
    valor: 280888000,
  },
  {
    ranking: 6,
    id: "OAX",
    entidad: "Oaxaca",
    volumen: 3754,
    peso: 15,
    precio: 73,
    valor: 273500000,
  },
  {
    ranking: 7,
    id: "MICH",
    entidad: "Michoacán",
    volumen: 2666,
    peso: 18,
    precio: 75,
    valor: 197658000,
  },
  {
    ranking: 8,
    id: "JAL",
    entidad: "Jalisco",
    volumen: 2085,
    peso: 21,
    precio: 82,
    valor: 170464000,
  },
  {
    ranking: 9,
    id: "NL",
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

/* Datos para la primera tabla sobre la producción de carne de caprino a nivel mundial */
const tabla_paises_prod = [
  //22
  { id: "CHN", ranking: 1, pais: "China", volumen: 2489249 },
  { id: "CHN", ranking: 2, pais: "China, Continental", volumen: 2487701 },
  { id: "IND", ranking: 3, pais: "India", volumen: 550615 },
  { id: "PAK", ranking: 4, pais: "Pakistán", volumen: 532000 },
  { id: "NGA", ranking: 5, pais: "Nigeria", volumen: 277847 },
  { id: "AFG", ranking: 19, pais: "Afganistán", volumen: 47562 },
  { id: "MEX", ranking: 20, pais: "México", volumen: 40826 },
  { id: "BRA", ranking: 21, pais: "Brasil", volumen: 39891 },
  { id: "IRN", ranking: 22, pais: "Irán (República Islámica del)", volumen: 38839 },
  { pais: "otros", volumen: 984862 },
];


const agrupado2 = {};

tabla_paises_prod.forEach((item) => {
  if (!agrupado2[item.id]) {
    agrupado2[item.id] = { ...item };
  } else {
    // Sumamos superficie
    agrupado2[item.id].superficie += item.superficie;

    agrupado2[item.id].volumen += item.volumen;
  }
});

// Convertimos el objeto agrupado a arreglo y ajustamos el ranking
const paises_datos_pro = Object.values(agrupado2).map((item, i) => ({
  ...item,
  ranking: i + 1,
}));

/* LECHE DE CABRAS */
const paises_datos_sub_pro = [
  //26
  { id: "IND", volumen: "6248338.34" }, //India
  { id: "SDN", volumen: "1160272.58" }, //Sudán
  { id: "PAK", volumen: "1018000" }, //Pakistán
  { id: "BGD", volumen: "915180" }, //Bangladesh
  { id: "FRA", volumen: "717610" }, //Francia
  { id: "TUR", volumen: "540425.93" }, //Turquía   
  { id: "", volumen: "221600" }, //Rumania
  { id: "CHN", volumen: "219339.9" }, //China, Continental
  { id: "JAM", volumen: "196861.3" }, //Jamaica
  { id: "MEX", volumen: "173673" }, //México
  { id: "MNG", volumen: "169585.13" }, //Mongolia
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
