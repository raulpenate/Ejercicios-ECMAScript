function buscarObjetoPorNombre(arr, nombre) {
    return arr.find(objeto => objeto.nombre === nombre);
}

const personas = [
    { nombre: "Juan", edad: 25, genero: "masculino" },
    { nombre: "Maria", edad: 35, genero: "femenino" },
    { nombre: "Pedro", edad: 40, genero: "masculino" }
];

console.log(buscarObjetoPorNombre(personas, "Maria"));