const regionesConMunicipios = {
  Mixteca: [
    //14
    {
      id: 20004,
      territorio: "2",
      toneladas: "73",
    }, //Asunción Cuyotepeji
    {
      id: 20039,
      territorio: "15",
      toneladas: "414",
    }, //Heroica Ciudad de Huajuapan de León
    {
      id: 20081,
      territorio: "30",
      toneladas: "719",
    }, //San Agustín Atenango
    {
      id: 20089,
      territorio: "1",
      toneladas: "35",
    }, //San Andrés Dinicuiti
    {
      id: 20089,
      territorio: "2",
      toneladas: "39",
    }, //San Juan Bautista Suchitepec
    {
      id: 20237,
      territorio: "8",
      toneladas: "215",
    }, //San Marcos Arteaga
    {
      id: 20400,
      territorio: "24",
      toneladas: "603",
    }, //Santa María Camotlán
    {
      id: 20461,
      territorio: "3",
      toneladas: "76",
    }, //Santiago del Río
    {
      id: 20462,
      territorio: "62",
      toneladas: "1,600",
    }, //Santiago Huajolotitlán
    {
      id: 20476,
      territorio: "1",
      toneladas: "33",
    }, //Santiago Miltepec
    {
      id: 20520,
      territorio: "183",
      toneladas: "4,659",
    }, //Santo Domingo Tonalá
    {
      id: 20524,
      territorio: "3",
      toneladas: "70",
    }, //Santo Domingo Yodohino
    {
      id: 20537,
      territorio: "6",
      toneladas: "158",
    }, //Silacayoápam
    {
      id: 20549,
      territorio: "29",
      toneladas: "700",
    }, //H. V. Tezoatlán de Segura y Luna, C. de la I.de O.
  ],
  "Valles Centrales": [
    //21
    {
      id: 20023,
      territorio: "2",
      toneladas: "25",
    }, //Cuilápam de Guerrero
    {
      id: 20068,
      territorio: "21",
      toneladas: "325",
    }, //Ocotlán de Morelos
    {
      id: 20092,
      territorio: "6",
      toneladas: "100",
    }, //San Andrés Ixtlahuaca
    {
      id: 20103,
      territorio: "16",
      toneladas: "254",
    }, //San Antonino Castillo Velasco
    {
      id: 20132,
      territorio: "8",
      toneladas: "117",
    }, //San Dionisio Ocotlán
    {
      id: 20150,
      territorio: "2",
      toneladas: "30",
    }, //San Francisco Telixtlahuaca
    {
      id: 20273,
      territorio: "3",
      toneladas: "39",
    }, //San Miguel Peras
    {
      id: 20294,
      territorio: "7",
      toneladas: "107",
    }, //San Pablo Huitzo
    {
      id: 20301,
      territorio: "3",
      toneladas: "55",
    }, //San Pedro Apóstol
    {
      id: 20310,
      territorio: "2",
      toneladas: "39",
    }, //San Pedro Ixtlahuaca
    {
      id: 20315,
      territorio: "2",
      toneladas: "34",
    }, //San Pedro Mártir
    {
      id: 20368,
      territorio: "2",
      toneladas: "25",
    }, //Santa Catarina Minas
    {
      id: 20388,
      territorio: "2",
      toneladas: "30",
    }, //Santa Inés del Monte
    {
      id: 20393,
      territorio: "4",
      toneladas: "60",
    }, //Santa Lucía Ocotlán
    {
      id: 20399,
      territorio: "2",
      toneladas: "34",
    }, //Santa María Atzompa
    {
      id: 20452,
      territorio: "6",
      toneladas: "97",
    }, //Santiago Apóstol
    {
      id: 20483,
      territorio: "8",
      toneladas: "117",
    }, //Santiago Suchilquitongo
    {
      id: 20561,
      territorio: "4",
      toneladas: "64",
    }, //Yaxe
    {
      id: 20570,
      territorio: "2",
      toneladas: "33",
    }, //Zimatlán de Álvarez
    {
      id: 20028,
      territorio: "21",
      toneladas: "238",
    }, //Heroica Ciudad de Ejutla de Crespo
    {
      id: 20268,
      territorio: "7",
      toneladas: "89",
    }, //San Miguel Ejutla
  ],
  "Sierra de Flores Magón": [
    //1
    {
      id: 20431,
      territorio: "26",
      toneladas: "575",
    }, //Santa María Tecomavaca
  ],
  "Sierra Sur": [
    //1
    {
      id: 20059,
      territorio: "11",
      toneladas: "131",
    }, //Miahuatlán de Porfirio Díaz
  ],
};

