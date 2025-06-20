const regionesConMunicipios = {
  "Valles Centrales": [//7
    { 
        id: 20103, 
        territorio: "9", 
        toneladas: "171" 
    },//San Antonino Castillo Velasco
    { 
        id: 20295, 
        territorio: "22", 
        toneladas: "1,533" 
    },//San Pablo Huixtepec
    { 
        id: 20301, 
        territorio: "1", 
        toneladas: "22" 
    },//San Pedro Apóstol
    { 
        id: 20316, 
        territorio: "3", 
        toneladas: "50" 
    },//San Pedro Mártir
    { 
        id: 20385, 
        territorio: "0.3", 
        toneladas: "6" 
    },//Santa Cruz Xoxocotlán
    { 
        id: 20452, 
        territorio: "0.3", 
        toneladas: "6" 
    },//Santiago Apóstol
    { 
        id: 20561, 
        territorio: "0.6", 
        toneladas: "13" 
    },//Yaxe
  ],
  Mixteca: [//5
    { 
        id: 20081, 
        territorio: "1", 
        toneladas: "15" 
    },//San Agustín Atenango
    { 
        id: 20400, 
        territorio: "4", 
        toneladas: "56" 
    },//Santa María Camotlán
    { 
        id: 20462, 
        territorio: "4", 
        toneladas: "62" 
    },//Santiago Huajolotitlán
    { 
        id: 20520, 
        territorio: "7", 
        toneladas: "84" 
    },//Santo Domingo Tonalá
    { 
        id: 20549, 
        territorio: "0.7", 
        toneladas: "8" 
    },//H. V. Tezoatlán de Segura y Luna, C. de la I.de O.
  ],
  "Sierra Sur": [//1
    { 
        id: 20064, 
        territorio: "21", 
        toneladas: "179" 
    },//Nejapa de Madero
  ],
};

const estadosDatos = {//30
  Sinaloa: [
    {
      id: 25,
      territorio: "3,381",
      toneladas: "262,530",
    },
  ],
  Sonora: [
    {
      id: 26,
      territorio: "2,102",
      toneladas: "198,103",
    },
  ],
  "Michoacán": [
    {
      id: 16,
      territorio: "3,505",
      toneladas: "98,923",
    },
  ],
  Guanajuato: [
    {
      id: 11,
      territorio: "1,484",
      toneladas: "64,100",
    },
  ],
  Morelos: [
    {
      id: 17,
      territorio: "1,699",
      toneladas: "61,999",
    },
  ],
  "Baja California": [
    {
      id: 2,
      territorio: "478",
      toneladas: "42,780",
    },
  ],
  "Yucatán": [
    {
      id: 31,
      territorio: "862",
      toneladas: "41,516",
    },
  ],
  Coahuila: [
    {
      id: 5,
      territorio: "295",
      toneladas: "33,939",
    },
  ],
  Colima: [
    {
      id: 6,
      territorio: "902",
      toneladas: "32,742",
    },
  ],
  "San Luis Potosí": [
    {
      id: 24,
      territorio: "188",
      toneladas: "28,152",
    },
  ],
  "Baja California Sur": [
    {
      id: 3,
      territorio: "309",
      toneladas: "27,128",
    },
  ],
  Jalisco: [
    {
      id: 14,
      territorio: "1,028",
      toneladas: "27,032",
    },
  ],
  Zacatecas: [
    {
      id: 32,
      territorio: "220",
      toneladas: "18,639",
    },
  ],
  Tamaulipas: [
    {
      id: 28,
      territorio: "290",
      toneladas: "13,880",
    },
  ],
  Veracruz: [
    {
      id: 30,
      territorio: "501",
      toneladas: "13,835",
    },
  ],
  "Querétaro": [
    {
      id: 22,
      territorio: "50",
      toneladas: "13,434",
    },
  ],
  "México": [
    {
      id: 15,
      territorio: "639",
      toneladas: "10,296",
    },
  ],
  Puebla: [
    {
      id: 21,
      territorio: "359",
      toneladas: "9,203",
    },
  ],
  "Quintana Roo": [
    {
      id: 23,
      territorio: "107",
      toneladas: "7,597",
    },
  ],
  Nayarit: [
    {
      id: 18,
      territorio: "387",
      toneladas: "7,309",
    },
  ],
  Aguascalientes: [
    {
      id: 1,
      territorio: "108",
      toneladas: "6,538",
    },
  ],
  Chihuahua: [
    {
      id: 8,
      territorio: "128",
      toneladas: "6,117",
    },
  ],
  Guerrero: [
    {
      id: 12,
      territorio: "166",
      toneladas: "3,289",
    },
  ],
  Oaxaca: [
    {
      id: 20,
      territorio: "74",
      toneladas: "2,204",
    },
  ],
  Hidalgo: [
    {
      id: 13,
      territorio: "93",
      toneladas: "1,845",
    },
  ],
  "Nuevo León": [
    {
      id: 19,
      territorio: "30",
      toneladas: "1,503",
    },
  ],
  Chiapas: [
    {
      id: 7,
      territorio: "39",
      toneladas: "1,079",
    },
  ],
  Durango: [
    {
      id: 10,
      territorio: "7",
      toneladas: "383",
    },
  ],
  Campeche: [
    {
      id: 4,
      territorio: "34",
      toneladas: "382",
    },
  ],
  Tabasco: [
    {
      id: 27,
      territorio: "22",
      toneladas: "240",
    },
  ],
};

const paisesDatos = {//15
  China: 
  [
    { 
        id: "CHN", 
        territorio: "1,311,461"
    }
  ],
  "Camerún": 
  [
    { 
        id: "CMR", 
        territorio: "278,341"
    }
  ],
  "Ucrania": 
  [
    { 
        id: "UKR", 
        territorio: "45,100"
    }
  ],
  Indonesia: 
  [
    { 
        id: "IDN", 
        territorio: "41,386"
    }
  ],
  "Federación de Rusia": 
  [
    { 
        id: "RUS", 
        territorio: "36,506"
    }
  ],
  "Turquía": 
  [
    { 
        id: "TUR", 
        territorio: "35,333"
    }
  ],
  "Estados Unidos de América": 
  [
    { 
        id: "USA", 
        territorio: "33,792"
    }
  ],
  India: 
  [
    { 
        id: "IND", 
        territorio: "28,763"
    }
  ],
  "Uzbekistán": 
  [
    { 
        id: "UZB", 
        territorio: "27,489"
    }
  ],
  "Kazajistán": 
  [
    { 
        id: "KAZ", 
        territorio: "22,970"
    }
  ],
  Egipto: 
  [
    { 
        id: "EGY", 
        territorio: "20,403"
    }
  ],
  Iraq: 
  [
    { 
        id: "IRQ", 
        territorio: "20,381"
    }
  ],
  "México": 
  [
    { 
        id: "MEX", 
        territorio: "19,123"
    }
  ],
  Tailandia: 
  [
    { 
        id: "THA", 
        territorio: "18,858"
    }
  ],
};