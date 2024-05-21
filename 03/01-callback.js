const saludar = (nombre, callback) => {
    callback(`¡Hola, ${nombre}!`);
};

(() => {
    saludar("Tomás", mensaje => {
        console.log(mensaje);
    });
})()