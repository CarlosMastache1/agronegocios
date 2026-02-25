// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  Istmo: [
    { id: 20025, superficie: 115, volumen: 95, nombre: "Chahuites" }, // Correcto
    { id: 20075, superficie: 193, volumen: 154, nombre: "Reforma de Pineda" }, // Correcto
    { id: 20143, superficie: 159, volumen: 124, nombre: "San Francisco Ixhuatán" }, // Correcto
    { id: 20327, superficie: 566, volumen: 441, nombre: "San Pedro Tapanatepec" }, // Correcto
    { id: 20525, superficie: 627, volumen: 507, nombre: "Santo Domingo Zanatepec" }, // Correcto
    { id: 20066, superficie: 136, volumen: 116, nombre: "Santiago Niltepec" }, // Correcto
    { id: 20130, superficie: 37, volumen: 31, nombre: "San Dionisio del Mar" }, // Correcto
    { id: 20141, superficie: 202, volumen: 165, nombre: "San Francisco del Mar" }, // Correcto
    { id: 20505, superficie: 310, volumen: 266, nombre: "Santo Domingo Ingenio" }, // Correcto
    { id: 20005, superficie: 33, volumen: 25, nombre: "Asunción Ixtaltepec" }, // Correcto
    { id: 20014, superficie: 117, volumen: 86, nombre: "Ciudad Ixtepec" }, // Correcto
    { id: 20030, superficie: 54, volumen: 40, nombre: "El Espinal" }, // Correcto
    { id: 20043, superficie: 272, volumen: 203, nombre: "Heroica Ciudad de Juchitán de Zaragoza" }, // Correcto
    { id: 20053, superficie: 89, volumen: 68, nombre: "Magdalena Tlacotepec" }, // Correcto
    { id: 20079, superficie: 71, volumen: 54, nombre: "Salina Cruz" }, // Correcto
    { id: 20124, superficie: 351, volumen: 256, nombre: "San Blas Atempa" }, // Correcto
    { id: 20248, superficie: 168, volumen: 123, nombre: "San Mateo del Mar" }, // Correcto
    { id: 20305, superficie: 351, volumen: 263, nombre: "San Pedro Comitancillo" }, // Correcto
    { id: 20307, superficie: 224, volumen: 172, nombre: "San Pedro Huamelula" }, // Correcto
    { id: 20308, superficie: 116, volumen: 93, nombre: "San Pedro Huilotepec" }, // Correcto
    { id: 20418, superficie: 810, volumen: 627, nombre: "Santa María Jalapa del Marqués" }, // Correcto
    { id: 20421, superficie: 107, volumen: 86, nombre: "Santa María Mixtequilla" }, // Correcto
    { id: 20441, superficie: 49, volumen: 39, nombre: "Santa María Xadani" }, // Correcto
    { id: 20453, superficie: 94, volumen: 73, nombre: "Santiago Astata" }, // Correcto
    { id: 20472, superficie: 114, volumen: 87, nombre: "Santiago Laollaga" }, // Correcto
    { id: 20508, superficie: 106, volumen: 84, nombre: "Santo Domingo Chihuitán" }, // Correcto
    { id: 20515, superficie: 561, volumen: 449, nombre: "Santo Domingo Tehuantepec" }, // Correcto
    { id: 20557, superficie: 51, volumen: 39, nombre: "Unión Hidalgo" }, // Correcto
    { id: 20052, superficie: 80, volumen: 60, nombre: "Magdalena Tequisistlán" }, // Correcto
  ],
  Costa: [
    { id: 20056, superficie: 55, volumen: 43, nombre: "Mártires de Tacubaya" }, // Correcto
    { id: 20090, superficie: 67, volumen: 52, nombre: "San Andrés Huaxpaltepec" }, // Correcto
    { id: 20111, superficie: 25, volumen: 18, nombre: "San Antonio Tepetlapa" }, // Correcto
    { id: 20180, superficie: 110, volumen: 90, nombre: "San Juan Bautista Lo de Soto" }, // Correcto
    { id: 20185, superficie: 20, volumen: 16, nombre: "San Juan Cacahuatepec" }, // Correcto
    { id: 20225, superficie: 21, volumen: 16, nombre: "San Lorenzo" }, // Correcto
    { id: 20285, superficie: 20, volumen: 15, nombre: "San Miguel Tlacamama" }, // Correcto
    { id: 20345, superficie: 25, volumen: 19, nombre: "San Sebastián Ixcapa" }, // Correcto
    { id: 20367, superficie: 25, volumen: 20, nombre: "Santa Catarina Mechoacán" }, // Correcto
    { id: 20402, superficie: 107, volumen: 83, nombre: "Santa María Cortijo" }, // Correcto
    { id: 20414, superficie: 107, volumen: 82, nombre: "Santa María Huazolotitlán" }, // Correcto
    { id: 20467, superficie: 103, volumen: 90, nombre: "Santiago Jamiltepec" }, // Correcto
    { id: 20474, superficie: 104, volumen: 81, nombre: "Santiago Llano Grande" }, // Correcto
    { id: 20482, superficie: 116, volumen: 87, nombre: "Santiago Pinotepa Nacional" }, // Correcto
    { id: 20485, superficie: 95, volumen: 80, nombre: "Santiago Tapextla" }, // Correcto
    { id: 20489, superficie: 25, volumen: 23, nombre: "Santiago Tetepec" }, // Correcto
    { id: 20507, superficie: 110, volumen: 89, nombre: "Santo Domingo Armenta" }, // Correcto
    { id: 20318, superficie: 103, volumen: 78, nombre: "San Pedro Mixtepec" }, // AJUSTADO: El archivo marca 20318
    { id: 20334, superficie: 71, volumen: 53, nombre: "Villa de Tututepec de Melchor Ocampo" }, // Correcto
    { id: 20401, superficie: 407, volumen: 386, nombre: "Santa María Colotepec" }, // Correcto
    { id: 20324, superficie: 50, volumen: 44, nombre: "San Pedro Pochutla" }, // Correcto
    { id: 20413, superficie: 78, volumen: 64, nombre: "Santa María Huatulco" }, // Correcto
    { id: 20439, superficie: 99, volumen: 82, nombre: "Santa María Tonameca" }, // Correcto
  ],
  "Sierra Sur": [
    { id: 20008, superficie: 65, volumen: 45, nombre: "Asunción Tlacolulita" }, // Correcto
    { id: 20410, superficie: 25, volumen: 19, nombre: "Santa María Ecatepec" }, // Correcto
  ],
  Papaloapan: [
    { id: 20134, superficie: 54, volumen: 40, nombre: "San Felipe Jalapa de Díaz" }, // Correcto
  ],
};
// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    id: "GRO",
    entidad: "Guerrero",
    volumen: 15138.85,
    superficie: 16041.29,
    rendimiento: 0.8,
    valor: 302905536.64,
  },
  {
    ranking: 2,
    id: "MICH",
    entidad: "Michoacán",
    volumen: 9187.35,
    superficie: 10214,
    rendimiento: 0.92,
    valor: 141479878.91,
  },
  {
    ranking: 3,
    id: "SIN",
    entidad: "Sinaloa",
    volumen: 7632.78,
    superficie: 19884,
    rendimiento: 0.54,
    valor: 59560758.68,
  },

  {
    ranking: 4,
    id: "OAX",
    entidad: "Oaxaca",
    volumen: 6582.78,
    superficie: 8380.5,
    rendimiento: 0.78,
    valor: 240021618.4,
  },
  {
    ranking: 5,
    id: "CHS",
    entidad: "Chiapas",
    volumen: 4252.91,
    superficie: 7572.8,
    rendimiento: 0.49,
    valor: 67576334.35,
  },
  {
    ranking: 6,
    id: "VER",
    entidad: "Veracruz",
    volumen: 642.86,
    superficie: 470.56,
    rendimiento: 1.32,
    valor: 7420111.45,
  },
  {
    ranking: 7,
    id: "SON",
    entidad: "Sonora",
    volumen: 375.66,
    superficie: 1394,
    rendimiento: 0.71,
    valor: 8785344.94,
  },
  {
    ranking: 8,
    id: "JAL",
    entidad: "Jalisco",
    volumen: 164.29,
    superficie: 323.13,
    rendimiento: 0.62,
    valor: 3767184.71,
  },
  {
    ranking: 9,
    id: "PUE",
    entidad: "Puebla",
    volumen: 111.93,
    superficie: 91,
    rendimiento: 1.23,
    valor: 1720124.57,
  },

  {
    ranking: 10,
    id: "NAY",
    entidad: "Nayarit",
    volumen: 19.11,
    superficie: 35,
    rendimiento: 0.55,
    valor: 648708,
  },
  {
    ranking: 11,
    id: "COL",
    entidad: "Colima",
    volumen: 3.56,
    superficie: 3,
    rendimiento: 1.19,
    valor: 56222.82,
  }
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { ranking: 1, pais: "Sudán", superficie: 4571307, id: "SDN",},
  { ranking: 2, pais: "India", superficie: 1523064, id: "IND",},
  { ranking: 3, pais: "Myanmar", superficie: 1499511, id: "MMR",},
  { ranking: 4, pais: "Sudán del Sur", superficie: 605046, id: "SDS",},
  { ranking: 8, pais: "Brasil", superficie: 583000, id: "BRA",},
  { ranking: 11, pais: "Pakistán", superficie: 399770, id: "PAK",},
  { ranking: 6, pais: "Chad", superficie: 396231, id: "TCD",},
  { ranking: 5, pais: "Burkina Faso", superficie: 386937, id: "BFA",},
  { ranking: 4, pais: "República Unida de Tanzanía", superficie: 365199, id: "TZA",},
  { ranking: 7, pais: "Nigeria", superficie: 340000, id: "NGA",},
  { ranking: 16, pais: "Mozambique", superficie: 335393, id: "MOZ",},
  { ranking: 9, pais: "China", superficie: 274462, id: "CHN",},
  { ranking: 10, pais: "China, Continental", superficie: 272235, id: "CHN",},
  { ranking: 12, pais: "Etiopía", superficie: 270000, id: "ETH",},
  { ranking: 13, pais: "Uganda", superficie: 215000, id: "UGA",},
  { ranking: 14, pais: "Níger", superficie: 204050, id: "NER",},
  { ranking: 17, pais: "Malí", superficie: 96092, id: "MLI",},
  { ranking: 18, pais: "México", superficie: 78478, id: "MEX",},
  { ranking: "", pais: "Otros", superficie: 968967, },
];
 


