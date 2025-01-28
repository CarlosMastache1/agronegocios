const credito_fira = document.getElementById('credito'); 

        function ocultarInputCreFira() {
            document.getElementById('input_fira').style.display = 'none';
        }

        credito_fira.addEventListener('change', () => {
            ocultarInputCreFira();
            if (credito_fira.value == 'FIDEICOMISOS INSTITUIDOS EN RELACION CON LA AGRICULTURA (FIRA)') {
              document.getElementById('input_fira').style.display = 'block';
            }
          });

    ocultarInputCreFira();