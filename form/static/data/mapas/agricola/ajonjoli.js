// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  //4
  Istmo: [
    //29
    {
      id: 20025,
      superficie: 115,
      volumen: 95,
      nombre: "Chahuites"
    }, 
    {
      id: 20075,
      superficie: 193,
      volumen: 154,
      nombre: "Reforma de Pineda"
    }, 
    {
      id: 20143,
      superficie: 159,
      volumen: 124,
      nombre: "San Francisco Ixhuatán"
    }, 
    {
      id: 20327,
      superficie: 566,
      volumen: 441,
      nombre: "San Pedro Tapanatepec"
    }, 
    {
      id: 20525,
      superficie: 627,
      volumen: 507,
      nombre: "Santo Domingo Zanatepec"
    }, 
    {
      id: 20066,
      superficie: 136,
      volumen: 116,
      nombre: "Santiago Niltepec"
    }, 
    {
      id: 20130,
      superficie: 37,
      volumen: 31,
      nombre: "San Dionisio del Mar"
    }, 
    {
      id: 20141,
      superficie: 202,
      volumen: 165,
      nombre: "San Francisco del Mar"
    }, 
    {
      id: 20505,
      superficie: 310,
      volumen: 266,
      nombre: "Santo Domingo Ingenio"
    }, 
    {
      id: 20005,
      superficie: 33,
      volumen: 25,
      nombre: "Asunción Ixtaltepec"
    }, 
    {
      id: 20014,
      superficie: 117,
      volumen: 86,
      nombre: "Ciudad Ixtepec"
    }, 
    {
      id: 20030,
      superficie: 54,
      volumen: 40,
      nombre: "El Espinal"
    }, 
    {
      id: 20043,
      superficie: 272,
      volumen: 203,
      nombre: "Heroica Ciudad de Juchitán de Zaragoza"
    }, 
    {
      id: 20053,
      superficie: 89,
      volumen: 68,
      nombre: "Magdalena Tlacotepec"
    }, 
    {
      id: 20079,
      superficie: 71,
      volumen: 54,
      nombre: "Salina Cruz"
    }, 
    {
      id: 20124,
      superficie: 351,
      volumen: 256,
      nombre: "San Blas Atempa"
    }, 
    {
      id: 20248,
      superficie: 168,
      volumen: 123,
      nombre: "San Mateo del Mar"
    }, 
    {
      id: 20305,
      superficie: 351,
      volumen: 263,
      nombre: "San Pedro Comitancillo"
    }, 
    {
      id: 20307,
      superficie: 224,
      volumen: 172,
      nombre: "San Pedro Huamelula"
    }, 
    {
      id: 20308,
      superficie: 116,
      volumen: 93,
      nombre: "San Pedro Huilotepec"
    }, 
    {
      id: 20418,
      superficie: 810,
      volumen: 627,
      nombre: "Santa María Jalapa del Marqués"
    }, 
    {
      id: 20421,
      superficie: 107,
      volumen: 86,
      nombre: "Santa María Mixtequilla"
    }, 
    {
      id: 20441,
      superficie: 49,
      volumen: 39,
      nombre: "Santa María Xadani"
    }, 
    {
      id: 20453,
      superficie: 94,
      volumen: 73,
      nombre: "Santiago Astata"
    }, 
    {
      id: 20472,
      superficie: 114,
      volumen: 87,
      nombre: "Santiago Laollaga"
    }, 
    {
      id: 20508,
      superficie: 106,
      volumen: 84,
      nombre: "Santo Domingo Chihuitán"
    }, 
    {
      id: 20515,
      superficie: 561,
      volumen: 449,
      nombre: "Santo Domingo Tehuantepec"
    }, 
    {
      id: 20557,
      superficie: 51,
      volumen: 39,
      nombre: "Unión Hidalgo"
    }, 
    {
      id: 20052,
      superficie: 80,
      volumen: 60,
      nombre: "Magdalena Tequisistlán"
    }, 
  ],
  Costa: [
    //23
    {
      id: 20056,
      superficie: 55,
      volumen: 43,
      nombre: "Mártires de Tacubaya",
    },
    {
      id: 20090,
      superficie: 67,
      volumen: 52,
      nombre: "San Andrés Huaxpaltepec",
    },
    {
      id: 20111,
      superficie: 25,
      volumen: 18,
      nombre: "San Antonio Tepetlapa",
    },
    {
      id: 20180,
      superficie: 110,
      volumen: 90,
      nombre: "San Juan Bautista Lo de Soto",
    },
    {
      id: 20185,
      superficie: 20,
      volumen: 16,
      nombre: "San Juan Cacahuatepec",
    },
    {
      id: 20225,
      superficie: 21,
      volumen: 16,
      nombre: "San Lorenzo",
    },
    {
      id: 20285,
      superficie: 20,
      volumen: 15,
      nombre: "San Miguel Tlacamama",
    },
    {
      id: 20345,
      superficie: 25,
      volumen: 19,
      nombre: "San Sebastián Ixcapa",
    },
    {
      id: 20367,
      superficie: 25,
      volumen: 20,
      nombre: "Santa Catarina Mechoacán",
    },
    {
      id: 20402,
      superficie: 107,
      volumen: 83,
      nombre: "Santa María Cortijo",
    },
    {
      id: 20414,
      superficie: 107,
      volumen: 82,
      nombre: "Santa María Huazolotitlán",
    },
    {
      id: 20467,
      superficie: 103,
      volumen: 90,
      nombre: "Santiago Jamiltepec",
    },
    {
      id: 20474,
      superficie: 104,
      volumen: 81,
      nombre: "Santiago Llano Grande",
    },
    {
      id: 20482,
      superficie: 116,
      volumen: 87,
      nombre: "Santiago Pinotepa Nacional",
    },
    {
      id: 20485,
      superficie: 95,
      volumen: 80,
      nombre: "Santiago Tapextla",
    },
    {
      id: 20489,
      superficie: 25,
      volumen: 23,
      nombre: "Santiago Tetepec",
    },
    {
      id: 20507,
      superficie: 110,
      volumen: 89,
      nombre: "Santo Domingo Armenta",
    },
    {
      id: 20319,
      superficie: 103,
      volumen: 78,
      nombre: "San Pedro Mixtepec",
    },
    {
      id: 20334,
      superficie: 71,
      volumen: 53,
      nombre: "Villa de Tututepec de Melchor Ocampo",
    },
    {
      id: 20401,
      superficie: 407,
      volumen: 386,
      nombre: "Santa María Colotepec",
    },
    {
      id: 20324,
      superficie: 50,
      volumen: 44,
      nombre: "San Pedro Pochutla",
    },
    {
      id: 20413,
      superficie: 78,
      volumen: 64,
      nombre: "Santa María Huatulco",
    },
    {
      id: 20439,
      superficie: 99,
      volumen: 82,
      nombre: "Santa María Tonameca",
    },
  ],
  "Sierra Sur": [
    //2
    {
      id: 20008,
      superficie: 65,
      volumen: 45,
      nombre: "Asunción Tlacolulita",
    },
    {
      id: 20410,
      superficie: 25,
      volumen: 19,
      nombre: "Santa María Ecatepec",
    },
  ],
  Papaloapan: [
    //1
    {
      id: 20134,
      superficie: 54,
      volumen: 40,
      nombre: "San Felipe Jalapa de Díaz",
    },
  ],
};

// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    id: "GRO",
    entidad: "Guerrero",
    volumen: 13322,
    superficie: 15831,
    rendimiento: 0.8,
    valor: 273119959,
  },
  {
    ranking: 2,
    id: "SIN",
    entidad: "Sinaloa",
    volumen: 12803,
    superficie: 23874,
    rendimiento: 0.72,
    valor: 299321506,
  },
  {
    ranking: 3,
    id: "MICH",
    entidad: "Michoacán",
    volumen: 8745,
    superficie: 10750,
    rendimiento: 0.89,
    valor: 161981722,
  },
  {
    ranking: 4,
    id: "OAX",
    entidad: "Oaxaca",
    volumen: 6543,
    superficie: 8242,
    rendimiento: 0.79,
    valor: 232605456,
  },
  {
    ranking: 5,
    id: "SON",
    entidad: "Sonora",
    volumen: 4505,
    superficie: 3695,
    rendimiento: 1.39,
    valor: 103769328,
  },
  {
    ranking: 6,
    id: "CHS",
    entidad: "Chiapas",
    volumen: 3969,
    superficie: 7725,
    rendimiento: 0.49,
    valor: 62686781,
  },
  {
    ranking: 7,
    id: "VER",
    entidad: "Veracruz",
    volumen: 635,
    superficie: 464,
    rendimiento: 1.33,
    valor: 9864411,
  },
  {
    ranking: 8,
    id: "PUE",
    entidad: "Puebla",
    volumen: 143,
    superficie: 88,
    rendimiento: 1.62,
    valor: 2144587,
  },
  {
    ranking: 9,
    id: "JAL",
    entidad: "Jalisco",
    volumen: 100,
    superficie: 322,
    rendimiento: 0.57,
    valor: 2361025,
  },
  {
    ranking: 10,
    id: "NAY",
    entidad: "Nayarit",
    volumen: 22,
    superficie: 39,
    rendimiento: 0.42,
    valor: 751175,
  },
  {
    ranking: 11,
    id: "TAMP",
    entidad: "Tamaulipas",
    volumen: 17,
    superficie: 40,
    rendimiento: 0.32,
    valor: 468330,
  },
  {
    ranking: 12,
    id: "COL",
    entidad: "Colima",
    volumen: 9,
    superficie: 8,
    rendimiento: 1.18,
    valor: 148368,
  },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { ranking: 1, pais: "Sudán", superficie: 4151896, id: "SDN",},
  { ranking: 2, pais: "India", superficie: 1627040, id: "IND",},
  { ranking: 3, pais: "Myanmar", superficie: 1538252, id: "MMR",},
  { ranking: 4, pais: "República Unida de Tanzanía", superficie: 970000, id: "TZA",},
  { ranking: 5, pais: "Sudán del Sur", superficie: 615059, id: "SDS",},
  { ranking: 6, pais: "Burkina Faso", superficie: 396151, id: "BFA",},
  { ranking: 7, pais: "Chad", superficie: 389069, id: "TCD",},
  { ranking: 8, pais: "Nigeria", superficie: 365000, id: "NGA",},
  { ranking: 9, pais: "Brasil", superficie: 307000, id: "BRA",},
  { ranking: 10, pais: "China", superficie: 267364, id: "CHN",},
  { ranking: 11, pais: "China, Continental", superficie: 265000, id: "CHN",},
  { ranking: 12, pais: "Pakistán", superficie: 259896, id: "PAK",},
  { ranking: 13, pais: "Etiopía", superficie: 250000, id: "ETH",},
  { ranking: 14, pais: "Uganda", superficie: 215000, id: "UGA",},
  { ranking: 15, pais: "Níger", superficie: 214652, id: "NER",},
  { ranking: 16, pais: "Mozambique", superficie: 164000, id: "MOZ",},
  { ranking: 17, pais: "Malí", superficie: 91983, id: "MLI",},
  { ranking: 18, pais: "México", superficie: 81368, id: "MEX",},
  { ranking: "", pais: "Otros", superficie: 935410, },
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
