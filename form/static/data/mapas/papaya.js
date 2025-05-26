const regionesConMunicipios = {
  Costa: [
    { id: 20334, territorio: "1,228", toneladas: "130,297" },//Villa de Tututepec de Melchor Ocampo
    { id: 20482, territorio: "422", toneladas: "54,252" },//Santiago Pinotepa Nacional
    { id: 20467, territorio: "342", toneladas: "42,379" },//Santiago Jamiltepec
    { id: 20414, territorio: "164", toneladas: "21,149" },//Santa María Huazolotitlán
    { id: 20413, territorio: "66", toneladas: "8,699" }, //Santa María Huatulco
    { id: 20439, territorio: "130", toneladas: "14,392" }, //Santa María Tonameca
    { id: 20319, territorio: "69", toneladas: "6,426" }, //San Pedro Mixtepec
    { id: 20401, territorio: "60", toneladas: "5,691" }, //Santa María Colotepec
    { id: 20090, territorio: "56", toneladas: "4,899" }, //San Andrés Huaxpaltepec
    { id: 20474, territorio: "35", toneladas: "3,613" }, //Santiago Llano Grande
    { id: 20266, territorio: "29", toneladas: "3,465" }, //San Miguel del Puerto
    { id: 20367, territorio: "31", toneladas: "1,702" }, //Santa Catarina Mechoacán
    { id: 20509, territorio: "21", toneladas: "1,397" }, //Santo Domingo de Morelos
    { id: 20180, territorio: "17", toneladas: "1,374" }, //San Juan Bautista Lo de Soto
    { id: 20485, territorio: "12", toneladas: "1,274" }, //Santiago Tapextla
  ],
  Istmo: [
    { id: 20418, territorio: "40", toneladas: "3,766" }, //Santa María Jalapa del Marqués
    { id: 20421, territorio: "30", toneladas: "2,840" }, //Santa María Mixtequilla
    { id: 20307, territorio: "22", toneladas: "2,080" }, //San Pedro Huamelula
    { id: 20453, territorio: "19", toneladas: "1,792" }, //Santiago Astata
    { id: 20515, territorio: "13", toneladas: "1,131" }, //Santo Domingo Tehuantepec
    { id: 20525, territorio: "14", toneladas: "880" }, //Santo Domingo Zanatepec
    { id: 20052, territorio: "14", toneladas: "769" }, //Magdalena Tequisistlán
    { id: 20005, territorio: "4", toneladas: "257" }, //Asunción Ixtaltepec
  ],
  "Sierra Sur": [
    { id: 20008, territorio: "12", toneladas: "598" }, //Asunción Tlacolulita
    { id: 20064, territorio: "9", toneladas: "492" }, //Nejapa de Madero
    { id: 20357, territorio: "9", toneladas: "440" }, //Santa Ana Tavela
  ],
  "Sierra de Flores Magón": [
    { id: 20177, territorio: "10", toneladas: "400" }, //San Juan Bautista Cuicatlán
    { id: 20545, territorio: "9", toneladas: "325" }, //Teotitlán de Flores Magón
    { id: 20431, territorio: "8", toneladas: "306" }, //Santa María Tecomavaca
    { id: 20206, territorio: "4", toneladas: "159" }, //San Juan de Los Cués
    { id: 20558, territorio: "1", toneladas: "39" }, //Valerio Trujano
  ],
  Papaloapan: [
    { id: 20002, territorio: "11", toneladas: "546" } //Acatlán de Pérez Figueroa
  ],
  "Valles Centrales": [
    { id: 20449, territorio: "8", toneladas: "330" }, //Santa María Zoquitlán
    { id: 20333, territorio: "6", toneladas: "166" }, //San Pedro Totolápam
  ],
};

