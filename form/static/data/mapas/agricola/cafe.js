//Revisar Datos
const regionesConMunicipios = {
  //151
  //35
  "Sierra de Juárez": [
    { id: 20207, territorio: "1,060", toneladas: "1,054" }, // San Juan Mazatlán
    { id: 20465, territorio: "515", toneladas: "510" }, // Santiago Ixcuintepec
    { id: 20042, territorio: "1,467", toneladas: "1,237" }, // Ixtlán de Juárez
    { id: 20214, territorio: "101", toneladas: "101" }, // San Juan Quiotepec
    { id: 20288, territorio: "195", toneladas: "170" }, // San Miguel Yotao
    { id: 20335, territorio: "282", toneladas: "269" }, // San Pedro Yaneri
    { id: 20336, territorio: "221", toneladas: "221" }, // San Pedro Yólox
    { id: 20458, territorio: "241", toneladas: "241" }, // Santiago Comaltepec
    { id: 20097, territorio: "101", toneladas: "98" }, // San Andrés Solaga
    { id: 20100, territorio: "73", toneladas: "73" }, // San Andrés Yaá
    { id: 20128, territorio: "158", toneladas: "158" }, // San Cristóbal Lachirioag
    { id: 20156, territorio: "669", toneladas: "659" }, // San Ildefonso Villa Alta
    { id: 20201, territorio: "358", toneladas: "353" }, // San Juan Juquila Vijanos
    { id: 20216, territorio: "92", toneladas: "90" }, // San Juan Tabaá
    { id: 20222, territorio: "371", toneladas: "362" }, // San Juan Yaeé
    { id: 20223, territorio: "206", toneladas: "206" }, // San Juan Yatzona
    { id: 20257, territorio: "65", toneladas: "65" }, // San Melchor Betaza
    { id: 20280, territorio: "632", toneladas: "627" }, // Villa Talea de Castro
    { id: 20433, territorio: "568", toneladas: "479" }, // Santa María Temaxcaltepec
    { id: 20457, territorio: "686", toneladas: "680" }, // Santiago Camotlán
    { id: 20471, territorio: "99", toneladas: "99" }, // Santiago Lalopa
    { id: 20514, territorio: "153", toneladas: "153" }, // Santo Domingo Roayaga
    { id: 20541, territorio: "637", toneladas: "625" }, // Tanetze de Zaragoza
    { id: 20003, territorio: "524", toneladas: "520" }, // Asunción Cacalotepec
    { id: 20031, territorio: "42", toneladas: "42" }, // Tamazulápam del Espíritu Santo
    { id: 20200, territorio: "432", toneladas: "432" }, // San Juan Juquila Mixes
    { id: 20231, territorio: "821", toneladas: "771" }, // San Lucas Camotlán
    { id: 20275, territorio: "2,092", toneladas: "2,082" }, // San Miguel Quetzaltepec
    { id: 20323, territorio: "412", toneladas: "412" }, // San Pedro Ocotepec
    { id: 20394, territorio: "1,040", toneladas: "1,034" }, // Santa María Alotepec
    { id: 20435, territorio: "214", toneladas: "214" }, // Santa María Tepantlali
    { id: 20454, territorio: "798", toneladas: "795" }, // Santiago Atitlán
    { id: 20502, territorio: "1,254", toneladas: "1,247" }, // Santiago Zacatepec
    { id: 20554, territorio: "444", toneladas: "440" }, // Totontepec Villa de Morelos
    { id: 20190, territorio: "3,335", toneladas: "3,188" }, // San Juan Cotzocón
  ],
  //24
  "Sierra Sur": [
    { id: 20020, territorio: "33", toneladas: "33" }, // Constancia del Rosario
    { id: 20073, territorio: "2,204", toneladas: "2,191" }, // Putla Villa de Guerrero
    { id: 20076, territorio: "908", toneladas: "897" }, // La Reforma
    { id: 20088, territorio: "414", toneladas: "413" }, // San Andrés Cabecera Nueva
    { id: 20377, territorio: "280", toneladas: "277" }, // Santa Cruz Itundujia
    { id: 20392, territorio: "951", toneladas: "941" }, // Santa Lucía Monteverde
    { id: 20447, territorio: "1,238", toneladas: "1,230" }, // Santa María Zacatepec
    { id: 20148, territorio: "128", toneladas: "125" }, // San Francisco Ozolotepec
    { id: 20159, territorio: "988", toneladas: "984" }, // San Jerónimo Coatlán
    { id: 20211, territorio: "368", toneladas: "364" }, // San Juan Ozolotepec
    { id: 20236, territorio: "141", toneladas: "140" }, // San Marcial Ozolotepec
    { id: 20254, territorio: "233", toneladas: "231" }, // San Mateo Río Hondo
    { id: 20291, territorio: "484", toneladas: "482" }, // San Pablo Coatlán
    { id: 20344, territorio: "853", toneladas: "850" }, // San Sebastián Coatlán
    { id: 20424, territorio: "1,175", toneladas: "1,173" }, // Santa María Ozolotepec
    { id: 20495, territorio: "2,172", toneladas: "2,164" }, // Santiago Xanica
    { id: 20137, territorio: "82", toneladas: "79" }, // San Francisco Cahuacuá
    { id: 20229, territorio: "101", toneladas: "99" }, // San Lorenzo Texmelúcan
    { id: 20448, territorio: "189", toneladas: "182" }, // Santa María Zaniza
    { id: 20516, territorio: "220", toneladas: "216" }, // Santo Domingo Teojomulco
    { id: 20008, territorio: "19", toneladas: "19" }, // Asunción Tlacolulita
    { id: 20064, territorio: "450", toneladas: "450" }, // Nejapa de Madero
    { id: 20125, territorio: "523", toneladas: "523" }, // San Carlos Yautepec
    { id: 20410, territorio: "30", toneladas: "30" }, // Santa María Ecatepec
  ],
  //34
  Costa: [
    { id: 20070, territorio: "28", toneladas: "26" }, // Pinotepa de Don Luis
    { id: 20082, territorio: "804", toneladas: "802" }, // San Agustín Chayuco
    { id: 20111, territorio: "18", toneladas: "16" }, // San Antonio Tepetlapa
    { id: 20185, territorio: "52", toneladas: "51" }, // San Juan Cacahuatepec
    { id: 20188, territorio: "288", toneladas: "287" }, // San Juan Colorado
    { id: 20225, territorio: "63", toneladas: "61" }, // San Lorenzo
    { id: 20302, territorio: "102", toneladas: "102" }, // San Pedro Atoyac
    { id: 20367, territorio: "34", toneladas: "34" }, // Santa Catarina Mechoacán
    { id: 20466, territorio: "354", toneladas: "353" }, // Santiago Ixtayutla
    { id: 20467, territorio: "702", toneladas: "702" }, // Santiago Jamiltepec
    { id: 20489, territorio: "49", toneladas: "47.5" }, // Santiago Tetepec
    { id: 20319, territorio: "183", toneladas: "181" }, // San Pedro Mixtepec
    { id: 20334, territorio: "2,123", toneladas: "2,116" }, // Villa de Tututepec de Melchor Ocampo
    { id: 20439, territorio: "305", toneladas: "300" }, // Santa María Tonameca
    { id: 20543, territorio: "454", toneladas: "451" }, // Tataltepec de Valdés
    { id: 20012, territorio: "4,473", toneladas: "2,672" }, // Candelaria Loxicha
    { id: 20071, territorio: "4,815", toneladas: "3,225" }, // Pluma Hidalgo
    { id: 20085, territorio: "5,782", toneladas: "3,945" }, // San Agustín Loxicha
    { id: 20113, territorio: "471", toneladas: "414" }, // San Baltazar Loxicha
    { id: 20117, territorio: "761", toneladas: "568" }, // San Bartolomé Loxicha
    { id: 20253, territorio: "3,755", toneladas: "2,305" }, // San Mateo Piñas
    { id: 20266, territorio: "3,663", toneladas: "2,285" }, // San Miguel del Puerto
    { id: 20306, territorio: "279", toneladas: "157" }, // San Pedro El Alto
    { id: 20324, territorio: "3,488", toneladas: "1,881" }, // San Pedro Pochutla
    { id: 20366, territorio: "310", toneladas: "239" }, // Santa Catarina Loxicha
    { id: 20413, territorio: "1,422", toneladas: "723" }, // Santa María Huatulco
    { id: 20153, territorio: "2,382", toneladas: "1,473" }, // San Gabriel Mixtepec
    { id: 20202, territorio: "2,299", toneladas: "1,432" }, // San Juan Lachao
    { id: 20213, territorio: "251", toneladas: "201" }, // San Juan Quiahije
    { id: 20272, territorio: "2,016", toneladas: "1,504" }, // San Miguel Panixtlahuaca
    { id: 20364, territorio: "3,301", toneladas: "2,485" }, // Santa Catarina Juquila
    { id: 20433, territorio: "568", toneladas: "479" }, // Santa María Temaxcaltepec
    { id: 20497, territorio: "904", toneladas: "766" }, // Santiago Yaitepec
    { id: 20526, territorio: "1,520", toneladas: "1,214" }, // Santos Reyes Nopala
  ],
  //28
  "Sierra de Flrores Magón": [
    { id: 20163, territorio: "326", toneladas: "321" }, // San Jerónimo Tecóatl
    { id: 20322, territorio: "412", toneladas: "412" }, // San Pedro Ocopetatillo
    { id: 20019, territorio: "56", toneladas: "52" }, // Concepción Pápalo
    { id: 20024, territorio: "541", toneladas: "48" }, // Cuyamecalco Villa de Zaragoza
    { id: 20027, territorio: "325", toneladas: "319" }, // Chiquihuitlán de Benito Juárez
    { id: 20098, territorio: "817", toneladas: "811" }, // San Andrés Teotilálpam
    { id: 20139, territorio: "312", toneladas: "308" }, // San Francisco Chapulapa
    { id: 20182, territorio: "669", toneladas: "665" }, // San Juan Bautista Tlacoatzintepec
    { id: 20220, territorio: "121", toneladas: "116" }, // San Juan Tepeuxila
    { id: 20326, territorio: "1,223", toneladas: "1,216" }, // San Pedro Sochiápam
    { id: 20330, territorio: "612", toneladas: "607" }, // San Pedro Teutila
    { id: 20355, territorio: "119", toneladas: "110.5" }, // Santa Ana Cuauhtémoc
    { id: 20425, territorio: "45", toneladas: "41" }, // Santa María Pápalo
    { id: 20438, territorio: "127", toneladas: "120" }, // Santa María Tlalixtac
    { id: 20029, territorio: "1,030", toneladas: "1,020" }, // Eloxochitlán de Flores Magón
    { id: 20040, territorio: "865", toneladas: "862" }, // Huautepec
    { id: 20041, territorio: "1,273", toneladas: "1,265" }, // Huautla de Jiménez
    { id: 20058, territorio: "1,186", toneladas: "1,180" }, // Mazatlán Villa de Flores
    { id: 20116, territorio: "626", toneladas: "622" }, // San Bartolomé Ayautla
    { id: 20171, territorio: "3,746", toneladas: "3735" }, // San José Tenango
    { id: 20187, territorio: "838", toneladas: "830" }, // San Juan Coatzóspam
    { id: 20228, territorio: "5", toneladas: "5" }, // San Lorenzo Cuaunecuiltitla
    { id: 20234, territorio: "996", toneladas: "984" }, // San Lucas Zoquiápam
    { id: 20249, territorio: "434", toneladas: "429" }, // San Mateo Yoloxochitlán
    { id: 20354, territorio: "139", toneladas: "136" }, // Santa Ana Ateixtlahuaca
    { id: 20374, territorio: "280", toneladas: "277" }, // Santa Cruz Acatepec
    { id: 20396, territorio: "305", toneladas: "300" }, // Santa María La Asunción
    { id: 20406, territorio: "3,572", toneladas: "3,550" }, // Santa María Chilchotla
  ],
  //18
  Papaloapan: [
    { id: 20166, territorio: "144", toneladas: "104" }, // San José Chiltepec
    { id: 20417, territorio: "917", toneladas: "697" }, // Santa María Jacatepec
    { id: 20559, territorio: "5,133", toneladas: "4,798" }, // San Juan Bautista Valle Nacional
    { id: 20134, territorio: "1,112", toneladas: "842" }, // San Felipe Jalapa de Díaz
    { id: 20136, territorio: "1,887", toneladas: "1,677" }, // San Felipe Usila
    { id: 20232, territorio: "380", toneladas: "255" }, // San Lucas Ojitlán
    { id: 20309, territorio: "718", toneladas: "518" }, // San Pedro Ixcatlán
    { id: 20002, territorio: "404", toneladas: "134" }, // Acatlán de Pérez Figueroa
    { id: 20021, territorio: "650", toneladas: "505" }, // Cosolapa
    { id: 20169, territorio: "275", toneladas: "165" }, // San José Independencia
    { id: 20278, territorio: "62", toneladas: "40" }, // San Miguel Soyaltepec
    { id: 20009, territorio: "405", toneladas: "270" }, // Ayotzintepec
    { id: 20189, territorio: "384", toneladas: "284" }, // San Juan Comaltepec
    { id: 20205, territorio: "1,547", toneladas: "1,357" }, // San Juan Lalana
    { id: 20212, territorio: "451", toneladas: "297" }, // San Juan Petlapa
    { id: 20460, territorio: "770", toneladas: "630" }, // Santiago Choápam
    { id: 20468, territorio: "615", toneladas: "535" }, // Santiago Jocotepec
    { id: 20498, territorio: "502", toneladas: "480" }, // Santiago Yaveo
  ],
  //9
  Istmo: [
    { id: 20057, territorio: "2,300", toneladas: "1,750" }, // Matías Romero Avendaño
    { id: 20198, territorio: "3,120", toneladas: "2,500" }, // San Juan Guichicovi
    { id: 20407, territorio: "4,800", toneladas: "4,000" }, // Santa María Chimalapa
    { id: 20513, territorio: "2,150", toneladas: "1,850" }, // Santo Domingo Petapa
    { id: 20036, territorio: "1,300", toneladas: "900" }, // Guevea de Humboldt
    { id: 20412, territorio: "2,900", toneladas: "2,100" }, // Santa María Guienagati
    { id: 20470, territorio: "1,200", toneladas: "900" }, // Santiago Lachiguiri
    { id: 20472, territorio: "850", toneladas: "700" }, // Santiago Laollaga
    { id: 20515, territorio: "1,800", toneladas: "1,500" }, // Santo Domingo Tehuantepec
  ],
  //3
  Mixteca: [
    { id: 20397, territorio: "19", toneladas: "19" }, // Heroica Ciudad de Tlaxiaco
    { id: 20446, territorio: "594", toneladas: "582" }, // Santa María Yucuhiti
    { id: 20481, territorio: "1,008", toneladas: "1006" }, // Santiago Nuyoó
  ],
};

