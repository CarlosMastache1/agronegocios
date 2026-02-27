
//Nombre del producto
const nombre_producto = "Café";

// Datos por regiones del estado de Oaxaca, agrupando municipios con su ID, superficie (Ha) y toneladas producidas
const regionesConMunicipios = {
  "Sierra de Juárez": [
    { id: 20190, superficie: 3332.00, volumen: 4228.90, nombre: "San Juan Cotzocón" },
    { id: 20275, superficie: 2093.00, volumen: 1892.80, nombre: "San Miguel Quetzaltepec" },
    { id: 20042, superficie: 1483.00, volumen: 1182.75, nombre: "Ixtlán de Juárez" },
    { id: 20502, superficie: 1253.00, volumen: 1143.56, nombre: "Santiago Zacatepec" },
    { id: 20207, superficie: 1061.00, volumen: 1033.90, nombre: "San Juan Mazatlán" },
    { id: 20394, superficie: 1033.70, volumen: 954.83, nombre: "Santa María Alotepec" },
    { id: 20231, superficie: 823.20, volumen: 723.05, nombre: "San Lucas Camotlán" },
    { id: 20454, superficie: 796.00, volumen: 719.81, nombre: "Santiago Atitlán" },
    { id: 20457, superficie: 686.50, volumen: 645.53, nombre: "Santiago Camotlán" },
    { id: 20156, superficie: 670.10, volumen: 623.30, nombre: "San Ildefonso Villa Alta" },
    { id: 20541, superficie: 639.50, volumen: 569.66, nombre: "Tanetze de Zaragoza" },
    { id: 20280, superficie: 627.00, volumen: 581.86, nombre: "Villa Talea de Castro" },
    { id: 20003, superficie: 526.50, volumen: 480.35, nombre: "Asunción Cacalotepec" },
    { id: 20465, superficie: 516.25, volumen: 246.96, nombre: "Santiago Ixcuintepec" },
    { id: 20554, superficie: 447.50, volumen: 401.31, nombre: "Totontepec Villa de Morelos" },
    { id: 20200, superficie: 433.00, volumen: 387.00, nombre: "San Juan Juquila Mixes" },
    { id: 20323, superficie: 418.00, volumen: 373.50, nombre: "San Pedro Ocotepec" },
    { id: 20222, superficie: 371.00, volumen: 330.28, nombre: "San Juan Yaeé" },
    { id: 20201, superficie: 360.50, volumen: 326.14, nombre: "San Juan Juquila Vijanos" },
    { id: 20434, superficie: 284.20, volumen: 257.56, nombre: "Santa María Temaxcalapa" },
    { id: 20335, superficie: 273.00, volumen: 251.16, nombre: "San Pedro Yaneri" },
    { id: 20458, superficie: 236.80, volumen: 213.26, nombre: "Santiago Comaltepec" },
    { id: 20435, superficie: 217.50, volumen: 191.80, nombre: "Santa María Tepantlali" },
    { id: 20336, superficie: 216.40, volumen: 205.58, nombre: "San Pedro Yólox" },
    { id: 20288, superficie: 201.50, volumen: 165.30, nombre: "San Miguel Yotao" },
    { id: 20223, superficie: 200.00, volumen: 185.07, nombre: "San Juan Yatzona" },
    { id: 20128, superficie: 164.00, volumen: 155.20, nombre: "San Cristóbal Lachirioag" },
    { id: 20514, superficie: 150.00, volumen: 144.00, nombre: "Santo Domingo Roayaga" },
    { id: 20097, superficie: 99.60, volumen: 89.40, nombre: "San Andrés Solaga" },
    { id: 20471, superficie: 97.50, volumen: 91.18, nombre: "Santiago Lalopa" },
    { id: 20214, superficie: 93.00, volumen: 86.49, nombre: "San Juan Quiotepec" },
    { id: 20216, superficie: 90.50, volumen: 81.78, nombre: "San Juan Tabaá" },
    { id: 20100, superficie: 71.00, volumen: 63.90, nombre: "San Andrés Yaá" },
    { id: 20257, superficie: 66.50, volumen: 63.84, nombre: "San Melchor Betaza" },
    { id: 20031, superficie: 46.30, volumen: 39.43, nombre: "Tamazulápam del Espíritu Santo" }
  ],
  "Sierra de Flores Magón": [
    { id: 20171, superficie: 3745.00, volumen: 2984.80, nombre: "San José Tenango" },
    { id: 20406, superficie: 3571.00, volumen: 2869.83, nombre: "Santa María Chilchotla" },
    { id: 20041, superficie: 1272.50, volumen: 997.38, nombre: "Huautla de Jiménez" },
    { id: 20326, superficie: 1221.00, volumen: 959.85, nombre: "San Pedro Sochiápam" },
    { id: 20058, superficie: 1194.60, volumen: 927.11, nombre: "Mazatlán Villa de Flores" },
    { id: 20029, superficie: 1028.50, volumen: 823.37, nombre: "Eloxochitlán de Flores Magón" },
    { id: 20234, superficie: 995.00, volumen: 774.20, nombre: "San Lucas Zoquiápam" },
    { id: 20040, superficie: 864.50, volumen: 696.60, nombre: "Huautepec" },
    { id: 20187, superficie: 837.00, volumen: 677.32, nombre: "San Juan Coatzóspam" },
    { id: 20098, superficie: 816.00, volumen: 628.68, nombre: "San Andrés Teotilálpam" },
    { id: 20182, superficie: 670.00, volumen: 511.28, nombre: "San Juan Bautista Tlacoatzintepec" },
    { id: 20116, superficie: 624.00, volumen: 519.96, nombre: "San Bartolomé Ayautla" },
    { id: 20330, superficie: 611.00, volumen: 482.40, nombre: "San Pedro Teutila" },
    { id: 20163, superficie: 325.00, volumen: 247.26, nombre: "San Jerónimo Tecóatl" },
    { id: 20027, superficie: 324.00, volumen: 252.80, nombre: "Chiquihuitlán de Benito Juárez" },
    { id: 20139, superficie: 311.00, volumen: 248.67, nombre: "San Francisco Chapulapa" },
    { id: 20396, superficie: 304.00, volumen: 246.51, nombre: "Santa María la Asunción" },
    { id: 20374, superficie: 279.00, volumen: 218.40, nombre: "Santa Cruz Acatepec" },
    { id: 20322, superficie: 237.00, volumen: 181.60, nombre: "San Pedro Ocopetatillo" },
    { id: 20354, superficie: 137.00, volumen: 104.28, nombre: "Santa Ana Ateixtlahuaca" },
    { id: 20438, superficie: 126.00, volumen: 93.22, nombre: "Santa María Tlalixtac" },
    { id: 20220, superficie: 119.00, volumen: 87.69, nombre: "San Juan Tepeuxila" },
    { id: 20355, superficie: 117.00, volumen: 85.60, nombre: "Santa Ana Cuauhtémoc" },
    { id: 20019, superficie: 57.00, volumen: 39.50, nombre: "Concepción Pápalo" },
    { id: 20024, superficie: 49.00, volumen: 37.80, nombre: "Cuyamecalco Villa de Zaragoza" },
    { id: 20425, superficie: 44.00, volumen: 31.20, nombre: "Santa María Pápalo" },
    { id: 20228, superficie: 5.50, volumen: 4.46, nombre: "San Lorenzo Cuaunecuiltitla" }
  ],
  "Sierra Sur": [
    { id: 20073, superficie: 2203.50, volumen: 1912.26, nombre: "Putla Villa de Guerrero" },
    { id: 20495, superficie: 1450.40, volumen: 1773.73, nombre: "Santiago Xanica" },
    { id: 20377, superficie: 1312.80, volumen: 1123.68, nombre: "Santa Cruz Itundujia" },
    { id: 20447, superficie: 1239.30, volumen: 938.60, nombre: "Santa María Zacatepec" },
    { id: 20424, superficie: 1175.20, volumen: 1441.56, nombre: "Santa María Ozolotepec" },
    { id: 20159, superficie: 987.80, volumen: 1150.11, nombre: "San Jerónimo Coatlán" },
    { id: 20392, superficie: 950.00, volumen: 784.35, nombre: "Santa Lucía Monteverde" },
    { id: 20076, superficie: 907.00, volumen: 711.79, nombre: "La Reforma" },
    { id: 20344, superficie: 852.60, volumen: 1050.46, nombre: "San Sebastián Coatlán" },
    { id: 20291, superficie: 482.90, volumen: 605.40, nombre: "San Pablo Coatlán" },
    { id: 20064, superficie: 449.75, volumen: 269.85, nombre: "Nejapa de Madero" },
    { id: 20200, superficie: 433.00, volumen: 387.00, nombre: "San Juan Juquila Mixes" },
    { id: 20088, superficie: 413.90, volumen: 351.39, nombre: "San Andrés Cabecera Nueva" },
    { id: 20211, superficie: 367.60, volumen: 453.59, nombre: "San Juan Ozolotepec" },
    { id: 20254, superficie: 231.60, volumen: 253.00, nombre: "San Mateo Río Hondo" },
    { id: 20516, superficie: 220.50, volumen: 348.00, nombre: "Santo Domingo Teojomulco" },
    { id: 20148, superficie: 210.75, volumen: 270.94, nombre: "San Francisco Ozolotepec" },
    { id: 20448, superficie: 210.50, volumen: 356.52, nombre: "Santa María Zaniza" },
    { id: 20236, superficie: 140.40, volumen: 154.56, nombre: "San Marcial Ozolotepec" },
    { id: 20229, superficie: 101.20, volumen: 155.22, nombre: "San Lorenzo Texmelúcan" },
    { id: 20137, superficie: 82.10, volumen: 122.74, nombre: "San Francisco Cahuacuá" },
    { id: 20020, superficie: 33.20, volumen: 26.16, nombre: "Constancia del Rosario" },
    { id: 20410, superficie: 29.75, volumen: 19.04, nombre: "Santa María Ecatepec" },
    { id: 20008, superficie: 18.75, volumen: 12.38, nombre: "Asunción Tlacolulita" },
    { id: 20125, superficie: 522.75, volumen: 313.65, nombre: "San Carlos Yautepec" }
  ],
  "Costa": [
    { id: 20085, superficie: 5780.50, volumen: 1820.68, nombre: "San Agustín Loxicha" },
    { id: 20071, superficie: 4814.00, volumen: 2749.16, nombre: "Pluma Hidalgo" },
    { id: 20012, superficie: 4472.00, volumen: 1523.86, nombre: "Candelaria Loxicha" },
    { id: 20253, superficie: 3755.00, volumen: 1367.70, nombre: "San Mateo Piñas" },
    { id: 20266, superficie: 3662.50, volumen: 1271.12, nombre: "San Miguel del Puerto" },
    { id: 20324, superficie: 3488.25, volumen: 1337.85, nombre: "San Pedro Pochutla" },
    { id: 20364, superficie: 3301.00, volumen: 1093.40, nombre: "Santa Catarina Juquila" },
    { id: 20153, superficie: 2381.50, volumen: 662.85, nombre: "San Gabriel Mixtepec" },
    { id: 20202, superficie: 2298.50, volumen: 629.86, nombre: "San Juan Lachao" },
    { id: 20334, superficie: 2124.50, volumen: 826.02, nombre: "Villa de Tututepec de Melchor Ocampo" },
    { id: 20272, superficie: 2016.00, volumen: 661.54, nombre: "San Miguel Panixtlahuaca" },
    { id: 20526, superficie: 1520.00, volumen: 558.21, nombre: "Santos Reyes Nopala" },
    { id: 20413, superficie: 1421.75, volumen: 498.33, nombre: "Santa María Huatulco" },
    { id: 20497, superficie: 904.00, volumen: 405.98, nombre: "Santiago Yaitepec" },
    { id: 20082, superficie: 803.75, volumen: 361.46, nombre: "San Agustín Chayuco" },
    { id: 20117, superficie: 760.00, volumen: 313.68, nombre: "San Bartolomé Loxicha" },
    { id: 20467, superficie: 702.00, volumen: 371.80, nombre: "Santiago Jamiltepec" },
    { id: 20433, superficie: 568.00, volumen: 234.47, nombre: "Santa María Temaxcaltepec" },
    { id: 20113, superficie: 471.75, volumen: 204.45, nombre: "San Baltazar Loxicha" },
    { id: 20543, superficie: 454.75, volumen: 185.53, nombre: "Tataltepec de Valdés" },
    { id: 20466, superficie: 353.50, volumen: 200.93, nombre: "Santiago Ixtayutla" },
    { id: 20366, superficie: 326.75, volumen: 121.66, nombre: "Santa Catarina Loxicha" },
    { id: 20439, superficie: 304.75, volumen: 115.14, nombre: "Santa María Tonameca" },
    { id: 20188, superficie: 288.25, volumen: 129.15, nombre: "San Juan Colorado" },
    { id: 20306, superficie: 280.00, volumen: 91.13, nombre: "San Pedro el Alto" },
    { id: 20213, superficie: 250.50, volumen: 102.26, nombre: "San Juan Quiahije" },
    { id: 20318, superficie: 183.50, volumen: 72.80, nombre: "San Pedro Mixtepec" },
    { id: 20302, superficie: 101.50, volumen: 58.87, nombre: "San Pedro Atoyac" },
    { id: 20225, superficie: 62.50, volumen: 29.52, nombre: "San Lorenzo" },
    { id: 20185, superficie: 52.00, volumen: 22.66, nombre: "San Juan Cacahuatepec" },
    { id: 20489, superficie: 49.00, volumen: 24.74, nombre: "Santiago Tetepec" },
    { id: 20367, superficie: 33.50, volumen: 18.09, nombre: "Santa Catarina Mechoacán" },
    { id: 20070, superficie: 27.50, volumen: 10.71, nombre: "Pinotepa de Don Luis" },
    { id: 20111, superficie: 18.00, volumen: 7.10, nombre: "San Antonio Tepetlapa" }
  ],
  "Papaloapan": [
    { id: 20559, superficie: 5111.00, volumen: 5184.00, nombre: "San Juan Bautista Valle Nacional" },
    { id: 20136, superficie: 1886.00, volumen: 1770.30, nombre: "San Felipe Usila" },
    { id: 20205, superficie: 1547.00, volumen: 1116.24, nombre: "San Juan Lalana" },
    { id: 20134, superficie: 1107.00, volumen: 901.06, nombre: "San Felipe Jalapa de Díaz" },
    { id: 20417, superficie: 908.00, volumen: 634.80, nombre: "Santa María Jacatepec" },
    { id: 20309, superficie: 716.00, volumen: 607.20, nombre: "San Pedro Ixcatlán" },
    { id: 20021, superficie: 649.00, volumen: 442.33, nombre: "Cosolapa" },
    { id: 20468, superficie: 613.00, volumen: 462.00, nombre: "Santiago Jocotepec" },
    { id: 20460, superficie: 566.00, volumen: 341.00, nombre: "Santiago Choápam" },
    { id: 20498, superficie: 501.00, volumen: 614.90, nombre: "Santiago Yaveo" },
    { id: 20212, superficie: 449.00, volumen: 230.13, nombre: "San Juan Petlapa" },
    { id: 20009, superficie: 404.00, volumen: 218.83, nombre: "Ayotzintepec" },
    { id: 20002, superficie: 402.00, volumen: 133.77, nombre: "Acatlán de Pérez Figueroa" },
    { id: 20189, superficie: 382.00, volumen: 221.40, nombre: "San Juan Comaltepec" },
    { id: 20232, superficie: 378.00, volumen: 318.50, nombre: "San Lucas Ojitlán" },
    { id: 20169, superficie: 273.00, volumen: 132.88, nombre: "San José Independencia" },
    { id: 20166, superficie: 140.00, volumen: 82.50, nombre: "San José Chiltepec" },
    { id: 20278, superficie: 61.00, volumen: 29.52, nombre: "San Miguel Soyaltepec" }
  ],
  "Istmo": [
    { id: 20470, superficie: 3162.50, volumen: 1548.52, nombre: "Santiago Lachiguiri" },
    { id: 20198, superficie: 2392.25, volumen: 2172.63, nombre: "San Juan Guichicovi" },
    { id: 20513, superficie: 2114.00, volumen: 1837.88, nombre: "Santo Domingo Petapa" },
    { id: 20036, superficie: 2017.50, volumen: 1007.13, nombre: "Guevea de Humboldt" },
    { id: 20412, superficie: 896.25, volumen: 437.94, nombre: "Santa María Guienagati" },
    { id: 20515, superficie: 712.25, volumen: 356.13, nombre: "Santo Domingo Tehuantepec" },
    { id: 20407, superficie: 126.50, volumen: 109.20, nombre: "Santa María Chimalapa" },
    { id: 20472, superficie: 73.75, volumen: 33.93, nombre: "Santiago Laollaga" },
    { id: 20057, superficie: 40.95, volumen: 35.22, nombre: "Matías Romero Avendaño" }
  ],
  "Mixteca": [
    { id: 20481, superficie: 1008.00, volumen: 875.66, nombre: "Santiago Nuyoó" },
    { id: 20446, superficie: 590.50, volumen: 508.95, nombre: "Santa María Yucuhiti" },
    { id: 20397, superficie: 19.05, volumen: 15.60, nombre: "Heroica Ciudad de Tlaxiaco" }
  ]
};
// Tabla de producción estatal
// Contiene datos por entidad federativa: ranking nacional, volumen producido, superficie sembrada,
// rendimiento por hectárea y valor de la producción (en pesos mexicanos)
const tab_pro_nacional = [
  {
    ranking: 1,
    entidad: "Chiapas",
    id: "CHS",
    volumen: 392942.43,
    superficie: 243954.77,
    rendimiento: 1.74,
    valor: 2150205036.46,
  },
  {
    ranking: 2,
    entidad: "Veracruz",
    id: "VER",
    volumen: 256460.37,
    superficie: 145187.60,
    rendimiento: 1.88,
    valor: 1894102655.55,
  },
  {
    ranking: 3,
    entidad: "Puebla",
    id: "PUE",
    volumen: 225663.84,
    superficie: 71531.35,
    rendimiento: 3.17,
    valor: 1515275436.96,
  },
  {
    ranking: 4,
    entidad: "Oaxaca",
    id: "OAX",
    volumen: 90257.11,
    superficie: 132267.90,
    rendimiento: 0.83,
    valor: 516524329.86,
  },
  {
    ranking: 5,
    entidad: "Guerrero",
    id: "GRO",
    volumen: 34991.48,
    superficie: 45568.97,
    rendimiento: 0.87,
    valor: 268951204.42,
  },
  {
    ranking: 6,
    entidad: "Hidalgo",
    id: "HGO",
    volumen: 25774.10,
    superficie: 22252.28,
    rendimiento: 1.16,
    valor: 165583365.11,
  },
  {
    ranking: 7,
    entidad: "Nayarit",
    id: "NAY",
    volumen: 12029.82,
    superficie: 16124.47,
    rendimiento: 0.85,
    valor: 112349118.95,
  },
  {
    ranking: 8,
    entidad: "San Luis Potosí",
    id: "SLP",
    volumen: 9884.90,
    superficie: 16148.20,
    rendimiento: 0.57,
    valor: 90798270.61,
  },
  {
    ranking: 9,
    entidad: "Colima",
    id: "COL",
    volumen: 3635.26,
    superficie: 3003.50,
    rendimiento: 1.14,
    valor: 29862695.80,
  },
  {
    ranking: 10,
    entidad: "Jalisco",
    id: "JAL",
    volumen: 3592.39,
    superficie: 4183.50,
    rendimiento: 1.31,
    valor: 22268749.26,
  },
  {
    ranking: 11,
    entidad: "México",
    id: "MEX",
    volumen: 502.61,
    superficie: 531.46,
    rendimiento: 1.34,
    valor: 3395092.83,
  },
  {
    ranking: 12,
    entidad: "Tabasco",
    id: "TAB",
    volumen: 429.93,
    superficie: 357.50,
    rendimiento: 1.11,
    valor: 3341376.96,
  },
  {
    ranking: 13,
    entidad: "Querétaro",
    id: "QRO",
    volumen: 117.41,
    superficie: 199.00,
    rendimiento: 0.59,
    valor: 1359607.80,
  },
  {
    ranking: 14,
    entidad: "Morelos",
    id: "MOR",
    volumen: 35.81,
    superficie: 24.80,
    rendimiento: 1.47,
    valor: 169184.80,
  },
];