const agrupado = {};

tab_pro_mundial.forEach(item => {
  if (!agrupado[item.id]) {
    agrupado[item.id] = { ...item };
  } else {
    // Sumamos superficie
    agrupado[item.id].superficie += item.superficie;

    agrupado[item.id].volumen += item.volumen;
  }
});

// Convertimos el objeto agrupado a arreglo y ajustamos el ranking
const paises_datos_pro = Object.values(agrupado).map((item, i) => ({
  ...item,
  ranking: i + 1,
}));

// Años de referencia para los datos de balanza comercial
const labels_balanza = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024
];

// Valores anuales de importación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las importaciones del producto
const importacion_balanza = [
  11861, 19169, 16318, 16019, 20115, 19956, 23674, 28908, 42095, 24306, 12357,
  7249, 7802, 8515, 17213.93
];

// Valores anuales de exportación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las exportaciones del producto
const exportacion_balanza = [
  8673, 6785, 5859, 7781, 7409, 9463, 10481, 10166, 12080, 5016, 2474, 3970,
  2087, 1907.18, 1194.02
];

// Años de refeencia para los datos de producción historica
const labels_historica_producto = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  2023, 2024, 
];

// Producción histórica (en toneladas) por región desde 2010 hasta 2023
// Cada objeto contiene el nombre de una region('nom') y arreglo ('fila')
const produccion_historica_producto = [
  {
    nom: "Costa",
    fila: [
      661.48, 686.7, 666.62, 882.34, 1054.34, 1456.6, 1583.07, 1165.89, 1261.31,
      1016.39, 1525.75, 1527.08, 1551.29, 1611.08, 1657.39,
    ],
  },
  {
    nom: "Istmo	",
    fila: [
      782.08, 2183.85, 3973.67, 2704.61, 3138.83, 3518.82, 4231.84, 4773.29,
      4916.32, 4556.01, 4394.74, 4624.37, 4828.68, 4828, 4796.38,
    ],
  },
  {
    nom: "Papaloapan",
    fila: [
      0, 243.75, 351, 0, 388.5, 128.1, 161.76, 81.98, 90.14, 94, 86.76, 74.72,
      59.88, 39.98, 28.11, 
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [0, 0, 0, 0, 0, 0, 0, 52.6, 52.92, 57.92, 56.1, 60.21, 64.07, 63.6, 100.9,],
  },
];

// Tabla resumen de producción por región
// Cada objeto representa una región con sus datos agregados:
// - volumen: toneladas producidas
// - superficie: hectáreas sembradas
// - rendimiento: toneladas por hectárea
// - valor: valor total de la producción (en pesos)
// - cantidad: número de municipios o unidades productivas consideradas
const tabla_produccion_producto = [
  {
    region: "Istmo",
    volumen: 4796.38,
    superficie: 6209.75,
    rendimiento: 0.78,
    valor: 176918273.17,
    cantidad: 40,
  },
  {
    region: "Costa",
    volumen: 1657.39,
    superficie: 1995.5,
    rendimiento: 0.79,
    valor: 59839105.84,
    cantidad: 25,
  },
  {
    region: "Sierra Sur",
    volumen: 100.90,
    superficie: 136.25,
    rendimiento: 0.78,
    valor: 2805735.89,
    cantidad: 5,
  },
  {
    region: "Papaloapan",
    volumen: 28.11,
    superficie: 39,
    rendimiento: 0.72,
    valor: 458503.5,
    cantidad: 2,
  },
];

// Datos de producción por grupo indígena
// Primer array: nombres de pueblos indígenas y categoría "No es pueblo indígena"
// Segundo array: volumen producido en toneladas por cada grupo correspondiente
const pub_indigenas_producto = [
  [
    "NO PUEBLO INDIGENA",
    "Zapoteco",
    "Mixteco",
    "Huave",
    "Chontal De Oaxaca",
    "Mazateco",
  ],
  [2180.6, 3452.89, 422.8, 302.83, 195.55, 28.11,],
];

// Datos de estacionalidad del producto por mes
// Cada número representa una medida relativa o índice de producción o actividad para cada mes del año,
// probablemente de enero (índice 0) a diciembre (índice 11)
const estacionalidad_producto = [42, 0, 6, 78, 0, 0, 0, 0, 0, 0, 1151, 974];

// Número de municipios productores por región en Oaxaca
// Cada objeto indica la región y la cantidad de municipios que participan en la producción del producto
const tab_mun_producto_oax = [
  { nom: "Istmo", num: 29 },
  { nom: "Costa", num: 23 },
  { nom: "Sierra Sur", num: 2 },
  { nom: "Papaloapan", num: 1 },
];
