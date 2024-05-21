function saludar(saludo){
    return new Promise((resolve) => {
        resolve(saludo)
    })
}

function introduccion(introduccion){
    return new Promise((resolve) => {
        resolve(introduccion)
    })
}

function despedir(despedida){
    return new Promise((resolve) => {
        resolve(despedida)
    })
}

saludar('Hola amigos!')
    .then(resolve => {
        console.log(resolve);
        return introduccion('mucho gusto en conocerlos!')
    })
    .then(resolve => {
        console.log(resolve);
        return despedir('hasta luego!')
    })
    .then(resolve => console.log(resolve))