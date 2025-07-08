/* Preparación de la primera tabla, datos de la producción de carne a nivel internacional.  */
const tabla_pais_pro = document.getElementById("tab_cuerpo_pais_pro");
const total_tab1 = document.getElementById("total_tabla1");
let suma_total1 = 0;

for (let i = 0; i < tabla_paises_prod.length; i++) {
  const fila = document.createElement("tr");

  const celdaRanking = document.createElement("td");
  celdaRanking.textContent = tabla_paises_prod[i].ranking;

  const celdaPais = document.createElement("td");
  celdaPais.textContent = tabla_paises_prod[i].pais;

  const celdaVolumen = document.createElement("td");
  celdaVolumen.textContent =
    tabla_paises_prod[i].volumen.toLocaleString("es-MX");

  fila.appendChild(celdaRanking);
  fila.appendChild(celdaPais);
  fila.appendChild(celdaVolumen);

  tabla_pais_pro.appendChild(fila);
  suma_total1 += tabla_paises_prod[i].volumen;
}
total_tab1.innerHTML = suma_total1.toLocaleString("es-MX");

/* Preparación de la segunda tabla, datos de la producción de leche a nivel internacional.  */
const tabla_pais_sub_pro = document.getElementById("tab_cuerpo_pais_sub_pro");
const total_tab2 = document.getElementById("total_tabla2");
let suma_total2 = 0;
for (let i = 0; i < tabla_paises_sub_prod.length; i++) {
  const fila = document.createElement("tr");

  const celdaRanking = document.createElement("td");
  celdaRanking.textContent = tabla_paises_sub_prod[i].ranking;

  const celdaPais = document.createElement("td");
  celdaPais.textContent = tabla_paises_sub_prod[i].pais;

  const celdaVolumen = document.createElement("td");
  celdaVolumen.textContent =
    tabla_paises_sub_prod[i].volumen.toLocaleString("es-MX");

  fila.appendChild(celdaRanking);
  fila.appendChild(celdaPais);
  fila.appendChild(celdaVolumen);

  tabla_pais_sub_pro.appendChild(fila);
  suma_total2 += tabla_paises_sub_prod[i].volumen;
}
total_tab2.innerHTML = suma_total2.toLocaleString("es-MX");

let currentPage = 1;
let rowsPerPage = 10;
let filteredData = [...tab_mex_sub_pro];

const tableBody = document.querySelector("#dataTable tbody");
const searchInput = document.getElementById("searchInput");
const rowsSelect = document.getElementById("rowsPerPage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");

function renderTable() {
  tableBody.innerHTML = "";
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const pageData = filteredData.slice(start, end);

  for (const row of pageData) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${row.ranking}</td><td>${row.entidad}</td><td>${row.volumen.toLocaleString("es-MX")}</td><td>${row.precio.toFixed(2)}</td><td>${row.valor.toLocaleString("es-MX")}</td>`;
    tableBody.appendChild(tr);
  }

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

function applyFilters() {
  const query = searchInput.value.toLowerCase();
  filteredData = tab_mex_sub_pro.filter(
    (item) =>
      item.entidad.toLowerCase().includes(query) ||
      String(item.id).includes(query)
  );
  currentPage = 1;
  renderTable();
}

searchInput.addEventListener("input", applyFilters);
rowsSelect.addEventListener("change", () => {
  rowsPerPage = parseInt(rowsSelect.value);
  currentPage = 1;
  renderTable();
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
});

nextBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderTable();
  }
});

// Inicializar
renderTable();

let currentPage2 = 1;
let rowsPerPage2 = 10;
let rfilteredData2 = [...tab_mex_pro];

const tableBody2 = document.querySelector("#data2Table tbody");
const searchInput2 = document.getElementById("searchInput2");
const rowsSelect2 = document.getElementById("rowsPerPage2");
const prevBtn2 = document.getElementById("prevBtn2");
const nextBtn2 = document.getElementById("nextBtn2");
const pageInfo2 = document.getElementById("pageInfo2");

function renderTable2() {
  tableBody2.innerHTML = "";
  const start = (currentPage2 - 1) * rowsPerPage2;
  const end = start + rowsPerPage2;
  const pageData = rfilteredData2.slice(start, end);

  for (const row of pageData) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${row.ranking}</td><td>${row.entidad}</td><td>${row.volumen.toLocaleString("es-MX")}</td><td>${row.peso.toFixed(2)}</td><td>${row.precio.toLocaleString("es-MX")}</td><td>${row.valor}</td>`;
    tableBody2.appendChild(tr);
  }

  const totalPages2 = Math.ceil(rfilteredData2.length / rowsPerPage2);
  pageInfo2.textContent = `Página ${currentPage2} de ${totalPages2}`;
  prevBtn2.disabled = currentPage2 === 1;
  nextBtn2.disabled = currentPage2 === totalPages2;
}

