// IMPORTS
import { Player } from "./player.js";
import { Obstacle } from "./obstacles.js";


// Const and variables
const ski_pista = document.querySelector("#ski_pista")
var player = new Player (390, 250, ski_pista)


// main function
function main() {
    player.addPlayer()
    var playerId = setInterval(player.move, 50)
    var enemyId = setInterval(createObstacle, 3000)
}


// Functions

function createObstacle() {
    var enemy = new Obstacle (390, 750, ski_pista, player)
    enemy.addObstacle()
}

window.addEventListener('keydown', function(e) {
 switch (e.key)  {
        case "a" || "left":
        player.direction =-1
        break
        case "d" || "right":
        player.direction = 1
        break
    }
})

window.addEventListener('keyup', function() {
    player.direction = 0
})
 
main()