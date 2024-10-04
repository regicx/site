let btn = document.getElementById('bb');

function mostra() {
    
}

let listaProdutos = document.getElementsByClassName("produtos2");

listaProdutos[0].addEventListener('click', addProdutoCarrinho);

function addProdutoCarrinho(){
    let precoTexto = listaProdutos[0].getElementsByTagName('p').innerText;
    let precoNumero = precoTexto.slice(' ');

    document.getElementById('carrinho_total').innerText += precoNumero;
}
