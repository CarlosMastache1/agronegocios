const regionesConMunicipios = {
  //32
  "Valles Centrales": [
    //2
    {
      id: 20067,
      volumen: 1981,
      nombre: "Oaxaca de Juárez",
    },
    {
      id: 20068,
      volumen: 1111,
      nombre: "Ocotlán de Morelos",
    },
  ],
  Papaloapan: [
    //11
    {
      id: 20559,
      volumen: 227,
      nombre: "San Juan Bautista Valle Nacional",
    },
    {
      id: 20417,
      volumen: 204,
      nombre: "Santa María Jacatepec",
    },
    {
      id: 20184,
      volumen: 202,
      nombre: "San Juan Bautista Tuxtepec",
    },
    {
      id: 20278,
      volumen: 178,
      nombre: "San Miguel Soyaltepec",
    },
    {
      id: 20044,
      volumen: 143,
      nombre: "Loma Bonita",
    },
    {
      id: 20002,
      volumen: 140,
      nombre: "Acatlán de Pérez Figueroa",
    },
    {
      id: 20498,
      volumen: 136,
      nombre: "Santiago Yaveo",
    },
    {
      id: 20232,
      volumen: 128,
      nombre: "San Lucas Ojitlán",
    },
    {
      id: 20205,
      volumen: 118,
      nombre: "San Juan Lalana",
    },
    {
      id: 20468,
      volumen: 117,
      nombre: "Santiago Jocotepec",
    },
    {
      id: 20166,
      volumen: 116,
      nombre: "San José Chiltepec",
    },
  ],
  Istmo: [
    //4
    {
      id: 20057,
      volumen: 257,
      nombre: "Matías Romero Avendaño",
    },
    {
      id: 20198,
      volumen: 231,
      nombre: "San Juan Guichicovi",
    },
    {
      id: 20005,
      volumen: 134,
      nombre: "Asunción Ixtaltepec",
    },
    {
      id: 20427,
      volumen: 110,
      nombre: "Santa María Petapa",
    },
  ],
  "Sierra de Juárez": [
    //2
    {
      id: 20190,
      volumen: 296,
      nombre: "San Juan Cotzocón",
    },
    {
      id: 20207,
      volumen: 209,
      nombre: "San Juan Mazatlán",
    },
  ],
  Mixteca: [
    //1
    {
      id: 20209,
      volumen: 104,
      nombre: "San Juan Mixtepec",
    },
  ],
  "Sierra Sur": [
    //1
    {
      id: 20125,
      volumen: 107,
      nombre: "San Carlos Yautepec",
    },
  ],
  Costa: [
    //2
    {
      id: 20509,
      volumen: 104,
      nombre: "Santo Domingo de Morelos",
    },

    {
      id: 20334,
      volumen: 116,
      nombre: "Villa de Tututepec de Melchor Ocampo",
    },
  ],
  "Sierra de Flores Magón": [
    //9
    {
      id: 20406,
      volumen: 306,
      nombre: "Santa María Chilchotla",
    },
    {
      id: 20041,
      volumen: 295,
      nombre: "Huautla de Jiménez",
    },
    {
      id: 20058,
      volumen: 278,
      nombre: "Mazatlán Villa de Flores",
    },
    {
      id: 20171,
      volumen: 263,
      nombre: "San José Tenango",
    },
    {
      id: 20244,
      volumen: 137,
      nombre: "San Martín Toxpalan",
    },
    {
      id: 20490,
      volumen: 135,
      nombre: "Santiago Texcalcingo",
    },
    {
      id: 20434,
      volumen: 131,
      nombre: "Santa María Teopoxco",
    },
    {
      id: 20177,
      volumen: 112,
      nombre: "San Juan Bautista Cuicatlán",
    },
    {
      id: 20545,
      volumen: 3123,
      nombre: "Teotitlán de Flores Magón",
    },
  ],
};

