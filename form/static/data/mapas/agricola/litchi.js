// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  Papaloapan: [
    //12
    {
      id: 20417,
      territorio: "103",
      toneladas: "328",
    }, //Santa María Jacatepec
    {
      id: 20498,
      territorio: "144",
      toneladas: "392",
    }, //Santiago Yaveo
    {
      id: 20166,
      territorio: "60",
      toneladas: "187",
    }, //San José Chiltepec
    {
      id: 20044,
      territorio: "42",
      toneladas: "130",
    }, //Loma Bonita
    {
      id: 20184,
      territorio: "8",
      toneladas: "21",
    }, //San Juan Bautista Tuxtepec
    {
      id: 20136,
      territorio: "10",
      toneladas: "19",
    }, //San Felipe Usila
    {
      id: 20559,
      territorio: "5",
      toneladas: "14",
    }, //San Juan Bautista Valle Nacional
    {
      id: 20205,
      territorio: "11",
      toneladas: "13",
    }, //San Juan Lalana
    {
      id: 20021,
      territorio: "8",
      toneladas: "10",
    }, //Cosolapa
    {
      id: 20232,
      territorio: "7",
      toneladas: "9",
    }, //San Lucas Ojitlán
    {
      id: 20468,
      territorio: "2",
      toneladas: "2",
    }, //Santiago Jocotepec
    {
      id: 20278,
      territorio: "2",
      toneladas: "2",
    }, //San Miguel Soyaltepec
  ],

  "Sierra de Juárez": [
    //2
    {
      id: 20190,
      territorio: "183",
      toneladas: "409",
    }, //San Juan Cotzocón
    {
      id: 20207,
      territorio: "31",
      toneladas: "43",
    }, //San Juan Mazatlán
  ],

  Istmo: [
    //1
    {
      id: 20057,
      territorio: "6",
      toneladas: "9",
    }, //Matías Romero Avendaño
  ],
};

// Datos agregados por entidad federativa (estado) a nivel nacional
const estados_datos_pro = [
  { id: "VER", territorio: "1,392", toneladas: "11,789" },
  { id: "PUE", territorio: "638", toneladas: "8,397" },
  { id: "SLP", territorio: "748", toneladas: "2,068" },
  { id: "OAX", territorio: "622", toneladas: "1,588" },
  { id: "SIN", territorio: "240", toneladas: "1,039" },
  { id: "NAY", territorio: "199", toneladas: "833" },
  { id: "HGO", territorio: "65", toneladas: "211" },
  { id: "MICH", territorio: "15", toneladas: "125" },
  { id: "MOR", territorio: "5", toneladas: "32" },
  { id: "JAL", territorio: "6", toneladas: "28" },
  { id: "BCS", territorio: "1", toneladas: "5" },
  { id: "TAMP", territorio: "6", toneladas: "-" },
];

// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    entidad: "Veracruz",
    volumen: 11789,
    superficie: 1392,
    rendimiento: 8.27,
    valor: 201716421,
  },
  {
    ranking: 2,
    entidad: "Puebla",
    volumen: 8397,
    superficie: 638,
    rendimiento: 10.78,
    valor: 138347065,
  },
  {
    ranking: 3,
    entidad: "San Luis Potosí",
    volumen: 2068,
    superficie: 748,
    rendimiento: 2.78,
    valor: 49371841,
  },
  {
    ranking: 4,
    entidad: "Oaxaca",
    volumen: 1588,
    superficie: 622,
    rendimiento: 2.55,
    valor: 78124584,
  },
  {
    ranking: 5,
    entidad: "Sinaloa",
    volumen: 1039,
    superficie: 240,
    rendimiento: 4.33,
    valor: 23346703,
  },
  {
    ranking: 6,
    entidad: "Nayarit",
    volumen: 833,
    superficie: 199,
    rendimiento: 3.73,
    valor: 21694444,
  },
  {
    ranking: 7,
    entidad: "Hidalgo",
    volumen: 211,
    superficie: 65,
    rendimiento: 3.19,
    valor: 5478289,
  },
  {
    ranking: 8,
    entidad: "Michoacán",
    volumen: 125,
    superficie: 15,
    rendimiento: 8.44,
    valor: 1485196,
  },
  {
    ranking: 9,
    entidad: "Morelos",
    volumen: 32,
    superficie: 5,
    rendimiento: 6.4,
    valor: 236800,
  },
  {
    ranking: 10,
    entidad: "Jalisco",
    volumen: 28,
    superficie: 6,
    rendimiento: 4.76,
    valor: 302821,
  },
  {
    ranking: 11,
    entidad: "Baja California Sur",
    volumen: 5,
    superficie: 1,
    rendimiento: 3.67,
    valor: 149392,
  },
  {
    ranking: 12,
    entidad: "Tamaulipas",
    volumen: 0,
    superficie: 6,
    rendimiento: 0,
    valor: 0,
  },
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
    nom: "Istmo",
    fila: [, , , , , , , , , 8, 9.06, 9.36],
  },
  {
    nom: "Papaloapan",
    fila: [
      6851.5, 3054.54, 2611.13, 1133.78, 2139.24, 1462.88, 2177.94, 11.48,
      2541.53, 1277.69, 2782.71, 985.95,
    ],
  },
  {
    nom: "Sierra de Juárez",
    fila: [
      710.5, 628.68, 305.03, 293.21, 408.8, 430.6, 339.6, 0, 516.4, 375.6,
      763.47, 452.7,
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
    region: "Papaloapan",
    volumen: 1126,
    superficie: 402,
    rendimiento: 2.23,
    valor: 55600267,
    cantidad: 12,
  },
  {
    region: "Sierra de Juárez",
    volumen: 453,
    superficie: 214,
    rendimiento: 3.57,
    valor: 22094667,
    cantidad: 2,
  },
  {
    region: "Istmo",
    volumen: 9,
    superficie: 6,
    rendimiento: 4.68,
    valor: 429651,
    cantidad: 1,
  },
];

// Datos de producción por grupo indígena
// Primer array: nombres de pueblos indígenas y categoría "No es pueblo indígena"
// Segundo array: volumen producido en toneladas por cada grupo correspondiente
const pub_indigenas_producto = [
  ["NO PUEBLO INDIGENA", "Chinanteco", "Mixe", "Nahua"],
  [9, 1116, 453, 10],
];

// Número de municipios productores por región en Oaxaca
// Cada objeto indica la región y la cantidad de municipios que participan en la producción del producto
const tab_mun_producto_oax = [
  { nom: "Papaloapan", num: 12 },
  { nom: "Sierra de Juárez", num: 2 },
  { nom: "Istmo", num: 1 },
];