const estados_datos_pro = [
  //14
  {
    id: "CHS",
    territorio: "243,947",
    toneladas: "391,957",
  },
  {
    id: "VER",
    territorio: "142,779",
    toneladas: "253,781",
  },
  {
    id: "PUE",
    territorio: "71,755",
    toneladas: "223,603",
  },
  {
    id: "OAX",
    territorio: "133,134",
    toneladas: "87,694",
  },
  {
    id: "GRO",
    territorio: " 45,564",
    toneladas: "38,668",
  },
  {
    id: "HGO",
    territorio: "22,578",
    toneladas: "29,014",
  },
  {
    id: "NAY",
    territorio: "16,064",
    toneladas: "13,288",
  },
  {
    id: "SLP",
    territorio: "16,148",
    toneladas: "11,382",
  },
  {
    id: "JAL",
    territorio: "3,520",
    toneladas: "4,940",
  },
  {
    id: "COL",
    territorio: "2,904",
    toneladas: "3,533",
  },
  {
    id: "EM",
    territorio: "531",
    toneladas: "478",
  },
  {
    id: "TAB",
    territorio: "358",
    toneladas: "430",
  },
  {
    id: "QRO",
    territorio: "199",
    toneladas: "60",
  },
  {
    id: "MOR",
    territorio: "25",
    toneladas: "35",
  },
];