const estadosDatos = {
  Oaxaca: [
    {
      id: 20,
      territorio: "2,923",
      toneladas: "318,323",
    },
  ],
  Colima: [
    {
      id: 6,
      territorio: "3,706",
      toneladas: "204,924",
    },
  ],
  Chiapas: [
    {
      id: 7,
      territorio: "2,078",
      toneladas: "160,252",
    },
  ],
  Michoacán: [
    {
      id: 16,
      territorio: "3,585",
      toneladas: "122,421",
    },
  ],
  Veracruz: [
    {
      id: 30,
      territorio: "3,800",
      toneladas: "121,628",
    },
  ],
  Guerrero: [
    {
      id: 12,
      territorio: "1,625",
      toneladas: "53,721",
    },
  ],
  Jalisco: [
    {
      id: 14,
      territorio: "581",
      toneladas: "34,071",
    },
  ],
  "San Luis Potosí": [
    {
      id: 24,
      territorio: "472",
      toneladas: "32,708",
    },
  ],
  Tamaulipas: [
    {
      id: 28,
      territorio: "385",
      toneladas: "24,999",
    },
  ],
  Campeche: [
    {
      id: 4,
      territorio: "319",
      toneladas: "15,233",
    },
  ],
  Nayarit: [
    {
      id: 18,
      territorio: "350",
      toneladas: "12,755",
    },
  ],
  Yucatán: [
    {
      id: 31,
      territorio: "206",
      toneladas: "12,039",
    },
  ],
  Sinaloa: [
    {
      id: 25,
      territorio: "424",
      toneladas: "11,086",
    },
  ],
  Tabasco: [
    {
      id: 27,
      territorio: "142",
      toneladas: "7,795",
    },
  ],
  Puebla: [
    {
      id: 21,
      territorio: "188",
      toneladas: "6,582",
    },
  ],
  "Quintana Roo": [
    {
      id: 23,
      territorio: "94",
      toneladas: "5,930",
    },
  ],
  Morelos: [
    {
      id: 17,
      territorio: "104",
      toneladas: "3,528",
    },
  ],
  "Baja California Sur": [
    {
      id: 3,
      territorio: "15",
      toneladas: "320",
    },
  ],
  México: [
    {
      id: 15,
      territorio: "21",
      toneladas: "233",
    },
  ],
};


