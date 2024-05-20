import { createInterface } from 'readline'
import { stdin as input, stdout as output } from 'process'

const rl = createInterface({ input, output })

function leer(frase){
    return new Promise((resolve) => {
        rl.question(frase, (answer) => {
            resolve(answer)
        })
    })
}

function cerrar(){
    rl.close()
}

export { leer, cerrar }