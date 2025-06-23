const regionesConMunicipios = {
  Istmo: [
    //11
    {
      id: 20143,
      territorio: "208",
      toneladas: "3,059",
    }, //San Francisco Ixhuatán
    {
      id: 20075,
      territorio: "178",
      toneladas: "2,517",
    }, //Reforma de Pineda
    {
      id: 20327,
      territorio: "130",
      toneladas: "1,774",
    }, //San Pedro Tapanatepec
    {
      id: 20525,
      territorio: "128",
      toneladas: "1,751",
    }, //Santo Domingo Zanatepec
    {
      id: 20141,
      territorio: "96",
      toneladas: "1,349",
    }, //San Francisco del Mar
    {
      id: 20066,
      territorio: "65",
      toneladas: "882",
    }, //Santiago Niltepec
    {
      id: 20025,
      territorio: "60",
      toneladas: "811",
    }, //Chahuites
    {
      id: 20052,
      territorio: "31",
      toneladas: "605",
    }, //Magdalena Tequisistlán
    {
      id: 20515,
      territorio: "15",
      toneladas: "181",
    }, //Santo Domingo Tehuantepec
    {
      id: 20421,
      territorio: "14",
      toneladas: "167",
    }, //Santa María Mixtequilla
    {
      id: 20124,
      territorio: "10",
      toneladas: "121",
    }, //San Blas Atempa
  ],
  Costa: [
    //4
    {
      id: 20439,
      territorio: "33",
      toneladas: "941",
    }, //Santa María Tonameca
    {
      id: 20414,
      territorio: "28",
      toneladas: "653",
    }, //Santa María Huazolotitlán
    {
      id: 20467,
      territorio: "25",
      toneladas: "565",
    }, //Santiago Jamiltepec
    {
      id: 20413,
      territorio: "10",
      toneladas: "273",
    }, //Santa María Huatulco
  ],
  "Sierra de Flores Magón": [
    //6
    {
      id: 20431,
      territorio: "23",
      toneladas: "458",
    }, //Santa María Tecomavaca
    {
      id: 20109,
      territorio: "16",
      toneladas: "300",
    }, //San Antonio Nanahuatípam
    {
      id: 20206,
      territorio: "18",
      toneladas: "361",
    }, //San Juan de Los Cués
    {
      id: 20177,
      territorio: "18",
      toneladas: "358",
    }, //San Juan Bautista Cuicatlán
    {
      id: 20545,
      territorio: "13",
      toneladas: "265",
    }, //Teotitlán de Flores Magón
    {
      id: 20558,
      territorio: "3",
      toneladas: "54",
    }, //Valerio Trujano
  ],
  "Sierra Sur": [
    //1
    {
      id: 20064,
      territorio: "29",
      toneladas: "552",
    }, //Nejapa de Madero
  ],
  "Valles Centrales": [
    //3
    {
      id: 20028,
      territorio: "8",
      toneladas: "161",
    }, //Heroica Ciudad de Ejutla de Crespo
    {
      id: 20449,
      territorio: "6",
      toneladas: "145",
    }, //Santa María Zoquitlán
    {
      id: 20068,
      territorio: "3",
      toneladas: "56",
    }, //Ocotlán de Morelos
  ],
  Mixteca: [
    //3
    {
      id: 20381,
      territorio: "5",
      toneladas: "55",
    }, //Santa Cruz Tacache de Mina
    {
      id: 20290,
      territorio: "3",
      toneladas: "31",
    }, //San Nicolás Hidalgo
    {
      id: 20055,
      territorio: "2",
      toneladas: "18",
    }, //Mariscala de Juárez
  ],
};

