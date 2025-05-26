// Arreglo que contiene la información de cada "slide" o sección del contenido,
// con dos identificadores: el ID del slide y el ID del "cubo" relacionado.
const slides = [
  { id: "slide-descripcion", idn: "cub0" },
  { id: "slide-mundo", idn: "cub1" },
  { id: "slide-mexico", idn: "cub2" },
  { id: "slide-balanza", idn: "cub3" },
  { id: "slide-historica", idn: "cub4" },
  { id: "slide-produccion", idn: "cub5" },
  { id: "slide-estadisticas", idn: "cub6" },
  { id: "slide-oaxaca", idn: "cub7" },
];

// Índice que indica qué slide está activo actualmente
let indiceActual = 0;

/**
 * Función para cambiar de slide de forma secuencial (adelante o atrás)
 * @param {number} direccion - 1 para siguiente slide, -1 para anterior
 */
function cambiarSlide(direccion) {
  // Quita la clase "active" al slide actual
  document.getElementById(slides[indiceActual].id).classList.remove("active");

  // Quita la clase "seleccionado" al cubo actual
  document
    .getElementById(slides[indiceActual].idn)
    .classList.remove("seleccionado");

  // Calcula el nuevo índice teniendo en cuenta el ciclo (vuelve al inicio/final si es necesario)
  indiceActual = (indiceActual + direccion + slides.length) % slides.length;

  // Agrega la clase "active" al nuevo slide
  document.getElementById(slides[indiceActual].id).classList.add("active");

  // Agrega la clase "seleccionado" al nuevo cubo
  document
    .getElementById(slides[indiceActual].idn)
    .classList.add("seleccionado");

  // Actualiza el mapa según el slide seleccionado
  actualizarMap(indiceActual);
}

/**
 * Función para cambiar directamente a un slide específico según su índice
 * @param {number} opcion - índice del slide al que se quiere cambiar
 */
function cambiarCub(opcion) {
  // Quita clases del slide y cubo actuales
  document.getElementById(slides[indiceActual].id).classList.remove("active");
  document
    .getElementById(slides[indiceActual].idn)
    .classList.remove("seleccionado");

  // Cambia al índice indicado
  indiceActual = opcion;

  // Activa el nuevo slide y cubo
  document.getElementById(slides[indiceActual].id).classList.add("active");
  document
    .getElementById(slides[indiceActual].idn)
    .classList.add("seleccionado");

  // Actualiza el mapa correspondiente
  actualizarMap(indiceActual);
}

/**
 * Función para ajustar el tamaño del mapa según el slide actual
 * @param {number} indiceActual - índice del slide actualmente visible
 */
function actualizarMap(indiceActual) {
  // Usamos un pequeño retraso para asegurarnos que el DOM ya aplicó estilos
  setTimeout(() => {
    switch (indiceActual) {
      case 1: // Slide del mundo
        mapaMundo.invalidateSize(); // Ajusta el tamaño del mapa mundial
        break;
      case 2: // Slide de México
        mapaMexico.invalidateSize(); // Ajusta el tamaño del mapa de México
        break;
      case 7: // Slide de Oaxaca
        mapOaxaca.invalidateSize(); // Ajusta el tamaño del mapa de Oaxaca
        break;
      default:
        break; // No se necesita actualizar mapa en los demás slides
    }
  }, 100);
}
