const regionesConMunicipios = {
  //55
  "Sierra de Flores Magón": [//7
    { id: 20206, superficie: "360", volumen: "2,797" }, // "San Juan de Los Cués"
    { id: 20244, superficie: "353", volumen: "2,499" }, // "San Martín Toxpalan"
    { id: 20431, superficie: "415", volumen: "2,975" }, // "Santa María Tecomavaca"
    { id: 20545, superficie: "190", volumen: "988" }, // "Teotitlán de Flores Magón"
    { id: 20027, superficie: "387", volumen: "2,409" }, // "Chiquihuitlán de Benito Juárez"
    { id: 20177, superficie: "339", volumen: "2,340" }, // "San Juan Bautista Cuicatlán"
    { id: 20558, superficie: "59", volumen: "350" }, // "Valerio Trujano"
  ],
  Costa: [    //6
    { id: 20090, superficie: "28", volumen: "397" }, // "San Andrés Huaxpaltepec"
    { id: 20414, superficie: "68", volumen: "817" }, // "Santa María Huazolotitlán"
    { id: 20467, superficie: "574", volumen: "8,119" }, // "Santiago Jamiltepec"
    { id: 20482, superficie: "261", volumen: "3,260" }, // "Santiago Pinotepa Nacional"
    { id: 20319, superficie: "35", volumen: "474" }, // "San Pedro Mixtepec"
    { id: 20334, superficie: "3,599", volumen: "57,282" }, // "Villa de Tututepec de Melchor Ocampo"
  ],
  Istmo: [ //15
    { id: 20025, superficie: "17", volumen: "159" }, // "Chahuites"
    { id: 20075, superficie: "6", volumen: "19" }, // "Reforma de Pineda"
    { id: 20143, superficie: "27", volumen: "136" }, // "San Francisco Ixhuatán"
    { id: 20327, superficie: "61", volumen: "536" }, // "San Pedro Tapanatepec"
    { id: 20525, superficie: "33", volumen: "264" }, // "Santo Domingo Zanatepec"
    { id: 20057, superficie: "347", volumen: "4,959" }, // "Matías Romero Avendaño"
    { id: 20198, superficie: "99", volumen: "1,458" }, // "San Juan Guichicovi"
    { id: 20030, superficie: "3", volumen: "21" }, // "El Espinal"
    { id: 20053, superficie: "4", volumen: "31" }, // "Magdalena Tlacotepec"
    { id: 20124, superficie: "6", volumen: "58" }, // "San Blas Atempa"
    { id: 20418, superficie: "40", volumen: "362" }, // "Santa María Jalapa del Marqués"
    { id: 20472, superficie: "9", volumen: "81" }, // "Santiago Laollaga"
    { id: 20508, superficie: "8", volumen: "67" }, // "Santo Domingo Chihuitán"
    { id: 20515, superficie: "9", volumen: "83" }, // "Santo Domingo Tehuantepec"
    { id: 20052, superficie: "131", volumen: "1,615" }, // "Magdalena Tequisistlán"
  ],
  Mixteca: [ //8
    { id: 20039, superficie: "5", volumen: "54" }, // "Heroica Ciudad de Huajuapan de León"
    { id: 20081, superficie: "2", volumen: "19" }, // "San Agustín Atenango"
    { id: 20237, superficie: "1", volumen: "10" }, // "San Marcos Arteaga"
    { id: 20462, superficie: "4", volumen: "29" }, // "Santiago Huajolotitlán"
    { id: 20469, superficie: "4", volumen: "33" }, // "Santiago Juxtlahuaca"
    { id: 20520, superficie: "3", volumen: "32" }, // "Santo Domingo Tonalá"
    { id: 20537, superficie: "7", volumen: "73" }, // "Silacayoápam"
    { id: 20549, superficie: "10", volumen: "89" }, // "Heroica Villa Tezoatlán de Segura y Luna, Cuna de la Independencia de Oaxaca"
  ],
  Papaloapan: [ //6
    { id: 20044, superficie: "30", volumen: "360" }, // "Loma Bonita"
    { id: 20184, superficie: "931", volumen: "13,702" }, // "San Juan Bautista Tuxtepec"
    { id: 20232, superficie: "16", volumen: "141" }, // "San Lucas Ojitlán"
    { id: 20002, superficie: "1,044", volumen: "14,154" }, // "Acatlán de Pérez Figueroa"
    { id: 20278, superficie: "510", volumen: "6,895" }, // "San Miguel Soyaltepec"
    { id: 20498, superficie: "7,642", volumen: "94,436" }, // "Santiago Yaveo"
  ],
  "Sierra de Juárez": [ //2
    { id: 20207, superficie: "2,149", volumen: "26,770" }, // "San Juan Mazatlán"
    { id: 20190, superficie: "3,984", volumen: "47,664" }, // "San Juan Cotzocón"
  ],
  "Sierra Sur": [//5
    { id: 20088, superficie: "18", volumen: "63" }, // "San Andrés Cabecera Nueva"
    { id: 20377, superficie: "65", volumen: "307" }, // "Santa Cruz Itundujia"
    { id: 20392, superficie: "10", volumen: "40" }, // "Santa Lucía Monteverde"
    { id: 20447, superficie: "11", volumen: "132" }, // "Santa María Zacatepec"
    { id: 20064, superficie: "37", volumen: "468" }, // "Nejapa de Madero"
  ],
  "Valles Centrales": [//6
    { id: 20007, superficie: "1", volumen: "8" }, // "Asunción Ocotlán"
    { id: 20132, superficie: "7", volumen: "41" }, // "San Dionisio Ocotlán"
    { id: 20301, superficie: "5", volumen: "41" }, // "San Pedro Apóstol"
    { id: 20333, superficie: "22", volumen: "133" }, // "San Pedro Totolápam"
    { id: 20449, superficie: "9", volumen: "43" }, // "Santa María Zoquitlán"
    { id: 20551, superficie: "4", volumen: "17" }, // "Tlacolula de Matamoros"
  ],
};

