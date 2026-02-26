const regionesConMunicipios = {
  "Sierra de Flores Magón": [
    { id: 20545, volumen: 3158, valor: 128878, nombre: "Teotitlán de Flores Magón" },
    { id: 20041, volumen: 309, valor: 13032, nombre: "Huautla de Jiménez" },
    { id: 20406, volumen: 278, valor: 12079, nombre: "Santa María Chilchotla" },
    { id: 20058, volumen: 256, valor: 10819, nombre: "Mazatlán Villa de Flores" },
    { id: 20171, volumen: 242, valor: 10269, nombre: "San José Tenango" },
    { id: 20244, volumen: 129, valor: 6093, nombre: "San Martín Toxpalan" },
    { id: 20490, volumen: 125, valor: 5802, nombre: "Santiago Texcalcingo" },
    { id: 20434, volumen: 121, valor: 5546, nombre: "Santa María Teopoxco" },
    { id: 20177, volumen: 103, valor: 4714, nombre: "San Juan Bautista Cuicatlán" },
    { id: 20142, volumen: 91, valor: 4085, nombre: "San Francisco Huehuetlán" },
    { id: 20163, volumen: 90, valor: 4080, nombre: "San Jerónimo Tecóatl" },
    { id: 20431, volumen: 89, valor: 4186, nombre: "Santa María Tecomavaca" },
    { id: 20326, volumen: 89, valor: 4040, nombre: "San Pedro Sochiápam" },
    { id: 20024, volumen: 85, valor: 3730, nombre: "Cuyamecalco Villa de Zaragoza" },
    { id: 20206, volumen: 83, valor: 3669, nombre: "San Juan de Los Cués" },
    { id: 20330, volumen: 82, valor: 3675, nombre: "San Pedro Teutila" },
    { id: 20234, volumen: 82, valor: 3648, nombre: "San Lucas Zoquiápam" },
    { id: 20098, volumen: 80, valor: 3658, nombre: "San Andrés Teotilálpam" },
    { id: 20019, volumen: 73, valor: 3385, nombre: "Concepción Pápalo" },
    { id: 20322, volumen: 73, valor: 3280, nombre: "San Pedro Ocopetatillo" },
    { id: 20478, volumen: 71, valor: 3267, nombre: "Santiago Nacaltepec" },
    { id: 20396, volumen: 60, valor: 2863, nombre: "Santa María La Asunción" },
    { id: 20558, volumen: 57, valor: 2633, nombre: "Valerio Trujano" },
    { id: 20027, volumen: 56, valor: 2724, nombre: "Chiquihuitlán de Benito Juárez" },
    { id: 20425, volumen: 56, valor: 2589, nombre: "Santa María Pápalo" },
    { id: 20527, volumen: 53, valor: 2262, nombre: "Santos Reyes Pápalo" },
    { id: 20187, volumen: 51, valor: 2216, nombre: "San Juan Coatzóspam" },
    { id: 20116, volumen: 50, valor: 2373, nombre: "San Bartolomé Ayautla" },
    { id: 20438, volumen: 48, valor: 2207, nombre: "Santa María Tlalixtac" },
    { id: 20109, volumen: 47, valor: 2084, nombre: "San Antonio Nanahuatípam" },
    { id: 20416, volumen: 47, valor: 2160, nombre: "Santa María Ixcatlán" },
    { id: 20220, volumen: 46, valor: 2201, nombre: "San Juan Tepeuxila" }
  ],
  "Valles Centrales": [
    { id: 20067, volumen: 1093, valor: 38773, nombre: "Oaxaca de Juárez" },
    { id: 20068, volumen: 596, valor: 20821, nombre: "Ocotlán de Morelos" }
  ],
  "Sierra Norte": [
    { id: 20190, volumen: 155, valor: 6493, nombre: "San Juan Cotzocón" },
    { id: 20207, volumen: 78, valor: 3508, nombre: "San Juan Mazatlán" }
  ],
  Istmo: [
    { id: 20057, volumen: 130, valor: 5561, nombre: "Matías Romero Avendaño" },
    { id: 20198, volumen: 74, valor: 3172, nombre: "San Juan Guichicovi" }
  ],
  Papaloapan: [
    { id: 20559, volumen: 99, valor: 4107, nombre: "San Juan Bautista Valle Nacional" },
    { id: 20278, volumen: 81, valor: 3442, nombre: "San Miguel Soyaltepec" },
    { id: 20417, volumen: 79, valor: 3312, nombre: "Santa María Jacatepec" },
    { id: 20184, volumen: 72, valor: 3016, nombre: "San Juan Bautista Tuxtepec" },
    { id: 20205, volumen: 67, valor: 2954, nombre: "San Juan Lalana" },
    { id: 20498, volumen: 62, valor: 2847, nombre: "Santiago Yaveo" },
    { id: 20044, volumen: 57, valor: 2422, nombre: "Loma Bonita" },
    { id: 20468, volumen: 56, valor: 2436, nombre: "Santiago Jocotepec" },
    { id: 20002, volumen: 53, valor: 2233, nombre: "Acatlán de Pérez Figueroa" },
    { id: 20232, volumen: 50, valor: 2072, nombre: "San Lucas Ojitlán" }
  ],
  Costa: [
    { id: 20334, volumen: 73, valor: 3242, nombre: "Villa de Tututepec de Melchor Ocampo" },
    { id: 20509, volumen: 59, valor: 2600, nombre: "Santo Domingo de Morelos" },
    { id: 20439, volumen: 47, valor: 2274, nombre: "Santa María Tonameca" }
  ],
  Mixteca: [
    { id: 20208, volumen: 59, valor: 2510, nombre: "San Juan Mixtepec" },
    { id: 20397, volumen: 56, valor: 2245, nombre: "Heroica Ciudad de Tlaxiaco" }
  ]
};
const tab_mex_sub_pro = [
  {
    ranking: 1,
    id: "JAL",
    entidad: "Jalisco",
    volumen: 1715938,
    precio: 30,
    valor: 47456882000,
  },
  {
    ranking: 2,
    id: "PUE",
    entidad: "Puebla",
    volumen: 475816,
    precio: 29,
    valor: 12356742000,
  },
  {
    ranking: 3,
    id: "SON",
    entidad: "Sonora",
    volumen: 181924,
    precio: 31,
    valor: 5516299000,
  },
  {
    ranking: 4,
    id: "SLP",
    entidad: "San Luis Potosí",
    volumen: 113599,
    precio: 29,
    valor: 3105398000,
  },
  {
    ranking: 5,
    id: "YUC",
    entidad: "Yucatán",
    volumen: 111177,
    precio: 28,
    valor: 3214287000,
  },
  {
    ranking: 6,
    id: "NL",
    entidad: "Nuevo León",
    volumen: 95245,
    precio: 29,
    valor: 2706889000,
  },
  {
    ranking: 7,
    id: "DGO",
    entidad: "Durango",
    volumen: 78256,
    precio: 27,
    valor: 2024376000,
  },
  {
    ranking: 8,
    id: "SIN",
    entidad: "Sinaloa",
    volumen: 76946,
    precio: 28,
    valor: 2209239000,
  },
  {
    ranking: 9,
    id: "GTO",
    entidad: "Guanajuato",
    volumen: 69418,
    precio: 33,
    valor: 2246766000,
  },
  {
    ranking: 10,
    id: "COA",
    entidad: "Coahuila",
    volumen: 61700,
    precio: 26,
    valor: 1566610000,
  },
  {
    ranking: 11,
    id: "BCN",
    entidad: "Baja California",
    volumen: 31849,
    precio: 26,
    valor: 820578000,
  },
  {
    ranking: 12,
    id: "NAY",
    entidad: "Nayarit",
    volumen: 25199,
    precio: 26,
    valor: 664613000,
  },
  {
    ranking: 13,
    id: "MICH",
    entidad: "Michoacán",
    volumen: 20736,
    precio: 30,
    valor: 602715000,
  },
  {
    ranking: 14,
    id: "QRO",
    entidad: "Querétaro",
    volumen: 19701,
    precio: 30,
    valor: 569460000,
  },
  {
    ranking: 15,
    id: "VER",
    entidad: "Veracruz",
    volumen: 17550,
    precio: 32,
    valor: 576807000,
  },
  {
    ranking: 16,
    id: "EM",
    entidad: "México",
    volumen: 15731,
    precio: 26,
    valor: 439960000,
  },
  {
    ranking: 17,
    id: "GRO",
    entidad: "Guerrero",
    volumen: 9090,
    precio: 35,
    valor: 313488000,
  },
  {
    ranking: 18,
    id: "AGS",
    entidad: "Aguascalientes",
    volumen: 8900,
    precio: 29,
    valor: 262544000,
  },
  {
    ranking: 19,
    id: "OAX",
    entidad: "Oaxaca",
    volumen: 6879,
    precio: 28,
    valor: 194001000,
  },
];

