function ocultarSubcategorias(container) {
    const categorias = container.querySelectorAll('.categoria-container');
    categorias.forEach(div => div.style.display = 'none');
}

function mostrarCategoria(container, subsectorValue) {
    ocultarSubcategorias(container);
    const target = container.querySelector(`.sub-${subsectorValue}`);
    if (target) target.style.display = 'block';
}

function asignarEventosSubsectores() {
    const selects = document.querySelectorAll('.subsector');
    selects.forEach(select => {
        const container = select.closest('.producto-form');

        // Elimina si ya hay un listener previo
        select.removeEventListener('change', select._subsectorListener || (() => {}));

        const listener = () => {
            const subsectorValue = select.value;
            mostrarCategoria(container, subsectorValue);
        };

        select._subsectorListener = listener;
        select.addEventListener('change', listener);

        // Ocultar al inicio
        ocultarSubcategorias(container);
    });
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', asignarEventosSubsectores);

// Si clonas o agregas otro formulario dinámicamente




function agregarProducto() {
    const container = document.getElementById('productos-container');
    const firstProducto = container.querySelector('.producto-form');
    const newProducto = firstProducto.cloneNode(true);

    // Limpiar valores
    newProducto.querySelectorAll('input, select, textarea').forEach(el => {
        if (el.tagName === "SELECT") {
            el.selectedIndex = 0;
        } else {
            el.value = '';
        }
    });

    // Elimina clases "valid" e "invalid" de Materialize (si hay)
    newProducto.querySelectorAll('input, select').forEach(el => {
        el.classList.remove("valid");
        el.classList.remove("invalid");
    });

    // Agregar el nuevo bloque al DOM
    container.appendChild(newProducto);

    // 🔁 Re-inicializar selects (Materialize)
    const selects = newProducto.querySelectorAll('select');
    M.FormSelect.init(selects);

    
    // Reasignar eventos
    asignarEventosSubsectores();
}

