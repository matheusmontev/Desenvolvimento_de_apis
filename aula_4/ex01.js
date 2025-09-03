/*Faça um programa que leia a nota de 10 alunos e
armazene os valores em um array. Por fim, imprima o array*/

//inporta o modelo readline do node.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let notas = [];
let contador = 0;

function pedirNota() {
    if (contador < 10) {
        rl.question(`Digite a nota ${contador + 1}: `, (nota) => {
            notas[contador] = Number(nota);
            contador++;
            pedirNota();
        });
    } else {
        console.log(`Array de notas: ${notas}`);
        rl.close();
    }
}

pedirNota();