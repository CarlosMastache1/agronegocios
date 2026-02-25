// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  Papaloapam: [
    { id: 20498, superficie: 7914.00, volumen: 99629.67, nombre: "Santiago Yaveo" },
    { id: 20002, superficie: 1075.00, volumen: 14596.20, nombre: "Acatlán de Pérez Figueroa" },
    { id: 20184, superficie: 979.00, volumen: 15051.80, nombre: "San Juan Bautista Tuxtepec" },
    { id: 20278, superficie: 532.00, volumen: 7107.90, nombre: "San Miguel Soyaltepec" },
    { id: 20044, superficie: 35.00, volumen: 390.32, nombre: "Loma Bonita" },
    { id: 20232, superficie: 11.50, volumen: 138.00, nombre: "San Lucas Ojitlán" }
  ],
  Costa: [
    { id: 20318, superficie: 4305.57, volumen: 479.00, nombre: "San Pedro Mixtepec -Dto. 22 -" },
    { id: 20334, superficie: 3604.20, volumen: 57251.55, nombre: "Villa de Tututepec de Melchor Ocampo" },
    { id: 20467, superficie: 575.90, volumen: 8103.28, nombre: "Santiago Jamiltepec" },
    { id: 20482, superficie: 263.50, volumen: 3260.78, nombre: "Santiago Pinotepa Nacional" },
    { id: 20414, superficie: 69.50, volumen: 812.14, nombre: "Santa María Huazolotitlán" },
    { id: 20090, superficie: 28.00, volumen: 394.68, nombre: "San Andrés Huaxpaltepec" }
  ],
  "Sierra Norte": [
    { id: 20190, superficie: 4120.00, volumen: 50516.40, nombre: "San Juan Cotzocón" },
    { id: 20207, superficie: 2157.50, volumen: 26770.31, nombre: "San Juan Mazatlán" }
  ],
  Cañada: [
    { id: 20431, superficie: 458.00, volumen: 2954.60, nombre: "Santa María Tecomavaca" },
    { id: 20027, superficie: 421.75, volumen: 2383.25, nombre: "Chiquihuitlán de Benito Juárez" },
    { id: 20244, superficie: 393.00, volumen: 2469.99, nombre: "San Martín Toxpalan" },
    { id: 20206, superficie: 390.00, volumen: 2800.35, nombre: "San Juan de los Cués" },
    { id: 20177, superficie: 379.25, volumen: 2326.26, nombre: "San Juan Bautista Cuicatlán" },
    { id: 20545, superficie: 228.00, volumen: 997.65, nombre: "Teotitlán de Flores Magón" },
    { id: 20558, superficie: 75.25, volumen: 348.96, nombre: "Valerio Trujano" }
  ],
  Istmo: [
    { id: 20057, superficie: 352.25, volumen: 4955.26, nombre: "Matías Romero Avendaño" },
    { id: 20052, superficie: 130.75, volumen: 1620.58, nombre: "Magdalena Tequisistlán" },
    { id: 20198, superficie: 104.00, volumen: 1454.31, nombre: "San Juan Guichicovi" },
    { id: 20327, superficie: 63.00, volumen: 530.70, nombre: "San Pedro Tapanatepec" },
    { id: 20418, superficie: 44.25, volumen: 363.60, nombre: "Santa María Jalapa del Marqués" },
    { id: 20525, superficie: 36.00, volumen: 262.08, nombre: "Santo Domingo Zanatepec" },
    { id: 20143, superficie: 32.50, volumen: 133.55, nombre: "San Francisco Ixhuatán" },
    { id: 20025, superficie: 17.00, volumen: 157.25, nombre: "Chahuites" },
    { id: 20515, superficie: 15.00, volumen: 81.99, nombre: "Santo Domingo Tehuantepec" },
    { id: 20472, superficie: 13.80, volumen: 81.14, nombre: "Santiago Laollaga" },
    { id: 20508, superficie: 11.50, volumen: 66.41, nombre: "Santo Domingo Chihuitán" },
    { id: 20075, superficie: 9.00, volumen: 18.50, nombre: "Reforma de Pineda" },
    { id: 20124, superficie: 8.25, volumen: 57.38, nombre: "San Blas Atempa" },
    { id: 20053, superficie: 5.50, volumen: 30.42, nombre: "Magdalena Tlacotepec" },
    { id: 20030, superficie: 5.50, volumen: 21.13, nombre: "El Espinal" }
  ],
  "Sierra Sur": [
    { id: 20377, superficie: 64.50, volumen: 263.16, nombre: "Santa Cruz Itundujia" },
    { id: 20064, superficie: 37.25, volumen: 463.24, nombre: "Nejapa de Madero" },
    { id: 20088, superficie: 17.70, volumen: 55.40, nombre: "San Andrés Cabecera Nueva" },
    { id: 20447, superficie: 11.30, volumen: 133.11, nombre: "Santa María Zacatepec" },
    { id: 20392, superficie: 9.00, volumen: 32.85, nombre: "Santa Lucía Monteverde" }
  ],
  "Valles Centrales": [
    { id: 20333, superficie: 21.05, volumen: 135.51, nombre: "San Pedro Totolapa" },
    { id: 20449, superficie: 9.60, volumen: 50.27, nombre: "Santa María Zoquitlán" },
    { id: 20132, superficie: 7.15, volumen: 47.41, nombre: "San Dionisio Ocotlán" },
    { id: 20301, superficie: 5.60, volumen: 40.31, nombre: "San Pedro Apóstol" },
    { id: 20551, superficie: 3.50, volumen: 17.55, nombre: "Tlacolula de Matamoros" },
    { id: 20007, superficie: 1.50, volumen: 9.89, nombre: "Asunción Ocotlán" }
  ],
  Mixteca: [
    { id: 20549, superficie: 9.60, volumen: 96.76, nombre: "Tezoatlán de Segura y Luna" },
    { id: 20537, superficie: 7.20, volumen: 74.43, nombre: "Silacayoápam" },
    { id: 20039, superficie: 5.15, volumen: 53.71, nombre: "Heroica Ciudad de Huajuapan de León" },
    { id: 20469, superficie: 4.05, volumen: 37.46, nombre: "Santiago Juxtlahuaca" },
    { id: 20462, superficie: 3.20, volumen: 30.66, nombre: "Santiago Huajolotitlán" },
    { id: 20520, superficie: 3.15, volumen: 31.88, nombre: "Santo Domingo Tonalá" },
    { id: 20081, superficie: 1.85, volumen: 18.67, nombre: "San Agustín Atenango" },
    { id: 20237, superficie: 1.10, volumen: 10.58, nombre: "San Marcos Arteaga" }
  ]
};
// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    id: "MICH",
    ranking: 1,
    entidad: "Michoacán",
    volumen: 1004414.92,
    superficie: 63807.50,
    rendimiento: 11.32,
    valor: 12066066936.95,
  },
  {
    id: "VER",
    ranking: 2,
    entidad: "Veracruz",
    volumen: 866862.08,
    superficie: 52930.80,
    rendimiento: 13.39,
    valor: 5497630611.50,
  },
  {
    id: "COL",
    ranking: 3,
    entidad: "Colima",
    volumen: 315562.25,
    superficie: 22033.38,
    rendimiento: 13.74,
    valor: 3256325957.68,
  },
  {
    id: "OAX",
    ranking: 4,
    entidad: "Oaxaca",
    volumen: 310220.24,
    superficie: 29087.67,
    rendimiento: 10.89,
    valor: 1964957434.93,
  },
  {
    id: "TAMP",
    ranking: 5,
    entidad: "Tamaulipas",
    volumen: 113884.29,
    superficie: 8391.75,
    rendimiento: 15.94,
    valor: 982524644.29,
  },
  {
    id: "YUC",
    ranking: 6,
    entidad: "Yucatán",
    volumen: 111310.94,
    superficie: 5078.43,
    rendimiento: 13.59,
    valor: 681293170.29,
  },
  {
    id: "JAL",
    ranking: 7,
    entidad: "Jalisco",
    volumen: 107377.84,
    superficie: 6958.80,
    rendimiento: 15.19,
    valor: 1233172162.51,
  },
  {
    id: "TAB",
    ranking: 8,
    entidad: "Tabasco",
    volumen: 90483.29,
    superficie: 7236.82,
    rendimiento: 11.42,
    valor: 406194860.88,
  },
  {
    id: "GRO",
    ranking: 9,
    entidad: "Guerrero",
    volumen: 83869.43,
    superficie: 7308.67,
    rendimiento: 8.53,
    valor: 557759487.63,
  },
  {
    id: "SLP",
    ranking: 10,
    entidad: "San Luis Potosí",
    volumen: 46660.55,
    superficie: 1869.00,
    rendimiento: 19.68,
    valor: 565285871.26,
  },
  {
    id: "PUE",
    ranking: 11,
    entidad: "Puebla",
    volumen: 44671.37,
    superficie: 3198.25,
    rendimiento: 11.74,
    valor: 450632754.09,
  },
  {
    id: "QR",
    ranking: 12,
    entidad: "Quintana Roo",
    volumen: 42742.60,
    superficie: 6322.00,
    rendimiento: 10.82,
    valor: 396706735.03,
  },
  {
    id: "NAY",
    ranking: 13,
    entidad: "Nayarit",
    volumen: 35097.11,
    superficie: 3322.81,
    rendimiento: 11.03,
    valor: 258124236.39,
  },
  {
    id: "SIN",
    ranking: 14,
    entidad: "Sinaloa",
    volumen: 26238.04,
    superficie: 1557.10,
    rendimiento: 14.39,
    valor: 218102072.86,
  },
  {
    id: "CHS",
    ranking: 15,
    entidad: "Chiapas",
    volumen: 18452.69,
    superficie: 3018.55,
    rendimiento: 7.74,
    valor: 97641896.37,
  },
  {
    id: "CAM",
    ranking: 16,
    entidad: "Campeche",
    volumen: 15275.98,
    superficie: 1785.50,
    rendimiento: 9.04,
    valor: 155749817.80,
  },
  {
    id: "ZAC",
    ranking: 17,
    entidad: "Zacatecas",
    volumen: 9669.25,
    superficie: 807.00,
    rendimiento: 9.80,
    valor: 90345613.84,
  },
  {
    id: "NL",
    ranking: 18,
    entidad: "Nuevo León",
    volumen: 8031.00,
    superficie: 1169.00,
    rendimiento: 8.10,
    valor: 68137655.94,
  },
  {
    id: "MOR",
    ranking: 19,
    entidad: "Morelos",
    volumen: 7068.54,
    superficie: 585.50,
    rendimiento: 12.11,
    valor: 72318990.82,
  },
  {
    id: "AGS",
    ranking: 20,
    entidad: "Aguascalientes",
    volumen: 6240.00,
    superficie: 600.00,
    rendimiento: 12.00,
    valor: 37542024.00,
  },
  {
    id: "SON",
    ranking: 21,
    entidad: "Sonora",
    volumen: 4944.71,
    superficie: 817.00,
    rendimiento: 16.44,
    valor: 39734460.80,
  },
  {
    id: "BCN",
    ranking: 22,
    entidad: "Baja California",
    volumen: 1708.56,
    superficie: 159.55,
    rendimiento: 9.71,
    valor: 20301095.71,
  },
  {
    id: "HGO",
    ranking: 23,
    entidad: "Hidalgo",
    volumen: 1435.48,
    superficie: 232.10,
    rendimiento: 5.70,
    valor: 7134493.25,
  },
  {
    id: "EM",
    ranking: 24,
    entidad: "México",
    volumen: 1170.80,
    superficie: 148.90,
    rendimiento: 7.12,
    valor: 10058373.17,
  },
  {
    id: "GTO",
    ranking: 25,
    entidad: "Guanajuato",
    volumen: 1026.20,
    superficie: 169.20,
    rendimiento: 7.10,
    valor: 11716229.20,
  },
  {
    id: "DGO",
    ranking: 26,
    entidad: "Durango",
    volumen: 557.42,
    superficie: 256.81,
    rendimiento: 2.58,
    valor: 3909732.07,
  },
  {
    id: "BCS",
    ranking: 27,
    entidad: "Baja California Sur",
    volumen: 293.31,
    superficie: 74.50,
    rendimiento: 7.35,
    valor: 2456982.64,
  },
  {
    id: "QRO",
    ranking: 28,
    entidad: "Querétaro",
    volumen: 23.08,
    superficie: 8.00,
    rendimiento: 2.89,
    valor: 102001.33,
  }
];

