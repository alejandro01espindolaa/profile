document.addEventListener('DOMContentLoaded', function() {
    // Ocultar todo el contenido al iniciar
    const contentDivs = document.querySelectorAll('.content');
    contentDivs.forEach(function(content) {
        content.style.display = 'none';
    });

    // Configurar los event listeners para los botones
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const content = this.nextElementSibling;
            
            if (content.style.display === 'block') {
                // Ocultar contenido
                content.style.display = 'none';
                // Cambiar el símbolo de - a +
                this.textContent = this.textContent.replace('-', '+');
            } else {
                // Mostrar contenido
                content.style.display = 'block';
                // Cambiar el símbolo de + a -
                this.textContent = this.textContent.replace('+', '-');
            }
        });
    });
});