const tab_mex_pro = [
  { ranking: 1, id: "VER", entidad: "Veracruz", volumen: 553792, peso: 2, precio: 40.62, valor: 22827305 },
  { ranking: 2, id: "JAL", entidad: "Jalisco", volumen: 454465, peso: 2, precio: 46.12, valor: 18187701 },
  { ranking: 3, id: "AGS", entidad: "Aguascalientes", volumen: 437743, peso: 2, precio: 42.25, valor: 18120937 },
  { ranking: 4, id: "QRO", entidad: "Querétaro", volumen: 393543, peso: 2, precio: 45.79, valor: 17768479 },
  { ranking: 5, id: "DGO", entidad: "Durango", volumen: 288786, peso: 1, precio: 39.50, valor: 11594217 },
  { ranking: 6, id: "CHS", entidad: "Chiapas", volumen: 254077, peso: 2, precio: 49.56, valor: 10890263 },
  { ranking: 7, id: "GTO", entidad: "Guanajuato", volumen: 229844, peso: 2, precio: 42.18, valor: 9678714 },
  { ranking: 8, id: "PUE", entidad: "Puebla", volumen: 217257, peso: 2, precio: 35.59, valor: 8236229 },
  { ranking: 9, id: "YUC", entidad: "Yucatán", volumen: 187964, peso: 2, precio: 43.30, valor: 8603122 },
  { ranking: 10, id: "SIN", entidad: "Sinaloa", volumen: 154634, peso: 2, precio: 41.87, valor: 6491539 },
  { ranking: 11, id: "EM", entidad: "México", volumen: 120784, peso: 2, precio: 46.55, valor: 5563303 },
  { ranking: 12, id: "SLP", entidad: "San Luis Potosí", volumen: 110674, peso: 2, precio: 44.87, valor: 4569495 },
  { ranking: 13, id: "COA", entidad: "Coahuila", volumen: 96857, peso: 2, precio: 31.94, valor: 3602181 },
  { ranking: 14, id: "HGO", entidad: "Hidalgo", volumen: 93699, peso: 2, precio: 40.47, valor: 3961596 },
  { ranking: 15, id: "NL", entidad: "Nuevo León", volumen: 81724, peso: 2, precio: 38.53, valor: 3365407 },
  { ranking: 16, id: "MICH", entidad: "Michoacán", volumen: 75700, peso: 2, precio: 36.70, valor: 2849348 },
  { ranking: 17, id: "MOR", entidad: "Morelos", volumen: 73330, peso: 2, precio: 43.19, valor: 3158293 },
  { ranking: 18, id: "SON", entidad: "Sonora", volumen: 45363, peso: 1, precio: 19.05, valor: 1827534 },
  { ranking: 19, id: "NAY", entidad: "Nayarit", volumen: 41083, peso: 2, precio: 40.44, valor: 1665065 },
  { ranking: 20, id: "CAM", entidad: "Campeche", volumen: 24032, peso: 2, precio: 44.72, valor: 1031886 },
  { ranking: 21, id: "TAB", entidad: "Tabasco", volumen: 22480, peso: 2, precio: 48.74, valor: 1057922 },
  { ranking: 22, id: "COL", entidad: "Colima", volumen: 13817, peso: 2, precio: 36.86, valor: 586792 },
  { ranking: 23, id: "OAX", entidad: "Oaxaca", volumen: 13358, peso: 2, precio: 38.88, valor: 550891 },
  { ranking: 24, id: "GRO", entidad: "Guerrero", volumen: 11735, peso: 2, precio: 46.00, valor: 536244 },
  { ranking: 25, id: "QR", entidad: "Quintana Roo", volumen: 6832, peso: 2, precio: 51.54, valor: 335131 },
  { ranking: 26, id: "CHIH", entidad: "Chihuahua", volumen: 3279, peso: 2, precio: 36.23, valor: 127974 },
  { ranking: 27, id: "ZAC", entidad: "Zacatecas", volumen: 3108, peso: 2, precio: 46.18, valor: 139280 },
  { ranking: 28, id: "BC", entidad: "Baja California", volumen: 1143, peso: 2, precio: 38.44, valor: 43948 },
  { ranking: 29, id: "TLAX", entidad: "Tlaxcala", volumen: 835, peso: 2, precio: 45.37, valor: 37750 },
  { ranking: 30, id: "BCS", entidad: "Baja California Sur", volumen: 787, peso: 2, precio: 45.25, valor: 37733 },
  { ranking: 31, id: "TAM", entidad: "Tamaulipas", volumen: 439, peso: 2, precio: 37.92, valor: 17104 },
  { ranking: 32, id: "CDMX", entidad: "Ciudad de México", volumen: 51, peso: 2, precio: 47.26, valor: 2436 },
];