//Ranking mundial de países por superficie sembrada (en hectáreas)
const tab_pro_mundial = [
  
{ id: "SDN", ranking: 1, pais: "Sudán", superficie: 4571307 },
  { id: "BRA", ranking: 2, pais: "Brasil", superficie: 2503889 },
  { id: "IND", ranking: 3, pais: "India", superficie: 1960926 },
  { id: "MMR", ranking: 4, pais: "Myanmar", superficie: 1511407 },
  { id: "IDN", ranking: 5, pais: "Indonesia", superficie: 1268905 },
  { id: "ETH", ranking: 6, pais: "Etiopía", superficie: 1114389 },
  { id: "UGA", ranking: 7, pais: "Uganda", superficie: 916580 },
  { id: "COL", ranking: 8, pais: "Colombia", superficie: 865796 },
  { id: "CAF", ranking: 9, pais: "República Centroafricana", superficie: 824677 },
  { id: "MEX", ranking: 10, pais: "México", superficie: 733171 },
  { id: "VNM", ranking: 11, pais: "Viet Nam", superficie: 692595 },
  { id: "CIV", ranking: 12, pais: "Côte d'Ivoire", superficie: 680318 },
  { id: "TZA", ranking: 13, pais: "República Unida de Tanzanía", superficie: 609637 },
  { id: "SSD", ranking: 14, pais: "Sudán del Sur", superficie: 605046 },
  { id: "GIN", ranking: 15, pais: "Guinea", superficie: 486559 },
  { ranking: "", pais: "Otros", superficie: 6257771
   },
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
  20000, 22000, 24000, 40000, 60000, 80000, 70000, 60000, 50000, 45000, 40000,
  36000, 32627,
];

