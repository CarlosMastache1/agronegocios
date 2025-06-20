const regionesConMunicipios = {
  //60
  "Sierra de Flores Magón": [
    //6
    { id: 20206, territorio: "23", toneladas: "103" }, // San Juan de Los Cués
    { id: 20244, territorio: "36", toneladas: "159" }, // San Martín Toxpalan

    { id: 20431, territorio: "4", toneladas: "18" }, // Santa María Tecomavaca

    { id: 20545, territorio: "61", toneladas: "291" }, // Teotitlán de Flores Magón

    { id: 20177, territorio: "519", toneladas: "2,554" }, // San Juan Bautista Cuicatlán

    { id: 20558, territorio: "42", toneladas: "183" }, // Valerio Trujano
  ],
  Costa: [
    //21
    { id: 20070, territorio: "7", toneladas: "50" }, // Pinotepa de Don Luis
    { id: 20090, territorio: "16", toneladas: "124" }, // San Andrés Huaxpaltepec
    { id: 20180, territorio: "21", toneladas: "170" }, // San Juan Bautista Lo de Soto
    { id: 20185, territorio: "16", toneladas: "142" }, // San Juan Cacahuatepec
    { id: 20188, territorio: "9", toneladas: "72" }, // San Juan Colorado
    { id: 20226, territorio: "8", toneladas: "70" }, // San Lorenzo
    { id: 20285, territorio: "8", toneladas: "52" }, // San Miguel Tlacamama
    { id: 20302, territorio: "4", toneladas: "15" }, // San Pedro Atoyac
    { id: 20312, territorio: "6", toneladas: "40" }, // San Pedro Jicayán
    { id: 20345, territorio: "18", toneladas: "203" }, // San Sebastián Ixcapa
    { id: 20367, territorio: "7", toneladas: "36" }, // Santa Catarina Mechoacán
    { id: 20402, territorio: "10", toneladas: "71" }, // Santa María Cortijo
    { id: 20414, territorio: "123", toneladas: "1,438" }, // Santa María Huazolotitlán
    { id: 20466, territorio: "5", toneladas: "31" }, // Santiago Ixtayutla
    { id: 20467, territorio: "438", toneladas: "5,406" }, // Santiago Jamiltepec
    { id: 20482, territorio: "47", toneladas: "440" }, // Santiago Pinotepa Nacional
    { id: 20489, territorio: "8", toneladas: "56" }, // Santiago Tetepec
    { id: 20319, territorio: "28", toneladas: "289" }, // San Pedro Mixtepec
    { id: 20334, territorio: "536", toneladas: "6,330" }, // Villa de Tututepec de Melchor Ocampo
    { id: 20401, territorio: "375", toneladas: "4,151" }, // Santa María Colotepec
    { id: 20439, territorio: "70", toneladas: "788" }, // Santa María Tonameca
  ],
  Istmo: [
    //18
    { id: 20025, territorio: "1,122", toneladas: "13,210" }, // Chahuites
    { id: 20075, territorio: "533", toneladas: "6,077" }, // Reforma de Pineda
    { id: 20143, territorio: "875", toneladas: "9,897" }, // San Francisco Ixhuatán
    { id: 20327, territorio: "10,596", toneladas: "123,362" }, // San Pedro Tapanatepec
    { id: 20525, territorio: "2,662", toneladas: "30,943" }, // Santo Domingo Zanatepec
    { id: 20066, territorio: "33", toneladas: "275" }, // Santiago Niltepec
    { id: 20141, territorio: "170", toneladas: "1,801" }, // San Francisco del Mar
    { id: 20014, territorio: "8", toneladas: "61" }, // Ciudad Ixtepec
    { id: 20030, territorio: "3", toneladas: "25" }, // El Espinal
    { id: 20053, territorio: "8", toneladas: "56" }, // Magdalena Tlacotepec
    { id: 20124, territorio: "20", toneladas: "162" }, // San Blas Atempa
    { id: 20307, territorio: "25", toneladas: "165" }, // San Pedro Huamelula
    { id: 20308, territorio: "5", toneladas: "42" }, // San Pedro Huilotepec
    { id: 20421, territorio: "10", toneladas: "66" }, // Santa María Mixtequilla
    { id: 20472, territorio: "165", toneladas: "1,312" }, // Santiago Laollaga
    { id: 20508, territorio: "31", toneladas: "258" }, // Santo Domingo Chihuitán
    { id: 20515, territorio: "27", toneladas: "221" }, // Santo Domingo Tehuantepec
    { id: 20052, territorio: "139", toneladas: "1,457" }, // Magdalena Tequisistlán
  ],
  Mixteca: [
    //1
    { id: 20245, territorio: "14", toneladas: "74" }, // San Martín Zacatepec
  ],
  Papaloapan: [
    //4
    { id: 20044, territorio: "48", toneladas: "120" }, // Loma Bonita
    { id: 20184, territorio: "117", toneladas: "268" }, // San Juan Bautista Tuxtepec
    { id: 20002, territorio: "90", toneladas: "252" }, // Acatlán de Pérez Figueroa
    { id: 20278, territorio: "74", toneladas: "222" }, // San Miguel Soyaltepec
  ],
  "Sierra Sur": [
    //10
    { id: 20020, territorio: "2", toneladas: "12" }, // Constancia del Rosario
    { id: 20037, territorio: "8", toneladas: "41" }, // Mesones Hidalgo
    { id: 20073, territorio: "93", toneladas: "521" }, // Putla Villa de Guerrero
    { id: 20076, territorio: "2", toneladas: "12" }, // La Reforma
    { id: 20300, territorio: "20", toneladas: "100" }, // San Pedro Amuzgos
    { id: 20377, territorio: "1", toneladas: "6" },  // Santa Cruz Itundujia
    { id: 20415, territorio: "8", toneladas: "47" }, // Santa María Ipalapa
    { id: 20447, territorio: "28", toneladas: "169" }, // Santa María Zacatepec
    { id: 20064, territorio: "6", toneladas: "66" }, // Nejapa de Madero

    { id: 20357, territorio: "12", toneladas: "110" }, // Santa Ana Tavela
  ],
};

