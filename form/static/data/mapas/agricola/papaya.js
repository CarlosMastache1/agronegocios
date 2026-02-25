// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  Costa: [
    {
      id: 20334,
      superficie: 1231.00,
      volumen: 130204.10,
      nombre: "Villa de Tututepec de Melchor Ocampo",
    },
    {
      id: 20482,
      superficie: 425.00,
      volumen: 54026.52,
      nombre: "Santiago Pinotepa Nacional",
    },
    {
      id: 20467,
      superficie: 345.00,
      volumen: 41545.35,
      nombre: "Santiago Jamiltepec",
    },
    {
      id: 20414,
      superficie: 166.50,
      volumen: 20771.64,
      nombre: "Santa María Huazolotitlán",
    },
    {
      id: 20439,
      superficie: 133.50,
      volumen: 14524.92,
      nombre: "Santa María Tonameca",
    },
    {
      id: 20318,
      superficie: 74.00,
      volumen: 6728.76,
      nombre: "San Pedro Mixtepec -Dto. 22 -",
    },
    {
      id: 20413,
      superficie: 67.00,
      volumen: 8828.82,
      nombre: "Santa María Huatulco",
    },
    {
      id: 20401,
      superficie: 63.00,
      volumen: 5783.18,
      nombre: "Santa María Colotepec",
    },
    {
      id: 20090,
      superficie: 58.50,
      volumen: 5366.73,
      nombre: "San Andrés Huaxpaltepec",
    },
    {
      id: 20474,
      superficie: 40.00,
      volumen: 3805.89,
      nombre: "Santiago Llano Grande",
    },
    {
      id: 20367,
      superficie: 32.50,
      volumen: 1666.40,
      nombre: "Santa Catarina Mechoacán",
    },
    {
      id: 20266,
      superficie: 30.00,
      volumen: 3460.05,
      nombre: "San Miguel del Puerto",
    },
    {
      id: 20509,
      superficie: 22.50,
      volumen: 1942.59,
      nombre: "Santo Domingo de Morelos",
    },
    {
      id: 20180,
      superficie: 20.00,
      volumen: 1350.72,
      nombre: "San Juan Bautista Lo de Soto",
    },
    {
      id: 20485,
      superficie: 15.50,
      volumen: 1285.24,
      nombre: "Santiago Tapextla",
    },
  ],
  Istmo: [
    {
      id: 20418,
      superficie: 40.00,
      volumen: 3765.20,
      nombre: "Santa María Jalapa del Marqués",
    },
    {
      id: 20421,
      superficie: 30.00,
      volumen: 2838.90,
      nombre: "Santa María Mixtequilla",
    },
    {
      id: 20307,
      superficie: 22.00,
      volumen: 2081.42,
      nombre: "San Pedro Huamelula",
    },
    {
      id: 20453,
      superficie: 19.00,
      volumen: 1789.99,
      nombre: "Santiago Astata",
    },
    {
      id: 20052,
      superficie: 13.50,
      volumen: 753.84,
      nombre: "Magdalena Tequisistlán",
    },
    {
      id: 20525,
      superficie: 13.25,
      volumen: 833.82,
      nombre: "Santo Domingo Zanatepec",
    },
    {
      id: 20515,
      superficie: 12.75,
      volumen: 1130.67,
      nombre: "Santo Domingo Tehuantepec",
    },
    {
      id: 20005,
      superficie: 7.50,
      volumen: 453.15,
      nombre: "Asunción Ixtaltepec",
    },
  ],
  Papaloapam: [
    {
      id: 20002,
      superficie: 13.00,
      volumen: 742.20,
      nombre: "Acatlán de Pérez Figueroa",
    },
  ],
  "Sierra Sur": [
    {
      id: 20008,
      superficie: 12.00,
      volumen: 624.60,
      nombre: "Asunción Tlacolulita",
    },
    {
      id: 20064,
      superficie: 11.00,
      volumen: 600.16,
      nombre: "Nejapa de Madero",
    },
    {
      id: 20357,
      superficie: 9.25,
      volumen: 478.41,
      nombre: "Santa Ana Tavela",
    },
  ],
  "Sierra de Flores Magón": [
    {
      id: 20177,
      superficie: 9.00,
      volumen: 386.55,
      nombre: "San Juan Bautista Cuicatlán",
    },
    {
      id: 20545,
      superficie: 7.00,
      volumen: 217.00,
      nombre: "Teotitlán de Flores Magón",
    },
    {
      id: 20431,
      superficie: 7.00,
      volumen: 218.40,
      nombre: "Santa María Tecomavaca",
    },
    {
      id: 20206,
      superficie: 4.00,
      volumen: 161.00,
      nombre: "San Juan de los Cués",
    },
    {
      id: 20558,
      superficie: 1.00,
      volumen: 40.00,
      nombre: "Valerio Trujano",
    },
  ],
  "Valles Centrales": [
    {
      id: 20449,
      superficie: 8.50,
      volumen: 355.15,
      nombre: "Santa María Zoquitlán",
    },
    {
      id: 20333,
      superficie: 7.00,
      volumen: 205.84,
      nombre: "San Pedro Totolápam",
    },
  ],
};
// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    id: "OAX",
    entidad: "Oaxaca",
    volumen: 318967.21,
    superficie: 2970.75,
    rendimiento: 84.53,
    valor: 2149741094.58,
  },
  {
    ranking: 2,
    id: "COL",
    entidad: "Colima",
    volumen: 206985.02,
    superficie: 3720.55,
    rendimiento: 55.64,
    valor: 1534690873.87,
  },
  {
    ranking: 3,
    id: "CHS",
    entidad: "Chiapas",
    volumen: 160116.56,
    superficie: 2038.50,
    rendimiento: 79.70,
    valor: 824527931.12,
  },
  {
    ranking: 4,
    id: "VER",
    entidad: "Veracruz",
    volumen: 123349.80,
    superficie: 3800.88,
    rendimiento: 27.30,
    valor: 584802488.36,
  },
  {
    ranking: 5,
    id: "MICH",
    entidad: "Michoacán",
    volumen: 120584.16,
    superficie: 3525.00,
    rendimiento: 40.85,
    valor: 712736255.20,
  },
  {
    ranking: 6,
    id: "GRO",
    entidad: "Guerrero",
    volumen: 52278.30,
    superficie: 1682.84,
    rendimiento: 26.78,
    valor: 446964475.42,
  },
  {
    ranking: 7,
    id: "JAL",
    entidad: "Jalisco",
    volumen: 35118.18,
    superficie: 575.00,
    rendimiento: 50.86,
    valor: 458086692.10,
  },
  {
    ranking: 8,
    id: "SLP",
    entidad: "San Luis Potosí",
    volumen: 27340.36,
    superficie: 407.00,
    rendimiento: 75.42,
    valor: 166190840.58,
  },
  {
    ranking: 9,
    id: "TAMP",
    entidad: "Tamaulipas",
    volumen: 20792.38,
    superficie: 380.00,
    rendimiento: 43.37,
    valor: 231522678.96,
  },
  {
    ranking: 10,
    id: "CAM",
    entidad: "Campeche",
    volumen: 17373.64,
    superficie: 419.00,
    rendimiento: 52.16,
    valor: 142306708.84,
  },
  {
    ranking: 11,
    id: "NAY",
    entidad: "Nayarit",
    volumen: 14528.28,
    superficie: 379.50,
    rendimiento: 32.77,
    valor: 108031915.14,
  },
  {
    ranking: 12,
    id: "YUC",
    entidad: "Yucatán",
    volumen: 12060.54,
    superficie: 183.90,
    rendimiento: 54.37,
    valor: 85671277.24,
  },
  {
    ranking: 13,
    id: "SIN",
    entidad: "Sinaloa",
    volumen: 10218.95,
    superficie: 386.00,
    rendimiento: 19.87,
    valor: 59090649.60,
  },
  {
    ranking: 14,
    id: "TAB",
    entidad: "Tabasco",
    volumen: 9283.10,
    superficie: 142.00,
    rendimiento: 44.23,
    valor: 39384679.28,
  },
  {
    ranking: 15,
    id: "PUE",
    entidad: "Puebla",
    volumen: 5557.75,
    superficie: 152.55,
    rendimiento: 32.78,
    valor: 29046596.59,
  },
  {
    ranking: 16,
    id: "QR",
    entidad: "Quintana Roo",
    volumen: 4549.90,
    superficie: 62.00,
    rendimiento: 85.81,
    valor: 32456656.39,
  },
  {
    ranking: 17,
    id: "MOR",
    entidad: "Morelos",
    volumen: 3237.30,
    superficie: 96.00,
    rendimiento: 33.80,
    valor: 21091629.25,
  },
  {
    ranking: 18,
    id: "BCS",
    entidad: "Baja California Sur",
    volumen: 319.60,
    superficie: 14.50,
    rendimiento: 31.96,
    valor: 2102485.40,
  },
  {
    ranking: 19,
    id: "EM",
    entidad: "México",
    volumen: 193.49,
    superficie: 18.50,
    rendimiento: 15.10,
    valor: 1687026.44,
  },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { id: "IND", ranking: 1, pais: "India", superficie: 148000 },
  { id: "NGA", ranking: 2, pais: "Nigeria", superficie: 95958 },
  { id: "BRA", ranking: 3, pais: "Brasil", superficie: 26839 },
  { id: "MEX", ranking: 4, pais: "México", superficie: 20334 },
  { id: "PER", ranking: 5, pais: "Perú", superficie: 13200 },
  { id: "IDN", ranking: 6, pais: "Indonesia", superficie: 12541 },
  { id: "COD", ranking: 7, pais: "República Democrática del Congo", superficie: 12325 },
  { id: "DOM", ranking: 8, pais: "República Dominicana", superficie: 11569 },
  { id: "CHN", ranking: 9, pais: "China", superficie: 10686 },
  { id: "VNM", ranking: 10, pais: "Viet Nam", superficie: 9335 },
  { id: "VEN", ranking: 11, pais: "Venezuela (República Bolivariana de)", superficie: 8602 },
  { id: "CHN", ranking: 12, pais: "China, Continental", superficie: 8161 },
  { id: "COL", ranking: 13, pais: "Colombia", superficie: 8085 },
  { id: "PHL", ranking: 14, pais: "Filipinas", superficie: 7786 },
  { id: "BGD", ranking: 15, pais: "Bangladesh", superficie: 7280 },
  { id: "KEN", ranking: 16, pais: "Kenya", superficie: 5940 },
  { id: "CIV", ranking: 17, pais: "Côte d'Ivoire", superficie: 5817 },
  { ranking: "", pais: "Otros", superficie: 61358 },

];
const agrupado = {};

