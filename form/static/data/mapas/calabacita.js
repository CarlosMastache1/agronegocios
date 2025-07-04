const regionesConMunicipios = {
  Mixteca: [
    //14
    {
      id: 20004,
      superficie: "2",
      volumen: "73",
    }, //Asunción Cuyotepeji
    {
      id: 20039,
      superficie: "15",
      volumen: "414",
    }, //Heroica Ciudad de Huajuapan de León
    {
      id: 20081,
      superficie: "30",
      volumen: "719",
    }, //San Agustín Atenango
    {
      id: 20089,
      superficie: "1",
      volumen: "35",
    }, //San Andrés Dinicuiti
    {
      id: 20089,
      superficie: "2",
      volumen: "39",
    }, //San Juan Bautista Suchitepec
    {
      id: 20237,
      superficie: "8",
      volumen: "215",
    }, //San Marcos Arteaga
    {
      id: 20400,
      superficie: "24",
      volumen: "603",
    }, //Santa María Camotlán
    {
      id: 20461,
      superficie: "3",
      volumen: "76",
    }, //Santiago del Río
    {
      id: 20462,
      superficie: "62",
      volumen: "1,600",
    }, //Santiago Huajolotitlán
    {
      id: 20476,
      superficie: "1",
      volumen: "33",
    }, //Santiago Miltepec
    {
      id: 20520,
      superficie: "183",
      volumen: "4,659",
    }, //Santo Domingo Tonalá
    {
      id: 20524,
      superficie: "3",
      volumen: "70",
    }, //Santo Domingo Yodohino
    {
      id: 20537,
      superficie: "6",
      volumen: "158",
    }, //Silacayoápam
    {
      id: 20549,
      superficie: "29",
      volumen: "700",
    }, //H. V. Tezoatlán de Segura y Luna, C. de la I.de O.
  ],
  "Valles Centrales": [
    //21
    {
      id: 20023,
      superficie: "2",
      volumen: "25",
    }, //Cuilápam de Guerrero
    {
      id: 20068,
      superficie: "21",
      volumen: "325",
    }, //Ocotlán de Morelos
    {
      id: 20092,
      superficie: "6",
      volumen: "100",
    }, //San Andrés Ixtlahuaca
    {
      id: 20103,
      superficie: "16",
      volumen: "254",
    }, //San Antonino Castillo Velasco
    {
      id: 20132,
      superficie: "8",
      volumen: "117",
    }, //San Dionisio Ocotlán
    {
      id: 20150,
      superficie: "2",
      volumen: "30",
    }, //San Francisco Telixtlahuaca
    {
      id: 20273,
      superficie: "3",
      volumen: "39",
    }, //San Miguel Peras
    {
      id: 20294,
      superficie: "7",
      volumen: "107",
    }, //San Pablo Huitzo
    {
      id: 20301,
      superficie: "3",
      volumen: "55",
    }, //San Pedro Apóstol
    {
      id: 20310,
      superficie: "2",
      volumen: "39",
    }, //San Pedro Ixtlahuaca
    {
      id: 20315,
      superficie: "2",
      volumen: "34",
    }, //San Pedro Mártir
    {
      id: 20368,
      superficie: "2",
      volumen: "25",
    }, //Santa Catarina Minas
    {
      id: 20388,
      superficie: "2",
      volumen: "30",
    }, //Santa Inés del Monte
    {
      id: 20393,
      superficie: "4",
      volumen: "60",
    }, //Santa Lucía Ocotlán
    {
      id: 20399,
      superficie: "2",
      volumen: "34",
    }, //Santa María Atzompa
    {
      id: 20452,
      superficie: "6",
      volumen: "97",
    }, //Santiago Apóstol
    {
      id: 20483,
      superficie: "8",
      volumen: "117",
    }, //Santiago Suchilquitongo
    {
      id: 20561,
      superficie: "4",
      volumen: "64",
    }, //Yaxe
    {
      id: 20570,
      superficie: "2",
      volumen: "33",
    }, //Zimatlán de Álvarez
    {
      id: 20028,
      superficie: "21",
      volumen: "238",
    }, //Heroica Ciudad de Ejutla de Crespo
    {
      id: 20268,
      superficie: "7",
      volumen: "89",
    }, //San Miguel Ejutla
  ],
  "Sierra de Flores Magón": [
    //1
    {
      id: 20431,
      superficie: "26",
      volumen: "575",
    }, //Santa María Tecomavaca
  ],
  "Sierra Sur": [
    //1
    {
      id: 20059,
      superficie: "11",
      volumen: "131",
    }, //Miahuatlán de Porfirio Díaz
  ],
};