const estados_datos_pro = [
  // 30
  { id: "SON", territorio: "6,099", toneladas: "165,704" },
  { id: "PUE", territorio: "4,080", toneladas: "71,148" },
  { id: "SIN", territorio: "2,027", toneladas: "55,646" },
  { id: "MICH", territorio: "2,027", toneladas: "44,156" },
  { id: "HGO", territorio: "1,541", toneladas: "28,712" },
  { id: "JAL", territorio: "1,150", toneladas: "25,817" },
  { id: "ZAC", territorio: "785", toneladas: "20,425" },
  { id: "MOR", territorio: "1,279", toneladas: "18,625" },
  { id: "YUC", territorio: "1,027", toneladas: "17,123" },
  { id: "EM", territorio: "1,034", toneladas: "15,205" }, // Estado de México
  { id: "GTO", territorio: "805", toneladas: "13,970" },
  { id: "OAX", territorio: "535", toneladas: "12,012" },
  { id: "BCS", territorio: "303", toneladas: "10,067" },
  { id: "SLP", territorio: "351", toneladas: "7,769" },
  { id: "GRO", territorio: "698", toneladas: "7,382" },
  { id: "AGS", territorio: "260", toneladas: "6,798" },
  { id: "COA", territorio: "314", toneladas: "5,572" },
  { id: "BCN", territorio: "186", toneladas: "4,997" },
  { id: "NL", territorio: "142", toneladas: "4,698" },
  { id: "CHI", territorio: "226", toneladas: "3,820" },
  { id: "VER", territorio: "315", toneladas: "3,504" },
  { id: "QR", territorio: "411", toneladas: "2,669" },
  { id: "DGO", territorio: "90", toneladas: "2,662" },
  { id: "QRO", territorio: "97", toneladas: "1,406" },
  { id: "CAM", territorio: "121", toneladas: "1,173" },
  { id: "NAY", territorio: "84", toneladas: "990" },
  { id: "TAMP", territorio: "53", toneladas: "840" },
  { id: "TLAX", territorio: "27", toneladas: "378" },
  { id: "COL", territorio: "6", toneladas: "85" },
];

const paises_datos_pro = [
  //15
  {
    id: "CHN",
    territorio: "794,819",
  },
  {
    id: "CMR",
    territorio: "152,498",
  },
  {
    id: "TUR",
    territorio: "91,839",
  },
  {
    id: "CAF",
    territorio: "77,531",
  },
  {
    id: "BGD",
    territorio: "61,542",
  },
  {
    id: "UKR",
    territorio: "51,900",
  },
  {
    id: "RWA",
    territorio: "51,105",
  },
  {
    id: "RUS",
    territorio: "48,158",
  },
  {
    id: "USA",
    territorio: "42,492",
  },
  {
    id: "ZAF",
    territorio: "35,530",
  },
  {
    id: "MEX",
    territorio: "35,147",
  },
  {
    id: "CUB",
    territorio: "31,633",
  },
  {
    id: "PAK",
    territorio: "28,589",
  },
  {
    id: "IRN",
    territorio: "28,144",
  },
];

/* DATOS DE LA TABLA Producción mundial de calabacita (2022) */
const tab_pro_mundial = [
  { ranking: 1, pais: "China", superficie: 398694 },
  { ranking: 2, pais: "China, Continental", superficie: 396125 },
  { ranking: 3, pais: "Camerún", superficie: 152498 },
  { ranking: 4, pais: "Turquía", superficie: 91839 },
  { ranking: 5, pais: "República Centroafricana", superficie: 77531 },
  { ranking: 6, pais: "Bangladesh", superficie: 61542 },
  { ranking: 7, pais: "Ucrania", superficie: 51900 },
  { ranking: 8, pais: "Rwanda", superficie: 51105 },
  { ranking: 9, pais: "Federación de Rusia", superficie: 48158 },
  { ranking: 10, pais: "Estados Unidos de América", superficie: 42492 },
  { ranking: 11, pais: "Sudáfrica", superficie: 35530 },
  { ranking: 12, pais: "México", superficie: 35147 },
  { ranking: 13, pais: "Cuba", superficie: 31633 },
  { ranking: 14, pais: "Pakistán", superficie: 28589 },
  { ranking: 15, pais: "Irán", superficie: 28144 },
  { ranking: "", pais: "Otros", superficie: 389509 },
];

