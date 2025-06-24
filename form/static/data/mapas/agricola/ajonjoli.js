// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  //4
  Istmo: [
    //29
    {
      id: 20025,
      territorio: "115",
      toneladas: "95",
    }, //Chahuites
    {
      id: 20075,
      territorio: "193",
      toneladas: "154",
    }, //Reforma de Pineda
    {
      id: 20143,
      territorio: "159",
      toneladas: "124",
    }, //San Francisco Ixhuatán
    {
      id: 20327,
      territorio: "566",
      toneladas: "441",
    }, //San Pedro Tapanatepec
    {
      id: 20525,
      territorio: "627",
      toneladas: "507",
    }, //Santo Domingo Zanatepec
    {
      id: 20066,
      territorio: "136",
      toneladas: "116",
    }, //Santiago Niltepec
    {
      id: 20130,
      territorio: "37",
      toneladas: "31",
    }, //San Dionisio del Mar
    {
      id: 20141,
      territorio: "202",
      toneladas: "165",
    }, //San Francisco del Mar
    {
      id: 20505,
      territorio: "310",
      toneladas: "266",
    }, //Santo Domingo Ingenio
    {
      id: 20005,
      territorio: "33",
      toneladas: "25",
    }, //Asunción Ixtaltepec
    {
      id: 20014,
      territorio: "117",
      toneladas: "86",
    }, //Ciudad Ixtepec
    {
      id: 20030,
      territorio: "54",
      toneladas: "40",
    }, //El Espinal
    {
      id: 20043,
      territorio: "272",
      toneladas: "203",
    }, //Heroica Ciudad de Juchitán de Zaragoza
    {
      id: 20053,
      territorio: "89",
      toneladas: "68",
    }, //Magdalena Tlacotepec
    {
      id: 20079,
      territorio: "71",
      toneladas: "54",
    }, //Salina Cruz
    {
      id: 20124,
      territorio: "351",
      toneladas: "256",
    }, //San Blas Atempa
    {
      id: 20248,
      territorio: "168",
      toneladas: "123",
    }, //San Mateo del Mar
    {
      id: 20305,
      territorio: "351",
      toneladas: "263",
    }, //San Pedro Comitancillo
    {
      id: 20307,
      territorio: "224",
      toneladas: "172",
    }, //San Pedro Huamelula
    {
      id: 20308,
      territorio: "116",
      toneladas: "93",
    }, //San Pedro Huilotepec
    {
      id: 20418,
      territorio: "810",
      toneladas: "627",
    }, //Santa María Jalapa del Marqués
    {
      id: 20421,
      territorio: "107",
      toneladas: "86",
    }, //Santa María Mixtequilla
    {
      id: 20441,
      territorio: "49",
      toneladas: "39",
    }, //Santa María Xadani
    {
      id: 20453,
      territorio: "94",
      toneladas: "73",
    }, //Santiago Astata
    {
      id: 20472,
      territorio: "114",
      toneladas: "87",
    }, //Santiago Laollaga
    {
      id: 20508,
      territorio: "106",
      toneladas: "84",
    }, //Santo Domingo Chihuitán
    {
      id: 20515,
      territorio: "561",
      toneladas: "449",
    }, //Santo Domingo Tehuantepec
    {
      id: 20557,
      territorio: "51",
      toneladas: "39",
    }, //Unión Hidalgo
    {
      id: 20052,
      territorio: "80",
      toneladas: "60",
    }, //Magdalena Tequisistlán
  ],
  Costa: [
    //23
    {
      id: 20056,
      territorio: "55",
      toneladas: "43",
    }, //Mártires de Tacubaya
    {
      id: 20090,
      territorio: "67",
      toneladas: "52",
    }, //San Andrés Huaxpaltepec
    {
      id: 20111,
      territorio: "25",
      toneladas: "18",
    }, //San Antonio Tepetlapa
    {
      id: 20180,
      territorio: "110",
      toneladas: "90",
    }, //San Juan Bautista Lo de Soto
    {
      id: 20185,
      territorio: "20",
      toneladas: "16",
    }, //San Juan Cacahuatepec
    {
      id: 20225,
      territorio: "21",
      toneladas: "16",
    }, //San Lorenzo
    {
      id: 20285,
      territorio: "20",
      toneladas: "15",
    }, //San Miguel Tlacamama
    {
      id: 20345,
      territorio: "25",
      toneladas: "19",
    }, //San Sebastián Ixcapa
    {
      id: 20367,
      territorio: "25",
      toneladas: "20",
    }, //Santa Catarina Mechoacán
    {
      id: 20402,
      territorio: "107",
      toneladas: "83",
    }, //Santa María Cortijo
    {
      id: 20414,
      territorio: "107",
      toneladas: "82",
    }, //Santa María Huazolotitlán
    {
      id: 20467,
      territorio: "103",
      toneladas: "90",
    }, //Santiago Jamiltepec
    {
      id: 20474,
      territorio: "104",
      toneladas: "81",
    }, //Santiago Llano Grande
    {
      id: 20482,
      territorio: "116",
      toneladas: "87",
    }, //Santiago Pinotepa Nacional
    {
      id: 20485,
      territorio: "95",
      toneladas: "80",
    }, //Santiago Tapextla
    {
      id: 20489,
      territorio: "25",
      toneladas: "23",
    }, //Santiago Tetepec
    {
      id: 20507,
      territorio: "110",
      toneladas: "89",
    }, //Santo Domingo Armenta
    {
      id: 20319,
      territorio: "103",
      toneladas: "78",
    }, //San Pedro Mixtepec
    {
      id: 20334,
      territorio: "71",
      toneladas: "53",
    }, //Villa de Tututepec de Melchor Ocampo
    {
      id: 20401,
      territorio: "407",
      toneladas: "386",
    }, //Santa María Colotepec
    {
      id: 20324,
      territorio: "50",
      toneladas: "44",
    }, //San Pedro Pochutla
    {
      id: 20413,
      territorio: "78",
      toneladas: "64",
    }, //Santa María Huatulco
    {
      id: 20439,
      territorio: "99",
      toneladas: "82",
    }, //Santa María Tonameca
  ],
  "Sierra Sur": [
    //2
    {
      id: 20008,
      territorio: "65",
      toneladas: "45",
    }, //Asunción Tlacolulita
    {
      id: 20410,
      territorio: "25",
      toneladas: "19",
    }, //Santa María Ecatepec
  ],
  Papaloapan: [
    //1
    {
      id: 20134,
      territorio: "54",
      toneladas: "40",
    }, //San Felipe Jalapa de Díaz
  ],
};

