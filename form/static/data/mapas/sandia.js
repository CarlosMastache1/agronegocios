const regionesConMunicipios = {
  "Sierra Sur": [ //5
    { 
        id: 20037, 
        superficie: "52", 
        volumen: "1,334" 
    },//Mesones Hidalgo
    { 
        id: 20300, 
        superficie: "64", 
        volumen: "1,811" 
    },//San Pedro Amuzgos
    { 
        id: 20415, 
        superficie: "179", 
        volumen: "4,747" 
    },//Santa María Ipalapa
    { 
        id: 20447, 
        superficie: "325", 
        volumen: "1,102" 
    },//Santa María Zacatepec
    { 
        id: 20064, 
        superficie: "35", 
        volumen: "546" 
    },//Nejapa de Madero
  ],
  "Costa": [ //12
    { 
        id: 20285, 
        superficie: "30", 
        volumen: "838" 
    },//San Miguel Tlacamama
    { 
        id: 20345, 
        superficie: "26", 
        volumen: "780" 
    },//San Sebastián Ixcapa
    { 
        id: 20414, 
        superficie: "44", 
        volumen: "1,232" 
    },//Santa María Huazolotitlán
    { 
        id: 20467, 
        superficie: "34", 
        volumen: "1,122" 
    },//Santiago Jamiltepec
    { 
        id: 20482, 
        superficie: "39", 
        volumen: "1,078" 
    },//Santiago Pinotepa Nacional
    { 
        id: 20507, 
        superficie: "200", 
        volumen: "5,400" 
    },//Santo Domingo Armenta
    { 
        id: 20319, 
        superficie: "21", 
        volumen: "475" 
    },//San Pedro Mixtepec
    { 
        id: 20334, 
        superficie: "46", 
        volumen: "1,153" 
    },//Villa de Tututepec de Melchor Ocampo
    { 
        id: 20401, 
        superficie: "44", 
        volumen: "1,135" 
    },//Santa María Colotepec
    { 
        id: 20439, 
        superficie: "50", 
        volumen: "1,419" 
    },//Santa María Tonameca
    { 
        id: 20509, 
        superficie: "21", 
        volumen: "502" 
    },//Santo Domingo de Morelos
    { 
        id: 20413, 
        superficie: "8", 
        volumen: "231" 
    },//Santa María Huatulco
  ],
  "Istmo": [ //9
    { 
        id: 20025, 
        superficie: "42", 
        volumen: "736" 
    },//Chahuites
    { 
        id: 20075, 
        superficie: "197", 
        volumen: "3,517" 
    },//Reforma de Pineda
    { 
        id: 20143, 
        superficie: "87", 
        volumen: "1,560" 
    },//San Francisco Ixhuatán
    { 
        id: 20327, 
        superficie: "85", 
        volumen: "1,481" 
    },//San Pedro Tapanatepec
    { 
        id: 20525, 
        superficie: "197", 
        volumen: "3,456" 
    },//Santo Domingo Zanatepec
    { 
        id: 20066, 
        superficie: "48", 
        volumen: "508" 
    },//Santiago Niltepec
    { 
        id: 20141, 
        superficie: "57", 
        volumen: "635" 
    },//San Francisco del Mar
    { 
        id: 20124, 
        superficie: "8", 
        volumen: "111" 
    },//San Blas Atempa
    { 
        id: 20557, 
        superficie: "8", 
        volumen: "105" 
    },//Unión Hidalgo
  ],
  "Papaloapan": [ //4
    { 
        id: 20044, 
        superficie: "50", 
        volumen: "1,035" 
    },//Loma Bonita
    { 
        id: 20184, 
        superficie: "48", 
        volumen: "982" 
    },//San Juan Bautista Tuxtepec
    { 
        id: 20559, 
        superficie: "68", 
        volumen: "1,421" 
    },//San Juan Bautista Valle Nacional
    { 
        id: 20498, 
        superficie: "80", 
        volumen: "1,672" 
    },//Santiago Yaveo
  ],
  "Sierra de Juárez": [ //1
    { 
        id: 20190, 
        superficie: "85", 
        volumen: "1,743" 
    },//San Juan Cotzocón
  ],
  "Valles Centrales": [ //10
    { 
        id: 20007, 
        superficie: "2", 
        volumen: "47" 
    },//Asunción Ocotlán
    { 
        id: 20068, 
        superficie: "7", 
        volumen: "210" 
    },//Ocotlán de Morelos
    { 
        id: 20295, 
        superficie: "6", 
        volumen: "185" 
    },//San Pablo Huixtepec
    { 
        id: 20530, 
        superficie: "0.2", 
        volumen: "1" 
    },//Santo Tomás Jalieza
    { 
        id: 20561, 
        superficie: "0.35", 
        volumen: "11" 
    },//Yaxe
    { 
        id: 20570, 
        superficie: "4", 
        volumen: "126" 
    },//Zimatlán de Álvarez
    { 
        id: 20333, 
        superficie: "7", 
        volumen: "207" 
    },//San Pedro Totolápam
    { 
        id: 20449, 
        superficie: "7", 
        volumen: "232" 
    },//Santa María Zoquitlán
    { 
        id: 20028, 
        superficie: "15", 
        volumen: "426" 
    },//Heroica Ciudad de Ejutla de Crespo
    { 
        id: 20268, 
        superficie: "5", 
        volumen: "136" 
    },//San Miguel Ejutla
  ],
};

