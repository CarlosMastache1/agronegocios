const regionesConMunicipios = {
  //32
  "Valles Centrales": [
    //2
    {
      id: 20067,
      territorio: "",
      toneladas: "1,981",
    }, //Oaxaca de Juárez
    {
      id: 20068,
      territorio: "",
      toneladas: "1,111",
    }, //Ocotlán de Morelos
  ],
  'Papaloapan': [
    //11
    {
      id: 20559,
      territorio: "",
      toneladas: "227",
    }, //San Juan Bautista Valle Nacional
    {
      id: 20417,
      territorio: "",
      toneladas: "204",
    }, //Santa María Jacatepec
    {
      id: 20184,
      territorio: "",
      toneladas: "202",
    }, //San Juan Bautista Tuxtepec
    {
      id: 20278,
      territorio: "",
      toneladas: "178",
    }, //San Miguel Soyaltepec
    {
      id: 20044,
      territorio: "",
      toneladas: "143",
    }, //Loma Bonita
    {
      id: 20002,
      territorio: "",
      toneladas: "140",
    }, //Acatlán de Pérez Figueroa
    {
      id: 20498,
      territorio: "",
      toneladas: "136",
    }, //Santiago Yaveo
    {
      id: 20232,
      territorio: "",
      toneladas: "128",
    }, //San Lucas Ojitlán
    {
      id: 20205,
      territorio: "",
      toneladas: "118",
    }, //San Juan Lalana
    {
      id: 20468,
      territorio: "",
      toneladas: "117",
    }, //Santiago Jocotepec
    {
      id: 20166,
      territorio: "",
      toneladas: "116",
    }, //San José Chiltepec
  ],
  'Istmo': [
    //4
    {
      id: 20057,
      territorio: "",
      toneladas: "257",
    }, //Matías Romero Avendaño
    {
      id: 20198,
      territorio: "",
      toneladas: "231",
    }, //San Juan Guichicovi
    {
      id: 20005,
      territorio: "",
      toneladas: "134",
    }, //Asunción Ixtaltepec
    {
      id: 20427,
      territorio: "",
      toneladas: "110",
    }, //Santa María Petapa
  ],
  "Sierra de Juárez": [
    //2
    {
      id: 20190,
      territorio: "",
      toneladas: "296",
    }, //San Juan Cotzocón
    {
      id: 20207,
      territorio: "",
      toneladas: "209",
    }, //San Juan Mazatlán
  ],
  'Mixteca': [
    //1
    {
      id: 20209,
      territorio: "",
      toneladas: "104",
    }, //San Juan Mixtepec
  ],
  "Sierra Sur": [
    //1
    {
      id: 20125,
      territorio: "",
      toneladas: "107",
    }, //San Carlos Yautepec
  ],
  'Costa': [
    //2
    {
      id: 20509,
      territorio: "",
      toneladas: "104",
    }, //Santo Domingo de Morelos

    {
      id: 20334,
      territorio: "",
      toneladas: "116",
    }, //Villa de Tututepec de Melchor Ocampo
  ],
  "Sierra de Flores Magón": [
    //9
    {
      id: 20406,
      territorio: "",
      toneladas: "306",
    }, //Santa María Chilchotla
    {
      id: 20041,
      territorio: "",
      toneladas: "295",
    }, //Huautla de Jiménez
    {
      id: 20058,
      territorio: "",
      toneladas: "278",
    }, //Mazatlán Villa de Flores
    {
      id: 20171,
      territorio: "",
      toneladas: "263",
    }, //San José Tenango
    {
      id: 20244,
      territorio: "",
      toneladas: "137",
    }, //San Martín Toxpalan
    {
      id: 20490,
      territorio: "",
      toneladas: "135",
    }, //Santiago Texcalcingo
    {
      id: 20434,
      territorio: "",
      toneladas: "131",
    }, //Santa María Teopoxco
    {
      id: 20177,
      territorio: "",
      toneladas: "112",
    }, //San Juan Bautista Cuicatlán
    {
      id: 20545,
      territorio: "",
      toneladas: "3,123",
    }, //Teotitlán de Flores Magón
  ],
};

//PRODUCCION NACIONAL DE HUEVO DE GALLINA
const estadosDatos = [
  //19
  {
    id: "JAL",
    territorio: "",
    toneladas: "1,715,938",
  },//Jalisco
  {
    id: "PUE",
    territorio: "",
    toneladas: "475,816",
  },//Puebla
  {
    id: "SON",
    territorio: "",
    toneladas: "181,924",
  },//Sonora
  {
    id: "SLP",
    territorio: "",
    toneladas: "113,599",
  },//San Luis Potosí
  {
    id: "YUC",
    territorio: "",
    toneladas: "111,177",
  },//Yucatán
  {
    id: "NL",
    territorio: "",
    toneladas: "95,245",
  },//Nuevo León
  {
    id: "DGO",
    territorio: "",
    toneladas: "78,256",
  },//Durango
  {
    id: "SIN",
    territorio: "",
    toneladas: "76,946",
  },//Sinaloa
  {
    id: "GTO",
    territorio: "",
    toneladas: "69,418",
  },//Guanajuato
  {
    id: "COA",
    territorio: "",
    toneladas: "61,700",
  },//Coahuila
  {
    id: "BCN",
    territorio: "",
    toneladas: "31,849",
  },//Baja California
  {
    id: "NAY",
    territorio: "",
    toneladas: "25,199",
  },//Nayarit
  {
    id: "MICH",
    territorio: "",
    toneladas: "20,736",
  },//Michoacán
  {
    id: "QRO",
    territorio: "",
    toneladas: "19,701",
  },//Querétaro
  {
    id: "VER",
    territorio: "",
    toneladas: "17,550",
  },//Veracruz
  {
    id: "EM",
    territorio: "",
    toneladas: "15,731",
  },//México
  {
    id: "GRO",
    territorio: "",
    toneladas: "9,090",
  },//Guerrero
  {
    id: "AGS",
    territorio: "",
    toneladas: "8,900",
  },//Aguascalientes
  {
    id: "OAX",
    territorio: "",
    toneladas: "6,879",
  },//Oaxaca
];

const paisesDatos = [//12
  { id: "CHN", toneladas: "1,235,005,100" },
  { id: "IDN", toneladas: "137,976,993" },
  { id: "IND", toneladas: "126,048,497" },
  { id: "USA", toneladas: "116,042,457" },
  { id: "BRA", toneladas: "61,981,178" },
  { id: "MEX", toneladas: "61,628,301" },
  { id: "RUS", toneladas: "48,276,871" },
  { id: "JPN", toneladas: "45,875,475" },
  { id: "PAK", toneladas: "23,570,064" },
  { id: "TUR", toneladas: "21,046,572" },
  { id: "NGA", toneladas: "17,253,832" },
  { id: "COL", toneladas: "17,062,669" },
]