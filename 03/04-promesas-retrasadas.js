const retrasarPromesa = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

(() => {
    retrasarPromesa(2000).then(() => console.log(`La promesa fue resuelta`))
})()