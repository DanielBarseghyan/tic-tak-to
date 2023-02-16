let boxes = document.querySelectorAll(".point");
const setPleyerBox = document.querySelector(".setPlayer");
const curentPlayer = document.querySelector(".player");
const conteiner = document.querySelector(".conteiner");
const winnerBoard = document.querySelector(".winnerBoard");
const reBtn = document.querySelector(".reBtn");

// let xIcon = "fas fa-times";
// let oIcon = "far fa-circle";

let player;
let oponent;

function setPlayer(item) {
    if (item.id === "xBtn") {
        player = "fas fa-times";
        oponent = "far fa-circle";
    }
    if (item.id === "oBtn") {
        player = "far fa-circle";
        oponent = "fas fa-times";
        bot(boxes);
    }
    curentPlayer.innerHTML = `<i class="${player}"></i>`;
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].setAttribute("onclick", 'clickedBox(this)');
    }
    setPleyerBox.style.display = 'none';
    conteiner.style.display = "block";
}


function clickedBox(element) {
    element.innerHTML = `<i class="${player}"></i>`;
    element.id = player
    element.style.pointerEvents = "none";
    curentPlayer.innerHTML = `<i class="${oponent}"></i>`;
    conteiner.style.pointerEvents = "none";
    winnerIs();
    setTimeout(() => {
        bot(boxes);
    }, Math.floor(Math.random() * 3000));

}

function bot(arr) {
    let unreleasedBoxes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].childElementCount === 0) {
            unreleasedBoxes.push(arr[i]);
        }
    }

    if (unreleasedBoxes.length > 0) {
        curentPlayer.innerHTML = `<i class="${player}"></i>`;
        let randItem = unreleasedBoxes[Math.floor(Math.random() * unreleasedBoxes.length)];
        randItem.innerHTML = `<i class="${oponent}"></i>`;
        randItem.id = oponent;
        randItem.style.pointerEvents = "none";
    }
    winnerIs();
    conteiner.style.pointerEvents = "";
}
function chacker(val1, val2, val3, pla) {
    if (boxes[val1].id == pla && boxes[val2].id == pla && boxes[val3].id == pla) {
        return true;
    }
}

function winnerIs() {
    if (chacker(0, 1, 2, player) || chacker(3, 4, 5, player) || chacker(6, 7, 8, player) || chacker(0, 3, 6, player)
        || chacker(1, 4, 7, player) || chacker(2, 5, 8, player) || chacker(0, 4, 8, player) || chacker(2, 4, 6, player)) {
        conteiner.style.display = "none";
        winnerBoard.innerHTML = ` <h2>Player <i class= "${player}"></i> won! </h2>
        <button class="reBtn"onclick = "relod()" >Relode</button>`;
        winnerBoard.style.display = "block";
        return;
    }
    if (chacker(0, 1, 2, oponent) || chacker(3, 4, 5, oponent) || chacker(6, 7, 8, oponent) || chacker(0, 3, 6, oponent)
        || chacker(1, 4, 7, oponent) || chacker(2, 5, 8, oponent) || chacker(0, 4, 8, oponent) || chacker(2, 4, 6, oponent)) {
        conteiner.style.display = "none";
        winnerBoard.innerHTML = ` <h2>Player <i class= "${oponent}"></i> won! </h2>
        <button class="reBtn"onclick = "relod()" >Relode</button>`;
        winnerBoard.style.display = "block";
        return;
    }
    if (boxes[0].innerHTML != "" && boxes[1].innerHTML != "" && boxes[2].innerHTML != "" && boxes[3].innerHTML != "" && boxes[4].innerHTML != "" &&
        boxes[5].innerHTML != "" && boxes[6].innerHTML != "" && boxes[7].innerHTML != "" && boxes[8].innerHTML != "") {
        conteiner.style.display = "none";
        winnerBoard.innerHTML = `<h2>The game ended in a draw</h2>
         <button class="reBtn" onclick = "relod()" >Relode</button>`;
        winnerBoard.style.display = "block";
        return;
    }
}
function relod() {
    window.location.reload();
}