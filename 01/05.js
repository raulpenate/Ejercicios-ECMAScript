import { leer, cerrar } from "./helper/helper.js"

(async () => {
    const frase = await leer('Ingrese una frase: ')
    const inicio = await leer("Ingrese num inicio a extraer: ")
    const fin = await leer("Ingrese num fina a extraer: ")

    console.log(`La subcadena es: ${frase.substring(inicio, fin)}`);
    cerrar();
})()