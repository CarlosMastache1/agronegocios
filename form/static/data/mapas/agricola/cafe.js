//Nombre del producto
const nombre_producto = "Café";

// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  //151
  //35
  "Sierra de Juárez": [
    {
      id: 20207,
      superficie: 1060,
      volumen: 1054,
      nombre: "San Juan Mazatlán",
    },
    {
      id: 20465,
      superficie: 515,
      volumen: 510,
      nombre: "Santiago Ixcuintepec",
    },
    {
      id: 20042,
      superficie: 1467,
      volumen: 1237,
      nombre: "Ixtlán de Juárez",
    },
    {
      id: 20214,
      superficie: 101,
      volumen: 101,
      nombre: "San Juan Quiotepec",
    },
    {
      id: 20288,
      superficie: 195,
      volumen: 170,
      nombre: "San Miguel Yotao",
    },
    {
      id: 20335,
      superficie: 282,
      volumen: 269,
      nombre: "San Pedro Yaneri",
    },
    {
      id: 20336,
      superficie: 221,
      volumen: 221,
      nombre: "San Pedro Yólox",
    },
    {
      id: 20458,
      superficie: 241,
      volumen: 241,
      nombre: "Santiago Comaltepec",
    },
    {
      id: 20097,
      superficie: 101,
      volumen: 98,
      nombre: "San Andrés Solaga",
    },
    {
      id: 20100,
      superficie: 73,
      volumen: 73,
      nombre: "San Andrés Yaá",
    },
    {
      id: 20128,
      superficie: 158,
      volumen: 158,
      nombre: "San Cristóbal Lachirioag",
    },
    {
      id: 20156,
      superficie: 669,
      volumen: 659,
      nombre: "San Ildefonso Villa Alta",
    },
    {
      id: 20201,
      superficie: 358,
      volumen: 353,
      nombre: "San Juan Juquila Vijanos",
    },
    {
      id: 20216,
      superficie: 92,
      volumen: 90,
      nombre: "San Juan Tabaá",
    },
    {
      id: 20222,
      superficie: 371,
      volumen: 362,
      nombre: "San Juan Yaeé",
    },
    {
      id: 20223,
      superficie: 206,
      volumen: 206,
      nombre: "San Juan Yatzona",
    },
    {
      id: 20257,
      superficie: 65,
      volumen: 65,
      nombre: "San Melchor Betaza",
    },
    {
      id: 20280,
      superficie: 632,
      volumen: 627,
      nombre: "Villa Talea de Castro",
    },
    {
      id: 20433,
      superficie: 568,
      volumen: 479,
      nombre: "Santa María Temaxcaltepec",
    },
    {
      id: 20457,
      superficie: 686,
      volumen: 680,
      nombre: "Santiago Camotlán",
    },
    {
      id: 20471,
      superficie: 99,
      volumen: 99,
      nombre: "Santiago Lalopa",
    },
    {
      id: 20514,
      superficie: 153,
      volumen: 153,
      nombre: "Santo Domingo Roayaga",
    },
    {
      id: 20541,
      superficie: 637,
      volumen: 625,
      nombre: "Tanetze de Zaragoza",
    },
    {
      id: 20003,
      superficie: 524,
      volumen: 520,
      nombre: "Asunción Cacalotepec",
    },
    {
      id: 20031,
      superficie: 42,
      volumen: 42,
      nombre: "Tamazulápam del Espíritu Santo",
    },
    {
      id: 20200,
      superficie: 432,
      volumen: 432,
      nombre: "San Juan Juquila Mixes",
    },
    {
      id: 20231,
      superficie: 821,
      volumen: 771,
      nombre: "San Lucas Camotlán",
    },
    {
      id: 20275,
      superficie: 2092,
      volumen: 2082,
      nombre: "San Miguel Quetzaltepec",
    },
    {
      id: 20323,
      superficie: 412,
      volumen: 412,
      nombre: "San Pedro Ocotepec",
    },
    {
      id: 20394,
      superficie: 1040,
      volumen: 1034,
      nombre: "Santa María Alotepec",
    },
    {
      id: 20435,
      superficie: 214,
      volumen: 214,
      nombre: "Santa María Tepantlali",
    },
    {
      id: 20454,
      superficie: 798,
      volumen: 795,
      nombre: "Santiago Atitlán",
    },
    {
      id: 20502,
      superficie: 1254,
      volumen: 1247,
      nombre: "Santiago Zacatepec",
    },
    {
      id: 20554,
      superficie: 444,
      volumen: 440,
      nombre: "Totontepec Villa de Morelos",
    },
    {
      id: 20190,
      superficie: 3335,
      volumen: 3188,
      nombre: "San Juan Cotzocón",
    },
  ],
  //24
  "Sierra Sur": [
    {
      id: 20020,
      superficie: 33,
      volumen: 33,
      nombre: "Constancia del Rosario",
    },
    {
      id: 20073,
      superficie: 2204,
      volumen: 2191,
      nombre: "Putla Villa de Guerrero",
    },
    {
      id: 20076,
      superficie: 908,
      volumen: 897,
      nombre: "La Reforma",
    },
    {
      id: 20088,
      superficie: 414,
      volumen: 413,
      nombre: "San Andrés Cabecera Nueva",
    },
    {
      id: 20377,
      superficie: 280,
      volumen: 277,
      nombre: "Santa Cruz Itundujia",
    },
    {
      id: 20392,
      superficie: 951,
      volumen: 941,
      nombre: "Santa Lucía Monteverde",
    },
    {
      id: 20447,
      superficie: 1238,
      volumen: 1230,
      nombre: "Santa María Zacatepec",
    },
    {
      id: 20148,
      superficie: 128,
      volumen: 125,
      nombre: "San Francisco Ozolotepec",
    },
    {
      id: 20159,
      superficie: 988,
      volumen: 984,
      nombre: "San Jerónimo Coatlán",
    },
    {
      id: 20211,
      superficie: 368,
      volumen: 364,
      nombre: "San Juan Ozolotepec",
    },
    {
      id: 20236,
      superficie: 141,
      volumen: 140,
      nombre: "San Marcial Ozolotepec",
    },
    {
      id: 20254,
      superficie: 233,
      volumen: 231,
      nombre: "San Mateo Río Hondo",
    },
    {
      id: 20291,
      superficie: 484,
      volumen: 482,
      nombre: "San Pablo Coatlán",
    },
    {
      id: 20344,
      superficie: 853,
      volumen: 850,
      nombre: "San Sebastián Coatlán",
    },
    {
      id: 20424,
      superficie: 1175,
      volumen: 1173,
      nombre: "Santa María Ozolotepec",
    },
    {
      id: 20495,
      superficie: 2172,
      volumen: 2164,
      nombre: "Santiago Xanica",
    },
    {
      id: 20137,
      superficie: 82,
      volumen: 79,
      nombre: "San Francisco Cahuacuá",
    },
    {
      id: 20229,
      superficie: 101,
      volumen: 99,
      nombre: "San Lorenzo Texmelúcan",
    },
    {
      id: 20448,
      superficie: 189,
      volumen: 182,
      nombre: "Santa María Zaniza",
    },
    {
      id: 20516,
      superficie: 220,
      volumen: 216,
      nombre: "Santo Domingo Teojomulco",
    },
    {
      id: 20008,
      superficie: 19,
      volumen: 19,
      nombre: "Asunción Tlacolulita",
    },
    {
      id: 20064,
      superficie: 450,
      volumen: 450,
      nombre: "Nejapa de Madero",
    },
    {
      id: 20125,
      superficie: 523,
      volumen: 523,
      nombre: "San Carlos Yautepec",
    },
    {
      id: 20410,
      superficie: 30,
      volumen: 30,
      nombre: "Santa María Ecatepec",
    },
  ],
  //34
  Costa: [
    {
      id: 20070,
      superficie: 28,
      volumen: 26,
      nombre: "Pinotepa de Don Luis",
    },
    {
      id: 20082,
      superficie: 804,
      volumen: 802,
      nombre: "San Agustín Chayuco",
    },
    {
      id: 20111,
      superficie: 18,
      volumen: 16,
      nombre: "San Antonio Tepetlapa",
    },
    {
      id: 20185,
      superficie: 52,
      volumen: 51,
      nombre: "San Juan Cacahuatepec",
    },
    {
      id: 20188,
      superficie: 288,
      volumen: 287,
      nombre: "San Juan Colorado",
    },
    {
      id: 20225,
      superficie: 63,
      volumen: 61,
      nombre: "San Lorenzo",
    },
    {
      id: 20302,
      superficie: 102,
      volumen: 102,
      nombre: "San Pedro Atoyac",
    },
    {
      id: 20367,
      superficie: 34,
      volumen: 34,
      nombre: "Santa Catarina Mechoacán",
    },
    {
      id: 20466,
      superficie: 354,
      volumen: 353,
      nombre: "Santiago Ixtayutla",
    },
    {
      id: 20467,
      superficie: 702,
      volumen: 702,
      nombre: "Santiago Jamiltepec",
    },
    {
      id: 20489,
      superficie: 49,
      volumen: 47.5,
      nombre: "Santiago Tetepec",
    },
    {
      id: 20319,
      superficie: 183,
      volumen: 181,
      nombre: "San Pedro Mixtepec",
    },
    {
      id: 20334,
      superficie: 2123,
      volumen: 2116,
      nombre: "Villa de Tututepec de Melchor Ocampo",
    },
    {
      id: 20439,
      superficie: 305,
      volumen: 300,
      nombre: "Santa María Tonameca",
    },
    {
      id: 20543,
      superficie: 454,
      volumen: 451,
      nombre: "Tataltepec de Valdés",
    },
    {
      id: 20012,
      superficie: 4473,
      volumen: 2672,
      nombre: "Candelaria Loxicha",
    },
    {
      id: 20071,
      superficie: 4815,
      volumen: 3225,
      nombre: "Pluma Hidalgo",
    },
    {
      id: 20085,
      superficie: 5782,
      volumen: 3945,
      nombre: "San Agustín Loxicha",
    },
    {
      id: 20113,
      superficie: 471,
      volumen: 414,
      nombre: "San Baltazar Loxicha",
    },
    {
      id: 20117,
      superficie: 761,
      volumen: 568,
      nombre: "San Bartolomé Loxicha",
    },
    {
      id: 20253,
      superficie: 3755,
      volumen: 2305,
      nombre: "San Mateo Piñas",
    },
    {
      id: 20266,
      superficie: 3663,
      volumen: 2285,
      nombre: "San Miguel del Puerto",
    },
    {
      id: 20306,
      superficie: 279,
      volumen: 157,
      nombre: "San Pedro El Alto",
    },
    {
      id: 20324,
      superficie: 3488,
      volumen: 1881,
      nombre: "San Pedro Pochutla",
    },
    {
      id: 20366,
      superficie: 310,
      volumen: 239,
      nombre: "Santa Catarina Loxicha",
    },
    {
      id: 20413,
      superficie: 1422,
      volumen: 723,
      nombre: "Santa María Huatulco",
    },
    {
      id: 20153,
      superficie: 2382,
      volumen: 1473,
      nombre: "San Gabriel Mixtepec",
    },
    {
      id: 20202,
      superficie: 2299,
      volumen: 1432,
      nombre: "San Juan Lachao",
    },
    {
      id: 20213,
      superficie: 251,
      volumen: 201,
      nombre: "San Juan Quiahije",
    },
    {
      id: 20272,
      superficie: 2016,
      volumen: 1504,
      nombre: "San Miguel Panixtlahuaca",
    },
    {
      id: 20364,
      superficie: 3301,
      volumen: 2485,
      nombre: "Santa Catarina Juquila",
    },
    {
      id: 20433,
      superficie: 568,
      volumen: 479,
      nombre: "Santa María Temaxcaltepec",
    },
    {
      id: 20497,
      superficie: 904,
      volumen: 766,
      nombre: "Santiago Yaitepec",
    },
    {
      id: 20526,
      superficie: 1520,
      volumen: 1214,
      nombre: "Santos Reyes Nopala",
    },
  ],
  //28
  "Sierra de Flrores Magón": [
    {
      id: 20163,
      superficie: 326,
      volumen: 321,
      nombre: "San Jerónimo Tecóatl",
    },
    {
      id: 20322,
      superficie: 412,
      volumen: 412,
      nombre: "San Pedro Ocopetatillo",
    },
    {
      id: 20019,
      superficie: 56,
      volumen: 52,
      nombre: "Concepción Pápalo",
    },
    {
      id: 20024,
      superficie: 541,
      volumen: 48,
      nombre: "Cuyamecalco Villa de Zaragoza",
    },
    {
      id: 20027,
      superficie: 325,
      volumen: 319,
      nombre: "Chiquihuitlán de Benito Juárez",
    },
    {
      id: 20098,
      superficie: 817,
      volumen: 811,
      nombre: "San Andrés Teotilálpam",
    },
    {
      id: 20139,
      superficie: 312,
      volumen: 308,
      nombre: "San Francisco Chapulapa",
    },
    {
      id: 20182,
      superficie: 669,
      volumen: 665,
      nombre: "San Juan Bautista Tlacoatzintepec",
    },
    {
      id: 20220,
      superficie: 121,
      volumen: 116,
      nombre: "San Juan Tepeuxila",
    },
    {
      id: 20326,
      superficie: 1223,
      volumen: 1216,
      nombre: "San Pedro Sochiápam",
    },
    {
      id: 20330,
      superficie: 612,
      volumen: 607,
      nombre: "San Pedro Teutila",
    },
    {
      id: 20355,
      superficie: 119,
      volumen: 111,
      nombre: "Santa Ana Cuauhtémoc",
    },
    {
      id: 20425,
      superficie: 45,
      volumen: 41,
      nombre: "Santa María Pápalo",
    },
    {
      id: 20438,
      superficie: 127,
      volumen: 120,
      nombre: "Santa María Tlalixtac",
    },
    {
      id: 20029,
      superficie: 1030,
      volumen: 1020,
      nombre: "Eloxochitlán de Flores Magón",
    },
    {
      id: 20040,
      superficie: 865,
      volumen: 862,
      nombre: "Huautepec",
    },
    {
      id: 20041,
      superficie: 1273,
      volumen: 1265,
      nombre: "Huautla de Jiménez",
    },
    {
      id: 20058,
      superficie: 1186,
      volumen: 1180,
      nombre: "Mazatlán Villa de Flores",
    },
    {
      id: 20116,
      superficie: 626,
      volumen: 622,
      nombre: "San Bartolomé Ayautla",
    },
    {
      id: 20171,
      superficie: 3746,
      volumen: 3735,
      nombre: "San José Tenango",
    },
    {
      id: 20187,
      superficie: 838,
      volumen: 830,
      nombre: "San Juan Coatzóspam",
    },
    {
      id: 20228,
      superficie: 5,
      volumen: 5,
      nombre: "San Lorenzo Cuaunecuiltitla",
    },
    {
      id: 20234,
      superficie: 996,
      volumen: 984,
      nombre: "San Lucas Zoquiápam",
    },
    {
      id: 20249,
      superficie: 434,
      volumen: 429,
      nombre: "San Mateo Yoloxochitlán",
    },
    {
      id: 20354,
      superficie: 139,
      volumen: 136,
      nombre: "Santa Ana Ateixtlahuaca",
    },
    {
      id: 20374,
      superficie: 280,
      volumen: 277,
      nombre: "Santa Cruz Acatepec",
    },
    {
      id: 20396,
      superficie: 305,
      volumen: 300,
      nombre: "Santa María La Asunción",
    },
    {
      id: 20406,
      superficie: 3572,
      volumen: 3550,
      nombre: "Santa María Chilchotla",
    },
  ],
  //18
  Papaloapan: [
    {
      id: 20166,
      superficie: 144,
      volumen: 104,
      nombre: "San José Chiltepec",
    },
    {
      id: 20417,
      superficie: 917,
      volumen: 697,
      nombre: "Santa María Jacatepec",
    },
    {
      id: 20559,
      superficie: 5133,
      volumen: 4798,
      nombre: "San Juan Bautista Valle Nacional",
    },
    {
      id: 20134,
      superficie: 1112,
      volumen: 842,
      nombre: "San Felipe Jalapa de Díaz",
    },
    {
      id: 20136,
      superficie: 1887,
      volumen: 1677,
      nombre: "San Felipe Usila",
    },
    {
      id: 20232,
      superficie: 380,
      volumen: 255,
      nombre: "San Lucas Ojitlán",
    },
    {
      id: 20309,
      superficie: 718,
      volumen: 518,
      nombre: "San Pedro Ixcatlán",
    },
    {
      id: 20002,
      superficie: 404,
      volumen: 134,
      nombre: "Acatlán de Pérez Figueroa",
    },
    {
      id: 20021,
      superficie: 650,
      volumen: 505,
      nombre: "Cosolapa",
    },
    {
      id: 20169,
      superficie: 275,
      volumen: 165,
      nombre: "San José Independencia",
    },
    {
      id: 20278,
      superficie: 62,
      volumen: 40,
      nombre: "San Miguel Soyaltepec",
    },
    {
      id: 20009,
      superficie: 405,
      volumen: 270,
      nombre: "Ayotzintepec",
    },
    {
      id: 20189,
      superficie: 384,
      volumen: 284,
      nombre: "San Juan Comaltepec",
    },
    {
      id: 20205,
      superficie: 1547,
      volumen: 1357,
      nombre: "San Juan Lalana",
    },
    {
      id: 20212,
      superficie: 451,
      volumen: 297,
      nombre: "San Juan Petlapa",
    },
    {
      id: 20460,
      superficie: 770,
      volumen: 630,
      nombre: "Santiago Choápam",
    },
    {
      id: 20468,
      superficie: 615,
      volumen: 535,
      nombre: "Santiago Jocotepec",
    },
    {
      id: 20498,
      superficie: 502,
      volumen: 480,
      nombre: "Santiago Yaveo",
    },
  ],
  //9
  Istmo: [
    {
      id: 20057,
      superficie: 2300,
      volumen: 1750,
      nombre: "Matías Romero Avendaño",
    },
    {
      id: 20198,
      superficie: 3120,
      volumen: 2500,
      nombre: "San Juan Guichicovi",
    },
    {
      id: 20407,
      superficie: 4800,
      volumen: 4000,
      nombre: "Santa María Chimalapa",
    },
    {
      id: 20513,
      superficie: 2150,
      volumen: 1850,
      nombre: "Santo Domingo Petapa",
    },
    {
      id: 20036,
      superficie: 1300,
      volumen: 900,
      nombre: "Guevea de Humboldt",
    },
    {
      id: 20412,
      superficie: 2900,
      volumen: 2100,
      nombre: "Santa María Guienagati",
    },
    {
      id: 20470,
      superficie: 1200,
      volumen: 900,
      nombre: "Santiago Lachiguiri",
    },
    {
      id: 20472,
      superficie: 850,
      volumen: 700,
      nombre: "Santiago Laollaga",
    },
    {
      id: 20515,
      superficie: 1800,
      volumen: 1500,
      nombre: "Santo Domingo Tehuantepec",
    },
  ],
  //3
  Mixteca: [
    {
      id: 20397,
      superficie: 19,
      volumen: 19,
      nombre: "Heroica Ciudad de Tlaxiaco"
    },
    {
      id: 20446,
      superficie: 594,
      volumen: 582,
      nombre: "Santa María Yucuhiti"
    },
    {
      id: 20481,
      superficie: 1008,
      volumen: 1006,
      nombre: "Santiago Nuyoó"
    },
  ],
};

// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    entidad: "Chiapas",
    id: "CHS",
    volumen: 391957,
    superficie: 243947,
    rendimiento: 1.69,
    valor: 2116042814,
  },
  {
    ranking: 2,
    entidad: "Veracruz",
    id: "VER",
    volumen: 253781,
    superficie: 142779,
    rendimiento: 1.89,
    valor: 1950750149,
  },
  {
    ranking: 3,
    entidad: "Puebla",
    id: "PUE",
    volumen: 223603,
    superficie: 71755,
    rendimiento: 3.15,
    valor: 1717853590,
  },
  {
    ranking: 4,
    entidad: "Oaxaca",
    id: "OAX",
    volumen: 87694,
    superficie: 133134,
    rendimiento: 0.8,
    valor: 527209015,
  },
  {
    ranking: 5,
    entidad: "Guerrero",
    id: "GRO",
    volumen: 38668,
    superficie: 45564,
    rendimiento: 0.91,
    valor: 290640718,
  },
  {
    ranking: 6,
    entidad: "Hidalgo",
    id: "HGO",
    volumen: 29014,
    superficie: 22578,
    rendimiento: 1.16,
    valor: 180190041,
  },
  {
    ranking: 7,
    entidad: "Nayarit",
    id: "NAY",
    volumen: 13288,
    superficie: 16064,
    rendimiento: 0.97,
    valor: 156700002,
  },
  {
    ranking: 8,
    entidad: "San Luis Potosí",
    id: "SLP",
    volumen: 11382,
    superficie: 16148,
    rendimiento: 0.68,
    valor: 110220922,
  },
  {
    ranking: 9,
    entidad: "Jalisco",
    id: "JAL",
    volumen: 4940,
    superficie: 3520,
    rendimiento: 1.46,
    valor: 31487434,
  },
  {
    ranking: 10,
    entidad: "Colima",
    id: "COL",
    volumen: 3533,
    superficie: 2904,
    rendimiento: 1.25,
    valor: 33881637,
  },
  {
    ranking: 11,
    entidad: "México",
    id: "EM",
    volumen: 478,
    superficie: 531,
    rendimiento: 1.07,
    valor: 3324076,
  },
  {
    ranking: 12,
    entidad: "Tabasco",
    id: "TAB",
    volumen: 430,
    superficie: 358,
    rendimiento: 1.1,
    valor: 3336435,
  },
  {
    ranking: 13,
    entidad: "Querétaro",
    id: "QRO",
    volumen: 60,
    superficie: 199,
    rendimiento: 0.3,
    valor: 689535,
  },
  {
    ranking: 14,
    entidad: "Morelos",
    id: "MOR",
    volumen: 35,
    superficie: 25,
    rendimiento: 1.48,
    valor: 172104,
  },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { id: "BRA", ranking: 1, pais: "Brasil", superficie: 1872511 },
  { id: "IDN", ranking: 2, pais: "Indonesia", superficie: 1285778 },
  { id: "COL", ranking: 3, pais: "Colombia", superficie: 842399 },
  { id: "CAF", ranking: 4, pais: "República Centroafricana", superficie: 761111 },
  { id: "ETH", ranking: 5, pais: "Etiopía", superficie: 741850 },
  { id: "UGA", ranking: 6, pais: "Uganda", superficie: 727154 },
  { id: "GIN", ranking: 7, pais: "Guinea", superficie: 663850 },
  { id: "VNM", ranking: 8, pais: "Viet Nam", superficie: 655921 },
  { id: "MEX", ranking: 9, pais: "México", superficie: 646804 },
  { id: "CIV", ranking: 10, pais: "Costa de Marfil", superficie: 539000 },
  { id: "IND", ranking: 11, pais: "India", superficie: 438145 },
  { id: "PER", ranking: 12, pais: "Perú", superficie: 423854 },
  { id: "GTM", ranking: 13, pais: "Guatemala", superficie: 366865 },
  { id: "TZA", ranking: 14, pais: "República Unida de Tanzanía", superficie: 263627 },
  { id: "HND", ranking: 15, pais: "Honduras", superficie: 258326 },
  { ranking: "", pais: "Otros", superficie: 1751 },
];