const tabla_paises_prod = [
  { id: "CHN", ranking: 1, pais: "China", volumen: 27509045 },
  { id: "CHN", ranking: 2, pais: "China, Continental", volumen: 26418926 },
  { id: "BRA", ranking: 3, pais: "Brasil", volumen: 21115786 },
  { id: "IDN", ranking: 4, pais: "Indonesia", volumen: 9356402 },
  { id: "IND", ranking: 5, pais: "India", volumen: 8019410 },
  { id: "RUS", ranking: 6, pais: "Federación de Rusia", volumen: 7937291 },
  { id: "MEX", ranking: 7, pais: "México", volumen: 6005700 },
  { id: "PAK", ranking: 8, pais: "Pakistán", volumen: 4001000 },
  { id: "IRN", ranking: 9, pais: "Irán (República Islámica de)", volumen: 3899587 },
  { id: "EGY", ranking: 10, pais: "Egipto", volumen: 3608823 },
  { id: "TUR", ranking: 11, pais: "Türkiye", volumen: 3599042 },
  { id: "POL", ranking: 12, pais: "Polonia", volumen: 3518159 },
  { id: "JPN", ranking: 13, pais: "Japón", volumen: 3206004 },
  { ranking: "", pais: "Otros", volumen:   72491296},


];



