function ocultarSubcategorias(container) {
  const blocks = container.querySelectorAll('.categoria-container');
  blocks.forEach(div => {
    div.style.display = 'none';
    const sel = div.querySelector('select');
    if (sel) {
      sel.disabled = true;               // <- NO se envía
      sel.name = 'categoria_disabled[]'; // <- por si acaso
      // reinit Materialize
      if (window.M && M.FormSelect) {
        const inst = M.FormSelect.getInstance(sel);
        if (inst) inst.destroy();
        M.FormSelect.init(sel);
      }
    }
  });
}

function mostrarCategoria(container, subsectorValue) {
  ocultarSubcategorias(container);
  const target = container.querySelector(`.sub-${subsectorValue}`);
  if (target) {
    target.style.display = 'block';
    const sel = target.querySelector('select');
    if (sel) {
      sel.disabled = false;          // <- SÍ se envía
      sel.name = 'categoria[]';      // <- deja el name correcto
      // si no hay categoría previa, manten el placeholder seleccionado
      if (!sel.value) sel.selectedIndex = 0;
      if (window.M && M.FormSelect) {
        const inst = M.FormSelect.getInstance(sel);
        if (inst) inst.destroy();
        M.FormSelect.init(sel);
      }
    }
  }
}

function asignarEventosSubsectores() {
  const selects = document.querySelectorAll('.subsector');
  selects.forEach(select => {
    const container = select.closest('.producto-form');
    select.removeEventListener('change', select._subsectorListener || (() => {}));
    const listener = () => mostrarCategoria(container, select.value);
    select._subsectorListener = listener;
    select.addEventListener('change', listener);

    // Estado inicial (edición):
    mostrarCategoria(container, select.value);
  });
}


document.addEventListener('DOMContentLoaded', () => {
  if (window.M && M.FormSelect) M.FormSelect.init(document.querySelectorAll('select'));
  asignarEventosSubsectores();
  // Cinturón y tirantes: asegurar antes de enviar que solo va el activo
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', () => {
      document.querySelectorAll('.producto-form').forEach(container => {
        const subsector = container.querySelector('.subsector')?.value;
        const active = container.querySelector(`.sub-${subsector} select`);
        container.querySelectorAll('.categoria-container select').forEach(sel => {
          if (sel !== active) { sel.disabled = true; sel.name = 'categoria_disabled[]'; }
          else { sel.disabled = false; sel.name = 'categoria[]'; }
        });
      });
    });
  }
});

// Si clonas o agregas otro formulario dinámicamente




function agregarProducto() {
    const container = document.getElementById('productos-container');
    const firstProducto = container.querySelector('.producto-form');
    const newProducto = firstProducto.cloneNode(true);

      // Limpiar valores
      newProducto.querySelectorAll('input, select, textarea').forEach(el => {
        if (el.tagName === "SELECT") {
          el.selectedIndex = 0;
        } else if (el.type !== 'hidden') {
          el.value = '';
        } else if (el.id === 'volumen') {
          el.value = '';
        }
      });
      // Elimina clases "valid"/"invalid" de Materialize
      newProducto.querySelectorAll('input, select').forEach(el => {
        el.classList.remove("valid");
        el.classList.remove("invalid");
      });

    // Agregar el nuevo bloque al DOM
    container.appendChild(newProducto);

    // 🔁 Re-inicializar selects (Materialize)
    const selects = newProducto.querySelectorAll('select');
    if (window.M && M.FormSelect) M.FormSelect.init(selects);


    
    // Reasignar eventos
    asignarEventosSubsectores();
}