function applyFilters2() {
  const query = searchInput2.value.toLowerCase();
  rfilteredData2 = tab_mex_pro.filter(
    (item) =>
      item.entidad.toLowerCase().includes(query) ||
      String(item.id).includes(query)
  );
  currentPage2 = 1;
  renderTable2();
}

searchInput2.addEventListener("input", applyFilters2);
rowsSelect2.addEventListener("change", () => {
  rowsPerPage2 = parseInt(rowsSelect2.value);
  currentPage2 = 1;
  renderTable2();
});

prevBtn2.addEventListener("click", () => {
  if (currentPage2 > 1) {
    currentPage2--;
    renderTable2();
  }
});

nextBtn2.addEventListener("click", () => {
  const totalPages2 = Math.ceil(rfilteredData2.length / rowsPerPage2);
  if (currentPage2 < totalPages2) {
    currentPage2++;
    renderTable2();
  }
});

// Inicializar
renderTable2();

const ctx = document.getElementById("lineChart").getContext("2d");

const datos = {
  labels: [
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    2022,
  ],
  datasets: [
    {
      label: "Exportaciones (USA)",

      data: [
        13397, 20685, 9378, 3941, 7424, 4900, 2038, 3771, 8187, 0, 0, 911, 251,
      ],
      borderColor: "rgba(142, 68, 173, 1)",
      backgroundColor: "rgba(142, 68, 173, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: true,
    },
    {
      label: "Importaciones (USA)",
      data: [
        543062, 575777, 626482, 737515, 762886, 832650, 843843, 845402, 849991,
        1018164, 924900, 1112933, 1111869,
      ],
      borderColor: "rgba(29, 152, 126, 1)",
      backgroundColor: "rgba(29, 152, 126, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: true,
    },
  ],
};

const config = {
  type: "line",
  data: datos,
  options: {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Exportaciones e Importaciones (2010 - 2022)",
        font: {
          size: 22,
        },
      },
      legend: {
        position: "top",
        labels: {
          font: {
            size: 19,
          },
          color: "black",
        },
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "#333",
        bodyColor: "#333",
        titleFont: {
          size: 17,
          weight: "bold",
        },
        bodyFont: {
          size: 16,
        },
        padding: 10,
        cornerRadius: 8,
      },
      datalabels: {
        color: "black",
        font: {
          weight: "bold",
          size: 18,
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Valor (USA)",
          font: {
            size: 18,
          },
        },
        beginAtZero: true,
      },
      x: {
        title: {
          display: true,
          text: "Año",
          font: {
            size: 18,
          },
        },
      },
    },
  },
};

new Chart(ctx, config);

const ctx2 = document.getElementById("lineChart2").getContext("2d");

