
let listaGifs = ['imagens/bobrossparrot.gif', 'imagens/bobrossparrot.gif', 'imagens/explodyparrot.gif', 'imagens/explodyparrot.gif', 'imagens/fiestaparrot.gif', 'imagens/fiestaparrot.gif', 'imagens/metalparrot.gif', 'imagens/metalparrot.gif', 'imagens/revertitparrot.gif', 'imagens/revertitparrot.gif', 'imagens/tripletsparrot.gif', 'imagens/tripletsparrot.gif', 'imagens/unicornparrot.gif', 'imagens/unicornparrot.gif'];
let repetir = true;
let parrotsSelecionados = [];
let parrotBack;
let parrotFront;
let primeiraCarta;
let segundaCarta;
let cont = 0;
let contador = 0;
let myinterval;
let click = 0;
//QUANTIDADE DE JOGADAS
let qntCartas = Number(prompt("Com quantas cartas quer jogar. Escolher entre 4 a 14 cartas!"));

//definido se será possível jogar...
while (
    isNaN(qtdCartas) ||
    qtdCartas < 4 ||
    qtdCartas > 14 ||
    qtdCartas % 2 === 1
  ) {
    qtdCartas = parseInt(prompt("Com quantas cartas você quer jogar?"));
}

function contar() {
    document.querySelector(".contador .segundos").innerHTML = contador;
    myinterval = setInterval(incrementar,1000);
    myinterval;

}
function incrementar() {
    contador ++;
    document.querySelector(".contador .segundos").innerHTML = contador;
}


// Jogo iniciado
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
setTimeout(jogar,200);

 function parrotClicado(elemento) {
    if (elemento === undefined && cont === 0){
        contar();
    }

    if (parrotBack.classList.contains("rodarprafrente") || segundaCarta != undefined){
        return;
    }

    cont ++;

    parrotBack = document.querySelector("#"+elemento.id+" .back.face");
    parrotBack.classList.add("rodarprafrente");
    parrotFront = document.querySelector("#"+elemento.id+" .front.face");
    parrotFront.classList.add("rodarpratras");

    if (primeiraCarta === undefined) {
        primeiraCarta = elemento;
    } else {
        segundaCarta = elemento;
        if (primeiraCarta.innerHTML == segundaCarta.innerHTML){
            verificar();
        } else {
            setTimeout(errar,1000);
        }
    }

    // if (click < 2){
        
    //     click ++;
    //     parrotBack = document.querySelector("#"+elemento.id+" .back.face");
    //     parrotBack.classList.add("rodarprafrente");
    //     parrotFront = document.querySelector("#"+elemento.id+" .front.face");
    //     parrotFront.classList.add("rodarpratras");
    //     parrotsSelecionados.push(elemento);
    // } else {
    //     click = 0;
    // }
    // if (parrotsSelecionados.length == 2){
    //     if (parrotsSelecionados[0].id != parrotsSelecionados[1].id){
    //         setTimeout(errar,1000);
    //     }
    // }
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

    if (document.querySelectorAll(".front.face.rodarpratras").length == qntCartas){
        alert(`Parabéns, você acertou em ${cont} passos e ${contador} segundos!`);
        clearInterval(myinterval);
    }
    parrotsSelecionados = [];
 }

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}

//funcao do contador 




