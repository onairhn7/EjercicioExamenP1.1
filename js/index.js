function calcularDescuento() {
    // Obtener los valores de los productos
    const productos = [];
    for (let i = 1; i <= 5; i++) {
        const productoValue = parseFloat($('#producto' + i).val());
        if (isNaN(productoValue) || productoValue < 0) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ingrese un valor válido para el Producto ' + i,
            });
            return;
        }
        productos.push(productoValue);
    }

    // Calcular el subtotal y determinar el porcentaje de descuento
    const subtotal = productos.reduce((total, producto) => total + producto, 0);
    let descuentoPorcentaje = 0;

    if (subtotal >= 1000 && subtotal < 5000) {
        descuentoPorcentaje = 10;
    } else if (subtotal >= 5000 && subtotal < 9000) {
        descuentoPorcentaje = 20;
    } else if (subtotal >= 9000 && subtotal < 13000) {
        descuentoPorcentaje = 30;
    } else if (subtotal >= 13000) {
        descuentoPorcentaje = 40;
    }

    // Calcular el descuento y el total a pagar
    const descuento = (subtotal * descuentoPorcentaje) / 100;
    const totalPagar = subtotal - descuento;

    // Actualizar los campos en el formulario
    $('#subtotal').val(subtotal.toFixed(2));
    $('#descuento').val('Descuento ' + descuentoPorcentaje + '%');
    $('#total').val(totalPagar.toFixed(2));
}

function limpiarFormulario() {
    // Limpiar los campos de los productos, subtotal, descuento y total
    for (let i = 1; i <= 5; i++) {
        $('#producto' + i).val('');
    }
    $('#subtotal').val('');
    $('#descuento').val('Descuento 0%');
    $('#total').val('');
}