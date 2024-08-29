//PARA SELECIONAR TAGS DO HTML 
//let title = document.querySelector('h1');
//title.innerHTML = 'Secret Game';

//let paragraph = document.querySelector('p');
//paragraph.innerHTML = "Choose a number between 1 and 10";

let randomNumber = generateRandomNumber();


//BOA PRATICA DE PROGRAMAÇÃO, CRIAR FUNÇÕES PARA EVITAR CÓDIGOS IGUAIS
function showTextScreen(tag, text){
    let field = document.querySelector(tag);
    showTextScreen.innerHTML = text;
}
showTextScreen('h1', "Secret Game");
showTextScreen('p', "Choose a number between 1 and 10");

//CRIAÇÃO DE UMA FUNÇÃO QUE QUANDO O BOTÃO É CLICADO APARECE UM ALERTA
function chooseVerification() {
    console.log(randomNumber);
}

function generateRandomNumber(){
   return parseInt(Math.random() * 10 + 1);

}

