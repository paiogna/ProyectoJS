let carrito = [];
// if (localStorage.getItem("carrito") == null) {
//     carrito = [];
// } else {
//     const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
//     carrito = carritoStorage;
// }

const carritoStorage = JSON.parse(localStorage.getItem("carrito"))
localStorage.getItem("carrito") == null ? carrito = [] : carrito = carritoStorage


let comprar = "";

let totalAPagar = [];
let total1 = 0;

if (localStorage.getItem("totalAPagar") == null) {
    total1 = 0;
    totalAPagar = [];
} else {
    const totalStorage = JSON.parse(localStorage.getItem("totalAPagar"));
    totalAPagar = totalStorage;
    const totalStorageRed = totalAPagar.reduce((acumulador, elemento) => acumulador + elemento, 0);
    total1 = totalStorageRed;
}


function agregarAlCarrito (producto, stock, precio, id) {
    console.log(producto);
    const cantidad = document.getElementById("cantidad"+id).value;
    console.log(cantidad);
    console.log(stock);
    if (cantidad<=stock) {
        //alert("Agregaste " + cantidad + " unidades del producto " + producto + " a tu carrito por $" + precio*cantidad);
            function Productos (cantidadP, tituloP, precioP) {
                this.cantidad = cantidadP;     
                this.titulo = tituloP;
                this.precio = precioP;
                }
            const productO = new Productos (cantidad, producto, precio);
            //console.log(productO);
            carrito.push(productO);
            //console.log(carrito);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            totalAPagar.push(precio*cantidad);
            localStorage.setItem("totalAPagar", JSON.stringify(totalAPagar));
            //console.log(totalAPagar);
            const total = totalAPagar.reduce((acumulador, elemento) => acumulador + elemento, 0);
            return total1 = total;
    } else {
            alert("No tenemos stock suficiente del producto " + producto + " por el momento");
        }
}    

const productos = [
    { id: 1, titulo: "Crema nutritiva", precio: 900, stock:2, imagen: 'imagen/crema.jpg' },
    { id: 2, titulo: "Serum amarillo", precio: 1500, stock:0, imagen: 'imagen/serumamarillo.jpg' },
    { id: 3, titulo: "Serum floral", precio: 1700, stock:9, imagen: 'imagen/serumflores.jpg'},
    { id: 4, titulo: "Herramientas faciales", precio: 2000, stock: 5, imagen: 'imagen/accesorios.jpg' },
    { id: 5, titulo: "Crema de rosas", precio: 1000, stock: 4,  imagen: 'imagen/crema-rosa.jpg'},
    { id: 6, titulo: "Crema de lavanda", precio: 1100, stock: 7, imagen:'imagen/crema-violeta.jpg'},
    { id: 7, titulo: "Crema exfoliante", precio: 1000, stock: 8, imagen: 'imagen/exfoliante.jpg'},
    { id: 8, titulo: "Crema corporal", precio: 1500, stock: 4, imagen: 'imagen/crema-cuerpo.jpg' },
];

const prueba = document.querySelector('.tarjeta')

productos.forEach (element => {
    let card = document.createElement('div')
    card.id = element.id;
    card.style = "width: 18rem;"
    card.innerHTML = `
    <img class="card-img-top" src="${element.imagen}" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${element.titulo}</h5>
        <p class="card-text">$${element.precio}</p>
        <p class="card-text">Stock:${element.stock}</p>
        <label class="" for="">Cantidad:</label>
        <input class="cantidad" type="text" name="" id="cantidad${element.id}"></input>
        <button onclick="agregarAlCarrito('${element.titulo}','${element.stock}', '${element.precio}','${element.id}')">Agregar al carrito</button>
    </div>`
    prueba.appendChild(card);
});


const cart = document.querySelector('.txtCarrito')
const totalCart = document.querySelector('.totalCart')
const cerrarCart = document.querySelector('.cerrarCart')

function cerrarCarts () {
    totalCart.remove();
    cart.remove();
    cerrarCart.remove();
}


function carritoFinal () {
    carrito.forEach (element => {
        let cartProd = document.createElement('div')
        cartProd.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${element.titulo}, precio $${element.precio}, Cantidad: ${element.cantidad}</h5> 
        </div>`
        cart.appendChild(cartProd);
    });
    totalCart.innerHTML = "El total a pagar es $ " + total1;
    cerrarCart.innerHTML = `<button onclick="cerrarCarts()">Cerrar carrito</button>`
}