const estadosDatos = { //28
  "Michoacán": [{ id: 16, superficie: "953652", volumen: "63396" }],
  "Veracruz": [{ id: 30, superficie: "867916", volumen: "52924" }],
  "Colima": [{ id: 6, superficie: "312047", volumen: "21832" }],
  "Oaxaca": [{ id: 20, superficie: "300310", volumen: "23993" }],
  "Tamaulipas": [{ id: 28, superficie: "135886", volumen: "8508" }],
  "Yucatán": [{ id: 31, superficie: "110132", volumen: "5999" }],
  "Jalisco": [{ id: 14, superficie: "108797", volumen: "6967" }],
  "Tabasco": [{ id: 27, superficie: "90381", volumen: "7237" }],
  "Guerrero": [{ id: 12, superficie: "71731", volumen: "6995" }],
  "San Luis Potosí": [{ id: 24, superficie: "46299", volumen: "1759" }],
  "Puebla": [{ id: 21, superficie: "44328", volumen: "3166" }],
  "Quintana Roo": [{ id: 23, superficie: "42141", volumen: "4702" }],
  "Chiapas": [{ id: 7, superficie: "34590", volumen: "3115" }],
  "Nayarit": [{ id: 18, superficie: "34050", volumen: "3206" }],
  "Sinaloa": [{ id: 25, superficie: "27656", volumen: "1784" }],
  "Campeche": [{ id: 4, superficie: "16650", volumen: "1873" }],
  "Zacatecas": [{ id: 32, superficie: "11338", volumen: "761" }],
  "Sonora": [{ id: 26, superficie: "9646", volumen: "1215" }],
  "Aguascalientes": [{ id: 1, superficie: "5271", volumen: "600" }],
  "Nuevo León": [{ id: 19, superficie: "5171", volumen: "1081" }],
  "Morelos": [{ id: 17, superficie: "4807", volumen: "422" }],
  "Baja California": [{ id: 2, superficie: "2692", volumen: "209" }],
  "Hidalgo": [{ id: 13, superficie: "1463", volumen: "239" }],
  "México": [{ id: 15, superficie: "1180", volumen: "150" }],
  "Guanajuato": [{ id: 11, superficie: "971", volumen: "169" }],
  "Durango": [{ id: 10, superficie: "526", volumen: "263" }],
  "Baja California Sur": [{ id: 3, superficie: "254", volumen: "75" }],
  "Querétaro": [{ id: 22, superficie: "30", volumen: "8" }]
};

const paisesDatos = {//15
  "India": [{ id: "IND", volumen: "313000" }],
  "México": [{ id: "MEX", volumen: "201998" }],
  "China": [{ id: "CHN", volumen: "209392" }],
  "Brasil": [{ id: "BRA", volumen: "62867" }],
  "Bangladesh": [{ id: "BGD", volumen: "55744" }],
  "Turquía": [{ id: "TUR", volumen: "55246" }],
  "Argentina": [{ id: "ARG", volumen: "53742" }],
  "España": [{ id: "ESP", volumen: "52570" }],
  "Sudáfrica": [{ id: "ZAF", volumen: "35273" }],
  "República Dominicana": [{ id: "DOM", volumen: "34124" }],
  "Sudán": [{ id: "SDN", volumen: "32772" }],
  "Irán": [{ id: "IRN", volumen: "28636" }],
  "Perú": [{ id: "PER", volumen: "28121" }],
  "Italia": [{ id: "ITA", volumen: "24560" }]
};