// Datos agregados por entidad federativa (estado) a nivel nacional
const estados_datos_pro = [
  //12
  {
    id: "GRO",
    territorio: "15,831",
    toneladas: "13,322",
  },
  {
    id: "SIN",
    territorio: "23,874",
    toneladas: "12,803",
  },
  {
    id: "MICH",
    territorio: "10,750",
    toneladas: "8,745",
  },
  {
    id: "OAX",
    territorio: "8,242",
    toneladas: "6,543",
  },
  {
    id: "SON",
    territorio: "3,695",
    toneladas: "4,505",
  },
  {
    id: "CHS",
    territorio: "7,725",
    toneladas: "3,969",
  },
  {
    id: "VER",
    territorio: "464",
    toneladas: "635",
  },
  {
    id: "PUE",
    territorio: "88",
    toneladas: "143",
  },
  {
    id: "JAL",
    territorio: "322",
    toneladas: "100",
  },
  {
    id: "NAY",
    territorio: "39",
    toneladas: "22",
  },
  {
    id: "TAMP",
    territorio: "40",
    toneladas: "17",
  },
  {
    id: "COL",
    territorio: "8",
    toneladas: "9",
  },
];

//Datos por país: superficie cosechada
const paises_datos_pro = [
  {
    id: "SDN",
    territorio: "4,151,896",
  },
  {
    id: "IND",
    territorio: "1,627,040",
  },
  {
    id: "MMR",
    territorio: "1,538,252",
  },
  {
    id: "TZA",
    territorio: "970,000",
  },
  {
    id: "SDS",
    territorio: "615,059",
  },
  {
    id: "BFA",
    territorio: "396,151",
  },
  {
    id: "TCD",
    territorio: "389,069",
  },
  {
    id: "NGA",
    territorio: "365,000",
  },
  {
    id: "BRA",
    territorio: "307,000",
  },
  {
    id: "CHN",
    territorio: "267,364",
  },
  {
    id: "PAK",
    territorio: "259,896",
  },
  {
    id: "ETH",
    territorio: "250,000",
  },
  {
    id: "UGA",
    territorio: "215,000",
  },
  {
    id: "NER",
    territorio: "214,652",
  },
  {
    id: "MOZ",
    territorio: "164,000",
  },
  {
    id: "MLI",
    territorio: "91,983",
  },
  {
    id: "MEX",
    territorio: "81,368",
  },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { ranking: 1, pais: "Sudán", superficie: 4151896 },
  { ranking: 2, pais: "India", superficie: 1627040 },
  { ranking: 3, pais: "Myanmar", superficie: 1538252 },
  { ranking: 4, pais: "República Unida de Tanzanía", superficie: 970000 },
  { ranking: 5, pais: "Sudán del Sur", superficie: 615059 },
  { ranking: 6, pais: "Burkina Faso", superficie: 396151 },
  { ranking: 7, pais: "Chad", superficie: 389069 },
  { ranking: 8, pais: "Nigeria", superficie: 365000 },
  { ranking: 9, pais: "Brasil", superficie: 307000 },
  { ranking: 10, pais: "China", superficie: 267364 },
  { ranking: 11, pais: "China, Continental", superficie: 265000 },
  { ranking: 12, pais: "Pakistán", superficie: 259896 },
  { ranking: 13, pais: "Etiopía", superficie: 250000 },
  { ranking: 14, pais: "Uganda", superficie: 215000 },
  { ranking: 15, pais: "Níger", superficie: 214652 },
  { ranking: 16, pais: "Mozambique", superficie: 164000 },
  { ranking: 17, pais: "Malí", superficie: 91983 },
  { ranking: 18, pais: "México", superficie: 81368 },
  { ranking: "", pais: "Otros", superficie: 935410 },
];

// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    entidad: "Guerrero",
    volumen: 13322,
    superficie: 15831,
    rendimiento: 0.8,
    valor: 273119959,
  },
  {
    ranking: 2,
    entidad: "Sinaloa",
    volumen: 12803,
    superficie: 23874,
    rendimiento: 0.72,
    valor: 299321506,
  },
  {
    ranking: 3,
    entidad: "Michoacán",
    volumen: 8745,
    superficie: 10750,
    rendimiento: 0.89,
    valor: 161981722,
  },
  {
    ranking: 4,
    entidad: "Oaxaca",
    volumen: 6543,
    superficie: 8242,
    rendimiento: 0.79,
    valor: 232605456,
  },
  {
    ranking: 5,
    entidad: "Sonora",
    volumen: 4505,
    superficie: 3695,
    rendimiento: 1.39,
    valor: 103769328,
  },
  {
    ranking: 6,
    entidad: "Chiapas",
    volumen: 3969,
    superficie: 7725,
    rendimiento: 0.49,
    valor: 62686781,
  },
  {
    ranking: 7,
    entidad: "Veracruz",
    volumen: 635,
    superficie: 464,
    rendimiento: 1.33,
    valor: 9864411,
  },
  {
    ranking: 8,
    entidad: "Puebla",
    volumen: 143,
    superficie: 88,
    rendimiento: 1.62,
    valor: 2144587,
  },
  {
    ranking: 9,
    entidad: "Jalisco",
    volumen: 100,
    superficie: 322,
    rendimiento: 0.57,
    valor: 2361025,
  },
  {
    ranking: 10,
    entidad: "Nayarit",
    volumen: 22,
    superficie: 39,
    rendimiento: 0.42,
    valor: 751175,
  },
  {
    ranking: 11,
    entidad: "Tamaulipas",
    volumen: 17,
    superficie: 40,
    rendimiento: 0.32,
    valor: 468330,
  },
  {
    ranking: 12,
    entidad: "Colima",
    volumen: 9,
    superficie: 8,
    rendimiento: 1.18,
    valor: 148368,
  },
];

// Años de referencia para los datos de balanza comercial
const labels_balanza = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
];

// Valores anuales de importación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las importaciones del producto
const importacion_balanza = [
  11861, 19169, 16318, 16019, 20115, 19956, 23674, 28908, 42095, 24306, 12357,
  7249, 7802,
];

// Valores anuales de exportación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las exportaciones del producto
const exportacion_balanza = [
  8673, 6785, 5859, 7781, 7409, 9463, 10481, 10166, 12080, 5016, 2474, 3970,
  2087,
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
    nom: "Costa",
    fila: [
      661.48, 686.7, 666.62, 882.34, 1054.34, 1456.6, 1583.07, 1165.89, 1261.31,
      1016.39, 1525.75, 1527.08, 1551.29, 1611.08,
    ],
  },
  {
    nom: "Istmo	",
    fila: [
      782.08, 2183.85, 3973.67, 2704.61, 3138.83, 3518.82, 4231.84, 4773.29,
      4916.32, 4556.01, 4394.74, 4624.37, 4828.68, 4828,
    ],
  },
  {
    nom: "Papaloapan",
    fila: [
      0, 243.75, 351, 0, 388.5, 128.1, 161.76, 81.98, 90.14, 94, 86.76, 74.72,
      59.88, 39.98,
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [0, 0, 0, 0, 0, 0, 0, 52.6, 52.92, 57.92, 56.1, 60.21, 64.07, 63.6],
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
    volumen: 4828,
    superficie: 6158,
    rendimiento: 0.79,
    valor: 177046476,
    cantidad: 29,
  },
  {
    region: "Costa",
    volumen: 1611,
    superficie: 1940,
    rendimiento: 0.8,
    valor: 52632994,
    cantidad: 23,
  },
  {
    region: "Sierra Sur",
    volumen: 64,
    superficie: 90,
    rendimiento: 0.72,
    valor: 2317780,
    cantidad: 2,
  },
  {
    region: "Papaloapan",
    volumen: 40,
    superficie: 54,
    rendimiento: 0.72,
    valor: 608206,
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
    "Huave",
    "Chontal De Oaxaca",
    "Chatino",
    "Mixe",
    "Mazateco",
  ],
  [1068, 3769, 507, 437, 319, 264, 78, 60, 40],
];

// Datos de estacionalidad del producto por mes
// Cada número representa una medida relativa o índice de producción o actividad para cada mes del año,
// probablemente de enero (índice 0) a diciembre (índice 11)
const estacionalidad_producto = [42, 0, 6, 78, 0, 0, 0, 0, 0, 0, 1151, 974];

// Número de municipios productores por región en Oaxaca
// Cada objeto indica la región y la cantidad de municipios que participan en la producción del producto
const tab_mun_producto_oax = [
  { nom: "Istmo", num: 29 },
  { nom: "Costa", num: 23 },
  { nom: "Sierra Sur", num: 2 },
  { nom: "Papaloapan", num: 1 },
];