const estadosDatos = {
  Sonora: [
    {
      id: 26,
      superficie: "8,278",
      volumen: "437,673",
    },
  ],
  Chihuahua: [
    {
      id: 8,
      superficie: "4,329",
      volumen: "161,488",
    },
  ],
  Veracruz: [
    {
      id: 30,
      superficie: "5,986",
      volumen: "131,975",
    },
  ],
  Jalisco: [
    {
      id: 14,
      superficie: "2,310",
      volumen: "119,447",
    },
  ],
  Campeche: [
    {
      id: 4,
      superficie: "2,481",
      volumen: "82,758",
    },
  ],
  Guerrero: [
    {
      id: 12,
      superficie: "3,254",
      volumen: "76,872",
    },
  ],
  Nayarit: [
    {
      id: 18,
      superficie: "2,823",
      volumen: "60,642",
    },
  ],
  Oaxaca: [
    {
      id: 20,
      superficie: "2,327",
      volumen: "53,924",
    },
  ],
  Sinaloa: [
    {
      id: 25,
      superficie: "1,760",
      volumen: "41,843",
    },
  ],
  Chiapas: [
    {
      id: 7,
      superficie: "1,965",
      volumen: "40,118",
    },
  ],
  Tamaulipas: [
    {
      id: 28,
      superficie: "1,176",
      volumen: "33,103",
    },
  ],
  Coahuila: [
    {
      id: 5,
      superficie: "828",
      volumen: "29,584",
    },
  ],
  "Michoacán": [
    {
      id: 16,
      superficie: "837",
      volumen: "27,463",
    },
  ],
  Colima: [
    {
      id: 6,
      superficie: "499",
      volumen: "25,800",
    },
  ],
  Tabasco: [
    {
      id: 27,
      superficie: "1,608",
      volumen: "25,410",
    },
  ],
  Durango: [
    {
      id: 10,
      superficie: "509",
      volumen: "20,471",
    },
  ],
  "San Luis Potosí": [
    {
      id: 24,
      superficie: "421",
      volumen: "14,280",
    },
  ],
  "Quintana Roo": [
    {
      id: 23,
      superficie: "714",
      volumen: "13,989",
    },
  ],
  "Yucatán": [
    {
      id: 31,
      superficie: "580",
      volumen: "9,892",
    },
  ],
  Guanajuato: [
    {
      id: 11,
      superficie: "216",
      volumen: "6,778",
    },
  ],
  "Baja California": [
    {
      id: 2,
      superficie: "156",
      volumen: "6,418",
    },
  ],
  Puebla: [
    {
      id: 21,
      superficie: "116",
      volumen: "2,661",
    },
  ],
  "Baja California Sur": [
    {
      id: 3,
      superficie: "84",
      volumen: "2,315",
    },
  ],
  Morelos: [
    {
      id: 17,
      superficie: "89",
      volumen: "1,827",
    },
  ],
  "Nuevo León": [
    {
      id: 19,
      superficie: "31",
      volumen: "900",
    },
  ],
  "México": [
    {
      id: 15,
      superficie: "34",
      volumen: "743",
    },
  ],
  Zacatecas: [
    {
      id: 32,
      superficie: "18",
      volumen: "539",
    },
  ],
};

const paisesDatos = {
  China: 
  [
    { 
        id: "CHN", 
        superficie: "1,391,910"
    }
  ],
  India: 
  [
    { 
        id: "IND", 
        superficie: "120,000"
    }
  ],
  "Federación de Rusia": 
  [
    { 
        id: "RUS", 
        superficie: "91,042"
    }
  ],
  Senegal: 
  [
    { 
        id: "SEN", 
        superficie: "89,555"
    }
  ],
  Brasil: 
  [
    { 
        id: "BRA", 
        superficie: "85,729"
    }
  ],
  "Turquía": 
  [
    { 
        id: "TUR", 
        superficie: "69,021"
    }
  ],
  "Afganistán": 
  [
    { 
        id: "AFG", 
        superficie: "61,939"
    }
  ],
  Argelia: 
  [
    { 
        id: "DZA", 
        superficie: "54,440"
    }
  ],
  "Kazajstán": 
  [
    { 
        id: "KAZ", 
        superficie: "50,769"
    }
  ],
  "Irán": 
  [
    { 
        id: "IRN", 
        superficie: "50,000"
    }
  ],
  "Pakistán": 
  [
    { 
        id: "PAK", 
        superficie: "49,967"
    }
  ],
  "Viet Nam": 
  [
    { 
        id: "VNM", 
        superficie: "47,888"
    }
  ],
  "Uzbekistán": 
  [
    { 
        id: "UZB", 
        superficie: "41,922"
    }
  ],
  "Estados Unidos de América": 
  [
    { 
        id: "USA", 
        superficie: "37,717"
    }
  ],
  "Sudán": 
  [
    { 
        id: "SDN", 
        superficie: "37,384"
    }
  ],
  "México": 
  [
    { 
        id: "MEX", 
        superficie: "36,795"
    }
  ],
};