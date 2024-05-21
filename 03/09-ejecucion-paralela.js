function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function numeroUno(){
    await esperar(400);
    return 1;
}

async function numeroDos(){
    await esperar(100);
    return 2;
}

async function numeroTres(){
    await esperar(500);
    return 3;
}

async function calcularTotal() {
    const n1 = await numeroUno();
    const n2 = await numeroDos();a
    const n3 = await numeroTres();

    const total = n1 + n2 + n3;

    console.log(`El total es ${total}`);
}

calcularTotal();
