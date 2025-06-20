const data = [
  {
    ranking: 1,
    entidad: "Jalisco",
    volumen: "1,715,938",
    precio: "30",
    valor: "47,456,882,000",
  },
  {
    ranking: 2,
    entidad: "Puebla",
    volumen: "475,816",
    precio: "29",
    valor: "12,356,742,000",
  },
  {
    ranking: 3,
    entidad: "Sonora",
    volumen: "181,924",
    precio: "31",
    valor: "5,516,299,000",
  },
  {
    ranking: 4,
    entidad: "San Luis Potosí",
    volumen: "113,599",
    precio: "29",
    valor: "3,105,398,000",
  },
  {
    ranking: 5,
    entidad: "Yucatán",
    volumen: "111,177",
    precio: "28",
    valor: "3,214,287,000",
  },
  {
    ranking: 6,
    entidad: "Nuevo León",
    volumen: "95,245",
    precio: "29",
    valor: "2,706,889,000",
  },
  {
    ranking: 7,
    entidad: "Durango",
    volumen: "78,256",
    precio: "27",
    valor: "2,024,376,000",
  },
  {
    ranking: 8,
    entidad: "Sinaloa",
    volumen: "76,946",
    precio: "28",
    valor: "2,209,239,000",
  },
  {
    ranking: 9,
    entidad: "Guanajuato",
    volumen: "69,418",
    precio: "33",
    valor: "2,246,766,000",
  },
  {
    ranking: 10,
    entidad: "Coahuila",
    volumen: "61,700",
    precio: "26",
    valor: "1,566,610,000",
  },
  {
    ranking: 11,
    entidad: "Baja California",
    volumen: "31,849",
    precio: "26",
    valor: "820,578,000",
  },
  {
    ranking: 12,
    entidad: "Nayarit",
    volumen: "25,199",
    precio: "26",
    valor: "664,613,000",
  },
  {
    ranking: 13,
    entidad: "Michoacán",
    volumen: "20,736",
    precio: "30",
    valor: "602,715,000",
  },
  {
    ranking: 14,
    entidad: "Querétaro",
    volumen: "19,701",
    precio: "30",
    valor: "569,460,000",
  },
  {
    ranking: 15,
    entidad: "Veracruz",
    volumen: "17,550",
    precio: "32",
    valor: "576,807,000",
  },
  {
    ranking: 16,
    entidad: "México",
    volumen: "15,731",
    precio: "26",
    valor: "439,960,000",
  },
  {
    ranking: 17,
    entidad: "Guerrero",
    volumen: "9,090",
    precio: "35",
    valor: "313,488,000",
  },
  {
    ranking: 18,
    entidad: "Aguascalientes",
    volumen: "8,900",
    precio: "29",
    valor: "262,544,000",
  },
  {
    ranking: 19,
    entidad: "Oaxaca",
    volumen: "6,879",
    precio: "28",
    valor: "194,001,000",
  },
];

let currentPage = 1;
let rowsPerPage = 10;
let filteredData = [...data];

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
    tr.innerHTML = `<td>${row.ranking}</td><td>${row.entidad}</td><td>${row.volumen}</td><td>${row.precio}</td><td>${row.valor}</td>`;
    tableBody.appendChild(tr);
  }

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

