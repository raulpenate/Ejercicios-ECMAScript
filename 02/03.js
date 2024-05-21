import { leer } from "./helper/helper.js"

const three = async function() {
    const numero = await leer("Ingrese un número 1: ")
    let factorial = 1;
    for(let i = Number(numero) + 1; i--; i > 1){

        if(i == 0) break

        factorial = i * factorial 
    } 
    
    console.log(`El factorial es ${factorial}'`)
}

export { three }