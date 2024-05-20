import { leer, cerrar } from "./helper/helper.js"

(async function() {
    const nombre = await leer("Ingrese su nombre:")
    const apellido = await leer("Ingrese su apellido:")
    
    console.log(`Su nombre es ${nombre} ${apellido}`);
    cerrar()
})();