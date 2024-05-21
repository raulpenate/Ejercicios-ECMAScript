import { leer } from "./helper/helper.js"

async function four() {
    const numero = await leer("Ingrese un número 1: ")
    
    console.log(`El número es ${numero % 2 == 0 ? 'Es par' : 'Es impar'}`)
}

export { four }