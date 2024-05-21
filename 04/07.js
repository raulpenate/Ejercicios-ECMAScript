const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Maria", edad: 35 },
    { nombre: "Pedro", edad: 40 }
];

personas.sort((a, b) => a.edad - b.edad);

(() => {
    console.log("Personas ordenadas por edad:", personas);
})()