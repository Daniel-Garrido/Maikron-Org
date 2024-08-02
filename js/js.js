/**variables generales */
const info_parrafo = document.querySelectorAll(".project-description"); //selecciona todos los parrafos con esta clase
const btn_menu = document.querySelectorAll(".dropdown-menu .dropdown-item"); //selecciona todos los enlaces dentro del submenu

//Evento para cerrar el menu de navegacion
document.addEventListener("DOMContentLoaded", function () {
  btn_menu.forEach((link) => {
    link.addEventListener("click", function () {
      // Selecciona el menú de navegación colapsado
      const navbarCollapse = document.querySelector("#navbarSupportedContent");

      if (navbarCollapse.classList.contains("show")) {
        // crear una instancia de Bootstrap Collapse
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide(); // Ocultar el menú
      }
    });
  });
});

/*evento para guardar la informacion de los parrafos */
document.querySelector(".toggle-button").addEventListener("click", function () {
  const icon = this;
  info_parrafo.forEach(function (parrafos) {
    if (parrafos.classList.contains("hidden")) {
      parrafos.style.height = parrafos.scrollHeight + "px";
      parrafos.style.opacity = 1;
      parrafos.classList.remove("hidden");
      //remover el icono incial
      icon.classList.remove("fa-chevron-right");
      icon.classList.add("fa-chevron-down");

      /**tiempo de ejecucion de los estilos */
      setTimeout(function () {
        parrafos.style.height = "auto";
      }, 20); //tiempo al cargar de los parrafos
    } else {
      parrafos.style.height = parrafos.scrollHeight + "px";
      setTimeout(function () {
        parrafos.style.height = "0";
        parrafos.style.opacity = 0;
        parrafos.classList.add("hidden");

        //revovemos el icono y lo volvemos a la posicion inicial
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-right");
      }, 20); // tiempo de cerrar de los parrafos
    }
  });
});
