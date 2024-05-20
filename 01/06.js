import { leer, cerrar } from "./helper/helper.js"

(async () => {
    const frase = await leer("Ingrese una frase: ")
    const arr = frase.split(/\s+/)
    console.log(`Hay ${arr.length} ${arr.length != 1 ? 'palabra' : 'palabras'}`);

    cerrar();
})()