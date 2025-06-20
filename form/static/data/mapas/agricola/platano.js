const regionesConMunicipios = {
  Papaloapan: [
    //7
    {
      id: 20184,
      territorio: "1,770",
      toneladas: "42,777",
    }, //San Juan Bautista Tuxtepec
    {
      id: 20559,
      territorio: "162",
      toneladas: "2,757",
    }, //San Juan Bautista Valle Nacional
    {
      id: 20166,
      territorio: "105",
      toneladas: "1,796",
    }, //San José Chiltepec
    {
      id: 20417,
      territorio: "80",
      toneladas: "1,403",
    }, //Santa María Jacatepec
    {
      id: 20468,
      territorio: "52",
      toneladas: "785",
    }, //Santiago Jocotepec
    {
      id: 20498,
      territorio: "30",
      toneladas: "541",
    }, //Santiago Yaveo
    {
      id: 20009,
      territorio: "12",
      toneladas: "186",
    }, //Ayotzintepec
  ],
  Costa: [
    //10
    {
      id: 20334,
      territorio: "209",
      toneladas: "6,527",
    }, //Villa de Tututepec de Melchor Ocampo
    {
      id: 20413,
      territorio: "121",
      toneladas: "4,075",
    }, //Santa María Huatulco
    {
      id: 20467,
      territorio: "263",
      toneladas: "7,151",
    }, //Santiago Jamiltepec
    {
      id: 20439,
      territorio: "104",
      toneladas: "3,754",
    }, //Santa María Tonameca
    {
      id: 20324,
      territorio: "55",
      toneladas: "1,619",
    }, //San Pedro Pochutla
    {
      id: 20012,
      territorio: "57",
      toneladas: "1,571",
    }, //Candelaria Loxicha
    {
      id: 20414,
      territorio: "94",
      toneladas: "2,455",
    }, //Santa María Huazolotitlán
    {
      id: 20071,
      territorio: "39",
      toneladas: "1,062",
    }, //Pluma Hidalgo
    {
      id: 20319,
      territorio: "26",
      toneladas: "801",
    }, //San Pedro Mixtepec
    {
      id: 20401,
      territorio: "23",
      toneladas: "637",
    }, //Santa María Colotepec
  ],
  "Sierra Sur": [
    //12
    {
      id: 20073,
      territorio: "62",
      toneladas: "371",
    }, //Putla Villa de Guerrero
    {
      id: 20392,
      territorio: "54",
      toneladas: "309",
    }, //Santa Lucía Monteverde
    {
      id: 20447,
      territorio: "47",
      toneladas: "291",
    }, //Santa María Zacatepec
    {
      id: 20020,
      territorio: "32",
      toneladas: "201",
    }, //Constancia del Rosario
    {
      id: 20229,
      territorio: "18",
      toneladas: "165",
    }, //San Lorenzo Texmelúcan
    {
      id: 20516,
      territorio: "16",
      toneladas: "149",
    }, //Santo Domingo Teojomulco
    {
      id: 20300,
      territorio: "18",
      toneladas: "106",
    }, //San Pedro Amuzgos
    {
      id: 20088,
      territorio: "15",
      toneladas: "98",
    }, //San Andrés Cabecera Nueva
    {
      id: 20448,
      territorio: "8",
      toneladas: "64",
    }, //Santa María Zaniza
    {
      id: 20415,
      territorio: "7",
      toneladas: "41",
    }, //Santa María Ipalapa
    {
      id: 20037,
      territorio: "6",
      toneladas: "40",
    }, //Mesones Hidalgo
    {
      id: 20377,
      territorio: "5",
      toneladas: "34",
    }, //Santa Cruz Itundujia
  ],
  Mixteca: [
    //2
    {
      id: 20469,
      territorio: "148",
      toneladas: "710",
    }, //Santiago Juxtlahuaca
    {
      id: 20016,
      territorio: "11",
      toneladas: "46",
    }, //Coicoyán de Las Flores
  ],
  "Sierra de Juárez": [
    //1
    {
      id: 20190,
      territorio: "28",
      toneladas: "475",
    }, //San Juan Cotzocón
  ],
};

