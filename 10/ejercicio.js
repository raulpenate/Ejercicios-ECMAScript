import inquirer from 'inquirer';
import { registro, login, verificarEdad } from "./helper/helper.js"

function verificar(userEmail, userPassword, nombre, edad) {
    inquirer.prompt(login)
        .then((respuesta) => {
            const { email, password } = respuesta
            if (userEmail == email && userPassword == password) {
                console.log(`Bienvenido ${nombre} con edad de ${edad} años`);
            } else {
                console.log('Correo o contraseña incorrecta');
            }
        })
        .catch((err) => {
            console.error('Error: ', err)
        })
}

inquirer.prompt(registro)
    .then((respuesta) => {
        const { email, password, edad, nombre } = respuesta;
        if (verificarEdad(edad)) verificar(email, password, nombre, edad)
    })
    .catch((err) => {
        console.error('Error: ', err)
    })