const tab_cuerpo_pais_miel = document.getElementById("tab_cuerpo_pais_miel");
const tab_cuerpo_pais_cera = document.getElementById("tab_cuerpo_pais_cera");
const total_tab1 = document.getElementById("total_tabla1");
const total_tab2 = document.getElementById("total_tabla2");
let suma_total1 = 0;
let suma_total2 = 0;

for (let i = 0; i < datos_tabla_paises_miel.length; i++) {
  const fila = document.createElement("tr");

  const celdaRanking = document.createElement("td");
  celdaRanking.textContent = datos_tabla_paises_miel[i].ranking;

  const celdaPais = document.createElement("td");
  celdaPais.textContent = datos_tabla_paises_miel[i].pais;

  const celdaVolumen = document.createElement("td");
  celdaVolumen.textContent =
    datos_tabla_paises_miel[i].volumen.toLocaleString("es-MX");

  fila.appendChild(celdaRanking);
  fila.appendChild(celdaPais);
  fila.appendChild(celdaVolumen);

  tab_cuerpo_pais_miel.appendChild(fila);
  suma_total1 += datos_tabla_paises_miel[i].volumen;
}
total_tab1.innerHTML = suma_total1.toLocaleString("es-MX");

for (let i = 0; i < datos_tabla_paises_cera.length; i++) {
  const fila = document.createElement("tr");

  const celdaRanking = document.createElement("td");
  celdaRanking.textContent = datos_tabla_paises_cera[i].ranking;

  const celdaPais = document.createElement("td");
  celdaPais.textContent = datos_tabla_paises_cera[i].pais;

  const celdaVolumen = document.createElement("td");
  celdaVolumen.textContent =
    datos_tabla_paises_cera[i].volumen.toLocaleString("es-MX");

  fila.appendChild(celdaRanking);
  fila.appendChild(celdaPais);
  fila.appendChild(celdaVolumen);

  tab_cuerpo_pais_cera.appendChild(fila);
  suma_total2 += datos_tabla_paises_cera[i].volumen;
}
total_tab2.innerHTML = suma_total2.toLocaleString("es-MX");

let currentPage = 1;
let rowsPerPage = 10;
let filteredData = [...datos_tabla_nacional_miel];
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
    console.log();
    tableBody.appendChild(tr);
  }

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

function applyFilters() {
  const query = searchInput.value.toLowerCase();
  filteredData = datos_tabla_nacional_miel.filter(
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

let sumaVolumen = 0;
let sumaValor = 0;
let sumaPrecioPonderado = 0;

for (let i = 0; i < datos_tabla_nacional_miel.length; i++) {
  const item = datos_tabla_nacional_miel[i];
  sumaVolumen += item.volumen;
  sumaValor += item.valor;
  sumaPrecioPonderado += item.precio * item.volumen;
}

const promedioPrecio = sumaPrecioPonderado / sumaVolumen;

const total_datos_tab1 = document.getElementById("total_datos_tab1");

total_datos_tab1.innerHTML = `<th></th><th>Total:</th><th>${sumaVolumen.toLocaleString(
  "es-MX"
)}</th><th>${promedioPrecio.toFixed(0)}</th><th>${sumaValor.toLocaleString(
  "es-MX"
)}</th> `;

let currentPage2 = 1;
let rowsPerPage2 = 10;
let rfilteredData2 = [...datos_tabla_nacional_cera];

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
    tr.innerHTML = `<td>${row.ranking}</td><td>${row.entidad}</td><td>${row.volumen}</td><td>${row.precio}</td><td>${row.valor}</td>`;
    tableBody2.appendChild(tr);
  }

  const totalPages2 = Math.ceil(rfilteredData2.length / rowsPerPage2);
  pageInfo2.textContent = `Página ${currentPage2} de ${totalPages2}`;
  prevBtn2.disabled = currentPage2 === 1;
  nextBtn2.disabled = currentPage2 === totalPages2;
}

