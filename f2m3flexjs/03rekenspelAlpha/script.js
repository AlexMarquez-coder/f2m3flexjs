let getalA,getalB,antwoord,jouwantwoord,goedFout;

const opgaveblad = document.getElementById('opgaveblad');
const input1 = document.getElementById('input1')
const execButton = document.getElementById('execButton')
const container = document.getElementById('container');

maakOpgave ();

function maakOpgave(){
    getalA = Math.floor(Math.random()*10)+1;
    getalB = Math.floor(Math.random()*10)+1;
    antwoord = getalA*getalB;
    
    opgaveblad.innerHTML = getalA + "x" + getalB;
}

execButton.addEventListener('click',checkAntwoord);

function checkAntwoord(){
    jouwantwoord = input1.value;
    if(antwoord == jouwantwoord){
        goedFout = true;
        container.style.background = "green"

    } else{ 
        goedFout = false;
        container.style.background = "red"
    }
setTimeout(wachten,2000);
}
function wachten(){
    container.style.background = "aliceblue";
    input1.value = "";
    input1.focus();
    maakOpgave()
}