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

/* Tabla 3 PRODUCCION NACIONAL DEL SECTOR BOVINO CARNE DE BOVINO */
let currentPage = 1;
let rowsPerPage = 10;
let filteredData = [...tab_mex_pro];
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
    )}</td><td>${row.peso.toLocaleString(
      "es-MX"
    )}</td><td>${row.precio.toLocaleString(
      "es-MX"
    )}</td><td>${row.valor.toLocaleString("es-MX")}</td>`;

    tableBody.appendChild(tr);
  }

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

function applyFilters() {
  const query = searchInput.value.toLowerCase();
  filteredData = tab_mex_pro.filter(
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
let sumaPrecio = 0;
let sumaPeso = 0;

for (let i = 0; i < tab_mex_pro.length; i++) {
  const item = tab_mex_pro[i];
  sumaVolumen += item.volumen;
  sumaValor += item.valor;
  sumaPrecio += item.precio;
  sumaPeso += item.peso;
}
const promedio_peso = sumaPeso / tab_mex_pro.length;
const promedio_precio = sumaPrecio / tab_mex_pro.length;

const total_datos_tab1 = document.getElementById("total_datos_tab1");

total_datos_tab1.innerHTML = `<th></th><th>Total:</th><th>${sumaVolumen.toLocaleString(
  "es-MX"
)}</th><th>${/* promedio_peso.toFixed(0) */ 227}</th><th>${
  /* promedio_precio.toFixed(0 )*/ 73
}</th><th>${sumaValor.toLocaleString("es-MX")}</th> `;

/* Tabla 4 Sub Producto Bovino leche  */
let currentPage2 = 1;
let rowsPerPage2 = 10;
let rfilteredData2 = [...tab_mex_sub_pro];

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
    )}</td><td>${row.precio.toLocaleString(
      "es-MX"
    )}</td><td>${row.valor.toLocaleString("es-MX")}</td>`;
    tableBody2.appendChild(tr);
  }

  const totalPages2 = Math.ceil(rfilteredData2.length / rowsPerPage2);
  pageInfo2.textContent = `Página ${currentPage2} de ${totalPages2}`;
  prevBtn2.disabled = currentPage2 === 1;
  nextBtn2.disabled = currentPage2 === totalPages2;
}

