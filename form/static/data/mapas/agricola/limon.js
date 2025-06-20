const regionesConMunicipios = {
  //55
  "Sierra de Flores Magón": [//7
    { id: 20206, territorio: "360", toneladas: "2,797" }, // "San Juan de Los Cués"
    { id: 20244, territorio: "353", toneladas: "2,499" }, // "San Martín Toxpalan"
    { id: 20431, territorio: "415", toneladas: "2,975" }, // "Santa María Tecomavaca"
    { id: 20545, territorio: "190", toneladas: "988" }, // "Teotitlán de Flores Magón"
    { id: 20027, territorio: "387", toneladas: "2,409" }, // "Chiquihuitlán de Benito Juárez"
    { id: 20177, territorio: "339", toneladas: "2,340" }, // "San Juan Bautista Cuicatlán"
    { id: 20558, territorio: "59", toneladas: "350" }, // "Valerio Trujano"
  ],
  Costa: [    //6
    { id: 20090, territorio: "28", toneladas: "397" }, // "San Andrés Huaxpaltepec"
    { id: 20414, territorio: "68", toneladas: "817" }, // "Santa María Huazolotitlán"
    { id: 20467, territorio: "574", toneladas: "8,119" }, // "Santiago Jamiltepec"
    { id: 20482, territorio: "261", toneladas: "3,260" }, // "Santiago Pinotepa Nacional"
    { id: 20319, territorio: "35", toneladas: "474" }, // "San Pedro Mixtepec"
    { id: 20334, territorio: "3,599", toneladas: "57,282" }, // "Villa de Tututepec de Melchor Ocampo"
  ],
  Istmo: [ //15
    { id: 20025, territorio: "17", toneladas: "159" }, // "Chahuites"
    { id: 20075, territorio: "6", toneladas: "19" }, // "Reforma de Pineda"
    { id: 20143, territorio: "27", toneladas: "136" }, // "San Francisco Ixhuatán"
    { id: 20327, territorio: "61", toneladas: "536" }, // "San Pedro Tapanatepec"
    { id: 20525, territorio: "33", toneladas: "264" }, // "Santo Domingo Zanatepec"
    { id: 20057, territorio: "347", toneladas: "4,959" }, // "Matías Romero Avendaño"
    { id: 20198, territorio: "99", toneladas: "1,458" }, // "San Juan Guichicovi"
    { id: 20030, territorio: "3", toneladas: "21" }, // "El Espinal"
    { id: 20053, territorio: "4", toneladas: "31" }, // "Magdalena Tlacotepec"
    { id: 20124, territorio: "6", toneladas: "58" }, // "San Blas Atempa"
    { id: 20418, territorio: "40", toneladas: "362" }, // "Santa María Jalapa del Marqués"
    { id: 20472, territorio: "9", toneladas: "81" }, // "Santiago Laollaga"
    { id: 20508, territorio: "8", toneladas: "67" }, // "Santo Domingo Chihuitán"
    { id: 20515, territorio: "9", toneladas: "83" }, // "Santo Domingo Tehuantepec"
    { id: 20052, territorio: "131", toneladas: "1,615" }, // "Magdalena Tequisistlán"
  ],
  Mixteca: [ //8
    { id: 20039, territorio: "5", toneladas: "54" }, // "Heroica Ciudad de Huajuapan de León"
    { id: 20081, territorio: "2", toneladas: "19" }, // "San Agustín Atenango"
    { id: 20237, territorio: "1", toneladas: "10" }, // "San Marcos Arteaga"
    { id: 20462, territorio: "4", toneladas: "29" }, // "Santiago Huajolotitlán"
    { id: 20469, territorio: "4", toneladas: "33" }, // "Santiago Juxtlahuaca"
    { id: 20520, territorio: "3", toneladas: "32" }, // "Santo Domingo Tonalá"
    { id: 20537, territorio: "7", toneladas: "73" }, // "Silacayoápam"
    { id: 20549, territorio: "10", toneladas: "89" }, // "Heroica Villa Tezoatlán de Segura y Luna, Cuna de la Independencia de Oaxaca"
  ],
  Papaloapan: [ //6
    { id: 20044, territorio: "30", toneladas: "360" }, // "Loma Bonita"
    { id: 20184, territorio: "931", toneladas: "13,702" }, // "San Juan Bautista Tuxtepec"
    { id: 20232, territorio: "16", toneladas: "141" }, // "San Lucas Ojitlán"
    { id: 20002, territorio: "1,044", toneladas: "14,154" }, // "Acatlán de Pérez Figueroa"
    { id: 20278, territorio: "510", toneladas: "6,895" }, // "San Miguel Soyaltepec"
    { id: 20498, territorio: "7,642", toneladas: "94,436" }, // "Santiago Yaveo"
  ],
  "Sierra de Juárez": [ //2
    { id: 20207, territorio: "2,149", toneladas: "26,770" }, // "San Juan Mazatlán"
    { id: 20190, territorio: "3,984", toneladas: "47,664" }, // "San Juan Cotzocón"
  ],
  "Sierra Sur": [//5
    { id: 20088, territorio: "18", toneladas: "63" }, // "San Andrés Cabecera Nueva"
    { id: 20377, territorio: "65", toneladas: "307" }, // "Santa Cruz Itundujia"
    { id: 20392, territorio: "10", toneladas: "40" }, // "Santa Lucía Monteverde"
    { id: 20447, territorio: "11", toneladas: "132" }, // "Santa María Zacatepec"
    { id: 20064, territorio: "37", toneladas: "468" }, // "Nejapa de Madero"
  ],
  "Valles Centrales": [//6
    { id: 20007, territorio: "1", toneladas: "8" }, // "Asunción Ocotlán"
    { id: 20132, territorio: "7", toneladas: "41" }, // "San Dionisio Ocotlán"
    { id: 20301, territorio: "5", toneladas: "41" }, // "San Pedro Apóstol"
    { id: 20333, territorio: "22", toneladas: "133" }, // "San Pedro Totolápam"
    { id: 20449, territorio: "9", toneladas: "43" }, // "Santa María Zoquitlán"
    { id: 20551, territorio: "4", toneladas: "17" }, // "Tlacolula de Matamoros"
  ],
};

