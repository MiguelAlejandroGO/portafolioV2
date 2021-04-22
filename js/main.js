// Agregamos los listener de los enlaces para filtrar por categoria.
const enlaces = document.querySelectorAll('#navbarNavDropdown a');
console.log(enlaces);
enlaces.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        enlaces.forEach((enlace) => enlace.classList.remove('active'));
        evento.target.classList.add('active');


    });
});