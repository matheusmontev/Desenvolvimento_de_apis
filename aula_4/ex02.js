/*
Faça um programa que crie um array de 10 posições,
leia a nota e o índice de 3 alunos e armazene os valores
das notas nos respectivos índices do array.
Por fim, imprima o array.
*/

//inporta o modelo readline do node.js
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let notas = new Array(10)
let contador = 0;

function pedirNota() {
    if (contador < 3) {
        rl.question(`Digite o índice (0-9) do aluno ${contador + 1}: `, (indice) => {
            rl.question(`Digite a nota do aluno 
                ${contador + 1}: `, (nota) => {
                notas[Number(indice)] = Number(nota);
                contador++;
                pedirNota();
            });
        });
    } else {
        console.log(`Array de notas: ${notas}`);
        rl.close();
    }
}

pedirNota();
