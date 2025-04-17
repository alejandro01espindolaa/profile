const scriptURL = 'https://script.google.com/macros/library/d/1pe4dGjz1xi4monQcCkTD5-dkVgWTbpZ86mgBfqRkQC6IiWBhu_HjxjjF/2';
const form = document.getElementById('formulario-contacto');
const respuesta = document.getElementById('respuesta');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  // Mostrar estado de carga
  submitBtn.disabled = true;
  submitBtn.textContent = 'Enviando...';
  respuesta.textContent = 'Enviando mensaje...';
  respuesta.className = 'mensaje-respuesta enviando';
  
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor');
    }
    respuesta.textContent = "¡Mensaje enviado con éxito!";
    respuesta.className = 'mensaje-respuesta exito';
    form.reset();
  })
  .catch(error => {
    respuesta.textContent = "Error al enviar el mensaje. Por favor, intenta nuevamente.";
    respuesta.className = 'mensaje-respuesta error';
    console.error('Error!', error.message);
  })
  .finally(() => {
    // Restaurar el botón
    submitBtn.disabled = false;
    submitBtn.textContent = 'Enviar';
  });
});