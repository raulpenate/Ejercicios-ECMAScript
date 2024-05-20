import { leer, cerrar } from "./helper/helper.js"

(async () => {
    const caracteres = await leer("Ingrese texto:")
    console.log(`Ingreso ${caracteres.length} caracteres`);
    cerrar();
})()