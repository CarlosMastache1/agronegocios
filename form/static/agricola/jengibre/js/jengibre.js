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
  const query = searchInput.value.toLowerCase();
  filteredData = tab_pro_mundial.filter(
    (item) =>
      item.pais.toLowerCase().includes(query) ||
      item.ranking.toLowerCase().includes(query) |
        String(item.ranking).includes(query)
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
  const query = searchInput2.value.toLowerCase();
  rfilteredData2 = tab_pro_nacional.filter(
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

total_datos_tab2.innerHTML = `<th></th><th>Total:</th><th>  2,705  </th><th>  238 </th><th>  9.71 </th><th>    53,898,475  </th>`;

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
  const query = searchInputDesExp.value.toLowerCase();
  rfilteredDataDesExp = tab_destino_exportacion.filter(
    (item) =>
      item.entidad.toLowerCase().includes(query) ||
      String(item.id).includes(query)
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

total_datos_tabDesExp.innerHTML = `<th></th><th>Total:</th><th>  14,186,918 </th>`;

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