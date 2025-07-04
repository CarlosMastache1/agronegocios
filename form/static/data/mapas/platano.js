const regionesConMunicipios = {
  Papaloapan: [
    //7
    {
      id: 20184,
      superficie: "1,770",
      volumen: "42,777",
    }, //San Juan Bautista Tuxtepec
    {
      id: 20559,
      superficie: "162",
      volumen: "2,757",
    }, //San Juan Bautista Valle Nacional
    {
      id: 20166,
      superficie: "105",
      volumen: "1,796",
    }, //San José Chiltepec
    {
      id: 20417,
      superficie: "80",
      volumen: "1,403",
    }, //Santa María Jacatepec
    {
      id: 20468,
      superficie: "52",
      volumen: "785",
    }, //Santiago Jocotepec
    {
      id: 20498,
      superficie: "30",
      volumen: "541",
    }, //Santiago Yaveo
    {
      id: 20009,
      superficie: "12",
      volumen: "186",
    }, //Ayotzintepec
  ],
  Costa: [
    //10
    {
      id: 20334,
      superficie: "209",
      volumen: "6,527",
    }, //Villa de Tututepec de Melchor Ocampo
    {
      id: 20413,
      superficie: "121",
      volumen: "4,075",
    }, //Santa María Huatulco
    {
      id: 20467,
      superficie: "263",
      volumen: "7,151",
    }, //Santiago Jamiltepec
    {
      id: 20439,
      superficie: "104",
      volumen: "3,754",
    }, //Santa María Tonameca
    {
      id: 20324,
      superficie: "55",
      volumen: "1,619",
    }, //San Pedro Pochutla
    {
      id: 20012,
      superficie: "57",
      volumen: "1,571",
    }, //Candelaria Loxicha
    {
      id: 20414,
      superficie: "94",
      volumen: "2,455",
    }, //Santa María Huazolotitlán
    {
      id: 20071,
      superficie: "39",
      volumen: "1,062",
    }, //Pluma Hidalgo
    {
      id: 20319,
      superficie: "26",
      volumen: "801",
    }, //San Pedro Mixtepec
    {
      id: 20401,
      superficie: "23",
      volumen: "637",
    }, //Santa María Colotepec
  ],
  "Sierra Sur": [
    //12
    {
      id: 20073,
      superficie: "62",
      volumen: "371",
    }, //Putla Villa de Guerrero
    {
      id: 20392,
      superficie: "54",
      volumen: "309",
    }, //Santa Lucía Monteverde
    {
      id: 20447,
      superficie: "47",
      volumen: "291",
    }, //Santa María Zacatepec
    {
      id: 20020,
      superficie: "32",
      volumen: "201",
    }, //Constancia del Rosario
    {
      id: 20229,
      superficie: "18",
      volumen: "165",
    }, //San Lorenzo Texmelúcan
    {
      id: 20516,
      superficie: "16",
      volumen: "149",
    }, //Santo Domingo Teojomulco
    {
      id: 20300,
      superficie: "18",
      volumen: "106",
    }, //San Pedro Amuzgos
    {
      id: 20088,
      superficie: "15",
      volumen: "98",
    }, //San Andrés Cabecera Nueva
    {
      id: 20448,
      superficie: "8",
      volumen: "64",
    }, //Santa María Zaniza
    {
      id: 20415,
      superficie: "7",
      volumen: "41",
    }, //Santa María Ipalapa
    {
      id: 20037,
      superficie: "6",
      volumen: "40",
    }, //Mesones Hidalgo
    {
      id: 20377,
      superficie: "5",
      volumen: "34",
    }, //Santa Cruz Itundujia
  ],
  Mixteca: [
    //2
    {
      id: 20469,
      superficie: "148",
      volumen: "710",
    }, //Santiago Juxtlahuaca
    {
      id: 20016,
      superficie: "11",
      volumen: "46",
    }, //Coicoyán de Las Flores
  ],
  "Sierra de Juárez": [
    //1
    {
      id: 20190,
      superficie: "28",
      volumen: "475",
    }, //San Juan Cotzocón
  ],
};

