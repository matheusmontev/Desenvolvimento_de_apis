/*
OAT1: Projeto de CRUD com Arrays
BACK-END
(5 pontos) Utilizando Array como estrutura de armazenamento dos dados, crie as funções que poderão ser reaproveitadas para implementar as APIs de um CRUD:
C - Create
R - Read
U - Update
D - Delete
ENTREGA
Publique seu back-end em algum repositório/git, conforme
exemplo abaixo que usa o PAGES do GitHub.
O que deve ser enviado é o link para acesso ao Front-End. 
*/

let pessoas = []; // Array para armazenar os dados das pessoas
let proximoId = 0; // Variável para controlar o próximo ID disponível

// Função para criar uma nova pessoa (Create)
function createPessoas (nome , idade) {
    pessoas.push({ 
    id: proximoId++,
    nome,
    idade });
    return pessoas;
}

// Função para ler todas as pessoas (Read)
function ReadPessoas(){
    return pessoas;
}

createPessoas('João', 25);
createPessoas('Maria', 30);
createPessoas('Pedro', 22);
console.log("Pessoas criadas:", pessoas);

// Função para atualizar uma pessoa pelo índice (Update)
function UpdatePessoas(id, nome, idade) {
    const pessoa = pessoas.find(x => x.id === id);
    if (pessoa) {
        pessoa.nome = nome;
        pessoa.idade = idade;
        return pessoas; 
    } else {
        return null; // Retorna null se a pessoa não for encontrada
    }
}

// Testando UPDATE
console.log("Resultado do update:", UpdatePessoas(1, 'Ana', 28));

// Função para deletar uma pessoa pelo índice (Delete)
function DeletePessoas(id) {
    const index = pessoas.findIndex(x => x.id === id);
    if (index !== -1) {
        pessoas.splice(index, 1);
        return true; // Retorna true se a pessoa foi deletada com sucesso
    } else {
        return false; // Retorna false se a pessoa não for encontrada
    }
}

// Testando DELETE
console.log("Resultado do delete:", DeletePessoas(2));
console.log("Após o delete:", pessoas);