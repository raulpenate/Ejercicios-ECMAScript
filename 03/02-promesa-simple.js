const multiplicarPromise = (a, b) => {
    return new Promise((resolve, reject) => {
        if(typeof a !== 'number'|| typeof b !== 'number'){
            reject(new Error('Ingrese numeros'))
        }else{
            resolve(a * b)
        }
    })
}

(() => {
    multiplicarPromise(5, 10)
        .then(resultado => console.log(`El total es ${resultado}`))
        .catch(err => console.error(err))
})()