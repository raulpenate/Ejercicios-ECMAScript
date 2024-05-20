import { leer, cerrar } from "./helper/helper.js"

(async () => {
    const palabra = await leer("Ingrese una palabra: ")
    const vocales = palabra.match(/[aeiou]/gi).length

    console.log(`${palabra} tiene  ${vocales} ${vocales != 1 ? 'vocales' : 'vocal'} `);
    cerrar();
})()