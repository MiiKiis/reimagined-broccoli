function agregarAlCarrito(producto) {
  alert(`🛒 ¡${producto} añadido al carrito!`);
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Cargar secciones dinámicamente
function loadSection(filePath, elementId) {
  fetch(filePath)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    });
}

// Al cargar la página, insertar secciones
document.addEventListener('DOMContentLoaded', () => {
  loadSection('sections/hero.html', 'hero-container');
  loadSection('sections/productos.html', 'productos-container');
});
