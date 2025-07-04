const regionesConMunicipios = {
  Costa: [
    { id: 20334, superficie: "1,228", volumen: "130,297" },//Villa de Tututepec de Melchor Ocampo
    { id: 20482, superficie: "422", volumen: "54,252" },//Santiago Pinotepa Nacional
    { id: 20467, superficie: "342", volumen: "42,379" },//Santiago Jamiltepec
    { id: 20414, superficie: "164", volumen: "21,149" },//Santa María Huazolotitlán
    { id: 20413, superficie: "66", volumen: "8,699" }, //Santa María Huatulco
    { id: 20439, superficie: "130", volumen: "14,392" }, //Santa María Tonameca
    { id: 20319, superficie: "69", volumen: "6,426" }, //San Pedro Mixtepec
    { id: 20401, superficie: "60", volumen: "5,691" }, //Santa María Colotepec
    { id: 20090, superficie: "56", volumen: "4,899" }, //San Andrés Huaxpaltepec
    { id: 20474, superficie: "35", volumen: "3,613" }, //Santiago Llano Grande
    { id: 20266, superficie: "29", volumen: "3,465" }, //San Miguel del Puerto
    { id: 20367, superficie: "31", volumen: "1,702" }, //Santa Catarina Mechoacán
    { id: 20509, superficie: "21", volumen: "1,397" }, //Santo Domingo de Morelos
    { id: 20180, superficie: "17", volumen: "1,374" }, //San Juan Bautista Lo de Soto
    { id: 20485, superficie: "12", volumen: "1,274" }, //Santiago Tapextla
  ],
  Istmo: [
    { id: 20418, superficie: "40", volumen: "3,766" }, //Santa María Jalapa del Marqués
    { id: 20421, superficie: "30", volumen: "2,840" }, //Santa María Mixtequilla
    { id: 20307, superficie: "22", volumen: "2,080" }, //San Pedro Huamelula
    { id: 20453, superficie: "19", volumen: "1,792" }, //Santiago Astata
    { id: 20515, superficie: "13", volumen: "1,131" }, //Santo Domingo Tehuantepec
    { id: 20525, superficie: "14", volumen: "880" }, //Santo Domingo Zanatepec
    { id: 20052, superficie: "14", volumen: "769" }, //Magdalena Tequisistlán
    { id: 20005, superficie: "4", volumen: "257" }, //Asunción Ixtaltepec
  ],
  "Sierra Sur": [
    { id: 20008, superficie: "12", volumen: "598" }, //Asunción Tlacolulita
    { id: 20064, superficie: "9", volumen: "492" }, //Nejapa de Madero
    { id: 20357, superficie: "9", volumen: "440" }, //Santa Ana Tavela
  ],
  "Sierra de Flores Magón": [
    { id: 20177, superficie: "10", volumen: "400" }, //San Juan Bautista Cuicatlán
    { id: 20545, superficie: "9", volumen: "325" }, //Teotitlán de Flores Magón
    { id: 20431, superficie: "8", volumen: "306" }, //Santa María Tecomavaca
    { id: 20206, superficie: "4", volumen: "159" }, //San Juan de Los Cués
    { id: 20558, superficie: "1", volumen: "39" }, //Valerio Trujano
  ],
  Papaloapan: [
    { id: 20002, superficie: "11", volumen: "546" } //Acatlán de Pérez Figueroa
  ],
  "Valles Centrales": [
    { id: 20449, superficie: "8", volumen: "330" }, //Santa María Zoquitlán
    { id: 20333, superficie: "6", volumen: "166" }, //San Pedro Totolápam
  ],
};

