const regionesConMunicipios = {
  Istmo: [
    //11
    {
      id: 20143,
      superficie: "208",
      volumen: "3,059",
    }, //San Francisco Ixhuatán
    {
      id: 20075,
      superficie: "178",
      volumen: "2,517",
    }, //Reforma de Pineda
    {
      id: 20327,
      superficie: "130",
      volumen: "1,774",
    }, //San Pedro Tapanatepec
    {
      id: 20525,
      superficie: "128",
      volumen: "1,751",
    }, //Santo Domingo Zanatepec
    {
      id: 20141,
      superficie: "96",
      volumen: "1,349",
    }, //San Francisco del Mar
    {
      id: 20066,
      superficie: "65",
      volumen: "882",
    }, //Santiago Niltepec
    {
      id: 20025,
      superficie: "60",
      volumen: "811",
    }, //Chahuites
    {
      id: 20052,
      superficie: "31",
      volumen: "605",
    }, //Magdalena Tequisistlán
    {
      id: 20515,
      superficie: "15",
      volumen: "181",
    }, //Santo Domingo Tehuantepec
    {
      id: 20421,
      superficie: "14",
      volumen: "167",
    }, //Santa María Mixtequilla
    {
      id: 20124,
      superficie: "10",
      volumen: "121",
    }, //San Blas Atempa
  ],
  Costa: [
    //4
    {
      id: 20439,
      superficie: "33",
      volumen: "941",
    }, //Santa María Tonameca
    {
      id: 20414,
      superficie: "28",
      volumen: "653",
    }, //Santa María Huazolotitlán
    {
      id: 20467,
      superficie: "25",
      volumen: "565",
    }, //Santiago Jamiltepec
    {
      id: 20413,
      superficie: "10",
      volumen: "273",
    }, //Santa María Huatulco
  ],
  "Sierra de Flores Magón": [
    //6
    {
      id: 20431,
      superficie: "23",
      volumen: "458",
    }, //Santa María Tecomavaca
    {
      id: 20109,
      superficie: "16",
      volumen: "300",
    }, //San Antonio Nanahuatípam
    {
      id: 20206,
      superficie: "18",
      volumen: "361",
    }, //San Juan de Los Cués
    {
      id: 20177,
      superficie: "18",
      volumen: "358",
    }, //San Juan Bautista Cuicatlán
    {
      id: 20545,
      superficie: "13",
      volumen: "265",
    }, //Teotitlán de Flores Magón
    {
      id: 20558,
      superficie: "3",
      volumen: "54",
    }, //Valerio Trujano
  ],
  "Sierra Sur": [
    //1
    {
      id: 20064,
      superficie: "29",
      volumen: "552",
    }, //Nejapa de Madero
  ],
  "Valles Centrales": [
    //3
    {
      id: 20028,
      superficie: "8",
      volumen: "161",
    }, //Heroica Ciudad de Ejutla de Crespo
    {
      id: 20449,
      superficie: "6",
      volumen: "145",
    }, //Santa María Zoquitlán
    {
      id: 20068,
      superficie: "3",
      volumen: "56",
    }, //Ocotlán de Morelos
  ],
  Mixteca: [
    //3
    {
      id: 20381,
      superficie: "5",
      volumen: "55",
    }, //Santa Cruz Tacache de Mina
    {
      id: 20290,
      superficie: "3",
      volumen: "31",
    }, //San Nicolás Hidalgo
    {
      id: 20055,
      superficie: "2",
      volumen: "18",
    }, //Mariscala de Juárez
  ],
};

const estadosDatos = {
  Michoacán: [
    {
      id: 16,
      superficie: "3,532",
      volumen: "144,825",
    },
  ],
  Sonora: [
    {
      id: 26,
      superficie: "3,573",
      volumen: "133,075",
    },
  ],
  Coahuila: [
    {
      id: 5,
      superficie: "3,376",
      volumen: "114,684",
    },
  ],
  Guerrero: [
    {
      id: 12,
      superficie: "3,583",
      volumen: "104,671",
    },
  ],
  Durango: [
    {
      id: 10,
      superficie: "1,245",
      volumen: "45,783",
    },
  ],
  Chihuahua: [
    {
      id: 8,
      superficie: "1,522",
      volumen: "38,177",
    },
  ],
  Colima: [
    {
      id: 6,
      superficie: "457",
      volumen: "21,806",
    },
  ],
  Oaxaca: [
    {
      id: 20,
      superficie: "1,173",
      volumen: "18,460",
    },
  ],
  Guanajuato: [
    {
      id: 11,
      superficie: "209",
      volumen: "5,045",
    },
  ],
  "Baja California Sur": [
    {
      id: 3,
      superficie: "185",
      volumen: "4,682",
    },
  ],
  Jalisco: [
    {
      id: 14,
      superficie: "180",
      volumen: "4,362",
    },
  ],
  Nayarit: [
    {
      id: 18,
      superficie: "196",
      volumen: "3,806",
    },
  ],
  "San Luis Potosí": [
    {
      id: 24,
      superficie: "92",
      volumen: "2,647",
    },
  ],
  Tabasco: [
    {
      id: 27,
      superficie: "202",
      volumen: "1,827",
    },
  ],
  "Baja California": [
    {
      id: 2,
      superficie: "81",
      volumen: "1,765",
    },
  ],
  Chiapas: [
    {
      id: 7,
      superficie: "44",
      volumen: "580",
    },
  ],
  Veracruz: [
    {
      id: 30,
      superficie: "23",
      volumen: "514",
    },
  ],
  Puebla: [
    {
      id: 21,
      superficie: "22",
      volumen: "480",
    },
  ],
  Zacatecas: [
    {
      id: 32,
      superficie: "14",
      volumen: "412",
    },
  ],
  "Nuevo León": [
    {
      id: 19,
      superficie: "18",
      volumen: "372",
    },
  ],
  Sinaloa: [
    {
      id: 25,
      superficie: "9",
      volumen: "200",
    },
  ],
  México: [
    {
      id: 15,
      superficie: "5",
      volumen: "94",
    },
  ],
  Tamaulipas: [
    {
      id: 28,
      superficie: "3",
      volumen: "38",
    },
  ],
};

const paisesDatos = {
  China: [
    {
      id: "CHN",
      superficie: "779,580"
    },
  ],
  Afganistán: [
    {
      id: "AFG",
      superficie: "75,884"
    },
  ],
  India: [
    {
      id: "IND",
      superficie: "68,000"
    },
  ],
  Turquía: [
    {
      id: "TUR",
      superficie: "62,724"
    },
  ],
  Kazajistán: [
    {
      id: "KAZ",
      superficie: "49,383"
    },
  ],
  Guatemala: [
    {
      id: "GTM",
      superficie: "33,437"
    },
  ],
  Irán: [
    {
      id: "IRN",
      superficie: "32,000"
    },
  ],
  Bangladesh: [
    {
      id: "BGD",
      superficie: "27,570"
    },
  ],
  Brasil: [
    {
      id: "BRA",
      superficie: "27,457"
    },
  ],
  Italia: [
    {
      id: "ITA",
      superficie: "22,890"
    },
  ],
  "Estados Unidos": [
    {
      id: "USA",
      superficie: "18,211"
    },
  ],
  México: [
    {
      id: "MEX",
      superficie: "17,886"
    },
  ],
  España: [
    {
      id: "ESP",
      superficie: "16,220"
    },
  ],
  Marruecos: [
    {
      id: "MAR",
      superficie: "14,698"
    },
  ],
};