const paisesDatos = {
  Nigeria: [{ id: "NGA", territorio: "193,2900", toneladas: "" }],
  India: [{ id: "IND", territorio: "150,000", toneladas: "" }],
  Bangladés: [{ id: "BGD", territorio: "49,770", toneladas: "" }],
  Brasil: [{ id: "BRA", territorio: "26,431", toneladas: "" }],
  México: [{ id: "MEX", territorio: "19,613", toneladas: "" }],
  Perú: [{ id: "PER", territorio: "14,368", toneladas: "" }],
  "República Democrática del Cong": [
    {
      id: "COD",
      territorio: "12,355",
    },
  ],
  Indonesia: [{ id: "IDN", territorio: "11,208", toneladas: "" }],
  China: [{ id: "CHN", territorio: "18,531", toneladas: "" }],
  "República Dominicana": [
    {
      id: "DOM",
      territorio: "10,022",
    },
  ],
  Vietnam: [{ id: "VNM", territorio: "8,733", toneladas: "" }],
  Venezuela: [{ id: "VEN", territorio: "8,453", toneladas: "" }],
  Filipinas: [{ id: "PHL", territorio: "7,554", toneladas: "" }],
  Colombia: [{ id: "COL", territorio: "6,794", toneladas: "" }],
  Etiopía: [{ id: "ETH", territorio: "6,078", toneladas: "" }],
  Kenia: [{ id: "KEN", territorio: "6,052", toneladas: "" }],
  "Costa de Marfil": [{ id: "CIV", territorio: "5,925", toneladas: "" }],
  Malawi: [{ id: "Malawi", territorio: "5,757", toneladas: "" }],
  Cuba: [{ id: "Cuba", territorio: "4,796", toneladas: "" }],
  Malí: [{ id: "MLI", territorio: "4,495", toneladas: "" }],
  Mozambique: [{ id: "MOZ", territorio: "4,312", toneladas: "" }],
  Tailandia: [{ id: "THA", territorio: "4,135", toneladas: "" }],
  Ecuador: [{ id: "ECU", territorio: "3,804", toneladas: "" }],
  Guatemala: [{ id: "GTM", territorio: "2,906", toneladas: "" }],
  Laos: [
    {
      id: "LAO",
      territorio: "2,620",
    },
  ],
  Taiwán: [{ id: "TWN", territorio: "2,531", toneladas: "" }],
  Bolivia: [{ id: "BOL", territorio: "2,339", toneladas: "" }],
  Malasia: [{ id: "MYS", territorio: "2,255", toneladas: "" }],
  Pakistán: [{ id: "PAK", territorio: "1,677", toneladas: "" }],
  Ghana: [{ id: "GHA", territorio: "1,619", toneladas: "" }],
  Yemen: [{ id: "YEM", territorio: "1,610", toneladas: "" }],
  Haití: [{ id: "HTI", territorio: "1,440", toneladas: "" }],
  Nepal: [{ id: "NPL", territorio: "1,325", toneladas: "" }],
  Paraguay: [{ id: "PRY", territorio: "1,115", toneladas: "" }],
  "Costa Rica": [{ id: "CRI", territorio: "1,010", toneladas: "" }],
  Sudáfrica: [{ id: "ZAF", territorio: "913", toneladas: "" }],
  Australia: [{ id: "AUS", territorio: "904", toneladas: "" }],
  Fiyi: [{ id: "FJI", territorio: "898", toneladas: "" }],
  Panamá: [{ id: "PAN", territorio: "577", toneladas: "" }],
  Jamaica: [{ id: "JAM", territorio: "568", toneladas: "" }],
  "Guinea-Bisáu": [{ id: "GNB", territorio: "327", toneladas: "" }],
  Guyana: [{ id: "GUY", territorio: "305", toneladas: "" }],
  Omán: [{ id: "OMN", territorio: "395", toneladas: "" }],
  Israel: [{ id: "ISR", territorio: "267", toneladas: "" }],
  Samoa: [{ id: "WSM", territorio: "12", toneladas: "" }],
  "Puerto Rico": [{ id: "PRI", territorio: "228", toneladas: "" }],
  "República del Congo": [
    {
      id: "COG",
      territorio: "225",
    },
  ],
  "Arabia Saudita": [
    {
      id: "SAU",
      territorio: "220",
    },
  ],
  "Estados Unidos de América": [
    {
      id: "USA",
      territorio: "202",
    },
  ],
  Argentina: [
    {
      id: "ARG",
      territorio: "201",
    },
  ],
  Chile: [
    {
      id: "CHL",
      territorio: "136",
    },
  ],
  "República Democrática de Timor-Leste": [
    {
      id: "TLS",
      territorio: "95",
    },
  ],
  "El Salvador": [
    {
      id: "SLV",
      territorio: "74",
    },
  ],
  "Islas Cook": [
    {
      id: "COK",
      territorio: "70",
    },
  ],
  "Trinidad y Tobago": [
    {
      id: "TTO",
      territorio: "64",
    },
  ],
  Ruanda: [
    {
      id: "RWA",
      territorio: "57",
    },
  ],
  Marruecos: [
    {
      id: "MAR",
      territorio: "55",
    },
  ],
  "Las Bahamas": [
    {
      id: "BHS",
      territorio: "37",
    },
  ],
  Bután: [
    {
      id: "BTN",
      territorio: "32",
    },
  ],
  Irán: [
    {
      id: "IRN",
      territorio: "28",
    },
  ],
  Belice: [
    {
      id: "BLZ",
      territorio: "23",
    },
  ],
  Suriname: [
    {
      id: "SUR",
      territorio: "15",
    },
  ],
  "Las Maldivas": [
    {
      id: "MDV",
      territorio: "13",
    },
  ],
  Zimbabue: [
    {
      id: "ZWE",
      territorio: "13",
    },
  ],
  Honduras: [
    {
      id: "HND",
      territorio: "12",
    },
  ],
  "República Dominicana": [
    {
      id: "DOM",
      territorio: "6",
    },
  ],
  Granada: [
    {
      id: "GRD",
      territorio: "-",
    },
  ],
  Nauru: [
    {
      id: "NRU",
      territorio: "-",
    },
  ],
  Singapur: [
    {
      id: "SGP",
      territorio: "-",
    },
  ],
  Camerún: [
    {
      id: "CMR",
      territorio: "-",
    },
  ],
  Túnez: [
    {
      id: "TUN",
      territorio: "-",
    },
  ],
};
