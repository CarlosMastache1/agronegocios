const regionesConMunicipios = {
  //30
  Costa: [
    //9
    {
      id: 20482,
      territorio: "",
      toneladas: "23",
    }, //Santiago Pinotepa Nacional
    {
      id: 20467,
      territorio: "",
      toneladas: "8",
    }, //Santiago Jamiltepec
    {
      id: 20489,
      territorio: "",
      toneladas: "7",
    }, //Santiago Tetepec
    {
      id: 20466,
      territorio: "",
      toneladas: "7",
    }, //Santiago Ixtayutla
    {
      id: 20439,
      territorio: "",
      toneladas: "6",
    }, //Santa María Tonameca
    {
      id: 20070,
      territorio: "",
      toneladas: "5",
    }, //Pinotepa de Don Luis
    {
      id: 20334,
      territorio: "",
      toneladas: "4",
    }, //Villa de Tututepec de Melchor Ocampo

    {
      id: 20185,
      territorio: "",
      toneladas: "4",
    }, //San Juan Cacahuatepec

    {
      id: 20082,
      territorio: "",
      toneladas: "6",
    }, //San Agustín Chayuco
  ],
  Papaloapan: [
    //9
    {
      id: 20559,
      territorio: "",
      toneladas: "10",
    }, //San Juan Bautista Valle Nacional
    {
      id: 20417,
      territorio: "",
      toneladas: "10",
    }, //Santa María Jacatepec
    {
      id: 20205,
      territorio: "",
      toneladas: "7",
    }, //San Juan Lalana
    {
      id: 20468,
      territorio: "",
      toneladas: "7",
    }, //Santiago Jocotepec
    {
      id: 20184,
      territorio: "",
      toneladas: "6",
    }, //San Juan Bautista Tuxtepec
    {
      id: 20166,
      territorio: "",
      toneladas: "6",
    }, //San José Chiltepec
    {
      id: 20002,
      territorio: "",
      toneladas: "5",
    }, //Acatlán de Pérez Figueroa
    {
      id: 20278,
      territorio: "",
      toneladas: "4",
    }, //San Miguel Soyaltepec
    {
      id: 20009,
      territorio: "",
      toneladas: "4",
    }, //Ayotzintepec
  ],
  Mixteca: [
    //4
    {
      id: 20176,
      territorio: "",
      toneladas: "6",
    }, //San Juan Bautista Coixtlahuaca
    {
      id: 20537,
      territorio: "",
      toneladas: "4",
    }, //Silacayoápam
    {
      id: 20469,
      territorio: "",
      toneladas: "4",
    }, //Santiago Juxtlahuaca
    {
      id: 20261,
      territorio: "",
      toneladas: "4",
    }, //San Miguel Amatitlán
  ],
  "Valles Centrales": [
    //4
    {
      id: 20067,
      territorio: "",
      toneladas: "42",
    }, //Oaxaca de Juárez
    {
      id: 20068,
      territorio: "",
      toneladas: "21",
    }, //Ocotlán de Morelos
    {
      id: 20570,
      territorio: "",
      toneladas: "4",
    }, //Zimatlán de Álvarez
    {
      id: 20398,
      territorio: "",
      toneladas: "4",
    }, //Ayoquezco de Aldama
  ],
  "Sierra De Juárez": [
    //2
    {
      id: 20190,
      territorio: "",
      toneladas: "6",
    }, //San Juan Cotzocón
    {
      id: 20207,
      territorio: "",
      toneladas: "4",
    }, //San Juan Mazatlán
  ],
  Istmo: [
    //2
    {
      id: 20198,
      territorio: "",
      toneladas: "5",
    }, //San Juan Guichicovi
    {
      id: 20057,
      territorio: "",
      toneladas: "4",
    }, //Matías Romero Avendaño
  ],
};

/* PRODUCCION NACIONAL DE CARNE DE GUAJOLOTE */
const estadosDatos = [
  //18
  {
    id: "YUC",
    territorio: "",
    toneladas: "5,163",
  }, //Yucatán
  {
    id: "PUE",
    territorio: "",
    toneladas: "2,718",
  }, //Puebla
  {
    id: "EM",
    territorio: "",
    toneladas: "2,213",
  }, //México
  {
    id: "VER",
    territorio: "",
    toneladas: "1,417",
  }, //Veracruz
  {
    id: "TAB",
    territorio: "",
    toneladas: "1,233",
  }, //Tabasco
  {
    id: "CHS",
    territorio: "",
    toneladas: "1,021",
  }, //Chiapas
  {
    id: "GRO",
    territorio: "",
    toneladas: "1,011",
  }, //Guerrero
  {
    id: "HGO",
    territorio: "",
    toneladas: "974",
  }, //Hidalgo
  {
    id: "CAM",
    territorio: "",
    toneladas: "774",
  }, //Campeche
  {
    id: "CHI",
    territorio: "",
    toneladas: "758",
  }, //Chihuahua
  {
    id: "OAX",
    territorio: "",
    toneladas: "601",
  }, //Oaxaca
  {
    id: "TLAX",
    territorio: "",
    toneladas: "349",
  }, //Tlaxcala
  {
    id: "MICH",
    territorio: "",
    toneladas: "140",
  }, //Michoacán
  {
    id: "QR",
    territorio: "",
    toneladas: "136",
  }, //Quintana Roo
  {
    id: "SLP",
    territorio: "",
    toneladas: "131",
  }, //San Luis Potosí
  {
    id: "QRO",
    territorio: "",
    toneladas: "76",
  }, //Querétaro
  {
    id: "ZAC",
    territorio: "",
    toneladas: "33",
  }, //Zacatecas
  {
    id: "COL",
    territorio: "",
    toneladas: "4",
  }, //Colima
];

const paisesDatos = [
  //22
  { id: "USA", toneladas: "2,368,797" }, //Estados Unidos de América
  { id: "POL", toneladas: "409,170" }, //Polonia
  { id: "DEU", toneladas: "406,000" }, //Alemania
  { id: "FRA", toneladas: "244,920" }, //Francia
  { id: "ESP", toneladas: "231,590" }, //España
  { id: "ITA", toneladas: "211,130" }, //Italia
  { id: "BRA", toneladas: "162,270" }, //Brasil
  { id: "CAN", toneladas: "150,210" }, //Canadá
  { id: "MAR", toneladas: "120,000" }, //Marruecos
  { id: "GBR", toneladas: "117,000" }, //Reino Unido de Gran Bretaña e Irlanda del Norte
  { id: "TUN", toneladas: "89,257" }, //Túnez
  { id: "ISR", toneladas: "87,959" }, //Israel
  { id: "CHL", toneladas: "76,312" }, //Chile
  { id: "HUN", toneladas: "63,910" }, //Hungría
  { id: "TUR", toneladas: "53,646" }, //Turquía
  { id: "PRT", toneladas: "45,650" }, //Portugal
  { id: "ARG", toneladas: "31,646" }, //Argentina
  { id: "EGY", toneladas: "24,735" }, //Egipto
  { id: "UKR", toneladas: "23,400" }, //Ucrania
  { id: "AUS", toneladas: "18,928" }, //Australia
  { id: "MEX", toneladas: "18,216" }, //México
  { id: "IRL", toneladas: "14,720" }, //Irlanda
];
