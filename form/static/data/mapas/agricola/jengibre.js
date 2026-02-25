// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  Papaloapan: [
    {
      id: 20136,
      superficie: 44,
      volumen: 360.8,
      nombre: "San Felipe Usila",
    },
  ],
};

// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    id: "PUE",
    ranking: 1,
    entidad: "Puebla",
    volumen: 2457.7,
    superficie: 197,
    rendimiento: 12.37,
    valor: 51597180,
  },
  {
    id: "OAX",
    ranking: 2,
    entidad: "Oaxaca",
    volumen: 360.8,
    superficie: 44,
    rendimiento: 8.2,
    valor: 5218171.02,
  },
  {
    id: "GRO",
    ranking: 3,
    entidad: "Guerrero",
    volumen: 11.16,
    superficie: 2.3,
    rendimiento: 4.85,
    valor: 211909.65,
  },
];


//Ranking mundial de países por superficie sembrada (en hectáreas)

const tab_pro_mundial = [
  { ranking: 1, id: "IND", pais: "India", superficie: 191000 },
  { ranking: 2, id: "NGA", pais: "Nigeria", superficie: 89827 },
  { ranking: 3, id: "CHN", pais: "China", superficie: 64653 },
  { ranking: 4, id: "CHN", pais: "China, Continental", superficie: 63806 },
  { ranking: 5, id: "NPL", pais: "Nepal", superficie: 23829 },
  { ranking: 6, id: "THA", pais: "Tailandia", superficie: 10449 },
  { ranking: 7, id: "BGD", pais: "Bangladesh", superficie: 10399 },
  { ranking: 8, id: "PER", pais: "Perú", superficie: 8364 },
  { ranking: 9, id: "IDN", pais: "Indonesia", superficie: 8343 },
  { ranking: 10, id: "LKA", pais: "Sri Lanka", superficie: 5561 },
  { ranking: 11, id: "CMR", pais: "Camerún", superficie: 4970 },
  { ranking: 12, id: "PHL", pais: "Filipinas", superficie: 4816 },
  { ranking: 13, id: "GUY", pais: "Guyana", superficie: 4289 },
  { ranking: 14, id: "ETH", pais: "Etiopía", superficie: 3602 },
  { ranking: 15, id: "MLI", pais: "Malí", superficie: 2876 },
  { ranking: 16, id: "KOR", pais: "República de Corea", superficie: 2303 },
  { ranking: 17, id: "JPN", pais: "Japón", superficie: 1649 },
  { ranking: 18, id: "TWN", pais: "China, Taiwán provincia de", superficie: 847 },
  { ranking: 19, id: "MYS", pais: "Malasia", superficie: 721 },
  { ranking: 20, id: "BTN", pais: "Bhután", superficie: 653 },
  { ranking: 21, id: "FJI", pais: "Fiji", superficie: 631 },
  { ranking: 22, id: "CIV", pais: "Côte d'Ivoire", superficie: 537 },
  { ranking: 23, id: "PAN", pais: "Panamá", superficie: 468 },
  { ranking: 24, id: "UGA", pais: "Uganda", superficie: 465 },
  { ranking: 25, id: "AUS", pais: "Australia", superficie: 450 },
  { ranking: 26, id: "CRI", pais: "Costa Rica", superficie: 332 },
  { ranking: 27, id: "JAM", pais: "Jamaica", superficie: 280 },
  { ranking: 28, id: "MEX", pais: "México", superficie: 238 },
  { ranking: "", pais: "Otros", superficie: 776 },

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
  105, 105, 141, 176, 77, 213, 787, 573, 256, 353, 456, 868, 656, 375.17, 393.95
];

// Valores anuales de exportación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las exportaciones del producto
const exportacion_balanza = [
  23, 40, 0, 65, 451, 124, 217, 221, 831, 1926, 1679, 974, 2249, 2244.37, 1613.02
];

// Tabla de los principales destinos de exportación
// Cada objeto representa un país y el valor (en USD) de exportaciones realizadas hacia ese país
const tab_destino_exportacion = [
  {
    num: 1,
    pais: "Estados Unidos",
    valor: 13341159,
  },
  {
    num: 2,
    pais: "Canadá",
    valor: 845720,
  },
  {
    num: 3,
    pais: "Cuba",
    valor: 40,
  },
];

// Años de refeencia para los datos de producción historica
const labels_historica_producto = [2022, 2023];

// Producción histórica (en toneladas) por región desde 2010 hasta 2023
// Cada objeto contiene el nombre de una region('nom') y arreglo ('fila')
const produccion_historica_producto = [
  {
    nom: "Papaloapan",
    fila: [713.4, 331.8],
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
    volumen: 360.8,
    superficie: 44,
    rendimiento: 8.2,
    valor: 5218171.02,
    cantidad: 1,
  },
];

// Datos de producción por grupo indígena
// Primer array: nombres de pueblos indígenas y categoría "No es pueblo indígena"
// Segundo array: volumen producido en toneladas por cada grupo correspondiente
const pub_indigenas_producto = [["Chinanteco"], [360.8]];
