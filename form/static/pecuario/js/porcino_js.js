const mexicoDataPro = tabla_paises_prod.find((entidad) => entidad.id === "MEX");
const pTag = document.getElementById("des_mundo");
const strongTags = pTag.querySelectorAll("strong");

if (mexicoDataPro && strongTags.length > 1) {
  strongTags[0].textContent = `${mexicoDataPro.ranking}° lugar`;
  strongTags[1].textContent = `${mexicoDataPro.volumen.toLocaleString(
    "es-MX"
  )} Ton`;
}

const pTagM = document.getElementById("des_muni");
const strongTagsM = pTagM.querySelectorAll("strong");
let sumMunPro = 0;
tabla_produccion_producto.forEach((region) => (sumMunPro += region.municipios));

if (tabla_produccion_producto && strongTagsM.length >= 1) {
  strongTagsM[0].textContent = `${sumMunPro} municipios`;
}

const oaxacaDataPro = tab_mex_pro.find((entidad) => entidad.id === "OAX");

const pTagN = document.getElementById("des_na");
const strongTagsN = pTagN.querySelectorAll("strong");

if (oaxacaDataPro && strongTagsN.length > 4) {
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
}

const regionDataPro = tabla_produccion_producto[0];
const pTagR = document.getElementById("des_reg");
const strongTagsR = pTagR.querySelectorAll("strong");

if (regionDataPro && strongTagsR.length > 5) {
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
}

const pTagP = document.getElementById("des_pue");
const strongTagsP = pTagP.querySelectorAll("strong");
if (strongTagsP.length >= 1) {
  strongTagsP[0].textContent = `${
    pub_indigenas_producto[0].length - 1
  } pueblos indígenas`;
}

const pTagD = document.getElementById("descripcion");
const strongTagsD = pTagD.querySelectorAll("strong");
if (oaxacaDataPro && strongTagsD.length > 2) {
  strongTagsD[0].textContent = `${sumMunPro} municipios`;
  strongTagsD[1].textContent = `${oaxacaDataPro.ranking}° lugar`;
  strongTagsD[2].textContent = `${
    pub_indigenas_producto[0].length - 1
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

/* Tabla 3 PRODUCCION NACIONAL DEL SECTOR PORCINO CARNE DE PORCINO */
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
    console.log();
    tableBody.appendChild(tr);
  }

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

function applyFilters() {
  const query = removeAccents(searchInput.value.toLowerCase());
  filteredData = tab_mex_pro.filter((item) => {
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

total_datos_tab1.innerHTML = `<th></th><th>Total:</th><th>${
  /* sumaVolumen.toLocaleString(
  "es-MX"
) */ "1,768,525"
}</th><th>${/* promedio_peso.toFixed(0) */ 77}</th><th>${
  /* promedio_precio.toFixed(0 ) */ 52
}</th><th>${/* sumaValor.toLocaleString("es-MX") */ "91,682,068,000"}</th> `;

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

/* TABLA PRODUCCION  DE CARNE DE PORCINO EN OAXACA	*/
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
total_tab_pro_miel_oax.innerHTML = `<th>Estatal</th><th>${volumen_producto.toLocaleString(
  "es-MX"
)}</th><th>${
  /* peso_producto / tabla_produccion_producto.length).toFixed(
  0 */ 64
}</th><th>${
  /* (precio_producto / tabla_produccion_producto.length).toFixed(
  0
) */ 47
}</th><th>${
  /*  valor_producto.toLocaleString(
  "es-MX"
)  */ "1,490,919,000"
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
      label: "Carne en canal de porcino",
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
        color: "white",
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

// Función auxiliar para remover acentos
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

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
