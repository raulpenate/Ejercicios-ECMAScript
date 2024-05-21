import { leer, meses } from "./helper/helper.js"

const six = async () => {
    const numero = await leer("Ingrese un número: ")
    
    console.log(`El mes número ${numero} es ${Number(numero) >= 1 || Number(numero) <= 12 ? meses[Number(numero)] : 'no existe'}`);
}

export { six }