const estadosDatos = {
  //16
  Chiapas: [
    {
      id: 7,
      superficie: "23,496",
      volumen: "672,021",
    },
  ],
  Tabasco: [
    {
      id: 27,
      superficie: "11,708",
      volumen: "621,552",
    },
  ],
  Colima: [
    {
      id: 6,
      superficie: "11,480",
      volumen: "359,202",
    },
  ],
  Veracruz: [
    {
      id: 30,
      superficie: "16,469",
      volumen: "336,984",
    },
  ],
  Jalisco: [
    {
      id: 14,
      superficie: "4,084",
      volumen: "203,087",
    },
  ],
  "Michoacán": [
    {
      id: 16,
      superficie: "5,837",
      volumen: "178,492",
    },
  ],
  Guerrero: [
    {
      id: 12,
      superficie: "3,981",
      volumen: "93,122",
    },
  ],
  Oaxaca: [
    {
      id: 20,
      superficie: "3,672",
      volumen: "82,995",
    },
  ],
  Puebla: [
    {
      id: 21,
      superficie: "2,591",
      volumen: "41,337",
    },
  ],
  Nayarit: [
    {
      id: 18,
      superficie: "2,526",
      volumen: "37,879",
    },
  ],
  "Quintana Roo": [
    {
      id: 23,
      superficie: "753",
      volumen: "11,429",
    },
  ],
  "Yucatán": [
    {
      id: 31,
      superficie: "351",
      volumen: "2,398",
    },
  ],
  Campeche: [
    {
      id: 4,
      superficie: "110",
      volumen: "1,298",
    },
  ],
  Morelos: [
    {
      id: 17,
      superficie: "9",
      volumen: "280",
    },
  ],
  "México": [
    {
      id: 15,
      superficie: "18",
      volumen: "226",
    },
  ],
  Hidalgo: [
    {
      id: 13,
      superficie: "7",
      volumen: "36",
    },
  ],
};

const paisesDatos = {
  //24
  Uganda: [
    {
      id: "UGA",
      superficie: "2,351,010"
    },
  ],
  "República Democrática del Congo": [
    {
      id: "COD",
      superficie: "1,086,253"
    },
  ],
  "Côte d'Ivoire": [
    {
      id: "CIV",
      superficie: "549,434"
    },
  ],
  "Camerún": [
    {
      id: "CMR",
      superficie: "503,290"
    },
  ],
  Ghana: [
    {
      id: "GHA",
      superficie: "421,423"
    },
  ],
  "República Unida de Tanzanía": [
    {
      id: "TZA",
      superficie: "314,211"
    },
  ],
  Colombia: [
    {
      id: "COL",
      superficie: "274,731"
    },
  ],
  Filipinas: [
    {
      id: "PHL",
      superficie: "258,035"
    },
  ],
  Ecuador: [
    {
      id: "ECU",
      superficie: "114,526"
    },
  ],
  Guinea: [
    {
      id: "GIN",
      superficie: "92,082"
    },
  ],
  Myanmar: [
    {
      id: "MMR",
      superficie: "90,204"
    },
  ],
  Rwanda: [
    {
      id: "RWA",
      superficie: "89,777"
    },
  ],
  Cuba: [
    {
      id: "CUB",
      superficie: "64,833"
    },
  ],
  Venezuela: [
    {
      id: "VEN",
      superficie: "57,918"
    },
  ],
  "Gabón": [
    {
      id: "GAB",
      superficie: "50,527"
    },
  ],
  "República Dominicana": [
    {
      id: "DOM",
      superficie: "49,086"
    },
  ],
  "Sri Lanka": [
    {
      id: "LKA",
      superficie: "47,912"
    },
  ],
  Bolivia: [
    {
      id: "BOL",
      superficie: "41,016"
    },
  ],
  "Haití": [
    {
      id: "HTI",
      superficie: "37,871"
    },
  ],
  Malawi: [
    {
      id: "MWI",
      superficie: "36,295"
    },
  ],
  "República Centroafricana": [
    {
      id: "CAF",
      superficie: "30,984"
    },
  ],
  Liberia: [
    {
      id: "LBR",
      superficie: "23,165"
    },
  ],
  "Panamá": [
    {
      id: "PAN",
      superficie: "21,944"
    },
  ],
  "México": [
    {
      id: "MEX",
      superficie: "18,115"
    },
  ],
};
