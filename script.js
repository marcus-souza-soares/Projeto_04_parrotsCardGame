
let listaGifs = ['imagens/bobrossparrot.gif', 'imagens/bobrossparrot.gif', 'imagens/explodyparrot.gif', 'imagens/explodyparrot.gif', 'imagens/fiestaparrot.gif', 'imagens/fiestaparrot.gif', 'imagens/metalparrot.gif', 'imagens/metalparrot.gif', 'imagens/revertitparrot.gif', 'imagens/revertitparrot.gif', 'imagens/tripletsparrot.gif', 'imagens/tripletsparrot.gif', 'imagens/unicornparrot.gif', 'imagens/unicornparrot.gif'];

function parrotClicado(elemento) {
    elemento.classList.remove("front");
    elemento.classList.add("back");

}


// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}


function jogar() {
    const qntCartas = Number(prompt("Com quantas cartas quer jogar. Escolher entre 4 a 14 cartas!"));
    const cartas = document.querySelector(".cards");
    if (qntCartas < 14){
        listaGifs = listaGifs.splice(0, qntCartas);
    }
    listaGifs.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

    for (i = 0; i < qntCartas; i++) {
        cartas.innerHTML += `
    <div class="card">
        <div class="front face" onclick="parrotClicado(this)">
            <img src="imagens/front.png" alt="">
        </div>
        <div class="back face">
            <img src=${listaGifs[i]} alt="">
        </div>
    </div>`
    }
}
jogar();