const paises_datos_pro = [
  {
    id: "BRA",
    territorio: "1,872,511",
  },
  {
    id: "IDN",
    territorio: "1,285,778",
  },
  {
    id: "COL",
    territorio: "842,399",
  },
  {
    id: "CAF",
    territorio: "761,111",
  },
  {
    id: "ETH",
    territorio: "741,850",
  },
  {
    id: "UGA",
    territorio: "727,154",
  },
  {
    id: "GIN",
    territorio: "663,850",
  },
  {
    id: "VNM",
    territorio: "655,921",
  },
  {
    id: "MEX",
    territorio: "646,804",
  },
  {
    id: "CIV",
    territorio: "539,000",
  },
  {
    id: "IND",
    territorio: "438,145",
  },
  {
    id: "PER",
    territorio: "423,854",
  },
  {
    id: "GTM",
    territorio: "366,865",
  },
  {
    id: "TZA",
    territorio: "263,627",
  },
  {
    id: "HND",
    territorio: "258,326",
  },
];

/* DATOS DE LA TABLA Producción mundial de café (2022) */
const tab_pro_mundial = [
  { ranking: 1, pais: "Brasil", superficie: 1872511 },
  { ranking: 2, pais: "Indonesia", superficie: 1285778 },
  { ranking: 3, pais: "Colombia", superficie: 842399 },
  { ranking: 4, pais: "República Centroafricana", superficie: 761111 },
  { ranking: 5, pais: "Etiopía", superficie: 741850 },
  { ranking: 6, pais: "Uganda", superficie: 727154 },
  { ranking: 7, pais: "Guinea", superficie: 663850 },
  { ranking: 8, pais: "Viet Nam", superficie: 655921 },
  { ranking: 9, pais: "México", superficie: 646804 },
  { ranking: 10, pais: "Costa de Marfil", superficie: 539000 },
  { ranking: 11, pais: "India", superficie: 438145 },
  { ranking: 12, pais: "Perú", superficie: 423854 },
  { ranking: 13, pais: "Guatemala", superficie: 366865 },
  { ranking: 14, pais: "República Unida de Tanzanía", superficie: 263627 },
  { ranking: 15, pais: "Honduras", superficie: 258326 },
  { ranking: "", pais: "Otros", superficie: 1751 },
];