const agrupado = {};

tab_pro_mundial.forEach(item => {
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
  20000, 22000, 24000, 40000, 60000, 80000, 70000, 60000, 50000, 45000, 40000,
  36000, 32627,
];

// Valores anuales de exportación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las exportaciones del producto
const exportacion_balanza = [
  120000, 140000, 180000, 160000, 130000, 110000, 120000, 125000, 130000,
  128000, 123000, 137310, 137310,
];

// Tabla de los principales destinos de exportación
// Cada objeto representa un país y el valor (en USD) de exportaciones realizadas hacia ese país
const tab_destino_exportacion = [
  { num: 1, pais: "Estados Unidos", valor: 295137249 },
  { num: 2, pais: "Bélgica", valor: 21650554 },
  { num: 3, pais: "Canada", valor: 20832692 },
  { num: 4, pais: "Alemania", valor: 14331788 },
  { num: 5, pais: "Japón", valor: 6907935 },
  { num: 6, pais: "Italia", valor: 6565001 },
  { num: 7, pais: " Reino Unido", valor: 6538246 },
  { num: 8, pais: "Francia", valor: 5001442 },
  { num: 9, pais: "España", valor: 3188523 },
  { num: 10, pais: "Paises Bajos", valor: 2095466 },
  { num: 11, pais: "Suiza", valor: 1488726 },
  { num: 12, pais: " Nueva Zelanda", valor: 1437270 },
  { num: 13, pais: "Finlandia", valor: 1286959 },
  { num: 14, pais: "Corea del Sur", valor: 920913 },
  { num: 15, pais: "Rusia", valor: 649617 },
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
      35391.83, 37692.23, 21149.6, 19336.88, 17121.99, 11555.92, 15063.49,
      13911.05, 15560.87, 15637.39, 15855.39, 15991.31, 15234.53, 15960.83,
    ],
  },
  {
    nom: "Costa",
    fila: [
      13228.8, 13059.75, 19872.85, 24235.65, 19302.01, 13328.78, 7119.59,
      6762.61, 8274.85, 10069.05, 12606.63, 14112.14, 15416.59, 15413.4,
    ],
  },
  {
    nom: "Istmo",
    fila: [
      21076.69, 23002.99, 14277.82, 12723.94, 12226.66, 8010.87, 6061.85,
      6306.28, 6568.42, 6914.76, 6163.92, 6974.43, 7105.73, 7566.48,
    ],
  },
  {
    nom: "Mixteca",
    fila: [
      2500, 2813, 2855, 2636.7, 1864.9, 1408.2, 1429, 1273.9, 1327, 1373.5,
      1330.96, 1346.82, 1400.46, 1322.07,
    ],
  },
  {
    nom: "Papaloapan",
    fila: [
      30524.92, 28460.38, 20778.75, 21378.75, 20995.65, 13990.4, 9781.84,
      8469.68, 8850.32, 10180.19, 13399.09, 12790.91, 14353.25, 12990.93,
    ],
  },
  {
    nom: "Sierra de Juárez",
    fila: [
      38132.13, 36901.87, 23626.16, 29813.48, 37988.44, 18457.23, 16562.53,
      19033.34, 18957.68, 19673.7, 21362.23, 20004.61, 19956.88, 19089.53,
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [
      13741.02, 15010.87, 14879.64, 19630.61, 20281.54, 15761.16, 10432.89,
      10331.84, 10914.87, 11980.64, 14963.04, 14683.47, 15609.62, 15350.76,
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
    region: "Sierra de Juárez",
    volumen: 19090,
    superficie: 20068,
    rendimiento: 0.93,
    valor: 126907542,
    cantidad: 35,
  },
  {
    region: "Sierra de Flores Magón",
    volumen: 15961,
    superficie: 20329,
    rendimiento: 0.8,
    valor: 91639105,
    cantidad: 28,
  },
  {
    region: "Costa",
    volumen: 15413,
    superficie: 48011,
    rendimiento: 0.45,
    valor: 96463429,
    cantidad: 34,
  },
  {
    region: "Sierra Sur",
    volumen: 15351,
    superficie: 15216,
    rendimiento: 1.07,
    valor: 92386893,
    cantidad: 24,
  },
  {
    region: "Papaloapan",
    volumen: 12991,
    superficie: 16356,
    rendimiento: 0.95,
    valor: 70259196,
    cantidad: 18,
  },
  {
    region: "Istmo",
    volumen: 7566,
    superficie: 11535,
    rendimiento: 0.66,
    valor: 41073587,
    cantidad: 9,
  },
  {
    region: "Mixteca",
    volumen: 1322,
    superficie: 1621,
    rendimiento: 0.83,
    valor: 8479263,
    cantidad: 3,
  },
];

// Datos de producción por grupo indígena
// Primer array: nombres de pueblos indígenas y categoría "No es pueblo indígena"
// Segundo array: volumen producido en toneladas por cada grupo correspondiente
const pub_indigenas_producto = [
  [
    "NO PUEBLO INDIGENA",
    "Zapoteco",
    "Mixe",
    "Mazateco",
    "Chinanteco",
    "Mixteco",
    "Chatino",
    "Cuicateco",
    "Nahua",
    "Chontal De Oaxaca",
    "Triqui",
  ],
  [8748, 23918, 14739, 14058, 13002, 7633, 3850, 898, 485, 337, 26],
];

// Datos de estacionalidad del producto por mes
// Cada número representa una medida relativa o índice de producción o actividad para cada mes del año,
// probablemente de enero (índice 0) a diciembre (índice 11)
const estacionalidad_producto = [232, 197, 23, 24, 0, 0, 0, 0, 0, 0, 112, 350];

// Número de municipios productores por región en Oaxaca
// Cada objeto indica la región y la cantidad de municipios que participan en la producción del producto
const tab_mun_producto_oax = [
  { nom: "Sierra de Juárez", num: 35 },
  { nom: "Sierra Sur", num: 24 },
  { nom: "Costa", num: 34 },
  { nom: "Sierra de Flores Magón", num: 28 },
  { nom: "Papaloapan", num: 18 },
  { nom: "Istmo", num: 9 },
  { nom: "Mixteca", num: 3 },
];
