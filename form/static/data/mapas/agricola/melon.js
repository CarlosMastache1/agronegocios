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

const estadosDatos = {
  Michoacán: [
    {
      id: 16,
      territorio: "3,532",
      toneladas: "144,825",
    },
  ],
  Sonora: [
    {
      id: 26,
      territorio: "3,573",
      toneladas: "133,075",
    },
  ],
  Coahuila: [
    {
      id: 5,
      territorio: "3,376",
      toneladas: "114,684",
    },
  ],
  Guerrero: [
    {
      id: 12,
      territorio: "3,583",
      toneladas: "104,671",
    },
  ],
  Durango: [
    {
      id: 10,
      territorio: "1,245",
      toneladas: "45,783",
    },
  ],
  Chihuahua: [
    {
      id: 8,
      territorio: "1,522",
      toneladas: "38,177",
    },
  ],
  Colima: [
    {
      id: 6,
      territorio: "457",
      toneladas: "21,806",
    },
  ],
  Oaxaca: [
    {
      id: 20,
      territorio: "1,173",
      toneladas: "18,460",
    },
  ],
  Guanajuato: [
    {
      id: 11,
      territorio: "209",
      toneladas: "5,045",
    },
  ],
  "Baja California Sur": [
    {
      id: 3,
      territorio: "185",
      toneladas: "4,682",
    },
  ],
  Jalisco: [
    {
      id: 14,
      territorio: "180",
      toneladas: "4,362",
    },
  ],
  Nayarit: [
    {
      id: 18,
      territorio: "196",
      toneladas: "3,806",
    },
  ],
  "San Luis Potosí": [
    {
      id: 24,
      territorio: "92",
      toneladas: "2,647",
    },
  ],
  Tabasco: [
    {
      id: 27,
      territorio: "202",
      toneladas: "1,827",
    },
  ],
  "Baja California": [
    {
      id: 2,
      territorio: "81",
      toneladas: "1,765",
    },
  ],
  Chiapas: [
    {
      id: 7,
      territorio: "44",
      toneladas: "580",
    },
  ],
  Veracruz: [
    {
      id: 30,
      territorio: "23",
      toneladas: "514",
    },
  ],
  Puebla: [
    {
      id: 21,
      territorio: "22",
      toneladas: "480",
    },
  ],
  Zacatecas: [
    {
      id: 32,
      territorio: "14",
      toneladas: "412",
    },
  ],
  "Nuevo León": [
    {
      id: 19,
      territorio: "18",
      toneladas: "372",
    },
  ],
  Sinaloa: [
    {
      id: 25,
      territorio: "9",
      toneladas: "200",
    },
  ],
  México: [
    {
      id: 15,
      territorio: "5",
      toneladas: "94",
    },
  ],
  Tamaulipas: [
    {
      id: 28,
      territorio: "3",
      toneladas: "38",
    },
  ],
};

const paisesDatos = {
  China: [
    {
      id: "CHN",
      territorio: "779,580"
    },
  ],
  Afganistán: [
    {
      id: "AFG",
      territorio: "75,884"
    },
  ],
  India: [
    {
      id: "IND",
      territorio: "68,000"
    },
  ],
  Turquía: [
    {
      id: "TUR",
      territorio: "62,724"
    },
  ],
  Kazajistán: [
    {
      id: "KAZ",
      territorio: "49,383"
    },
  ],
  Guatemala: [
    {
      id: "GTM",
      territorio: "33,437"
    },
  ],
  Irán: [
    {
      id: "IRN",
      territorio: "32,000"
    },
  ],
  Bangladesh: [
    {
      id: "BGD",
      territorio: "27,570"
    },
  ],
  Brasil: [
    {
      id: "BRA",
      territorio: "27,457"
    },
  ],
  Italia: [
    {
      id: "ITA",
      territorio: "22,890"
    },
  ],
  "Estados Unidos": [
    {
      id: "USA",
      territorio: "18,211"
    },
  ],
  México: [
    {
      id: "MEX",
      territorio: "17,886"
    },
  ],
  España: [
    {
      id: "ESP",
      territorio: "16,220"
    },
  ],
  Marruecos: [
    {
      id: "MAR",
      territorio: "14,698"
    },
  ],
};