/* DATOS DE LA TABLA Producción mundial de café (2022) */
const tab_pro_nacional = [

  {
    ranking: 1,
    entidad: "Chiapas",
    volumen: 391957,
    superficie: 243947,
    rendimiento: 1.69,
    valor: 2116042814,
  },
  {
    ranking: 2,
    entidad: "Veracruz",
    volumen: 253781,
    superficie: 142779,
    rendimiento: 1.89,
    valor: 1950750149,
  },
  {
    ranking: 3,
    entidad: "Puebla",
    volumen: 223603,
    superficie: 71755,
    rendimiento: 3.15,
    valor: 1717853590,
  },
  {
    ranking: 4,
    entidad: "Oaxaca",
    volumen: 87694,
    superficie: 133134,
    rendimiento: 0.8,
    valor: 527209015,
  },
  {
    ranking: 5,
    entidad: "Guerrero",
    volumen: 38668,
    superficie: 45564,
    rendimiento: 0.91,
    valor: 290640718,
  },
  {
    ranking: 6,
    entidad: "Hidalgo",
    volumen: 29014,
    superficie: 22578,
    rendimiento: 1.16,
    valor: 180190041,
  },
  {
    ranking: 7,
    entidad: "Nayarit",
    volumen: 13288,
    superficie: 16064,
    rendimiento: 0.97,
    valor: 156700002,
  },
  {
    ranking: 8,
    entidad: "San Luis Potosí",
    volumen: 11382,
    superficie: 16148,
    rendimiento: 0.68,
    valor: 110220922,
  },
  {
    ranking: 9,
    entidad: "Jalisco",
    volumen: 4940,
    superficie: 3520,
    rendimiento: 1.46,
    valor: 31487434,
  },
  {
    ranking: 10,
    entidad: "Colima",
    volumen: 3533,
    superficie: 2904,
    rendimiento: 1.25,
    valor: 33881637,
  },
  {
    ranking: 11,
    entidad: "México",
    volumen: 478,
    superficie: 531,
    rendimiento: 1.07,
    valor: 3324076,
  },
  {
    ranking: 12,
    entidad: "Tabasco",
    volumen: 430,
    superficie: 358,
    rendimiento: 1.1,
    valor: 3336435,
  },
  {
    ranking: 13,
    entidad: "Querétaro",
    volumen: 60,
    superficie: 199,
    rendimiento: 0.3,
    valo: 689535,
  },
  {
    ranking: 14,
    entidad: "Morelos",
    volumen: 35,
    superficie: 25,
    rendimiento: 1.48,
    valo: 172104,
  },
];

