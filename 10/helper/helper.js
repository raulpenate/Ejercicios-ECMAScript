
function verificarEdad(edad){
    return Number(edad) >= 18
}

const registro = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Ingrese su nombre',
    },
    {
        type: 'input',
        name: 'edad',
        message: 'Ingrese su edad',
        validate: function(edad){
            if(verificarEdad(edad)) return true 
            return 'Solo pueden registrarse mayores a 18 años'
        }
    },
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
    {
        type: 'password',
        name: 'password',
        message: 'Ingrese su contraseña',
        mask: '*'
    }
];


const login = [
    {
        type: 'input',
        name: 'email',
        message: 'Ingrese el correo registrado',
        validate: function(input){
            const validacion = input.match(
                /^[a-zA-Z0-9).+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            )
            if(validacion) return true
            return 'Por favor introduce un correo valido'
        }
    },
    {
        type: 'password',
        name: 'password',
        message: 'Ingrese su contraseña',
        mask: '*'
    }
];

export {
    registro, login, verificarEdad
}