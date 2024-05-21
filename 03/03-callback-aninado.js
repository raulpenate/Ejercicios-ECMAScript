function resultado(resultado){
    console.log(`El total es ${resultado}`);
}

function callback(a, b, miCallback){
    let total = a * b
    miCallback(total)
}

(() => {
    callback(5, 10, resultado)
})()