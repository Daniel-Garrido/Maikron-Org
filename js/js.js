function loadHeader() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'pages/header.html', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      document.getElementById('header-container').innerHTML = xhr.responseText;
      // Cargar y ejecutar header.js después de insertar el header
      const script = document.createElement('script');
      script.src = 'pages/header.js';
      script.onload = function() {
        loadContent('pages/home_page'); // Cargar el contenido inicial
      };
      document.body.appendChild(script);
    }
  };
  xhr.send();
}

function loadContent(page) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', page + '.html', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      document.getElementById('content').innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

document.addEventListener('DOMContentLoaded', function() {
  loadHeader(); // Cargar el header dinámicamente
  // Cargar el footer de manera estática
  const footer = document.getElementById('footer-container');
  footer.innerHTML = '<iframe src="pages/footer.html" frameborder="0" width="100%" height="100"></iframe>';
});