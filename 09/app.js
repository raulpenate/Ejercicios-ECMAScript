const fs = require('fs')
const path = require('path')
const { leer, cerrar } = require('./helper/helper')

const documentos = path.join(process.env.Home || process.env.USERPROFILE, 'Documents')

(async () => {

    const carpeta = await leer('Ingrese el nombre de la carpeta a leer')
    const nuevaCarpeta = path.join(documentos, carpeta)
    // fs.rmdir(nuevaCarpeta, {recursive: true}, (err) => {
    fs.mkdir(nuevaCarpeta, {recursive: true}, (err) => {
        if(err){
            console.error('Error al ingresar la carpeta')
        }else{
            console.log('Carpeta creada exitosamente');
        }
    })

    cerrar()
})()