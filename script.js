document.addEventListener('DOMContentLoaded', function () {
    const productos = document.querySelectorAll('.productos .producto');
    const adicionales = document.querySelectorAll('.adicionales .adicional');
    const ramos = document.querySelectorAll('.ramos .ramo');
    const resetBtn = document.getElementById('reset');
    const totalAmountSpan = document.getElementById('totalAmount');

    let total = 0;

    productos.forEach(producto => {
        const agregarBtn = producto.querySelector('.agregar');
        const cantidadInput = producto.querySelector('.cantidad-agregada');

        agregarBtn.addEventListener('click', function () {
            const precio = parseFloat(producto.dataset.precio);
            const cantidad = parseInt(cantidadInput.textContent) + 1;
            cantidadInput.textContent = cantidad;
            total += precio;
            actualizarTotal();
        });
    });

    adicionales.forEach(adicional => {
        const agregarBtn = adicional.querySelector('.agregar');
        const cantidadInput = adicional.querySelector('.cantidad-agregada');

        agregarBtn.addEventListener('click', function () {
            const precio = parseFloat(adicional.dataset.precio);
            const cantidad = parseInt(cantidadInput.textContent) + 1;
            cantidadInput.textContent = cantidad;
            total += precio;
            actualizarTotal();
        });
    });

    ramos.forEach(ramo => {
        ramo.addEventListener('click', function () {
            const precio = parseFloat(ramo.dataset.precio);
            total += precio;
            actualizarTotal();
        });
    });

    resetBtn.addEventListener('click', function () {
        total = 0;
        resetProductos();
        resetAdicionales();
        recalcularTotalAdicionales();
        actualizarTotal();
    });

    function resetProductos() {
        productos.forEach(producto => {
            const cantidadInput = producto.querySelector('.cantidad-agregada');
            cantidadInput.textContent = '0';
        });
    }

    function recalcularTotalAdicionales() {
        total = 0;
        totalAdicionales();
    }

    function totalAdicionales() {
        adicionales.forEach(adicional => {
            const precio = parseFloat(adicional.dataset.precio);
            const cantidad = parseInt(adicional.querySelector('.cantidad-agregada').textContent) || 0;
            total += precio * cantidad;
        });
    }

    function resetAdicionales() {
        adicionales.forEach(adicional => {
            adicional.querySelector('.cantidad-agregada').textContent = '0';
        });
    }

    function actualizarTotal() {
        totalAmountSpan.textContent = total.toFixed(2);
    }
});