const estados_datos_pro = [ // 28
  { id: "MICH", territorio: "953652", toneladas: "63396" },
  { id: "VER", territorio: "867916", toneladas: "52924" },
  { id: "COL", territorio: "312047", toneladas: "21832" },
  { id: "OAX", territorio: "300310", toneladas: "23993" },
  { id: "TAMP", territorio: "135886", toneladas: "8508" },
  { id: "YUC", territorio: "110132", toneladas: "5999" },
  { id: "JAL", territorio: "108797", toneladas: "6967" },
  { id: "TAB", territorio: "90381", toneladas: "7237" },
  { id: "GRO", territorio: "71731", toneladas: "6995" },
  { id: "SLP", territorio: "46299", toneladas: "1759" },
  { id: "PUE", territorio: "44328", toneladas: "3166" },
  { id: "QR", territorio: "42141", toneladas: "4702" },
  { id: "CHS", territorio: "34590", toneladas: "3115" },
  { id: "NAY", territorio: "34050", toneladas: "3206" },
  { id: "SIN", territorio: "27656", toneladas: "1784" },
  { id: "CAM", territorio: "16650", toneladas: "1873" },
  { id: "ZAC", territorio: "11338", toneladas: "761" },
  { id: "SON", territorio: "9646", toneladas: "1215" },
  { id: "AGS", territorio: "5271", toneladas: "600" },
  { id: "NL", territorio: "5171", toneladas: "1081" },
  { id: "MOR", territorio: "4807", toneladas: "422" },
  { id: "BCN", territorio: "2692", toneladas: "209" },
  { id: "HGO", territorio: "1463", toneladas: "239" },
  { id: "EM", territorio: "1180", toneladas: "150" },
  { id: "GTO", territorio: "971", toneladas: "169" },
  { id: "DGO", territorio: "526", toneladas: "263" },
  { id: "BCS", territorio: "254", toneladas: "75" },
  { id: "QRO", territorio: "30", toneladas: "8" },
];

const paises_datos_pro = [ //15
  { id: "IND", toneladas: "313000" },
  { id: "MEX", toneladas: "201998" },
  { id: "CHN", toneladas: "209392" },
  { id: "BRA", toneladas: "62867" },
  { id: "BGD", toneladas: "55744" },
  { id: "TUR", toneladas: "55246" },
  { id: "ARG", toneladas: "53742" },
  { id: "ESP", toneladas: "52570" },
  { id: "ZAF", toneladas: "35273" },
  { id: "DOM", toneladas: "34124" },
  { id: "SDN", toneladas: "32772" },
  { id: "IRN", toneladas: "28636" },
  { id: "PER", toneladas: "28121" },
  { id: "ITA", toneladas: "24560" }
];

/* DATOS DE LA TABLA Producción mundial de calabacita (2022) */
const tab_pro_mundial = [
  { ranking: 1, pais: "China", superficie: 398694 },
  { ranking: 2, pais: "China, Continental", superficie: 396125 },
  { ranking: 3, pais: "Camerún", superficie: 152498 },
  { ranking: 4, pais: "Turquía", superficie: 91839 },
  { ranking: 5, pais: "República Centroafricana", superficie: 77531 },
  { ranking: 6, pais: "Bangladesh", superficie: 61542 },
  { ranking: 7, pais: "Ucrania", superficie: 51900 },
  { ranking: 8, pais: "Rwanda", superficie: 51105 },
  { ranking: 9, pais: "Federación de Rusia", superficie: 48158 },
  { ranking: 10, pais: "Estados Unidos de América", superficie: 42492 },
  { ranking: 11, pais: "Sudáfrica", superficie: 35530 },
  { ranking: 12, pais: "México", superficie: 35147 },
  { ranking: 13, pais: "Cuba", superficie: 31633 },
  { ranking: 14, pais: "Pakistán", superficie: 28589 },
  { ranking: 15, pais: "Irán", superficie: 28144 },
  { ranking: "", pais: "Otros", superficie: 389509 },
];