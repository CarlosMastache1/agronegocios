const regionesConMunicipios = {
  //39
  Mixteca: [
    //19
    {
      id: 20549,
      territorio: "",
      toneladas: "134",
    }, //H. V. Tezoatlán de Segura y Luna, C. de la I.de O.
    {
      id: 20261,
      territorio: "",
      toneladas: "106",
    }, //San Miguel Amatitlán
    {
      id: 20039,
      territorio: "",
      toneladas: "81",
    }, //Heroica Ciudad de Huajuapan de León
    {
      id: 20459,
      territorio: "",
      toneladas: "67",
    }, //Santiago Chazumba
    {
      id: 20469,
      territorio: "",
      toneladas: "52",
    }, //Santiago Juxtlahuaca
    {
      id: 20089,
      territorio: "",
      toneladas: "50",
    }, //San Andrés Dinicuiti
    {
      id: 20340,
      territorio: "",
      toneladas: "45",
    }, //San Pedro Y San Pablo Tequixtepec
    {
      id: 20417,
      territorio: "",
      toneladas: "45",
    }, //San Juan Mixtepec
    {
      id: 20252,
      territorio: "",
      toneladas: "44",
    }, //San Mateo Peñasco
    {
      id: 20397,
      territorio: "",
      toneladas: "43",
    }, //Heroica Ciudad de Tlaxiaco
    {
      id: 20348,
      territorio: "",
      toneladas: "43",
    }, //San Sebastián Tecomaxtlahuaca
    {
      id: 20210,
      territorio: "",
      toneladas: "39",
    }, //San Juan Ñumí
    {
      id: 20537,
      territorio: "",
      toneladas: "33",
    }, //Silacayoápam
    {
      id: 20297,
      territorio: "",
      toneladas: "33",
    }, //San Pablo Tijaltepec
    {
      id: 20445,
      territorio: "",
      toneladas: "33",
    }, //Santa María Yosoyúa
    {
      id: 2022,
      territorio: "",
      toneladas: "28",
    }, //Cosoltepec
    {
      id: 20548,
      territorio: "",
      toneladas: "26",
    }, //Tepelmeme Villa de Morelos
    {
      id: 20006,
      territorio: "",
      toneladas: "25",
    }, //Asunción Nochixtlán
    {
      id: 20176,
      territorio: "",
      toneladas: "24",
    }, //San Juan Bautista Coixtlahuaca
  ],
  "Sierra Sur": [
    //4
    {
      id: 20059,
      territorio: "",
      toneladas: "74",
    }, //Miahuatlán de Porfirio Díaz
    {
      id: 20277,
      territorio: "",
      toneladas: "37",
    }, //Villa Sola de Vega
    {
      id: 20073,
      territorio: "",
      toneladas: "23",
    }, //Putla Villa de Guerrero
    {
      id: 20450,
      territorio: "",
      toneladas: "20",
    }, //Santiago Amoltepec
  ],
  "Valles Centrales": [
    //14
    {
      id: 20068,
      territorio: "",
      toneladas: "65",
    }, //Ocotlán de Morelos
    {
      id: 20028,
      territorio: "",
      toneladas: "62",
    }, //Heroica Ciudad de Ejutla de Crespo
    {
      id: 20570,
      territorio: "",
      toneladas: "55",
    }, //Zimatlán de Álvarez
    {
      id: 20565,
      territorio: "",
      toneladas: "36",
    }, //Villa de Zaachila
    {
      id: 20295,
      territorio: "",
      toneladas: "35",
    }, //San Pablo Huixtepec

    {
      id: 20387,
      territorio: "",
      toneladas: "27",
    }, //Santa Gertrudis

    {
      id: 20398,
      territorio: "",
      toneladas: "33",
    }, //Ayoquezco de Aldama

    {
      id: 20013,
      territorio: "",
      toneladas: "25",
    }, //Ciénega de Zimatlán
    {
      id: 20072,
      territorio: "",
      toneladas: "25",
    }, //San José del Progreso
    {
      id: 20494,
      territorio: "",
      toneladas: "24",
    }, //Santiago Tlazoyaltepec
    {
      id: 20017,
      territorio: "",
      toneladas: "24",
    }, //La Compañía
    {
      id: 20551,
      territorio: "",
      toneladas: "22",
    }, //Tlacolula de Matamoros
    {
      id: 20555,
      territorio: "",
      toneladas: "22",
    }, //Trinidad Zaachila
    {
      id: 20550,
      territorio: "",
      toneladas: "21",
    }, //San Jerónimo Tlacochahuaya
  ],
  Istmo: [
    //1
    {
      id: 20515,
      territorio: "",
      toneladas: "29",
    }, //Santo Domingo Tehuantepec
  ],
  "Sierra de Juárez": [
    //1

    {
      id: 20262,
      territorio: "",
      toneladas: "24",
    }, //San Miguel Amatlán
  ],
};

/* PRODUCCION NACIONAL DE CARNE DE CAPRINO		 */
const estadosDatos = [
  //9
  {
    id: "ZAC",
    territorio: "",
    toneladas: "4,487",
  }, //Zacatecas
  {
    id: "SLP",
    territorio: "",
    toneladas: "4,319",
  }, //San Luis Potosí
  {
    id: "PUE",
    territorio: "",
    toneladas: "3,988",
  }, //Puebla
  {
    id: "COA",
    territorio: "",
    toneladas: "3,967",
  }, //Coahuila
  {
    id: "GRO",
    territorio: "",
    toneladas: "3,808",
  }, //Guerrero
  {
    id: "OAX",
    territorio: "",
    toneladas: "3,754",
  }, //Oaxaca
  {
    id: "MICH",
    territorio: "",
    toneladas: "2,666",
  }, //Michoacán
  {
    id: "JAL",
    territorio: "",
    toneladas: "2,085",
  }, //Jalisco
  {
    id: "NL",
    territorio: "",
    toneladas: "1,660",
  }, //Nuevo León
];

/* PRODUCCION MUNDIAL DEL SECTOR CAPRINO */
/* CARNE DE CAPRINOS */
const paisesDatosCarne = [
  //22
  { id: "CHN", toneladas: "4,976,950" }, //China, Continental
  { id: "IND", toneladas: "550,615" }, //India
  { id: "PAK", toneladas: "532,000" }, //Pakistán
  { id: "NGA", toneladas: "277,847" }, //Nigeria
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "AFG", toneladas: "47,562" }, //Afganistán
  { id: "MEX", toneladas: "40,826" }, //México
  { id: "BRA", toneladas: "39,891" }, //Brasil
  { id: "IRN", toneladas: "38,839" }, //Irán (República Islámica del)
];

/* LECHE DE CABRAS */
const paisesDatosLeche = [
  //26
  { id: "IND", toneladas: "6248338.34" }, //India
  { id: "SDN", toneladas: "1160272.58" }, //Sudán
  { id: "PAK", toneladas: "1018000" }, //Pakistán
  { id: "BGD", toneladas: "915180" }, //Bangladesh
  { id: "FRA", toneladas: "717610" }, //Francia
  { id: "TUR", toneladas: "540425.93" }, //Turquía
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "" }, //
  { id: "", toneladas: "221600" }, //Rumania
  { id: "CHN", toneladas: "219339.9" }, //China, Continental
  { id: "JAM", toneladas: "196861.3" }, //Jamaica
  { id: "MEX", toneladas: "173673" }, //México
  { id: "MNG", toneladas: "169585.13" }, //Mongolia
];
