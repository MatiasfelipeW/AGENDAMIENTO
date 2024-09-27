// Variable para almacenar la posición previa del desplazamiento
let lastScrollTop = 0;
const header = document.querySelector("header");

// Función para detectar el desplazamiento
window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Comparar la posición actual con la anterior
  if (currentScroll > lastScrollTop) {
    // Desplazamiento hacia abajo - Oculta el header
    header.style.top = "-100px"; // Mueve el header fuera de la pantalla
  } else {
    // Desplazamiento hacia arriba - Muestra el header
    header.style.top = "0";
  }
  // Actualizar la posición previa del desplazamiento
  lastScrollTop = currentScroll;
});
