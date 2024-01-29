const board = document.getElementById("board");
const player = document.getElementById("player")
const enemy1 = document.getElementById("enemy1")
const enemy2 = document.getElementById("enemy2")
const enemy3 = document.getElementById("enemy3")


var xPlayer = 390
var playerDirection = 1

window.addEventListener('keydown', function(e) {
    console.log("hola")
    //var playerRight = xPlayer;
    if (e.key === "d") {
       xPlayer += 10;
        player.style.left = xPlayer + "px";
    }
}) 