const tab_mex_sub_pro = [
  {
    ranking: 1,
    id: "JAL",
    entidad: "Jalisco",
    volumen: 1715938,
    precio: 30,
    valor: 47456882000,
  },
  {
    ranking: 2,
    id: "PUE",
    entidad: "Puebla",
    volumen: 475816,
    precio: 29,
    valor: 12356742000,
  },
  {
    ranking: 3,
    id: "SON",
    entidad: "Sonora",
    volumen: 181924,
    precio: 31,
    valor: 5516299000,
  },
  {
    ranking: 4,
    id: "SLP",
    entidad: "San Luis Potosí",
    volumen: 113599,
    precio: 29,
    valor: 3105398000,
  },
  {
    ranking: 5,
    id: "YUC",
    entidad: "Yucatán",
    volumen: 111177,
    precio: 28,
    valor: 3214287000,
  },
  {
    ranking: 6,
    id: "NL",
    entidad: "Nuevo León",
    volumen: 95245,
    precio: 29,
    valor: 2706889000,
  },
  {
    ranking: 7,
    id: "DGO",
    entidad: "Durango",
    volumen: 78256,
    precio: 27,
    valor: 2024376000,
  },
  {
    ranking: 8,
    id: "SIN",
    entidad: "Sinaloa",
    volumen: 76946,
    precio: 28,
    valor: 2209239000,
  },
  {
    ranking: 9,
    id: "GTO",
    entidad: "Guanajuato",
    volumen: 69418,
    precio: 33,
    valor: 2246766000,
  },
  {
    ranking: 10,
    id: "COA",
    entidad: "Coahuila",
    volumen: 61700,
    precio: 26,
    valor: 1566610000,
  },
  {
    ranking: 11,
    id: "BCN",
    entidad: "Baja California",
    volumen: 31849,
    precio: 26,
    valor: 820578000,
  },
  {
    ranking: 12,
    id: "NAY",
    entidad: "Nayarit",
    volumen: 25199,
    precio: 26,
    valor: 664613000,
  },
  {
    ranking: 13,
    id: "MICH",
    entidad: "Michoacán",
    volumen: 20736,
    precio: 30,
    valor: 602715000,
  },
  {
    ranking: 14,
    id: "QRO",
    entidad: "Querétaro",
    volumen: 19701,
    precio: 30,
    valor: 569460000,
  },
  {
    ranking: 15,
    id: "VER",
    entidad: "Veracruz",
    volumen: 17550,
    precio: 32,
    valor: 576807000,
  },
  {
    ranking: 16,
    id: "EM",
    entidad: "México",
    volumen: 15731,
    precio: 26,
    valor: 439960000,
  },
  {
    ranking: 17,
    id: "GRO",
    entidad: "Guerrero",
    volumen: 9090,
    precio: 35,
    valor: 313488000,
  },
  {
    ranking: 18,
    id: "AGS",
    entidad: "Aguascalientes",
    volumen: 8900,
    precio: 29,
    valor: 262544000,
  },
  {
    ranking: 19,
    id: "OAX",
    entidad: "Oaxaca",
    volumen: 6879,
    precio: 28,
    valor: 194001000,
  },
];

const tab_mex_pro = [
  //23
  {
    ranking: 1,
    id: "VER",
    entidad: "Veracruz",
    volumen: 537883,
    peso: 2,
    precio: 38,
    valor: 20150762000,
  },
  {
    ranking: 2,
    id: "JAL",
    entidad: "Jalisco",
    volumen: 440347,
    peso: 2,
    precio: 43,
    valor: 16198954000,
  },
  {
    ranking: 3,
    id: "AGS",
    entidad: "Aguascalientes",
    volumen: 425189,
    peso: 2,
    precio: 38,
    valor: 16039850000,
  },
  {
    ranking: 4,
    id: "QRO",
    entidad: "Querétaro",
    volumen: 382439,
    peso: 2,
    precio: 42,
    valor: 15633543000,
  },
  {
    ranking: 5,
    id: "DGO",
    entidad: "Durango",
    volumen: 279505,
    peso: 1,
    precio: 37,
    valor: 10323492000,
  },
  {
    ranking: 6,
    id: "CHS",
    entidad: "Chiapas",
    volumen: 240387,
    peso: 2,
    precio: 48,
    valor: 9431184000,
  },
  {
    ranking: 7,
    id: "GTO",
    entidad: "Guanajuato",
    volumen: 225870,
    peso: 2,
    precio: 40,
    valor: 8688387000,
  },
  {
    ranking: 8,
    id: "PUE",
    entidad: "Puebla",
    volumen: 211313,
    peso: 2,
    precio: 31,
    valor: 7205385000,
  },
  {
    ranking: 9,
    id: "YUC",
    entidad: "Yucatán",
    volumen: 179680,
    peso: 2,
    precio: 40,
    valor: 7500166000,
  },
  {
    ranking: 10,
    id: "SIN",
    entidad: "Sinaloa",
    volumen: 151625,
    peso: 2,
    precio: 39,
    valor: 5808965000,
  },
  {
    ranking: 11,
    id: "EM",
    entidad: "México",
    volumen: 115914,
    peso: 2,
    precio: 43,
    valor: 4897063000,
  },
  {
    ranking: 12,
    id: "SLP",
    entidad: "San Luis Potosí",
    volumen: 108833,
    peso: 2,
    precio: 43,
    valor: 4193049000,
  },
  {
    ranking: 13,
    id: "COA",
    entidad: "Coahuila",
    volumen: 94080,
    peso: 2,
    precio: 30,
    valor: 3101299000,
  },
  {
    ranking: 14,
    id: "HGO",
    entidad: "Hidalgo",
    volumen: 90179,
    peso: 2,
    precio: 38,
    valor: 3542631000,
  },
  {
    ranking: 15,
    id: "NL",
    entidad: "Nuevo León",
    volumen: 77883,
    peso: 2,
    precio: 35,
    valor: 2916455000,
  },
  {
    ranking: 16,
    id: "MICH",
    entidad: "Michoacán",
    volumen: 74981,
    peso: 2,
    precio: 33,
    valor: 2521225000,
  },
  {
    ranking: 17,
    id: "MOR",
    entidad: "Morelos",
    volumen: 68530,
    peso: 2,
    precio: 39,
    valor: 2665397000,
  },
  {
    ranking: 18,
    id: "SON",
    entidad: "Sonora",
    volumen: 43362,
    peso: 1,
    precio: 17,
    valor: 1576071000,
  },
  {
    ranking: 19,
    id: "NAY",
    entidad: "Nayarit",
    volumen: 39465,
    peso: 2,
    precio: 37,
    valor: 1459563000,
  },
  {
    ranking: 20,
    id: "CAM",
    entidad: "Campeche",
    volumen: 23806,
    peso: 2,
    precio: 42,
    valor: 925926000,
  },
  {
    ranking: 21,
    id: "TAB",
    entidad: "Tabasco",
    volumen: 22253,
    peso: 2,
    precio: 49,
    valor: 973767000,
  },
  {
    ranking: 22,
    id: "COL",
    entidad: "Colima",
    volumen: 13480,
    peso: 2,
    precio: 32,
    valor: 521370000,
  },
  {
    ranking: 23,
    id: "OAX",
    entidad: "Oaxaca",
    volumen: 13122,
    peso: 2,
    precio: 35,
    valor: 495459000,
  },
];

