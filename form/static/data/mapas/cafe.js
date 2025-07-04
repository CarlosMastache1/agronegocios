//Revisar Datos
const regionesConMunicipios = {
  //151
  //35
  "Sierra de Juárez": [
    { id: 20207, superficie: "1,060", volumen: "1,054" }, // San Juan Mazatlán
    { id: 20465, superficie: "515", volumen: "510" }, // Santiago Ixcuintepec
    { id: 20042, superficie: "1,467", volumen: "1,237" }, // Ixtlán de Juárez
    { id: 20214, superficie: "101", volumen: "101" }, // San Juan Quiotepec
    { id: 20288, superficie: "195", volumen: "170" }, // San Miguel Yotao
    { id: 20335, superficie: "282", volumen: "269" }, // San Pedro Yaneri
    { id: 20336, superficie: "221", volumen: "221" }, // San Pedro Yólox
    { id: 20458, superficie: "241", volumen: "241" }, // Santiago Comaltepec
    { id: 20097, superficie: "101", volumen: "98" }, // San Andrés Solaga
    { id: 20100, superficie: "73", volumen: "73" }, // San Andrés Yaá
    { id: 20128, superficie: "158", volumen: "158" }, // San Cristóbal Lachirioag
    { id: 20156, superficie: "669", volumen: "659" }, // San Ildefonso Villa Alta
    { id: 20201, superficie: "358", volumen: "353" }, // San Juan Juquila Vijanos
    { id: 20216, superficie: "92", volumen: "90" }, // San Juan Tabaá
    { id: 20222, superficie: "371", volumen: "362" }, // San Juan Yaeé
    { id: 20223, superficie: "206", volumen: "206" }, // San Juan Yatzona
    { id: 20257, superficie: "65", volumen: "65" }, // San Melchor Betaza
    { id: 20280, superficie: "632", volumen: "627" }, // Villa Talea de Castro
    { id: 20433, superficie: "568", volumen: "479" }, // Santa María Temaxcaltepec
    { id: 20457, superficie: "686", volumen: "680" }, // Santiago Camotlán
    { id: 20471, superficie: "99", volumen: "99" }, // Santiago Lalopa
    { id: 20514, superficie: "153", volumen: "153" }, // Santo Domingo Roayaga
    { id: 20541, superficie: "637", volumen: "625" }, // Tanetze de Zaragoza
    { id: 20003, superficie: "524", volumen: "520" }, // Asunción Cacalotepec
    { id: 20031, superficie: "42", volumen: "42" }, // Tamazulápam del Espíritu Santo
    { id: 20200, superficie: "432", volumen: "432" }, // San Juan Juquila Mixes
    { id: 20231, superficie: "821", volumen: "771" }, // San Lucas Camotlán
    { id: 20275, superficie: "2,092", volumen: "2,082" }, // San Miguel Quetzaltepec
    { id: 20323, superficie: "412", volumen: "412" }, // San Pedro Ocotepec
    { id: 20394, superficie: "1,040", volumen: "1,034" }, // Santa María Alotepec
    { id: 20435, superficie: "214", volumen: "214" }, // Santa María Tepantlali
    { id: 20454, superficie: "798", volumen: "795" }, // Santiago Atitlán
    { id: 20502, superficie: "1,254", volumen: "1,247" }, // Santiago Zacatepec
    { id: 20554, superficie: "444", volumen: "440" }, // Totontepec Villa de Morelos
    { id: 20190, superficie: "3,335", volumen: "3,188" }, // San Juan Cotzocón
  ],
  //24
  "Sierra Sur": [
    { id: 20020, superficie: "33", volumen: "33" }, // Constancia del Rosario
    { id: 20073, superficie: "2,204", volumen: "2,191" }, // Putla Villa de Guerrero
    { id: 20076, superficie: "908", volumen: "897" }, // La Reforma
    { id: 20088, superficie: "414", volumen: "413" }, // San Andrés Cabecera Nueva
    { id: 20377, superficie: "280", volumen: "277" }, // Santa Cruz Itundujia
    { id: 20392, superficie: "951", volumen: "941" }, // Santa Lucía Monteverde
    { id: 20447, superficie: "1,238", volumen: "1,230" }, // Santa María Zacatepec
    { id: 20148, superficie: "128", volumen: "125" }, // San Francisco Ozolotepec
    { id: 20159, superficie: "988", volumen: "984" }, // San Jerónimo Coatlán
    { id: 20211, superficie: "368", volumen: "364" }, // San Juan Ozolotepec
    { id: 20236, superficie: "141", volumen: "140" }, // San Marcial Ozolotepec
    { id: 20254, superficie: "233", volumen: "231" }, // San Mateo Río Hondo
    { id: 20291, superficie: "484", volumen: "482" }, // San Pablo Coatlán
    { id: 20344, superficie: "853", volumen: "850" }, // San Sebastián Coatlán
    { id: 20424, superficie: "1,175", volumen: "1,173" }, // Santa María Ozolotepec
    { id: 20495, superficie: "2,172", volumen: "2,164" }, // Santiago Xanica
    { id: 20137, superficie: "82", volumen: "79" }, // San Francisco Cahuacuá
    { id: 20229, superficie: "101", volumen: "99" }, // San Lorenzo Texmelúcan
    { id: 20448, superficie: "189", volumen: "182" }, // Santa María Zaniza
    { id: 20516, superficie: "220", volumen: "216" }, // Santo Domingo Teojomulco
    { id: 20008, superficie: "19", volumen: "19" }, // Asunción Tlacolulita
    { id: 20064, superficie: "450", volumen: "450" }, // Nejapa de Madero
    { id: 20125, superficie: "523", volumen: "523" }, // San Carlos Yautepec
    { id: 20410, superficie: "30", volumen: "30" }, // Santa María Ecatepec
  ],
  //34
  Costa: [
    { id: 20070, superficie: "28", volumen: "26" }, // Pinotepa de Don Luis
    { id: 20082, superficie: "804", volumen: "802" }, // San Agustín Chayuco
    { id: 20111, superficie: "18", volumen: "16" }, // San Antonio Tepetlapa
    { id: 20185, superficie: "52", volumen: "51" }, // San Juan Cacahuatepec
    { id: 20188, superficie: "288", volumen: "287" }, // San Juan Colorado
    { id: 20225, superficie: "63", volumen: "61" }, // San Lorenzo
    { id: 20302, superficie: "102", volumen: "102" }, // San Pedro Atoyac
    { id: 20367, superficie: "34", volumen: "34" }, // Santa Catarina Mechoacán
    { id: 20466, superficie: "354", volumen: "353" }, // Santiago Ixtayutla
    { id: 20467, superficie: "702", volumen: "702" }, // Santiago Jamiltepec
    { id: 20489, superficie: "49", volumen: "47.5" }, // Santiago Tetepec
    { id: 20319, superficie: "183", volumen: "181" }, // San Pedro Mixtepec
    { id: 20334, superficie: "2,123", volumen: "2,116" }, // Villa de Tututepec de Melchor Ocampo
    { id: 20439, superficie: "305", volumen: "300" }, // Santa María Tonameca
    { id: 20543, superficie: "454", volumen: "451" }, // Tataltepec de Valdés
    { id: 20012, superficie: "4,473", volumen: "2,672" }, // Candelaria Loxicha
    { id: 20071, superficie: "4,815", volumen: "3,225" }, // Pluma Hidalgo
    { id: 20085, superficie: "5,782", volumen: "3,945" }, // San Agustín Loxicha
    { id: 20113, superficie: "471", volumen: "414" }, // San Baltazar Loxicha
    { id: 20117, superficie: "761", volumen: "568" }, // San Bartolomé Loxicha
    { id: 20253, superficie: "3,755", volumen: "2,305" }, // San Mateo Piñas
    { id: 20266, superficie: "3,663", volumen: "2,285" }, // San Miguel del Puerto
    { id: 20306, superficie: "279", volumen: "157" }, // San Pedro El Alto
    { id: 20324, superficie: "3,488", volumen: "1,881" }, // San Pedro Pochutla
    { id: 20366, superficie: "310", volumen: "239" }, // Santa Catarina Loxicha
    { id: 20413, superficie: "1,422", volumen: "723" }, // Santa María Huatulco
    { id: 20153, superficie: "2,382", volumen: "1,473" }, // San Gabriel Mixtepec
    { id: 20202, superficie: "2,299", volumen: "1,432" }, // San Juan Lachao
    { id: 20213, superficie: "251", volumen: "201" }, // San Juan Quiahije
    { id: 20272, superficie: "2,016", volumen: "1,504" }, // San Miguel Panixtlahuaca
    { id: 20364, superficie: "3,301", volumen: "2,485" }, // Santa Catarina Juquila
    { id: 20433, superficie: "568", volumen: "479" }, // Santa María Temaxcaltepec
    { id: 20497, superficie: "904", volumen: "766" }, // Santiago Yaitepec
    { id: 20526, superficie: "1,520", volumen: "1,214" }, // Santos Reyes Nopala
  ],
  //28
  "Sierra de Flrores Magón": [
    { id: 20163, superficie: "326", volumen: "321" }, // San Jerónimo Tecóatl
    { id: 20322, superficie: "412", volumen: "412" }, // San Pedro Ocopetatillo
    { id: 20019, superficie: "56", volumen: "52" }, // Concepción Pápalo
    { id: 20024, superficie: "541", volumen: "48" }, // Cuyamecalco Villa de Zaragoza
    { id: 20027, superficie: "325", volumen: "319" }, // Chiquihuitlán de Benito Juárez
    { id: 20098, superficie: "817", volumen: "811" }, // San Andrés Teotilálpam
    { id: 20139, superficie: "312", volumen: "308" }, // San Francisco Chapulapa
    { id: 20182, superficie: "669", volumen: "665" }, // San Juan Bautista Tlacoatzintepec
    { id: 20220, superficie: "121", volumen: "116" }, // San Juan Tepeuxila
    { id: 20326, superficie: "1,223", volumen: "1,216" }, // San Pedro Sochiápam
    { id: 20330, superficie: "612", volumen: "607" }, // San Pedro Teutila
    { id: 20355, superficie: "119", volumen: "110.5" }, // Santa Ana Cuauhtémoc
    { id: 20425, superficie: "45", volumen: "41" }, // Santa María Pápalo
    { id: 20438, superficie: "127", volumen: "120" }, // Santa María Tlalixtac
    { id: 20029, superficie: "1,030", volumen: "1,020" }, // Eloxochitlán de Flores Magón
    { id: 20040, superficie: "865", volumen: "862" }, // Huautepec
    { id: 20041, superficie: "1,273", volumen: "1,265" }, // Huautla de Jiménez
    { id: 20058, superficie: "1,186", volumen: "1,180" }, // Mazatlán Villa de Flores
    { id: 20116, superficie: "626", volumen: "622" }, // San Bartolomé Ayautla
    { id: 20171, superficie: "3,746", volumen: "3735" }, // San José Tenango
    { id: 20187, superficie: "838", volumen: "830" }, // San Juan Coatzóspam
    { id: 20228, superficie: "5", volumen: "5" }, // San Lorenzo Cuaunecuiltitla
    { id: 20234, superficie: "996", volumen: "984" }, // San Lucas Zoquiápam
    { id: 20249, superficie: "434", volumen: "429" }, // San Mateo Yoloxochitlán
    { id: 20354, superficie: "139", volumen: "136" }, // Santa Ana Ateixtlahuaca
    { id: 20374, superficie: "280", volumen: "277" }, // Santa Cruz Acatepec
    { id: 20396, superficie: "305", volumen: "300" }, // Santa María La Asunción
    { id: 20406, superficie: "3,572", volumen: "3,550" }, // Santa María Chilchotla
  ],
  //18
  Papaloapan: [
    { id: 20166, superficie: "144", volumen: "104" }, // San José Chiltepec
    { id: 20417, superficie: "917", volumen: "697" }, // Santa María Jacatepec
    { id: 20559, superficie: "5,133", volumen: "4,798" }, // San Juan Bautista Valle Nacional
    { id: 20134, superficie: "1,112", volumen: "842" }, // San Felipe Jalapa de Díaz
    { id: 20136, superficie: "1,887", volumen: "1,677" }, // San Felipe Usila
    { id: 20232, superficie: "380", volumen: "255" }, // San Lucas Ojitlán
    { id: 20309, superficie: "718", volumen: "518" }, // San Pedro Ixcatlán
    { id: 20002, superficie: "404", volumen: "134" }, // Acatlán de Pérez Figueroa
    { id: 20021, superficie: "650", volumen: "505" }, // Cosolapa
    { id: 20169, superficie: "275", volumen: "165" }, // San José Independencia
    { id: 20278, superficie: "62", volumen: "40" }, // San Miguel Soyaltepec
    { id: 20009, superficie: "405", volumen: "270" }, // Ayotzintepec
    { id: 20189, superficie: "384", volumen: "284" }, // San Juan Comaltepec
    { id: 20205, superficie: "1,547", volumen: "1,357" }, // San Juan Lalana
    { id: 20212, superficie: "451", volumen: "297" }, // San Juan Petlapa
    { id: 20460, superficie: "770", volumen: "630" }, // Santiago Choápam
    { id: 20468, superficie: "615", volumen: "535" }, // Santiago Jocotepec
    { id: 20498, superficie: "502", volumen: "480" }, // Santiago Yaveo
  ],
  //9
  Istmo: [
    { id: 20057, superficie: "2,300", volumen: "1,750" }, // Matías Romero Avendaño
    { id: 20198, superficie: "3,120", volumen: "2,500" }, // San Juan Guichicovi
    { id: 20407, superficie: "4,800", volumen: "4,000" }, // Santa María Chimalapa
    { id: 20513, superficie: "2,150", volumen: "1,850" }, // Santo Domingo Petapa
    { id: 20036, superficie: "1,300", volumen: "900" }, // Guevea de Humboldt
    { id: 20412, superficie: "2,900", volumen: "2,100" }, // Santa María Guienagati
    { id: 20470, superficie: "1,200", volumen: "900" }, // Santiago Lachiguiri
    { id: 20472, superficie: "850", volumen: "700" }, // Santiago Laollaga
    { id: 20515, superficie: "1,800", volumen: "1,500" }, // Santo Domingo Tehuantepec
  ],
  //3
  Mixteca: [
    { id: 20397, superficie: "19", volumen: "19" }, // Heroica Ciudad de Tlaxiaco
    { id: 20446, superficie: "594", volumen: "582" }, // Santa María Yucuhiti
    { id: 20481, superficie: "1,008", volumen: "1006" }, // Santiago Nuyoó
  ],
};