const estadosDatos = {//23
  Sinaloa: [
    {
      id: 25,
      territorio: "49,133",
      toneladas: "517,119",
    },
  ],
  Guerrero: [
    {
      id: 12,
      territorio: "27,491",
      toneladas: "415,689",
    },
  ],
  Nayarit: [
    {
      id: 18,
      territorio: "29,442",
      toneladas: "329,624",
    },
  ],
  Chiapas: [
    {
      id: 7,
      territorio: "38,782",
      toneladas: "272,174",
    },
  ],
  Oaxaca: [
    {
      id: 20,
      territorio: "19,392",
      toneladas: "214,915",
    },
  ],
  "Michoacán": [
    {
      id: 16,
      territorio: "26,111",
      toneladas: "200,119",
    },
  ],
  Jalisco: [
    {
      id: 14,
      territorio: "8663",
      toneladas: "129,992",
    },
  ],
  Veracruz: [
    {
      id: 30,
      territorio: "15,018",
      toneladas: "104,888",
    },
  ],
  Colima: [
    {
      id: 6,
      territorio: "4,586",
      toneladas: "62,705",
    },
  ],
  Tamaulipas: [
    {
      id: 28,
      territorio: "922",
      toneladas: "13,184",
    },
  ],
  Campeche: [
    {
      id: 4,
      territorio: "1,136",
      toneladas: "12,607",
    },
  ],
  "Baja California Sur": [
    {
      id: 3,
      territorio: "1,835",
      toneladas: "10,389",
    },
  ],
  Morelos: [
    {
      id: 17,
      territorio: "345",
      toneladas: "5,155",
    },
  ],
  "México": [
    {
      id: 15,
      territorio: "370",
      toneladas: "2,970",
    },
  ],
  "Yucatán": [
    {
      id: 31,
      territorio: "213",
      toneladas: "2,399",
    },
  ],
  Durango: [
    {
      id: 10,
      territorio: "529",
      toneladas: "1,973",
    },
  ],
  Sonora: [
    {
      id: 26,
      territorio: "201",
      toneladas: "1,164",
    },
  ],
  Tabasco: [
    {
      id: 27,
      territorio: "194",
      toneladas: "1,113",
    },
  ],
  Puebla: [
    {
      id: 21,
      territorio: "55",
      toneladas: "518",
    },
  ],
  Hidalgo: [
    {
      id: 13,
      territorio: "70",
      toneladas: "440",
    },
  ],
  "Querétaro": [
    {
      id: 22,
      territorio: "77",
      toneladas: "384",
    },
  ],
  "San Luis Potosí": [
    {
      id: 24,
      territorio: "55",
      toneladas: "239",
    },
  ],
  Zacatecas: [
    {
      id: 32,
      territorio: "26",
      toneladas: "221",
    },
  ],
};

const paisesDatos = {//14
  India: [
    {
      id: "IND",
      territorio: "2,704,000",
    },
  ],
  China: [
    {
      id: "CHN",
      territorio: "778,355",
    },
  ],
  Indonesia: [
    {
      id: "IDN",
      territorio: "303,413",
    },
  ],
  "Côte d'Ivoire": [
    {
      id: "CIV",
      territorio: "283,232",
    },
  ],
  "México": [
    {
      id: "MEX",
      territorio: "221,858",
    },
  ],
  "Pakistán": [
    {
      id: "PAK",
      territorio: "213,639",
    },
  ],
  Filipinas: [
    {
      id: "PHL",
      territorio: "192,503",
    },
  ],
  Tailandia: [
    {
      id: "THA",
      territorio: "144,776",
    },
  ],
  Bangladesh: [
    {
      id: "BGD",
      territorio: "139,132",
    },
  ],
  Nigeria: [
    {
      id: "NGA",
      territorio: "131,204",
    },
  ],
  "Viet Nam": [
    {
      id: "VNM",
      territorio: "118,943",
    },
  ],
  Egipto: [
    {
      id: "EGY",
      territorio: "110,337",
    },
  ],
  Guinea: [
    {
      id: "GIN",
      territorio: "101,385",
    },
  ],
  Brasil: [
    {
      id: "BRA",
      territorio: "100,663",
    },
  ],
};
