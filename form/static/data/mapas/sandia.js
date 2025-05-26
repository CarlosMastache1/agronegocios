const regionesConMunicipios = {
  "Sierra Sur": [ //5
    { 
        id: 20037, 
        territorio: "52", 
        toneladas: "1,334" 
    },//Mesones Hidalgo
    { 
        id: 20300, 
        territorio: "64", 
        toneladas: "1,811" 
    },//San Pedro Amuzgos
    { 
        id: 20415, 
        territorio: "179", 
        toneladas: "4,747" 
    },//Santa María Ipalapa
    { 
        id: 20447, 
        territorio: "325", 
        toneladas: "1,102" 
    },//Santa María Zacatepec
    { 
        id: 20064, 
        territorio: "35", 
        toneladas: "546" 
    },//Nejapa de Madero
  ],
  "Costa": [ //12
    { 
        id: 20285, 
        territorio: "30", 
        toneladas: "838" 
    },//San Miguel Tlacamama
    { 
        id: 20345, 
        territorio: "26", 
        toneladas: "780" 
    },//San Sebastián Ixcapa
    { 
        id: 20414, 
        territorio: "44", 
        toneladas: "1,232" 
    },//Santa María Huazolotitlán
    { 
        id: 20467, 
        territorio: "34", 
        toneladas: "1,122" 
    },//Santiago Jamiltepec
    { 
        id: 20482, 
        territorio: "39", 
        toneladas: "1,078" 
    },//Santiago Pinotepa Nacional
    { 
        id: 20507, 
        territorio: "200", 
        toneladas: "5,400" 
    },//Santo Domingo Armenta
    { 
        id: 20319, 
        territorio: "21", 
        toneladas: "475" 
    },//San Pedro Mixtepec
    { 
        id: 20334, 
        territorio: "46", 
        toneladas: "1,153" 
    },//Villa de Tututepec de Melchor Ocampo
    { 
        id: 20401, 
        territorio: "44", 
        toneladas: "1,135" 
    },//Santa María Colotepec
    { 
        id: 20439, 
        territorio: "50", 
        toneladas: "1,419" 
    },//Santa María Tonameca
    { 
        id: 20509, 
        territorio: "21", 
        toneladas: "502" 
    },//Santo Domingo de Morelos
    { 
        id: 20413, 
        territorio: "8", 
        toneladas: "231" 
    },//Santa María Huatulco
  ],
  "Istmo": [ //9
    { 
        id: 20025, 
        territorio: "42", 
        toneladas: "736" 
    },//Chahuites
    { 
        id: 20075, 
        territorio: "197", 
        toneladas: "3,517" 
    },//Reforma de Pineda
    { 
        id: 20143, 
        territorio: "87", 
        toneladas: "1,560" 
    },//San Francisco Ixhuatán
    { 
        id: 20327, 
        territorio: "85", 
        toneladas: "1,481" 
    },//San Pedro Tapanatepec
    { 
        id: 20525, 
        territorio: "197", 
        toneladas: "3,456" 
    },//Santo Domingo Zanatepec
    { 
        id: 20066, 
        territorio: "48", 
        toneladas: "508" 
    },//Santiago Niltepec
    { 
        id: 20141, 
        territorio: "57", 
        toneladas: "635" 
    },//San Francisco del Mar
    { 
        id: 20124, 
        territorio: "8", 
        toneladas: "111" 
    },//San Blas Atempa
    { 
        id: 20557, 
        territorio: "8", 
        toneladas: "105" 
    },//Unión Hidalgo
  ],
  "Papaloapan": [ //4
    { 
        id: 20044, 
        territorio: "50", 
        toneladas: "1,035" 
    },//Loma Bonita
    { 
        id: 20184, 
        territorio: "48", 
        toneladas: "982" 
    },//San Juan Bautista Tuxtepec
    { 
        id: 20559, 
        territorio: "68", 
        toneladas: "1,421" 
    },//San Juan Bautista Valle Nacional
    { 
        id: 20498, 
        territorio: "80", 
        toneladas: "1,672" 
    },//Santiago Yaveo
  ],
  "Sierra de Juárez": [ //1
    { 
        id: 20190, 
        territorio: "85", 
        toneladas: "1,743" 
    },//San Juan Cotzocón
  ],
  "Valles Centrales": [ //10
    { 
        id: 20007, 
        territorio: "2", 
        toneladas: "47" 
    },//Asunción Ocotlán
    { 
        id: 20068, 
        territorio: "7", 
        toneladas: "210" 
    },//Ocotlán de Morelos
    { 
        id: 20295, 
        territorio: "6", 
        toneladas: "185" 
    },//San Pablo Huixtepec
    { 
        id: 20530, 
        territorio: "0.2", 
        toneladas: "1" 
    },//Santo Tomás Jalieza
    { 
        id: 20561, 
        territorio: "0.35", 
        toneladas: "11" 
    },//Yaxe
    { 
        id: 20570, 
        territorio: "4", 
        toneladas: "126" 
    },//Zimatlán de Álvarez
    { 
        id: 20333, 
        territorio: "7", 
        toneladas: "207" 
    },//San Pedro Totolápam
    { 
        id: 20449, 
        territorio: "7", 
        toneladas: "232" 
    },//Santa María Zoquitlán
    { 
        id: 20028, 
        territorio: "15", 
        toneladas: "426" 
    },//Heroica Ciudad de Ejutla de Crespo
    { 
        id: 20268, 
        territorio: "5", 
        toneladas: "136" 
    },//San Miguel Ejutla
  ],
};