const agrupado2 = {};

tabla_paises_prod.forEach((item) => {
  if (!agrupado2[item.id]) {
    agrupado2[item.id] = { ...item };
  } else {
    // Sumamos superficie
    agrupado2[item.id].superficie += item.superficie;

    agrupado2[item.id].volumen += item.volumen;
  }
});

// Convertimos el objeto agrupado a arreglo y ajustamos el ranking
const paises_datos_pro = Object.values(agrupado2).map((item, i) => ({
  ...item,
  ranking: i + 1,
}));

const tabla_paises_sub_prod = [
  //12
  { id: "CHN", ranking: 1, pais: "China", volumen: 621844040 },
  { id: "CHN", ranking: 2, pais: "China, Continental", volumen: 613161060 },
  { id: "IDN", ranking: 3, pais: "Indonesia", volumen: 137976993 },
  { id: "IND", ranking: 4, pais: "India", volumen: 126048497 },
  {
    id: "USA",
    ranking: 5,
    pais: "Estados Unidos de América",
    volumen: 116042457,
  },
  { id: "BRA", ranking: 6, pais: "Brasil", volumen: 61981178 },
  { id: "MEX", ranking: 7, pais: "México", volumen: 61628301 },
  { id: "RUS", ranking: 8, pais: "Federación de Rusia", volumen: 48276871 },
  { id: "JPN", ranking: 9, pais: "Japón", volumen: 45875475 },
  { id: "PAK", ranking: 10, pais: "Pakistán", volumen: 23570064 },
  { id: "TUR", ranking: 11, pais: "Turquía", volumen: 21046572 },
  { id: "NGA", ranking: 12, pais: "Nigeria", volumen: 17253832 },
  { id: "COL", ranking: 13, pais: "Colombia", volumen: 17062669 },
  { ranking: "", pais: "Otros ", volumen: 412457884 },
];

const agrupado = {};

tabla_paises_sub_prod.forEach((item) => {
  if (!agrupado[item.id]) {
    agrupado[item.id] = { ...item };
  } else {
    // Sumamos superficie
    agrupado[item.id].superficie += item.superficie;

    agrupado[item.id].volumen += item.volumen;
  }
});

// Convertimos el objeto agrupado a arreglo y ajustamos el ranking
const paises_datos_sub_pro = Object.values(agrupado).map((item, i) => ({
  ...item,
  ranking: i + 1,
}));

