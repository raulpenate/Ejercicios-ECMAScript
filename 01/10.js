import { leer, cerrar } from "./helper/helper.js"

(async () => {
    const cadena = await leer("Ingrese una frase: ")
    const separateText = cadena.split(/\s+/)
    const upperFirstWord = separateText.map(e => e.charAt(0).toUpperCase() + e.slice(1))
    const uniteText = upperFirstWord.join(' ')

    console.log(`${uniteText}`);
    cerrar();
})()