// Valores anuales de exportación en dólares (USD) por año correspondiente en `labels_balanza`
// Representan el valor de las exportaciones del producto
const exportacion_balanza = [
  120000, 140000, 180000, 160000, 130000, 110000, 120000, 125000, 130000,
  128000, 123000, 137310, 137310,
];

// Tabla de los principales destinos de exportación
// Cada objeto representa un país y el valor (en USD) de exportaciones realizadas hacia ese país
const tab_destino_exportacion = [
  { num: 1, pais: "Estados Unidos", valor: 295137249 },
  { num: 2, pais: "Bélgica", valor: 21650554 },
  { num: 3, pais: "Canada", valor: 20832692 },
  { num: 4, pais: "Alemania", valor: 14331788 },
  { num: 5, pais: "Japón", valor: 6907935 },
  { num: 6, pais: "Italia", valor: 6565001 },
  { num: 7, pais: " Reino Unido", valor: 6538246 },
  { num: 8, pais: "Francia", valor: 5001442 },
  { num: 9, pais: "España", valor: 3188523 },
  { num: 10, pais: "Paises Bajos", valor: 2095466 },
  { num: 11, pais: "Suiza", valor: 1488726 },
  { num: 12, pais: " Nueva Zelanda", valor: 1437270 },
  { num: 13, pais: "Finlandia", valor: 1286959 },
  { num: 14, pais: "Corea del Sur", valor: 920913 },
  { num: 15, pais: "Rusia", valor: 649617 },
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
      35391.83, 37692.23, 21149.6, 19336.88, 17121.99, 11555.92, 15063.49,
      13911.05, 15560.87, 15637.39, 15855.39, 15991.31, 15234.53, 15960.83, 16064.83,
    ],
  },
  {
    nom: "Costa",
    fila: [
      13228.8, 13059.75, 19872.85, 24235.65, 19302.01, 13328.78, 7119.59,
      6762.61, 8274.85, 10069.05, 12606.63, 14112.14, 15416.59, 15413.4, 18082.71,
    ],
  },
  {
    nom: "Istmo",
    fila: [
      21076.69, 23002.99, 14277.82, 12723.94, 12226.66, 8010.87, 6061.85,
      6306.28, 6568.42, 6914.76, 6163.92, 6974.43, 7105.73, 7566.48, 7538.58,

    ],
  },
  {
    nom: "Mixteca",
    fila: [
      2500, 2813, 2855, 2636.7, 1864.9, 1408.2, 1429, 1273.9, 1327, 1373.5,
      1330.96, 1346.82, 1400.46, 1322.07, 1400.21,
    ],
  },
  {
    nom: "Papaloapan",
    fila: [
      30524.92, 28460.38, 20778.75, 21378.75, 20995.65, 13990.4, 9781.84,
      8469.68, 8850.32, 10180.19, 13399.09, 12790.91, 14353.25, 12990.93, 13441.36,
    ],
  },
  {
    nom: "Sierra de Juárez",
    fila: [
      38132.13, 36901.87, 23626.16, 29813.48, 37988.44, 18457.23, 16562.53,
      19033.34, 18957.68, 19673.7, 21362.23, 20004.61, 19956.88, 19089.53, 18743.44, 
    ],
  },
  {
    nom: "Sierra Sur",
    fila: [
      13741.02, 15010.87, 14879.64, 19630.61, 20281.54, 15761.16, 10432.89,
      10331.84, 10914.87, 11980.64, 14963.04, 14683.47, 15609.62, 15350.76, 14985.98,
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
    region: "Sierra Norte",
    volumen: 18743.44,
    superficie: 19645.55,
    rendimiento: 0.93,
    valor: 115115979.51,
    cantidad: 35,
  },
  {
    region: "Costa",
    volumen: 18082.71,
    superficie: 48031.00,
    rendimiento: 0.48,
    valor: 95751245.83,
    cantidad: 35,
  },
  {
    region: "Sierra de Flores Magón",
    volumen: 16064.83,
    superficie: 20317.60,
    rendimiento: 0.80,
    valor: 93449635.90,
    cantidad: 28,
  },
  {
    region: "Sierra Sur",
    volumen: 14985.98,
    superficie: 15027.25,
    rendimiento: 1.12,
    valor: 90026759.70,
    cantidad: 31,
  },
  {
    region: "Papaloapan",
    volumen: 13441.36,
    superficie: 16093.00,
    rendimiento: 0.94,
    valor: 72314449.06,
    cantidad: 22,
  },
  {
    region: "Istmo",
    volumen: 7538.58,
    superficie: 11535.95,
    rendimiento: 0.67,
    valor: 40547054.81,
    cantidad: 9,
  },
  {
    region: "Mixteca",
    volumen: 1400.21,
    superficie: 1617.55,
    rendimiento: 0.86,
    valor: 9319205.05,
    cantidad: 3,
  },
];

