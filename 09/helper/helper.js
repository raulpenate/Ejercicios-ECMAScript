const { createInterface } = require('readline')
const { stdin, stdout } =  require('process')

const rl = createInterface({ input: stdin, output: stdout })

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

module.exports = { leer, cerrar }