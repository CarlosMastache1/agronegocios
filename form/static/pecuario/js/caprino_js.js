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

/* Tabla 3 PRODUCCION NACIONAL DEL SECTOR CAPRINO CARNE DE CAPRINO */
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

total_datos_tab1.innerHTML = `<th></th><th>Total:</th><th>${/* sumaVolumen.toLocaleString(
  "es-MX"
) */'41,033'}</th><th>${ promedio_peso.toFixed(0) }</th><th>${
   /* promedio_precio.toFixed(0 ) */ 76
}</th><th>${sumaValor.toLocaleString("es-MX")}</th> `;



/* Primera Gráfica de línea para muestra la balanza comercial */
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

/* Grafica 2 PRODUCCION HISTORICA DE cARNE DE CAPRINO EN OAXACA */
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



/* TABLA PRODUCCION  DE CARNE DE CAPRINO EN OAXACA	*/
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
) */ "3,754"
}</th><th>${/* (peso_producto / tabla_produccion_producto.length).toFixed(
  0
) */15}</th><th>${
  /* (precio_producto / tabla_produccion_producto.length).toFixed(
  0
) */ 73
}</th><th>${
  /* valor_producto.toLocaleString(
  "es-MX"
) */ "273,500,000"
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
      label: "Carne en canal de caprino",
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


/* Tabla MUNICIPIOS QUE PRODUCEN CARNE DE CAPRINO EN OAXACA */
const tb_mun_producto_oax = document.getElementById("tb_mun_producto_oax");
let total_mun_producto_oax = 0;
for (let i = 0; i < tab_mun_producto_oax.length; i++) {
  const fila = document.createElement("tr");

  const region = document.createElement("td");
  region.textContent = tab_mun_producto_oax[i].nom;

  total_mun_producto_oax += tab_mun_producto_oax[i].num;

  const cantidad = document.createElement("td");
  cantidad.textContent = tab_mun_producto_oax[i].num;
  fila.appendChild(region);
  fila.appendChild(cantidad);

  tb_mun_producto_oax.appendChild(fila);
}

document.getElementById("total_mun_producto_oax").textContent =
  total_mun_producto_oax;