const estadosDatos = {
  Sonora: [
    {
      id: 26,
      territorio: "8,278",
      toneladas: "437,673",
    },
  ],
  Chihuahua: [
    {
      id: 8,
      territorio: "4,329",
      toneladas: "161,488",
    },
  ],
  Veracruz: [
    {
      id: 30,
      territorio: "5,986",
      toneladas: "131,975",
    },
  ],
  Jalisco: [
    {
      id: 14,
      territorio: "2,310",
      toneladas: "119,447",
    },
  ],
  Campeche: [
    {
      id: 4,
      territorio: "2,481",
      toneladas: "82,758",
    },
  ],
  Guerrero: [
    {
      id: 12,
      territorio: "3,254",
      toneladas: "76,872",
    },
  ],
  Nayarit: [
    {
      id: 18,
      territorio: "2,823",
      toneladas: "60,642",
    },
  ],
  Oaxaca: [
    {
      id: 20,
      territorio: "2,327",
      toneladas: "53,924",
    },
  ],
  Sinaloa: [
    {
      id: 25,
      territorio: "1,760",
      toneladas: "41,843",
    },
  ],
  Chiapas: [
    {
      id: 7,
      territorio: "1,965",
      toneladas: "40,118",
    },
  ],
  Tamaulipas: [
    {
      id: 28,
      territorio: "1,176",
      toneladas: "33,103",
    },
  ],
  Coahuila: [
    {
      id: 5,
      territorio: "828",
      toneladas: "29,584",
    },
  ],
  "Michoacán": [
    {
      id: 16,
      territorio: "837",
      toneladas: "27,463",
    },
  ],
  Colima: [
    {
      id: 6,
      territorio: "499",
      toneladas: "25,800",
    },
  ],
  Tabasco: [
    {
      id: 27,
      territorio: "1,608",
      toneladas: "25,410",
    },
  ],
  Durango: [
    {
      id: 10,
      territorio: "509",
      toneladas: "20,471",
    },
  ],
  "San Luis Potosí": [
    {
      id: 24,
      territorio: "421",
      toneladas: "14,280",
    },
  ],
  "Quintana Roo": [
    {
      id: 23,
      territorio: "714",
      toneladas: "13,989",
    },
  ],
  "Yucatán": [
    {
      id: 31,
      territorio: "580",
      toneladas: "9,892",
    },
  ],
  Guanajuato: [
    {
      id: 11,
      territorio: "216",
      toneladas: "6,778",
    },
  ],
  "Baja California": [
    {
      id: 2,
      territorio: "156",
      toneladas: "6,418",
    },
  ],
  Puebla: [
    {
      id: 21,
      territorio: "116",
      toneladas: "2,661",
    },
  ],
  "Baja California Sur": [
    {
      id: 3,
      territorio: "84",
      toneladas: "2,315",
    },
  ],
  Morelos: [
    {
      id: 17,
      territorio: "89",
      toneladas: "1,827",
    },
  ],
  "Nuevo León": [
    {
      id: 19,
      territorio: "31",
      toneladas: "900",
    },
  ],
  "México": [
    {
      id: 15,
      territorio: "34",
      toneladas: "743",
    },
  ],
  Zacatecas: [
    {
      id: 32,
      territorio: "18",
      toneladas: "539",
    },
  ],
};

const paisesDatos = {
  China: 
  [
    { 
        id: "CHN", 
        territorio: "1,391,910"
    }
  ],
  India: 
  [
    { 
        id: "IND", 
        territorio: "120,000"
    }
  ],
  "Federación de Rusia": 
  [
    { 
        id: "RUS", 
        territorio: "91,042"
    }
  ],
  Senegal: 
  [
    { 
        id: "SEN", 
        territorio: "89,555"
    }
  ],
  Brasil: 
  [
    { 
        id: "BRA", 
        territorio: "85,729"
    }
  ],
  "Turquía": 
  [
    { 
        id: "TUR", 
        territorio: "69,021"
    }
  ],
  "Afganistán": 
  [
    { 
        id: "AFG", 
        territorio: "61,939"
    }
  ],
  Argelia: 
  [
    { 
        id: "DZA", 
        territorio: "54,440"
    }
  ],
  "Kazajstán": 
  [
    { 
        id: "KAZ", 
        territorio: "50,769"
    }
  ],
  "Irán": 
  [
    { 
        id: "IRN", 
        territorio: "50,000"
    }
  ],
  "Pakistán": 
  [
    { 
        id: "PAK", 
        territorio: "49,967"
    }
  ],
  "Viet Nam": 
  [
    { 
        id: "VNM", 
        territorio: "47,888"
    }
  ],
  "Uzbekistán": 
  [
    { 
        id: "UZB", 
        territorio: "41,922"
    }
  ],
  "Estados Unidos de América": 
  [
    { 
        id: "USA", 
        territorio: "37,717"
    }
  ],
  "Sudán": 
  [
    { 
        id: "SDN", 
        territorio: "37,384"
    }
  ],
  "México": 
  [
    { 
        id: "MEX", 
        territorio: "36,795"
    }
  ],
};