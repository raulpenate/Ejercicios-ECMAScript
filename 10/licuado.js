import inquirer from 'inquirer';

const pregunta = [
    {
        type: 'checkbox',
        name: 'frutas',
        message: 'Elija sus frutas favoritas',
        choices: ['manzana', 'banana', 'uvas', 'naranja']
    },
];

const checkCombinations = (selectedFruits) => {
    const combinations = [
        { fruits: ['manzana', 'banana'], message: 'fresco' },
        { fruits: ['manzana', 'naranja'], message: 'acido' },
        { fruits: ['banana', 'naranja'], message: 'jumex' },
    ];

    combinations.forEach(combination => {
        if (combination.fruits.every(fruit => selectedFruits.includes(fruit))) {
            console.log(`Licuado ${combination.message}`);
        }
    });
};

inquirer.prompt(pregunta)
    .then((respuesta) => {
        checkCombinations(respuesta.frutas);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