const estados_datos_pro = [
  { id: "MICH", territorio: "3,532", toneladas: "144,825" },
  { id: "SON", territorio: "3,573", toneladas: "133,075" },
  { id: "COA", territorio: "3,376", toneladas: "114,684" },
  { id: "GRO", territorio: "3,583", toneladas: "104,671" },
  { id: "DGO", territorio: "1,245", toneladas: "45,783" },
  { id: "CHI", territorio: "1,522", toneladas: "38,177" },
  { id: "COL", territorio: "457", toneladas: "21,806" },
  { id: "OAX", territorio: "1,173", toneladas: "18,460" },
  { id: "GTO", territorio: "209", toneladas: "5,045" },
  { id: "BCS", territorio: "185", toneladas: "4,682" },
  { id: "JAL", territorio: "180", toneladas: "4,362" },
  { id: "NAY", territorio: "196", toneladas: "3,806" },
  { id: "SLP", territorio: "92", toneladas: "2,647" },
  { id: "TAB", territorio: "202", toneladas: "1,827" },
  { id: "BCN", territorio: "81", toneladas: "1,765" },
  { id: "CHS", territorio: "44", toneladas: "580" },
  { id: "VER", territorio: "23", toneladas: "514" },
  { id: "PUE", territorio: "22", toneladas: "480" },
  { id: "ZAC", territorio: "14", toneladas: "412" },
  { id: "NL", territorio: "18", toneladas: "372" },
  { id: "SIN", territorio: "9", toneladas: "200" },
  { id: "EM", territorio: "5", toneladas: "94" },
  { id: "TAMP", territorio: "3", toneladas: "38" },
];

const paises_datos_pro = [
  //14
  { id: "CHN", territorio: "779,580" },
  { id: "AFG", territorio: "75,884" },
  { id: "IND", territorio: "68,000" },
  { id: "TUR", territorio: "62,724" },
  { id: "KAZ", territorio: "49,383" },
  { id: "GTM", territorio: "33,437" },
  { id: "IRN", territorio: "32,000" },
  { id: "BGD", territorio: "27,570" },
  { id: "BRA", territorio: "27,457" },
  { id: "ITA", territorio: "22,890" },
  { id: "USA", territorio: "18,211" },
  { id: "MEX", territorio: "17,886" },
  { id: "ESP", territorio: "16,220" },
  { id: "MAR", territorio: "14,698" },
];

const tab_pro_mundial = [
  { ranking: 1, pais: "China", superficie: 391783 },
  { ranking: 2, pais: "China, Continental", superficie: 387797 },
  { ranking: 3, pais: "Afganistán", superficie: 75884 },
  { ranking: 4, pais: "India", superficie: 68000 },
  { ranking: 5, pais: "Turquía", superficie: 62724 },
  { ranking: 6, pais: "Kazajstán", superficie: 49383 },
  { ranking: 7, pais: "Guatemala", superficie: 33437 },
  { ranking: 8, pais: "Irán", superficie: 32000 },
  { ranking: 9, pais: "Bangladesh", superficie: 27570 },
  { ranking: 10, pais: "Brasil", superficie: 27457 },
  { ranking: 11, pais: "Italia", superficie: 22890 },
  { ranking: 12, pais: "Estados Unidos de América", superficie: 18211 },
  { ranking: 13, pais: "México", superficie: 17886 },
  { ranking: 14, pais: "España", superficie: 16220 },
  { ranking: 15, pais: "Marruecos", superficie: 14698 },
  { ranking: "", pais: "Otros", superficie: 208340 },
];

