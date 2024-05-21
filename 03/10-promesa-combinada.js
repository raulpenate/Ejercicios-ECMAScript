function holaMundo(){
    return new Promise((resolve) => {
        resolve('Hola mundo!')
    })
}

function saludo(nombre){
    return new Promise((resolve) => {
        resolve(`Hola ${nombre}!`)
    })
}

Promise.all([holaMundo, saludo('Tomás'), saludo('Roberto')])
    .then((e) => {
        console.log(e);
    })