import { leer } from "./helper/helper.js"

const two = async () => {
    const numeroUno = await leer("Ingrese un número 1: ")
    const numeroDos = await leer("Ingrese un número 2: ")
    const numeroTres = await leer("Ingrese un número 3: ")
    const order = [numeroUno, numeroDos, numeroTres].sort((a,b) => b - a)

    console.log(`El número mayor es ${order[0]}`);
}

export { two }