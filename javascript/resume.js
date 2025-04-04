
 // Función para la funcionalidad de la línea de tiempo
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtener el elemento de contenido siguiente al botón
            const content = this.nextElementSibling;
            
            // Alternar visibilidad del contenido
            if (content.style.display === 'block') {
                content.style.display = 'none';
                // Quitar icono de flecha si existe
                this.innerHTML = this.innerHTML.replace(' ▼', '');
            } else {
                // Cerrar todos los otros contenidos primero
                document.querySelectorAll('.resume-item .content').forEach(item => {
                    item.style.display = 'none';
                });
                document.querySelectorAll('.toggle-btn').forEach(btn => {
                    btn.innerHTML = btn.innerHTML.replace(' ▼', '');
                });
                
                // Mostrar el contenido actual
                content.style.display = 'block';
                // Añadir icono de flecha
                if (!this.innerHTML.includes('▼')) {
                    this.innerHTML += ' ▼';
                }
            }
            
            // Recalcular la altura después de abrir/cerrar
            setTimeout(adjustLayout, 300);
        });
    });
    
    // Ajustar el layout al cargar y al cambiar el tamaño de la ventana
    window.addEventListener('resize', adjustLayout);
    window.addEventListener('load', adjustLayout);
    
    // Función para ajustar el layout
    function adjustLayout() {
        const resumeSection = document.getElementById('my-resume');
        if (!resumeSection) return;
        
        const items = resumeSection.querySelectorAll('.resume-item');
        const container = document.getElementById('resume-container');
        
        // Calcular la altura total del contenedor
        let totalHeight = 0;
        items.forEach(item => {
            const itemHeight = item.offsetHeight;
            totalHeight += itemHeight + 50; // Altura + margen
        });
        
        // Asegurar que el contenedor tenga la altura adecuada
        container.style.minHeight = totalHeight + 'px';
        
        // Asegurar que la sección tenga suficiente altura
        const extraSpace = 100; // Espacio adicional para evitar colisiones
        resumeSection.style.minHeight = (totalHeight + extraSpace) + 'px';
    }
});