const estadosDatos = {
  //14
  Chiapas: [
    {
      id: 7,
      superficie: "243,947",
      volumen: "391,957",
    },
  ],
  Veracruz: [
    {
      id: 30,
      superficie: "142,779",
      volumen: "253,781",
    },
  ],
  Puebla: [
    {
      id: 21,
      superficie: "71,755",
      volumen: "223,603",
    },
  ],
  Oaxaca: [
    {
      id: 20,
      superficie: "133,134",
      volumen: "87,694",
    },
  ],
  Guerrero: [
    {
      id: 12,
      superficie: " 45,564",
      volumen: "38,668",
    },
  ],
  Hidalgo: [
    {
      id: 13,
      superficie: "22,578",
      volumen: "29,014",
    },
  ],
  Nayarit: [
    {
      id: 18,
      superficie: "16,064",
      volumen: "13,288",
    },
  ],
  "San Luis Potosí": [
    {
      id: 24,
      superficie: "16,148",
      volumen: "11,382",
    },
  ],
  Jalisco: [
    {
      id: 14,
      superficie: "3,520",
      volumen: "4,940",
    },
  ],
  Colima: [
    {
      id: 6,
      superficie: "2,904",
      volumen: "3,533",
    },
  ],
  "México": [
    {
      id: 15,
      superficie: "531",
      volumen: "478",
    },
  ],
  Tabasco: [
    {
      id: 27,
      superficie: "358",
      volumen: "430",
    },
  ],
  "Querétaro": [
    {
      id: 22,
      superficie: "199",
      volumen: "60",
    },
  ],
  Morelos: [
    {
      id: 17,
      superficie: "25",
      volumen: "35",
    },
  ],
};

