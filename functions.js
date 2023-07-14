const spaces = document.getElementsByClassName("space");
const board = document.getElementById("board")
const playingBoard = document.getElementById("board-inner")
const playingBoardBack = document.getElementById("board-back")
const playingBoardFront = document.getElementById("board-front")
const playerTurnText = document.getElementById("player-turn-text")
const replayButton = document.getElementById("replay-button")

let turn = {
    curr: 0,
    moves: 0,
    flag: 0
}

let players = {
    x:[0,0,0,0,0,0,0,0,0],
    y: [0,0,0,0,0,0,0,0,0]
}

const sum = (arr) => {
    s = 0
    for(i = 0; i < arr.length; i++){
        s += arr[i]
    }
    return s
}
const turns = (turn) => {
    let val = "lime"
    if (turn.curr === 0){
        val = "lime";
        turn.curr = 1
    }
    else{
        val = "red";
        turn.curr = 0
      }
    
      return val
}

const checkWin = (arr) => {
    let win_grid = 
    [
        arr[0] && arr[1] && arr[2],
        arr[3] && arr[4] && arr[5],
        arr[6] && arr[7] && arr[8],
        arr[0] && arr[3] && arr[6],
        arr[1] && arr[4] && arr[7],
        arr[2] && arr[5] && arr[8],
        arr[0] && arr[4] && arr[8],
        arr[6] && arr[4] && arr[2]
    ];

    return sum(win_grid)
}



for (let i = 0; i < spaces.length; i++) {



    spaces[i].addEventListener("click", function() {
        if (turn.curr == 0){

            this.classList.add("space-taken-x");

            players.x[i] = 1
            playerTurnText.textContent = "Player O's Turn"
            playerTurnText.style.color = "red"

            board.style.borderColor = "red"
            playingBoard.style.backgroundColor = "rgb(255, 0, 0,0.15)"

            if (checkWin(players.x)){
                playingBoardFront.style.pointerEvents = "none"
                playerTurnText.textContent = "Player X wins"
                playingBoard.classList.add("draw")
                playingBoard.style.backgroundColor = "rgb(0, 255, 0, 0.15)"

                playerTurnText.classList.add("win")
                playerTurnText.style.color = "lime"
                board.style.borderColor = "lime"
                turn.flag = 1

            }
        }
        else{

            this.classList.add("space-taken-o");

            players.y[i] = 1
            playerTurnText.textContent = "Player X's Turn"
            playerTurnText.style.color = "lime"

            board.style.borderColor = "lime"
            playingBoard.style.backgroundColor = "rgb(0, 255, 0, 0.15)"

            if (checkWin(players.y)){
                playingBoardFront.style.pointerEvents = "none"
                playerTurnText.textContent = "Player O Wins !"
                playingBoard.classList.add("draw")
                playingBoard.style.backgroundColor = "rgb(255, 0, 0,0.15)"
                playerTurnText.classList.add("win")
                playerTurnText.style.color = "red"
                board.style.borderColor = "red"
                turn.flag = 1
            }
        }

        this.style.backgroundColor = turns(turn);
        turn.moves += 1;
        

        if (turn.moves == 9 && turn.flag == 0){
            playingBoard.classList.add("draw")
            playerTurnText.textContent = "It's a draw :("
            playerTurnText.style.color = "#1c538e"
            playerTurnText.classList.add("win")
        }
        
    });

  
}

replayButton.addEventListener("click", function(){
    players.x = [0,0,0,0,0,0,0,0,0]
    players.y = [0,0,0,0,0,0,0,0,0]

    for(i = 0; i < spaces.length; i++){
        spaces[i].style.backgroundColor = "aliceblue"
        spaces[i].classList.remove("space-taken-o")
        spaces[i].classList.remove("space-taken-x")
    }

    playingBoardFront.style.pointerEvents = "auto"
    playerTurnText.textContent = "Player X's Turn"
    playerTurnText.style.color = "lime"

    board.style.borderColor = "lime"
    playingBoard.style.backgroundColor = "rgb(0, 255, 0, 0.15)"

    turn.curr = 0
    turn.moves = 0
    turn.flag = 0

    playerTurnText.classList.remove("win")

    playingBoard.classList.remove("draw")

})
