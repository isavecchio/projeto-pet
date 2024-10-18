/*
OBJETIVO - quando clicar no cachorro da listagem temos que esconder o cartão do cachorro aberto e mostrar o cartão correspondente ao que foi selecionado na listagem
    PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de cachorros
    PASSO 2 - Identificar o evento de clique no elemento da listagem
    PASSO 3 - remover a classe aberto só do cartão que tá aberto
    PASSO 4 - ao clicar em um cachorro da listagem pegamos o id desse cachorro pra saber qual cartão abrir
    PASSO 5 - remover a classe ativo que marca o cachorro selecionado na listagem
    PASSO 6 - adicinar a classe ativo no cachorro selecionado na listagem
*/

//PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de cachorros
const listaSelecaoCachorros = document.querySelectorAll(".cachorro");

listaSelecaoCachorros.forEach(cachorro => {
    cachorro.addEventListener("click", () => {
        esconderCartaoCachorro();

        const idCachorroSelecionado = mostrarCartaoCachorroSelecionado(cachorro);

        desativarCachorroNaListagem();
        ativarCachorroSelecionadoNaListagem(idCachorroSelecionado);
    })
})

function ativarCachorroSelecionadoNaListagem(idCachorroSelecionado) {
    const cachorroSelecionadoNaListagem = document.getElementById(idCachorroSelecionado);
    cachorroSelecionadoNaListagem.classList.add("ativo");
}

function desativarCachorroNaListagem() {
    const cachorroAtivoNaListagem = document.querySelector(".ativo");
    cachorroAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoCachorroSelecionado(cachorro) {
    const idCachorroSelecionado = cachorro.attributes.id.value;
    const idDoCartaoCachorroParaAbrir = "cartao-" + idCachorroSelecionado;
    const cartaoCachorroParaAbrir = document.
        getElementById(idDoCartaoCachorroParaAbrir);
    cartaoCachorroParaAbrir.classList.add("aberto");
    return idCachorroSelecionado;
}

function esconderCartaoCachorro() {
    const cartaoCachorroAberto = document.querySelector(".aberto");
    cartaoCachorroAberto.classList.remove("aberto");
}