/* Datos de la grafica balanza  */
/* Etiquetas para el periodo de tiempo usado en la grafica de balanza nacional */
const labels_balanza = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
];
/* Importaciones que del sector porcino */
const importacion_balanza = [
  20000, 22000, 24000, 40000, 60000, 80000, 70000, 60000, 50000, 45000, 40000,
  36000, 32627,
];

/* Exportaciones del sector porcino */
const exportacion_balanza = [
  120000, 140000, 180000, 160000, 130000, 110000, 120000, 125000, 130000,
  128000, 123000, 137310, 137310,
];

/* DATOS DE LA TABLA DESTINO DE LA EXPORTACIÓN 2023 POR PAÍS */
const tab_destino_exportacion = [
  { num: 1, pais: "Estados Unidos", valor: 295137249 },
  { num: 2, pais: "Bélgica", valor: 21650554 },
  { num: 3, pais: "Canada", valor: 20832692 },
  { num: 4, pais: "Alemania", valor: 14331788 },
  { num: 5, pais: "Japón", valor: 6907935 },
  { num: 6, pais: "Italia", valor: 6565001 },
  { num: 7, pais: " Reino Unido", valor: 6538246 },
  { num: 8, pais: "Francia", valor: 5001442 },
  { num: 9, pais: "España", valor: 3188523 },
  { num: 10, pais: "Paises Bajos", valor: 2095466 },
  { num: 11, pais: "Suiza", valor: 1488726 },
  { num: 12, pais: " Nueva Zelanda", valor: 1437270 },
  { num: 13, pais: "Finlandia", valor: 1286959 },
  { num: 14, pais: "Corea del Sur", valor: 920913 },
  { num: 15, pais: "Rusia", valor: 649617 },
];

