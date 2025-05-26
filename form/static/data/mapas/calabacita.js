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


const estadosDatos = {//30
  Sonora: [
    {
      id: 26,
      territorio: "6,099",
      toneladas: "165,704",
    },
  ],
  Puebla: [
    {
      id: 21,
      territorio: "4,080",
      toneladas: "71,148",
    },
  ],
  Sinaloa: [
    {
      id: 25,
      territorio: "2,027",
      toneladas: "55,646",
    },
  ],
  "Michoacán": [
    {
      id: 16,
      territorio: "2,027",
      toneladas: "44,156",
    },
  ],
  Hidalgo: [
    {
      id: 13,
      territorio: "1,541",
      toneladas: "28,712",
    },
  ],
  Jalisco: [
    {
      id: 14,
      territorio: "1,150",
      toneladas: "25,817",
    },
  ],
  Zacatecas: [
    {
      id: 32,
      territorio: "785",
      toneladas: "20,425",
    },
  ],
  Morelos: [
    {
      id: 17,
      territorio: "1,279",
      toneladas: "18,625",
    },
  ],
  "Yucatán": [
    {
      id: 31,
      territorio: "1,027",
      toneladas: "17,123",
    },
  ],
  "México": [
    {
      id: 15,
      territorio: "1,034",
      toneladas: "15,205",
    },
  ],
  Guanajuato: [
    {
      id: 11,
      territorio: "805",
      toneladas: "13,970",
    },
  ],
  Oaxaca: [
    {
      id: 20,
      territorio: "535",
      toneladas: "12,012",
    },
  ],
  "Baja California Sur": [
    {
      id: 3,
      territorio: "303",
      toneladas: "10,067",
    },
  ],
  "San Luis Potosí": [
    {
      id: 24,
      territorio: "351",
      toneladas: "7,769",
    },
  ],
  Guerrero: [
    {
      id: 12,
      territorio: "698",
      toneladas: "7,382",
    },
  ],
  Aguascalientes: [
    {
      id:  1,
      territorio: "260",
      toneladas: "6,798",
    },
  ],
  Coahuila: [
    {
      id: 5,
      territorio: "314",
      toneladas: "5,572",
    },
  ],
  "Baja California": [
    {
      id: 2,
      territorio: "186",
      toneladas: "4,997",
    },
  ],
  "Nuevo León": [
    {
      id: 19,
      territorio: "142",
      toneladas: "4,698",
    },
  ],
  Chihuahua: [
    {
      id: 8,
      territorio: "226",
      toneladas: "3,820",
    },
  ],
  Veracruz: [
    {
      id: 30,
      territorio: "315",
      toneladas: "3,504",
    },
  ],
  "Quintana Roo": [
    {
      id: 23,
      territorio: "411",
      toneladas: "2,669",
    },
  ],
  Durango: [
    {
      id: 10,
      territorio: "90",
      toneladas: "2,662",
    },
  ],
  "Querétaro": [
    {
      id: 22,
      territorio: "97",
      toneladas: "1,406",
    },
  ],
  Campeche: [
    {
      id: 4,
      territorio: "121",
      toneladas: "1,173",
    },
  ],
  Nayarit: [
    {
      id: 18,
      territorio: "84",
      toneladas: "990",
    },
  ],
  Tamaulipas: [
    {
      id: 28,
      territorio: "53",
      toneladas: "840",
    },
  ],
  Tlaxcala: [
    {
      id: 29,
      territorio: "27",
      toneladas: "378",
    },
  ],
  Colima: [
    {
      id: 6,
      territorio: "6",
      toneladas: "85",
    },
  ],
};

const paisesDatos = {
  //15
  China: [
    {
      id: "CHN",
      territorio: "794,819",
    },
  ],
  "Camerún": [
    {
      id: "CMR",
      territorio: "152,498",
    },
  ],
  "Turquía": [
    {
      id: "TUR",
      territorio: "91,839",
    },
  ],
  "República Centroafricana": [
    {
      id: "CAF",
      territorio: "77,531",
    },
  ],
  Bangladesh: [
    {
      id: "BGD",
      territorio: "61,542",
    },
  ],
  Ucrania: [
    {
      id: "UKR",
      territorio: "51,900",
    },
  ],
  Rwanda: [
    {
      id: "RWA",
      territorio: "51,105",
    },
  ],
  "Federación de Rusia": [
    {
      id: "RUS",
      territorio: "48,158",
    },
  ],
  "Estados Unidos de América": [
    {
      id: "USA",
      territorio: "42,492",
    },
  ],
  "Sudáfrica": [
    {
      id: "ZAF",
      territorio: "35,530",
    },
  ],
  "México": [
    {
      id: "MEX",
      territorio: "35,147",
    },
  ],
  Cuba: [
    {
      id: "CUB",
      territorio: "31,633",
    },
  ],
  "Pakistán": [
    {
      id: "PAK",
      territorio: "28,589",
    },
  ],
  "Irán": [
    {
      id: "IRN",
      territorio: "28,144",
    },
  ],
};
