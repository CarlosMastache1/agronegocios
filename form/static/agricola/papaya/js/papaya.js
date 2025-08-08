
const mexicoData = tab_pro_mundial.find((entidad) => entidad.id === "MEX");
const pTag = document.getElementById("des_mundo");
const strongTags = pTag.querySelectorAll("strong");

if (mexicoData && strongTags.length > 1) {
  strongTags[0].textContent = `${mexicoData.ranking}° lugar`;
  strongTags[1].textContent = `${mexicoData.superficie.toLocaleString(
    "es-MX"
  )} Ha`;
}

const pTagM = document.getElementById("des_muni");
const strongTagsM = pTagM.querySelectorAll("strong");
let summun = 0;
tabla_produccion_producto.forEach((region) => (summun += region.cantidad));

if (tabla_produccion_producto && strongTagsM.length > 0) {
  strongTagsM[0].textContent = `${summun} municipios`;
}

const oaxacaData = tab_pro_nacional.find((entidad) => entidad.id === "OAX");
const pTagN = document.getElementById("des_na");
const strongTagsN = pTagN.querySelectorAll("strong");

if (oaxacaData && strongTagsN.length > 4) {
  strongTagsN[0].textContent = `${oaxacaData.ranking}° lugar`;
  strongTagsN[1].textContent = `${oaxacaData.volumen.toLocaleString(
    "es-MX"
  )} Ton`;
  strongTagsN[2].textContent = `${oaxacaData.superficie.toLocaleString(
    "es-MX"
  )} Ha`;
  strongTagsN[3].textContent = `${oaxacaData.rendimiento.toFixed(2)} Ton/Ha`;
  strongTagsN[4].textContent = `$${oaxacaData.valor.toLocaleString("es-MX")}`;
}

const regionData = tabla_produccion_producto[0];
const pTagR = document.getElementById("des_reg");
const strongTagsR = pTagR.querySelectorAll("strong");

if (regionData && strongTagsR.length > 5) {
  strongTagsR[0].textContent = `${regionData.region}`;
  strongTagsR[1].textContent = `${regionData.cantidad.toLocaleString(
    "es-MX"
  )} municipios`;
  strongTagsR[2].textContent = `${regionData.volumen.toLocaleString(
    "es-MX"
  )} Ton`;
  strongTagsR[3].textContent = `${regionData.superficie.toLocaleString(
    "es-MX"
  )} Ha`;
  strongTagsR[4].textContent = `${regionData.rendimiento.toFixed(2)} Ton/Ha`;
  strongTagsR[5].textContent = `$${regionData.valor.toLocaleString("es-MX")}`;
}

const pTagP = document.getElementById("des_pue");
const strongTagsP = pTagP.querySelectorAll("strong");
if (strongTagsP.length > 0) {
  strongTagsP[0].textContent = `${pub_indigenas_producto[0].length - 1 } pueblos indígenas`;
}

