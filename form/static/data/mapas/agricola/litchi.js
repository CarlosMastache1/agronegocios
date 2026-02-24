// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  "Sierra Norte": [
    {
      id: 20190,
      superficie: 183.00,
      volumen: 1172.55,
      nombre: "San Juan Cotzocón"
    },
    {
      id: 20207,
      superficie: 33.50,
      volumen: 61.20,
      nombre: "San Juan Mazatlán"
    }
  ],
  "Papaloapam": [
    {
      id: 20498,
      superficie: 144.00,
      volumen: 1020.28,
      nombre: "Santiago Yaveo"
    },
    {
      id: 20417,
      superficie: 103.00,
      volumen: 831.35,
      nombre: "Santa María Jacatepec"
    },
    {
      id: 20166,
      superficie: 59.50,
      volumen: 480.02,
      nombre: "San José Chiltepec"
    },
    {
      id: 20044,
      superficie: 42.40,
      volumen: 330.20,
      nombre: "Loma Bonita"
    },
    {
      id: 20205,
      superficie: 11.00,
      volumen: 57.20,
      nombre: "San Juan Lalana"
    },
    {
      id: 20136,
      superficie: 10.50,
      volumen: 62.79,
      nombre: "San Felipe Usila"
    },
    {
      id: 20184,
      superficie: 8.20,
      volumen: 58.22,
      nombre: "San Juan Bautista Tuxtepec"
    },
    {
      id: 20021,
      superficie: 8.00,
      volumen: 40.40,
      nombre: "Cosolapa"
    },
    {
      id: 20232,
      superficie: 7.00,
      volumen: 40.46,
      nombre: "San Lucas Ojitlán"
    },
    {
      id: 20559,
      superficie: 5.10,
      volumen: 35.60,
      nombre: "San Juan Bautista Valle Nacional"
    },
    {
      id: 20468,
      superficie: 2.00,
      volumen: 10.00,
      nombre: "Santiago Jocotepec"
    },
    {
      id: 20278,
      superficie: 1.50,
      volumen: 7.80,
      nombre: "San Miguel Soyaltepec"
    }
  ],
  "Istmo": [
    {
      id: 20057,
      superficie: 6.00,
      volumen: 9.10,
      nombre: "Matías Romero Avendaño"
    }
  ]
};
// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  { ranking: 1, id: "VER", entidad: "Veracruz", volumen: 11983.41, superficie: 1342.5, rendimiento: 8.55, valor: 194376631.49 },
  { ranking: 2, id: "PUE", entidad: "Puebla", volumen: 8368.41, superficie: 635.8, rendimiento: 10.87, valor: 137845760.84 },
  { ranking: 3, id: "OAX", entidad: "Oaxaca", volumen: 4217.17, superficie: 624.7, rendimiento: 6.55, valor: 199928544.38 },
  { ranking: 4, id: "SLP", entidad: "San Luis Potosí", volumen: 3127.53, superficie: 753.25, rendimiento: 4.12, valor: 74303187.31 },
  { ranking: 5, id: "SIN", entidad: "Sinaloa", volumen: 1070.3, superficie: 240, rendimiento: 4.52, valor: 23654542.7 },
  { ranking: 6, id: "NAY", entidad: "Nayarit", volumen: 916.93, superficie: 182.25, rendimiento: 4.81, valor: 25571637.11 },
  { ranking: 7, id: "HGO", entidad: "Hidalgo", volumen: 224.51, superficie: 64.9, rendimiento: 3.62, valor: 4233083 },
  { ranking: 8, id: "MICH", entidad: "Michoacán", volumen: 38.3, superficie: 5, rendimiento: 7.66, valor: 353425.12 },
  { ranking: 9, id: "MOR", entidad: "Morelos", volumen: 32, superficie: 5, rendimiento: 6.4, valor: 240000 },
  { ranking: 10, id: "JAL", entidad: "Jalisco", volumen: 28.04, superficie: 6, rendimiento: 4.71, valor: 296066.81 },
  { ranking: 11, id: "TAM", entidad: "Tamaulipas", volumen: 0, superficie: 6, rendimiento: 0, valor: 0 },
];

// Años de refeencia para los datos de producción historica
const labels_historica_producto = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,2022,
  2023, 2024, 
];

// Producción histórica (en toneladas) por región desde 2010 hasta 2023
// Cada objeto contiene el nombre de una region('nom') y arreglo ('fila')
const produccion_historica_producto = [
  {
    nom: "Istmo",
    fila: [null, null, null, null, null, null, null, null, null, 8, 9.06, 9.36, 9.10],
  },
  {
    nom: "Papaloapan",
    fila: [
      6851.5, 3054.54, 2611.13, 1133.78, 2139.24, 1462.88, 2177.94, 11.48,
      2541.53, 1277.69, 2782.71, 1125.95, 2974.32
    ],
  },
  {
    nom: "Sierra de Juárez",
    fila: [
      710.5, 628.68, 305.03, 293.21, 408.8, 430.6, 339.6, 0, 516.4, 375.6,
      763.47, 452.7, 1233.75
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
    volumen: 2974.32,
    superficie: 402.2,
    rendimiento: 6.69,
    valor: 141931535.18,
    cantidad: 16,
  },
  {
    region: "Sierra Norte",
    volumen: 1233.75,
    superficie: 216.5,
    rendimiento: 6.45,
    valor: 57739738.19,
    cantidad: 3,
  },
  {
    region: "Istmo",
    volumen: 9.1,
    superficie: 6,
    rendimiento: 4.55,
    valor: 257271.01,
    cantidad: 1,
  },
];


// Datos de producción por grupo indígena
// Primer array: nombres de pueblos indígenas y categoría "No es pueblo indígena"
// Segundo array: volumen producido en toneladas por cada grupo correspondiente
const pub_indigenas_producto = [
  ["NO PUEBLO INDIGENA", "Chinanteco", "Mixe", "Mazateco"],
  [379.7, 1575.64, 2254.03, 7.8],
];
