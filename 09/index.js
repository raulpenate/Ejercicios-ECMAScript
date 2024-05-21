const fs = require('fs')

const ruta = "/home/raulpenate/Documents/Ejercicios-backend/09/archivo.txt"

fs.readFile(ruta, 'utf-8', (err, data) => {
    if(err){
        console.error('Error al leer el archivo', err)
    }else{
        console.log('El archivo fue leido', data);
    }
})

// const archivo = 'archivo.txt'

// const contenidoAgrego = '\n Este es un contenido agregado'

// fs.appendFile(archivo, contenidoAgrego, (err) => {
//     if(err){
//         console.error('Error al agregar el contenido')
//     }else{
//         console.log('Contenido agregado');
//     }
// })