/* Datos grafica de la produccion historica */
/* etiquetas de tiempo  */
const labels_historica_producto = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  2023,
];

/* Valores de la produccion por region */
const produccion_historica_producto = [
  {
    nom: "Sierra de Flores Magón",
    fila: [
      35391.83, 37692.23, 21149.6, 19336.88, 17121.99, 11555.92, 15063.49,
      13911.05, 15560.87, 15637.39, 15855.39, 15991.31, 15234.53, 15960.83,
    ],
  },
  {
    nom: "Costa",
    fila: [
      13228.8, 13059.75, 19872.85, 24235.65, 19302.01, 13328.78, 7119.59,
      6762.61, 8274.85, 10069.05, 12606.63, 14112.14, 15416.59, 15413.4,
    ],
  },
  {
    nom: "Istmo",
    fila: [
      21076.69, 23002.99, 14277.82, 12723.94, 12226.66, 8010.87, 6061.85,
      6306.28, 6568.42, 6914.76, 6163.92, 6974.43, 7105.73, 7566.48,
    ],
  },
  {
    nom: "Mixteca",
    fila: [
      2500, 2813, 2855, 2636.7, 1864.9, 1408.2, 1429, 1273.9, 1327, 1373.5,
      1330.96, 1346.82, 1400.46, 1322.07,
    ],
  },
  {
    nom: "Papaloapan",
    fila: [
      30524.92, 28460.38, 20778.75, 21378.75, 20995.65, 13990.4, 9781.84,
      8469.68, 8850.32, 10180.19, 13399.09, 12790.91, 14353.25, 12990.93,
    ],
  },
  {
    nom: "Sierra Norte",
    fila: [
      38132.13, 36901.87, 23626.16, 29813.48, 37988.44, 18457.23, 16562.53,
      19033.34, 18957.68, 19673.7, 21362.23, 20004.61, 19956.88, 19089.53,
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [
      13741.02, 15010.87, 14879.64, 19630.61, 20281.54, 15761.16, 10432.89,
      10331.84, 10914.87, 11980.64, 14963.04, 14683.47, 15609.62, 15350.76,
    ],
  },
];

/* DATO DE LA TABLA PRODUCCION  DE CAFÉ EN OAXACA	 */
const tabla_produccion_producto = [
  {
    region: "Sierra de Juárez",
    volumen: 19090,
    superficie: 20068,
    rendimiento: 0.93,
    valor: 126907542,
    cantidad: 35,
  },
  {
    region: "Sierra de Flores Magón",
    volumen: 15961,
    superficie: 20329,
    rendimiento: 0.8,
    valor: 91639105,
    cantidad: 28,
  },
  {
    region: "Costa",
    volumen: 15413,
    superficie: 48011,
    rendimiento: 0.45,
    valor: 96463429,
    cantidad: 34,
  },
  {
    region: "Sierra Sur",
    volumen: 15351,
    superficie: 15216,
    rendimiento: 1.07,
    valor: 92386893,
    cantidad: 24,
  },
  {
    region: "Papaloapan",
    volumen: 12991,
    superficie: 16356,
    rendimiento: 0.95,
    valor: 70259196,
    cantidad: 18,
  },
  {
    region: "Istmo",
    volumen: 7566,
    superficie: 11535,
    rendimiento: 0.66,
    valor: 41073587,
    cantidad: 9,
  },
  {
    region: "Mixteca",
    volumen: 1322,
    superficie: 1621,
    rendimiento: 0.83,
    valor: 8479263,
    cantidad: 3,
  },
];

/* Datos grafica VOLUMEN DE PRODUCCION POR PUEBLO INDIGENA AGAVE */
const pub_indigenas_producto = [
  [
    "NO PUEBLO INDIGENA",
    "Zapoteco",
    "Mixe",
    "Mazateco",
    "Chinanteco",
    "Mixteco",
    "Chatino",
    "Cuicateco",
    "Nahua",
    "Chontal De Oaxaca",
    "Triqui",
  ],
  [8748, 23918, 14739, 14058, 13002, 7633, 3850, 898, 485, 337, 26],
];

/* Datos grafica Estacionalidad de cafe en Oaxaca */
const estacionalidad_producto = [232, 197, 23, 24, 0, 0, 0, 0, 0, 0, 112, 350];

/* Datos Tabla MUNICIPIOS QUE PRODUCEN DE CAFÉ EN OAXACA */
const tab_mun_producto_oax = [
  { nom: "Sierra de Juárez", num: 35 },
  { nom: "Sierra Sur", num: 24 },
  { nom: "Costa", num: 23 },
  { nom: "Sierra de Flores Magón", num: 28 },
  { nom: "Papaloapan", num: 18 },
  { nom: "Istmo", num: 9 },
  { nom: "Mixteca", num: 3 },
];
