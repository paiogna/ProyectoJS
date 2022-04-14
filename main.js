let carrito = [];

// ---- CICLO ANTES DE USAR EL OPERADOR TERNARIO ----
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
        Toastify({
            text: `Agregaste al carrito el producto ${producto} por ${cantidad} unidades`,
                style: {
                background: "pink",
                color: "black",
                }
            }).showToast();
            function Productos (cantidadP, tituloP, precioP) {
                this.cantidad = cantidadP;     
                this.titulo = tituloP;
                this.precio = precioP;
                }
            const productO = new Productos (cantidad, producto, precio);
            carrito.push(productO);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            totalAPagar.push(precio*cantidad);
            localStorage.setItem("totalAPagar", JSON.stringify(totalAPagar));
            const total = totalAPagar.reduce((acumulador, elemento) => acumulador + elemento, 0);
            return total1 = total;
    } else {
            Swal.fire({
                title: 'Atención!',
                text: 'No tenemos stock suficiente del producto seleccionado',
                imageUrl: 'imagen/logo.png',
                imageWidth: 70,
                imageHeight: 70,
                confirmButtonText: 'Aceptar',
                background: 'lavenderblush',
                width: 400,
            })
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
    <img class="card-img-top" src="${element.imagen}" alt="Card image cap" style="border-radius: 10px;">
    <div class="card-body" >
        <h5 class="card-title">${element.titulo}</h5>
        <p class="card-text">$${element.precio}</p>
        <p class="card-text">Stock:${element.stock}</p>
        <label class="" for="">Cantidad:</label>
        <input class="cantidad" type="text" name="" id="cantidad${element.id}"></input>
        <button style="border: 2px solid pink; border-radius: 10px; background-color: pink; color: black; font-size: 20px;" onclick="agregarAlCarrito('${element.titulo}','${element.stock}', '${element.precio}','${element.id}')">Agregar al carrito</button>
    </div>`
    prueba.appendChild(card);
});


const cart = document.querySelector('.txtCarrito')
const totalCart = document.querySelector('.totalCart')
const cerrarCart = document.querySelector('.cerrarCart')

const cartModal = document.querySelector('.modal-bodyProd')
const totalCartModal = document.querySelector('.totalCartModal')

const prodTabla = document.querySelector('.tbody')


function carritoFinal () {
    carrito.forEach (element => {
        // let cartProd = document.createElement('div')
        // cartProd.innerHTML = `
        // <div class="card-body">
        //     <h5 class="card-title">${element.titulo}, precio $${element.precio}, Cantidad: ${element.cantidad}</h5> 
        // </div>`
        // cartModal.appendChild(cartProd);
        let tableProd = document.createElement('tr')
        tableProd.innerHTML = `
                <td>${element.cantidad}</td>
                <td>${element.titulo}</td>
                <td>$${element.precio}</td>
            `
        prodTabla.appendChild(tableProd);
    });
    totalCartModal.innerHTML = "El total a pagar es $ " + total1;
}

                        

// ---- PRUEBA DE API RICK AND MORTY ----
// const API_URL = 'https://rickandmortyapi.com/api';
// const ENDPOINT_LISTADO_PERSONAJES = '/character';
// const PARAMS_LISTADO_PERSONAJES = '/1,2,3,4,5,6';
// const rickAndMorty = document.querySelector('.rickAndMorty')

// fetch ("https://rickandmortyapi.com/api/character/1,2,3,4,5,242")
// .then ((response) => response.json())
// .then ((data) => {
//     data.forEach (element => {
//         let card = document.createElement('div')
//         card.id = element.id;
//         card.style = "width: 18rem;"
//         card.innerHTML = `
//         <img class="card-img-top" src="${element.image}" alt="Card image cap">
//         <div class="card-body">
//         <h5 class="card-title">Nombre: ${element.name}</h5>
//         <h6 class="card-title">Status: ${element.status}</h6>
//         <h6 class="card-title">Especie: ${element.species}</h6>
//         <h6 class="card-title">Origen: ${element.origin.name}</h6>
//         </div>`
//         rickAndMorty.appendChild(card);
//     })
// })

// fetch ("https://rickandmortyapi.com/api/character/?page=13")
// .then ((response) => response.json())
// .then ((data) => {console.log(data)})

const fotosProductos2 = document.querySelector('.fotosProductos2')

fetch ('/novedades.json')
.then ((response) => response.json())
.then ((data) => {
    data.forEach (element => {
        let card = document.createElement('div')
        card.id = element.id;
        card.style = "width: 18rem;"
        card.innerHTML = `
        <img class="card-img-top" src="${element.imagen}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${element.titulo}</h5>
        </div>`
        fotosProductos2.appendChild(card);
    })
})
