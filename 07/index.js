import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { agregarNota, eliminarNota, listarNotas, leerNota } from './helpers/notas.js';

yargs(hideBin(process.argv))
    .command({
        command: 'agregar',
        describe: 'Agregar una nueva nota',
        builder: {
            title: {
                describe: 'Título de la nota',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Cuerpo de la nota',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            agregarNota(argv.title, argv.body);
        }
    })
    .command({
        command: 'eliminar',
        describe: 'Eliminar una nota',
        builder: {
            title: {
                describe: 'Título de la nota',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            eliminarNota(argv.title);
        }
    })
    .command({
        command: 'leer',
        describe: 'Leer una nota',
        builder: {
            title: {
                describe: 'Título de la nota',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            leerNota(argv.title);
        }
    })
    .help()
    .parse();