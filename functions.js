const spaces = document.getElementsByClassName("space");

let turn = {
    curr: 0,
    moves: 0
}

let players = {
    x:[],
    y: []
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



for (let i = 0; i < spaces.length; i++) {
  spaces[i].addEventListener("click", function() {
        this.style.backgroundColor = turns(turn);
        this.style.pointerEvents = "none";
        this.classList.add("space-taken");
        turn.moves += 1;
        if (turn.moves == 9){
            alert("Draw")
        }
  });
}


