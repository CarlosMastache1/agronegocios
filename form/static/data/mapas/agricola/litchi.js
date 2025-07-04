// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  Papaloapan: [
    //12
    {
      id: 20417,
      superficie: 103,
      volumen: 328,
      nombre: "Santa María Jacatepec",
    },
    {
      id: 20498,
      superficie: 144,
      volumen: 392,
      nombre: "Santiago Yaveo",
    },
    {
      id: 20166,
      superficie: 60,
      volumen: 187,
      nombre: "San José Chiltepec",
    },
    {
      id: 20044,
      superficie: 42,
      volumen: 130,
      nombre: "Loma Bonita",
    },
    {
      id: 20184,
      superficie: 8,
      volumen: 21,
      nombre: "San Juan Bautista Tuxtepec",
    },
    {
      id: 20136,
      superficie: 10,
      volumen: 19,
      nombre: "San Felipe Usila",
    },
    {
      id: 20559,
      superficie: 5,
      volumen: 14,
      nombre: "San Juan Bautista Valle Nacional",
    },
    {
      id: 20205,
      superficie: 11,
      volumen: 13,
      nombre: "San Juan Lalana",
    },
    {
      id: 20021,
      superficie: 8,
      volumen: 10,
      nombre: "Cosolapa",
    },
    {
      id: 20232,
      superficie: 7,
      volumen: 9,
      nombre: "San Lucas Ojitlán",
    },
    {
      id: 20468,
      superficie: 2,
      volumen: 2,
      nombre: "Santiago Jocotepec",
    },
    {
      id: 20278,
      superficie: 2,
      volumen: 2,
      nombre: "San Miguel Soyaltepec",
    },
  ],

  "Sierra de Juárez": [
    //2
    {
      id: 20190,
      superficie: 183,
      volumen: 409,
      nombre: "San Juan Cotzocón",
    },
    {
      id: 20207,
      superficie: 31,
      volumen: 43,
      nombre: "San Juan Mazatlán",
    },
  ],

  Istmo: [
    //1
    {
      id: 20057,
      superficie: 6,
      volumen: 9,
      nombre: "Matías Romero Avendaño",
    },
  ],
};

// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    id: "VER",
    entidad: "Veracruz",
    volumen: 11789,
    superficie: 1392,
    rendimiento: 8.27,
    valor: 201716421,
  },
  {
    ranking: 2,
    id: "PUE",
    entidad: "Puebla",
    volumen: 8397,
    superficie: 638,
    rendimiento: 10.78,
    valor: 138347065,
  },
  {
    ranking: 3,
    id: "SLP",
    entidad: "San Luis Potosí",
    volumen: 2068,
    superficie: 748,
    rendimiento: 2.78,
    valor: 49371841,
  },
  {
    ranking: 4,
    id: "OAX",
    entidad: "Oaxaca",
    volumen: 1588,
    superficie: 622,
    rendimiento: 2.55,
    valor: 78124584,
  },
  {
    ranking: 5,
    id: "SIN",
    entidad: "Sinaloa",
    volumen: 1039,
    superficie: 240,
    rendimiento: 4.33,
    valor: 23346703,
  },
  {
    ranking: 6,
    id: "NAY",
    entidad: "Nayarit",
    volumen: 833,
    superficie: 199,
    rendimiento: 3.73,
    valor: 21694444,
  },
  {
    ranking: 7,
    id: "HGO",
    entidad: "Hidalgo",
    volumen: 211,
    superficie: 65,
    rendimiento: 3.19,
    valor: 5478289,
  },
  {
    ranking: 8,
    id: "MICH",
    entidad: "Michoacán",
    volumen: 125,
    superficie: 15,
    rendimiento: 8.44,
    valor: 1485196,
  },
  {
    ranking: 9,
    id: "MOR",
    entidad: "Morelos",
    volumen: 32,
    superficie: 5,
    rendimiento: 6.4,
    valor: 236800,
  },
  {
    ranking: 10,
    id: "JAL",
    entidad: "Jalisco",
    volumen: 28,
    superficie: 6,
    rendimiento: 4.76,
    valor: 302821,
  },
  {
    ranking: 11,
    id: "BCS",
    entidad: "Baja California Sur",
    volumen: 5,
    superficie: 1,
    rendimiento: 3.67,
    valor: 149392,
  },
  {
    ranking: 12,
    id: "TAMP",
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
