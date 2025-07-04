// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  Papaloapan: [
    {
      id: 20136,
      superficie: 42,
      volumen: 332,
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
    volumen: 2369,
    superficie: 195,
    rendimiento: 11.93,
    valor: 49171129,
  },
  {
    id: "OAX",
    ranking: 2,
    entidad: "Oaxaca",
    volumen: 332,
    superficie: 42,
    rendimiento: 7.9,
    valor: 4635263,
  },
  {
    id: "GRO",
    ranking: 3,
    entidad: "Guerrero",
    volumen: 5,
    superficie: 1,
    rendimiento: 4.85,
    valor: 92084,
  },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  { id: "IND", ranking: 1, pais: "India", superficie: 193000 },
  { id: "NGA", ranking: 2, pais: "Nigeria", superficie: 96120 },
  { id: "CHN", ranking: 3, pais: "China", superficie: 63312 },
  { id: "CHN", ranking: 4, pais: "China, Continental", superficie: 62458 },
  { id: "NPL", ranking: 5, pais: "Nepal", superficie: 22441 },
  { id: "BGD", ranking: 6, pais: "Bangladesh", superficie: 10429 },
  { id: "IDN", ranking: 7, pais: "Indonesia", superficie: 10409 },
  { id: "THA", ranking: 8, pais: "Tailandia", superficie: 10269 },
  { id: "PER", ranking: 9, pais: "Perú", superficie: 8001 },
  { id: "LKA", ranking: 10, pais: "Sri Lanka", superficie: 6736 },
  { id: "CMR", ranking: 11, pais: "Camerún", superficie: 5087 },
  { id: "PHL", ranking: 12, pais: "Filipinas", superficie: 4057 },
  { id: "GUY", ranking: 13, pais: "Guyana", superficie: 3877 },
  { id: "ETH", ranking: 14, pais: "Etiopía", superficie: 3657 },
  { id: "KOR", ranking: 15, pais: "República de Corea", superficie: 3455 },
  { id: "MLI", ranking: 16, pais: "Malí", superficie: 3121 },
  { id: "JPN", ranking: 17, pais: "Japón", superficie: 1830 },
  { id: "TWN", ranking: 18, pais: "China, Taiwán", superficie: 854 },
  { id: "BTN", ranking: 19, pais: "Bhután", superficie: 800 },
  { id: "PAN", ranking: 20, pais: "Panamá", superficie: 650 },
  { id: "FJI", ranking: 21, pais: "Fiji", superficie: 563 },
  { id: "CIV", ranking: 22, pais: "Côte d'Ivoire", superficie: 536 },
  { id: "MEX", ranking: 23, pais: "México", superficie: 433 },
  { ranking: "", pais: "Otros", superficie: 1863 },
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
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
];

// Valores anuales de importación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las importaciones del producto
const importacion_balanza = [
  105, 105, 141, 176, 77, 213, 787, 573, 256, 353, 456, 868, 656,
];

// Valores anuales de exportación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las exportaciones del producto
const exportacion_balanza = [
  23, 40, 0, 65, 451, 124, 217, 221, 831, 1926, 1679, 974, 2249,
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
    volumen: 332,
    superficie: 42,
    rendimiento: 7.9,
    valor: 4635263,
    cantidad: 1,
  },
];

// Datos de producción por grupo indígena
// Primer array: nombres de pueblos indígenas y categoría "No es pueblo indígena"
// Segundo array: volumen producido en toneladas por cada grupo correspondiente
const pub_indigenas_producto = [["Chinanteco"], [332]];
