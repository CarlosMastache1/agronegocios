const regionesConMunicipios = {
  //32
  "Valles Centrales": [
    //2
    {
      id: 20067,
      volumen: 1981,
      nombre: "Oaxaca de Juárez"
    }, 
    {
      id: 20068,
      volumen: 1111,
      nombre: "Ocotlán de Morelos"
    }, 
  ],
  'Papaloapan': [
    //11
    {
      id: 20559,
      volumen: 227,
      nombre: "San Juan Bautista Valle Nacional"
    }, 
    {
      id: 20417,
      volumen: 204,
      nombre: "Santa María Jacatepec"
    }, 
    {
      id: 20184,
      volumen: 202,
      nombre: "San Juan Bautista Tuxtepec"
    }, 
    {
      id: 20278,
      volumen: 178,
      nombre: "San Miguel Soyaltepec"
    }, 
    {
      id: 20044,
      volumen: 143,
      nombre: "Loma Bonita"
    }, 
    {
      id: 20002,
      volumen: 140,
      nombre: "Acatlán de Pérez Figueroa"
    }, 
    {
      id: 20498,
      volumen: 136,
      nombre: "Santiago Yaveo"
    }, 
    {
      id: 20232,
      volumen: 128,
      nombre: "San Lucas Ojitlán"
    }, 
    {
      id: 20205,
      volumen: 118,
      nombre: "San Juan Lalana"
    }, 
    {
      id: 20468,
      volumen: 117,
      nombre: "Santiago Jocotepec"
    }, 
    {
      id: 20166,
      volumen: 116,
      nombre: "San José Chiltepec"
    }, 
  ],
  'Istmo': [
    //4
    {
      id: 20057,
      volumen: 257,
      nombre: "Matías Romero Avendaño"
    }, 
    {
      id: 20198,
      volumen: 231,
      nombre: "San Juan Guichicovi"
    }, 
    {
      id: 20005,
      volumen: 134,
      nombre: "Asunción Ixtaltepec"
    }, 
    {
      id: 20427,
      volumen: 110,
      nombre: "Santa María Petapa"
    }, 
  ],
  "Sierra de Juárez": [
    //2
    {
      id: 20190,
      volumen: 296,
      nombre: "San Juan Cotzocón"
    }, 
    {
      id: 20207,
      volumen: 209,
      nombre: "San Juan Mazatlán"
    }, 
  ],
  'Mixteca': [
    //1
    {
      id: 20209,
      volumen: 104,
      nombre: "San Juan Mixtepec"
    }, 
  ],
  "Sierra Sur": [
    //1
    {
      id: 20125,
      volumen: 107,
      nombre: "San Carlos Yautepec"
    }, 
  ],
  'Costa': [
    //2
    {
      id: 20509,
      volumen: 104,
      nombre: "Santo Domingo de Morelos"
    }, 

    {
      id: 20334,
      volumen: 116,
      nombre: "Villa de Tututepec de Melchor Ocampo"
    }, 
  ],
  "Sierra de Flores Magón": [
    //9
    {
      id: 20406,
      volumen: 306,
      nombre: "Santa María Chilchotla"
    }, 
    {
      id: 20041,
      volumen: 295,
      nombre: "Huautla de Jiménez"
    }, 
    {
      id: 20058,
      volumen: 278,
      nombre: "Mazatlán Villa de Flores"
    }, 
    {
      id: 20171,
      volumen: 263,
      nombre: "San José Tenango"
    }, 
    {
      id: 20244,
      volumen: 137,
      nombre: "San Martín Toxpalan"
    }, 
    {
      id: 20490,
      volumen: 135,
      nombre: "Santiago Texcalcingo"
    }, 
    {
      id: 20434,
      volumen: 131,
      nombre: "Santa María Teopoxco"
    }, 
    {
      id: 20177,
      volumen: 112,
      nombre: "San Juan Bautista Cuicatlán"
    }, 
    {
      id: 20545,
      volumen: 3123,
      nombre: "Teotitlán de Flores Magón"
    }, 
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