function applyFilters() {
  const query = searchInput.value.toLowerCase();
  filteredData = data.filter(
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

const data2 = [
  //23
  {
    ranking: 1,
    entidad: "Veracruz",
    volumen: "537,883",
    peso: 2,
    precio: 38,
    valor: "20,150,762,000",
  },
  {
    ranking: 2,
    entidad: "Jalisco",
    volumen: "440,347",
    peso: 2,
    precio: 43,
    valor: "16,198,954,000",
  },
  {
    ranking: 3,
    entidad: "Aguascalientes",
    volumen: "425,189",
    peso: 2,
    precio: 38,
    valor: "16,039,850,000",
  },
  {
    ranking: 4,
    entidad: "Querétaro",
    volumen: "382,439",
    peso: 2,
    precio: 42,
    valor: "15,633,543,000",
  },
  {
    ranking: 5,
    entidad: "Durango",
    volumen: "279,505",
    peso: 1,
    precio: 37,
    valor: "10,323,492,000",
  },
  {
    ranking: 6,
    entidad: "Chiapas",
    volumen: "240,387",
    peso: 2,
    precio: 48,
    valor: "9,431,184,000",
  },
  {
    ranking: 7,
    entidad: "Guanajuato",
    volumen: "225,870",
    peso: 2,
    precio: 40,
    valor: "8,688,387,000",
  },
  {
    ranking: 8,
    entidad: "Puebla",
    volumen: "211,313",
    peso: 2,
    precio: 31,
    valor: "7,205,385,000",
  },
  {
    ranking: 9,
    entidad: "Yucatán",
    volumen: "179,680",
    peso: 2,
    precio: 40,
    valor: "7,500,166,000",
  },
  {
    ranking: 10,
    entidad: "Sinaloa",
    volumen: "151,625",
    peso: 2,
    precio: 39,
    valor: "5,808,965,000",
  },
  {
    ranking: 11,
    entidad: "México",
    volumen: "115,914",
    peso: 2,
    precio: 43,
    valor: "4,897,063,000",
  },
  {
    ranking: 12,
    entidad: "San Luis Potosí",
    volumen: "108,833",
    peso: 2,
    precio: 43,
    valor: "4,193,049,000",
  },
  {
    ranking: 13,
    entidad: "Coahuila",
    volumen: "94,080",
    peso: 2,
    precio: 30,
    valor: "3,101,299,000",
  },
  {
    ranking: 14,
    entidad: "Hidalgo",
    volumen: "90,179",
    peso: 2,
    precio: 38,
    valor: "3,542,631,000",
  },
  {
    ranking: 15,
    entidad: "Nuevo León",
    volumen: "77,883",
    peso: 2,
    precio: 35,
    valor: "2,916,455,000",
  },
  {
    ranking: 16,
    entidad: "Michoacán",
    volumen: "74,981",
    peso: 2,
    precio: 33,
    valor: "2,521,225,000",
  },
  {
    ranking: 17,
    entidad: "Morelos",
    volumen: "68,530",
    peso: 2,
    precio: 39,
    valor: "2,665,397,000",
  },
  {
    ranking: 18,
    entidad: "Sonora",
    volumen: "43,362",
    peso: 1,
    precio: 17,
    valor: "1,576,071,000",
  },
  {
    ranking: 19,
    entidad: "Nayarit",
    volumen: "39,465",
    peso: 2,
    precio: 37,
    valor: "1,459,563,000",
  },
  {
    ranking: 20,
    entidad: "Campeche",
    volumen: "23,806",
    peso: 2,
    precio: 42,
    valor: "925,926,000",
  },
  {
    ranking: 21,
    entidad: "Tabasco",
    volumen: "22,253",
    peso: 2,
    precio: 49,
    valor: "973,767,000",
  },
  {
    ranking: 22,
    entidad: "Colima",
    volumen: "13,480",
    peso: 2,
    precio: 32,
    valor: "521,370,000",
  },
  {
    ranking: 23,
    entidad: "Oaxaca",
    volumen: "13,122",
    peso: 2,
    precio: 35,
    valor: "495,459,000",
  },
];

let currentPage2 = 1;
let rowsPerPage2 = 10;
let rfilteredData2 = [...data2];

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
    tr.innerHTML = `<td>${row.ranking}</td><td>${row.entidad}</td><td>${row.volumen}</td><td>${row.peso}</td><td>${row.precio}</td><td>${row.valor}</td>`;
    tableBody2.appendChild(tr);
  }

  const totalPages2 = Math.ceil(rfilteredData2.length / rowsPerPage2);
  pageInfo2.textContent = `Página ${currentPage2} de ${totalPages2}`;
  prevBtn2.disabled = currentPage2 === 1;
  nextBtn2.disabled = currentPage2 === totalPages2;
}

