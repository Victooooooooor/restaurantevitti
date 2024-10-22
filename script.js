const footerbotao = document.getElementById("footer-botao")
const menu = document.getElementById("menu")
const itensCarrinho = document.getElementById("itens-carrinho")
const telapedido = document.getElementById("tela-pedido")
const fechar = document.getElementById("fechar-pedido")

//Abrir tela de pedido
footerbotao.addEventListener("click", function() {
    atualizarCarrinho();
    telapedido.style.display = "flex"
})

//Botao de fechar tela de pedido
fechar.addEventListener("click", function() {
    telapedido.style.display = "none"
})

//Fechar tela de pedido ao clicar fora da tela
telapedido.addEventListener("click", function(event){
    if(event.target === telapedido){
        telapedido.style.display = "none"
    }
})

menu.addEventListener("click", function(event){
    let botaoParente = event.target.closest(".Botão")
    if (botaoParente){
        const nome = botaoParente.getAttribute("data-nome")
        const preço = parseFloat(botaoParente.getAttribute("data-preço"))
        adicionarNoCarrinho(nome, preço)
    }
})

function atualizarCarrinho(){
    itensCarrinho.innerHTML = "";
    let total = 0;
}

