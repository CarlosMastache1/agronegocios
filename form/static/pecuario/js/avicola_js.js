const mexicoDataPro = tabla_paises_prod.find((entidad) => entidad.id === "MEX");
const mexicoDataSPro = tabla_paises_sub_prod.find(
  (entidad) => entidad.id === "MEX"
);

const pTag = document.getElementById("des_mundo");
const strongTags = pTag.querySelectorAll("strong");

if (mexicoDataPro && mexicoDataSPro && strongTags.length > 3) {
  strongTags[0].textContent = `${mexicoDataPro.ranking}° lugar`;
  strongTags[1].textContent = `${mexicoDataPro.volumen.toLocaleString(
    "es-MX"
  )} Ton`;
  strongTags[2].textContent = `${mexicoDataSPro.ranking}° lugar`;
  strongTags[3].textContent = `${mexicoDataSPro.volumen.toLocaleString(
    "es-MX"
  )} Ton`;
}

const pTagM = document.getElementById("des_muni");
const strongTagsM = pTagM.querySelectorAll("strong");
let sumMunPro = 0;
tabla_produccion_producto.forEach((region) => (sumMunPro += region.municipios));

let sumMunSPro = 0;
tabla_produccion_sub_producto.forEach(
  (region) => (sumMunSPro += region.municipios)
);

if (
  tabla_produccion_producto &&
  tabla_produccion_sub_producto &&
  strongTagsM.length > 1
) {
  strongTagsM[0].textContent = `${sumMunPro} municipios`;
  /* strongTagsM[1].textContent = `${sumMunSPro} municipios`; */
}

const oaxacaDataPro = tab_mex_pro.find((entidad) => entidad.id === "OAX");
const oaxacaDataSPro = tab_mex_sub_pro.find((entidad) => entidad.id === "OAX");
const pTagN = document.getElementById("des_na");
const strongTagsN = pTagN.querySelectorAll("strong");

if (oaxacaDataPro && strongTagsN.length > 8) {
  strongTagsN[0].textContent = `${oaxacaDataPro.ranking}° lugar`;
  strongTagsN[1].textContent = `${oaxacaDataPro.volumen.toLocaleString(
    "es-MX"
  )} Ton`;
  strongTagsN[2].textContent = `${oaxacaDataPro.peso.toLocaleString(
    "es-MX"
  )} KG`;
  strongTagsN[3].textContent = `${oaxacaDataPro.precio.toLocaleString(
    "es-MX"
  )} $/KG`;
  strongTagsN[4].textContent = `$${oaxacaDataPro.valor.toLocaleString(
    "es-MX"
  )}`;
  strongTagsN[5].textContent = `${oaxacaDataSPro.ranking}° lugar`;
  strongTagsN[6].textContent = `${oaxacaDataSPro.volumen.toLocaleString(
    "es-MX"
  )} Ton`;
  strongTagsN[7].textContent = `${oaxacaDataSPro.precio.toLocaleString(
    "es-MX"
  )} $/KG`;
  strongTagsN[8].textContent = `$${oaxacaDataSPro.valor.toLocaleString(
    "es-MX"
  )}`;
}

const regionDataPro = tabla_produccion_producto[0];
const regionDataSPro = tabla_produccion_sub_producto[0];
const pTagR = document.getElementById("des_reg");
const strongTagsR = pTagR.querySelectorAll("strong");