const estadosDatos = {
  //16
  Chiapas: [
    {
      id: 7,
      territorio: "23,496",
      toneladas: "672,021",
    },
  ],
  Tabasco: [
    {
      id: 27,
      territorio: "11,708",
      toneladas: "621,552",
    },
  ],
  Colima: [
    {
      id: 6,
      territorio: "11,480",
      toneladas: "359,202",
    },
  ],
  Veracruz: [
    {
      id: 30,
      territorio: "16,469",
      toneladas: "336,984",
    },
  ],
  Jalisco: [
    {
      id: 14,
      territorio: "4,084",
      toneladas: "203,087",
    },
  ],
  "Michoacán": [
    {
      id: 16,
      territorio: "5,837",
      toneladas: "178,492",
    },
  ],
  Guerrero: [
    {
      id: 12,
      territorio: "3,981",
      toneladas: "93,122",
    },
  ],
  Oaxaca: [
    {
      id: 20,
      territorio: "3,672",
      toneladas: "82,995",
    },
  ],
  Puebla: [
    {
      id: 21,
      territorio: "2,591",
      toneladas: "41,337",
    },
  ],
  Nayarit: [
    {
      id: 18,
      territorio: "2,526",
      toneladas: "37,879",
    },
  ],
  "Quintana Roo": [
    {
      id: 23,
      territorio: "753",
      toneladas: "11,429",
    },
  ],
  "Yucatán": [
    {
      id: 31,
      territorio: "351",
      toneladas: "2,398",
    },
  ],
  Campeche: [
    {
      id: 4,
      territorio: "110",
      toneladas: "1,298",
    },
  ],
  Morelos: [
    {
      id: 17,
      territorio: "9",
      toneladas: "280",
    },
  ],
  "México": [
    {
      id: 15,
      territorio: "18",
      toneladas: "226",
    },
  ],
  Hidalgo: [
    {
      id: 13,
      territorio: "7",
      toneladas: "36",
    },
  ],
};

const paisesDatos = {
  //24
  Uganda: [
    {
      id: "UGA",
      territorio: "2,351,010"
    },
  ],
  "República Democrática del Congo": [
    {
      id: "COD",
      territorio: "1,086,253"
    },
  ],
  "Côte d'Ivoire": [
    {
      id: "CIV",
      territorio: "549,434"
    },
  ],
  "Camerún": [
    {
      id: "CMR",
      territorio: "503,290"
    },
  ],
  Ghana: [
    {
      id: "GHA",
      territorio: "421,423"
    },
  ],
  "República Unida de Tanzanía": [
    {
      id: "TZA",
      territorio: "314,211"
    },
  ],
  Colombia: [
    {
      id: "COL",
      territorio: "274,731"
    },
  ],
  Filipinas: [
    {
      id: "PHL",
      territorio: "258,035"
    },
  ],
  Ecuador: [
    {
      id: "ECU",
      territorio: "114,526"
    },
  ],
  Guinea: [
    {
      id: "GIN",
      territorio: "92,082"
    },
  ],
  Myanmar: [
    {
      id: "MMR",
      territorio: "90,204"
    },
  ],
  Rwanda: [
    {
      id: "RWA",
      territorio: "89,777"
    },
  ],
  Cuba: [
    {
      id: "CUB",
      territorio: "64,833"
    },
  ],
  Venezuela: [
    {
      id: "VEN",
      territorio: "57,918"
    },
  ],
  "Gabón": [
    {
      id: "GAB",
      territorio: "50,527"
    },
  ],
  "República Dominicana": [
    {
      id: "DOM",
      territorio: "49,086"
    },
  ],
  "Sri Lanka": [
    {
      id: "LKA",
      territorio: "47,912"
    },
  ],
  Bolivia: [
    {
      id: "BOL",
      territorio: "41,016"
    },
  ],
  "Haití": [
    {
      id: "HTI",
      territorio: "37,871"
    },
  ],
  Malawi: [
    {
      id: "MWI",
      territorio: "36,295"
    },
  ],
  "República Centroafricana": [
    {
      id: "CAF",
      territorio: "30,984"
    },
  ],
  Liberia: [
    {
      id: "LBR",
      territorio: "23,165"
    },
  ],
  "Panamá": [
    {
      id: "PAN",
      territorio: "21,944"
    },
  ],
  "México": [
    {
      id: "MEX",
      territorio: "18,115"
    },
  ],
};
