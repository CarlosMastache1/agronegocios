// Ejecutar el script cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Referencia a los elementos
    const loadingScreen = document.getElementById("loading");
    const content = document.getElementById("content");

    // Ocultar la pantalla de carga después de 2 segundos
    setTimeout(() => {
        loadingScreen.style.display = "none"; // Oculta el LOADING
        content.style.display = "block";     // Muestra el contenido
    }, 2000); // 2000 milisegundos = 2 segundos
});
