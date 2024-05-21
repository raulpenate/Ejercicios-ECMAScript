const productos = [
    { nombre: "Producto1", precio: 10, cantidad: 2 },
    { nombre: "Producto2", precio: 5, cantidad: 3 },
    { nombre: "Producto3", precio: 8, cantidad: 1 }
];

const costoTotal = productos.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);

console.log("El costo total de los productos es:", costoTotal);