const estadosDatos = {
  Oaxaca: [
    {
      id: 20,
      superficie: "2,923",
      volumen: "318,323",
    },
  ],
  Colima: [
    {
      id: 6,
      superficie: "3,706",
      volumen: "204,924",
    },
  ],
  Chiapas: [
    {
      id: 7,
      superficie: "2,078",
      volumen: "160,252",
    },
  ],
  Michoacán: [
    {
      id: 16,
      superficie: "3,585",
      volumen: "122,421",
    },
  ],
  Veracruz: [
    {
      id: 30,
      superficie: "3,800",
      volumen: "121,628",
    },
  ],
  Guerrero: [
    {
      id: 12,
      superficie: "1,625",
      volumen: "53,721",
    },
  ],
  Jalisco: [
    {
      id: 14,
      superficie: "581",
      volumen: "34,071",
    },
  ],
  "San Luis Potosí": [
    {
      id: 24,
      superficie: "472",
      volumen: "32,708",
    },
  ],
  Tamaulipas: [
    {
      id: 28,
      superficie: "385",
      volumen: "24,999",
    },
  ],
  Campeche: [
    {
      id: 4,
      superficie: "319",
      volumen: "15,233",
    },
  ],
  Nayarit: [
    {
      id: 18,
      superficie: "350",
      volumen: "12,755",
    },
  ],
  Yucatán: [
    {
      id: 31,
      superficie: "206",
      volumen: "12,039",
    },
  ],
  Sinaloa: [
    {
      id: 25,
      superficie: "424",
      volumen: "11,086",
    },
  ],
  Tabasco: [
    {
      id: 27,
      superficie: "142",
      volumen: "7,795",
    },
  ],
  Puebla: [
    {
      id: 21,
      superficie: "188",
      volumen: "6,582",
    },
  ],
  "Quintana Roo": [
    {
      id: 23,
      superficie: "94",
      volumen: "5,930",
    },
  ],
  Morelos: [
    {
      id: 17,
      superficie: "104",
      volumen: "3,528",
    },
  ],
  "Baja California Sur": [
    {
      id: 3,
      superficie: "15",
      volumen: "320",
    },
  ],
  México: [
    {
      id: 15,
      superficie: "21",
      volumen: "233",
    },
  ],
};


