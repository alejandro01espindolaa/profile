document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const content = this.nextElementSibling;
        if (content.style.display === 'block') {
          content.style.display = 'none';
          // Reemplaza el signo '-' por '+' al colapsar
          this.textContent = this.textContent.replace('-', '+');
        } else {
          content.style.display = 'block';
          // Reemplaza el signo '+' por '-' al expandir
          this.textContent = this.textContent.replace('+', '-');
        }
      });
    });
  });