const pTagD = document.getElementById("descripcion");
const strongTagsD = pTagD.querySelectorAll("strong");
if (oaxacaData && strongTagsD.length > 1) {
  strongTagsD[1].textContent = `${summun} municipios`;
  strongTagsD[2].textContent = `${oaxacaData.ranking}° lugar`;
  strongTagsD[3].textContent = `${pub_indigenas_producto[0].length - 1 } pueblos indígenas`;
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


/* Tabla 3 PRODUCCION NACIONAL DEL SECTOR PORCINO CARNE DE PORCINO */
let currentPage = 1;
let rowsPerPage = 10;
let filteredData = [...tab_pro_mundial];
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
      row.pais
    }</td><td>${row.superficie.toLocaleString("es-MX")}</td>`;
    tableBody.appendChild(tr);
  }

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

function applyFilters() {
  const query = removeAccents(searchInput.value.toLowerCase());
  filteredData = tab_pro_mundial.filter(
    (item) =>
      {
      const pais = removeAccents(item.pais.toLowerCase());
      const ranking = String(item.ranking);

      return pais.includes(query) || ranking.includes(query)
    }
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

let sumaSuperficie = 0;

for (let i = 0; i < tab_pro_mundial.length; i++) {
  const item = tab_pro_mundial[i];
  sumaSuperficie += item.superficie;
}

const total_datos_tab1 = document.getElementById("total_datos_tab1");

total_datos_tab1.innerHTML = `<th></th><th>Total:</th><th>${sumaSuperficie.toLocaleString(
  "es-MX"
)}</th><th></th>`;

/* TABLA 2 PRODUCCIÓN NACIONAL DE AGAVE */
let currentPage2 = 1;
let rowsPerPage2 = 10;
let rfilteredData2 = [...tab_pro_nacional];

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
    }</td><td>${row.volumen.toLocaleString(
      "es-MX"
    )}</td><td>${row.superficie.toLocaleString(
      "es-MX"
    )}</td><td>${row.rendimiento.toFixed(2)}</td><td>${row.valor.toLocaleString(
      "es-MX"
    )}</td>`;
    tableBody2.appendChild(tr);
  }

  const totalPages2 = Math.ceil(rfilteredData2.length / rowsPerPage2);
  pageInfo2.textContent = `Página ${currentPage2} de ${totalPages2}`;
  prevBtn2.disabled = currentPage2 === 1;
  nextBtn2.disabled = currentPage2 === totalPages2;
}