/* DATOS DE LA TABLA Producción nacional de calabacita (2022) */
const tab_pro_nacional = [
  {
    ranking: 1,
    entidad: "Sonora",
    volumen: 165704,
    superficie: 6099,
    rendimiento: 22.65,
    valor: 1103951520,
  },
  {
    ranking: 2,
    entidad: "Puebla",
    volumen: 71148,
    superficie: 4080,
    rendimiento: 16.75,
    valor: 382094599,
  },
  {
    ranking: 3,
    entidad: "Sinaloa",
    volumen: 55646,
    superficie: 2027,
    rendimiento: 24.29,
    valor: 391017819,
  },
  {
    ranking: 4,
    entidad: "Michoacán",
    volumen: 44156,
    superficie: 2027,
    rendimiento: 20.84,
    valor: 331253924,
  },
  {
    ranking: 5,
    entidad: "Hidalgo",
    volumen: 28712,
    superficie: 1541,
    rendimiento: 14.94,
    valor: 147108286,
  },
  {
    ranking: 6,
    entidad: "Jalisco",
    volumen: 25817,
    superficie: 1150,
    rendimiento: 21.73,
    valor: 171972032,
  },
  {
    ranking: 7,
    entidad: "Zacatecas",
    volumen: 20425,
    superficie: 785,
    rendimiento: 23.44,
    valor: 99933242,
  },
  {
    ranking: 8,
    entidad: "Morelos",
    volumen: 18625,
    superficie: 1279,
    rendimiento: 14.68,
    valor: 86305609,
  },
  {
    ranking: 9,
    entidad: "Yucatán",
    volumen: 17123,
    superficie: 1027,
    rendimiento: 14.07,
    valor: 120347279,
  },
  {
    ranking: 10,
    entidad: "México",
    volumen: 14350,
    superficie: 950,
    rendimiento: 14.19,
    valor: 90286761,
  },
  {
    ranking: 11,
    entidad: "Guanajuato",
    volumen: 13970,
    superficie: 805,
    rendimiento: 16.06,
    valor: 74999431,
  },
  {
    ranking: 12,
    entidad: "Oaxaca",
    volumen: 12012,
    superficie: 535,
    rendimiento: 18.48,
    valor: 76207510,
  },
  {
    ranking: 13,
    entidad: "Baja California Sur",
    volumen: 10067,
    superficie: 303,
    rendimiento: 27.64,
    valor: 62269063,
  },
  {
    ranking: 14,
    entidad: "San Luis Potosí",
    volumen: 7769,
    superficie: 351,
    rendimiento: 21.65,
    valor: 60339488,
  },
  {
    ranking: 15,
    entidad: "Guerrero",
    volumen: 7382,
    superficie: 698,
    rendimiento: 9.42,
    valor: 44772501,
  },
  {
    ranking: 16,
    entidad: "Aguascalientes",
    volumen: 6798,
    superficie: 260,
    rendimiento: 21.41,
    valor: 31105736,
  },
  {
    ranking: 17,
    entidad: "Coahuila",
    volumen: 5572,
    superficie: 314,
    rendimiento: 19.33,
    valor: 36420972,
  },
  {
    ranking: 18,
    entidad: "Baja California",
    volumen: 4997,
    superficie: 186,
    rendimiento: 20.27,
    valor: 41882676,
  },
  {
    ranking: 19,
    entidad: "Nuevo León",
    volumen: 4698,
    superficie: 142,
    rendimiento: 33.33,
    valor: 41994926,
  },
  {
    ranking: 20,
    entidad: "Chihuahua",
    volumen: 3820,
    superficie: 226,
    rendimiento: 21.48,
    valor: 31435562,
  },
  {
    ranking: 21,
    entidad: "Veracruz",
    volumen: 3504,
    superficie: 315,
    rendimiento: 10.67,
    valor: 20762712,
  },
  {
    ranking: 22,
    entidad: "Quintana Roo",
    volumen: 2669,
    superficie: 411,
    rendimiento: 9.42,
    valor: 15828768,
  },
  {
    ranking: 23,
    entidad: "Durango",
    volumen: 2662,
    superficie: 90,
    rendimiento: 21.84,
    valor: 17765744,
  },
  {
    ranking: 24,
    entidad: "Querétaro",
    volumen: 1406,
    superficie: 97,
    rendimiento: 16.55,
    valor: 9655217,
  },
  {
    ranking: 25,
    entidad: "Campeche",
    volumen: 1173,
    superficie: 121,
    rendimiento: 10.52,
    valor: 11476392,
  },
  {
    ranking: 26,
    entidad: "Nayarit",
    volumen: 990,
    superficie: 84,
    rendimiento: 11.26,
    valor: 5319565,
  },
  {
    ranking: 27,
    entidad: "Ciudad de México",
    volumen: 855,
    superficie: 84,
    rendimiento: 9.78,
    valor: 7660914,
  },
  {
    ranking: 28,
    entidad: "Tamaulipas",
    volumen: 840,
    superficie: 53,
    rendimiento: 15.91,
    valor: 8727288,
  },
  {
    ranking: 29,
    entidad: "Tlaxcala",
    volumen: 378,
    superficie: 27,
    rendimiento: 13.78,
    valor: 2190407,
  },
  {
    ranking: 30,
    entidad: "Colima",
    volumen: 85,
    superficie: 6,
    rendimiento: 15.88,
    valor: 535083,
  },
];

