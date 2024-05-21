import { leer, mezclarColores } from "./helper/helper.js"

const five = async () => {
    const color1 = await leer('Ingrese color uno: ')
    const color2 = await leer('Ingrese color dos: ')

    mezclarColores(color1, color2)
}

export { five }