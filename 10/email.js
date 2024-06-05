import inquirer from 'inquirer';

const pregunta = [
    {
        type: 'input',
        name: 'email',
        message: 'Ingrese su correo',
        validate: function(input){
            const validacion = input.match(
                /^[a-zA-Z0-9).+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            )
            if(validacion) return true
            return 'Por favor introduce un correo valido'
        }
    },
];

inquirer.prompt(pregunta)
    .then((respuesta) => {
        if(respuesta) console.log(`Su correo es ${respuesta.email}`);
    })
    .catch((err) => {
        console.error('Error: ', err)
    })