const tabla_paises_prod = [
  //13
  {
    id: "USA",
    ranking: 1,
    pais: "Estados Unidos de América",
    volumen: 19599212,
  },
  { id: "CHN", ranking: 2, pais: "China", volumen: 14998714 },
  { id: "BRA", ranking: 3, pais: "Brasil", volumen: 14524000 },
  { id: "CHN", ranking: 4, pais: "China, Continental", volumen: 14300000 },
  { id: "RUS", ranking: 5, pais: "Federación de Rusia", volumen: 5308201 },
  { id: "IND", ranking: 6, pais: "India", volumen: 4906817 },
  { id: "IDN", ranking: 7, pais: "Indonesia", volumen: 4040989 },
  { id: "MEX", ranking: 8, pais: "México", volumen: 3781735 },
  { id: "EGY", ranking: 9, pais: "Egipto", volumen: 2523466 },
  { id: "TUR", ranking: 10, pais: "Turquía", volumen: 2417995 },
  { id: "JPN", ranking: 11, pais: "Japón", volumen: 2371643 },
  { id: "ARG", ranking: 12, pais: "Argentina", volumen: 2319000 },
  { id: "POL", ranking: 13, pais: "Polonia", volumen: 2231610 },
  { ranking: "", pais: "otros", volumen: 45129689 },
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

const tabla_paises_sub_prod = [
  //12
  { id: "CHN", ranking: 1, pais: "China", volumen: 621844040 },
  { id: "CHN", ranking: 2, pais: "China, Continental", volumen: 613161060 },
  { id: "IDN", ranking: 3, pais: "Indonesia", volumen: 137976993 },
  { id: "IND", ranking: 4, pais: "India", volumen: 126048497 },
  {
    id: "USA",
    ranking: 5,
    pais: "Estados Unidos de América",
    volumen: 116042457,
  },
  { id: "BRA", ranking: 6, pais: "Brasil", volumen: 61981178 },
  { id: "MEX", ranking: 7, pais: "México", volumen: 61628301 },
  { id: "RUS", ranking: 8, pais: "Federación de Rusia", volumen: 48276871 },
  { id: "JPN", ranking: 9, pais: "Japón", volumen: 45875475 },
  { id: "PAK", ranking: 10, pais: "Pakistán", volumen: 23570064 },
  { id: "TUR", ranking: 11, pais: "Turquía", volumen: 21046572 },
  { id: "NGA", ranking: 12, pais: "Nigeria", volumen: 17253832 },
  { id: "COL", ranking: 13, pais: "Colombia", volumen: 17062669 },
  { ranking: "", pais: "otros ", volumen: 412457884 },
];

const agrupado = {};

tabla_paises_sub_prod.forEach((item) => {
  if (!agrupado[item.id]) {
    agrupado[item.id] = { ...item };
  } else {
    // Sumamos superficie
    agrupado[item.id].superficie += item.superficie;

    agrupado[item.id].volumen += item.volumen;
  }
});

// Convertimos el objeto agrupado a arreglo y ajustamos el ranking
const paises_datos_sub_pro = Object.values(agrupado).map((item, i) => ({
  ...item,
  ranking: i + 1,
}));

const tabla_produccion_producto = [
  {
    region: "Sierra de Flores Magón",
    volumen: 6676,
    peso: 2,
    precio: 43,
    valor: 268365000,
    municipios: 45,
  },
  {
    region: "Valles Centrales",
    volumen: 2115,
    peso: 2,
    precio: 28,
    valor: 57501000,
    municipios: 121,
  },
  {
    region: "Mixteca",
    volumen: 1058,
    peso: 1,
    precio: 38,
    valor: 40187000,
    municipios: 155,
  },
  {
    region: "Papaloapan",
    volumen: 991,
    peso: 2,
    precio: 40,
    valor: 40079000,
    municipios: 20,
  },
  {
    region: "Istmo",
    volumen: 686,
    peso: 1,
    precio: 39,
    valor: 26508000,
    municipios: 41,
  },
  {
    region: "Costa",
    volumen: 659,
    peso: 2,
    precio: 45,
    valor: 30561000,
    municipios: 50,
  },
  {
    region: "Sierra de Juárez",
    volumen: 504,
    peso: 2,
    precio: 31,
    valor: 17534000,
    municipios: 69,
  },
  {
    region: "Sierra Sur",
    volumen: 433,
    peso: 2,
    precio: 33,
    valor: 14723000,
    municipios: 69,
  },
];

const tabla_produccion_sub_producto = [
  {
    region: "Valles Centrales",
    volumen: 1957,
    precio: 26,
    valor: 49953000,
    municipios: 121,
  },
  {
    region: "Papaloapan",
    volumen: 1343,
    precio: 28,
    valor: 37923000,
    municipios: 20,
  },
  {
    region: "Istmo",
    volumen: 973,
    precio: 30,
    valor: 28532000,
    municipios: 41,
  },
  {
    region: "Sierra de Juárez",
    volumen: 669,
    precio: 32,
    valor: 20642000,
    municipios: 69,
  },
  {
    region: "Mixteca",
    volumen: 596,
    precio: 26,
    valor: 15822000,
    municipios: 155,
  },
  {
    region: "Sierra Sur",
    volumen: 551,
    precio: 27,
    valor: 15076000,
    municipios: 69,
  },
  {
    region: "Costa",
    volumen: 434,
    precio: 36,
    valor: 15901000,
    municipios: 50,
  },
  {
    region: "Sierra de Flores Magón",
    volumen: 355,
    precio: 29,
    valor: 10154000,
    municipios: 45,
  },
];

/* Datos grafica VOLUMEN DE PRODUCCION POR PUEBLO INDIGENA CARNE */
const pub_indigenas_producto = [
  [
    "NO PUEBLO INDIGENA",
    "NAHUA",
    "MAZATECO",
    "ZAPOTECO",
    "MIXTECO",
    "CHINANTECO",
    "CUICATECO",
    "MIXE",
    "CHATINO",
    "ZOQUE",
    "CHONTAL DE OAXACA",
    "HUAVE",
    "TRIQUI",
    "AMUZGO",
    "CHOCHOLTECO",
  ],
  [2166, 3385, 2266, 1766, 1413, 966, 455, 403, 102, 62, 55, 37, 23, 12, 9],
];

/* Datos  grafica VOLUMEN DE PRODUCCION POR PUEBLO INDIGENA	LECHE*/
const pub_indigenas_sub_producto = [
  [
    "NO PUEBLO INDIGENA",
    "ZAPOTECO",
    "CHINANTECO",
    "MIXTECO",
    "MIXE",
    "MAZATECO",
    "ZOQUE",
    "CHONTAL DE OAXACA",
    "CHATINO",
    "NAHUA",
    "CUICATECO",
    "HUAVE",
    "TRIQUI",
    "AMUZGO",
    "CHOCHOLTECO",
  ],
  [1810, 1857, 1175, 679, 533, 392, 91, 90, 87, 51, 45, 44, 13, 10, 3],
];

/* Datos Grafica ESTACIONALIDAD DE LA PRODUCCION EN OAXACA CARNE */
const estacionalidad_producto = [
  95, 93, 114, 80, 103, 106, 117, 113, 115, 123, 126, 127,
];

const estacionalidad_sub_producto = [
  77, 79, 94, 89, 104, 127, 125, 88, 134, 82, 74, 80,
];
