import { leer, cerrar } from "./helper/helper.js"

(async () => {
    const cadena = await leer("Ingrese texto: ")
    const separateText = cadena.split('')
    const reverseText = separateText.reverse()
    const uniteText = reverseText.join('')

    console.log(`${uniteText}`);
    cerrar();
})()