const tab_pro_nacional = [
  {
    ranking: 1,
    entidad: "Michoacán",
    volumen: 144825,
    superficie: 3532,
    rendimiento: 28.33,
    valor: 1288779399,
  },
  {
    ranking: 2,
    entidad: "Sonora",
    volumen: 133075,
    superficie: 3573,
    rendimiento: 34.98,
    valor: 886904614,
  },
  {
    ranking: 3,
    entidad: "Coahuila",
    volumen: 114684,
    superficie: 3376,
    rendimiento: 27.35,
    valor: 753109375,
  },
  {
    ranking: 4,
    entidad: "Guerrero",
    volumen: 104671,
    superficie: 3583,
    rendimiento: 21.95,
    valor: 792136085,
  },
  {
    ranking: 5,
    entidad: "Durango",
    volumen: 45783,
    superficie: 1245,
    rendimiento: 33.4,
    valor: 298467218,
  },
  {
    ranking: 6,
    entidad: "Chihuahua",
    volumen: 38177,
    superficie: 1522,
    rendimiento: 25.42,
    valor: 256422864,
  },
  {
    ranking: 7,
    entidad: "Colima",
    volumen: 21806,
    superficie: 457,
    rendimiento: 46.67,
    valor: 152314352,
  },
  {
    ranking: 8,
    entidad: "Oaxaca",
    volumen: 18460,
    superficie: 1173,
    rendimiento: 18.12,
    valor: 122358248,
  },
  {
    ranking: 9,
    entidad: "Guanajuato",
    volumen: 5045,
    superficie: 209,
    rendimiento: 23.1,
    valor: 30062016,
  },
  {
    ranking: 10,
    entidad: "Baja California Sur",
    volumen: 4682,
    superficie: 185,
    rendimiento: 23.86,
    valor: 25050118,
  },
  {
    ranking: 11,
    entidad: "Jalisco",
    volumen: 4362,
    superficie: 180,
    rendimiento: 26.54,
    valor: 32869776,
  },
  {
    ranking: 12,
    entidad: "Nayarit",
    volumen: 3806,
    superficie: 196,
    rendimiento: 19.26,
    valor: 30004408,
  },
  {
    ranking: 13,
    entidad: "San Luis Potosí",
    volumen: 2647,
    superficie: 92,
    rendimiento: 28.54,
    valor: 14402750,
  },
  {
    ranking: 14,
    entidad: "Tabasco",
    volumen: 1827,
    superficie: 202,
    rendimiento: 9.43,
    valor: 7518679,
  },
  {
    ranking: 15,
    entidad: "Baja California",
    volumen: 1765,
    superficie: 81,
    rendimiento: 21.64,
    valor: 6988552,
  },
  {
    ranking: 16,
    entidad: "Chiapas",
    volumen: 580,
    superficie: 44,
    rendimiento: 16.37,
    valor: 3554297,
  },
  {
    ranking: 17,
    entidad: "Veracruz",
    volumen: 514,
    superficie: 23,
    rendimiento: 22.8,
    valor: 2372262,
  },
  {
    ranking: 18,
    entidad: "Puebla",
    volumen: 480,
    superficie: 22,
    rendimiento: 19.74,
    valor: 2346552,
  },
  {
    ranking: 19,
    entidad: "Zacatecas",
    volumen: 412,
    superficie: 14,
    rendimiento: 30.07,
    valor: 2186536,
  },
  {
    ranking: 20,
    entidad: "Nuevo León",
    volumen: 372,
    superficie: 18,
    rendimiento: 20.99,
    valor: 2384128,
  },
  {
    ranking: 21,
    entidad: "Yucatán",
    volumen: 235,
    superficie: 16,
    rendimiento: 13.69,
    valor: 1674151,
  },
  {
    ranking: 22,
    entidad: "Sinaloa",
    volumen: 200,
    superficie: 9,
    rendimiento: 22.23,
    valor: 2600910,
  },
  {
    ranking: 23,
    entidad: "México",
    volumen: 94,
    superficie: 5,
    rendimiento: 17.99,
    valor: 564866,
  },
  {
    ranking: 24,
    entidad: "Tamaulipas",
    volumen: 38,
    superficie: 3,
    rendimiento: 12.81,
    valor: 161836,
  },
];

/* Datos de la grafica balanza  */
/* Etiquetas para el periodo de tiempo usado en la grafica de balanza nacional */
const labels_balanza = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
];
/* Importaciones  */
const importacion_balanza = [
  30567, 38142, 18750, 16105, 31311, 18454, 29319, 32265, 44096, 27069, 10619,
  8832, 11243,
];
/* Exportaciones  */
const exportacion_balanza = [
  150816, 146437, 134574, 145688, 142146, 147705, 157070, 142199, 132744,
  105054, 106368, 97383, 120074,
];

