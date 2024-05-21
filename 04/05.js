const numeros = [1, 2, 3, 4, 5];
const sumaPares = numeros.reduce((suma, numero) => numero % 2 === 0 ? suma + numero : suma, 0);

console.log("Suma de números pares:", sumaPares);