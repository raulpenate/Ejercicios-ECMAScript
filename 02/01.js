import { leer } from "./helper/helper.js"

async function one () {
    const numero = await leer("Ingrese un número: ")
    
    console.log(`El numero es ${numero == 0 ? "cero" : numero > 0 ? 'positivo' : 'negativo'}`);
}

export { one }