const estadosDatos = {//30
  Sonora: [
    {
      id: 26,
      superficie: "6,099",
      volumen: "165,704",
    },
  ],
  Puebla: [
    {
      id: 21,
      superficie: "4,080",
      volumen: "71,148",
    },
  ],
  Sinaloa: [
    {
      id: 25,
      superficie: "2,027",
      volumen: "55,646",
    },
  ],
  "Michoacán": [
    {
      id: 16,
      superficie: "2,027",
      volumen: "44,156",
    },
  ],
  Hidalgo: [
    {
      id: 13,
      superficie: "1,541",
      volumen: "28,712",
    },
  ],
  Jalisco: [
    {
      id: 14,
      superficie: "1,150",
      volumen: "25,817",
    },
  ],
  Zacatecas: [
    {
      id: 32,
      superficie: "785",
      volumen: "20,425",
    },
  ],
  Morelos: [
    {
      id: 17,
      superficie: "1,279",
      volumen: "18,625",
    },
  ],
  "Yucatán": [
    {
      id: 31,
      superficie: "1,027",
      volumen: "17,123",
    },
  ],
  "México": [
    {
      id: 15,
      superficie: "1,034",
      volumen: "15,205",
    },
  ],
  Guanajuato: [
    {
      id: 11,
      superficie: "805",
      volumen: "13,970",
    },
  ],
  Oaxaca: [
    {
      id: 20,
      superficie: "535",
      volumen: "12,012",
    },
  ],
  "Baja California Sur": [
    {
      id: 3,
      superficie: "303",
      volumen: "10,067",
    },
  ],
  "San Luis Potosí": [
    {
      id: 24,
      superficie: "351",
      volumen: "7,769",
    },
  ],
  Guerrero: [
    {
      id: 12,
      superficie: "698",
      volumen: "7,382",
    },
  ],
  Aguascalientes: [
    {
      id:  1,
      superficie: "260",
      volumen: "6,798",
    },
  ],
  Coahuila: [
    {
      id: 5,
      superficie: "314",
      volumen: "5,572",
    },
  ],
  "Baja California": [
    {
      id: 2,
      superficie: "186",
      volumen: "4,997",
    },
  ],
  "Nuevo León": [
    {
      id: 19,
      superficie: "142",
      volumen: "4,698",
    },
  ],
  Chihuahua: [
    {
      id: 8,
      superficie: "226",
      volumen: "3,820",
    },
  ],
  Veracruz: [
    {
      id: 30,
      superficie: "315",
      volumen: "3,504",
    },
  ],
  "Quintana Roo": [
    {
      id: 23,
      superficie: "411",
      volumen: "2,669",
    },
  ],
  Durango: [
    {
      id: 10,
      superficie: "90",
      volumen: "2,662",
    },
  ],
  "Querétaro": [
    {
      id: 22,
      superficie: "97",
      volumen: "1,406",
    },
  ],
  Campeche: [
    {
      id: 4,
      superficie: "121",
      volumen: "1,173",
    },
  ],
  Nayarit: [
    {
      id: 18,
      superficie: "84",
      volumen: "990",
    },
  ],
  Tamaulipas: [
    {
      id: 28,
      superficie: "53",
      volumen: "840",
    },
  ],
  Tlaxcala: [
    {
      id: 29,
      superficie: "27",
      volumen: "378",
    },
  ],
  Colima: [
    {
      id: 6,
      superficie: "6",
      volumen: "85",
    },
  ],
};

const paisesDatos = {
  //15
  China: [
    {
      id: "CHN",
      superficie: "794,819",
    },
  ],
  "Camerún": [
    {
      id: "CMR",
      superficie: "152,498",
    },
  ],
  "Turquía": [
    {
      id: "TUR",
      superficie: "91,839",
    },
  ],
  "República Centroafricana": [
    {
      id: "CAF",
      superficie: "77,531",
    },
  ],
  Bangladesh: [
    {
      id: "BGD",
      superficie: "61,542",
    },
  ],
  Ucrania: [
    {
      id: "UKR",
      superficie: "51,900",
    },
  ],
  Rwanda: [
    {
      id: "RWA",
      superficie: "51,105",
    },
  ],
  "Federación de Rusia": [
    {
      id: "RUS",
      superficie: "48,158",
    },
  ],
  "Estados Unidos de América": [
    {
      id: "USA",
      superficie: "42,492",
    },
  ],
  "Sudáfrica": [
    {
      id: "ZAF",
      superficie: "35,530",
    },
  ],
  "México": [
    {
      id: "MEX",
      superficie: "35,147",
    },
  ],
  Cuba: [
    {
      id: "CUB",
      superficie: "31,633",
    },
  ],
  "Pakistán": [
    {
      id: "PAK",
      superficie: "28,589",
    },
  ],
  "Irán": [
    {
      id: "IRN",
      superficie: "28,144",
    },
  ],
};
