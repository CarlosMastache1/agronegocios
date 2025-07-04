const regionesConMunicipios = {
  //60
  "Sierra de Flores Magón": [
    //6
    { id: 20206, superficie: "23", volumen: "103" }, // San Juan de Los Cués
    { id: 20244, superficie: "36", volumen: "159" }, // San Martín Toxpalan

    { id: 20431, superficie: "4", volumen: "18" }, // Santa María Tecomavaca

    { id: 20545, superficie: "61", volumen: "291" }, // Teotitlán de Flores Magón

    { id: 20177, superficie: "519", volumen: "2,554" }, // San Juan Bautista Cuicatlán

    { id: 20558, superficie: "42", volumen: "183" }, // Valerio Trujano
  ],
  Costa: [
    //21
    { id: 20070, superficie: "7", volumen: "50" }, // Pinotepa de Don Luis
    { id: 20090, superficie: "16", volumen: "124" }, // San Andrés Huaxpaltepec
    { id: 20180, superficie: "21", volumen: "170" }, // San Juan Bautista Lo de Soto
    { id: 20185, superficie: "16", volumen: "142" }, // San Juan Cacahuatepec
    { id: 20188, superficie: "9", volumen: "72" }, // San Juan Colorado
    { id: 20226, superficie: "8", volumen: "70" }, // San Lorenzo
    { id: 20285, superficie: "8", volumen: "52" }, // San Miguel Tlacamama
    { id: 20302, superficie: "4", volumen: "15" }, // San Pedro Atoyac
    { id: 20312, superficie: "6", volumen: "40" }, // San Pedro Jicayán
    { id: 20345, superficie: "18", volumen: "203" }, // San Sebastián Ixcapa
    { id: 20367, superficie: "7", volumen: "36" }, // Santa Catarina Mechoacán
    { id: 20402, superficie: "10", volumen: "71" }, // Santa María Cortijo
    { id: 20414, superficie: "123", volumen: "1,438" }, // Santa María Huazolotitlán
    { id: 20466, superficie: "5", volumen: "31" }, // Santiago Ixtayutla
    { id: 20467, superficie: "438", volumen: "5,406" }, // Santiago Jamiltepec
    { id: 20482, superficie: "47", volumen: "440" }, // Santiago Pinotepa Nacional
    { id: 20489, superficie: "8", volumen: "56" }, // Santiago Tetepec
    { id: 20319, superficie: "28", volumen: "289" }, // San Pedro Mixtepec
    { id: 20334, superficie: "536", volumen: "6,330" }, // Villa de Tututepec de Melchor Ocampo
    { id: 20401, superficie: "375", volumen: "4,151" }, // Santa María Colotepec
    { id: 20439, superficie: "70", volumen: "788" }, // Santa María Tonameca
  ],
  Istmo: [
    //18
    { id: 20025, superficie: "1,122", volumen: "13,210" }, // Chahuites
    { id: 20075, superficie: "533", volumen: "6,077" }, // Reforma de Pineda
    { id: 20143, superficie: "875", volumen: "9,897" }, // San Francisco Ixhuatán
    { id: 20327, superficie: "10,596", volumen: "123,362" }, // San Pedro Tapanatepec
    { id: 20525, superficie: "2,662", volumen: "30,943" }, // Santo Domingo Zanatepec
    { id: 20066, superficie: "33", volumen: "275" }, // Santiago Niltepec
    { id: 20141, superficie: "170", volumen: "1,801" }, // San Francisco del Mar
    { id: 20014, superficie: "8", volumen: "61" }, // Ciudad Ixtepec
    { id: 20030, superficie: "3", volumen: "25" }, // El Espinal
    { id: 20053, superficie: "8", volumen: "56" }, // Magdalena Tlacotepec
    { id: 20124, superficie: "20", volumen: "162" }, // San Blas Atempa
    { id: 20307, superficie: "25", volumen: "165" }, // San Pedro Huamelula
    { id: 20308, superficie: "5", volumen: "42" }, // San Pedro Huilotepec
    { id: 20421, superficie: "10", volumen: "66" }, // Santa María Mixtequilla
    { id: 20472, superficie: "165", volumen: "1,312" }, // Santiago Laollaga
    { id: 20508, superficie: "31", volumen: "258" }, // Santo Domingo Chihuitán
    { id: 20515, superficie: "27", volumen: "221" }, // Santo Domingo Tehuantepec
    { id: 20052, superficie: "139", volumen: "1,457" }, // Magdalena Tequisistlán
  ],
  Mixteca: [
    //1
    { id: 20245, superficie: "14", volumen: "74" }, // San Martín Zacatepec
  ],
  Papaloapan: [
    //4
    { id: 20044, superficie: "48", volumen: "120" }, // Loma Bonita
    { id: 20184, superficie: "117", volumen: "268" }, // San Juan Bautista Tuxtepec
    { id: 20002, superficie: "90", volumen: "252" }, // Acatlán de Pérez Figueroa
    { id: 20278, superficie: "74", volumen: "222" }, // San Miguel Soyaltepec
  ],
  "Sierra Sur": [
    //10
    { id: 20020, superficie: "2", volumen: "12" }, // Constancia del Rosario
    { id: 20037, superficie: "8", volumen: "41" }, // Mesones Hidalgo
    { id: 20073, superficie: "93", volumen: "521" }, // Putla Villa de Guerrero
    { id: 20076, superficie: "2", volumen: "12" }, // La Reforma
    { id: 20300, superficie: "20", volumen: "100" }, // San Pedro Amuzgos
    { id: 20377, superficie: "1", volumen: "6" },  // Santa Cruz Itundujia
    { id: 20415, superficie: "8", volumen: "47" }, // Santa María Ipalapa
    { id: 20447, superficie: "28", volumen: "169" }, // Santa María Zacatepec
    { id: 20064, superficie: "6", volumen: "66" }, // Nejapa de Madero

    { id: 20357, superficie: "12", volumen: "110" }, // Santa Ana Tavela
  ],
};

