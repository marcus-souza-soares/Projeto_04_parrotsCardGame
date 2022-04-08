
let listaGifs = ['imagens/bobrossparrot.gif', 'imagens/bobrossparrot.gif', 'imagens/explodyparrot.gif', 'imagens/explodyparrot.gif', 'imagens/fiestaparrot.gif', 'imagens/fiestaparrot.gif', 'imagens/metalparrot.gif', 'imagens/metalparrot.gif', 'imagens/revertitparrot.gif', 'imagens/revertitparrot.gif', 'imagens/tripletsparrot.gif', 'imagens/tripletsparrot.gif', 'imagens/unicornparrot.gif', 'imagens/unicornparrot.gif'];
let repetir = true;
let parrotsSelecionados = [];
let parrotBack;
let parrotFront;
let cont = 0;
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
// Jogo iniciado
setTimeout(jogar,200);

 function parrotClicado(elemento) {
    cont ++;
    parrotBack = document.querySelector("#"+elemento.id+" .back.face");
    parrotBack.classList.add("rodarprafrente");
    parrotFront = document.querySelector("#"+elemento.id+" .front.face");
    parrotFront.classList.add("rodarpratras");
    parrotsSelecionados.push(elemento);
    if (parrotsSelecionados.length == 2){
        if (parrotsSelecionados[0].id != parrotsSelecionados[1].id){
            setTimeout(verificar,800);
        } else {
            parrotsSelecionados.pop();
        }
    }
 }
function errar() {
    for (i = 0; i < parrotsSelecionados.length; i++){
        parrotBack = document.querySelector("#"+ parrotsSelecionados[i].id + " .back.face");
        parrotBack.classList.remove("rodarprafrente");
        parrotFront = document.querySelector("#"+ parrotsSelecionados[i].id + " .front.face");
        parrotFront.classList.remove("rodarpratras");   
    }
   
 }

 function verificar() {
    if (parrotsSelecionados[0].innerHTML !== parrotsSelecionados[1].innerHTML){
        errar();
        parrotsSelecionados = [];
    
    } else if (parrotsSelecionados[0].innerHTML === parrotsSelecionados[1].innerHTML){
        parrotsSelecionados = [];
    }
    if (document.querySelectorAll(".front.face.rodarpratras").length == qntCartas){
        alert(`Parabéns, você acertou em ${cont} passos.`);
    }
 }

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
