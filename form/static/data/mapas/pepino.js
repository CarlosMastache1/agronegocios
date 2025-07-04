const regionesConMunicipios = {
  "Valles Centrales": [//7
    { 
        id: 20103, 
        superficie: "9", 
        volumen: "171" 
    },//San Antonino Castillo Velasco
    { 
        id: 20295, 
        superficie: "22", 
        volumen: "1,533" 
    },//San Pablo Huixtepec
    { 
        id: 20301, 
        superficie: "1", 
        volumen: "22" 
    },//San Pedro Apóstol
    { 
        id: 20316, 
        superficie: "3", 
        volumen: "50" 
    },//San Pedro Mártir
    { 
        id: 20385, 
        superficie: "0.3", 
        volumen: "6" 
    },//Santa Cruz Xoxocotlán
    { 
        id: 20452, 
        superficie: "0.3", 
        volumen: "6" 
    },//Santiago Apóstol
    { 
        id: 20561, 
        superficie: "0.6", 
        volumen: "13" 
    },//Yaxe
  ],
  Mixteca: [//5
    { 
        id: 20081, 
        superficie: "1", 
        volumen: "15" 
    },//San Agustín Atenango
    { 
        id: 20400, 
        superficie: "4", 
        volumen: "56" 
    },//Santa María Camotlán
    { 
        id: 20462, 
        superficie: "4", 
        volumen: "62" 
    },//Santiago Huajolotitlán
    { 
        id: 20520, 
        superficie: "7", 
        volumen: "84" 
    },//Santo Domingo Tonalá
    { 
        id: 20549, 
        superficie: "0.7", 
        volumen: "8" 
    },//H. V. Tezoatlán de Segura y Luna, C. de la I.de O.
  ],
  "Sierra Sur": [//1
    { 
        id: 20064, 
        superficie: "21", 
        volumen: "179" 
    },//Nejapa de Madero
  ],
};

const estadosDatos = {//30
  Sinaloa: [
    {
      id: 25,
      superficie: "3,381",
      volumen: "262,530",
    },
  ],
  Sonora: [
    {
      id: 26,
      superficie: "2,102",
      volumen: "198,103",
    },
  ],
  "Michoacán": [
    {
      id: 16,
      superficie: "3,505",
      volumen: "98,923",
    },
  ],
  Guanajuato: [
    {
      id: 11,
      superficie: "1,484",
      volumen: "64,100",
    },
  ],
  Morelos: [
    {
      id: 17,
      superficie: "1,699",
      volumen: "61,999",
    },
  ],
  "Baja California": [
    {
      id: 2,
      superficie: "478",
      volumen: "42,780",
    },
  ],
  "Yucatán": [
    {
      id: 31,
      superficie: "862",
      volumen: "41,516",
    },
  ],
  Coahuila: [
    {
      id: 5,
      superficie: "295",
      volumen: "33,939",
    },
  ],
  Colima: [
    {
      id: 6,
      superficie: "902",
      volumen: "32,742",
    },
  ],
  "San Luis Potosí": [
    {
      id: 24,
      superficie: "188",
      volumen: "28,152",
    },
  ],
  "Baja California Sur": [
    {
      id: 3,
      superficie: "309",
      volumen: "27,128",
    },
  ],
  Jalisco: [
    {
      id: 14,
      superficie: "1,028",
      volumen: "27,032",
    },
  ],
  Zacatecas: [
    {
      id: 32,
      superficie: "220",
      volumen: "18,639",
    },
  ],
  Tamaulipas: [
    {
      id: 28,
      superficie: "290",
      volumen: "13,880",
    },
  ],
  Veracruz: [
    {
      id: 30,
      superficie: "501",
      volumen: "13,835",
    },
  ],
  "Querétaro": [
    {
      id: 22,
      superficie: "50",
      volumen: "13,434",
    },
  ],
  "México": [
    {
      id: 15,
      superficie: "639",
      volumen: "10,296",
    },
  ],
  Puebla: [
    {
      id: 21,
      superficie: "359",
      volumen: "9,203",
    },
  ],
  "Quintana Roo": [
    {
      id: 23,
      superficie: "107",
      volumen: "7,597",
    },
  ],
  Nayarit: [
    {
      id: 18,
      superficie: "387",
      volumen: "7,309",
    },
  ],
  Aguascalientes: [
    {
      id: 1,
      superficie: "108",
      volumen: "6,538",
    },
  ],
  Chihuahua: [
    {
      id: 8,
      superficie: "128",
      volumen: "6,117",
    },
  ],
  Guerrero: [
    {
      id: 12,
      superficie: "166",
      volumen: "3,289",
    },
  ],
  Oaxaca: [
    {
      id: 20,
      superficie: "74",
      volumen: "2,204",
    },
  ],
  Hidalgo: [
    {
      id: 13,
      superficie: "93",
      volumen: "1,845",
    },
  ],
  "Nuevo León": [
    {
      id: 19,
      superficie: "30",
      volumen: "1,503",
    },
  ],
  Chiapas: [
    {
      id: 7,
      superficie: "39",
      volumen: "1,079",
    },
  ],
  Durango: [
    {
      id: 10,
      superficie: "7",
      volumen: "383",
    },
  ],
  Campeche: [
    {
      id: 4,
      superficie: "34",
      volumen: "382",
    },
  ],
  Tabasco: [
    {
      id: 27,
      superficie: "22",
      volumen: "240",
    },
  ],
};

const paisesDatos = {//15
  China: 
  [
    { 
        id: "CHN", 
        superficie: "1,311,461"
    }
  ],
  "Camerún": 
  [
    { 
        id: "CMR", 
        superficie: "278,341"
    }
  ],
  "Ucrania": 
  [
    { 
        id: "UKR", 
        superficie: "45,100"
    }
  ],
  Indonesia: 
  [
    { 
        id: "IDN", 
        superficie: "41,386"
    }
  ],
  "Federación de Rusia": 
  [
    { 
        id: "RUS", 
        superficie: "36,506"
    }
  ],
  "Turquía": 
  [
    { 
        id: "TUR", 
        superficie: "35,333"
    }
  ],
  "Estados Unidos de América": 
  [
    { 
        id: "USA", 
        superficie: "33,792"
    }
  ],
  India: 
  [
    { 
        id: "IND", 
        superficie: "28,763"
    }
  ],
  "Uzbekistán": 
  [
    { 
        id: "UZB", 
        superficie: "27,489"
    }
  ],
  "Kazajistán": 
  [
    { 
        id: "KAZ", 
        superficie: "22,970"
    }
  ],
  Egipto: 
  [
    { 
        id: "EGY", 
        superficie: "20,403"
    }
  ],
  Iraq: 
  [
    { 
        id: "IRQ", 
        superficie: "20,381"
    }
  ],
  "México": 
  [
    { 
        id: "MEX", 
        superficie: "19,123"
    }
  ],
  Tailandia: 
  [
    { 
        id: "THA", 
        superficie: "18,858"
    }
  ],
};