const datos2 = {
  labels: [
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    2022, 2023,
  ],
  datasets: [
    {
      label: "Sierra de Flores Magón",
      data: [
        3397, 3523, 6259, 6306, 6412, 6407, 6298, 6125, 6515, 6530, 6562, 6484,
        6441, 6676,
      ],
      borderColor: "rgba(178, 0, 0, 1)",
      backgroundColor: "rgba(178, 0, 0, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: "Costa",
      data: [
        571, 588, 592, 567, 574, 601, 600, 626, 633, 622, 619, 643, 626, 659,
      ],
      borderColor: "rgba(0, 0, 178, 1)",
      backgroundColor: "rgba(0, 0, 178, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: "Istmo",
      data: [
        791, 818, 565, 563, 568, 581, 603, 614, 633, 646, 660, 668, 678, 686,
      ],
      borderColor: "rgba(204, 204, 0, 1)",
      backgroundColor: "rgba(204, 204, 0, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: "Mixteca",
      data: [
        1739, 1802, 1323, 1259, 1282, 1177, 1150, 1103, 1066, 1043, 1097, 1068,
        1075, 1058,
      ],
      borderColor: "rgba(102, 0, 153, 1)",
      backgroundColor: "rgba(102, 0, 153, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: "Papaloapan",
      data: [
        970, 1004, 923, 946, 946, 958, 970, 979, 1012, 1034, 1035, 1037, 1040,
        991,
      ],
      borderColor: "rgba(204, 102, 0, 1)",
      backgroundColor: "rgba(204, 102, 0, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: "Sierra de Juárez",
      data: [
        218, 219, 431, 436, 430, 436, 447, 443, 468, 465, 479, 485, 491, 504,
      ],
      borderColor: "rgba(0, 102, 0, 1)",
      backgroundColor: "rgba(0, 102, 0, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: "Sierra Sur",
      data: [, , 350, 348, 377, 374, 379, 380, 380, 388, 425, 425, 437, 433],
      borderColor: "rgba(85, 85, 85, 1)",
      backgroundColor: "rgba(85, 85, 85, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: "Sierra Sur",
      data: [
        1689, 1750, 1582, 1554, 1559, 1490, 1546, 1693, 1659, 1906, 1955, 2030,
        2078, 2115,
      ],
      borderColor: "rgba(36, 113, 163, 1)",
      backgroundColor: "rgba(36, 113, 163, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
  ],
};

const config2 = {
  type: "line",
  data: datos2,
  options: {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Volumen de producción por Región (2010 - 2023)",
        font: {
          size: 22,
        },
      },
      legend: {
        position: "top",
        labels: {
          font: {
            size: 19,
          },
          color: "black",
        },
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "#333",
        bodyColor: "#333",
        titleFont: {
          size: 17,
          weight: "bold",
        },
        bodyFont: {
          size: 16,
        },
        padding: 10,
        cornerRadius: 8,
      },
      datalabels: {
        color: "black",
        font: {
          weight: "bold",
          size: 18,
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Volumen (TON)",
          font: {
            size: 18,
          },
        },
        beginAtZero: true,
      },
      x: {
        title: {
          display: true,
          text: "Año",
          font: {
            size: 18,
          },
        },
      },
    },
  },
};

new Chart(ctx2, config2);

const ctx3 = document.getElementById("lineChart3").getContext("2d");

const datos3 = {
  labels: [
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    2022, 2023,
  ],
  datasets: [
    {
      label: "Sierra de Flores Magón",
      data: [
        312, 318, 325, 331, 335, 337, 341, 344, 351, 349, 360, 355, 355, 355,
      ],
      borderColor: "rgba(178, 0, 0, 1)",
      backgroundColor: "rgba(178, 0, 0, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: "Costa",
      data: [
        363, 368, 380, 365, 367, 391, 394, 400, 415, 420, 409, 419, 412, 434,
      ],
      borderColor: "rgba(0, 0, 178, 1)",
      backgroundColor: "rgba(0, 0, 178, 0.2)",
      borderWidth: 4,
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: "Istmo",
      data: [
        1412, 1442, 898, 904, 900, 911, 926, 936, 958, 939, 957, 972, 961, 973,
      ],
      borderColor: "rgba(204, 204, 0, 1)",
      backgroundColor: "rgba(204, 204, 0, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: "Mixteca",
      data: [
        2018, 2060, 1586, 1532, 1007, 866, 833, 808, 751, 710, 584, 582, 590,
        596,
      ],
      borderColor: "rgba(102, 0, 153, 1)",
      backgroundColor: "rgba(102, 0, 153, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: "Papaloapan",
      data: [
        1250, 1285, 1188, 1182, 1154, 1148, 1157, 1185, 1242, 1408, 1382, 1366,
        1369, 1343,
      ],
      borderColor: "rgba(204, 102, 0, 1)",
      backgroundColor: "rgba(204, 102, 0, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: "Sierra de Juárez",
      data: [
        405, 416, 669, 668, 651, 655, 670, 662, 659, 645, 650, 667, 651, 669,
      ],
      borderColor: "rgba(0, 102, 0, 1)",
      backgroundColor: "rgba(0, 102, 0, 0.2)",
      tension: 0.3,
      borderWidth: 4,
      fill: false,
    },
    {
      label: "Sierra Sur",
      data: [, , 479, 469, 490, 486, 493, 495, 507, 517, 526, 533, 551, 551],
      borderColor: "rgba(85, 85, 85, 1)",
      backgroundColor: "rgba(85, 85, 85, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: "Sierra Sur",
      data: [
        2002, 2013, 1768, 1696, 1678, 1544, 1645, 1633, 1699, 1703, 1777, 1820,
        1897, 1957,
      ],
      borderColor: "rgba(36, 113, 163, 1)",
      backgroundColor: "rgba(36, 113, 163, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
  ],
};

const config3 = {
  type: "line",
  data: datos3,
  options: {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Volumen de producción por Región (2010 - 2023)",
        font: {
          size: 22,
        },
      },
      legend: {
        position: "top",
        labels: {
          font: {
            size: 19,
          },
          color: "black",
        },
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "#333",
        bodyColor: "#333",
        titleFont: {
          size: 17,
          weight: "bold",
        },
        bodyFont: {
          size: 16,
        },
        padding: 10,
        cornerRadius: 8,
      },
      datalabels: {
        color: "black",
        font: {
          weight: "bold",
          size: 18,
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Volumen (TON)",
          font: {
            size: 18,
          },
        },
        beginAtZero: true,
      },
      x: {
        title: {
          display: true,
          text: "Año",
          font: {
            size: 18,
          },
        },
      },
    },
  },
};

