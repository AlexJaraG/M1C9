console.log("Entro index.js");

const btnBlue = document.getElementById('btnBlue');

function clickBtnAzul(){
    console.log("click en el boton azul");
}

function overBtnBlue(){
    console.log("Entro en over");
}

function changeBackColorPage(color){
    document.body.style.background = color;
}

btnBlue.addEventListener("click", () =>{
    changeBackColorPage("blue");
});

btnBlue.addEventListener("mouseover", overBtnBlue);