import inquirer from 'inquirer'
import { type } from 'os';

const pregunta = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Digame se nombre'
    },
    {
        type: 'confirm',
        name: 'confirmacion',
        message: 'Seguro ese es el nombre?'
    },
    {
        type: 'list',
        name: 'colores',
        message: 'elija su color favorito',
        choices: ['rojo', 'verde', 'azul', 'amarillo']
    },
    {
        type: 'checkbox',
        name: 'intereses',
        message: 'elija sus interes',
        choices: ['correr', 'nadar', 'fuchibol']
    },
    {
        type: 'password',
        name: 'contra',
        message: 'Ingrese su contra',
        mask: '*'
    }
]

inquirer.prompt(pregunta)
    .then((respuesta) => {
        console.log(`Hola ${respuesta.nombre}`);
        if(respuesta.confirmacion){
            console.log(('Confirmacion exitosa'));
        }else{
            console.log('No se confirmo el nombre');
        }

        console.log(`El color eligido es ${respuesta.colores}`);
        console.log(`La contra es ${respuesta.contra}`);
        console.log(`sus intereses son ${respuesta.intereses.join(', ')}`);
    })