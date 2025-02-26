const subsectores = document.getElementById('subsector2'); 

    function ocultarTodosLosSubsectores() {
        document.getElementById(`sub-AGRICOLA-2`).style.display = 'none';
        document.getElementById(`sub-PECUARIO-2`).style.display = 'none';
        document.getElementById(`sub-PESQUERO-2`).style.display = 'none';
        document.getElementById(`sub-ACUICOLA-2`).style.display = 'none';

 
    }

    
    subsectores.addEventListener('change', () => {
        ocultarTodosLosSubsectores();
        if (subsectores.value != 0) {
          document.getElementById(`sub-${subsectores.value}-2`).style.display = 'block';
        }
      });
  
      ocultarTodosLosSubsectores();