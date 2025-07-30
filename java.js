document.getElementById("sorte").onclick = rodarDados;

function rodarDados(){
var numeroDado1 = Math.floor((Math.random()*6)+1);

var imagemRandomizada = "./Imagens/dice" + numeroDado1 + ".png";

var imagem1 = document.querySelectorAll(".img1")[0];

imagem1.setAttribute("src", imagemRandomizada);


var numeroDado2 = Math.floor((Math.random()*6)+1);

var imagemRandomizada2 = "./Imagens/dice" + numeroDado2 + ".png";

var imagem2 = document.querySelectorAll(".img2")[0];

imagem2.setAttribute("src", imagemRandomizada2); 


if (numeroDado1 === numeroDado2){document.querySelector("h1").innerText = "Deu empate, que pena! 😔"

} else if (numeroDado1 >= numeroDado2) {document.querySelector("h1").innerText = "Player 1 Ganhou! 😎"

} else if (numeroDado1 <= numeroDado2) {document.querySelector("h1").innerText = "Player 2 Ganhou! 😎"}

} 