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