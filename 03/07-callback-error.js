function resultado(error, resultado){
    if(error){
        console.error(resultado);
    }else{
        console.log(resultado);
    }
}

function dividir(a, b, resultado){
    if(b == 0){
        resultado(true, `No se puede divir ${a} entre ${b}`)
    }else{
        const total = a / b
        resultado(null, `El total es ${total}`)
    }
}

(() => {
    dividir(100,50, resultado)
    dividir(0,50, resultado)
    dividir(10,0, resultado)
})()