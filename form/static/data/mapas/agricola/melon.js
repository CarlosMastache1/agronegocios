// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  Istmo: [
    //11
    {
      id: 20143,
      superficie: 208,
      volumen: 3059,
      nombre: "San Francisco Ixhuatán",
    },
    {
      id: 20075,
      superficie: 178,
      volumen: 2517,
      nombre: "Reforma de Pineda",
    },
    {
      id: 20327,
      superficie: 130,
      volumen: 1774,
      nombre: "San Pedro Tapanatepec",
    },
    {
      id: 20525,
      superficie: 128,
      volumen: 1751,
      nombre: "Santo Domingo Zanatepec",
    },
    {
      id: 20141,
      superficie: 96,
      volumen: 1349,
      nombre: "San Francisco del Mar",
    },
    {
      id: 20066,
      superficie: 65,
      volumen: 882,
      nombre: "Santiago Niltepec",
    },
    {
      id: 20025,
      superficie: 60,
      volumen: 811,
      nombre: "Chahuites",
    },
    {
      id: 20052,
      superficie: 31,
      volumen: 605,
      nombre: "Magdalena Tequisistlán",
    },
    {
      id: 20515,
      superficie: 15,
      volumen: 181,
      nombre: "Santo Domingo Tehuantepec",
    },
    {
      id: 20421,
      superficie: 14,
      volumen: 167,
      nombre: "Santa María Mixtequilla",
    },
    {
      id: 20124,
      superficie: 10,
      volumen: 121,
      nombre: "San Blas Atempa",
    },
  ],
  Costa: [
    //4
    {
      id: 20439,
      superficie: 33,
      volumen: 941,
      nombre: "Santa María Tonameca",
    },
    {
      id: 20414,
      superficie: 28,
      volumen: 653,
      nombre: "Santa María Huazolotitlán",
    },
    {
      id: 20467,
      superficie: 25,
      volumen: 565,
      nombre: "Santiago Jamiltepec",
    },
    {
      id: 20413,
      superficie: 10,
      volumen: 273,
      nombre: "Santa María Huatulco",
    },
  ],
  "Sierra de Flores Magón": [
    //6
    {
      id: 20431,
      superficie: 23,
      volumen: 458,
      nombre: "Santa María Tecomavaca",
    },
    {
      id: 20109,
      superficie: 16,
      volumen: 300,
      nombre: "San Antonio Nanahuatípam",
    },
    {
      id: 20206,
      superficie: 18,
      volumen: 361,
      nombre: "San Juan de Los Cués",
    },
    {
      id: 20177,
      superficie: 18,
      volumen: 358,
      nombre: "San Juan Bautista Cuicatlán",
    },
    {
      id: 20545,
      superficie: 13,
      volumen: 265,
      nombre: "Teotitlán de Flores Magón",
    },
    {
      id: 20558,
      superficie: 3,
      volumen: 54,
      nombre: "Valerio Trujano",
    },
  ],
  "Sierra Sur": [
    //1
    {
      id: 20064,
      superficie: 29,
      volumen: 552,
      nombre: "Nejapa de Madero",
    },
  ],
  "Valles Centrales": [
    //3
    {
      id: 20028,
      superficie: 8,
      volumen: 161,
      nombre: "Heroica Ciudad de Ejutla de Crespo",
    },
    {
      id: 20449,
      superficie: 6,
      volumen: 145,
      nombre: "Santa María Zoquitlán",
    },
    {
      id: 20068,
      superficie: 3,
      volumen: 56,
      nombre: "Ocotlán de Morelos",
    },
  ],
  Mixteca: [
    //3
    {
      id: 20381,
      superficie: 5,
      volumen: 55,
      nombre: "Santa Cruz Tacache de Mina",
    },
    {
      id: 20290,
      superficie: 3,
      volumen: 31,
      nombre: "San Nicolás Hidalgo",
    },
    {
      id: 20055,
      superficie: 2,
      volumen: 18,
      nombre: "Mariscala de Juárez",
    },
  ],
};

// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    id: "MICH",
    entidad: "Michoacán",
    volumen: 144825,
    superficie: 3532,
    rendimiento: 28.33,
    valor: 1288779399,
  },
  {
    ranking: 2,
    id: "SON",
    entidad: "Sonora",
    volumen: 133075,
    superficie: 3573,
    rendimiento: 34.98,
    valor: 886904614,
  },
  {
    ranking: 3,
    id: "COA",
    entidad: "Coahuila",
    volumen: 114684,
    superficie: 3376,
    rendimiento: 27.35,
    valor: 753109375,
  },
  {
    ranking: 4,
    id: "GRO",
    entidad: "Guerrero",
    volumen: 104671,
    superficie: 3583,
    rendimiento: 21.95,
    valor: 792136085,
  },
  {
    ranking: 5,
    id: "DGO",
    entidad: "Durango",
    volumen: 45783,
    superficie: 1245,
    rendimiento: 33.4,
    valor: 298467218,
  },
  {
    ranking: 6,
    id: "CHI",
    entidad: "Chihuahua",
    volumen: 38177,
    superficie: 1522,
    rendimiento: 25.42,
    valor: 256422864,
  },
  {
    ranking: 7,
    id: "COL",
    entidad: "Colima",
    volumen: 21806,
    superficie: 457,
    rendimiento: 46.67,
    valor: 152314352,
  },
  {
    ranking: 8,
    id: "OAX",
    entidad: "Oaxaca",
    volumen: 18460,
    superficie: 1173,
    rendimiento: 18.12,
    valor: 122358248,
  },
  {
    ranking: 9,
    id: "GTO",
    entidad: "Guanajuato",
    volumen: 5045,
    superficie: 209,
    rendimiento: 23.1,
    valor: 30062016,
  },
  {
    ranking: 10,
    id: "BCS",
    entidad: "Baja California Sur",
    volumen: 4682,
    superficie: 185,
    rendimiento: 23.86,
    valor: 25050118,
  },
  {
    ranking: 11,
    id: "JAL",
    entidad: "Jalisco",
    volumen: 4362,
    superficie: 180,
    rendimiento: 26.54,
    valor: 32869776,
  },
  {
    ranking: 12,
    id: "NAY",
    entidad: "Nayarit",
    volumen: 3806,
    superficie: 196,
    rendimiento: 19.26,
    valor: 30004408,
  },
  {
    ranking: 13,
    id: "SLP",
    entidad: "San Luis Potosí",
    volumen: 2647,
    superficie: 92,
    rendimiento: 28.54,
    valor: 14402750,
  },
  {
    ranking: 14,
    id: "TAB",
    entidad: "Tabasco",
    volumen: 1827,
    superficie: 202,
    rendimiento: 9.43,
    valor: 7518679,
  },
  {
    ranking: 15,
    id: "BCN",
    entidad: "Baja California",
    volumen: 1765,
    superficie: 81,
    rendimiento: 21.64,
    valor: 6988552,
  },
  {
    ranking: 16,
    id: "CHS",
    entidad: "Chiapas",
    volumen: 580,
    superficie: 44,
    rendimiento: 16.37,
    valor: 3554297,
  },
  {
    ranking: 17,
    id: "VER",
    entidad: "Veracruz",
    volumen: 514,
    superficie: 23,
    rendimiento: 22.8,
    valor: 2372262,
  },
  {
    ranking: 18,
    id: "PUE",
    entidad: "Puebla",
    volumen: 480,
    superficie: 22,
    rendimiento: 19.74,
    valor: 2346552,
  },
  {
    ranking: 19,
    id: "ZAC",
    entidad: "Zacatecas",
    volumen: 412,
    superficie: 14,
    rendimiento: 30.07,
    valor: 2186536,
  },
  {
    ranking: 20,
    id: "NL",
    entidad: "Nuevo León",
    volumen: 372,
    superficie: 18,
    rendimiento: 20.99,
    valor: 2384128,
  },
  {
    ranking: 21,
    id: "YUC",
    entidad: "Yucatán",
    volumen: 235,
    superficie: 16,
    rendimiento: 13.69,
    valor: 1674151,
  },
  {
    ranking: 22,
    id: "SIN",
    entidad: "Sinaloa",
    volumen: 200,
    superficie: 9,
    rendimiento: 22.23,
    valor: 2600910,
  },
  {
    ranking: 23,
    id: "EM",
    entidad: "México",
    volumen: 94,
    superficie: 5,
    rendimiento: 17.99,
    valor: 564866,
  },
  {
    ranking: 24,
    id: "TAMP",
    entidad: "Tamaulipas",
    volumen: 38,
    superficie: 3,
    rendimiento: 12.81,
    valor: 161836,
  },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { id: "CHN", ranking: 1, pais: "China", superficie: 391783 },
  { id: "CHN", ranking: 2, pais: "China, Continental", superficie: 387797 },
  { id: "AFG", ranking: 3, pais: "Afganistán", superficie: 75884 },
  { id: "IND", ranking: 4, pais: "India", superficie: 68000 },
  { id: "TUR", ranking: 5, pais: "Turquía", superficie: 62724 },
  { id: "KAZ", ranking: 6, pais: "Kazajstán", superficie: 49383 },
  { id: "GTM", ranking: 7, pais: "Guatemala", superficie: 33437 },
  { id: "IRN", ranking: 8, pais: "Irán", superficie: 32000 },
  { id: "BGD", ranking: 9, pais: "Bangladesh", superficie: 27570 },
  { id: "BRA", ranking: 10, pais: "Brasil", superficie: 27457 },
  { id: "ITA", ranking: 11, pais: "Italia", superficie: 22890 },
  { id: "USA", ranking: 12, pais: "Estados Unidos de América", superficie: 18211 },
  { id: "MEX", ranking: 13, pais: "México", superficie: 17886 },
  { id: "ESP", ranking: 14, pais: "España", superficie: 16220 },
  { id: "MAR", ranking: 15, pais: "Marruecos", superficie: 14698 },
  { ranking: "", pais: "Otros", superficie: 208340 },
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
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
];