/* Datos de la grafica balanza  */
/* Etiquetas para el periodo de tiempo usado en la grafica de balanza nacional */
const labels_balanza = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
];
/* Importaciones  */
const importacion_balanza = [
  66, 41, 893, 1583, 2093, 1506, 1856, 1446, 1535, 0, 1945, 2461, 3156,
];

/* Exportaciones  */
const exportacion_balanza = [
  47200, 48994, 41040, 372923, 397691, 414089, 485540, 510387, 507584, 538038,
  547450, 548245, 521857,
];

/* DATOS DE LA TABLA DESTINO DE LA EXPORTACIÓN 2023 POR PAÍS */
const tab_destino_exportacion = [
  { num: 1, pais: "Estados Unidos", valor: 342869232 },
  { num: 2, pais: "Japón", valor: 20616950 },
  { num: 3, pais: "Canadá", valor: 630564 },
  { num: 4, pais: "Belice", valor: 748 },
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
    fila: [, , , , , , , , 822.47, 1054.93, 814.2, 836.96, 799.89, 575.12],
  },
  {
    nom: "Mixteca",
    fila: [
      9340.3, 9336.4, 9317.9, 8024.5, 7532.4, 9274.57, 10295.67, 10109.5,
      7845.75, 10137.33, 10429.36, 9154.77, 8421.82, 9395.23,
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [
      64.8, 63, 50, 70.27, 49.35, 74.48, 82.86, 83.58, 82.18, 122.4, 151.23,
      138.08, 131.25, 130.82,
    ],
  },
  {
    nom: "Valles Centrales",
    fila: [
      1324.24, 1299.45, 1177.27, 1180.18, 1177.72, 1299.06, 1332.49, 1567.88,
      1570, 1935.44, 2047.38, 1799.43, 1821.57, 1910.38,
    ],
  },
];

/* DATO DE LA TABLA PRODUCCION  DE CALABACITA EN OAXACA	 */
const tabla_produccion_producto = [
  {
    region: "Mixteca",
    volumen: 9395,
    superficie: 370,
    rendimiento: 25.45,
    valor: 51431607,
    cantidad: 14,
  },
  {
    region: "Valles Centrales",
    volumen: 1910,
    superficie: 128,
    rendimiento: 15.5,
    valor: 18600710,
    cantidad: 21,
  },
  {
    region: "Cañada",
    volumen: 575,
    superficie: 26,
    rendimiento: 22.12,
    valor: 5052648,
    cantidad: 1,
  },
  {
    region: "Sierra Sur",
    volumen: 131,
    superficie: 11,
    rendimiento: 12.4,
    valor: 1122545,
    cantidad: 1,
  },
];

/* Datos grafica VOLUMEN DE PRODUCCION POR PUEBLO INDIGENA AGAVE */
const pub_indigenas_producto = [
  ["NO PUEBLO INDIGENA", "Mixteco", "Zapoteco", "Mazateco"],
  [3222, 6925, 1290, 575],
];

/* Datos grafica Estacionalidad de calabacita en Oaxaca */
const estacionalidad_producto = [4, 555, 733, 69, 26, 0, 0, 0, 0, 51, 86, 14];

/* Datos Tabla MUNICIPIOS QUE PRODUCEN DE CALABACITA EN OAXACA */
const tab_mun_producto_oax = [
  { nom: "Mixteca", num: 14 },
  { nom: "Valles Centrales", num: 21 },
  { nom: "Sierra de Flores Magón", num: 1 },
  { nom: "Sierra Sur", num: 1 },
];
