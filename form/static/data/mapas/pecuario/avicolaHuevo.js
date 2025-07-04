const regionesConMunicipios = {
  //32
  "Valles Centrales": [
    //2
    {
      id: 20067,
      superficie: "",
      volumen: "1,981",
    }, //Oaxaca de Juárez
    {
      id: 20068,
      superficie: "",
      volumen: "1,111",
    }, //Ocotlán de Morelos
  ],
  'Papaloapan': [
    //11
    {
      id: 20559,
      superficie: "",
      volumen: "227",
    }, //San Juan Bautista Valle Nacional
    {
      id: 20417,
      superficie: "",
      volumen: "204",
    }, //Santa María Jacatepec
    {
      id: 20184,
      superficie: "",
      volumen: "202",
    }, //San Juan Bautista Tuxtepec
    {
      id: 20278,
      superficie: "",
      volumen: "178",
    }, //San Miguel Soyaltepec
    {
      id: 20044,
      superficie: "",
      volumen: "143",
    }, //Loma Bonita
    {
      id: 20002,
      superficie: "",
      volumen: "140",
    }, //Acatlán de Pérez Figueroa
    {
      id: 20498,
      superficie: "",
      volumen: "136",
    }, //Santiago Yaveo
    {
      id: 20232,
      superficie: "",
      volumen: "128",
    }, //San Lucas Ojitlán
    {
      id: 20205,
      superficie: "",
      volumen: "118",
    }, //San Juan Lalana
    {
      id: 20468,
      superficie: "",
      volumen: "117",
    }, //Santiago Jocotepec
    {
      id: 20166,
      superficie: "",
      volumen: "116",
    }, //San José Chiltepec
  ],
  'Istmo': [
    //4
    {
      id: 20057,
      superficie: "",
      volumen: "257",
    }, //Matías Romero Avendaño
    {
      id: 20198,
      superficie: "",
      volumen: "231",
    }, //San Juan Guichicovi
    {
      id: 20005,
      superficie: "",
      volumen: "134",
    }, //Asunción Ixtaltepec
    {
      id: 20427,
      superficie: "",
      volumen: "110",
    }, //Santa María Petapa
  ],
  "Sierra de Juárez": [
    //2
    {
      id: 20190,
      superficie: "",
      volumen: "296",
    }, //San Juan Cotzocón
    {
      id: 20207,
      superficie: "",
      volumen: "209",
    }, //San Juan Mazatlán
  ],
  'Mixteca': [
    //1
    {
      id: 20209,
      superficie: "",
      volumen: "104",
    }, //San Juan Mixtepec
  ],
  "Sierra Sur": [
    //1
    {
      id: 20125,
      superficie: "",
      volumen: "107",
    }, //San Carlos Yautepec
  ],
  'Costa': [
    //2
    {
      id: 20509,
      superficie: "",
      volumen: "104",
    }, //Santo Domingo de Morelos

    {
      id: 20334,
      superficie: "",
      volumen: "116",
    }, //Villa de Tututepec de Melchor Ocampo
  ],
  "Sierra de Flores Magón": [
    //9
    {
      id: 20406,
      superficie: "",
      volumen: "306",
    }, //Santa María Chilchotla
    {
      id: 20041,
      superficie: "",
      volumen: "295",
    }, //Huautla de Jiménez
    {
      id: 20058,
      superficie: "",
      volumen: "278",
    }, //Mazatlán Villa de Flores
    {
      id: 20171,
      superficie: "",
      volumen: "263",
    }, //San José Tenango
    {
      id: 20244,
      superficie: "",
      volumen: "137",
    }, //San Martín Toxpalan
    {
      id: 20490,
      superficie: "",
      volumen: "135",
    }, //Santiago Texcalcingo
    {
      id: 20434,
      superficie: "",
      volumen: "131",
    }, //Santa María Teopoxco
    {
      id: 20177,
      superficie: "",
      volumen: "112",
    }, //San Juan Bautista Cuicatlán
    {
      id: 20545,
      superficie: "",
      volumen: "3,123",
    }, //Teotitlán de Flores Magón
  ],
};

//PRODUCCION NACIONAL DE HUEVO DE GALLINA
const estadosDatos = [
  //19
  {
    id: "JAL",
    superficie: "",
    volumen: "1,715,938",
  },//Jalisco
  {
    id: "PUE",
    superficie: "",
    volumen: "475,816",
  },//Puebla
  {
    id: "SON",
    superficie: "",
    volumen: "181,924",
  },//Sonora
  {
    id: "SLP",
    superficie: "",
    volumen: "113,599",
  },//San Luis Potosí
  {
    id: "YUC",
    superficie: "",
    volumen: "111,177",
  },//Yucatán
  {
    id: "NL",
    superficie: "",
    volumen: "95,245",
  },//Nuevo León
  {
    id: "DGO",
    superficie: "",
    volumen: "78,256",
  },//Durango
  {
    id: "SIN",
    superficie: "",
    volumen: "76,946",
  },//Sinaloa
  {
    id: "GTO",
    superficie: "",
    volumen: "69,418",
  },//Guanajuato
  {
    id: "COA",
    superficie: "",
    volumen: "61,700",
  },//Coahuila
  {
    id: "BCN",
    superficie: "",
    volumen: "31,849",
  },//Baja California
  {
    id: "NAY",
    superficie: "",
    volumen: "25,199",
  },//Nayarit
  {
    id: "MICH",
    superficie: "",
    volumen: "20,736",
  },//Michoacán
  {
    id: "QRO",
    superficie: "",
    volumen: "19,701",
  },//Querétaro
  {
    id: "VER",
    superficie: "",
    volumen: "17,550",
  },//Veracruz
  {
    id: "EM",
    superficie: "",
    volumen: "15,731",
  },//México
  {
    id: "GRO",
    superficie: "",
    volumen: "9,090",
  },//Guerrero
  {
    id: "AGS",
    superficie: "",
    volumen: "8,900",
  },//Aguascalientes
  {
    id: "OAX",
    superficie: "",
    volumen: "6,879",
  },//Oaxaca
];

const paisesDatos = [//12
  { id: "CHN", volumen: "1,235,005,100" },
  { id: "IDN", volumen: "137,976,993" },
  { id: "IND", volumen: "126,048,497" },
  { id: "USA", volumen: "116,042,457" },
  { id: "BRA", volumen: "61,981,178" },
  { id: "MEX", volumen: "61,628,301" },
  { id: "RUS", volumen: "48,276,871" },
  { id: "JPN", volumen: "45,875,475" },
  { id: "PAK", volumen: "23,570,064" },
  { id: "TUR", volumen: "21,046,572" },
  { id: "NGA", volumen: "17,253,832" },
  { id: "COL", volumen: "17,062,669" },
]