//Ranking mundial de países por superficie sembrada (en hectáreas)

const tab_pro_mundial = [
  { ranking: 1, id: "IND", pais: "India", superficie: 312000 },
  { ranking: 2, id: "MEX", pais: "México", superficie: 210735 },
  { ranking: 3, id: "CHN", pais: "China", superficie: 102368 },
  { ranking: 4, id: "CHN", pais: "China, Continental", superficie: 100106 },
  { ranking: 5, id: "BRA", pais: "Brasil", superficie: 66399 },
  { ranking: 6, id: "BGD", pais: "Bangladesh", superficie: 63385 },
  { ranking: 7, id: "ARG", pais: "Argentina", superficie: 58368 },
  { ranking: 8, id: "TUR", pais: "Türkiye", superficie: 56439 },
  { ranking: 9, id: "ESP", pais: "España", superficie: 51670 },
  { ranking: 10, id: "DOM", pais: "República Dominicana", superficie: 44735 },
  { ranking: 11, id: "COL", pais: "Colombia", superficie: 41479 },
  { ranking: 12, id: "ZAF", pais: "Sudáfrica", superficie: 36909 },
  { ranking: 13, id: "SDN", pais: "Sudán", superficie: 32247 },
  { ranking: 14, id: "IRN", pais: "Irán (República Islámica del)", superficie: 28720 },
  { ranking: 15, id: "PER", pais: "Perú", superficie: 28453 },
  { ranking: "", pais: "Otros", superficie: 256606 },

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
const importacion_balanza = [
  602, 2398, 1420, 1214, 2887, 1610, 2563, 2928, 3981, 3409, 2903, 7579, 13686, 36074.24, 65455.87
];

// Valores anuales de exportación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las exportaciones del producto
const exportacion_balanza = [
  450338, 469707, 625234, 531543, 524084, 623650, 667572, 733918, 733655,
  768619, 807540, 773342, 715778, 709475.64, 732291.06
];

/* DATOS DE LA TABLA DESTINO DE LA EXPORTACIÓN 2023 POR PAÍS */
const tab_destino_exportacion = [
  { num: 1, pais: "América del Norte", valor: 792791852 },
  { num: 2, pais: "Europa", valor: 5253772 },
  { num: 3, pais: "Asia", valor: 2855879 },
  { num: 4, pais: "Latinoamérica y Antillas", valor: 415006 },
];

/* Datos grafica de la produccion historica */
/* etiquetas de tiempo  */
const labels_historica_producto = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  2023, 2024,
];
/* Valores de la produccion por region */
const produccion_historica_producto = [
  {
    nom: "Sierra de Flores Magón",
    fila: [
      12678.3, 11679.58, 9502.02, 9540.14, 8998.33, 9656.55, 10120.06, 10803.37,
      11373.87, 11178.64, 11019.03, 13533.98, 14376.36, 14358.62, 14281.06,
    ],
  },
  {
    nom: "Costa",
    fila: [
      96114.18, 96246.24, 77960.23, 67611.01, 60634.04, 62713.04, 63808.6,
      64953.04, 65461.67, 66373.8, 67748.08, 68570.57, 69786.19, 70348.41, 70301.43,
    ],
  },
  {
    nom: "Istmo",
    fila: [
      8300.51, 9457.16, 9303.9, 8393.43, 6824.72, 7688.73, 8613.96, 8645.24,
      9227.23, 9475.1, 9521.31, 9536.58, 9763.71, 9848.45, 9834.3,
    ],
  },
  {
    nom: "Mixteca",
    fila: [
      474.6, 429.2, 483.5, 316.4, 363.6, 361.4, 347.05, 321.67, 303.84, 286.2,
      288.76, 323.87, 334.85, 338.7, 354.15,
    ],
  },
  {
    nom: "Papaloapan",
    fila: [
      53331.1, 50907.3, 63237.8, 69925.4, 80541.25, 97715.15, 106387.98,
      111376.76, 117352.01, 105199.18, 115256.73, 134208.54, 119370.12,
      129689.33, 136913.89,
    ],
  },
  {
    nom: "Sierra de Juárez",
    fila: [
      33282, 38779, 38535.3, 39041.5, 52228, 66380, 73538, 77998, 75510,
      69804.41, 76622.21, 78678.69, 74250.55, 74434.46, 77286.71,
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [
      416.8, 376.88, 419.5, 487.83, 510.39, 483.96, 484.35, 300.08, 767.6,
      888.6, 912.94, 927.93, 948.9, 1010.22, 947.76,
    ],
  },
  {
    nom: "Valles Centrales",
    fila: [
      193.05, 202.1, 92.87, 109.18, 108.56, 138.46, 152.48, 165.34, 173.34,
      180.62, 189.66, 228.77, 230.12, 282.29, 300.94,
    ],
  },
];

/* DATO DE LA TABLA PRODUCCION EN OAXACA	 */
const tabla_produccion_producto = [
  {
    region: "Papaloapan",
    volumen: 136913.89,
    superficie: 10546.50,
    rendimiento: 16.88,
    valor: 812538891.59,
    cantidad: 10,
  },
  {
    region: "Sierra Norte",
    volumen: 77286.71,
    superficie: 6277.50,
    rendimiento: 16.19,
    valor: 483824414.93,
    cantidad: 3,
  },
  {
    region: "Costa",
    volumen: 70301.43,
    superficie: 8846.67,
    rendimiento: 13.56,
    valor: 470907149.20,
    cantidad: 11,
  },
  {
    region: "Cañada",
    volumen: 14281.06,
    superficie: 2345.25,
    rendimiento: 8.10,
    valor: 122247565.55,
    cantidad: 7,
  },
  {
    region: "Istmo",
    volumen: 9834.30,
    superficie: 848.30,
    rendimiento: 9.78,
    valor: 63702280.15,
    cantidad: 16,
  },
  {
    region: "Sierra Sur",
    volumen: 947.76,
    superficie: 139.75,
    rendimiento: 7.03,
    valor: 6338049.30,
    cantidad: 5,
  },
  {
    region: "Mixteca",
    volumen: 354.15,
    superficie: 35.30,
    rendimiento: 9.76,
    valor: 2639368.33,
    cantidad: 12,
  },
  {
    region: "Valles Centrales",
    volumen: 300.94,
    superficie: 48.40,
    rendimiento: 7.42,
    valor: 2759715.88,
    cantidad: 10,
  },
];

/* Datos grafica VOLUMEN DE PRODUCCION POR PUEBLO INDIGENA AGAVE */
const pub_indigenas_producto = [
  [
    "NO PUEBLO INDIGENA",
    "Chinanteco",
    "Mixe",
    "Mazateco",
    "Mixteco",
    "Zapoteco",
    "Cuicateco",
 
  ],
  [65878.13, 15189.8, 178370.69, 33309.94, 13661.87, 1483.55, 2326.26, ],
];

/* Datos grafica Estacionalidad de calabacita en Oaxaca */
const estacionalidad_producto = [
  140, 170, 125, 150, 158, 175, 162, 158, 148, 156, 142, 161,
];
