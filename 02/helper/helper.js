import { createInterface } from 'readline'
import { stdin as input, stdout as output } from 'process'
import { one } from '../01.js'
import { two } from '../02.js'
import { three } from '../03.js'
import { four } from '../04.js'
import { five } from '../05.js'
import { six } from '../06.js'
import { seven } from '../07.js'

const rl = createInterface({ input, output })

function leer(frase) {
    return new Promise((resolve) => {
        rl.question(frase, (answer) => {
            resolve(answer)
        })
    })
}

function cerrar() {
    rl.close()
}

function mezclarColores(color1, color2) {
    if ((color1 === "azul" && color2 === "amarillo") || (color1 === "amarillo" && color2 === "azul")) {
         console.log("verde");
    } else if ((color1 === "azul" && color2 === "rojo") || (color1 === "rojo" && color2 === "azul")) {
        console.log("morado");
    } else if ((color1 === "rojo" && color2 === "amarillo") || (color1 === "amarillo" && color2 === "rojo")) {
        console.log("naranja");
    } else {
        console.log("Combinación de colores no válida");
    }
}

const meses = {
    1: 'enero',
    2: 'febrero',
    3: 'marzo',
    4: 'abril',
    5: 'mayo',
    6: 'junio',
    7: 'julio',
    8: 'agosto',
    9: 'septiembre',
    10: 'octubre',
    11: 'noviembre',
    12: 'diciembre'
}

const vehiculos = {
    1: 'Motocicleta',
    2: 'Automóvil',
    3: 'Camión',
    4: 'Bicicleta',
}

const exercises  = [one, two, three, four, five, six, seven]

let message = 'Ejercicios:\n';
exercises.forEach((_, i) => {
    message += ` - ${i + 1}\n`;
});
message += ' - salir\n';

export { leer, cerrar, mezclarColores, meses, vehiculos, exercises, message }