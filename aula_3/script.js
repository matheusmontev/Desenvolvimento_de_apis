// Este código calcula o preço final de um produto aplicando desconto.
// Se o preço original for maior ou igual a R$200, o desconto é de 15%.
// Caso contrário, o desconto aplicado é de 5%.
// No final, o programa exibe no console o nome do produto,
// o preço original, o valor do desconto e o preço final com desconto.
const nome_do_produto = "banana";
let precoOriginal = 250.00;
function calcularPrecoFinal(preco) {
    let valorDesconto;
    if (preco >= 200) {
        valorDesconto = preco * 0.15;
    } else {
        valorDesconto = preco * 0.05;
    }
    return valorDesconto;
}
let precoDesconto = calcularPrecoFinal(precoOriginal);
let precoFinal = precoOriginal - precoDesconto;
console.log("Produto:", nome_do_produto,
    "\nPreço original: R$", precoOriginal,
    "\nDesconto aplicado: R$", precoDesconto,
    "\nPreço Final: R$", precoFinal
);