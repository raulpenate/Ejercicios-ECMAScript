import { leer, cerrar } from "./helper/helper.js"

(async () => {
    const frase = await leer('Ingrese una frase: ')
    const palabra = await leer('Ingrese palabra a reemplazar: ')
    const reemplazo = await leer('Ingrese el reemplazo: ')
    
    console.log(`Nueva frase: ${frase.replace(palabra, reemplazo)}`);
    cerrar();
})()