const nome_do_produto = "techado mecanico";
let precoOriginal = 250.00;
let valorDesconto = 0
function calcularPrecoFinal(preco){
    if (precoOriginal >= 200) {
        precoDesconto = preco * 0.15;
    }else{
        precoDesconto = preco * 0.05;
    }
    return precoDesconto;
};
precoFinal = precoOriginal - calcularPrecoFinal(precoOriginal);
console.log("Produto: ",nome_do_produto ," \npreço original: ",precoOriginal," \npreço do desconto: R$",precoDesconto,"\nPreço Final: R$",precoFinal);