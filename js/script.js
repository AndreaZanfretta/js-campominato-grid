let play = document.getElementById("btn").addEventListener("click", griglia);



function griglia(){
    
    let select = document.getElementById("diff");
    let diffValue = select.options[select.selectedIndex].value;
    let gamecol = 0;
    let gamerow = 0;
    switch(diffValue){
        case "easy":
            gamecol = 100;
            gamerow = 100;
            break;
        case "hard":
            gamecol = 81;
            gamerow = 9;
            break;
        case "crazy":
            gamecol = 49;
            gamerow = 7;
            break;
    }
    let gioco = document.getElementById("gioco");
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    row.innerHTML = "";
    cols = creaColonne(gamecol, diffValue);
    row.innerHTML = cols;
    gioco.append(row);
    let click = document.querySelector(".box-easy").addEventListener("click", color);
    
}

function creaColonne(numeroColonne, diff){
    let cols = " ";
    for(i= 1; i<= numeroColonne; i++){
        cols += `
            <div class="col box-${diff}">${i}</div>
        `;
    }
    return cols;
}
function color(){
    let click = document.querySelector(".box-easy").classList.add("clicked");
}