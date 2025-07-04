const regionesConMunicipios = {
  //30
  Costa: [
    //9
    {
      id: 20482,
      superficie: "",
      volumen: "23",
    }, //Santiago Pinotepa Nacional
    {
      id: 20467,
      superficie: "",
      volumen: "8",
    }, //Santiago Jamiltepec
    {
      id: 20489,
      superficie: "",
      volumen: "7",
    }, //Santiago Tetepec
    {
      id: 20466,
      superficie: "",
      volumen: "7",
    }, //Santiago Ixtayutla
    {
      id: 20439,
      superficie: "",
      volumen: "6",
    }, //Santa María Tonameca
    {
      id: 20070,
      superficie: "",
      volumen: "5",
    }, //Pinotepa de Don Luis
    {
      id: 20334,
      superficie: "",
      volumen: "4",
    }, //Villa de Tututepec de Melchor Ocampo

    {
      id: 20185,
      superficie: "",
      volumen: "4",
    }, //San Juan Cacahuatepec

    {
      id: 20082,
      superficie: "",
      volumen: "6",
    }, //San Agustín Chayuco
  ],
  Papaloapan: [
    //9
    {
      id: 20559,
      superficie: "",
      volumen: "10",
    }, //San Juan Bautista Valle Nacional
    {
      id: 20417,
      superficie: "",
      volumen: "10",
    }, //Santa María Jacatepec
    {
      id: 20205,
      superficie: "",
      volumen: "7",
    }, //San Juan Lalana
    {
      id: 20468,
      superficie: "",
      volumen: "7",
    }, //Santiago Jocotepec
    {
      id: 20184,
      superficie: "",
      volumen: "6",
    }, //San Juan Bautista Tuxtepec
    {
      id: 20166,
      superficie: "",
      volumen: "6",
    }, //San José Chiltepec
    {
      id: 20002,
      superficie: "",
      volumen: "5",
    }, //Acatlán de Pérez Figueroa
    {
      id: 20278,
      superficie: "",
      volumen: "4",
    }, //San Miguel Soyaltepec
    {
      id: 20009,
      superficie: "",
      volumen: "4",
    }, //Ayotzintepec
  ],
  Mixteca: [
    //4
    {
      id: 20176,
      superficie: "",
      volumen: "6",
    }, //San Juan Bautista Coixtlahuaca
    {
      id: 20537,
      superficie: "",
      volumen: "4",
    }, //Silacayoápam
    {
      id: 20469,
      superficie: "",
      volumen: "4",
    }, //Santiago Juxtlahuaca
    {
      id: 20261,
      superficie: "",
      volumen: "4",
    }, //San Miguel Amatitlán
  ],
  "Valles Centrales": [
    //4
    {
      id: 20067,
      superficie: "",
      volumen: "42",
    }, //Oaxaca de Juárez
    {
      id: 20068,
      superficie: "",
      volumen: "21",
    }, //Ocotlán de Morelos
    {
      id: 20570,
      superficie: "",
      volumen: "4",
    }, //Zimatlán de Álvarez
    {
      id: 20398,
      superficie: "",
      volumen: "4",
    }, //Ayoquezco de Aldama
  ],
  "Sierra De Juárez": [
    //2
    {
      id: 20190,
      superficie: "",
      volumen: "6",
    }, //San Juan Cotzocón
    {
      id: 20207,
      superficie: "",
      volumen: "4",
    }, //San Juan Mazatlán
  ],
  Istmo: [
    //2
    {
      id: 20198,
      superficie: "",
      volumen: "5",
    }, //San Juan Guichicovi
    {
      id: 20057,
      superficie: "",
      volumen: "4",
    }, //Matías Romero Avendaño
  ],
};

/* PRODUCCION NACIONAL DE CARNE DE GUAJOLOTE */
const estadosDatos = [
  //18
  {
    id: "YUC",
    superficie: "",
    volumen: "5,163",
  }, //Yucatán
  {
    id: "PUE",
    superficie: "",
    volumen: "2,718",
  }, //Puebla
  {
    id: "EM",
    superficie: "",
    volumen: "2,213",
  }, //México
  {
    id: "VER",
    superficie: "",
    volumen: "1,417",
  }, //Veracruz
  {
    id: "TAB",
    superficie: "",
    volumen: "1,233",
  }, //Tabasco
  {
    id: "CHS",
    superficie: "",
    volumen: "1,021",
  }, //Chiapas
  {
    id: "GRO",
    superficie: "",
    volumen: "1,011",
  }, //Guerrero
  {
    id: "HGO",
    superficie: "",
    volumen: "974",
  }, //Hidalgo
  {
    id: "CAM",
    superficie: "",
    volumen: "774",
  }, //Campeche
  {
    id: "CHI",
    superficie: "",
    volumen: "758",
  }, //Chihuahua
  {
    id: "OAX",
    superficie: "",
    volumen: "601",
  }, //Oaxaca
  {
    id: "TLAX",
    superficie: "",
    volumen: "349",
  }, //Tlaxcala
  {
    id: "MICH",
    superficie: "",
    volumen: "140",
  }, //Michoacán
  {
    id: "QR",
    superficie: "",
    volumen: "136",
  }, //Quintana Roo
  {
    id: "SLP",
    superficie: "",
    volumen: "131",
  }, //San Luis Potosí
  {
    id: "QRO",
    superficie: "",
    volumen: "76",
  }, //Querétaro
  {
    id: "ZAC",
    superficie: "",
    volumen: "33",
  }, //Zacatecas
  {
    id: "COL",
    superficie: "",
    volumen: "4",
  }, //Colima
];

const paisesDatos = [
  //22
  { id: "USA", volumen: "2,368,797" }, //Estados Unidos de América
  { id: "POL", volumen: "409,170" }, //Polonia
  { id: "DEU", volumen: "406,000" }, //Alemania
  { id: "FRA", volumen: "244,920" }, //Francia
  { id: "ESP", volumen: "231,590" }, //España
  { id: "ITA", volumen: "211,130" }, //Italia
  { id: "BRA", volumen: "162,270" }, //Brasil
  { id: "CAN", volumen: "150,210" }, //Canadá
  { id: "MAR", volumen: "120,000" }, //Marruecos
  { id: "GBR", volumen: "117,000" }, //Reino Unido de Gran Bretaña e Irlanda del Norte
  { id: "TUN", volumen: "89,257" }, //Túnez
  { id: "ISR", volumen: "87,959" }, //Israel
  { id: "CHL", volumen: "76,312" }, //Chile
  { id: "HUN", volumen: "63,910" }, //Hungría
  { id: "TUR", volumen: "53,646" }, //Turquía
  { id: "PRT", volumen: "45,650" }, //Portugal
  { id: "ARG", volumen: "31,646" }, //Argentina
  { id: "EGY", volumen: "24,735" }, //Egipto
  { id: "UKR", volumen: "23,400" }, //Ucrania
  { id: "AUS", volumen: "18,928" }, //Australia
  { id: "MEX", volumen: "18,216" }, //México
  { id: "IRL", volumen: "14,720" }, //Irlanda
];
