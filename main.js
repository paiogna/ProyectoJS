
let comprar = "";

function agregarAlCarrito (producto,stockProducto) {
    do {
        let cantidad = prompt('¿Cuántas unidades del producto queres?');
            if (cantidad<=stockProducto) {
                comprar = prompt("Estas seguro que quieres agregar "+cantidad+ " producto/s al carrito? s / n");
                    if (comprar==="s"){
                        alert("Agregaste " + cantidad + " unidades del producto " + producto + " a tu carrito");
                    }
                    else {
                        alert("Intentalo nuevamente");
                    }
                }
            else {
                alert("No tenemos stock suficiente del producto " + producto + " por el momento");
                comprar = "s";
                }    
    } while (comprar !== "s");
}
