import { leer, cerrar, exercises, message } from "./helper/helper.js"

(async () => {
    do {
        const opciones = await leer(`\n${message} Seleccione un ejercicio: `)

        if (opciones == 'salir') {
            break;
        }

        const valor = Number(opciones) - 1

        if(valor < 1 || valor > 7){
            console.log("Ingrese un ejercicio valido");
            continue;
        }

        await exercises[valor]()
    } while (true)
    cerrar()
})()