if (regionDataPro && strongTagsR.length > 10) {
  strongTagsR[0].textContent = `${regionDataPro.region}`;
  strongTagsR[1].textContent = `${regionDataPro.municipios.toLocaleString(
    "es-MX"
  )} municipios`;
  strongTagsR[2].textContent = `${regionDataPro.volumen.toLocaleString(
    "es-MX"
  )} Ton`;
  strongTagsR[3].textContent = `${regionDataPro.peso.toFixed(2)} KG`;
  strongTagsR[4].textContent = `${regionDataPro.precio.toFixed(2)} $/KG`;
  strongTagsR[5].textContent = `$${regionDataPro.valor.toLocaleString(
    "es-MX"
  )}`;
  strongTagsR[6].textContent = `${regionDataSPro.region}`;
  strongTagsR[7].textContent = `${regionDataSPro.municipios.toLocaleString(
    "es-MX"
  )} municipios`;
  strongTagsR[8].textContent = `${regionDataSPro.volumen.toLocaleString(
    "es-MX"
  )} Ton`;
  strongTagsR[9].textContent = `${regionDataSPro.precio.toFixed(2)} $/KG`;
  strongTagsR[10].textContent = `$${regionDataSPro.valor.toLocaleString(
    "es-MX"
  )}`;
}

const pTagP = document.getElementById("des_pue");
const strongTagsP = pTagP.querySelectorAll("strong");
if (strongTagsP.length > 1) {
  strongTagsP[0].textContent = `${
    pub_indigenas_producto[0].length - 1
  } pueblos indígenas`;
  strongTagsP[1].textContent = `${
    pub_indigenas_sub_producto[0].length - 1
  } pueblos indígenas`;
}

const pTagD = document.getElementById("descripcion");
const strongTagsD = pTagD.querySelectorAll("strong");
if (oaxacaDataPro && oaxacaDataSPro && strongTagsD.length > 1) {
  strongTagsD[0].textContent = `${sumMunPro} municipios`;
  strongTagsD[1].textContent = `${oaxacaDataPro.ranking}° lugar`;
  strongTagsD[2].textContent = `${
    pub_indigenas_producto[0].length - 1
  } pueblos indígenas`;
  strongTagsD[3].textContent = `${oaxacaDataSPro.ranking}° lugar`;
  strongTagsD[4].textContent = `${
    pub_indigenas_sub_producto[0].length - 1
  } pueblos indígenas`;
}

const meses = [
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
];

const pTagE = document.getElementById("estacionalidad");
const strongTagsE = pTagE.querySelectorAll("strong");

const maxValor = Math.max(...estacionalidad_producto);
const indiceMax = estacionalidad_producto.indexOf(maxValor);

if (strongTagsE.length > 1) {
  strongTagsE[0].textContent = `${meses[indiceMax]}`;
  strongTagsE[1].textContent = `${maxValor.toLocaleString("es-MX")} puntos`;
}

const pTagE2 = document.getElementById("estacionalidad2");
const strongTagsE2 = pTagE2.querySelectorAll("strong");

const maxValor2 = Math.max(...estacionalidad_sub_producto);
const indiceMax2 = estacionalidad_sub_producto.indexOf(maxValor2);

if (strongTagsE2.length > 1) {
  strongTagsE2[0].textContent = `${meses[indiceMax2]}`;
  strongTagsE2[1].textContent = `${maxValor2.toLocaleString("es-MX")} puntos`;
}

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
    tr.innerHTML = `<td>${row.ranking}</td><td>${
      row.entidad
    }</td><td>${row.volumen.toLocaleString(
      "es-MX"
    )}</td><td>${row.precio.toFixed(2)}</td><td>${row.valor.toLocaleString(
      "es-MX"
    )}</td>`;
    tableBody.appendChild(tr);
  }

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

function applyFilters() {
  const query = removeAccents(searchInput.value.toLowerCase());
  filteredData = tab_mex_sub_pro.filter((item) => {
    const entidad = removeAccents(item.entidad.toLowerCase());
    const id = String(item.id);

    return entidad.includes(query) || id.includes(query);
  });
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
    tr.innerHTML = `<td>${row.ranking}</td><td>${
      row.entidad
    }</td><td>${row.volumen.toLocaleString("es-MX")}</td><td>${row.peso.toFixed(
      2
    )}</td><td>${row.precio.toLocaleString("es-MX")}</td><td>${row.valor}</td>`;
    tableBody2.appendChild(tr);
  }

  const totalPages2 = Math.ceil(rfilteredData2.length / rowsPerPage2);
  pageInfo2.textContent = `Página ${currentPage2} de ${totalPages2}`;
  prevBtn2.disabled = currentPage2 === 1;
  nextBtn2.disabled = currentPage2 === totalPages2;
}

