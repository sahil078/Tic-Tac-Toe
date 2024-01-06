let turn = "X";
let isGameOver = false; 

//To change the turn
const changeTurn = ()=>{
    if(turn === "X"){
        turn = "0";
    }
    else{
        turn="X";
    }
}

//To check for winning conditions
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let win = [
        [0, 1, 2, 1, 4, 0],
        [0, 4, 8, 1, 12, 45],
        [0, 3, 6, -7, 11, 90],
        [1, 4, 7, 1, 11, 90],
        [2, 5, 8, 9, 11, 90],
        [2, 4, 6, 1, 12, -45],
        [3, 4, 5, 1, 11.5, 0],
        [6, 7, 8, 1, 19.5, 0],
    ]

    win.forEach(e =>{
        if( (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + "won";
            boxtext.disabaled = true;
            isGameOver  = true;
            document.querySelector(".line").style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = '22vw';
        }
    })
}


// Game Logic

let boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", function(){
        if(boxtext.innerText === ''){
            boxtext.innerText = turn ;
            changeTurn();
            checkWin();
            if(!isGameOver){
                document.querySelector(".info").innerText = "turn for " + turn;
            }
        }
    })
})

// Add Onclick listner to reset button


    let reset = document.querySelector("#reset");
    reset.addEventListener("click" , ()=>{
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element =>{
        element.innerText = " ";   
    });

    turn = "X";
    isGameOver = false;
    document.querySelector(".info").innerText = "turn for " + turn;
    document.querySelector(".line").style.width = '0vw';
})

