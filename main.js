const carrito = [];
let comprar = "";
const totalAPagar = [];
let total1 = 0;


function agregarAlCarrito (producto,stockProducto, precio) {
    do {
        let cantidad = prompt('¿Cuántas unidades del producto queres?');
            if (cantidad<=stockProducto) {
                comprar = prompt("Estas seguro que quieres agregar "+cantidad+ " producto/s al carrito? s / n");
                    if (comprar==="s"){
                        alert("Agregaste " + cantidad + " unidades del producto " + producto + " a tu carrito");
                        const productos =
                            {nombre: producto, cantidad: cantidad, precio: precio};
                        carrito.push(productos.cantidad, productos.nombre, productos.precio);
                        console.log(carrito);
                        totalAPagar.push(productos.precio*cantidad);
                        console.log(totalAPagar);
                        const total = totalAPagar.reduce((acumulador, elemento) => acumulador + elemento, 0);
                        return total1 = total;
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

function carritoFinal () {
    alert("Tienes los siguientes productos agregados a tu carrito: \r" + carrito.join("\r") + " \r Total a pagar: " + total1);
}