const paisesDatos = {
  //15
  Brasil: [
    {
      id: "BRA",
      superficie: "1,872,511",
    },
  ],
  Indonesia: [
    {
      id: "IDN",
      superficie: "1,285,778",
    },
  ],
  Colombia: [
    {
      id: "COL",
      superficie: "842,399",
    },
  ],
  "República Centroafricana": [
    {
      id: "CAF",
      superficie: "761,111",
    },
  ],
  "Etiopía": [
    {
      id: "ETH",
      superficie: "741,850",
    },
  ],
  Uganda: [
    {
      id: "UGA",
      superficie: "727,154",
    },
  ],
  Guinea: [
    {
      id: "GIN",
      superficie: "663,850",
    },
  ],
  "Viet Nam": [
    {
      id: "VNM",
      superficie: "655,921",
    },
  ],
  "México": [
    {
      id: "MEX",
      superficie: "646,804",
    },
  ],
  "Costa de Marfil": [
    {
      id: "CIV",
      superficie: "539,000",
    },
  ],
  India: [
    {
      id: "IND",
      superficie: "438,145",
    },
  ],
  "Perú": [
    {
      id: "PER",
      superficie: "423,854",
    },
  ],
  Guatemala: [
    {
      id: "GTM",
      superficie: "366,865",
    },
  ],
  "República Unida de Tanzanía": [
    {
      id: "TZA",
      superficie: "263,627",
    },
  ],
  Honduras: [
    {
      id: "HND",
      superficie: "258,326",
    },
  ],
};
