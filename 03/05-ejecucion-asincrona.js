const funcionAsincrona = async (saludo) => {
    await setTimeout(() => console.log(saludo), 1000)
}

(async () => {
    await funcionAsincrona('Hola mundo!')
})()