const tab_destino_exportacion = [
  { num: 1, pais: "Japón", valor: 276751 },
  { num: 2, pais: "Belice", valor: 3938 },
];

const labels_historica_producto = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  2023,
];

const produccion_historica_producto = [
  {
    nom: "Sierra de Flores Magón",
    fila: [
      1398.66, 2112.64, 2620.65, 1812.26, 1542.83, 1975.56, 1756.72, 1877.48,
      1740.72, 1986.98, 2145.19, 2257.01, 2192.17, 1795.46,
    ],
  },
  {
    nom: "Costa",
    fila: [
      2512.1, 2587.77, 1961.2, 2071.75, 2045.72, 1257, 1557.1, 1698.01, 1866.48,
      2088, 2191.75, 2430.75, 2400.76, 2431.04,
    ],
  },
  {
    nom: "Istmo",
    fila: [
      14301.78, 21961.18, 17385.04, 11999.78, 11147.35, 10063.76, 10762.48,
      12449.14, 12484.67, 12882.46, 12221.48, 13322.33, 13164.66, 13216.1,
    ],
  },
  {
    nom: "Mixteca",
    fila: [
      305.5, 301.02, 302.14, 226.9, 142.4, 41.5, 113.35, 103.5, 77.2, 99.65,
      95.2, 98.33, 89.11, 103.71,
    ],
  },
  {
    nom: "Sierra de Juárez",
    fila: [
      540, 682.67, 800, 580, 483, 388.96, 540, 425.5, 448.8, 463.05, 511.92,
      520.03, 539.79, 551.58,
    ],
  },
  {
    nom: "Valles Centrales",
    fila: [
      579.24, 636.2, 256.53, 338.42, 314.06, 321.53, 315.25, 328.37, 341.17,
      361.48, 382.12, 370.69, 383.04, 361.95,
    ],
  },
];

const tabla_produccion_producto = [
  {
    region: "Istmo",
    volumen: 13216,
    superficie: 933,
    rendimiento: 14.02,
    valor: 89447132,
    cantidad: 11,
  },
  {
    region: "Costa",
    volumen: 2431,
    superficie: 95,
    rendimiento: 25.96,
    valor: 13133641,
    cantidad: 4,
  },
  {
    region: "Cañada",
    volumen: 1795,
    superficie: 91,
    rendimiento: 19.87,
    valor: 12244520,
    cantidad: 6,
  },
  {
    region: "Sierra Sur",
    volumen: 552,
    superficie: 29,
    rendimiento: 19.02,
    valor: 3438075,
    cantidad: 1,
  },
  {
    region: "Valles Centrales",
    volumen: 362,
    superficie: 17,
    rendimiento: 21.97,
    valor: 3352631,
    cantidad: 3,
  },
  {
    region: "Mixteca",
    volumen: 104,
    superficie: 9,
    rendimiento: 12.16,
    valor: 742250,
    cantidad: 3,
  },
];

/* Datos grafica VOLUMEN DE PRODUCCION POR PUEBLO INDIGENA AGAVE */
const pub_indigenas_producto = [
  [
    "No es pueblo indigena",
    "Zapoteco",
    "Zoque",
    "Huave",
    "Mixteco",
    "Mazateco",
    "Mixe",
    "Cuicateco",
    "Nahua",
  ],
  [4388, 7653, 1751, 1349, 1271, 818, 605, 359, 265],
];

/* Datos grafica Estacionalidad en Oaxaca */
const estacionalidad_producto = [90, 622, 272, 163, 96, 22, 0, 0, 0, 13, 40, 4];

/* Datos Tabla MUNICIPIOS QUE PRODUCEN DE CALABACITA EN OAXACA */
const tab_mun_producto_oax = [
  { nom: "Istmo", num: 11 },
  { nom: "Costa", num: 4 },
  { nom: "Sierra de Flores Magón", num: 6 },
  { nom: "Sierra Sur", num: 1 },
  { nom: "Valles Centrales", num: 3 },
  { nom: "Mixteca", num: 3 },
];