function applyFilters2() {
  const query = searchInput2.value.toLowerCase();
  rfilteredData2 = tab_mex_sub_pro.filter(
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

for (let i = 0; i < tab_mex_sub_pro.length; i++) {
  const item = tab_mex_sub_pro[i];
  sumaVolumen2 += item.volumen;
  sumaValor2 += item.valor;
  sumaPrecioPonderado2 += item.precio * item.volumen;
}

const promedioPrecio2 = sumaPrecioPonderado2 / sumaVolumen2;

const total_datos_tab2 = document.getElementById("total_datos_tab2");

total_datos_tab2.innerHTML = `<th></th><th>Total:</th><th>${sumaVolumen2.toLocaleString(
  "es-MX"
)}</th><th>${promedioPrecio2.toFixed(0)}</th><th>${sumaValor2.toLocaleString(
  "es-MX"
)}</th> `;

/* Primera Gráfica de línea para muestra la balanza comercial */
/* const ctx = document.getElementById("lineChart").getContext("2d");

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

new Chart(ctx, config); */

/* Grafica 2 PRODUCCION HISTORICA DE LECHE DE VACA EN OAXACA */
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
    {
      label: produccion_historica_producto[7].nom,
      data: produccion_historica_producto[7].fila,
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

/* Grafica 3 PRODUCCION HISTORICA DE LECHE DE VACA EN OAXACA	*/
const ctx3 = document.getElementById("lineChart3").getContext("2d");

const datos3 = {
  labels: labels_historica_sub_producto,
  datasets: [
    {
      label: produccion_historica_sub_producto[0].nom,
      data: produccion_historica_sub_producto[0].fila,
      borderColor: "rgba(178, 0, 0, 1)",
      backgroundColor: "rgba(178, 0, 0, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_sub_producto[1].nom,
      data: produccion_historica_sub_producto[1].fila,
      borderColor: "rgba(0, 0, 178, 1)",
      backgroundColor: "rgba(0, 0, 178, 0.2)",
      borderWidth: 4,
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_sub_producto[2].nom,
      data: produccion_historica_sub_producto[2].fila,
      borderColor: "rgba(204, 204, 0, 1)",
      backgroundColor: "rgba(204, 204, 0, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_sub_producto[3].nom,
      data: produccion_historica_sub_producto[3].fila,
      borderColor: "rgba(102, 0, 153, 1)",
      backgroundColor: "rgba(102, 0, 153, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_sub_producto[4].nom,
      data: produccion_historica_sub_producto[4].fila,
      borderColor: "rgba(204, 102, 0, 1)",
      backgroundColor: "rgba(204, 102, 0, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_sub_producto[5].nom,
      data: produccion_historica_sub_producto[5].fila,
      borderColor: "rgba(0, 102, 0, 1)",
      backgroundColor: "rgba(0, 102, 0, 0.2)",
      tension: 0.3,
      borderWidth: 4,
      fill: false,
    },
    {
      label: produccion_historica_sub_producto[6].nom,
      data: produccion_historica_sub_producto[6].fila,
      borderColor: "rgba(85, 85, 85, 1)",
      backgroundColor: "rgba(85, 85, 85, 0.2)",
      borderWidth: 4,
      tension: 0.3,
      fill: false,
    },
    {
      label: produccion_historica_sub_producto[7].nom,
      data: produccion_historica_sub_producto[7].fila,
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
          labels_historica_sub_producto[0]
        } - ${
          labels_historica_sub_producto[
            labels_historica_sub_producto.length - 1
          ]
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

new Chart(ctx3, config3);

/* TABLA PRODUCCION  DE CARNE DE BOVINO EN OAXACA	*/
const tab_pro_miel_oax = document.getElementById("tabla_produccion_prod_oax");
let volumen_producto = 0;
let precio_producto = 0;
let peso_producto = 0;
let valor_producto = 0;
let municipios_producto = 0;

for (let i = 0; i < tabla_produccion_producto.length; i++) {
  volumen_producto += tabla_produccion_producto[i].volumen;
  precio_producto += tabla_produccion_producto[i].precio;
  peso_producto += tabla_produccion_producto[i].peso;
  valor_producto += tabla_produccion_producto[i].valor;
  municipios_producto += tabla_produccion_producto[i].municipios;

  const fila = document.createElement("tr");

  const celdaRegion = document.createElement("td");
  celdaRegion.textContent = tabla_produccion_producto[i].region;

  const celdaVolumen = document.createElement("td");
  celdaVolumen.textContent =
    tabla_produccion_producto[i].volumen.toLocaleString("es-MX");

  const celdaPeso = document.createElement("td");
  celdaPeso.textContent =
    tabla_produccion_producto[i].peso.toLocaleString("es-MX");

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
  fila.appendChild(celdaPeso);
  fila.appendChild(celdaPrecio);
  fila.appendChild(celdaValor);
  fila.appendChild(celdaMunicipio);

  tab_pro_miel_oax.appendChild(fila);
}

const total_tab_pro_miel_oax = document.getElementById(
  "total_tab_pro_miel_oax"
);
total_tab_pro_miel_oax.innerHTML = `<th>Estatal</th><th>${
  /* volumen_producto.toLocaleString(
  "es-MX"
) */ "67,156"
}</th><th>${(peso_producto / tabla_produccion_producto.length).toFixed(
  0
)}</th><th>${
  /* (precio_producto / tabla_produccion_producto.length).toFixed(
  0
) */ 64
}</th><th>${
  /* valor_producto.toLocaleString(
  "es-MX"
) */ "4,887,111,000"
}</th><th>${municipios_producto.toLocaleString("es-MX")}</th>`;



/* Grafica 4 VOLUMEN DE PRODUCCION POR PUEBLO INDIGENA	*/
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



/* Tabla PRODUCCION  DE LECHE DE VACA EN OAXACA	 */
const tabla_produccion_sub_prod_oax = document.getElementById("tabla_produccion_sub_prod_oax");

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
<th>${/* volumen_pro_cera.toLocaleString("es-MX") */ '151,659,000'}</th>
<th>${(precio_sub_producto / tabla_produccion_sub_producto.length).toFixed(0)}</th>
<th>${/* valor_pro_cera.toLocaleString("es-MX") */ "1,161,156,000"}</th>
<th>${municipios_sub_producto}</th>`;

/* Grafica 5 VOLUMEN DE PRODUCCION POR PUEBLO INDIGENA	LECHE*/
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

/* Grafica 6 ESTACIONALIDAD DE LA PRODUCCION EN OAXACA*/
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
      label: "Carne en canal de bovino",
      data: estacionalidad_producto,
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

