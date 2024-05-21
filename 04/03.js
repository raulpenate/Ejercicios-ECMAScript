function filtrarPersonas(personas, ciudad) {
    return personas.filter(persona => persona.edad > 30 && persona.ciudad === ciudad);
}

const personas = [
    { nombre: "Juan", edad: 25, ciudad: "Lima" },
    { nombre: "Maria", edad: 35, ciudad: "Lima" },
    { nombre: "Pedro", edad: 40, ciudad: "Arequipa" }
];

console.log(filtrarPersonas(personas, "Lima"));