const estadosDatos = {//23
  Sinaloa: [
    {
      id: 25,
      superficie: "49,133",
      volumen: "517,119",
    },
  ],
  Guerrero: [
    {
      id: 12,
      superficie: "27,491",
      volumen: "415,689",
    },
  ],
  Nayarit: [
    {
      id: 18,
      superficie: "29,442",
      volumen: "329,624",
    },
  ],
  Chiapas: [
    {
      id: 7,
      superficie: "38,782",
      volumen: "272,174",
    },
  ],
  Oaxaca: [
    {
      id: 20,
      superficie: "19,392",
      volumen: "214,915",
    },
  ],
  "Michoacán": [
    {
      id: 16,
      superficie: "26,111",
      volumen: "200,119",
    },
  ],
  Jalisco: [
    {
      id: 14,
      superficie: "8663",
      volumen: "129,992",
    },
  ],
  Veracruz: [
    {
      id: 30,
      superficie: "15,018",
      volumen: "104,888",
    },
  ],
  Colima: [
    {
      id: 6,
      superficie: "4,586",
      volumen: "62,705",
    },
  ],
  Tamaulipas: [
    {
      id: 28,
      superficie: "922",
      volumen: "13,184",
    },
  ],
  Campeche: [
    {
      id: 4,
      superficie: "1,136",
      volumen: "12,607",
    },
  ],
  "Baja California Sur": [
    {
      id: 3,
      superficie: "1,835",
      volumen: "10,389",
    },
  ],
  Morelos: [
    {
      id: 17,
      superficie: "345",
      volumen: "5,155",
    },
  ],
  "México": [
    {
      id: 15,
      superficie: "370",
      volumen: "2,970",
    },
  ],
  "Yucatán": [
    {
      id: 31,
      superficie: "213",
      volumen: "2,399",
    },
  ],
  Durango: [
    {
      id: 10,
      superficie: "529",
      volumen: "1,973",
    },
  ],
  Sonora: [
    {
      id: 26,
      superficie: "201",
      volumen: "1,164",
    },
  ],
  Tabasco: [
    {
      id: 27,
      superficie: "194",
      volumen: "1,113",
    },
  ],
  Puebla: [
    {
      id: 21,
      superficie: "55",
      volumen: "518",
    },
  ],
  Hidalgo: [
    {
      id: 13,
      superficie: "70",
      volumen: "440",
    },
  ],
  "Querétaro": [
    {
      id: 22,
      superficie: "77",
      volumen: "384",
    },
  ],
  "San Luis Potosí": [
    {
      id: 24,
      superficie: "55",
      volumen: "239",
    },
  ],
  Zacatecas: [
    {
      id: 32,
      superficie: "26",
      volumen: "221",
    },
  ],
};

const paisesDatos = {//14
  India: [
    {
      id: "IND",
      superficie: "2,704,000",
    },
  ],
  China: [
    {
      id: "CHN",
      superficie: "778,355",
    },
  ],
  Indonesia: [
    {
      id: "IDN",
      superficie: "303,413",
    },
  ],
  "Côte d'Ivoire": [
    {
      id: "CIV",
      superficie: "283,232",
    },
  ],
  "México": [
    {
      id: "MEX",
      superficie: "221,858",
    },
  ],
  "Pakistán": [
    {
      id: "PAK",
      superficie: "213,639",
    },
  ],
  Filipinas: [
    {
      id: "PHL",
      superficie: "192,503",
    },
  ],
  Tailandia: [
    {
      id: "THA",
      superficie: "144,776",
    },
  ],
  Bangladesh: [
    {
      id: "BGD",
      superficie: "139,132",
    },
  ],
  Nigeria: [
    {
      id: "NGA",
      superficie: "131,204",
    },
  ],
  "Viet Nam": [
    {
      id: "VNM",
      superficie: "118,943",
    },
  ],
  Egipto: [
    {
      id: "EGY",
      superficie: "110,337",
    },
  ],
  Guinea: [
    {
      id: "GIN",
      superficie: "101,385",
    },
  ],
  Brasil: [
    {
      id: "BRA",
      superficie: "100,663",
    },
  ],
};