function applyFilters2() {
const query = removeAccents(searchInput2.value.toLowerCase());
  rfilteredData2 = tab_mex_pro.filter((item) => {
    const entidad = removeAccents(item.entidad.toLowerCase());
    const id = String(item.id);

    return entidad.includes(query) || id.includes(query);
  });
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

const tab_pro_miel_oax = document.getElementById("tabla_produccion_miel_oax");
let volumen_pro_miel = 0;
let precio_pro_miel = 0;
let valor_pro_miel = 0;
let municipios_pro_miel = 0;

for (let i = 0; i < tabla_produccion_producto.length; i++) {
  volumen_pro_miel += tabla_produccion_producto[i].volumen;
  precio_pro_miel += tabla_produccion_producto[i].precio;
  valor_pro_miel += tabla_produccion_producto[i].valor;
  municipios_pro_miel += tabla_produccion_producto[i].municipios;

  const fila = document.createElement("tr");

  const celdaRegion = document.createElement("td");
  celdaRegion.textContent = tabla_produccion_producto[i].region;

  const celdaVolumen = document.createElement("td");
  celdaVolumen.textContent =
    tabla_produccion_producto[i].volumen.toLocaleString("es-MX");

  const celdaPrecio = document.createElement("td");
  celdaPrecio.textContent =
    tabla_produccion_producto[i].precio.toLocaleString("es-MX");

  const celdaValor = document.createElement("td");
  celdaValor.textContent =
    tabla_produccion_producto[i].valor.toLocaleString("es-MX");

  const celdaMunicipio = document.createElement("td");
  celdaMunicipio.textContent =
    tabla_produccion_producto[i].municipios.toLocaleString("es-MX");

  fila.appendChild(celdaRegion);
  fila.appendChild(celdaVolumen);
  fila.appendChild(celdaPrecio);
  fila.appendChild(celdaValor);
  fila.appendChild(celdaMunicipio);

  tab_pro_miel_oax.appendChild(fila);
}

const total_tab_pro_miel_oax = document.getElementById(
  "total_tab_pro_miel_oax"
);
total_tab_pro_miel_oax.innerHTML = `<th>Estatal</th><th>${volumen_pro_miel.toLocaleString(
  "es-MX"
)}</th><th>2</th><th>${(
  precio_pro_miel / tabla_produccion_producto.length
).toFixed(0)}</th><th>${
  /* valor_pro_miel.toLocaleString(
  "es-MX"
) */ "495,459,000"
}</th><th>${municipios_pro_miel.toLocaleString("es-MX")}</th>`;

/* Tabla PRODUCCION  DE LECHE DE VACA EN OAXACA	 */
const tabla_produccion_sub_prod_oax = document.getElementById(
  "tabla_produccion_sub_prod_oax"
);

let volumen_pro_cera = 0;
let precio_sub_producto = 0;
let valor_pro_cera = 0;
let municipios_sub_producto = 0;

for (let i = 0; i < tabla_produccion_sub_producto.length; i++) {
  volumen_pro_cera += tabla_produccion_sub_producto[i].volumen;
  precio_sub_producto += tabla_produccion_sub_producto[i].precio;
  valor_pro_cera += tabla_produccion_sub_producto[i].valor;
  municipios_sub_producto += tabla_produccion_sub_producto[i].municipios;
  const fila = document.createElement("tr");

  const celdaRegion = document.createElement("td");
  celdaRegion.textContent = tabla_produccion_sub_producto[i].region;

  const celdaVolumen = document.createElement("td");
  celdaVolumen.textContent =
    tabla_produccion_sub_producto[i].volumen.toLocaleString("es-MX");

  const celdaPrecio = document.createElement("td");
  celdaPrecio.textContent =
    tabla_produccion_sub_producto[i].precio.toLocaleString("es-MX");

  const celdaValor = document.createElement("td");
  celdaValor.textContent =
    tabla_produccion_sub_producto[i].valor.toLocaleString("es-MX");

  const celdaMunicipio = document.createElement("td");
  celdaMunicipio.textContent =
    tabla_produccion_sub_producto[i].municipios.toLocaleString("es-MX");

  fila.appendChild(celdaRegion);
  fila.appendChild(celdaVolumen);
  fila.appendChild(celdaPrecio);
  fila.appendChild(celdaValor);
  fila.appendChild(celdaMunicipio);

  tabla_produccion_sub_prod_oax.appendChild(fila);
}
const total_tb_pro_cera_oax = document.getElementById("total_tb_pro_cera_oax");
total_tb_pro_cera_oax.innerHTML = `
<th>Estatal</th>
<th>${/* volumen_pro_cera.toLocaleString("es-MX") */ "151,659,000"}</th>
<th>${(precio_sub_producto / tabla_produccion_sub_producto.length).toFixed(
  0
)}</th>
<th>${/* valor_pro_cera.toLocaleString("es-MX") */ "1,161,156,000"}</th>
<th>${municipios_sub_producto}</th>`;

const ctx4 = document.getElementById("lineChart4").getContext("2d");

const datos4 = {
  labels: pub_indigenas_producto[0],
  datasets: [
    {
      label: "Producción (Ton)",
      data: pub_indigenas_producto[1],
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
  plugins: [ChartDataLabels],
};

new Chart(ctx4, config4);

/* Grafica 5 */
const ctx5 = document.getElementById("lineChart5").getContext("2d");

const datos5 = {
  labels: pub_indigenas_sub_producto[0],
  datasets: [
    {
      label: "Producción (Ton)",
      data: pub_indigenas_sub_producto[1],
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

/* Grafica 7 ESTACIONALIDAD DE LA PRODUCCION EN OAXACA LECHE*/
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
      label: "Leche de bovino",
      data: estacionalidad_sub_producto,
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

let currentPagePais = 1;
let rowsPerPagePais = 10;
let filteredDataPais = [...tabla_paises_prod];
const tableBodyPais = document.querySelector("#dataTablePais tbody");
const searchInputPais = document.getElementById("searchInputPais");
const rowsSelectPais = document.getElementById("rowsPerPagePais");
const prevBtnPais = document.getElementById("prevBtnPais");
const nextBtnPais = document.getElementById("nextBtnPais");
const pageInfoPais = document.getElementById("pageInfoPais");

function renderTablePais() {
  tableBodyPais.innerHTML = "";
  const start = (currentPagePais - 1) * rowsPerPagePais;
  const end = start + rowsPerPagePais;
  const pageData = filteredDataPais.slice(start, end);

  for (const row of pageData) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${row.ranking}</td><td>${
      row.pais
    }</td><td>${row.volumen.toLocaleString("es-MX")}</td>`;
    tableBodyPais.appendChild(tr);
  }

  const totalPages = Math.ceil(filteredDataPais.length / rowsPerPagePais);
  pageInfoPais.textContent = `Página ${currentPagePais} de ${totalPages}`;
  prevBtnPais.disabled = currentPagePais === 1;
  nextBtnPais.disabled = currentPagePais === totalPages;
}

function applyFiltersPais() {
  const query = removeAccents(searchInputPais.value.toLowerCase());
  filteredDataPais = tabla_paises_prod.filter((item) => {
    const pais = removeAccents(item.pais.toLowerCase());
    const ranking = String(item.ranking);

    return pais.includes(query) || ranking.includes(query);
  });
  currentPagePais = 1;
  renderTablePais();
}

searchInputPais.addEventListener("input", applyFiltersPais);
rowsSelectPais.addEventListener("change", () => {
  rowsPerPagePais = parseInt(rowsSelectPais.value);
  currentPagePais = 1;
  renderTablePais();
});

prevBtnPais.addEventListener("click", () => {
  if (currentPagePais > 1) {
    currentPagePais--;
    renderTablePais();
  }
});

nextBtnPais.addEventListener("click", () => {
  const totalPages = Math.ceil(filteredDataPais.length / rowsPerPagePais);
  if (currentPagePais < totalPages) {
    currentPagePais++;
    renderTablePais();
  }
});

// Inicializar
renderTablePais();

let sumaSuperficiePais = 0;

for (let i = 0; i < tabla_paises_prod.length; i++) {
  const item = tabla_paises_prod[i];
  sumaSuperficiePais += item.volumen;
}

const total_datos_tabPais = document.getElementById("total_datos_tabPais");

total_datos_tabPais.innerHTML = `<th></th><th>Total:</th><th>${sumaSuperficiePais.toLocaleString(
  "es-MX"
)}</th><th></th>`;

let currentPagePais2 = 1;
let rowsPerPagePais2 = 10;
let filteredDataPais2 = [...tabla_paises_sub_prod];
const tableBodyPais2 = document.querySelector("#dataTablePais2 tbody");
const searchInputPais2 = document.getElementById("searchInputPais2");
const rowsSelectPais2 = document.getElementById("rowsPerPagePais2");
const prevBtnPais2 = document.getElementById("prevBtnPais2");
const nextBtnPais2 = document.getElementById("nextBtnPais2");
const pageInfoPais2 = document.getElementById("pageInfoPais2");

function renderTablePais2() {
  tableBodyPais2.innerHTML = "";
  const start = (currentPagePais2 - 1) * rowsPerPagePais2;
  const end = start + rowsPerPagePais2;
  const pageData = filteredDataPais2.slice(start, end);

  for (const row of pageData) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${row.ranking}</td><td>${
      row.pais
    }</td><td>${row.volumen.toLocaleString("es-MX")}</td>`;
    tableBodyPais2.appendChild(tr);
  }

  const totalPages = Math.ceil(filteredDataPais2.length / rowsPerPagePais2);
  pageInfoPais2.textContent = `Página ${currentPagePais2} de ${totalPages}`;
  prevBtnPais2.disabled = currentPagePais2 === 1;
  nextBtnPais2.disabled = currentPagePais2 === totalPages;
}

function applyFiltersPais2() {
  const query = removeAccents(searchInputPais2.value.toLowerCase());
  filteredDataPais2 = tabla_paises_sub_prod.filter((item) => {
    const pais = removeAccents(item.pais.toLowerCase());
    const ranking = String(item.ranking);

    return pais.includes(query) || ranking.includes(query);
  });
  currentPagePais2 = 1;
  renderTablePais2();
}

searchInputPais2.addEventListener("input", applyFiltersPais2);
rowsSelectPais2.addEventListener("change", () => {
  rowsPerPagePais2 = parseInt(rowsSelectPais2.value);
  currentPagePais2 = 1;
  renderTablePais2();
});

prevBtnPais2.addEventListener("click", () => {
  if (currentPagePais2 > 1) {
    currentPagePais2--;
    renderTablePais2();
  }
});

nextBtnPais2.addEventListener("click", () => {
  const totalPages = Math.ceil(filteredDataPais2.length / rowsPerPagePais2);
  if (currentPagePais2 < totalPages) {
    currentPagePais2++;
    renderTablePais2();
  }
});

// Inicializar
renderTablePais2();

let sumaSuperficiePais2 = 0;

for (let i = 0; i < tabla_paises_sub_prod.length; i++) {
  const item = tabla_paises_sub_prod[i];
  sumaSuperficiePais2 += item.volumen;
}

const total_datos_tabPais2 = document.getElementById("total_datos_tabPais2");

total_datos_tabPais2.innerHTML = `<th></th><th>Total:</th><th>${sumaSuperficiePais2.toLocaleString(
  "es-MX"
)}</th><th></th>`;

// Función auxiliar para remover acentos
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