const paisesDatos = {
  Nigeria: [{ id: "NGA", superficie: "193,2900", volumen: "" }],
  India: [{ id: "IND", superficie: "150,000", volumen: "" }],
  Bangladés: [{ id: "BGD", superficie: "49,770", volumen: "" }],
  Brasil: [{ id: "BRA", superficie: "26,431", volumen: "" }],
  México: [{ id: "MEX", superficie: "19,613", volumen: "" }],
  Perú: [{ id: "PER", superficie: "14,368", volumen: "" }],
  "República Democrática del Cong": [
    {
      id: "COD",
      superficie: "12,355",
    },
  ],
  Indonesia: [{ id: "IDN", superficie: "11,208", volumen: "" }],
  China: [{ id: "CHN", superficie: "18,531", volumen: "" }],
  "República Dominicana": [
    {
      id: "DOM",
      superficie: "10,022",
    },
  ],
  Vietnam: [{ id: "VNM", superficie: "8,733", volumen: "" }],
  Venezuela: [{ id: "VEN", superficie: "8,453", volumen: "" }],
  Filipinas: [{ id: "PHL", superficie: "7,554", volumen: "" }],
  Colombia: [{ id: "COL", superficie: "6,794", volumen: "" }],
  Etiopía: [{ id: "ETH", superficie: "6,078", volumen: "" }],
  Kenia: [{ id: "KEN", superficie: "6,052", volumen: "" }],
  "Costa de Marfil": [{ id: "CIV", superficie: "5,925", volumen: "" }],
  Malawi: [{ id: "Malawi", superficie: "5,757", volumen: "" }],
  Cuba: [{ id: "Cuba", superficie: "4,796", volumen: "" }],
  Malí: [{ id: "MLI", superficie: "4,495", volumen: "" }],
  Mozambique: [{ id: "MOZ", superficie: "4,312", volumen: "" }],
  Tailandia: [{ id: "THA", superficie: "4,135", volumen: "" }],
  Ecuador: [{ id: "ECU", superficie: "3,804", volumen: "" }],
  Guatemala: [{ id: "GTM", superficie: "2,906", volumen: "" }],
  Laos: [
    {
      id: "LAO",
      superficie: "2,620",
    },
  ],
  Taiwán: [{ id: "TWN", superficie: "2,531", volumen: "" }],
  Bolivia: [{ id: "BOL", superficie: "2,339", volumen: "" }],
  Malasia: [{ id: "MYS", superficie: "2,255", volumen: "" }],
  Pakistán: [{ id: "PAK", superficie: "1,677", volumen: "" }],
  Ghana: [{ id: "GHA", superficie: "1,619", volumen: "" }],
  Yemen: [{ id: "YEM", superficie: "1,610", volumen: "" }],
  Haití: [{ id: "HTI", superficie: "1,440", volumen: "" }],
  Nepal: [{ id: "NPL", superficie: "1,325", volumen: "" }],
  Paraguay: [{ id: "PRY", superficie: "1,115", volumen: "" }],
  "Costa Rica": [{ id: "CRI", superficie: "1,010", volumen: "" }],
  Sudáfrica: [{ id: "ZAF", superficie: "913", volumen: "" }],
  Australia: [{ id: "AUS", superficie: "904", volumen: "" }],
  Fiyi: [{ id: "FJI", superficie: "898", volumen: "" }],
  Panamá: [{ id: "PAN", superficie: "577", volumen: "" }],
  Jamaica: [{ id: "JAM", superficie: "568", volumen: "" }],
  "Guinea-Bisáu": [{ id: "GNB", superficie: "327", volumen: "" }],
  Guyana: [{ id: "GUY", superficie: "305", volumen: "" }],
  Omán: [{ id: "OMN", superficie: "395", volumen: "" }],
  Israel: [{ id: "ISR", superficie: "267", volumen: "" }],
  Samoa: [{ id: "WSM", superficie: "12", volumen: "" }],
  "Puerto Rico": [{ id: "PRI", superficie: "228", volumen: "" }],
  "República del Congo": [
    {
      id: "COG",
      superficie: "225",
    },
  ],
  "Arabia Saudita": [
    {
      id: "SAU",
      superficie: "220",
    },
  ],
  "Estados Unidos de América": [
    {
      id: "USA",
      superficie: "202",
    },
  ],
  Argentina: [
    {
      id: "ARG",
      superficie: "201",
    },
  ],
  Chile: [
    {
      id: "CHL",
      superficie: "136",
    },
  ],
  "República Democrática de Timor-Leste": [
    {
      id: "TLS",
      superficie: "95",
    },
  ],
  "El Salvador": [
    {
      id: "SLV",
      superficie: "74",
    },
  ],
  "Islas Cook": [
    {
      id: "COK",
      superficie: "70",
    },
  ],
  "Trinidad y Tobago": [
    {
      id: "TTO",
      superficie: "64",
    },
  ],
  Ruanda: [
    {
      id: "RWA",
      superficie: "57",
    },
  ],
  Marruecos: [
    {
      id: "MAR",
      superficie: "55",
    },
  ],
  "Las Bahamas": [
    {
      id: "BHS",
      superficie: "37",
    },
  ],
  Bután: [
    {
      id: "BTN",
      superficie: "32",
    },
  ],
  Irán: [
    {
      id: "IRN",
      superficie: "28",
    },
  ],
  Belice: [
    {
      id: "BLZ",
      superficie: "23",
    },
  ],
  Suriname: [
    {
      id: "SUR",
      superficie: "15",
    },
  ],
  "Las Maldivas": [
    {
      id: "MDV",
      superficie: "13",
    },
  ],
  Zimbabue: [
    {
      id: "ZWE",
      superficie: "13",
    },
  ],
  Honduras: [
    {
      id: "HND",
      superficie: "12",
    },
  ],
  "República Dominicana": [
    {
      id: "DOM",
      superficie: "6",
    },
  ],
  Granada: [
    {
      id: "GRD",
      superficie: "-",
    },
  ],
  Nauru: [
    {
      id: "NRU",
      superficie: "-",
    },
  ],
  Singapur: [
    {
      id: "SGP",
      superficie: "-",
    },
  ],
  Camerún: [
    {
      id: "CMR",
      superficie: "-",
    },
  ],
  Túnez: [
    {
      id: "TUN",
      superficie: "-",
    },
  ],
};