const tabla_produccion_producto = [
  {
    region: "Sierra de Flores Magón", // Denominada 'Cañada' en la imagen
    volumen: 6790, //
    peso: 2, 
    precio: 45.04, //
    valor: 290953, //
    municipios: 45, //
  },
  {
    region: "Valles Centrales",
    volumen: 2198, //
    peso: 2,
    precio: 32.12, //
    valor: 76023, //
    municipios: 121, //
  },
  {
    region: "Mixteca",
    volumen: 1058, //
    peso: 1,
    precio: 40.73, //
    valor: 43067, //
    municipios: 155, //
  },
  {
    region: "Papaloapan",
    volumen: 1001, //
    peso: 2,
    precio: 42.42, //
    valor: 42561, //
    municipios: 20, //
  },
  {
    region: "Istmo",
    volumen: 697, //
    peso: 1,
    precio: 43.45, //
    valor: 30210, //
    municipios: 41, //
  },
  {
    region: "Costa",
    volumen: 671, //
    peso: 2,
    precio: 46.58, //
    valor: 31958, //
    municipios: 50, //
  },
  {
    region: "Sierra de Juárez", // Denominada 'Sierra Norte' en la imagen
    volumen: 483, //
    peso: 2,
    precio: 35.65, //
    valor: 18844, //
    municipios: 68, //
  },
  {
    region: "Sierra Sur",
    volumen: 460, //
    peso: 2,
    precio: 36.46, //
    valor: 17275, //
    municipios: 70, //
  },
];

const tabla_produccion_sub_producto = [
  {
    region: "Valles Centrales",
    volumen: 1957,
    precio: 26,
    valor: 49953000,
    municipios: 121,
  },
  {
    region: "Papaloapan",
    volumen: 1343,
    precio: 28,
    valor: 37923000,
    municipios: 20,
  },
  {
    region: "Istmo",
    volumen: 973,
    precio: 30,
    valor: 28532000,
    municipios: 41,
  },
  {
    region: "Sierra de Juárez",
    volumen: 669,
    precio: 32,
    valor: 20642000,
    municipios: 69,
  },
  {
    region: "Mixteca",
    volumen: 596,
    precio: 26,
    valor: 15822000,
    municipios: 155,
  },
  {
    region: "Sierra Sur",
    volumen: 551,
    precio: 27,
    valor: 15076000,
    municipios: 69,
  },
  {
    region: "Costa",
    volumen: 434,
    precio: 36,
    valor: 15901000,
    municipios: 50,
  },
  {
    region: "Sierra de Flores Magón",
    volumen: 355,
    precio: 29,
    valor: 10154000,
    municipios: 45,
  },
];

/* Datos grafica VOLUMEN DE PRODUCCION POR PUEBLO INDIGENA CARNE */
const pub_indigenas_producto = [
  [
    "NO PUEBLO INDIGENA",
    "MAZATECO",
    "ZAPOTECO",
    "MIXTECO",
    "CHINANTECO",
    "CUICATECO",
    "MIXE",
    "CHATINO",
    "ZOQUE",
    "CHONTAL DE OAXACA",
    "HUAVE",
    "TRIQUI",
    "CHOCHOLTECO",
  ],
  [2229.046, 5475.397, 2160.727, 1402.182, 743.78, 584.823, 488.836, 88, 23, 19,38,57,2],
];

/* Datos  grafica VOLUMEN DE PRODUCCION POR PUEBLO INDIGENA	LECHE*/
const pub_indigenas_sub_producto = [
  [
    "NO PUEBLO INDIGENA",
    "ZAPOTECO",
    "CHINANTECO",
    "MIXTECO",
    "MIXE",
    "MAZATECO",
    "ZOQUE",
    "CHONTAL DE OAXACA",
    "CHATINO",
    "NAHUA",
    "CUICATECO",
    "HUAVE",
    "TRIQUI",
    "AMUZGO",
    "CHOCHOLTECO",
  ],
  [1810, 1857, 1175, 679, 533, 392, 91, 90, 87, 51, 45, 44, 13, 10, 3],
];

/* Datos Grafica ESTACIONALIDAD DE LA PRODUCCION EN OAXACA CARNE */
const estacionalidad_producto = [
  95, 93, 114, 80, 103, 106, 117, 113, 115, 123, 126, 127,
];

const estacionalidad_sub_producto = [
  77, 79, 94, 89, 104, 127, 125, 88, 134, 82, 74, 80,
];
