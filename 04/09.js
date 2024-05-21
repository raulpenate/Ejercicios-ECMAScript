const estudiantes = [
    { nombre: "Juan", grado: "10" },
    { nombre: "Maria", grado: "11" }
];

const profesores = [
    { nombre: "Pedro", materia: "Matemáticas" },
    { nombre: "Ana", materia: "Historia" }
];

const comunidadEducativa = [...estudiantes, ...profesores];

(() => {
    console.log("Comunidad educativa:", comunidadEducativa);
})()