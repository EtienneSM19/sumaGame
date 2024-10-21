let dificultad = 0;
let score = 0;
function selectDificult(){
    if(document.getElementById("easy").checked){
        dificultad=50;
        document.getElementById("difSelected").innerHTML="Facil";
    }
    else if(document.getElementById("medium").checked){
        dificultad=100;
        document.getElementById("difSelected").innerHTML="Medio";
    }
    else if(document.getElementById("difficult").checked){
        dificultad=150;
        document.getElementById("difSelected").innerHTML="Dificil";
    }
    else if(document.getElementById("veryDifficult").checked){
        dificultad=300;
        document.getElementById("difSelected").innerHTML="Muy Dificil";
    }
    document.getElementById("enter").setAttribute("hidden", "hidden");
    prepare();

}

function prepare(){
    let num1 = parseInt(Math.random()*dificultad+1);
    let num2 = parseInt(Math.random()*dificultad+1);
    document.getElementById("game").removeAttribute("hidden");
    document.getElementById("num1").value=num1;
    document.getElementById("num2").value=num2;
    document.getElementById("play").removeAttribute("disabled");
    document.getElementById("next").setAttribute("disabled", "disabled");
    document.getElementById("start").setAttribute("disabled", "disabled");
    document.getElementById("control").removeAttribute("hidden");
    document.getElementById("sol").style.backgroundColor = "gray";  
    document.getElementById("sol").value="";
    document.getElementById("result").value="";
    document.getElementById("result").removeAttribute("readonly");
    document.getElementById("console").innerHTML="";
    document.getElementById("points").innerHTML="Puntuación: " + score;
    document.getElementById("winOrlose").setAttribute("hidden", "hidden");
    document.getElementById("points").removeAttribute("hidden");
    document.getElementById("difSelected").removeAttribute("hidden");
    document.getElementById("gameLine").removeAttribute("hidden");
    document.getElementById("enterLine").setAttribute("hidden", "hidden");
}

function game(){
    let Puntuación = parseInt(document.getElementById("result").value);
    let solucion = parseInt(document.getElementById("num1").value) + parseInt(document.getElementById("num2").value);
    if (Puntuación==solucion){
        score++;
        document.getElementById("sol").value=solucion;
        document.getElementById("sol").style.backgroundColor = "lightgreen";
        document.getElementById("next").removeAttribute("disabled");
        document.getElementById("play").setAttribute("disabled" , "disabled");
        document.getElementById("result").setAttribute("readonly", "readonly");
        document.getElementById("winOrlose").removeAttribute("hidden");
        document.getElementById("winOrlose").innerHTML="Correcto";
        document.getElementById("winOrlose").style.color="green";
        document.getElementById("points").innerHTML="Puntuación: " + score;
    }
    else {
        document.getElementById("sol").value=solucion;
        document.getElementById("sol").style.backgroundColor = "red";
        document.getElementById("winOrlose").removeAttribute("hidden");
        document.getElementById("winOrlose").innerHTML="Perdiste";
        document.getElementById("winOrlose").style.color = "red";
        document.getElementById("points").innerHTML="Puntuación final: " + score;
        score=0;
        restart();
    }
}

function restart(){
    document.getElementById("start").removeAttribute("disabled");
    document.getElementById("play").setAttribute("disabled", "disabled");
}

function closer(){
    document.getElementById("game").setAttribute("hidden" , "hidden");
    document.getElementById("control").setAttribute("hidden" , "hidden");
    document.getElementById("enter").removeAttribute("hidden");
    document.getElementById("winOrlose").setAttribute("hidden", "hidden");
    document.getElementById("points").setAttribute("hidden", "hidden");
    document.getElementById("difSelected").setAttribute("hidden", "hidden");
    document.getElementById("enterLine").removeAttribute("hidden");
    document.getElementById("gameLine").setAttribute("hidden", "hidden");
    score=0;
}