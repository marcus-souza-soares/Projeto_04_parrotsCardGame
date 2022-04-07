
let listaGifs = ['imagens/bobrossparrot.gif', 'imagens/bobrossparrot.gif', 'imagens/explodyparrot.gif', 'imagens/explodyparrot.gif', 'imagens/fiestaparrot.gif', 'imagens/fiestaparrot.gif', 'imagens/metalparrot.gif', 'imagens/metalparrot.gif', 'imagens/revertitparrot.gif', 'imagens/revertitparrot.gif', 'imagens/tripletsparrot.gif', 'imagens/tripletsparrot.gif', 'imagens/unicornparrot.gif', 'imagens/unicornparrot.gif'];
let repetir = true;
//QUANTIDADE DE JOGADAS
let qntCartas = Number(prompt("Com quantas cartas quer jogar. Escolher entre 4 a 14 cartas!"));

//definido se será possível jogar...
while (repetir === true){
    repetir = false;
    if (qntCartas % 2 == 1){
        repetir = true;
        qntCartas = Number(prompt("Com quantas cartas quer jogar. Escolher entre 4 a 14 cartas!"));
    } if (qntCartas < 4){
        qntCartas = Number(prompt("Com quantas cartas quer jogar. Escolher entre 4 a 14 cartas!"));
        repetir = true;
    } if (qntCartas > 14){
        qntCartas = Number(prompt("Com quantas cartas quer jogar. Escolher entre 4 a 14 cartas!"));
        repetir = true;
    }
}
 function parrotClicado(elemento) {
     if (document.querySelector("#"+elemento.id+" .back.face") !== null){
        let clicadoF = document.querySelector("#"+elemento.id+" .back.face");
        clicadoF.classList.add("rodarprafrente");
        let clicadoV = document.querySelector("#"+elemento.id+" .front.face");
        clicadoV.classList.add("rodarpratras");
     }  
     else if (document.querySelector("#"+elemento.id+" .front.face") !== null) {
        let clicado = document.querySelector("#"+elemento.id+" .front.face");
        clicado.classList.add("rodarpratras");
        let clicadoF = document.querySelector("#"+elemento.id+" .back.face");
        clicadoF.classList.add("rodarprafrente");
     }
     
 }
jogar();


// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}


function jogar() {

    const cartas = document.querySelector(".cards");
    if (qntCartas < 14){
        listaGifs = listaGifs.splice(0, qntCartas);
    }
    listaGifs.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

    for (i = 0; i < qntCartas; i++) {
        cartas.innerHTML += `
    <div class="card" id="n${i+1}" onclick="parrotClicado(this)">
        <div class="front face">
            <img src="imagens/front.png" alt="">
        </div>
        <div class="back face">
            <img src=${listaGifs[i]} alt="">
        </div>
    </div>`
    }
}