new Chart(ctx3, config3);

/* Grafica 4 */
const ctx4 = document.getElementById("lineChart4").getContext("2d");

const datos4 = {
  labels: [
    "NO PUEBLO INDIGENA",
    "NAHUA",
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
    "AMUZGO",
    "CHOCHOLTECO",
  ],
  datasets: [
    {
      label: "Producción (Ton)",
      data: [
        2166, 3385, 2266, 1766, 1413, 966, 455, 403, 102, 62, 55, 37, 23, 12, 9,
      ],
      borderColor: "rgb(208, 122, 0)",
      backgroundColor: "rgb(208, 122, .8)",
      tension: 0.3,
      fill: false,
    },
  ],
};

const config4 = {
  type: "bar",
  data: datos4,
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 19,
          },
          color: "black",
        },
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "#333",
        bodyColor: "#333",
        titleFont: {
          size: 17,
          weight: "bold",
        },
        bodyFont: {
          size: 16,
        },
        padding: 10,
        cornerRadius: 8,
      },
      datalabels: {
        color: "black",
        font: {
          weight: "bold",
          size: 18,
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  },
};

new Chart(ctx4, config4);

/* Grafica 5 */
const ctx5 = document.getElementById("lineChart5").getContext("2d");

const datos5 = {
  labels: [
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
  datasets: [
    {
      label: "Producción (Ton)",
      data: [
        1810, 1857, 1175, 679, 533, 392, 91, 90, 87, 51, 45, 44, 13, 10, 3,
      ],
      borderColor: "rgb(208, 122, 0)",
      backgroundColor: "rgb(208, 122, .8)",
      tension: 0.3,
      fill: false,
    },
  ],
};

const config5 = {
  type: "bar",
  data: datos5,
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 19,
          },
          color: "black",
        },
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "#333",
        bodyColor: "#333",
        titleFont: {
          size: 17,
          weight: "bold",
        },
        bodyFont: {
          size: 16,
        },
        padding: 10,
        cornerRadius: 8,
      },
      datalabels: {
        color: "black",
        font: {
          weight: "bold",
          size: 18,
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  },
  plugins: [ChartDataLabels],
};

new Chart(ctx5, config5);

/* Grafica 6*/
const ctx6 = document.getElementById("lineChart6").getContext("2d");

const datos6 = {
  labels: [
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEPTIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE",
  ],
  datasets: [
    {
      label: "Carne en canal de pollo y gallina",
      data: [95, 93, 114, 80, 103, 106, 117, 113, 115, 123, 126, 127],
      borderColor: "rgb(208, 122, 0)",
      backgroundColor: "rgb(208, 122, .8)",
      tension: 0.3,
      fill: false,
    },
  ],
};

const config6 = {
  type: "bar",
  data: datos6,
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 19,
          },
          color: "black",
        },
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "#333",
        bodyColor: "#333",
        titleFont: {
          size: 17,
          weight: "bold",
        },
        bodyFont: {
          size: 16,
        },
        padding: 10,
        cornerRadius: 8,
      },
      datalabels: {
        color: "black",
        font: {
          weight: "bold",
          size: 18,
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  },
  plugins: [ChartDataLabels],
};

new Chart(ctx6, config6);

/* Grafica 7*/
const ctx7 = document.getElementById("lineChart7").getContext("2d");

const datos7 = {
  labels: [
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEPTIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE",
  ],
  datasets: [
    {
      label: "Huevo de gallina",
      data: [77, 79, 94, 89, 104, 127, 125, 88, 134, 82, 74, 80],
      borderColor: "rgb(208, 122, 0)",
      backgroundColor: "rgb(208, 122, .8)",
      tension: 0.3,
      fill: false,
    },
  ],
};