// Valores anuales de importación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las importaciones del producto
const importacion_balanza = [
  30567, 38142, 18750, 16105, 31311, 18454, 29319, 32265, 44096, 27069, 10619,
  8832, 11243,
];

// Valores anuales de exportación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las exportaciones del producto
const exportacion_balanza = [
  150816, 146437, 134574, 145688, 142146, 147705, 157070, 142199, 132744,
  105054, 106368, 97383, 120074,
];

// Tabla de los principales destinos de exportación
// Cada objeto representa un país y el valor (en USD) de exportaciones realizadas hacia ese país
const tab_destino_exportacion = [
  { num: 1, pais: "Japón", valor: 276751 },
  { num: 2, pais: "Belice", valor: 3938 },
];

// Años de refeencia para los datos de producción historica
const labels_historica_producto = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  2023,
];

// Producción histórica (en toneladas) por región desde 2010 hasta 2023
// Cada objeto contiene el nombre de una region('nom') y arreglo ('fila')
const produccion_historica_producto = [
  {
    nom: "Sierra de Flores Magón",
    fila: [
      1398.66, 2112.64, 2620.65, 1812.26, 1542.83, 1975.56, 1756.72, 1877.48,
      1740.72, 1986.98, 2145.19, 2257.01, 2192.17, 1795.46,
    ],
  },
  {
    nom: "Costa",
    fila: [
      2512.1, 2587.77, 1961.2, 2071.75, 2045.72, 1257, 1557.1, 1698.01, 1866.48,
      2088, 2191.75, 2430.75, 2400.76, 2431.04,
    ],
  },
  {
    nom: "Istmo",
    fila: [
      14301.78, 21961.18, 17385.04, 11999.78, 11147.35, 10063.76, 10762.48,
      12449.14, 12484.67, 12882.46, 12221.48, 13322.33, 13164.66, 13216.1,
    ],
  },
  {
    nom: "Mixteca",
    fila: [
      305.5, 301.02, 302.14, 226.9, 142.4, 41.5, 113.35, 103.5, 77.2, 99.65,
      95.2, 98.33, 89.11, 103.71,
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [
      540, 682.67, 800, 580, 483, 388.96, 540, 425.5, 448.8, 463.05, 511.92,
      520.03, 539.79, 551.58,
    ],
  },
  {
    nom: "Valles Centrales",
    fila: [
      579.24, 636.2, 256.53, 338.42, 314.06, 321.53, 315.25, 328.37, 341.17,
      361.48, 382.12, 370.69, 383.04, 361.95,
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
    region: "Istmo",
    volumen: 13216,
    superficie: 933,
    rendimiento: 14.02,
    valor: 89447132,
    cantidad: 11,
  },
  {
    region: "Costa",
    volumen: 2431,
    superficie: 95,
    rendimiento: 25.96,
    valor: 13133641,
    cantidad: 4,
  },
  {
    region: "Sierra de Flores Magón",
    volumen: 1795,
    superficie: 91,
    rendimiento: 19.87,
    valor: 12244520,
    cantidad: 6,
  },
  {
    region: "Sierra Sur",
    volumen: 552,
    superficie: 29,
    rendimiento: 19.02,
    valor: 3438075,
    cantidad: 1,
  },
  {
    region: "Valles Centrales",
    volumen: 362,
    superficie: 17,
    rendimiento: 21.97,
    valor: 3352631,
    cantidad: 3,
  },
  {
    region: "Mixteca",
    volumen: 104,
    superficie: 9,
    rendimiento: 12.16,
    valor: 742250,
    cantidad: 3,
  },
];

// Datos de producción por grupo indígena
// Primer array: nombres de pueblos indígenas y categoría "No es pueblo indígena"
// Segundo array: volumen producido en toneladas por cada grupo correspondiente
const pub_indigenas_producto = [
  [
    "No es pueblo indigena",
    "Zapoteco",
    "Zoque",
    "Huave",
    "Mixteco",
    "Mazateco",
    "Mixe",
    "Cuicateco",
    "Nahua",
  ],
  [4388, 7653, 1751, 1349, 1271, 818, 605, 359, 265],
];

// Datos de estacionalidad del producto por mes
// Cada número representa una medida relativa o índice de producción o actividad para cada mes del año,
// probablemente de enero (índice 0) a diciembre (índice 11)
const estacionalidad_producto = [90, 622, 272, 163, 96, 22, 0, 0, 0, 13, 40, 4];
