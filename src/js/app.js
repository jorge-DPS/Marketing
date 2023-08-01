document.addEventListener('DOMContentLoaded', function () {
    eventoEscuchar();

    const textoContainer = document.querySelector('.texto');
  const verMasButton = document.querySelector('.ver-mas');

  verMasButton.addEventListener('click', function () {
    textoContainer.classList.toggle('truncado');
  });
})

function eventoEscuchar() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', navegacionResponsive);

}

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');

    if (navegacion.classList.contains('mostrar')) {
        navegacion.classList.remove('mostrar');
    } else {
        navegacion.classList.add('mostrar');
    }
}