document.addEventListener('DOMContentLoaded', function () {
    // Función para animar el conteo
    function animateValue(id, start, end, duration) {
      const obj = document.getElementById(id);
      const range = end - start;
      let current = start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range));
      const timer = setInterval(function () {
        current += increment;
        obj.textContent = current;
        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    }
    
    // Iniciar animación en cada hito (milestone)
    animateValue('hoursWorked', 0, 7876, 2000);
    animateValue('projects', 0, 24, 2000);
    animateValue('awards', 0, 16, 2000);
    animateValue('blogPosts', 0, 86, 2000);
  });
  

  // script.js
// Actualmente, esta sección no requiere funcionalidad específica con JavaScript.
// Puedes agregar interactividad o animaciones según lo necesites.
document.addEventListener('DOMContentLoaded', function () {
  // Ejemplo: mensaje en consola al cargar la sección
  console.log("Sección 'Habilidades' cargada correctamente.");
});