const config7 = {
  type: "bar",
  data: datos7,
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 19,
          },
          color: "black",
        },
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "#333",
        bodyColor: "#333",
        titleFont: {
          size: 17,
          weight: "bold",
        },
        bodyFont: {
          size: 16,
        },
        padding: 10,
        cornerRadius: 8,
      },
      datalabels: {
        color: "black",
        font: {
          weight: "bold",
          size: 18,
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  },
  plugins: [ChartDataLabels],
};

new Chart(ctx7, config7);


const contenedor_botones = document.getElementById("botones");
const contenedor_tabla = document.getElementById("tabla");
const titulo_regmun = document.getElementById("titulo_regmun");

let pagina_actual = 1;
const items_por_pagina = 15;
let municipios_actuales = [];

for (const region in regionesConMunicipios) {
  const boton = document.createElement("button");
  boton.textContent = `${region} (${regionesConMunicipios[region].length})`;
  boton.addEventListener("click", () => mostrar_tabla(region, 1));
  contenedor_botones.appendChild(boton);
}

function mostrar_tabla(region, pagina) {
  municipios_actuales = regionesConMunicipios[region];
  pagina_actual = pagina;
  const total_paginas = Math.ceil(
    municipios_actuales.length / items_por_pagina
  );
  const inicio = (pagina - 1) * items_por_pagina;
  const fin = inicio + items_por_pagina;
  const municipios_pagina = municipios_actuales.slice(inicio, fin);
  titulo_regmun.innerHTML = `<h2>${region}</h2>`;

  let html = `<table class="tabla-datos">
    <thead>
      <tr>
        <th>Municipio</th>
        <th>Toneladas (Ton)</th>
      </tr>
    </thead>
    <tbody>`;

  municipios_pagina.forEach((m) => {
    html += `<tr>
      <td>${m.nombre}</td>
      <td>${m.volumen.toLocaleString("es-MX")}</td>
    </tr>`;
  });

  html += `</tbody></table>`;
  if (municipios_actuales.length > items_por_pagina) {
    html += `<div class="pagination_mun">`;

    if (pagina > 1) {
      html += `<button onclick="cambiar_pagina(${
        pagina - 1
      })">Anterior</button>`;
    }

    for (let i = 1; i <= total_paginas; i++) {
      if (i === pagina) {
        html += `<button style="font-weight:bold;">${i}</button>`;
      } else {
        html += `<button onclick="cambiar_pagina(${i})">${i}</button>`;
      }
    }

    if (pagina < total_paginas) {
      html += `<button onclick="cambiar_pagina(${
        pagina + 1
      })">Siguiente</button>`;
    }

    html += `</div>`;
  }

  contenedor_tabla.innerHTML = html;
}

function cambiar_pagina(nueva_pagina) {
  const total_paginas = Math.ceil(
    municipios_actuales.length / items_por_pagina
  );
  if (nueva_pagina < 1) nueva_pagina = 1;
  if (nueva_pagina > total_paginas) nueva_pagina = total_paginas;

  const inicio = (nueva_pagina - 1) * items_por_pagina;
  const fin = inicio + items_por_pagina;
  const municipios_pagina = municipios_actuales.slice(inicio, fin);

  let html = `<table class="tabla-datos">
    <thead>
      <tr>
        <th>Municipio</th>
        <th>Toneladas (Ton)</th>
      </tr>
    </thead>
    <tbody>`;

  municipios_pagina.forEach((m) => {
    html += `<tr>
      <td>${m.nombre}</td>
      <td>${m.volumen.toLocaleString("es-MX")}</td>
    </tr>`;
  });

  html += `</tbody></table>`;

  html += `<div class="pagination_mun">`;

  if (nueva_pagina > 1) {
    html += `<button onclick="cambiar_pagina(${
      nueva_pagina - 1
    })">Anterior</button>`;
  }

  for (let i = 1; i <= total_paginas; i++) {
    if (i === nueva_pagina) {
      html += `<button style="font-weight:bold;">${i}</button>`;
    } else {
      html += `<button onclick="cambiar_pagina(${i})">${i}</button>`;
    }
  }

  if (nueva_pagina < total_paginas) {
    html += `<button onclick="cambiar_pagina(${
      nueva_pagina + 1
    })">Siguiente</button>`;
  }

  html += `</div>`;

  contenedor_tabla.innerHTML = html;
  pagina_actual = nueva_pagina;
}