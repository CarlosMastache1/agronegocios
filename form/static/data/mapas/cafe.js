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

const estadosDatos = {
  //14
  Chiapas: [
    {
      id: 7,
      territorio: "243,947",
      toneladas: "391,957",
    },
  ],
  Veracruz: [
    {
      id: 30,
      territorio: "142,779",
      toneladas: "253,781",
    },
  ],
  Puebla: [
    {
      id: 21,
      territorio: "71,755",
      toneladas: "223,603",
    },
  ],
  Oaxaca: [
    {
      id: 20,
      territorio: "133,134",
      toneladas: "87,694",
    },
  ],
  Guerrero: [
    {
      id: 12,
      territorio: " 45,564",
      toneladas: "38,668",
    },
  ],
  Hidalgo: [
    {
      id: 13,
      territorio: "22,578",
      toneladas: "29,014",
    },
  ],
  Nayarit: [
    {
      id: 18,
      territorio: "16,064",
      toneladas: "13,288",
    },
  ],
  "San Luis Potosí": [
    {
      id: 24,
      territorio: "16,148",
      toneladas: "11,382",
    },
  ],
  Jalisco: [
    {
      id: 14,
      territorio: "3,520",
      toneladas: "4,940",
    },
  ],
  Colima: [
    {
      id: 6,
      territorio: "2,904",
      toneladas: "3,533",
    },
  ],
  "México": [
    {
      id: 15,
      territorio: "531",
      toneladas: "478",
    },
  ],
  Tabasco: [
    {
      id: 27,
      territorio: "358",
      toneladas: "430",
    },
  ],
  "Querétaro": [
    {
      id: 22,
      territorio: "199",
      toneladas: "60",
    },
  ],
  Morelos: [
    {
      id: 17,
      territorio: "25",
      toneladas: "35",
    },
  ],
};

const paisesDatos = {
  //15
  Brasil: [
    {
      id: "BRA",
      territorio: "1,872,511",
    },
  ],
  Indonesia: [
    {
      id: "IDN",
      territorio: "1,285,778",
    },
  ],
  Colombia: [
    {
      id: "COL",
      territorio: "842,399",
    },
  ],
  "República Centroafricana": [
    {
      id: "CAF",
      territorio: "761,111",
    },
  ],
  "Etiopía": [
    {
      id: "ETH",
      territorio: "741,850",
    },
  ],
  Uganda: [
    {
      id: "UGA",
      territorio: "727,154",
    },
  ],
  Guinea: [
    {
      id: "GIN",
      territorio: "663,850",
    },
  ],
  "Viet Nam": [
    {
      id: "VNM",
      territorio: "655,921",
    },
  ],
  "México": [
    {
      id: "MEX",
      territorio: "646,804",
    },
  ],
  "Costa de Marfil": [
    {
      id: "CIV",
      territorio: "539,000",
    },
  ],
  India: [
    {
      id: "IND",
      territorio: "438,145",
    },
  ],
  "Perú": [
    {
      id: "PER",
      territorio: "423,854",
    },
  ],
  Guatemala: [
    {
      id: "GTM",
      territorio: "366,865",
    },
  ],
  "República Unida de Tanzanía": [
    {
      id: "TZA",
      territorio: "263,627",
    },
  ],
  Honduras: [
    {
      id: "HND",
      territorio: "258,326",
    },
  ],
};
