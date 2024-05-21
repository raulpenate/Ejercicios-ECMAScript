function dividir(a, b) {
    return new Promise((resolve, reject) => {
        if (b == 0) {
            resolve(`No se puede divir ${a} entre ${b}`)
        } else {
            const total = a / b
            reject(`El total es ${total}`)
        }
    })

}

(() => {
    dividir(100, 10)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.error(err)
        })

    dividir(0, 10)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.error(err)
        })

    dividir(100, 0)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.error(err)
        })
})()    