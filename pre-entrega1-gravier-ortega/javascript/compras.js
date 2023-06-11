
function agregarAlCarrito(id) {
    let productos = JSON.parse(localStorage.getItem("carrito")) || [];
    productos.push(id);
    localStorage.setItem("carrito", JSON.stringify(productos));
    cargarCarrito();
}

function cargarCarrito() {
    let carrito = document.getElementById("lista-carrito");
    let total = 0;

    
    carrito.innerHTML = "";

    let productos = JSON.parse(localStorage.getItem("carrito")) || [];

    productos.forEach(function (id) {
        let producto = obtenerProducto(id);
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = producto.nombre + " - $" + producto.precio;
        carrito.appendChild(li);
        total += producto.precio;
    });

    // Mostrar el total
    let totalElemento = document.getElementById("total");
    totalElemento.textContent = total;
}


function obtenerProducto(id) {

    let productos = [
        {
            id: 1,
            nombre: "Producto 1",
            precio: 10
        },
        {
            id: 2,
            nombre: "Producto 2",
            precio: 15
        },
        {
            id: 3,
            nombre: "Producto 3",
            precio: 12
        }
    ];

    return productos.find(function (producto) {
        return producto.id === id;
    });
}


function limpiarCarrito() {
    localStorage.removeItem("carrito");
    cargarCarrito();
}


function comprar() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length > 0) {
    limpiarCarrito();
        alert("¡Compra exitosa!");
    } else {
        // Mostrar alerta de carrito vacío
        alert("El carrito está vacío. Agrega productos antes de comprar.");
    }
}
