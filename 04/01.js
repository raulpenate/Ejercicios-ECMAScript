function contarPalabras(arr) {
    const contador = {};
    arr.forEach(cadena => {
        const palabras = cadena.split(' ');
        palabras.forEach(palabra => {
            contador[palabra] = (contador[palabra] || 0) + 1;
        });
    });
    return contador;
}

const cadenas = ["hola mundo", "hola a todos", "el mundo es tremendo"];

console.log(contarPalabras(cadenas));