function applyFilters2() {
const query = removeAccents(searchInput2.value.toLowerCase());
  rfilteredData2 = tab_pro_nacional.filter(
    (item) => {
      const entidad = removeAccents(item.entidad.toLowerCase());
      const id = String(item.id);

      return entidad.includes(query) ||
      id.includes(query)
    }
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
/* 
let sumavolumennacional = 0;
let sumasuperficienacional = 0;
let sumarendimientonacional = 0;
let sumavalornacional = 0;

for (let i = 0; i < tab_pro_nacional.length; i++) {
  const item = tab_pro_nacional[i];

  sumavolumennacional += item.volumen;
  sumasuperficienacional += item.superficie;
  sumarendimientonacional += item.rendimiento;
  sumavalornacional += item.valor;
}

const promediorendimientonacional = sumarendimientonacional/tab_pro_nacional.length; */

const total_datos_tab2 = document.getElementById("total_datos_tab2");

total_datos_tab2.innerHTML = `<th></th><th>Total:</th>
<th>  
  1,148,546 	   	   	   
</th>
<th>  
  21,015 
</th>
<th>
  46.21
</th>
<th>
  7,605,220,246 
</th>`;

/* TABLA 3 DESTINO DE LA EXPORTACIÓN 2023 POR PAÍS */
let currentPageDesExp = 1;
let rowsPerPageDesExp = 10;
let rfilteredDataDesExp = [...tab_destino_exportacion];

const tableBodyDesExp = document.querySelector("#dataTableDesExp tbody");
const searchInputDesExp = document.getElementById("searchInputDesExp");
const rowsSelectDesExp = document.getElementById("rowsPerPageDesExp");
const prevBtnDesExp = document.getElementById("prevBtnDesExp");
const nextBtnDesExp = document.getElementById("nextBtnDesExp");
const pageInfoDesExp = document.getElementById("pageInfoDesExp");

function renderTableDesExp() {
  tableBodyDesExp.innerHTML = "";
  const start = (currentPageDesExp - 1) * rowsPerPageDesExp;
  const end = start + rowsPerPageDesExp;
  const pageData = rfilteredDataDesExp.slice(start, end);

  for (const row of pageData) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${row.num}</td><td>${
      row.pais
    }</td><td>${row.valor.toLocaleString("es-MX")}</td>`;
    tableBodyDesExp.appendChild(tr);
  }

  const totalPagesDesExp = Math.ceil(
    rfilteredDataDesExp.length / rowsPerPageDesExp
  );
  pageInfoDesExp.textContent = `Página ${currentPageDesExp} de ${totalPagesDesExp}`;
  prevBtnDesExp.disabled = currentPageDesExp === 1;
  nextBtnDesExp.disabled = currentPageDesExp === totalPagesDesExp;
}

function applyFiltersDesExp() {
  const query = removeAccents(searchInputDesExp.value.toLowerCase());
  rfilteredDataDesExp = tab_destino_exportacion.filter(
    (item) => {
      const pais = removeAccents(item.pais.toLowerCase());
      const num = String(item.num);

      return pais.includes(query) ||
      num.includes(query)
    }
  );
  currentPageDesExp = 1;
  renderTableDesExp();
}

searchInputDesExp.addEventListener("input", applyFiltersDesExp);
rowsSelectDesExp.addEventListener("change", () => {
  rowsPerPageDesExp = parseInt(rowsSelectDesExp.value);
  currentPageDesExp = 1;
  renderTableDesExp();
});

prevBtnDesExp.addEventListener("click", () => {
  if (currentPageDesExp > 1) {
    currentPageDesExp--;
    renderTableDesExp();
  }
});

nextBtnDesExp.addEventListener("click", () => {
  const totalPagesDesExp = Math.ceil(
    rfilteredDataDesExp.length / rowsPerPageDesExp
  );
  if (currentPageDesExp < totalPagesDesExp) {
    currentPageDesExp++;
    renderTableDesExp();
  }
});

// Inicializar
renderTableDesExp();

const total_datos_tabDesExp = document.getElementById("total_datos_tabDesExp");

total_datos_tabDesExp.innerHTML = `<th></th><th>Total:</th>
<th>
  65,133,681
</th>`;

/* Grafica 1 Balanza comercial */
const ctx = document.getElementById("lineChart").getContext("2d");

const datos = {
  labels: labels_balanza,
  datasets: [
    {
      label: "Exportaciones (USA)",

      data: exportacion_balanza,
      borderColor: "rgba(142, 68, 173, 1)",
      backgroundColor: "rgba(142, 68, 173, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: true,
    },
    {
      label: "Importaciones (USA)",
      data: importacion_balanza,
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
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: `Exportaciones e Importaciones (${labels_balanza[0]} - ${
          labels_balanza[labels_balanza.length - 1]
        })`,
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

/* Producción histórica de calabacita en Oaxaca */
const ctx2 = document.getElementById("lineChart2").getContext("2d");

const datos2 = {
  labels: labels_historica_producto,
  datasets: [
    {
      label: produccion_historica_producto[0].nom,
      data: produccion_historica_producto[0].fila,
      borderColor: "rgba(178, 0, 0, 1)",
      backgroundColor: "rgba(178, 0, 0, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_producto[1].nom,
      data: produccion_historica_producto[1].fila,
      borderColor: "rgba(0, 0, 178, 1)",
      backgroundColor: "rgba(0, 0, 178, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_producto[2].nom,
      data: produccion_historica_producto[2].fila,
      borderColor: "rgba(204, 204, 0, 1)",
      backgroundColor: "rgba(204, 204, 0, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_producto[3].nom,
      data: produccion_historica_producto[3].fila,
      borderColor: "rgba(102, 0, 153, 1)",
      backgroundColor: "rgba(102, 0, 153, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },

    {
      label: produccion_historica_producto[4].nom,
      data: produccion_historica_producto[4].fila,
      borderColor: "rgba(204, 102, 0, 1)",
      backgroundColor: "rgba(204, 102, 0, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_producto[5].nom,
      data: produccion_historica_producto[5].fila,
      borderColor: "rgba(0, 102, 0, 1)",
      backgroundColor: "rgba(0, 102, 0, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    
    {
      label: produccion_historica_producto[6].nom,
      data: produccion_historica_producto[6].fila,
      borderColor: "rgba(85, 85, 85, 1)",
      backgroundColor: "rgba(85, 85, 85, 0.2)",
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
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: `Volumen de producción por Región (${
          labels_historica_producto[0]
        } - ${
          labels_historica_producto[labels_historica_producto.length - 1]
        })`,
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

/* TABLA PRODUCCION  DE AGAVE EN OAXACA	*/
const tab_pro_miel_oax = document.getElementById("tabla_produccion_prod_oax");
let volumen_producto = 0;
let superficie_producto = 0;
let rendimiento_producto = 0;
let valor_producto = 0;
let cantidad_producto = 0;

for (let i = 0; i < tabla_produccion_producto.length; i++) {
  volumen_producto += tabla_produccion_producto[i].volumen;
  superficie_producto += tabla_produccion_producto[i].superficie;
  rendimiento_producto += tabla_produccion_producto[i].rendimiento;
  valor_producto += tabla_produccion_producto[i].valor;
  cantidad_producto += tabla_produccion_producto[i].cantidad;

  const fila = document.createElement("tr");

  const celdaRegion = document.createElement("td");
  celdaRegion.textContent = tabla_produccion_producto[i].region;

  const celdaVolumen = document.createElement("td");
  celdaVolumen.textContent =
    tabla_produccion_producto[i].volumen.toLocaleString("es-MX");

  const celdaSuperficie = document.createElement("td");
  celdaSuperficie.textContent =
    tabla_produccion_producto[i].superficie.toLocaleString("es-MX");

  const celdaRendimeinto = document.createElement("td");
  celdaRendimeinto.textContent =
    tabla_produccion_producto[i].rendimiento.toLocaleString("es-MX");

  const celdaValor = document.createElement("td");
  celdaValor.textContent =
    tabla_produccion_producto[i].valor.toLocaleString("es-MX");

  const celdaCantidad = document.createElement("td");
  celdaCantidad.textContent =
    tabla_produccion_producto[i].cantidad.toLocaleString("es-MX");

  fila.appendChild(celdaRegion);
  fila.appendChild(celdaVolumen);
  fila.appendChild(celdaSuperficie);
  fila.appendChild(celdaRendimeinto);
  fila.appendChild(celdaValor);
  fila.appendChild(celdaCantidad);

  tab_pro_miel_oax.appendChild(fila);
}

const total_tab_pro_miel_oax = document.getElementById(
  "total_tab_pro_miel_oax"
);
total_tab_pro_miel_oax.innerHTML = `<th>Estatal</th><th>${volumen_producto.toLocaleString(
  "es-MX"
)}</th><th>${superficie_producto.toLocaleString(
  "es-MX"
)}</th><th>${  84.54 }</th><th>${/* valor_producto.toLocaleString(
  "es-MX"
) */'1,927,827,104'}</th><th>${cantidad_producto.toLocaleString("es-MX")}</th>`;

/* Grafica 2 VOLUMEN DE PRODUCCION POR PUEBLO INDIGENA	*/
/* const ctx2 = document.getElementById("lineChart2").getContext("2d");
const datos2 = {
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

const config2 = {
  type: "bar",
  data: datos2,
  options: {
    responsive: false,
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

new Chart(ctx2, config2); */

/* GRAFICA 3 */
const ctx3 = document.getElementById("lineChart3").getContext("2d");
const datos3 = {
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

const config3 = {
  type: "bar",
  data: datos3,
  options: {
    responsive: false,
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

new Chart(ctx3, config3);

const ctx4 = document.getElementById("lineChart4").getContext("2d");

const datos4 = {
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
      label: "papaya",
      data: estacionalidad_producto,
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
    responsive: false,
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
        <th>Territorio (Ha)</th>
        <th>Toneladas (Ton)</th>
      </tr>
    </thead>
    <tbody>`;

  municipios_pagina.forEach((m) => {
    html += `<tr>
      <td>${m.nombre}</td>
      <td>${m.superficie.toLocaleString("es-MX")}</td>
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
        <th>Territorio (Ha)</th>
        <th>Toneladas (Ton)</th>
      </tr>
    </thead>
    <tbody>`;

  municipios_pagina.forEach((m) => {
    html += `<tr>
      <td>${m.nombre}</td>
      <td>${m.superficie.toLocaleString("es-MX")}</td>
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

// Función auxiliar para remover acentos
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}