function applyFilters2() {
  const query = searchInput2.value.toLowerCase();
  rfilteredData2 = data2.filter(
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
/* Tabla produccion de carne de gallina */

const data3 = [
  //23
  {
    ranking: 1,
    entidad: "Veracruz",
    volumen: "537,883",
    peso: 2,
    precio: 38,
    valor: "20,150,762,000",
  },
  {
    ranking: 2,
    entidad: "Jalisco",
    volumen: "440,347",
    peso: 2,
    precio: 43,
    valor: "16,198,954,000",
  },
  {
    ranking: 3,
    entidad: "Aguascalientes",
    volumen: "425,189",
    peso: 2,
    precio: 38,
    valor: "16,039,850,000",
  },
  {
    ranking: 4,
    entidad: "Querétaro",
    volumen: "382,439",
    peso: 2,
    precio: 42,
    valor: "15,633,543,000",
  },
  {
    ranking: 5,
    entidad: "Durango",
    volumen: "279,505",
    peso: 1,
    precio: 37,
    valor: "10,323,492,000",
  },
  {
    ranking: 6,
    entidad: "Chiapas",
    volumen: "240,387",
    peso: 2,
    precio: 48,
    valor: "9,431,184,000",
  },
  {
    ranking: 7,
    entidad: "Guanajuato",
    volumen: "225,870",
    peso: 2,
    precio: 40,
    valor: "8,688,387,000",
  },
  {
    ranking: 8,
    entidad: "Puebla",
    volumen: "211,313",
    peso: 2,
    precio: 31,
    valor: "7,205,385,000",
  },
  {
    ranking: 9,
    entidad: "Yucatán",
    volumen: "179,680",
    peso: 2,
    precio: 40,
    valor: "7,500,166,000",
  },
  {
    ranking: 10,
    entidad: "Sinaloa",
    volumen: "151,625",
    peso: 2,
    precio: 39,
    valor: "5,808,965,000",
  },
  {
    ranking: 11,
    entidad: "México",
    volumen: "115,914",
    peso: 2,
    precio: 43,
    valor: "4,897,063,000",
  },
  {
    ranking: 12,
    entidad: "San Luis Potosí",
    volumen: "108,833",
    peso: 2,
    precio: 43,
    valor: "4,193,049,000",
  },
  {
    ranking: 13,
    entidad: "Coahuila",
    volumen: "94,080",
    peso: 2,
    precio: 30,
    valor: "3,101,299,000",
  },
  {
    ranking: 14,
    entidad: "Hidalgo",
    volumen: "90,179",
    peso: 2,
    precio: 38,
    valor: "3,542,631,000",
  },
  {
    ranking: 15,
    entidad: "Nuevo León",
    volumen: "77,883",
    peso: 2,
    precio: 35,
    valor: "2,916,455,000",
  },
  {
    ranking: 16,
    entidad: "Michoacán",
    volumen: "74,981",
    peso: 2,
    precio: 33,
    valor: "2,521,225,000",
  },
  {
    ranking: 17,
    entidad: "Morelos",
    volumen: "68,530",
    peso: 2,
    precio: 39,
    valor: "2,665,397,000",
  },
  {
    ranking: 18,
    entidad: "Sonora",
    volumen: "43,362",
    peso: 1,
    precio: 17,
    valor: "1,576,071,000",
  },
  {
    ranking: 19,
    entidad: "Nayarit",
    volumen: "39,465",
    peso: 2,
    precio: 37,
    valor: "1,459,563,000",
  },
  {
    ranking: 20,
    entidad: "Campeche",
    volumen: "23,806",
    peso: 2,
    precio: 42,
    valor: "925,926,000",
  },
  {
    ranking: 21,
    entidad: "Tabasco",
    volumen: "22,253",
    peso: 2,
    precio: 49,
    valor: "973,767,000",
  },
  {
    ranking: 22,
    entidad: "Colima",
    volumen: "13,480",
    peso: 2,
    precio: 32,
    valor: "521,370,000",
  },
  {
    ranking: 23,
    entidad: "Oaxaca",
    volumen: "13,122",
    peso: 2,
    precio: 35,
    valor: "495,459,000",
  },
];

let currentPage3 = 1;
let rowsPerPage3 = 10;
let rfilteredData3 = [...data3];

const tableBody3 = document.querySelector("#data3Table tbody");
const searchInput3 = document.getElementById("searchInput3");
const rowsSelect3 = document.getElementById("rowsPerPage3");
const prevBtn3 = document.getElementById("prevBtn3");
const nextBtn3 = document.getElementById("nextBtn3");
const pageInfo3 = document.getElementById("pageInfo3");

function renderTable3() {
  tableBody3.innerHTML = "";
  const start = (currentPage3 - 1) * rowsPerPage3;
  const end = start + rowsPerPage3;
  const pageData = rfilteredData3.slice(start, end);

  for (const row of pageData) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${row.ranking}</td><td>${row.entidad}</td><td>${row.volumen}</td><td>${row.peso}</td><td>${row.precio}</td><td>${row.valor}</td>`;
    tableBody3.appendChild(tr);
  }

  const totalPages3 = Math.ceil(rfilteredData3.length / rowsPerPage3);
  pageInfo3.textContent = `Página ${currentPage3} de ${totalPages3}`;
  prevBtn3.disabled = currentPage3 === 1;
  nextBtn3.disabled = currentPage3 === totalPages3;
}

function applyFilters3() {
  const query = searchInput3.value.toLowerCase();
  rfilteredData3 = data3.filter(
    (item) =>
      item.entidad.toLowerCase().includes(query) ||
      String(item.id).includes(query)
  );
  currentPage3 = 1;
  renderTable3();
}

searchInput3.addEventListener("input", applyFilters3);
rowsSelect3.addEventListener("change", () => {
  rowsPerPage3 = parseInt(rowsSelect3.value);
  currentPage3 = 1;
  renderTable3();
});

prevBtn3.addEventListener("click", () => {
  if (currentPage3 > 1) {
    currentPage3--;
    renderTable3();
  }
});

nextBtn3.addEventListener("click", () => {
  const totalPages3 = Math.ceil(rfilteredData3.length / rowsPerPage3);
  if (currentPage3 < totalPages3) {
    currentPage3++;
    renderTable3();
  }
});

// Inicializar
renderTable3();
