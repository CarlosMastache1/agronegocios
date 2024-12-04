const subsectores = document.getElementById('subsector'); 

    function ocultarTodosLosSubsectores() {
      document.getElementById(`sub-Agricola`).style.display = 'none';
      document.getElementById(`sub-Pecuario`).style.display = 'none';
      document.getElementById(`sub-Acuicola`).style.display = 'none';
      document.getElementById(`sub-Pesquero`).style.display = 'none';
      document.getElementById(`sub-Forestal`).style.display = 'none';
    }

    subsectores.addEventListener('change', () => {
      ocultarTodosLosSubsectores();
      if (subsectores.value != 0) {
        document.getElementById(`sub-${subsectores.value}`).style.display = 'block';
      }
    });

    ocultarTodosLosSubsectores();


const tipoPersona = document.getElementById('tPersona'); 

  function ocultarRepresentantelegal() {
    document.getElementById('rLegal').style.display = 'none';
  }

  tipoPersona.addEventListener('change', () => {
    ocultarRepresentantelegal();
    if (tipoPersona.value != 'PERSONA MORAL') {
      document.getElementById('rLegal').style.display = 'block';
    }
  });

  ocultarRepresentantelegal();
