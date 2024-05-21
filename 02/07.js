import { leer, vehiculos } from "./helper/helper.js"

const seven = async () => {
    console.log(`Categorías: \n 1-Moto\n 2-Auto\n 3-Camión\n 4-Bicicleta`);
    const categoria = await leer('Ingrese el número de la categoría: ')

    console.log(`Usted selecciono un ${vehiculos[Number(categoria)]}`);
}

export { seven }