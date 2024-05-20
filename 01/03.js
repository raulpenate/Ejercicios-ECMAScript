import { leer, cerrar } from "./helper/helper.js"

(async function() {
    const frase = await leer('Por favor, ingresa tu nombre: ')
    console.log('Frase en mayúsculas:', frase.toUpperCase())
    cerrar()
})();