function applyFilters2() {
  const query = searchInput2.value.toLowerCase();
  rfilteredData2 = datos_tabla_nacional_cera.filter(
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

let sumaVolumen2 = 0;
let sumaValor2 = 0;
let sumaPrecioPonderado2 = 0;

for (let i = 0; i < datos_tabla_nacional_cera.length; i++) {
  const item = datos_tabla_nacional_cera[i];
  sumaVolumen2 += item.volumen;
  sumaValor2 += item.valor;
  sumaPrecioPonderado2 += item.precio * item.volumen;
}

const promedioPrecio2 = sumaPrecioPonderado2 / sumaVolumen2;

const total_datos_tab2 = document.getElementById("total_datos_tab2");

total_datos_tab2.innerHTML = `<th></th><th>Total:</th><th>${sumaVolumen2?.toLocaleString(
  "es-MX"
) || "0" }</th><th>${promedioPrecio2.toFixed(0)}</th><th>${sumaValor2?.toLocaleString(
  "es-MX"
) || "0"}</th> `;

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

/* Grafica 2 */
const ctx2 = document.getElementById("lineChart2").getContext("2d");

const datos2 = {
  labels: labels_historica_miel,
  datasets: [
    {
      label: produccion_historica_miel[0].nom,
      data: produccion_historica_miel[0].fila,
      borderColor: "rgba(178, 0, 0, 1)",
      backgroundColor: "rgba(178, 0, 0, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_miel[1].nom,
      data: produccion_historica_miel[1].fila,
      borderColor: "rgba(0, 0, 178, 1)",
      backgroundColor: "rgba(0, 0, 178, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_miel[2].nom,
      data: produccion_historica_miel[2].fila,
      borderColor: "rgba(204, 204, 0, 1)",
      backgroundColor: "rgba(204, 204, 0, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_miel[3].nom,
      data: produccion_historica_miel[3].fila,
      borderColor: "rgba(102, 0, 153, 1)",
      backgroundColor: "rgba(102, 0, 153, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_miel[4].nom,
      data: produccion_historica_miel[4].fila,
      borderColor: "rgba(204, 102, 0, 1)",
      backgroundColor: "rgba(204, 102, 0, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_miel[5].nom,
      data: produccion_historica_miel[5].fila,
      borderColor: "rgba(0, 102, 0, 1)",
      backgroundColor: "rgba(0, 102, 0, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_miel[6].nom,
      data: produccion_historica_miel[6].fila,
      borderColor: "rgba(85, 85, 85, 1)",
      backgroundColor: "rgba(85, 85, 85, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_miel[7].nom,
      data: produccion_historica_miel[7].fila,
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
        text: `Volumen de producción por Región (${
          labels_historica_miel[0]
        } - ${labels_historica_miel[labels_historica_miel.length - 1]})`,
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

/* Grafica 3 */
const ctx3 = document.getElementById("lineChart3").getContext("2d");

const datos3 = {
  labels: labels_historica_cera,
  datasets: [
    {
      label: produccion_historica_cera[0].nom,
      data: produccion_historica_cera[0].fila,
      borderColor: "rgba(178, 0, 0, 1)",
      backgroundColor: "rgba(178, 0, 0, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_cera[1].nom,
      data: produccion_historica_cera[1].fila,
      borderColor: "rgba(0, 0, 178, 1)",
      backgroundColor: "rgba(0, 0, 178, 0.2)",
      borderWidth: 4,
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_cera[2].nom,
      data: produccion_historica_cera[2].fila,
      borderColor: "rgba(204, 204, 0, 1)",
      backgroundColor: "rgba(204, 204, 0, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_cera[3].nom,
      data: produccion_historica_cera[3].fila,
      borderColor: "rgba(102, 0, 153, 1)",
      backgroundColor: "rgba(102, 0, 153, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_cera[4].nom,
      data: produccion_historica_cera[4].fila,
      borderColor: "rgba(204, 102, 0, 1)",
      backgroundColor: "rgba(204, 102, 0, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_cera[5].nom,
      data: produccion_historica_cera[5].fila,
      borderColor: "rgba(0, 102, 0, 1)",
      backgroundColor: "rgba(0, 102, 0, 0.2)",
      tension: 0.3,
      borderWidth: 4,
      fill: false,
    },
    {
      label: produccion_historica_cera[6].nom,
      data: produccion_historica_cera[6].fila,
      borderColor: "rgba(85, 85, 85, 1)",
      backgroundColor: "rgba(85, 85, 85, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_cera[7].nom,
      data: produccion_historica_cera[7].fila,
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
        text: `Volumen de producción por Región (${
          labels_historica_cera[0]
        } - ${labels_historica_cera[labels_historica_cera.length - 1]})`,
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

const tab_pro_miel_oax = document.getElementById("tabla_produccion_miel_oax");
let volumen_pro_miel = 0;
let precio_pro_miel = 0;
let valor_pro_miel = 0;
let municipios_pro_miel = 0;

for (let i = 0; i < tabla_produccion_miel.length; i++) {
  volumen_pro_miel += tabla_produccion_miel[i].volumen;
  precio_pro_miel += tabla_produccion_miel[i].precio;
  valor_pro_miel += tabla_produccion_miel[i].valor;
  municipios_pro_miel += tabla_produccion_miel[i].municipios;

  const fila = document.createElement("tr");

  const celdaRegion = document.createElement("td");
  celdaRegion.textContent = tabla_produccion_miel[i].region;

  const celdaVolumen = document.createElement("td");
  celdaVolumen.textContent =
    tabla_produccion_miel[i].volumen.toLocaleString("es-MX");

  const celdaPrecio = document.createElement("td");
  celdaPrecio.textContent =
    tabla_produccion_miel[i].precio.toLocaleString("es-MX");

  const celdaValor = document.createElement("td");
  celdaValor.textContent =
    tabla_produccion_miel[i].valor.toLocaleString("es-MX");

  const celdaMunicipio = document.createElement("td");
  celdaMunicipio.textContent =
    tabla_produccion_miel[i].municipios.toLocaleString("es-MX");

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
)}</th><th>${(precio_pro_miel / tabla_produccion_miel.length).toFixed(
  0
)}</th><th>${valor_pro_miel.toLocaleString(
  "es-MX"
)}</th><th>${municipios_pro_miel.toLocaleString("es-MX")}</th>`;

/* Grafica 4 */
const ctx4 = document.getElementById("lineChart4").getContext("2d");

const datos4 = {
  labels: api_miel_ind[0],
  datasets: [
    {
      label: "Producción (Ton)",
      data: api_miel_ind[1],
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

const tb_pro_cera_oax = document.getElementById("tb_pro_cera_oax");

let volumen_pro_cera = 0;
let precio_pro_cera = 0;
let valor_pro_cera = 0;
let municipios_pro_cera = 0;

for (let i = 0; i < tabla_produccion_cera.length; i++) {
  volumen_pro_cera += tabla_produccion_cera[i].volumen;
  precio_pro_cera += tabla_produccion_cera[i].precio;
  valor_pro_cera += tabla_produccion_cera[i].valor;
  municipios_pro_cera += tabla_produccion_cera[i].municipios;
  const fila = document.createElement("tr");

  const celdaRegion = document.createElement("td");
  celdaRegion.textContent = tabla_produccion_cera[i].region;

  const celdaVolumen = document.createElement("td");
  celdaVolumen.textContent =
    tabla_produccion_cera[i].volumen.toLocaleString("es-MX");

  const celdaPrecio = document.createElement("td");
  celdaPrecio.textContent =
    tabla_produccion_cera[i].precio.toLocaleString("es-MX");

  const celdaValor = document.createElement("td");
  celdaValor.textContent =
    tabla_produccion_cera[i].valor.toLocaleString("es-MX");

  const celdaMunicipio = document.createElement("td");
  celdaMunicipio.textContent =
    tabla_produccion_cera[i].municipios.toLocaleString("es-MX");

  fila.appendChild(celdaRegion);
  fila.appendChild(celdaVolumen);
  fila.appendChild(celdaPrecio);
  fila.appendChild(celdaValor);
  fila.appendChild(celdaMunicipio);

  tb_pro_cera_oax.appendChild(fila);
}
const total_tb_pro_cera_oax = document.getElementById("total_tb_pro_cera_oax");
total_tb_pro_cera_oax.innerHTML = `
<th>ESTATAL</th>
<th>${/* volumen_pro_cera.toLocaleString("es-MX") */ 132}</th>
<th>${(precio_pro_cera/tabla_produccion_cera.length).toFixed(0)}</th>
<th>${/* valor_pro_cera.toLocaleString("es-MX") */'9,823,000'}</th>
<th>${municipios_pro_cera}</th>`;


/* Grafica 5 */
const ctx5 = document.getElementById("lineChart5").getContext("2d");

const datos5 = {
  labels: api_cera_ind[0],
  datasets: [
    {
      label: "Producción (Ton)",
      data: api_cera_ind[1],
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
      label: "Miel de abeja",
      data: estacionalidad_miel,
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


const tb_mun_miel_oax = document.getElementById("tb_mun_miel_oax");
let total_tf_mun_miel_oax = 0;
for (let i = 0; i < tab_mun_pro_miel.length; i++) {
  const fila = document.createElement("tr");

  const region = document.createElement("td");
  region.textContent = tab_mun_pro_miel[i].nom;

  total_tf_mun_miel_oax += tab_mun_pro_miel[i].num;

  const cantidad = document.createElement("td");
  cantidad.textContent = tab_mun_pro_miel[i].num;
  fila.appendChild(region);
  fila.appendChild(cantidad);

  tb_mun_miel_oax.appendChild(fila);
}

document.getElementById("total_tf_mun_miel_oax").textContent = total_tf_mun_miel_oax;