// Datos de producción por grupo indígena
// Primer array: nombres de pueblos indígenas y categoría "No es pueblo indígena"
// Segundo array: volumen producido en toneladas por cada grupo correspondiente
const pub_indigenas_producto = [
  [
    "NO PUEBLO INDIGENA",
    "Zapoteco",
    "Mixe",
    "Mazateco",
    "Chinanteco",
    "Mixteco",
    "Chatino",
    "Cuicateco",
    "Chontal De Oaxaca",
  ],
  [11282.58, 23035.34, 15604.73, 13986.05, 12334.76, 8198.35, 3871.25, 1611.36, 332.69],
];

// Datos de estacionalidad del producto por mes
// Cada número representa una medida relativa o índice de producción o actividad para cada mes del año,
// probablemente de enero (índice 0) a diciembre (índice 11)
const estacionalidad_producto = [232, 197, 23, 24, 0, 0, 0, 0, 0, 0, 112, 350];

// Número de municipios productores por región en Oaxaca
// Cada objeto indica la región y la cantidad de municipios que participan en la producción del producto
const tab_mun_producto_oax = [
  { nom: "Sierra de Juárez", num: 35 },
  { nom: "Sierra Sur", num: 24 },
  { nom: "Costa", num: 34 },
  { nom: "Sierra de Flores Magón", num: 28 },
  { nom: "Papaloapan", num: 18 },
  { nom: "Istmo", num: 9 },
  { nom: "Mixteca", num: 3 },
];