tab_pro_mundial.forEach((item) => {
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
const importacion_balanza = [264, 152, 71, 9];

// Valores anuales de exportación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las exportaciones del producto
const exportacion_balanza = [
  120635, 104797, 108425, 115054, 131308, 146202, 168703, 162867, 155014,
  160841, 167356, 183558, 201004, 197928.27, 206040.44
];

// Tabla de los principales destinos de exportación
// Cada objeto representa un país y el valor (en USD) de exportaciones realizadas hacia ese país
const tab_destino_exportacion = [
  { num: 1, pais: "Canadá y Estados Unidos", valor: 65133681 },
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
    nom: "Sierra de Flores Magón",
    fila: [
      642.3, 605.85, 976.93, 830.13, 2698.46, 2190.38, 808.06, 882.16, 1005.85,
      1032.41, 1007.52, 1224.29, 1033.72, 1229.1, 1022.95, 
    ],
  },
  {
    nom: "Costa",
    fila: [
      102245.05, 101491.5, 112635.4, 199746.23, 259379.68, 260114, 307403.2,
      275888.5, 299325.92, 308227.87, 334219.24, 337487.21, 350195.05,
      301009.35, 301290.91, 
    ],
  },
  {
    nom: "Istmo",
    fila: [
      8795.72, 7955.1, 4622.85, 9793.52, 8848.7, 9993.05, 10507.47, 9441.76,
      11888.64, 12225.87, 12014.28, 12421.02, 13369.68, 13513.68, 13646.99
    ],
  },
  {
    nom: "Mixteca",
    fila: [743.2, 666, 760, 520, 402, 290.5],
  },
  {
    nom: "Papaloapan",
    fila: [
      930, 0, 487.5, 547.5, 252, 259, 514, 612, 620.3, 490.4, 371.4, 517.31,
      604.69, 545.63,  742.20 

    ],
  },
  {
    nom: "Sierra Sur",
    fila: [
      1215.5, 1181.8, 2614, 997.52, 968.99, 942.94, 1154.05, 645, 1236.5,
      1081.3, 1249.73, 1521.67, 1523.44, 1529.14, 1703.17
    ],
  },
  {
    nom: "Valles Centrales",
    fila: [
      2385.84, 1805, 594.07, 731.85, 730.63, 735.53, 791.1, 690.18, 636.28,
      556.58, 647.07, 536.53, 426.61, 495.79, 560.99
    ],
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
    region: "Costa",
    volumen: 301290.91,
    superficie: 2724.00,
    rendimiento: 115.12,
    valor: 2028300543.75,
    cantidad: 16,
  },
  {
    region: "Istmo",
    volumen: 13646.99,
    superficie: 158.00,
    rendimiento: 80.68,
    valor: 92358275.54,
    cantidad: 8,
  },
  {
    region: "Sierra Sur",
    volumen: 1703.17,
    superficie: 32.25,
    rendimiento: 52.78,
    valor: 11526637.02,
    cantidad: 3,
  },
  {
    region: "Cañada",
    volumen: 1022.95,
    superficie: 28.00,
    rendimiento: 37.08,
    valor: 7977845.72,
    cantidad: 5,
  },
  {
    region: "Papaloapan",
    volumen: 742.20,
    superficie: 13.00,
    rendimiento: 54.71,
    valor: 5282073.65,
    cantidad: 2,
  },
  {
    region: "Valles Centrales",
    volumen: 560.99,
    superficie: 15.50,
    rendimiento: 51.28,
    valor: 4295718.90,
    cantidad: 2,
  },
];

// Datos de producción por grupo indígena
// Primer array: nombres de pueblos indígenas y categoría "No es pueblo indígena"
// Segundo array: volumen producido en toneladas por cada grupo correspondiente
const pub_indigenas_producto = [
  [
    "No es pueblo indigena", // Producción fuera de comunidades indígenas
    "Mixteco",
    "Zapoteco",
    "Chontal De Oaxaca",
    "Mazateco",
    "Cuicateco",
  ],
  [
    162919.53, // Producción toneladas para "No es pueblo indigena"
    123416.64, // Mixteco
    28824.47, // Zapoteco
    2081.42, // Chontal De Oaxaca
    1338.6, // Mazateco
    386.55, // Cuicateco
  ],
];

// Datos de estacionalidad del producto por mes
// Cada número representa una medida relativa o índice de producción o actividad para cada mes del año,
// probablemente de enero (índice 0) a diciembre (índice 11)
const estacionalidad_producto = [
  93, // Enero
  121, // Febrero
  152, // Marzo
  102, // Abril
  140, // Mayo
  102, // Junio
  156, // Julio
  146, // Agosto
  293, // Septiembre (máximo pico)
  152, // Octubre
  167, // Noviembre
  168, // Diciembre
];
