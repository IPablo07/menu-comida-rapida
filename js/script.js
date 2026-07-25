// ===========================
// FILTRO DE CATEGORÍAS
// ===========================

// 1. Seleccionamos todos los botones de categoría
const botonesCategoria = document.querySelectorAll('.categoria-btn');

// 2. Seleccionamos todas las tarjetas de producto
const tarjetasProducto = document.querySelectorAll('.producto-card');

// 3. Recorremos cada botón para "escucharlo"
botonesCategoria.forEach(function (boton) {

    boton.addEventListener('click', function () {

        // 3.1 Quitamos la clase "activa" de TODOS los botones
        botonesCategoria.forEach(function (b) {
            b.classList.remove('categoria');
        });

        // 3.2 Le ponemos la clase "activa" SOLO al botón que se clickeó
        boton.classList.add('categoria-activa');

        // 3.3 Leemos qué categoría representa este botón
        const categoriaSeleccionada = boton.dataset.categoria;

        // 3.4 Recorremos cada tarjeta y decidimos si se muestra u oculta
        tarjetasProducto.forEach(function (tarjeta) {

            const categoriaTarjeta = tarjeta.dataset.categoria;

            if (categoriaSeleccionada === 'todos' || categoriaTarjeta === categoriaSeleccionada) {
                tarjeta.classList.remove('producto-oculto');
            } else {
                tarjeta.classList.add('producto-oculto');
            }

        });

    });

});
// ===========================
// MODO OSCURO
// ===========================

const botonModoOscuro = document.getElementById('boton-modo-oscuro');
const iconoModoOscuro = botonModoOscuro.querySelector('i');

// 1. Al cargar la página, revisamos si el usuario ya había elegido modo oscuro antes
if (localStorage.getItem('modoOscuro') === 'activado') {
    document.body.classList.add('modo-oscuro');
    iconoModoOscuro.classList.replace('fa-moon', 'fa-sun');
}

// 2. Escuchamos el click del botón
botonModoOscuro.addEventListener('click', function () {

    document.body.classList.toggle('modo-oscuro');

    // 3. Revisamos si quedó activado o no, para guardar la preferencia y cambiar el ícono
    if (document.body.classList.contains('modo-oscuro')) {
        localStorage.setItem('modoOscuro', 'activado');
        iconoModoOscuro.classList.replace('fa-moon', 'fa-sun');
    } else {
        localStorage.setItem('modoOscuro', 'desactivado');
        iconoModoOscuro.classList.replace('fa-sun', 'fa-moon');
    }

});